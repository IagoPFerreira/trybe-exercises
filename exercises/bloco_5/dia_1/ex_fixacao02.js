
let timeManneger = document.getElementById('header-container');
let sections = document.getElementsByTagName('section');
let emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'salmon';
let noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'goldenrod';
let h3 = document.getElementsByTagName('div');

function h1Styler(timeManneger) {
  timeManneger.style.width = '100%';
  timeManneger.style.backgroundColor = 'rgb(76,164,109)';
  timeManneger.style.color = '#ffffff'
  timeManneger.style.textAlign = 'center';
}

function sectionStyler(sections) {
  for (section in sections) {
    sections[section].style.display = 'inline-block';
    console.log(section)
  }
}

function h3Styler(h3) {
  // for (header in h3) {
  //   h3[header].style.backgroundColor = 'black';
  // }
  for (header in h3) {
    h3 = document.getElementsByTagName('h3')[header]
    h3.style.backgroundColor = 'black'
}
}

h1Styler(timeManneger);
sectionStyler(sections);
h3Styler(h3);