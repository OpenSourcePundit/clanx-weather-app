
import { useContext } from 'react';
import './App.css';
import Main from './pages/main';
import { DataContext } from './Context/dataContext';
import {DNA} from 'react-loader-spinner'

function App() {

  const {status} = useContext(DataContext)
  return (
    <div className="App">
       {status!=="loading"?<Main/> :<DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />}
    </div>
  );
}

export default App;