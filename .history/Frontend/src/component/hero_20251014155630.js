import { useEffect, useState, useRef} from 'react';
import logo from '../assets/cloud.png';
// import './App.css';


function Hero() {
  const inputRef=useRef();
  const [weather, setWeather]=useState(false);
   const [city, setCity] = useState("Delhi");
  const API_key="50a5754614d571948ae380c6fbb5c9d1";

  const search = async(city)=>{
    try{
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;
     const response=await fetch(url);
     const data=await response.json();
     console.log(data);

      setWeather({
       humidity:data.main.humidity,
       temp:Math.floor(data.main.temp),
       windspeed:data.wind.speed,
       location:data.name
      })
    }
    catch(error)
    {
    }
  }

    const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    search(city);
  };

  useEffect(()=>{
    search("Delhi");
  },[])
  return (
  <>
  <form onSubmit={handleSubmit}>
    <input type="search" onChange={(e) => setCity(e.target.value)}  placeholder="Search Location" ref={inputRef}/>
    {/* <img src={logo} alt="logo" width="35" height="35" onClick={()=>search(inputRef.current.value)}/> */}
      <button type="submit">
          <img src={logo} alt="logo" width="35" height="35" />
        </button>
    <h4> Wind Speed : {weather.windspeed} ms</h4>
    <h4> Tempature : {weather.temp} *C</h4>
    <h4> Humidity: {weather.humidity} % </h4>
    <h3> location: {weather.location}</h3>
     </form>
  </>
  );
}
export default Hero;





// USESTATE     USESTATE      USESTATE        USESTATE 
// USESTATE     USESTATE      USESTATE        USESTATE      
// Useful for API calls-> U can send current text to backend when a button is clicked.

// import React, { useState } from "react";

// function Example() {
//   const [text,setText] = useState(""); // Step 1: create state
//   const [message, setMessage] = useState("");

//   const handleChange = () => {
//     console.log(text);
//        setMessage(`You typed: ${text}`);
//   };

//   // useEffect(() => {
//   //   console.log("Current count value:", count);
//   // }, [count]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <input 
//         type="text"  
//         value={text}//  Without value-  React cannot directly control or reset the input.
//         onChange={(e)=> setText(e.target.value)} 
//         style={{ padding: "8px", fontSize: "16px" }} 
//       />
//       <br />  <br />
//       <button onClick={handleChange}>Increase Count</button>
//          <p>{text}</p>
//     </div>
//   );
// }
// export default Example;










//           During Interview
// I would use a state variable to store input, and another array  state to
//  store all values.  On button click, I’ll add the input to that array using 
// the spread operator. Then React  will automatically re-render the list.”
// import React, { useState } from "react";
// function Wishlist() {
//   const [item, setItem] = useState([]); // stores all items

//   let currentInput = ""; // temporary variable for input

//   const handleChange = (e) => {
//     currentInput = e.target.value; // update temporary input
//   };

//   const addItem = () => {
//     if (currentInput.trim() !== "") {
//       setItem([...item, currentInput]); // add input to array
//       currentInput = ""; // clear temporary input
//       document.getElementById("inputBox").value = ""; // clear input field
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>🛒 Simple Wishlist</h2>
//       <input
//         type="text"
//         id="inputBox"
//         placeholder="Enter item..."
//         onChange={handleChange}
//       />
//       <button onClick={addItem}>Add Item</button>

//       <ul >
//         {item.map((wish, index) => (
//           <li>⭐ {wish} </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Wishlist;








// import React, { useState } from "react";
// function Wishlist() {
//   const [item, setItem] = useState(["product"]); // for all items
//   const [text, setText] = useState(""); // for input box
//   const addItem = () => { 
//       setItem([ ...item,text]); // We get Input Value then show within UL/LI
//       //  we use item cause of List str maintain-==>     no shifft below
//   };
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>🛒 Simple Wishlist</h2>
//       <input
//         type="text"
//         placeholder="Enter item..."
//         value={text}
//         onChange={(e) => setText(e.target.value)} // update input state
//       />
//       <button onClick={addItem}>Add Item</button>

//       <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
//         {item.map((wish, index) => (
//           <li key={index}>⭐ {wish}</li>
//         ))}    </ul> </div> ); } export default Wishlist;



