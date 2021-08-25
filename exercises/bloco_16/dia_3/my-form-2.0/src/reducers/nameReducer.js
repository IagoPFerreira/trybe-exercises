const INITIAL_STATE = {
  state: '',
};

const PersonalData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'name':
      return state;
    case 'cpf':
      return state;
    case 'email':
      return state;
    case 'endereço':
      return state;
    case 'cidade':
      return state;
    default:
      return state;
  }
}

export default PersonalData;