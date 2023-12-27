// Get references to elements
var btn = document.getElementById("heartTxt");
var myImage = document.getElementById("img");
var myTxt = document.getElementById("Txt");
var typeDiv = document.getElementById("typeDiv");
var imgTxt = document.getElementById("imgTxt");

// Hide the button initially
btn.style.opacity = 0;

// Initialize variables
var imageArray = [
  "pic/pic1.png", "pic/pic2.png", "pic/pic3.png", "pic/pic4.png",
  "pic/pic5.png", "pic/pic6.png", "pic/pic7.png", "pic/pic8.png",
  "pic/pic9.png", "pic/pic10.png", "pic/pic11.png", "pic/pic12.png",
  "pic/pic13.png", "pic/pic14.png", "pic/pic15.png", "pic/pic16.png",
  "pic/pic17.png", "pic/pic18.png", "pic/pic19.png", "pic/pic20.png", 
  "pic/pic21.png", "pic/pic22.png", "pic/pic23.png", "pic/pic24.png",
  "pic/pic25.png", "pic/pic26.png", "pic/pic27.png"
];
const txtArray = [
	"To be known is to be loved,",
	"and I have loved getting to know you.",
	"I admire that you are smart, driven, and hardworking.",
  "Not to mention how handsome and funny you are.",
	"I am excited for a future with you.",
	"I love learning from one another.",
	"Thank you for teaching me how to lift",
	"and how to feel secure in love.",
	"My favorite thing",
	"is waking up to you beside me.",
	"Or maybe it's the way you kiss my forehead,",
	"or walk me to my car or the train,",
	"or tell me the stupidest puns,",
  "or fall asleep on the phone with me.",
	"Perhaps it's just taking walks with you",
	"and knowing we'll take many more together.",
	"Matt, the day I met you,",
	"I knew there was something about you,",
	"that I was drawn to talk to you again,",
  "that I loved your energy.",
	"Who knew it'd lead to love",
	"(and a permanent binding contract that you'll never escape).",
  "As you say, 'Keep it real my gang'",
	"And since I know you're going to ask me...",
	"Yes.",
  "I still like you.",
  "Happy birthday! <3"
  ];
  
  
var imgShowInterval = 2000
var len = imageArray.length;
var imageIndex = 0;
var flag = 1;
var t = 0;
var ok = 0;
var btnVal = 0;

// Function to show an image and text
function showImage() {
  myImage.setAttribute("src", imageArray[imageIndex]);
  myTxt.innerHTML = txtArray[imageIndex];
  imageIndex++;
  if (imageIndex >= len) {
    imageIndex = 0;
  }
}

// Function to toggle between text and image display
function play() {
  if (t === 0) {
    myImage.setAttribute("src", "");
    myTxt.innerHTML = "";
    imageIndex = 0;
    clearInterval(showImageInterval);
  }
  flag = 1 - flag;
  typeDiv.style.opacity = flag;
  imgTxt.style.opacity = 1 - flag;
  if (t === 0) {
    showImageInterval = setInterval(showImage, imgShowInterval);
  }
  t++;
  // Hide the button when clicked
  btn.style.display = "none";
}


// Function to show an image initially
function preshowImage() {
  imgTxt.style.opacity = 0;
  myImage.setAttribute("src", imageArray[imageIndex]);
  myTxt.innerHTML = txtArray[imageIndex];
  imageIndex++;
  if (imageIndex >= len) {
    imageIndex = 0;
  }
}

// Function to fade in the button
function buttonFadeIn() {
  if (btnVal < 1) {
    btnVal += 0.025;
    btn.style.opacity = btnVal;
  } else {
    clearInterval(buttonInterval);
    if (ok === 3) {
      ok += 1;
    }
  }
}

// Main event function
function event() {
  showImageInterval = setInterval(preshowImage, 100);

  imgInterval = setInterval(function () {
    if (ok === 3) {
      buttonInterval = setInterval(buttonFadeIn, 50);
      clearInterval(imgInterval);
    }
  }, 50);
}

// Initialize the event
event();
