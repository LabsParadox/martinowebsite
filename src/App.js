import React from 'react';
import ParallaxImage from './components/ParallaxImage';
import NavLinkButton from './components/NavLinkButton';
import heroImage from './img/hero-logo.png';

function App() {
  return (
    <div className="App">
      <div class="header-container">
        <h1 class="header"><a href="index.html">martino hq</a></h1>
      </div>
      <div class="textbox-container">
        <h3 class="textbox-title">third times a charm. 🎉</h3>
        <div class="textbox">
          <p class="textbox-text">martino season 3 is here, with new videos and shorts on <a href="https://www.youtube.com/@yupitsmartino">youtube</a> and <a href="https://www.tiktok.com/@yupitsmartino">tiktok</a></p>
        </div>
      </div>
      <ParallaxImage />
      <div class="navigation">
        <NavLinkButton link="https://www.youtube.com/@yupitsmartino" label="youtube" />
        <NavLinkButton link="https://www.tiktok.com/@yupitsmartino" label="tiktok" />
        <NavLinkButton link="https://www.instagram.com/yupitsmartino" label="insta" />
      </div>
    </div>
  );
}

export default App;
