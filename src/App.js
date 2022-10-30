import React, { useEffect,useState} from 'react';
import './App.css';

function App() {
  const [docs, setDocs]=useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
      await fetch('https://api.twelvedata.com/time_series?apikey=59011778f4f84cfc81dc97a9e904e9ae&interval=1month&symbol=AAPL')
      .then((data)=>(data.json()))
      .then((data)=>{setDocs(data.values)})
      .catch((err)=>(console.log(err)));
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {docs.map((value,key)=>{
            return (<tr key={key}>
              <td>{value.datetime}</td>
              <td>{value.open}</td>
              <td>{value.high}</td>
              <td>{value.low}</td>
              <td>{value.close}</td>
              <td>{value.volume}</td>
            </tr>);
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
