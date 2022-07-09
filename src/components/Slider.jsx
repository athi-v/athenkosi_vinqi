import React from "react";
import Download from "../assets/pictures/download.jpg";
import Download1 from "../assets/pictures/download-1.jpg";
import Download2 from "../assets/pictures/download-2.jpg";
import Download3 from "../assets/pictures/download-3.jpg";
import Download4 from "../assets/pictures/download-4.jpg";
import Download5 from "../assets/pictures/download-5.jpg";
import Download6 from "../assets/pictures/download-6.jpg";
import Download7 from "../assets/pictures/download-7.jpg";
import Download8 from "../assets/pictures/download-8.jpg";
import Download9 from "../assets/pictures/download-9.jpg";
import Download10 from "../assets/pictures/download-10.jpg";
import Download11 from "../assets/pictures/download-11.jpg";
import Vid1 from "../assets/videos/TimeToLookUpAgain.mp4";

const Slider = () => {
  const sMovie = (e) => {
    e.target.pause();
    console.log("off");
  };

  const pMovie = (e) => {
    e.target.play();
    console.log("on");
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="content">
          <div className="col">
            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download1}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download2}
                  preload="none"
                />
                <div className="abs">
                  <h3>Time to look up again</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download3}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download4}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download5}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download6}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download7}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download8}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download9}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download10}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid1}
                  poster={Download11}
                  preload="none"
                />
                <div className="abs">
                  <h3>Shup</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
