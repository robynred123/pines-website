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
      <button className='cv-button' onClick={() => window.open("https://docs.google.com/document/d/1d_35XuZetaVdmdy162hWWf1-b40UCj8iRbHt2Q8da-4/edit?usp=sharing", "_blank")}>
        <h5 className='cv-button-text'>View My CV</h5> 
      </button>
      <div className='home-cv-text'>
      <h3>This button will open a new window to a Google Docs copy of my CV. <br/>
        This document will be the most up to date copy of my CV, <br/> however if you would like to know more about what I'm currently working on, please reach out via LinkedIn or Email</h3>
      </div>
     </div>
     </div>
    </Layout>
  );
};
