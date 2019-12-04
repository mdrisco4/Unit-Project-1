// var questions = []
// function questionOrder() {
//     // let num = (Math.floor(Math.random() * 11);
//     while (questions.length < 11) {
//         // let num = (Math.floor(Math.random() * 11)
//         if (num !==) {}
//     }
// }




// class FilmQuestion {
    //     constructor(one, two, three, four, five, six, question) {
        //         this.one = one;
        //         this.two = two;
        //         this.three = three;
        //         this.four = four;
        //         this.five = five;
        //         this.six = six;
        //         this.question = question
        //     }
        // }
        
        //     // addMovies(movieInfo) {
            //     //     for (i = 0; i < movies.length; i++) {
                //     //         this.movies.push(movieInfo[i])
                //     //     }
                //     //     addMovies()
                //     // }
                // const firstBondFilm = new FilmQuestion("Dr. No", "Casino Royale", "For Your Eyes Only", "Thunderball", "Diamonds are Forever", "The Spy who Loved Me", "What was the first James Bond film?")
                // console.log(firstBondFilm)
                
                
                
                
                
var nums = [1,2,3,4,5,6],
    ranNums = [],
    i = nums.length,
    j = 0;
                
while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
}
                
console.log(ranNums)





 



 
movies = [
    [
        {
            title: "Dr. No",
            image: "images/doctorNo.jpeg",
            answer: "correct"
        },
        {
            title: "Casino Royale",
            image: "images/casinoRoyale.jpeg",
            answer: "incorrect"
        },
        {
            title: "For Your Eyes Only",
            image: "images/forYourEyesOnly.jpeg",
            answer: "incorrect"
        },
        {
            title: "Thunderball",
            image: "images/thunderball.jpeg",
            answer: "incorrect"
        },
        {
            title: "Diamonds are Forever",
            image: "images/diamondsAreForever.jpeg",
            answer: "incorrect"
        },
        {
            title: "The Spy who Loved Me",
            image: "images/theSpyWhoLovedMe.jpeg",
            answer: "incorrect"
        },
        {
            question: "What was the first James Bond film?"
        }
    ],
    [
        {
            title: "X-Men",
            image: "images/xMen1.jpeg",
            answer: "incorrect"
        },
        {
            title:  "X-Men 2: X-Men United",
            image: "images/xMen2.jpeg",
            answer: "incorrect"
        },
        {
            title: "The Wolverine",
            image: "images/theWolverine.jpeg",
            answer: "incorrect"
        },
        {
            title: "Deadpool",
            image: "images/deadpool.jpeg",
            answer: "incorrect"
        },
        {
            title: "X-Men: Days of Future Past",
            image: "images/daysOfFuturePast.jpeg",
            answer: "incorrect"
        },
        {
            title: "X-Men: First Class",
            image: "images/firstClass.jpeg",
            answer: "correct"
        },
        {
            question: "What X-Men movie was based in the 1960s?"
        }
    ],
    [
        {
            title: "1977",
            image: "images/c3PO.jpeg",
            answer: "correct"
        },
        {
            title: "1989",
            image: "images/lukeSkywalker.jpeg",
            answer: "incorrect"
        },
        {
            title: "1990",
            image: "images/leiaAndR2.jpeg",
            answer: "incorrect"
        },
        {
            title: "1994",
            image: "images/darthVader.jpeg",
            answer: "incorrect"
        },
        {
            title: "1983",
            image: "images/obiWan.jpeg",
            answer: "incorrect"
        },
        {
            title: "1975",
            image: "images/hanSolo.jpeg",
            answer: "incorrect"
        },
        {
            question: "What year was the first Star Wars film released?"
        }
    ],
    [
        {
            title: "The Godfather",
            image: "images/theGodfather.jpeg",
            answer: "incorrect"
        },
        {
            title: "Dances with Wolves",
            image: "images/dancesWithWolves.jpeg",
            answer: "incorrect"
        },
        {
            title: "Ben-Hur",
            image: "images/benHur.jpeg",
            answer: "correct"
        },
        {
            title: "LOTR: Return of the King",
            image: "images/returnOfTheKing.jpeg",
            answer: "incorrect"
        },
        {
            title: "Titanic",
            image: "images/titanic.jpeg",
            answer: "incorrect"
        },
        {
            title: "La La Land",
            image: "images/laLaLand.jpeg",
            answer: "incorrect"
        },
        {
            question: "What movie has won the most oscars in history?"
        }
    ],
    [
        {
            title: "Frodo",
            image: "images/frodo.jpeg",
            answer: "correct"
        },
        {
            title: "Gandalf",
            image: "images/gandalf.jpeg",
            answer: "incorrect"
        },
        {
            title: "Legolas",
            image: "images/legolas.jpeg",
            answer: "incorrect"
        },
        {
            title: "Bilbo",
            image: "images/bilbo.jpeg",
            answer: "incorrect"
        },
        {
            title: "Samwise",
            image: "images/samwise.jpeg",
            answer: "incorrect"
        },
        {
            title: "Aragorn",
            image: "images/aragorn.jpeg",
            answer: "incorrect"
        },
        {
            question: "What Lord of the Rings character was tasked with destroying the ring?"
        }
    ],
    [
        {
            title: "Katherine Hepburn",
            image: "images/katherineHepburn.jpeg",
            answer: "correct"
        },
        {
            title: "Pauly Shore",
            image: "images/paulyShore.jpeg",
            answer: "incorrect"
        },
        {
            title: "Marlon Brando",
            image: "images/marloBrando.jpeg",
            answer: "incorrect"
        },
        {
            title: "Meryl Streep",
            image: "images/merylStreep.jpeg",
            answer: "incorrect"
        },
        {
            title: "Daniel Day-Lewis",
            image: "images/danielDayLEwis.jpeg",
            answer: "incorrect"
        },
        {
            title: "Carrot Top",
            image: "images/carrotTop.jpeg",
            answer: "incorrect"
        },
        {
            question: "Who was the youngest thespian to win an Oscar?"
        }
    ]
    // ,
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ],
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ],
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ],
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:    
    //     }
    // ],
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ],
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ],
    // [   
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ],
    // [
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     },
    //     {
    //         title:
    //     }
    // ]
        ]
