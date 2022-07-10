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
import Vid2 from "../assets/videos/Grow_up_Stage_Modul.mp4";
import Vid3 from "../assets/videos/bmw_stage_3.mp4";
import Vid4 from "../assets/videos/EasyRider.mp4";
import Vid5 from "../assets/videos/eq_stage.mp4"
import Vid6 from "../assets/videos/katjes_stage.mp4"
import Vid7 from "../assets/videos/Mercedes_Leon.mp4"
import Vid8 from "../assets/videos/risk.mp4"
import Vid9 from "../assets/videos/stage_g_class_dna.mp4"
import Vid10 from "../assets/videos/stage_xmas.mp4"
import Vid11 from "../assets/videos/IAA_Makingof.mp4"
import Vid12 from "../assets/videos/F1_stage.mp4"


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
                  src={Vid2}
                  poster={Download}
                  preload="none"
                />
                <div className="abs">
                <h3>Grow up stage</h3>
                  <p className="grey">Mercedes-Benz Modul</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid11}
                  poster={Download1}
                  preload="none"
                />
                <div className="abs">
                <h3>Making of</h3>
                  <p className="grey">Mercedes-Benz Concept</p>
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
                  src={Vid4}
                  poster={Download3}
                  preload="none"
                />
                <div className="abs">
                  <h3>Easy Rider</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid6}
                  poster={Download4}
                  preload="none"
                />
                <div className="abs">
                  <h3>Snack</h3>
                  <p className="grey">Katjes</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid8}
                  poster={Download5}
                  preload="none"
                />
                <div className="abs">
                  <h3>Risk</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid7}
                  poster={Download6}
                  preload="none"
                />
                <div className="abs">
                  <h3>Mercedes Leon</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid10}
                  poster={Download7}
                  preload="none"
                />
                <div className="abs">
                  <h3>Xmas</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid12}
                  poster={Download8}
                  preload="none"
                />
                <div className="abs">
                  <h3>F1 Stage</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid3}
                  poster={Download9}
                  preload="none"
                />
                <div className="abs">
                  <h3>Stage 3</h3>
                  <p className="grey">BMW</p>
                </div>
              </div>
            </div>
            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid5}
                  poster={Download10}
                  preload="none"
                />
                <div className="abs">
                  <h3>EQ</h3>
                  <p className="grey">Mercedes-Benz</p>
                </div>
              </div>
            </div>
            <div>
              <div className="vid">
                <video
                  onMouseOver={pMovie}
                  onMouseOut={sMovie}
                  src={Vid9}
                  poster={Download11}
                  preload="none"
                />
                <div className="abs">
                  <h3>Mercedes Leon</h3>
                  <p className="grey">Mercedes-Benz G-Class</p>
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
