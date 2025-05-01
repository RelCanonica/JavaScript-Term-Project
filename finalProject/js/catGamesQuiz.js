window.onload = function () {
  document.getElementById("tries").value = 0;
};

//question 1

document.getElementById("quest1").addEventListener("click", function () {
  var selectedOption = document.getElementById("jump").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments");

  // Convert score to number, default to 0 if empty or not a number
  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "Up to 6 times their height") {
      comments.value = "Good job! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Sorry, that's not correct! Please try again");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//question 2

document.getElementById("quest2").addEventListener("click", function () {
  var selectedOption = document.getElementById("toes").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments2");

  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "18") {
      comments.value = "Correct! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Oops! Not quite right. Try again.");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//question 3

document.getElementById("quest3").addEventListener("click", function () {
  var selectedOption = document.getElementById("sleep").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments3");

  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "13-16") {
      comments.value = "Correct! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Oops! Not quite right. Try again.");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//question 4

document.getElementById("quest4").addEventListener("click", function () {
  var selectedOption = document.getElementById("old").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments4");

  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "38") {
      comments.value = "Correct! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Oops! Not quite right. Try again.");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//question 5

document.getElementById("quest5").addEventListener("click", function () {
  var selectedOption = document.getElementById("carnivore").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments5");

  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "truth") {
      comments.value = "Correct! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Oops! Not quite right. Try again.");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//question 6

document.getElementById("quest6").addEventListener("click", function () {
  var selectedOption = document.getElementById("dairy").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments6");

  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "milk") {
      comments.value = "Correct! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Oops! Not quite right. Try again.");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//question 7

document.getElementById("quest7").addEventListener("click", function () {
  var selectedOption = document.getElementById("lifespan").value;
  var scoreBox = document.getElementById("tries");
  var comments = document.getElementById("comments7");

  var score = parseInt(scoreBox.value) || 0;

  try {
    if (selectedOption === "15") {
      comments.value = "Correct! Click 'next question'";
      score++;
    } else if (selectedOption === "") {
      comments.value = "Please select an answer!";
      return;
    } else {
      throw new RangeError("Oops! Not quite right. Try again.");
    }
  } catch (errMsg) {
    comments.value = errMsg.message;
  }

  scoreBox.value = score;
});

//slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

