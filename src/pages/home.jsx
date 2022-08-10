import React from 'react';
import './home.scss';
import Layout from '../components/layout';
import PersonalPhoto from "../assets/personal-photo.png"
import { bioArray } from './bioArray';
import { Link } from 'react-router-dom';

export const Home = () => {

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  

  const bioDisplay = getMultipleRandom(bioArray, 4)

  function reveal() {
    const reveals = document.querySelectorAll(".bio-container")

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <Layout>
    <div id='home-content'>
     <div className='home-content-one'>
      <div className='home-photo-container'>
        <img src={PersonalPhoto} className='home-photo' alt="A photo of myself" />
      </div>
     </div>
     <div className='home-content-two'>
      {bioDisplay.map(bio => {
        return (
          <div key={bio.key} className='bio-container'>
            <h3>{bio.text}</h3>
          </div>
        )
      })}
     </div>
     <div className='home-cv-container'>
      <Link to="https://drive.google.com/uc?export=download&id=<1d_35XuZetaVdmdy162hWWf1-b40UCj8iRbHt2Q8da-4>">
      </Link>
     </div>
     </div>
    </Layout>
  );
};
