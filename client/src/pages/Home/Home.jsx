import "./Home.scss";
import {Link} from 'react-router-dom'

const Home = () => {
  
  return (
    <div className="Home">
      <div className="hero">
        <div className="container">
          <div className="row align_items_center justify_content_between class">
            <div className="img">
              <img src="/img/hero_bcg.png" alt="img"/>
              <div className="title">
                <h2 className="img_title">
                  Vocabulary for your self-development
                </h2>
              </div>
            </div>
            <div className="info">
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
