import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <>
  <div>List of my favourite top 5 </div>
  <div>
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

