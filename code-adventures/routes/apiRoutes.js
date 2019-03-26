let db = require("../models");

let passport = require("passport");

let unirest = require("unirest");


module.exports = function (app) {
    // User login routes.
    app.post(
        "/signin",
        passport.authenticate("local-signin", {
            successRedirect: "/translate",
            failureRedirect: "/"
        })
    );
    app.post(
        "/signup",
        passport.authenticate("local-signup", {
            successRedirect: "/"
        }),
        (req, res, next) => {
            if (!req.user) {
                res.json({ success: false });
            }
        }
    );
    // Get all Users
    app.get("/api/Users", function (req, res) {
        db.User.findAll({}).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

    // Create a new user
    app.post("/api/Users", function (req, res) {
        db.User.create(req.body).then(function (data) {
            res.json(data);
        });
    });

    // Delete a user by id
    app.delete("/api/Users/:id", function (req, res) {
        db.User.destroy({ where: { id: req.params.id } }).then(function (data) {
            res.json(data);
        });
    });

};
