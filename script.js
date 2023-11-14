console.log("hello world");
console.log("window is  " + window);

let scale = 1;

let scroll = 0;

window.addEventListener("wheel", (event) => {

  scroll += event.deltaY;

  document.getElementById('scroll').style.left = scroll + "px";
  document.getElementById('title').style.left = -scroll + "px";


  let scaleScroll = event.deltaY * 0.01;
  scale += scaleScroll;
  scale = Math.min(Math.max(0.125, scale), 4);
  document.getElementById('scroll').style.transform = "scale(" + scale + ")";
  
}, false);