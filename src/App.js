import React ,{useState}from 'react'
import Values from 'values.js';
import SingleColor from './SingleColor';

const App = () => {
  const[color,setColor] = useState('')
  const[isError,setIsError] = useState(false);
  const[list,setList] =useState(new Values('#1c2042').all(10));

  const submitHandler = (e)=>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }catch(error){
      setIsError(true);
      console.log(error);
    }
  }
  return (
    <>
    <section className='container'>
      <h3>Color Generator:  </h3>
      <form onSubmit={submitHandler}>
        <input 
        type="text"
        value={color}
        onChange ={(e)=>setColor(e.target.value)}
        placeholder = '#1c2042' 
        className={`isError`?'error':null}
        />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color,index)=>{
        return(<SingleColor 
        key={index} 
        {...color} 
        index = {index}
        hexColor = {color.hex}/>);
      })}
      </section></>
    
  )
}

export default App