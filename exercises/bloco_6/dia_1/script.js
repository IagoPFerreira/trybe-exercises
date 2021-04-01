const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal*', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']

const brasil = document.querySelector('#box-estadosBrasileiros');
for (let index = 0; index < estados.length; index += 1) {
  let estado = document.createElement('option');
  estado.className = 'estadoBR';
  estado.innerHTML = estados[index]
  brasil.appendChild(estado);
}

const data = document.getElementById('inicialDay');
data.addEventListener('blur', checkDates);

const emailCheck = document.getElementById('email');
data.addEventListener('blur', checkEmail);

function checkDates() {

  const checkData = document.querySelector('#inicialDay');
  let data = checkData.value;
  const userData = validateData(data);
  console.log(userData);
  if(!userData && data.length) {
    checkData.value = '';
  alert('data invalida');
  return false;
  }
}

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false
}

function checkEmail() {
  const email = document.querySelector('#email');
  let emailForm = email.value;
  const emailFormat = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(emailForm);
  if (!emailFormat && emailForm.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat
}

function creatCurriculum(event) {
  event.preventDefault();
  const formInputs = document.querySelectorAll('input');
  for (let index = 0; index < formInputs.length; index += 1) {
    if (formInputs[index].type === 'radio' && !formInputs[index].checked) {
      continue;
    }
    const userInput = formInputs[index].value;
    const dataUser = document.querySelector('.form-data');
    if (checkEmail() && checkDates()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea')
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

// const submitButton = document.querySelector('.submit-button');
// submitButton.addEventListener('click', creatCurriculum);
// clearButton.addEventListener('click', clearFields);
