const wakingUp = () => {
  return console.log('Acordando!!');
}

const breakfast = () => {
  return console.log('Bora tomar um café!!');
}

const sleep = () => {
  return console.log('Partiu dormir!!');
}

const doingThings = (action) => {
  return action;
}

doingThings(wakingUp);