// import React,{useState} from "react";
// function Show(){
//   const [pick, setPick]=useState("");
//   const [show,setShow]=useState([]);
 
//   const addItem = () => {  //  KEEP all old Items in the show array.
//     setShow([ ...show,pick]); // We get Input Value then show within UL/LI
//   }; //To add pick to the list, you must update show using setShow.
//   return(
//     <>
    
//     <input type="text" placeholder="Fill User" value={pick} onChange={(e)=>setPick(e.target.value)} />
//     <button style={{padding:"10px 15px"}} onClick={addItem} > Transfer Data  </button>
//     


// {/* <ul style={{listStyle:"none"}}>  */}
//       {show.map((wish,index)=>(
//       <li key={index}>{wish}</li>
//       ))}
//     </ul> 



// <table border="1">
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Item</th>
//     </tr>
//   </thead>
//   <tbody>
//     {show.map((item, index) => (
//       <tr key={index}>
//         <td>{index + 1}</td>
//         <td>{item}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>




// <select>
//   {show.map((item, index) => (
//     <option key={index} value={item}>{item}</option>
//   ))}
// </select>




// {show.map((item, index) => (
//   <button key={index} onClick={() => alert(item)}>
//     {item}
//   </button>
// ))}






//     </>
//   );
// }
// export default Show;



// import React,{useState} from "react";

// function Cover(){
//     const [catchs, setCatchs]=useState("");
//     const [display,setDisplay]=useState([]);
//       const handleClick=()=>{
//         setDisplay([...display,catchs])
//       };
//   return(
//     <>
//       <input type="text" placeholder="Write Detail" value={catchs} onChange={(e)=>setCatchs(e.target.value)} />
//       <button onClick={handleClick}>   Click   </button>
//       <ul>
//         {display.map((z,index)=>(
//          <li key={index}> {z} </li>
//         ))}
//           </ul>
//     </>
//   );
// }
// export default Cover;






// import React, { useState } from "react";
// function ShowHide() {
//   const [visibles, setVisible] = useState(true);
//   return (
//     <>
//       <button onClick={() => setVisible(!visibles)}>
//         {visibles ? "Hide" : "Show"} Text
//       </button>
//       {visibles && <p>Hello React Developer 👋</p>}
//     </>
//   );
// }
// export default ShowHide;




// import React,{useState} from "react";
// function Vanish(){
//   const [visible,setVisible]=useState();
//   return(//  setVisible(visible) → sets the state visible to its current value.
//   <> 
//     <button onClick={()=>setVisible(!visible)} >  {visible ? "hide" : "show" } Text  </button>
//     {visible && <p> This is Toggle example </p>}
//     </>
//   );
// }
// export default Vanish;





// import React,{useState} from "react";
// function Settle(){
//   const [visible,setVisible]=useState(true);
  
//   return(//“If visible is true, then show (<p>hyyy</p>). Otherwise, show nothing.”
//     <>
//      {visible && <p>hyyy</p> } 
//       <button onClick={()=>setVisible(!visible)} >
//       {visible ? "hide" : "show" }  Hide/show  </button>
//     </>
//   );
// }
// export default Settle;





// import React from "react";
// import Message from "./Message";
// function Write(x){
//   x="hello Brother"
//   return <p> Hello {x} World </p>    
// }
// export default Write;


// function Write(){
//   return <p> Hello World </p>    
// }
// export default Write;



// import React,{useState} from "react";
// function Follow(){
//   const [show,setShow]=useState(true);

//   return(
//     <>
//       <button onClick={()=>setShow(!show)} >
//         {show ? "unlike" : "like"}   
//       </button>
//     </>
//   );
// }
// export default Follow;





// import React,{useState} from "react";
// function Follow(){
//   const [show,setShow]=useState("");
//   const [pick,setPick]=useState("");
//   const handlePut=()=>{
//         console.log(`UserName : ${show}  Password : ${pick} `);
//    }

//   return(
//     <>
//       <br/>      <input type="text" value={show} placeholder="Username" onChange={(e)=>setShow(e.target.value)} />
//       <br/><br/> <input type="password" value={pick} placeholder="password"  onChange={(e)=>setPick(e.target.value)}/>
//       <br/><br/> <button onClick={handlePut}>  Log </button>
//     </>
//   );
// }
// export default Follow;





