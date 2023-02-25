import React from 'react'
import './Work.css';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { ExternalLink } from 'react-external-link';

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  .panel span {
    position: relative;
    display: block;
    top: 5%;
    font-size: 80px;
    font-style:bold;
  }
  
  .panel.blue {
    
  }
  
  .panel.turqoise {
  
  }
  
  .panel.green {

  }
  
  .panel.bordeaux {

  }
`;

const ParallaxStyled = styled.div`
  .section {
    height: 110vh;
  }
  .parallax {
    height: 500px;
    position: relative;

    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      background-image:center;
    }
    h2 {
      position: absolute;
      left: 200px;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;


export const Work = ()=> {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
  <>
  <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <h2>AboutSelf Details</h2>
          <p>News and Insights</p>
        </div>
      </div>
    </div>


    <ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <span style={{ fontSize: "30px" }}>Let me tell you about ourself <br/> scroll animation 😀</span>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>Here is  Strax✨</span>
    </Animator>
  </ScrollPage>

  <ScrollPage page={2}>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>Don’t worry about failure; you only have to be right once

 ⛅️</span>
    </Animator>
  </ScrollPage>
  
  <ScrollPage page={3}>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>-our passion to grow your business -
      
        <Animator animation={MoveOut(-1000, 0)}>See our comunicating 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage page={4}>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
      We don't just sell websites, we create websites that SELL
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
<ParallaxStyled>
    <Controller>
      <div className="section" />
      <Scene
        indicators={true}
        duration="200%"
        triggerHook="onEnter"
      >
        <Timeline
          wrapper={<div className="parallax" />}
        >
          <Tween
            position="0"
            from={{
              yPercent: -50,
            }}
            to={{
                yPercent: 0,
            }}
          >
            <img src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg" alt="" />
          </Tween>
          <Tween
          position="0"
            from={{
              top: '0%',
              scale: 1.5,
            }}
            to={{
              top: '70%',
              scale: 2,
            }}
          >
            <h2>Where our solutions 
              <br/>
              become your internet reality</h2>
          </Tween>
        </Timeline>
      </Scene>
      <div className="section" />
    </Controller>
  </ParallaxStyled>
  <SectionWipes2Styled>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>The Ability To Elicit, Assessing Opportunities</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>
           
        <section class="services-area bg-right-color bg-f4f6fc ptb-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="services-content">
                        <div class="content left-content">
                            <div class="icon">
                                <img src="assets/img/icon1.png" alt="image" />
                            </div>
                            <h2>Path is here for faster way of connections with your customers</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
    
                            <a href="#" class="default-btn"><i class="bx bxs-spreadsheet"></i> Learn More<span></span></a>
                        </div>
                    </div>

                    <div class="services-image wow animate__animated animate__fadeInRight" data-wow-delay=".3s">
                        <div class="image">
                            <img src="assets/img/services-image/1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
              </span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span><section className="services-area bg-left-color bg-f4f6fc ptb-100">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div
        className="services-image wow animate__animated animate__fadeInLeft"
        data-wow-delay=".3s"
      >
        <div className="image">
          <img src="assets/img/services-image/2.png" alt="image" />
        </div>
      </div>
      <div className="services-content">
        <div className="content">
          <div className="icon">
            <img src="assets/img/icon1.png" alt="image" />
          </div>
          <h2>
            The best Innovative Chatbot and automations are here to expand
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.
          </p>
          <a href="#" className="default-btn">
            <i className="bx bxs-spreadsheet" /> Learn More
            <span />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</span></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>
            <section className="free-trial-area ptb-100 bg-f4f5fe">
  <div className="container">
    <div className="free-trial-content">
      <h2>Practice active listening and follow through</h2>
      <p>
        Qualify your leads &amp; recognize the value of word your customer will
        love you
      </p>
      <ExternalLink href="http://scrollweb.epizy.com/" className="default-btn">
          <i className="bx bxs-hot" /> Check our working model
        </ExternalLink>
    </div>
  </div>
  <div className="shape10">
    <img src="assets/img/shape/10.png" alt="image" />
  </div>
  <div className="shape11">
    <img src="assets/img/shape/7.png" alt="image" />
  </div>
  <div className="shape12">
    <img src="assets/img/shape/11.png" alt="image" />
  </div>
  <div className="shape13">
    <img src="assets/img/shape/12.png" alt="image" />
  </div>
</section>

              </span></section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
  <div style={{display:'flex','justify-content':'center',marginTop:'10px',marginBottom:'40px'}}>
 


  
    </div>
  </>
  )
}

export default Work;