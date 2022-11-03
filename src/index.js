import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './app.css';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <>
  <div className = "heading"><h1 >List of my favourite top 5 </h1></div>
  <div className ="mainBox">
    <App 
    imgSrc = "https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw" 
    imgName = "DARK"  
    movie = "DARK"  
    link = "https://www.netflix.com/in/title/80100172"
    />
    <App 
    imgSrc = "https://static.toiimg.com/photo/msid-86670466/Squid%20Game%20Season%201.jpg?86670466"
    imgName = "SQUID GAME"  
    movie = "SQUID GAME"  
    link = "https://www.netflix.com/in/title/81040344"
    />
    <App 
    imgSrc = "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/7/Desk/2021_7$largeimg_1006597676.jpg"
    imgName = "SHERSHAAN"  
    movie = "SHERSHAAN"  
    link = "https://www.primevideo.com/detail/Shershaah/0J3P7DO2UHT2IGF8UY24C2I94C"
    />
    <App 
    imgSrc = "https://m.media-amazon.com/images/I/71g-y0zOBOL._SL1500_.jpg"
    imgName = "LOST IN SPACE"  
    movie = "LOST IN SPACE"  
    link = "https://www.netflix.com/in/title/80104198"
    />
    <App 
    imgSrc = "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/204588/Vivegam-Tamil.jpg"
    imgName = "VIVEGAM"  
    movie = "VIVEGAM"  
    link = "https://www.imdb.com/title/tt6878378/"
    />
  </div>
  </>
 );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

//  const root = ReactDOM.createRoot(document.getElementById('root'));
 
//  var curDate = new Date();
//  var greet = "";

//  const heading = {
//   backgroundImage : 'URL("https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883__480.jpg")' , 
//   height : "600px", 
//   boxSizing : "border-box",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "100% 1000px",
//   padding : "auto" , 
//   marginTop : "-20px"
// }

// const box = {
//   backgroundColor : "rgba(128,128,128 , 0.5)",
//   widht : "10px" , 
//   height : "100px"  , 
//   textAlign : "center",
//   color : "rgbs(237, 231, 225)",
//    margin: "auto"
// }

 
// if(curDate.getHours()<12 && curDate.getHours()>=0 )
// {
//   greet = "GOOD MORNING" ;
//   heading.backgroundImage = "URL(https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883__480.jpg)";
// }
//  if(curDate.getHours()>=12 && curDate.getHours()<17 )
// {
//   greet = "GOOD AFTERNOON";
//   heading.backgroundImage = "URL(https://p4.wallpaperbetter.com/wallpaper/391/334/355/water-reflection-building-dubai-wallpaper-preview.jpg)";
// }
//  if(curDate.getHours()>=17 && curDate.getHours()<=20)
// {
//   greet = "GOOD EVENING";
//   heading.backgroundImage = "URL(https://wallpapercave.com/wp/wp9123843.jpg)";
// }
//  if(curDate.getHours()>20)
// {
//   greet = "GOOD NIGHT";
//   heading.backgroundImage = "URL(https://cdn.pixabay.com/photo/2017/08/10/03/08/road-2617557_1280.jpg)";
// }



// root.render(
//  <>
//  <div style = {heading}>
//  <div style = {box} >
// <h2 className = "">Hello Jayant</h2>
//  <h1 >{greet}</h1>
//  </div>
//  </div>
//  </>
// );

// //root.render(React.createElement("h1" , null , "using babel"));

// // var v1 = document.createElement("v1");
// // v1.innerHTML = "Using JAVASCRIPT"
// // root.appendChild(v1);



