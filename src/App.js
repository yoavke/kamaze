import './app.css';

import {useState, useEffect} from 'react';

function App() {
  const [formValues, setFormValues] = useState({price: '', percentage: ''});
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log('result', result, result.length);
  },[result]);
  
  const handleChange = ({target}) => {
    const newValues = {
      ...formValues,
      [target.name]: target.value,
    }

    setFormValues(newValues);
  }
  
  const setTip = () => {
    const price = Number(formValues.price);
    const percentage = Number(formValues.percentage);

    const total = (price+(price*percentage/100)).toFixed(1);
    setResult(total);
  }
  
  const setDiscount = () => {
    const price = Number(formValues.price);
    const percentage = Number(formValues.percentage);

    const total = (price-(price*percentage/100)).toFixed(1);
    setResult(total);
  }

  return (
    <div className="app">
      <div className="title"><h1>Kamaze</h1></div>
      <div className="price"><input type="number" placeholder="price" onChange={handleChange} name="price" value={formValues.price} /></div>
      <div className="percentage"><input type="number" placeholder="percentage" onChange={handleChange} name="percentage" value={formValues.percentage} /></div>
      <div className="discount"><button onClick={setDiscount}>discount</button></div>
      <div className="tip"><button onClick={setTip}>tip</button></div>
      <div className="result">{(result>0)?result:''}</div>
    </div>
  );
}

export default App;
