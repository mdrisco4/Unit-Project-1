movie = {
    question1:{
        question: "What was the first James Bond film?",
        answers:{
            answer1: {
                text: "Dr. No",
                image: "images/doctorNo.jpeg",
                isCorrect: true
        },
            answer2: {
                text: "Casino Royale",
                image: "images/casinoRoyale.jpeg",
                isCorrect: false
        },
            answer3: {
                text: "For Your Eyes Only",
                image: "images/forYourEyesOnly.jpeg",
                isCorrect: false
        },
            answer4: {
                text: "Thunderball",
                image: "images/thunderball.jpeg",
                isCorrect: false
        },
            answer5: {
                text: "Diamonds are Forever",
                image: "images/diamondsAreForever.jpeg",
                isCorrect: false
        },
            answer6: {
                text: "The Spy who Loved Me",
                image: "images/theSpyWhoLovedMe.jpeg",
                isCorrect: false
        }
    },
        correctAnswer: "Dr. No"
    },
    question2:{
        question: "What X-Men movie was based in the 1960s?",
        answers:{
            answer1: {
                text: "X-Men",
                image: "images/xMen1.jpeg",
                isCorrect: false
        },
            answer2: {
                text: "X-Men 2: X-Men United",
                image: "images/xMen2.jpeg",
                isCorrect: false
        },
            answer3: {
                text: "The Wolverine",
                image: "images/theWolverine.jpeg",
                isCorrect: false
        },
            answer4: {
                text: "Deadpool",
                image: "images/deadpool.jpeg",
                isCorrect: false
        },
            answer5: {
                text: "X-Men: Days of Future Past",
                image: "images/daysOfFuturePast.jpeg",
                isCorrect: false
        },
            answer6: {
                text: "X-Men: First Class",
                image: "images/firstClass.jpeg",
                isCorrect: true
        }
    },
        correctAnswer: "X-Men: First Class"
    },
    question3:{
        question: "What year was the first Star Wars film released?",
        answers:{
            answer1: {
                text: "1977",
                image: "images/c3PO.jpeg",
                isCorrect: true
        },
            answer2: {
                text: "1989",
                image: "images/lukeSkywalker.jpeg",
                isCorrect: false
        },
            answer3: {
                text: "1990",
                image: "images/leiaAndR2.jpeg",
                isCorrect: false
        },
            answer4: {
                text: "1994",
                image: "images/darthVader.jpeg",
                isCorrect: false
        },
            answer5: {
                text: "1983",
                image: "images/obiWan.jpeg",
                isCorrect: false
        },
            answer6: {
                text: "1975",
                image: "images/hanSolo.jpeg",
                isCorrect: false
        }
    },
        correctAnswer: "1977"
    },
    question4:{
        question: "What movie has won the most oscars in history?",
        answers:{
            answer1: {
                text: "The Godfather",
                image: "images/theGodfather.jpeg",
                isCorrect: false
        },
            answer2: {
                text: "Dances with Wolves",
                image: "images/dancesWithWolves.jpeg",
                isCorrect: false
        },
            answer3: {
                text: "Ben-Hur",
                image: "images/benHur.jpeg",
                isCorrect: true
        },
            answer4: {
                text: "LOTR: Return of the King",
                image: "images/returnOfTheKing.jpeg",
                isCorrect: false
        },
            answer5: {
                text: "Titanic",
                image: "images/titanic.jpeg",
                isCorrect: false
        },
            answer6: {
                text: "La La Land",
                image: "images/laLaLand.jpeg",
                isCorrect: false
        }
    },
        correctAnswer: "Ben-Hur"
    },
    question5:{
        question: "What Lord of the Rings character was tasked with destroying the one ring?",
        answers:{
            answer1: {
                text: "Frodo",
                image: "images/frodo.jpeg",
                isCorrect: true
        },
            answer2: {
                text: "Gandalf",
                image: "images/gandalf.jpeg",
                isCorrect: false
        },
            answer3: {
                text: "Legolas",
                image: "images/legolas.jpeg",
                isCorrect: false
        },
            answer4: {
                text: "Bilbo",
                image: "images/bilbo.jpeg",
                isCorrect: false
        },
            answer5: {
                text: "Samwise",
                image: "images/samwise.jpeg",
                isCorrect: false
        },
            answer6: {
                text: "Aragorn",
                image: "images/aragorn.jpeg",
                isCorrect: false
        }
    },
        correctAnswer: "Frodo"
    },
    question6:{
        question: "Who was the youngest thespian to win an Oscar?",
        answers:{
            answer1: {
                text: "Katherine Hepburn",
                image: "images/katherineHepburn.jpeg",
                isCorrect: true
        },
            answer2: {
                text:  "Pauly Shore",
                image: "images/paulyShore.jpeg",
                isCorrect: false
        },
            answer3: {
                text: "Marlon Brando",
                image: "images/marloBrando.jpeg",
                isCorrect: false
        },
            answer4: {
                text: "Meryl Streep",
                image: "images/merylStreep.jpeg",
                isCorrect: false
        },
            answer5: {
                text: "Daniel Day-Lewis",
                image: "images/danielDayLEwis.jpeg",
                isCorrect: false
        },
            answer6: {
                text: "Carrot Top",
                image: "images/carrotTop.jpeg",
                isCorrect: false
        }
    },
        correctAnswer: "Katherine Hepburn"
    }
}

console.log(movie.question1.question);
console.log(movie.question1.answers);
console.log(movie.question1.answers.answer1);
console.log(movie.question1.answers.answer1.text);
console.log(movie.question1.answers.answer1.image);
console.log(movie.question1.answers.answer1.isCorrect);
console.log(movie.question1.correctAnswer)




// document.querySelector(".next").addEventListener('click', function() {
//     let answerGroup = (Math.floor(Math.random() * movies.length))
    // console.log(movies.length)
    // console.log(answerGroup)
    // movies.splice(answerGroup, 1)
    // console.log(movies)
document.querySelector(".next").addEventListener('click', function() {
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll("h3")[i].innerHTML = "movie.question1.answers.answer + [i] + .text";
        document.querySelectorAll(".pics")[i].setAttribute('src', "movie.question1.answers.answer + [i] +.image");
        document.querySelector("h2").innerHTML = movie.question1.question;
        document.querySelectorAll(".grid-item")[i].addEventListener('click', function(evt) {
            if(evt.target == true) {
                console.log("working")
            }
        })
    }
})
