
import './App.css';

import { useState } from 'react'
import IndexPage from './Components/Index/IndexPage';
import HomePage from './Components/HomePage/HomePage';

function App() {

  const [listTransactions, setListTransactions] = useState([]);

  const [home, setHome] = useState(true)

  return (

    <div className='App'>
      {
        home ? <IndexPage setHome={setHome}/>
        :
        <HomePage setHome={setHome} listTransactions={listTransactions} setListTransactions={setListTransactions} />
      }
    </div>

  );

}

export default App;