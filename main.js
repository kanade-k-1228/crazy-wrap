const normalGenButton = document.getElementById("normalGen");
const randomGenButton = document.getElementById("randomGen");
const playButton = document.getElementById("play");
const tweetButton = document.getElementById("tweet");
const output = document.getElementById("output");

let generated;

const items = [
  ["狂う❗", ""],
  ["狂う❗", ""],
  ["クレラップ", ""],
  ["狂う❗", ""],
  ["狂う❗", ""],
  ["狂う❗", ""],
  ["狂う❗", ""],
  ["狂う❗", ""],
  ["狂う❗", ""],
  ["狂う狂う狂う狂う❗", ""],
  ["クレラップ", ""],
  ["クレラップ", ""],
];

const normalGen = () => {
  generated =
    "狂う❗狂う❗クレラップ狂う❗狂う❗狂う❗狂う❗狂う❗狂う❗狂う狂う狂う狂う❗クレラップクレラップ";
};

const randomGen = () => {
  generated =
    "狂う❗狂う❗クレラップ狂う❗狂う❗狂う❗狂う❗狂う❗狂う❗狂う狂う狂う狂う❗クレラップクレラップ";
};

const tweet = () => {};

normalGenButton.onclick = () => {
  normalGen();
  output.innerText = generated;
};

randomGenButton.onclick = () => {
  randomGen();
  output.innerText = generated;
};
