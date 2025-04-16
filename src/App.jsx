import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import './App.css';

// Import images
import lagenitasLogo from './assets/img/lagunitas-logo.png';
import bottleImg from './assets/img/ipa.png';
import dogImage from './assets/img/dogimage.png';
import youtubeImage from './assets/img/youtube_imgae.jpg';
import greenLss from './assets/img/Green-LSS.png';
import splatBlack from './assets/img/splat-black.png';
import masonJar from './assets/img/LittleSumpin_MasonJar_Photo-671x1024.png';
import image1 from './assets/img/image1.png';
import image2 from './assets/img/image2.png';
import image3 from './assets/img/image3.png';
import image4 from './assets/img/image4.png';
import dthBanner from './assets/img/DTH_ProgramBanner.jpg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const bottleRef = useRef(null);
  const dogImageRef = useRef(null);
  const navButtonRef = useRef(null);
  const page2ButtonRef = useRef(null);
  const page6ButtonRef = useRef(null);
  const locomotiveRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    if (mainRef.current) {
      locomotiveRef.current = new LocomotiveScroll({
        el: mainRef.current,
        smooth: true
      });

      // Handle scroll events
      locomotiveRef.current.on("scroll", ScrollTrigger.update);

      // Set up ScrollTrigger proxy
      ScrollTrigger.scrollerProxy(mainRef.current, {
        scrollTop(value) {
          return arguments.length 
            ? locomotiveRef.current.scrollTo(value, 0, 0) 
            : locomotiveRef.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0, 
            left: 0, 
            width: window.innerWidth, 
            height: window.innerHeight
          };
        },
        pinType: mainRef.current.style.transform ? "transform" : "fixed"
      });

      // Update Locomotive Scroll on ScrollTrigger refresh
      ScrollTrigger.addEventListener("refresh", () => locomotiveRef.current.update());
      
      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    }

    // Initial animations
    const tl = gsap.timeline();
    
    tl.from(dogImageRef.current, {
      opacity: 0,
      duration: 1,
      scale: 0.1,
    });

    tl.from(bottleRef.current, {
      opacity: 0,
      duration: 1,
      scale: 0.2,
    });

    tl.from(navButtonRef.current, {
      xPercent: 200,
    });

    // Bottle rotation animation
    gsap.to(bottleRef.current, {
      rotate: -15,
      scrollTrigger: {
        trigger: bottleRef.current,
        scroller: mainRef.current,
        start: "top 5%",
        end: "top -416%",
        scrub: true,
        pin: true
      }
    });

    // Bottle scale animation
    gsap.to(bottleRef.current, {
      scale: 0.5,
      scrollTrigger: {
        trigger: "#page5 h1",
        scroller: mainRef.current,
        start: "top 430%",
        end: "top -430%",
        scrub: true,
        pin: true
      }
    });

    // Page 2 button animation
    gsap.from(page2ButtonRef.current, {
      scrollTrigger: {
        trigger: page2ButtonRef.current,
        scroller: mainRef.current,
        start: "top 70%",
      },
      xPercent: -300,
      duration: 1,
    });

    // Page 6 button animation
    gsap.from(page6ButtonRef.current, {
      scrollTrigger: {
        trigger: page6ButtonRef.current,
        scroller: mainRef.current,
        start: "top 70%",
      },
      xPercent: 600,
      duration: 1,
    });

    // Cleanup function
    return () => {
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
      ScrollTrigger.getAll().forEach(t => t.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return (
    <>
      <nav id="nav_top">
        <img src={lagenitasLogo} alt="Lagunitas Logo" />
        <button ref={navButtonRef}>Buy Beer</button>
        <i className="ri-menu-line"></i>
      </nav>
      <nav id="nav_left">
        <i className="ri-menu-line"></i>
        <i className="ri-search-line"></i>
      </nav>
      <div id="main" ref={mainRef}>
        <img id="bottle" src={bottleImg} alt="IPA Bottle" ref={bottleRef} />

        <div id="page1">
          <h1>unlimited release</h1>
          <img 
            id="page1_dog_image" 
            src={dogImage} 
            alt="Dog Image" 
            ref={dogImageRef} 
          />
        </div>

        <div id="page2">
          <div id="page2_part1">
            <h3>unlimited release</h3>
            <h1>India Pale Ale</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              officia error? Totam unde nulla ea repudiandae, corporis optio recusandae
              repellat asperiores minima voluptate soluta laboriosam debitis architecto
              quaerat fugiat nostrum aliquam. Minima ratione sequi omnis ipsa beatae ab odio
              id ad, voluptates fuga incidunt nisi.
            </p>
            <button ref={page2ButtonRef}>Buy Now!</button>
          </div>
          <div id="page2_part2">
            <h3>ABV</h3>
            <h5>Alcohole by valume</h5>
            <div id="box">
              <h2>6.2 <span>%</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere
                ullam hic tempore unde quaerat quisquam
              </p>
            </div>
            <h3>IBU</h3>
            <h5>Isn't Reservation Units</h5>
            <div id="box">
              <h2>51 <span>.1</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere
                ullam hic tempore unde quaerat quisquam
              </p>
            </div>
            <div id="page2_part2_text1">
              <h3>ABV</h3>
              <h5>Alcohole by valume</h5>
              <div id="box">
                <h2>6.2 <span>%</span></h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere
                  ullam hic tempore unde quaerat quisquam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="page3">
          <h1>MounthFeels</h1>
          <div id="page3_text">
            <div id="page3_text_part1">
              <a href="#">
                <img src={youtubeImage} alt="YouTube Thumbnail" />
              </a>
              <h5>Hear it from our beamonster jeremy marshall</h5>
            </div>
            <div id="page3_text_part2">
              <h5>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi officiis omnis fuga ipsum, 
                molestias voluptates rem vitae perferendis, illo sit aliquid tenetur nisi.
              </h5>
              <h2>STYLE</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, 
                non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, 
                ducimus explicabo doloribus.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, 
                non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, 
                ducimus explicabo doloribus.
              </p>
            </div>
          </div>
        </div>

        <div id="page4">
          <div id="page4_color1">
            <img id="page4_color_image1" src={greenLss} alt="Green LSS" />
            <div id="page4_color_image1_text">
              <h4>tropical</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio 
                iusto exercitationem labore nulla atque temporibus beatae?
              </p>
            </div>
          </div>
          <div id="page4_color2">
            <img id="page4_color_image2" src={greenLss} alt="Green LSS" />
            <div id="page4_color_image2_text">
              <h4>pink</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio 
                iusto exercitationem labore nulla atque temporibus beatae?
              </p>
            </div>
          </div>
          <div id="page4_color3">
            <img id="page4_color_image3" src={splatBlack} alt="Splat Black" />
            <div id="page4_color_image3_text">
              <h4>caramel-malt</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio 
                iusto exercitationem labore nulla atque temporibus beatae?
              </p>
            </div>
          </div>
          <img 
            src={masonJar} 
            alt="Mason Jar" 
            id="page4_color_image4" 
          />
        </div>

        <div id="page5">
          <h5>Availability</h5>
          <h1>year round</h1>
          <div id="page5_image_box">
            <div className="page5_extraimage" id="page5_bottel">
              <img id="image11" src={image1} alt="Beer Container" />
              <h4>On Top</h4>
            </div>
            <div id="page5_bottel">
              <img id="image22" src={image2} alt="22 oz Bottles" />
              <h4>22 oz Bottles</h4>
              <h6>6-PACK</h6>
            </div>
            <div id="page5_bottel">
              <img id="image33" src={bottleImg} alt="IPA Bottle" />
              <h4>22 oz Bottles</h4>
              <h6>6-PACK</h6>
            </div>
            <div id="page5_bottel">
              <img id="image44" src={image3} alt="21 oz Bottles" />
              <h4>21 oz Bottles</h4>
            </div>
            <div id="page5_bottel">
              <img id="image55" src={image4} alt="33 oz Bottles" />
              <h4>33 oz Bottles</h4>
            </div>
          </div>
        </div>

        <div id="page6">
          <div id="page6_part1">
            <img src={dthBanner} alt="DTH Program Banner" />
          </div>
          <div id="page6_part2">
            <h5>Recipes</h5>
            <h1>Beer Speaks. Bellies Grumble.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores saepe, ex magnam temporibus 
              repellendus nobis doloremque voluptates quis ad fugit rem similique, porro, neque voluptate numquam quae? 
              Repudiandae, ratione!
            </p>
            <button ref={page6ButtonRef}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;