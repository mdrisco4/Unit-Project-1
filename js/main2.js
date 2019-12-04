movie = {
    question1:{
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
        correctAnswer: "Dr. No"
    },
    question2:{
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
        correctAnswer: "X-Men: First Class"
    },
    question3:{
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
        correctAnswer: "1977"
    },
    question4:{
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
        correctAnswer: "Ben-Hur"
    },
    question5:{
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
        correctAnswer: "Frodo"
    },
    question6:{
        question: "Who was the youngest thespian to win an Oscar?",
        choices: [
            {
                text: "Katherine Hepburn",
                image: "images/katherineHepburn.jpeg",
                isCorrect: true
        },
            {
                text:  "Pauly Shore",
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
                image: "images/danielDayLEwis.jpeg",
                isCorrect: false
        },
            {
                text: "Carrot Top",
                image: "images/carrotTop.jpeg",
                isCorrect: false
        }
        ],
        correctAnswer: "Katherine Hepburn"
    }
}


// let round2 = movie.question2
// let round3 = movie.question3
// let round4 = movie.question4
// let round5 = movie.question5
// let round6 = movie.question6


// function repopulate(newRound) {document.querySelector(".button-container-top").querySelector("button").addEventListener('click', function() {
//     for (let i = 0; i < 6; i++) {
//         document.querySelectorAll("h3")[i].innerHTML = newRound.choices[i].text;
//         document.querySelectorAll(".pics")[i].setAttribute('src', newRound.choices[i].image);
//         document.querySelector("h2").innerHTML = newRound.question;
//         // document.querySelectorAll(".grid-item")[i].isCorrect = newRound.choices[i].isCorrect;
//         // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
//         document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
//             if(newRound.choices[i].isCorrect == true) {
//                 alert("correct");
//             } else {
//                 alert("incorrect");
//             }
//         })
//     }
// })
// }

// document.querySelector(".movies").addEventListener('click', function() {
//     var btn = document.createElement('button')
//     btn.className = "movies";
//     btn.innerHTML = "Next Round";
//     document.querySelector(".button-container-top").appendChild(btn);
//     document.querySelector(".movies").remove();
//     document.querySelector(".tv").remove();
//     document.querySelector(".books").remove()
//     for (let i = 0; i < 6; i++) {
//         document.querySelectorAll("h3")[i].innerHTML = movie.question1.choices[i].text;
//         document.querySelectorAll(".pics")[i].setAttribute('src', movie.question1.choices[i].image);
//         document.querySelector("h2").innerHTML = movie.question1.question;
//         // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
//         document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
//             if(movie.question1.choices[i].isCorrect == true) {
//                 alert("correct");
//                 for (let i = 0; i < 6; i++) {
//                     movie.question2.choices[i].isCorrect;

//                 }
//                 repopulate(round2)
//             } else {
//                 alert("incorrect");
//                 for (let i = 0; i < 6; i++) {
//                     delete movie.question1.choices[i].isCorrect
//                 }
//                 repopulate(round2)
//             }
//         })
//     }
// })










let roundTwo = movie.question2
let roundThree = movie.question3
let roundFour = movie.question4
let roundFive = movie.question5
let roundSix = movie.question6




document.querySelector(".movies").addEventListener('click', function() {
    var btn = document.createElement('button')
    btn.className = "moviesRound2";
    btn.innerHTML = "Round 2";
    document.querySelector(".button-container-top").appendChild(btn);
    document.querySelector(".movies").remove();
    document.querySelector(".tv").remove();
    document.querySelector(".books").remove()
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll("h3")[i].innerHTML = movie.question1.choices[i].text;
        document.querySelectorAll(".pics")[i].setAttribute('src', movie.question1.choices[i].image);
        document.querySelector("h2").innerHTML = movie.question1.question;
        document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
            if(movie.question1.choices[i].isCorrect == true) {
                alert("correct");
                roundNum2()
            } else {
                alert("incorrect");
                roundNum2()
            }
        })
    }
})


function roundNum2() { 
    document.querySelector(".moviesRound2").addEventListener('click', function() {
    var btn = document.createElement('button')
    btn.className = "moviesRound3";
    btn.innerHTML = "Round 3";
    document.querySelector(".button-container-top").appendChild(btn);
        document.querySelector(".moviesRound2").remove();
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll("h3")[i].innerHTML = roundTwo.choices[i].text;
        document.querySelectorAll(".pics")[i].setAttribute('src', roundTwo.choices[i].image);
        document.querySelector("h2").innerHTML = roundTwo.question;
        document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
            if(roundTwo.choices[i].isCorrect == true) {
                alert("correct");
                roundNum3()
            } else {
                alert("incorrect");
                roundNum3()
            }
        })
    }
})
}


function roundNum3() {
    console.log("hi")
}

















/////////////






// function next(newQuestion) {
//     document.querySelector(".next").addEventListener('click', function(newQuestion) {
//     for (let i = 0; i < 6; i++) {
//         document.querySelectorAll("h3")[i].innerHTML = movie.newQuestion.choices[i].text;
//         document.querySelectorAll(".pics")[i].setAttribute('src', movie.newQuestion.choices[i].image);
//         document.querySelector("h2").innerHTML = movie.newQuestion.question;
//         // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
//         document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
//             if(movie.newQuestion.choices[i].isCorrect == true) {
//                 alert("correct");
//                 newQuestion = question2;
//                     next(question2)
//             } else {
//                 alert("incorrect");
//                 newQuestion = question2;
//                      next(question2)
//             }
//         })
//     }
// })
// }
// document.querySelector(".next").addEventListener('click', function() {
//     for (let i = 0; i < 6; i++) {
//         document.querySelectorAll("h3")[i].innerHTML = movie.question1.choices[i].text;
//         document.querySelectorAll(".pics")[i].setAttribute('src', movie.question1.choices[i].image);
//         document.querySelector("h2").innerHTML = movie.question1.question;
//         // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
//         document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
//             if(movie.question1.choices[i].isCorrect == true) {
//                 alert("correct")
//                 document.querySelector(".next").addEventListener('click', function() {
//                     for (let i = 0; i < 6; i++) {
//                         document.querySelectorAll("h3")[i].innerHTML = movie.question2.choices[i].text;
//                         document.querySelectorAll(".pics")[i].setAttribute('src', movie.question2.choices[i].image);
//                         document.querySelector("h2").innerHTML = movie.question2.question;
//                         // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
//                         document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
//                             if(movie.question2.choices[i].isCorrect == true) {
//                                 alert("correct")
//                             } else {
//                                 alert("incorrect")
//                             }
//                         })
//                     }
//                 })
                
//             } else {
//                 alert("incorrect")
//                 document.querySelector(".next").addEventListener('click', function() {
//                     for (let i = 0; i < 6; i++) {
//                         document.querySelectorAll("h3")[i].innerHTML = movie.question2.choices[i].text;
//                         document.querySelectorAll(".pics")[i].setAttribute('src', movie.question2.choices[i].image);
//                         document.querySelector("h2").innerHTML = movie.question2.question;
//                         // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
//                         document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
//                             if(movie.question2.choices[i].isCorrect == true) {
//                                 alert("correct")
//                             } else {
//                                 alert("incorrect")
//                             }
//                         })
//                     }
//                 })
                
//             }
//         })
//     }
// })
