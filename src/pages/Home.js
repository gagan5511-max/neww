import React, { useState } from "react";
import myImage from "../assets/images/myimage.jpg";
import swiggy from "../assets/images/swiggy.png";
import zoo from "../assets/images/zoo.png";
import zepto from "../assets/images/zepto.jpeg";
import uber from "../assets/images/uber.jpeg";
import res from "../assets/images/res.jpg";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    category: "Food Category"
  });
  
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
//📌📌 How it works step by step:📌📌
// e is event object triggered when the input changes.
// e.target.name → gets the name attribute of the input field. (For example: "email", "password")
// e.target.value → gets the current value typed in the input field.
// ...formData → copies the old form data (spread operator).
// [e.target.name]: e.target.value → updates only the specific field (like email or password) without removing the rest.
const handleSubmit = async (e) => 
{
  e.preventDefault();
  try 
  {
    const res = await fetch("http://localhost:5000/api/orders",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    alert("Order placed successfully!");
    console.log(data);
    setFormData({ name: "",email: "",address:"", category:"Food Category" });
  } 
  catch (err) 
  {
    console.error(err);
    alert("Error placing order");
  }
};
  return (
<>
<div id="mainhome">
    <div id="home" style={{ textAlign: "center", padding: "20px" }}>
        <img id="homeimgs"
         src={myImage} 
         alt="product" 
        />

      <h1 id="homeh">Welcome To Our Web-Store</h1>
      <p id="homep">This meal is so comforting and delicious,<br/> a true labor of love from your kitchen</p>
      
      <div id="homeimg">
        <h2> Our Delivery Partners </h2>
        <img id="swiggy" src={swiggy}  alt="products"  />
        <img id="zomato" src={zoo}  alt="products"  />
        <img id="uber" src={uber}  alt="products"  />
        <img id="zepto" src={zepto}  alt="products"  />
      </div>

    </div>
</div>

<div id="midhomemain">
  <div id="midhome">
    <div id="formmidhome">
      <form onSubmit={handleSubmit}>
        <h3> Review :  Your Best Category Food </h3>
        <input type="text" name="name" placeholder="Name" 
          value={formData.name}    onChange={handleChange}/>
        <input type="text" name="email" placeholder="Email" value={formData.email}  onChange={handleChange}/>
        <input type="text" name="address" placeholder="Address" value={formData.address}  onChange={handleChange}/>
        <br/> <br/>
        <select id="midselect"   name="category" value={formData.category} onChange={handleChange}>
          <option>Food Category </option>
          <option> Pizza </option>
          <option> Burger </option>
          <option> Taco's </option>
          <option> Shake </option>
        </select> <br/> <br/>
        <button type="submit"> Order </button>
      </form>  
            
    </div>
    <img id="res" src={res} alt="new" />  
  </div>
</div>




<div className="mid-section">
  <div className="mid-card">
    <h2 className="mid-title">BRIGADEIRO - Now Open</h2>
    <div className="mid-divider"></div>
    <p className="mid-text">
      The award-winning Avartana now opens its fifth abode at ITC Maurya.
    </p>
    <button className="mid-btn">KNOW MORE</button>
  </div>
</div>


<div id="mainbottom">
    <div id="bottom"> 
        <h2> This Bottom Section For Order Properties  </h2>  
      
    </div>
</div>




</>



  );
};

export default Home;