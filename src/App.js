import logo from './logo.svg';
// import './App.css';
import PersonCard from './componets/PersonCard';

function App() {
  const person = [{firstName:"Josh", lastName:"Yoakum", age:23, hair:"dark brown"},
  {firstName:"Jersh", lastName:"yum", age:23, hair:"blonde"},
  {firstName:"Joshua", lastName:"Yoak", age:13, hair:"brown"},
  {firstName:"Joosh", lastName:"Yo", age:233, hair:"dark grey"}]
  return (
    <div className="App">

    <PersonCard person={person}/>
    </div>
  );
}

export default App;
