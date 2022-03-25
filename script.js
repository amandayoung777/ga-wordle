

let chosenWord = "YARNS";
const chosenWordSplit = chosenWord.split("");
console.log(chosenWordSplit);

const input1 = document.getElementById("letter1");
console.log(input1);
// const guess = input1.value.split("");
// console.log(guess);

let newRow = 0;

//change vs input
input1.addEventListener("change", function () {
  let row = document.getElementsByClassName("row")[newRow];
  console.log(newRow);
  newRow = newRow + 1;
  console.log(newRow);
  input1.value = input1.value.toUpperCase();
  for (const index in input1.value) {
    const output = row.querySelectorAll(".outputs")[index];
    output.textContent = input1.value[index];
    console.log(output.textContent);
  }
});
//check letter against correct word
//move to next line
//repeat until 6 lines are completed

let newBox = 0;
let correctLetterCount = 0;

const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("click");
  for (let index in chosenWord) {
    // let correctWord = document.createElement('li');
    // let userGuess = document.createElement('li');
    const correctLetter = chosenWord[index];
    console.log(correctLetter);
    const userGuess = input1.value[index];
    console.log(input1);
    let box = document.getElementsByClassName("outputs")[newBox];
    console.log(newBox);
    newBox = newBox + 1;
    console.log(newBox);
    if (userGuess === correctLetter) {
      console.log("yep");
      box.classList.add("correct");
      correctLetterCount = correctLetterCount + 1;
      console.log(correctLetterCount);
    } else if (chosenWord.includes(userGuess)) {
      box.classList.add("nearly");
      console.log("almost");
    } else {
      box.classList.add("wrong");
    }
  }
  if (correctLetterCount == 5) {
    console.log("you win!");
  } else {
    correctLetterCount = 0;
    console.log("reset");
  }
});

//const rows = document.getElementsByClassName("row");
//let row = document.getElementsByClassName("row")[0];

function fillGreen() {
  const green = document.querySelectorAll(".outputs");
  // outputs.classList.add("correct")
}

//works above here

//     for (let index in guess) {
//     if (guess[index] === chosenWordSplit[index]) {
//         console.log("yes");
//         fillGreen();
//     }
// }

// for (const letter of chosenWord) {
//     console.log(letter)
// }

// for (const index in input1)

// for (let index in letters) {
//     let guess = document.getElementById("letter1");
//     output1.textContent = input1.value;
//     guess.appendChild(output1.textContent)
// }

// } else if (input.value !== "YARNS" && validWords.includes('word') === true) {
//     paragraph.textContent = "you have 5 more guesses"
// }

// }
// )
// )
// for (const guess1 of input1) {
//     const element = document.querySelector('output1');
//     element.textContent = guess1
//     console.log(guess1)
// }

//list index brackets for loop

// user inputs word and presses button

//on click, word is checked against existing list
// if word does not exist, return "word does not exist"
//if word DOES exist, for each letter:
//append to relevant box
//each letter of the word goes to to an output box in first row
//check outputs box
//for each if letter in box matches letter index of correct word, change to green. if all boxes are green, return "you guessed the word!" else
// if letter in box matches letter but not correct index, change to yellow
// if letter in box does not match at all, change to grey.

//repeat 6 more times. if after 6 tries, boxes are not all green, return "you failed to guess the word."

//check whether the
