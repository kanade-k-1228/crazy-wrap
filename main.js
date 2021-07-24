const normalGenButton = document.getElementById("normalGen");
const randomGenButton = document.getElementById("randomGen");
const playButton = document.getElementById("play");
const tweetButton = document.getElementById("tweet");
const output = document.getElementById("output");

const items = [
  ["狂う❗", "./sound/kuruu1.mp3"],
  ["狂う❗", "./sound/kuruu2.mp3"],
  ["クレラップ", "./sound/kurewrap.mp3"],
  ["狂う❗", "./sound/kuruu3.mp3"],
  ["狂う❗", "./sound/kuruu4.mp3"],
  ["狂う❗", "./sound/kuruu5.mp3"],
  ["狂う❗", "./sound/kuruu6.mp3"],
  ["狂う❗", "./sound/kuruu7.mp3"],
  ["狂う❗", "./sound/kuruu8.mp3"],
  ["狂う狂う狂う狂う❗", "./sound/kurukurukurukuru.mp3"],
  ["クレラップ", "./sound/kurewrap2.mp3"],
  ["クレラップ", "./sound/kurewrap3.mp3"],
];

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const normalGen = () => {
  return "狂う❗狂う❗クレラップ狂う❗狂う❗狂う❗狂う❗狂う❗狂う❗狂う狂う狂う狂う❗クレラップクレラップ";
};

const randomGen = () => {
  return shuffle(items).reduce((acm, [text, _]) => acm + text, "");
};

const tweet = (text) => {
  window.open(
    "https://twitter.com/intent/tweet?via=kanade_k_1228&related=kanade_k_1228&url=" +
      location.href +
      "&text=" +
      text,
    "_blank"
  );
};

normalGenButton.onclick = () => {
  const gen = normalGen();
  output.innerText = gen;
};

randomGenButton.onclick = () => {
  const gen = randomGen();
  output.innerText = gen;
};

tweetButton.onclick = () => {
  tweet(output.innerText);
};
