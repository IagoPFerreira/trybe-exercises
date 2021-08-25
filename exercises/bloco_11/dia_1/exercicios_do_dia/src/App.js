import './App.css';

const tasks = ['Tirar o lixo', 'Lavar a louça', 'Varrer a casa', 'Passar pano', 'Passear com o cachorro']

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <ul>{tasks.map(tarefa => task(tarefa))}</ul>
    </div>
  );
}

export default App;
