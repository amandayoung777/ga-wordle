let chosenWord = "YARDS";
const chosenWordSplit = chosenWord.split("");
console.log(chosenWordSplit);

const input1 = document.getElementById("letter1");
console.log(input1);


let newRow = 0;


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

input1.addEventListener('input', function() {
    if (input1[index] !== 5) {
        console.log("nah")
        paragraph.textContent = "Your guess must have 5 letters";
    }
})


let newBox = 0;
let correctLetterCount = 0;

const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("click");
  for (let index in chosenWord) {
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
    window.alert("YOU WIN!");
    gameOver();
  } else if (newRow == 7 && correctLetterCount !== 5) {
    console.log("you lose");
    gameOver();
  } else {
    correctLetterCount = 0;
    console.log("reset");
  }
});

function gameOver() {
    input1.disabled = true;
    button.disabled = true;
    button.textContent = "Game Over";
}


