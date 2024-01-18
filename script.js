

function getGreeting() {
  let chosenGreeting = Math.floor(Math.random()*5)
  if (chosenGreeting === 0) {
    alert("Welcome.")
  }else if (chosenGreeting === 1) {
    alert("Howdy!")
  }else if (chosenGreeting === 2) {
    alert("Hello there!")
  }else if (chosenGreeting === 3) {
    alert("Hallo")
  }else if (chosenGreeting === 4) {
    alert("Hola")
  };
};