// import React from "react";
// function Child({name,text}){
//   return <h1> {name} {text} </h1>
// }
// function Parent(){
//   return (
//     <>
//         <Child text="Fresh user" name="Sumit"/>
//     </>
//   );
// }
// export default Parent;




// import  { useEffect,useState } from "react";
// function Fresh(){
//   const [userz , setUserz]=useState([]);
//   useEffect(()=>{
//       fetch("https://jsonplaceholder.typicode.com/users")
//        .then(r => r.json()).then(setUserz); 
//     // console.log("Data have been Fetched");
//   },[]);
//   return <ul> {userz.map(u=><li key={u.id}> {u.phone} - {u.name} </li>)} </ul>
// }
// export default Fresh;







// import React,{useEffect,useState} from "react";
// function Data(){
//   const [text,setText]=useState([]);
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(r=>r.json()).then(setText);
//   },[]);
//   return(
//     <>
//       <ul> 
//         {text.map(e=><li key={e.id}> {e.name} </li>) }
//       </ul>
//     </>
//   );
// }
// export default Data;



// import React,{useEffect,useState} from "react";
// function LoadingData() {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     setTimeout(() => setData("Loaded!"), 2000);
//   }, []);
//   return <h2>{data ? data : "Loading..."}</h2>;
// }
// export default LoadingData;






// import { useEffect, useState } from "react";
// function FetchUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(r => r.json()).then(setUsers);
//   }, []);
//   return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
// }
// export default FetchUsers;







// function Message(){
//   return (
//   <>
//   <h2> Hello   Welcome. </h2>
//   </>
//   );
// }
// export default Message;



// function Message(prop){
//   return (
//   <>
//   <h2>{prop.name} Hello   Welcome.</h2>

//   </>
//   );
// }
// export default Message;


// import React from "react";

// function Message({ text, onClick, user = { name: "Guest", role: "Unknown" } }) {
//   const { name, role } = user;
//   return (
//     <div style={{ margin: "10px 0" }}>
//       <button onClick={onClick}> {text}</button>
//       <p>Hello, {name}! Your role is {role}.</p>
//     </div>
//   );
// }// Parent = logic / state.    =>  we use Button or UI here cause after we can use it on Anywhere REUSABLE
// //  Child = UI / presentation.
// export default Message;




// import React, { useState } from "react";
// function ManageArray() {
//   const [fruits, setFruits] = useState(["Apple", "Banana"]);

//   const addFruit = () => {
//     setFruits([...fruits, "Mango"]);
//   };

//   const removeFruit = (index) => {
//     const updated = fruits.filter((_, i) => i !== index);
//     setFruits(updated);
//   };
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Manage Array with useState</h2>
//       <button onClick={addFruit}>Add Fruit</button>

//       <ul style={{ listStyle: "none" }}>
//         {fruits.map((fruit, index) => (
//           <li key={index}>
//             {fruit}{" "}
//             <button onClick={() => removeFruit(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default ManageArray;








// import React, { useState } from "react";

// function ArrayExample() {
//   // Step 1: Initialize state with empty array
//   const [items, setItems] = useState([]);

//   // Step 2: Add new item on button click
//   const handleAdd = () => {
//     const newItem = `Item ${items.length + 1}`;
//     // create new array and update state
//     setItems([...items, newItem]);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>useState with Array Example</h2>
//       <button onClick={handleAdd}>Add Item</button>

//       <ul style={{ listStyle: "none" }}>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ArrayExample;










// import React, { useState } from "react";

// function Hero() {
//   const [form, setForm] = useState({ name: "", email: "" });

//   const handleSubmit = () => {
//     alert(`Name: ${form.name}, Email: ${form.email}`);
//     setForm({ name: "", email: "" });
//   };

//   return (
//     <div>
//       <input
//         placeholder="Name"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         placeholder="Email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//       <p>Current State: {JSON.stringify(form)}</p>
//     </div>
//   );
// }

// export default Hero;








// import React, { useState } from "react";
// function Hero() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const API_KEY = "50a5754614d571948ae380c6fbb5c9d1";

//   const fetchWeather = async () => {
//     if (!city) return setError("Please enter a city name");

//     try {
//       setError("");
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await res.json();

