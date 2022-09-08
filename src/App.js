//parent div mai router use krnaa hoga navbar kai 
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';
import React from 'react';
import PreNavbar from './components/PreNavbar';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider.js';
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js';
import Banner from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'
const App = () => {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Routes>      
        <Route exact path="/miphones"
         element={<NavOptions obj={data.miPhones} />} 
         />
        <Route exact path="/redmiphones"
         element={<NavOptions obj={data.redmiPhones} />} 
         />
        <Route exact path="/tv"
         element={<NavOptions obj={data.tv} />} 
         />
        <Route exact path="/laptops"
         element={<NavOptions obj={data.laptop} />} 
         />
         <Route exact path="/lifestylenav"
         element={<NavOptions obj={data.fitnessAndLifeStyle} />} 
         />
          <Route exact path="/home"
         element={<NavOptions obj={data.home} />} 
         />
          <Route exact path="/audio"
         element={<NavOptions obj={data.audio} />} 
         />
          <Route exact path="/accessories"
         element={<NavOptions obj={data.accessories} />} 
         />
      </Routes>
   
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading  text="STAR PRODUCTS"/>
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>      
        <Route exact path="/music"
         element={<HotAccessories obj={data.hotAccessories.music} objCover={data.hotAccessoriesCover.music}/>} 
         />
        <Route exact path="/smartDevice"
         element={<HotAccessories obj={data.hotAccessories.smartDevice} objCover={data.hotAccessoriesCover.smartDevice}/>} 
         />
        <Route exact path="/home"
         element={<HotAccessories obj={data.hotAccessories.home} objCover={data.hotAccessoriesCover.home}/>} 
         />
        <Route exact path="/lifestyle"
         element={<HotAccessories obj={data.hotAccessories.lifeStyle} objCover={data.hotAccessoriesCover.lifeStyle}/>} 
         />
         <Route exact path="/mobileAccessories"
         element={<HotAccessories obj={data.hotAccessories.mobileAccessories} objCover={data.hotAccessoriesCover.mobileAccessories}/>} 
         />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>
      
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>  
      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner}/>


<Footer footer={data.footer} />
    </Router>
  
  );
}

export default App;