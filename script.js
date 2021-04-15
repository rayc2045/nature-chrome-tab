'use strict'

document.onselectstart = () => false;
document.ondragstart = () => false;
document.oncontextmenu = () => false;

const width = window.innerWidth;
const height = window.innerHeight;
document.body.style.backgroundImage =
  `url("https://source.unsplash.com/${width}x${height}/?nature")`;
// const img = document.createElement('img');
// img.src = `https://source.unsplash.com/${width}x${height}/?nature`;
// document.body.appendChild(img);