tv = [
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ]
        ]
books = [
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ],
        [
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            },
            {
        
            }
        ]
        ]

document.querySelector(".movies").addEventListener('click', function() {
    document.querySelector(".movies").style.visibility = "hidden";
    document.querySelector(".tv").style.visibility = "hidden";
    document.querySelector(".books").style.visibility = "hidden"
})
document.querySelector(".tv").addEventListener('click', function() {
    document.querySelector(".movies").style.visibility = "hidden";
    document.querySelector(".tv").style.visibility = "hidden";
    document.querySelector(".books").style.visibility = "hidden"
})
document.querySelector(".books").addEventListener('click', function() {
    document.querySelector(".movies").style.visibility = "hidden";
    document.querySelector(".tv").style.visibility = "hidden";
    document.querySelector(".books").style.visibility = "hidden"
})




document.querySelector(".next").addEventListener('click', function() {
    let answerGroup = (Math.floor(Math.random() * movies.length))
    // console.log(movies.length)
    // console.log(answerGroup)
    // movies.splice(answerGroup, 1)
    // console.log(movies)
    for (let i = 0; i < 6; i++) {
        document.querySelectorAll("h3")[i].innerHTML = movies[answerGroup][i].title
        document.querySelectorAll(".pics")[i].setAttribute('src', movies[answerGroup][i].image)
        document.querySelector("h2").innerHTML = movies[answerGroup][6].question
    }
    movies.splice(answerGroup, 1)
    const indexNum = answerGroup
})

console.log(document.querySelectorAll(".pics")[0])


// document.querySelector(".next").addEventListener('click', function() {
//     let answerGroup = (Math.floor(Math.random() * movies.length))
//     // console.log(movies.length)
//     // console.log(answerGroup)
//     // movies.splice(answerGroup, 1)
//     // console.log(movies)
//     for (let i = 0; i < 6; i++) {
//         document.querySelectorAll("h3")[i].innerHTML = movies[ranNums[i]].title
//         console.log(document.querySelector("h2").innerHTML = movies[ranNums[i]][6].question)
//     }
//     movies.splice(answerGroup, 1)
//     const indexNum = answerGroup
// })






// document.querySelector(".card1").addEventListener('click', function {

// })
// document.querySelector(".card2").addEventListener('click', function {
    
// })
// document.querySelector(".card3").addEventListener('click', function {
    
// })
// document.querySelector(".card4").addEventListener('click', function {
    
// })
// document.querySelector(".card5").addEventListener('click', function {
    
// })
// document.querySelector(".card6").addEventListener('click', function {
    
// })





// console.log(movies[0][0].title)
// console.log(document.querySelectorAll("h3")[3].innerHTML)
// console.log(movies[(Math.floor(Math.random() * 6))])
// array = [1,2,3,4,5]
// array.splice(2,1)
// console.log(array)
