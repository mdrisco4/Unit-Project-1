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
            answer5: {
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
            answer4: {
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

// console.log(movie.question1.question);
// console.log(movie.question1.answers);
// console.log(movie.question1.answers.answer1);
// console.log(movie.question1.choices[1].text);
// console.log(movie.question1.answers.answer2.text)
// console.log(movie.question1.choices[1].text)
// console.log(movie.question1.choices[2].text)
// console.log(movie.question1.choices[1].image);
// console.log(movie.question1.answers.answer1.isCorrect);
// console.log(movie.question1.correctAnswer)
// console.log(movie.question1.choices[0].isCorrect)
// console.log(movie.question1)




document.querySelector(".next").addEventListener('click', function() {
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll("h3")[i].innerHTML = movie.question1.choices[i].text;
        document.querySelectorAll(".pics")[i].setAttribute('src', movie.question1.choices[i].image);
        document.querySelector("h2").innerHTML = movie.question1.question;
        // document.querySelectorAll("h6")[i].innerHTML = movie.question1.choices[i].isCorrect;
        document.querySelectorAll(".grid-item")[i].addEventListener('click', function() {
            if(movie.question1.choices[i].isCorrect == true) {
                alert("correct")
            } else {
                alert("incorrect")
            }
        })
    }
})
