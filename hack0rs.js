const caption = "Welcome Ironhack0rs";

const characters = caption.split("");

const charInterval = setInterval(() => {
  const startTime = new Date().getTime();
  const nextChar = characters.shift();
  const currentInnerHTML = document.querySelector(".intro-text").innerHTML;
  setTimeout(() => {
    document.querySelector(".intro-text").innerHTML = currentInnerHTML + getRandomChar();
  }, 20);
  setTimeout(() => {
    document.querySelector(".intro-text").innerHTML = currentInnerHTML + getRandomChar();
  }, 40);
  setTimeout(() => {
    document.querySelector(".intro-text").innerHTML = currentInnerHTML + getRandomChar();
  }, 60);
  setTimeout(() => {
    document.querySelector(".intro-text").innerHTML = currentInnerHTML + getRandomChar();
  }, 80);

  setTimeout(() => {
    document.querySelector(".intro-text").innerHTML = currentInnerHTML + nextChar;
  }, 100);

  if (characters.length === 0) clearInterval(charInterval);
  // console.log('THIS ITERATION TOOK ' + (new Date().getTime() - startTime) + 'ms')
}, 200);

function getRandomChar() {
  const randChar = Math.floor(Math.random() * 36).toString(36);
  if (Math.random() < 0.5) {
    return randChar.toUpperCase();
  } else {
    return randChar.toLowerCase();
  }
}
