const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  index = 0;
  const body = document.getElementByTag("body");
  body.addEventListener('keydown', function onKeyDownHandler(e){
    const key = e.key;
    if (key === codes[index]) {
      index++;
      if (index === codes.length){
        alert("HURRAY");
        index = 0;
      }
    } else {
      index = 0;
    }
    
  } )
}
