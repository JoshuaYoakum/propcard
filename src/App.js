import logo from './logo.svg';
// import './App.css';
import PersonCard from './componets/PersonCard';

function App() {
  const person1 = {firstName:"Josh", lastName:"Yoakum", age:23, hair:"dark brown"}
  const person2 ={firstName:"Jersh", lastName:"yum", age:23, hair:"blonde"}
  const person3 ={firstName:"Joshua", lastName:"Yoak", age:13, hair:"brown"}
  const person4 ={firstName:"Joosh", lastName:"Yo", age:233, hair:"dark grey"}
  return (
    <div className="App">

    <PersonCard person={person1}/>
    <PersonCard person={person2}/>
    <PersonCard person={person3}/>
    <PersonCard person={person4}/>
    </div>
  );
}

export default App;
