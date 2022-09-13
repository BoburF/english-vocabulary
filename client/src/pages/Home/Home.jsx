import React, { useRef } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Parallax from 'parallax-js'
import 'parallax-js/dist/parallax'
import { useEffect } from "react";

const Home = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true
    })

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])
  return (
    <div className="Home">
      <div className="hero">
        <div className="after"  ref={sceneEl} data-relative-input="true" data-depth="0.2"></div>
        <div className="before"></div>
        <div className="container">
          <div className="row align_items_center justify_content_between">
            <div className="img">
              <img src="/img/hero_bcg.png" alt="" />
              <div className="title">
                <h2 className="img_title">
                  Vocabulary for your self-development
                </h2>
              </div>
            </div>
            <div className="info">
              <div className="after"></div>
              <div className="before"></div>
              <div className="info_bottom">
                <p className="text_info">
                  -.-- --- ..- / .- .-. . / - .... . / -... . ... -
                </p>
                <h3>Morse alphabet</h3>
                <Link to="/sign/up">
                  <button>Start</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
