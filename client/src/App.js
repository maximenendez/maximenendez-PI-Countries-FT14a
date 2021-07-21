import './App.css';
import Home from './views/Home';
import PreHome from './views/PreHome';
import Country from './views/Country';
import AddActivity from './views/AddActivity';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route  path="/" exact component={PreHome}/>
      <Route path ="/Home" exact component={Home}/>
      <Route path ="/home/:id"exact component={Country} />
      <Route path ="/activity" exact component={AddActivity} />
    </div>
  );
}

export default App;
