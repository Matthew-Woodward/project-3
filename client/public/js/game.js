
var vars = {},
  gameData = {}
  attackName = '',
  curAttack = {},
  randInt = 0,
  enemyAttack = {},
  characters = [],
  defendProgressInt = null,
  defendProgressComplete = 0,
  progressInt = null,
  progressComplete = 0;

function buildVars() {

  // Data for the current step of the game
  gameData = {
    step: 1,
    hero: {},
    enemy: {}
  }

  // attack variables
  attackName = '';
  curAttack = {};
  enemyAttack = {};
 

  // Male or Female Heros
  heroes = [{
    name: "",
      img: {
        default: "https://archives.bulbagarden.net/media/upload/2/2d/Spr_C_Ethan.png",
        front: "https://archives.bulbagarden.net/media/upload/2/2d/Spr_C_Ethan.png",
        back: "https://archives.bulbagarden.net/media/upload/5/53/GSC_Ethan_Back.png"
      },
      hp: {
        current: 10,
        total: 10
      },
      answers: [{
          name: "Placeholder 1",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 2",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
    },
    {
      //CSS3
      name: "",
      img: {
        default: "https://archives.bulbagarden.net/media/upload/9/9e/Spr_C_Kris.png",
        front: "https://archives.bulbagarden.net/media/upload/9/9e/Spr_C_Kris.png",
        back: "https://archives.bulbagarden.net/media/upload/f/f3/C_Kris_Back.png"
      },
      hp: {
        current: 500,
        total: 500
      },
      answers: [{
          name: "Placeholder 1",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 2",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
  }]

  // available characters
  characters = [{
      //HTML5
      name: "HTML5",
      img: {
        default: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
        front: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
        back: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
      },
      hp: {
        current: 10,
        total: 10
      },
      answers: [{
          name: "Hypertext Markup Language",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Div Tag",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
    },
    {
      //CSS3
      name: "CSS3",
      img: {
        default: "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
        front: "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
        back: "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"
      },
      hp: {
        current: 500,
        total: 500
      },
      answers: [{
          name: "Placeholder 1",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 2",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
    },
    {
      //Javascript
      name: "JavaScript",
      img: {
        default: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
        front: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png",
        back: "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png  "
      },
      hp: {
        current: 500,
        total: 500
      },
      answers: [{
          name: "Placeholder 1",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 2",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
    },
    {
      // MySql
      name: "MySql",
      img: {
        default: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/mysql-workbench-icon.png",
        front: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/mysql-workbench-icon.png",
        back: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/mysql-workbench-icon.png",
      },
      hp: {
        current: 500,
        total: 500
      },
      answers: [{
          name: "Placeholder 1",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 2",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
    },
    {
      //React
      name: "React",
      img: {
        default: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
        front: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
        back: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
      },
      hp: {
        current: 500,
        total: 500
      },
      answers: [{
          name: "Placeholder 1",
          hp: randomNum(40, 20),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 2",
          hp: randomNum(60, 45),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 3",
          hp: randomNum(75, 60),
          avail: {
            total: 3,
            remaining: 3
          }
        },
        {
          name: "Placeholder 4",
          hp: randomNum(160, 130),
          avail: {
            total: 3,
            remaining: 3
          }
        }
      ]
    }
  ];
}

//Generates a random number.
function randomNum(max, min) {


  // minimum is optional
  if (min === undefined || min === '' || min === null) {

    min = 0;
  }

  return Math.floor(Math.random() * (max - min) + min);
}

// HP Bar stuff
function setHP() {
  $('.stadium .enemy progress').val(gameData.enemy.hp.current);
  $('.stadium .hero progress').val(gameData.hero.hp.current);
}

//Character UI Building

function charBuilder(container, character) {
  // Chooses which image to display based on the direction of the hero
  var facing = 'front';
  if (character === 'hero') {
    facing = 'back';
  }

  // build the character
  container.append('<section class="char"><img src="' + gameData[character].img[facing] + '" alt="' + gameData[character].name + '"><aside class="data"><h2>' + gameData[character].name + '</h2><div><progress max="' + gameData[character].hp.total + '"></progress><p><span>' + gameData[character].hp.current + '</span>/' + gameData[character].hp.total + '</p></div></aside></section>');
}



//Game reset

function resetGame() {
  //Setting default values with the var builder
  buildVars();

  //Clearing out the stadium (Hero and Enemey container) 
  $('.hero').empty();
  $('.enemy').empty();

  // reset
  $('.attack-list li').unbind('click');
  $('.attack-list').empty();
  $('.stadium .enemy').css({
    'padding': '0'
  });

  $('.instructions p').text('Choose a your hero!');

  // Empty Characters
  $('.characters').empty();
  $('.characters').removeClass('hidden');

  //Empty Heroes
  $('.heroes').empty();
  $('.heroes').removeClass('hidden');

  for (var i in characters) {
    // build the character list
    $(".characters").append('<div class="char-container"><img src="' + characters[i].img.default+'" alt="' + characters[i].name + '"><h2>' + characters[i].name + '</h2><span class="type ' + characters[i].type + '"></span></div>')
  }

  for (var i in heroes) {
    // build the heroes list
    $(".heroes").append('<div class="hero-container"><img src="' + heroes[i].img.default+'" alt="' + heroes[i].name + '"><h2>' + heroes[i].name + '</h2><span class="type ' + heroes[i].type + '"></span></div>')
  }
  //Once built run the character choice function
  characterChoice();
}
resetGame();
$('navbar .navbar-brand').click(function () {
  resetGame();
});


// Hero Choice


//Character choice  
function characterChoice() {
  $('.characters .char-container').click(function () {
    //Choose a character
    // Name of the choosen characters
    var name = $(this).children('h2').text()

    switch (gameData.step) {
      // switch for the current step in the game

      case 1:
        // step 1: choose your hero
        for (var i in characters) {
          if (characters[i].name === name) {
            // find and save your chosen hero's data
            gameData.hero = characters[i];
          }
        }

        

        // remove the character from the available list
        var char = $(this).remove();
        // build my hero
        charBuilder($('.stadium .hero'), 'hero');

        for (var i in gameData.hero.answers) {
          // populate attack list
          $('.attack-list').append('<li><p class="attack-name"><strong>' + gameData.hero.answers[i].name + '</strong></p><p class="attack-count"><small><span>' + gameData.hero.answers[i].avail.remaining + '</span>/' + gameData.hero.answers[i].avail.total + '</small></p></li>');
        }

        $('.attack-list');

        // update instructions
        $('.instructions p').text('Choose your enemy');
        // set health bar value
        $('.stadium .hero progress').val(gameData.hero.hp.current);


        // Changing game data to step 2
        gameData.step = 2;
        break;

      case 2:
        // step 2: choose your enemy
        for (var i in characters) {
          if (characters[i].name === name) {
            gameData.enemy = characters[i];
          }
        }

        $('.characters').click().empty();
        $('.heroes').click().empty();


        // build the enemy
        charBuilder($('.stadium .enemy'), 'enemy');
        // pad the stadium - give them some breathing room
        $('.stadium .enemy').css({
          'padding': '25px 0'
        });

        // update instructions
        $('.instructions p').text('Fight!!!');

        // hide the hero list
        $('.characters').children().slideUp('500', function () {
          $('.characters').addClass('hidden');
        });

        // update enemy health bar value
        $('.stadium .enemy progress').val(gameData.enemy.hp.current);


        // update step to attack phase and bind click events
        gameData.step = 3;
        attackList();
        break;
    }
  });
}





function attackEnemy(that, callback) {
  alert('button click')

  // name of your attack
  attackName = that.children('.attack-name').children('strong').text().toLowerCase();

  for (var i in gameData.hero.answers) {
    if (gameData.hero.answers[i].name === attackName) {
      // get chosen attack data
      curAttack = gameData.hero.answers[i];
    }
  }


  // if there are answers left
  if (curAttack.avail.remaining > 0) {
    // attack!!!
    $('.attack-list').addClass('disabled');

    $('.hero .char img').animate({
        'margin-left': '-30px',
        'margin-top': '10px'
      },
      50,
      'swing'
    );
    $('.hero .char img').animate({
        'margin-left': '30px',
        'margin-top': '-10px'
      },
      50,
      'swing'
    );
    $('.hero .char img').animate({
        'margin-left': '0px',
        'margin-top': '0px'
      },
      50,
      'swing'
    );

    // attack enemy
    gameData.enemy.hp.current -= attackMultiplier('hero', curAttack);

    if (gameData.enemy.hp.current <= 0) {
      // Enemy is dead

      clearModal();
      $('.modal-in header').append('<h1>You Enemy is slain</h1><span class="close">x</span>');
      $('.modal-in section').append('<p>Congratulations! Dare you try again?');
      $('.modal-out').slideDown('400');
      modalControls();

      gameData.enemy.hp.current = 0;
      // clear the stadium of the dead
      $('.enemy').empty();
      // show the available characters
      $('.characters').removeClass('hidden');
      $('.characters').children().slideDown('500');

      gameData.enemy = {};

      // choose enemy
      gameData.step = 2;
      // unbind click for reset
      $('.attack-list li').unbind('click');
    } else {
      // enemy is still alive (Attack!!!)

      // subtract attack
      curAttack.avail.remaining--;

      // interval to animate health bar
      progressInt = setInterval(function () {
        // get current value of health bar
        var val = $('.stadium .enemy progress').val();
        val--;

        // update health bar value
        $('.stadium .enemy progress').val(val);

        if (val === gameData.enemy.hp.current) {
          // if you've hit your target clear interval
          clearInterval(progressInt);
          progressComplete = 1;
        }
      }, 1);

      // update health numbers
      $('.stadium .enemy .data p span').text(gameData.enemy.hp.current);
      that.children('.attack-count').children('small').children('span').text(curAttack.avail.remaining);

      // wait a second to recover
      setTimeout(function () {
        // now defend that attack
        defend(that);
      }, 1000);
    }
  }
}





 
function defend(that) {
  
  // attack the hero
  gameData.hero.hp.current -= ('enemy', enemyAttack);

  if (gameData.hero.hp.current <= 0) {
    // ding dong the hero's dead

    clearModal();
    $('.modal-in header').append('<h1>Your Hero has died</h1><span class="close">x</span>');
    $('.modal-in section').append('<p>You lose, good day!');
    $('.modal-out').slideDown('400');
    modalControls()

    gameData.hero.hp.current = 0;

    resetGame();
  } else {
    // the hero lives

    // subtract attack from enemy count
    gameData.enemy.answers[randInt].avail.remaining--;

    // health bar animation
    defendProgressInt = setInterval(function () {
      // get current val of health bar
      var val = $('.stadium .hero progress').val();
      val--;

      // update health bar value
      $('.stadium .hero progress').val(val);

      if (val === gameData.hero.hp.current) {
        // stop the interval when target is attained
        clearInterval(defendProgressInt);
        defendProgressComplete = 1;
      }
    }, 1);

    // update health value
    $('.stadium .hero .data p span').text(gameData.hero.hp.current);

    setTimeout(function () {
      if (defendProgressComplete && progressComplete) {
        $('.attack-list').removeClass('disabled');
      } else {
        setHP();
        $('.attack-list').removeClass('disabled');
      }
    }, 500);
  }
}






function attackList() {
  // populate the question answers as "attacks"
  $('.attack-list').removeClass('disabled');

  $('.attack-list li').click(function () {
    // attack choice is clicked
    var doAttack = 1;

    if (gameData.step === 3) {
      // attack step - start attack sequence
      attackEnemy($(this));
    }
  });
}





// Modal Stuff






// function modalControls() {
//   $('.modal-out').click(function () {
//     $(this).slideUp('400');
//   });
//   $('.modal-in .close').click(function (e) {
//     $('.modal-out').slideUp('400');
//   });

//   $('.modal-in').click(function (e) {
//     e.stopPropagation();
//     e.preventDefault();
//   });
// }

// function clearModal() {
//   $('.modal-in header').empty();
//   $('.modal-in section').empty();
//   $('.modal-in footer').empty();
//   setHP();
// }