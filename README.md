import { useState } from "react";



function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);


  function value(e) {
    const newValue = e.target.value;
    console.log(newValue); // Log the new value
    setInputValue(newValue);
  }

function Submit(e){
  e.preventDefault();
  setInputValue("")
  setItems([...items, inputValue ])

}


  return (
   <>

    <h1 className="text-5xl">Todo list</h1>

    <form>
    <input className="border-2" value={inputValue} onChange={value}/>
    <button className="border-2 border-gray-500" onClick={Submit}>Add</button>
    </form>

    <ul>

      {items.map((e,i)=>(
        <h1 key={i}>{e}</h1> 
      ))}

    </ul>


   </>
  );
}
