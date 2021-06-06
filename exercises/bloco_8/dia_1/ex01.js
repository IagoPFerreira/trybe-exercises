const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva')
  }
  return employees;
}

const emailGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return {fullName, email: `${email}@trybe.com`}
}

console.log(newEmployees(emailGenerator));