//       if (res.ok) {
//         setWeather(data);
//       } else {
//         setWeather(null);
//         setError("City not found");}
//     } catch {
//       setError("Error fetching data");
//       setWeather(null);
//     }
//   };
//   return (
//     <div id="allmain">
//       <h1>Weather Data</h1>

//       <div>
//        <input type="text" placeholder="Search Location" value={city} onChange={(e) => setCity(e.target.value)}/>
//         <button onClick={fetchWeather}>Get Weather</button>
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {weather && (
//         <div>
//           <h2>{weather.name}</h2>
//           <h4>Temperature: {weather.main.temp}°C</h4>
//           <h4>Wind Speed: {weather.wind.speed} m/s</h4>
//           <h4>Weather: {weather.weather[0].description}</h4>
//         </div>
//       )}
//       <p>  © Imax  </p>
//     </div>
//   );
// }
// export default Hero;











// import React, { useState, useEffect } from "react";
// // import "./Hero.css";

// function Hero() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const API_KEY = "50a5754614d571948ae380c6fbb5c9d1";

//   // Function to fetch weather data
//   const fetchWeather = async () => {
//     if (!city) return;
//     try {
//       setError("");
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await res.json();

//       if (res.ok) {
//         setWeather(data);
//       } else {
//         setWeather(null);
//         setError("City not found");
//       }
//     } catch {
//       setError("Error fetching data");
//       setWeather(null);
//     }
//   };

//   //  useEffect runs automatically when 'city' changes
//   useEffect(() => {
//     if (city.trim() !== "") {
//       const timer = setTimeout(() => {
//         fetchWeather();
//       }, 800); // delay for better performance (debounce effect)
//       return () => clearTimeout(timer);
//     }
//   }, [city]); // dependency array

//   return (
//     <div id="allmain">
//       <h1>Weather Data</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Search Location"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         {/* We can keep button as optional trigger */}
//         <button onClick={fetchWeather}>Get Weather</button>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {weather && (
//         <div>
//           <h2>{weather.name}</h2>
//           <h4>Temperature: {weather.main.temp}°C</h4>
//           <h4>Wind Speed: {weather.wind.speed} m/s</h4>
//           <h4>Weather: {weather.weather[0].description}</h4>
//         </div>
//       )}
//       <p>© Imax</p>
//     </div>
//   );
// }
// export default Hero;











// import React, { useState, useEffect } from "react";
// // import "./Hero.css";

// function Hero() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const API_KEY = "50a5754614d571948ae380c6fbb5c9d1";

//   // ✅ useEffect: runs every time city changes
//   useEffect(() => {
//     if (city.trim() !== "") {
//       console.log("Typed City:", city); // show typed value
//     }
//   }, [city]);

//   // ✅ fetch weather when button clicked
//   const fetchWeather = async () => {
//     if (!city) return setError("Please enter a city name");

//     try {
//       setError("");
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       const data = await res.json();

//       if (res.ok) {
//         setWeather(data);
//         console.log("Fetched Weather Data:", data); // show API data in console
//       } else {
//         setWeather(null);
//         setError("City not found");
//       }
//     } catch {
//       setError("Error fetching data");
//       setWeather(null);
//     }
//   };

//   return (
//     <div id="allmain">
//       <h1>Weather Data</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Search Location"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//         <button onClick={fetchWeather}>Get Weather</button>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {weather && (
//         <div>
//           <h3>City: {weather.name}</h3>
//           <h4>Wind Speed: {weather.wind.speed} m/s</h4>
//           <h4>Temperature: {weather.main.temp}°C</h4>
//         </div>
//       )}
//     </div>
//   );
// }
// export default Hero;







// // 👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏👏
// // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
// import React, { useState } from "react";

// function InputLogger() {
//   const [text, setText] = useState(""); // Step 1: Create state

//   const handleClick = () => {
//     console.log("User entered:", text); // Step 3: Log the value to console
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <input
//         type="text"
//         placeholder="Type something..."
//                          // Step 2: Bind input to state
//         onChange={(e) => setText(e.target.value)}
//         style={{ padding: "8px", width: "200px" }}
//       />
//       <button
//         onClick={handleClick}
//         style={{ marginLeft: "10px", padding: "8px 15px" }}
//       >
//         Log Input
//       </button>
//     </div>
//   );
// }
// // ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
// export default InputLogger;



