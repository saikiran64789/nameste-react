import React from "react";
import ReactDOM from "react-dom/client";
/**
 * 
 * header
 * - Logo
 * - Nav Items
 * Body
 *  - Search 
 *  - RestaurantContainer
 *   - RestaurantCard 
 * Footer
 *  - Copyright
 *  - links
 *  - Address
 *  - Contact
 * 
 */
const Header = () =>{
  return(
    <div className="header">
      <div className="logo-container">
        <img
        className="logo" 
        src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
         </div>
         <div className="nav-items">
          <ul className="items">
            <li>home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
       
          </ul>
        </div>
  </div>
  );
};

const RestaurantCard = () =>{
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
     </div>
  );
};

const Body = () =>{
  return(
    <div className="body">
    <div className="search">search</div>
    <div className="res-container">
      <RestaurantCard/>

    </div>
  </div>
  );
  
};

const AppLayout  = () =>{
  return(<div className="app">
      <Header />
      <Body/>
      </div>

      );
   };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);



