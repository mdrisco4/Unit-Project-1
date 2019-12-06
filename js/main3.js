const movies = [
    {
        question: "What was the first James Bond film?",
        choices: [
            {
                text: "Dr. No",
                image: "images/doctorNo.jpeg",
                isCorrect: true
            },
            {
                text: "Casino Royale",
                image: "images/casinoRoyale.jpeg",
                isCorrect: false
            },
            {
                text: "For Your Eyes Only",
                image: "images/forYourEyesOnly.jpeg",
                isCorrect: false
            },
            {
                text: "Thunderball",
                image: "images/thunderball.jpeg",
                isCorrect: false
            },
            {
                text: "Diamonds are Forever",
                image: "images/diamondsAreForever.jpeg",
                isCorrect: false
            },
            {
                text: "The Spy who Loved Me",
                image: "images/theSpyWhoLovedMe.jpeg",
                isCorrect: false
            }
        ]
        ,
        correctAnswer: "Answer: Dr. No (1962)"
    },
    {
        question: "What X-Men movie was based in the 1960s?",
        choices: [
            {
                text: "X-Men",
                image: "images/xMen1.jpeg",
                isCorrect: false
            },
            {
                text: "X-Men 2: X-Men United",
                image: "images/xMen2.jpeg",
                isCorrect: false
            },
            {
                text: "The Wolverine",
                image: "images/theWolverine.jpeg",
                isCorrect: false
            },
            {
                text: "Deadpool",
                image: "images/deadpool.jpeg",
                isCorrect: false
            },
            {
                text: "X-Men: Days of Future Past",
                image: "images/daysOfFuturePast.jpeg",
                isCorrect: false
            },
            {
                text: "X-Men: First Class",
                image: "images/firstClass.jpeg",
                isCorrect: true
            }
        ],
        correctAnswer: "Answer: X-Men: First Class"
    },
    {
        question: "What year was the first Star Wars film released?",
        choices: [
            {
                text: "1977",
                image: "images/c3PO.jpeg",
                isCorrect: true
            },
            {
                text: "1989",
                image: "images/lukeSkywalker.jpeg",
                isCorrect: false
            },
            {
                text: "1990",
                image: "images/leiaAndR2.jpeg",
                isCorrect: false
            },
            {
                text: "1994",
                image: "images/darthVader.jpeg",
                isCorrect: false
            },
            {
                text: "1983",
                image: "images/obiWan.jpeg",
                isCorrect: false
            },
            {
                text: "1975",
                image: "images/hanSolo.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: 1977"
    },
    {
        question: "What movie has won the most oscars in history?",
        choices: [
            {
                text: "The Godfather",
                image: "images/theGodfather.jpeg",
                isCorrect: false
            },
            {
                text: "Dances with Wolves",
                image: "images/dancesWithWolves.jpeg",
                isCorrect: false
            },
            {
                text: "Ben-Hur",
                image: "images/benHur.jpeg",
                isCorrect: true
            },
            {
                text: "LOTR: Return of the King",
                image: "images/returnOfTheKing.jpeg",
                isCorrect: false
            },
            {
                text: "Titanic",
                image: "images/titanic.jpeg",
                isCorrect: false
            },
            {
                text: "La La Land",
                image: "images/laLaLand.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: Ben-Hur"
    },
    {
        question: "What Lord of the Rings character was tasked with destroying the one ring?",
        choices: [
            {
                text: "Frodo",
                image: "images/frodo.jpeg",
                isCorrect: true
            },
            {
                text: "Gandalf",
                image: "images/gandalf.jpeg",
                isCorrect: false
            },
            {
                text: "Legolas",
                image: "images/legolas.jpeg",
                isCorrect: false
            },
            {
                text: "Bilbo",
                image: "images/bilbo.jpeg",
                isCorrect: false
            },
            {
                text: "Samwise",
                image: "images/samwise.jpeg",
                isCorrect: false
            },
            {
                text: "Aragorn",
                image: "images/aragorn.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: Frodo"
    },
    {
        question: "Who has won the most Oscars in history?",
        choices: [
            {
                text: "Katherine Hepburn",
                image: "images/katherineHepburn.jpeg",
                isCorrect: true
            },
            {
                text: "Pauly Shore",
                image: "images/paulyShore.jpeg",
                isCorrect: false
            },
            {
                text: "Marlon Brando",
                image: "images/marloBrando.jpeg",
                isCorrect: false
            },
            {
                text: "Meryl Streep",
                image: "images/merylStreep.jpeg",
                isCorrect: false
            },
            {
                text: "Daniel Day-Lewis",
                image: "images/danielDayLewis.jpeg",
                isCorrect: false
            },
            {
                text: "Carrot Top",
                image: "images/carrotTop.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: Katherine Hepburn"
    },
    {
        question: "GAME OVER, PLAY AGAIN? JUST HIT RESTART!",
        choices: [
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: true
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            }
        ],
        correctAnswer: "GAME OVER, PLAY AGAIN? JUST HIT RESTART!"
    }
]
const tv = [
    {
        question: "Every episode of Seinfeld contains an image or reference to what superhero?",
        choices: [
            {
                text: "Batman",
                image: "images/batman.jpeg",
                isCorrect: false
            },
            {
                text: "Spiderman",
                image: "images/spiderman.jpeg",
                isCorrect: false
            },
            {
                text: "Superman",
                image: "images/superman.jpeg",
                isCorrect: true
            },
            {
                text: "Wonder Woman",
                image: "images/wonderWoman.jpeg",
                isCorrect: false
            },
            {
                text: "The Incredible Hulk",
                image: "images/hulk.jpeg",
                isCorrect: false
            },
            {
                text: "Captain America",
                image: "images/captainAmerica.jpeg",
                isCorrect: false
            }
        ]
        ,
        correctAnswer: "Answer: Superman"
    },
    {
        question: "What year did The Simpsons first appear on television?",
        choices: [
            {
                text: "1993",
                image: "images/bart.png",
                isCorrect: false
            },
            {
                text: "1991",
                image: "images/flanders.jpeg",
                isCorrect: false
            },
            {
                text: "1995",
                image: "images/marge.png",
                isCorrect: false
            },
            {
                text: "1989",
                image: "images/burns.png",
                isCorrect: false
            },
            {
                text: "1987",
                image: "images/lisa.png",
                isCorrect: true
            },
            {
                text: "1982",
                image: "images/homer.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: 1987 (on The Tracey Ullman Show)"
    },
    {
        question: "Whow won 2.5 million dollars on Jeopardy?",
        choices: [
            {
                text: "Kenneth Starr",
                image: "images/kenStarr.jpeg",
                isCorrect: false
            },
            {
                text: "Ken Hamm",
                image: "images/kenHamm.jpeg",
                isCorrect: false
            },
            {
                text: "Kenny McCormick",
                image: "images/kenny.jpeg",
                isCorrect: false
            },
            {
                text: "Ken Jennings",
                image: "images/kenJennings.jpeg",
                isCorrect: true
            },
            {
                text: "Ken Griffey Jr.",
                image: "images/kenGriffeyJr.jpeg",
                isCorrect: false
            },
            {
                text: "A Ken Doll",
                image: "images/kenDoll.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: Ken Jennings"
    },
    {
        question: "What famed television family owned a banana stand and drove a stair car?",
        choices: [
            {
                text: "The Bradys",
                image: "images/bradys.jpeg",
                isCorrect: false
            },
            {
                text: "The Conners",
                image: "images/conners.jpeg",
                isCorrect: false
            },
            {
                text: "The Barones",
                image: "images/barones.jpeg",
                isCorrect: false
            },
            {
                text: "The Bundys",
                image: "images/bundys.jpeg",
                isCorrect: false
            },
            {
                text: "The Whites",
                image: "images/whites.jpeg",
                isCorrect: false
            },
            {
                text: "The Bluths",
                image: "images/bluths.jpeg",
                isCorrect: true
            }
        ],
        correctAnswer: "Answer: The Bluths"
    },
    {
        question: "What sitcom follows the life of Liz Lemon, a writer for `The Girlie Show?`",
        choices: [
            {
                text: "Just Shoot Me",
                image: "images/justShootMe.jpeg",
                isCorrect: false
            },
            {
                text: "30 Rock",
                image: "images/30Rock.jpeg",
                isCorrect: true
            },
            {
                text: "Lizzie McGuire",
                image: "images/lizzieMcguire.jpeg",
                isCorrect: false
            },
            {
                text: "Sister, Sister",
                image: "images/sisterSister.jpeg",
                isCorrect: false
            },
            {
                text: "The Golden girls",
                image: "images/goldenGirls.jpeg",
                isCorrect: false
            },
            {
                text: "Miami Vice",
                image: "images/miamiVice.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Answer: 30 Rock"
    },
    {
        question: "What Brooklyn Nine-Nine character went to school with main character, Peralta?",
        choices: [
            {
                text: "Terry Jeffords",
                image: "images/terryJeffords.jpeg",
                isCorrect: false
            },
            {
                text: "Amy Santiago",
                image: "images/amySantiago.jpeg",
                isCorrect: false
            },
            {
                text: "Rosa Diaz",
                image: "images/rosaDiaz.jpeg",
                isCorrect: false
            },
            {
                text: "Charles Boyle",
                image: "images/charlesBoyle.jpeg",
                isCorrect: false
            },
            {
                text: "Gina Linetti",
                image: "images/ginaLinetti.jpeg",
                isCorrect: true
            },
            {
                text: "Ray Holt",
                image: "images/rayHolt.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Gina Linetti"
    },
    {
        question: "GAME OVER, PLAY AGAIN? JUST HIT RESTART!",
        choices: [
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: true
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            }
        ],
        correctAnswer: "GAME OVER, PLAY AGAIN? JUST HIT RESTART!"
    }
]
const books = [
    {
        question: "What novel is set on a desert inhabited by giant sandworms?",
        choices: [
            {
                text: "Ender's Game",
                image: "images/endersGame.jpeg",
                isCorrect: false
            },
            {
                text: "Stranger in a Strange land",
                image: "images/strangerInAStrangeLand.jpeg",
                isCorrect: false
            },
            {
                text: "Wet Desert",
                image: "images/wetDesert.jpeg",
                isCorrect: false
            },
            {
                text: "Do Androids Dream of Electric Sleep",
                image: "images/doAndroidsDreamofElectricSheep.jpeg",
                isCorrect: false
            },
            {
                text: "The Stand",
                image: "images/theStand.jpeg",
                isCorrect: false
            },
            {
                text: "Dune",
                image: "images/dune.jpeg",
                isCorrect: true
            }
        ],
        correctAnswer: "Dune"
    },
    {
        question: "What Stephen King novel takes place mostly in the fictional Overlook Hotel?",
        choices: [
            {
                text: "Salem's Lot",
                image: "images/salemsLot.jpeg",
                isCorrect: false
            },
            {
                text: "The Shining",
                image: "images/theShining.jpeg",
                isCorrect: true
            },
            {
                text: "Doctor Sleep",
                image: "images/doctorSleep.jpeg",
                isCorrect: false
            },
            {
                text: "Pet Semetary",
                image: "images/petSemetary.jpeg",
                isCorrect: false
            },
            {
                text: "IT",
                image: "images/it.jpeg",
                isCorrect: false
            },
            {
                text: "The Green Mile",
                image: "images/theGreenMile.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "The Shining"
    },
    {
        question: "At the beginning of Lord of the Flies, which character controls the boys' only means of making fire??",
        choices: [
            {
                text: "Jack",
                image: "images/jack.png",
                isCorrect: false
            },
            {
                text: "Percival",
                image: "images/percival.png",
                isCorrect: false
            },
            {
                text: "Simon",
                image: "images/simon.png",
                isCorrect: false
            },
            {
                text: "Piggy",
                image: "images/piggy.png",
                isCorrect: true
            },
            {
                text: "Ralph",
                image: "images/ralph.png",
                isCorrect: false
            },
            {
                text: "Roger",
                image: "images/roger.png",
                isCorrect: false
            }
        ],
        correctAnswer: "Piggy"
    },
    {
        question: "What is the second novel written in C.S. Lewis' `Chronicles of Narnia` series?",
        choices: [
            {
                text: "Voyage of the Dawn Treader",
                image: "images/voyageOfTheDawnTreader.jpeg",
                isCorrect: false
            },
            {
                text: "THe Silver Chair",
                image: "images/theSilverChair.jpeg",
                isCorrect: false
            },
            {
                text: "THe Magician's Nephew",
                image: "images/theMagiciansNephew.jpeg",
                isCorrect: false
            },
            {
                text: "The Lion, The Witch and The Wardrobe",
                image: "images/lionWitch.jpeg",
                isCorrect: false
            },
            {
                text: "Prince Caspian",
                image: "images/princeCaspian.jpeg",
                isCorrect: true
            },
            {
                text: "The Horse and His Boy",
                image: "images/theHorseAndHisBoy.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Prince Caspian"
    },
    {
        question: "What dystopian novel by tells of life in a future totalitarian state dominated by `Big Brother`?",
        choices: [
            {
                text: "Animal Farm",
                image: "images/animalFarm.jpeg",
                isCorrect: false
            },
            {
                text: "Brave New World",
                image: "images/braveNewWorld.jpeg",
                isCorrect: false
            },
            {
                text: "1984",
                image: "images/1984.jpeg",
                isCorrect: true
            },
            {
                text: "Logan's Run",
                image: "images/logansRun.jpeg",
                isCorrect: false
            },
            {
                text: "The Giver",
                image: "images/theGiver.jpeg",
                isCorrect: false
            },
            {
                text: "Farenheit 451",
                image: "images/451.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "1984"
    },
    {
        question: "What literary character has been portrayed by the most actors?",
        choices: [
            {
                text: "Jack Ryan",
                image: "images/jackRyan.jpeg",
                isCorrect: false
            },
            {
                text: "Dracula",
                image: "images/dracula.jpeg",
                isCorrect: false
            },
            {
                text: "Sherlock Holmes",
                image: "images/sherlock.jpeg",
                isCorrect: true
            },
            {
                text: "Dr. Frakenstein",
                image: "images/frankenstein.jpeg",
                isCorrect: false
            },
            {
                text: "James Bond",
                image: "images/007.jpeg",
                isCorrect: false
            },
            {
                text: "Hannibal Lecter",
                image: "images/hannibal.jpeg",
                isCorrect: false
            }
        ],
        correctAnswer: "Sherlock Holmes"
    },
    {
        question: "GAME OVER, PLAY AGAIN? JUST HIT RESTART!",
        choices: [
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: true
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            },
            {
                text: "Great job!",
                image: "images/gameOver.png",
                isCorrect: false
            }
        ],
        correctAnswer: "GAME OVER, PLAY AGAIN? JUST HIT RESTART!"
    }
]

document.querySelector(".restart").addEventListener('click', function() {
        location.reload()
        });

let roundCounter = 0
let score = 0


const gridItems = document.querySelectorAll(".grid-item");
const questionText = document.querySelector(".question-text");
const getAllH3 = document.querySelectorAll("h3");
const getAllPics = document.querySelectorAll(".pics")
const getH2 = document.querySelector("h2")
const getElem = document.querySelector

function bonusMovieQuestion () {
    for (let i = 0; i < 6; i++) {
        getAllH3[i].innerHTML = movies[5].choices[i].text;
        getAllPics[i].setAttribute('src', movies[5].choices[i].image);
        getH2.innerHTML = movies[5].question;
        gridItems[i].addEventListener('click', function() {
            if (roundCounter == 6) {
                document.querySelector(".bonus").remove();
            } else {
            if (movies[5].choices[i].isCorrect == true) {
                score += 3
                getH2.innerHTML = movies[5].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128512 Correct! &#128512"
                document.querySelector(".score").innerHTML = "Score:" + " " + Math.ceil(score)
            } else {
                getH2.innerHTML = movies[5].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128577 No Luck &#128577"
                document.querySelector(".score").innerHTML = "Score:" + " " + Math.ceil(score)
            }
        }
        },{once : true})
    }
    roundCounter++
}

function bonusTVQuestion () {
    for (let i = 0; i < 6; i++) {
        getAllH3[i].innerHTML = tv[5].choices[i].text;
        getAllPics[i].setAttribute('src', tv[5].choices[i].image);
        getH2.innerHTML = tv[5].question;
        gridItems[i].addEventListener('click', function() {
            if (roundCounter == 6) {
                document.querySelector(".bonus").remove();
            } else {
            if (movies[5].choices[i].isCorrect == true) {
                score += 3
                getH2.innerHTML = tv[5].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128512 Correct! &#128512"
                document.querySelector(".score").innerHTML = "Score:" + " " + Math.ceil(score)
            } else {
                getH2.innerHTML = tv[5].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128577 No Luck &#128577"
                document.querySelector(".score").innerHTML = "Score:" + " " + Math.ceil(score)
            }
        }
        },{once : true})
    }
    roundCounter++
}

function bonusBooksQuestion () {
    for (let i = 0; i < 6; i++) {
        getAllH3[i].innerHTML = books[5].choices[i].text;
        getAllPics[i].setAttribute('src', books[5].choices[i].image);
        getH2.innerHTML = books[5].question;
        gridItems[i].addEventListener('click', function() {
            if (roundCounter == 6) {
                document.querySelector(".bonus").remove();
            } else {
            if (movies[5].choices[i].isCorrect == true) {
                score += 3
                getH2.innerHTML = books[5].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128512 Correct! &#128512"
                document.querySelector(".score").innerHTML = "Score:" + " " + Math.ceil(score)
            } else {
                getH2.innerHTML = books[5].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128577 No Luck &#128577"
                document.querySelector(".score").innerHTML = "Score:" + " " + Math.ceil(score)
            }
        }
        },{once : true})
    }
    roundCounter++
}

function renderMovieQuestion () {
    if (roundCounter == 5) {
        var btn = document.createElement('button')
        btn.className = "bonus";
        btn.innerHTML = "BONUS";
        btn.addEventListener('click', function() {
                bonusMovieQuestion()
        })
        document.querySelector(".button-container-top").appendChild(btn);
        document.querySelector(".start").remove();
    } else {
    for (let i = 0; i < 6; i++) {
        getAllH3[i].innerHTML = movies[roundCounter].choices[i].text;
        getAllPics[i].setAttribute('src', movies[roundCounter].choices[i].image);
        getH2.innerHTML = movies[roundCounter].question;
        gridItems[i].addEventListener('click', function() {
            if(movies[roundCounter - 1].choices[i].isCorrect == true) {
                score += 1/roundCounter
                getH2.innerHTML = movies[roundCounter - 1].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128512 Correct! &#128512"
                document.querySelector(".score").innerHTML = "&#11088 Score:" + " " + Math.ceil(score) + " " + " &#11088"
            } else {
                getH2.innerHTML = movies[roundCounter - 1].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128577 No Luck &#128577"
                document.querySelector(".score").innerHTML = "&#11088 Score:" + " " + Math.ceil(score) + " " + " &#11088"
            }
         },{once : true})
    }
    roundCounter++
}
}

function renderTVQuestion () {
    if (roundCounter == 5) {
        var btn = document.createElement('button')
        btn.className = "bonus";
        btn.innerHTML = "BONUS";
        btn.addEventListener('click', function() {
                bonusTVQuestion()
        })
        document.querySelector(".button-container-top").appendChild(btn);
        document.querySelector(".start").remove();
    } else {
    for (let i = 0; i < 6; i++) {
        getAllH3[i].innerHTML = tv[roundCounter].choices[i].text;
        getAllPics[i].setAttribute('src', tv[roundCounter].choices[i].image);
        getH2.innerHTML = tv[roundCounter].question;
        gridItems[i].addEventListener('click', function() {
            if(tv[roundCounter - 1].choices[i].isCorrect == true) {
                score += 1/roundCounter
                getH2.innerHTML = tv[roundCounter - 1].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128512 Correct! &#128512"
                document.querySelector(".score").innerHTML = "&#11088 Score:" + " " + Math.ceil(score) + " " + " &#11088"
            } else {
                getH2.innerHTML = tv[roundCounter - 1].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128577 No Luck &#128577"
                document.querySelector(".score").innerHTML = "&#11088 Score:" + " " + Math.ceil(score) + " " + " &#11088"
            }
        },{once : true})
    }
    roundCounter++
}
}
function renderBooksQuestion () {
    if (roundCounter == 5) {
        var btn = document.createElement('button')
        btn.className = "bonus";
        btn.innerHTML = "BONUS";
        btn.addEventListener('click', function() {
                bonusBooksQuestion()
        })
        document.querySelector(".button-container-top").appendChild(btn);
        document.querySelector(".start").remove();
    } else {
    for (let i = 0; i < 6; i++) {
        getAllH3[i].innerHTML = books[roundCounter].choices[i].text;
        getAllPics[i].setAttribute('src', books[roundCounter].choices[i].image);
        getH2.innerHTML = books[roundCounter].question;
        gridItems[i].addEventListener('click', function() {
            if(books[roundCounter - 1].choices[i].isCorrect == true) {
                score += 1/roundCounter
                getH2.innerHTML = books[roundCounter - 1].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128512 Correct! &#128512"
                document.querySelector(".score").innerHTML = "&#11088 Score:" + " " + Math.ceil(score) + " " + " &#11088"
            } else {
                getH2.innerHTML = books[roundCounter - 1].correctAnswer;
                document.querySelector(".right-wrong").innerHTML = "&#128577 No Luck &#128577"
                document.querySelector(".score").innerHTML = " &#11088 Score:" + " " + Math.ceil(score) + " " + " &#11088"
            }
        },{once : true})
    }
    roundCounter++
}
}

document.querySelector(".movies").addEventListener('click', function() {
var btn = document.createElement('button')
    btn.className = "start";
    btn.innerHTML = "NEXT";
    btn.addEventListener('click', function() {
        renderMovieQuestion()
    })
    document.querySelector(".button-container-top").appendChild(btn);
    document.querySelector(".movies").remove();
    document.querySelector(".tv").remove();
    document.querySelector(".books").remove()
})

document.querySelector(".tv").addEventListener('click', function() {
    var btn = document.createElement('button')
        btn.className = "start";
        btn.innerHTML = "NEXT";
        btn.addEventListener('click', function() {
            renderTVQuestion()
        })
        document.querySelector(".button-container-top").appendChild(btn);
        document.querySelector(".movies").remove();
        document.querySelector(".tv").remove();
        document.querySelector(".books").remove()
})

document.querySelector(".books").addEventListener('click', function() {
    var btn = document.createElement('button')
        btn.className = "start";
        btn.innerHTML = "NEXT";
        btn.addEventListener('click', function() {
                renderBooksQuestion()
        })
        document.querySelector(".button-container-top").appendChild(btn);
        document.querySelector(".movies").remove();
        document.querySelector(".tv").remove();
        document.querySelector(".books").remove()
})


///////POTENTIAL BONUS QUESTIONS IN mian.js///////