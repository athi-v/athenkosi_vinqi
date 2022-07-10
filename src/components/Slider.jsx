import React from "react";

// Images from from assets folder
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

// Videos from from assets folder
import Vid1 from "../assets/videos/TimeToLookUpAgain.mp4";
import Vid2 from "../assets/videos/Grow_up_Stage_Modul.mp4";
import Vid3 from "../assets/videos/bmw_stage_3.mp4";
import Vid4 from "../assets/videos/EasyRider.mp4";
import Vid5 from "../assets/videos/eq_stage.mp4";
import Vid6 from "../assets/videos/katjes_stage.mp4";
import Vid7 from "../assets/videos/Mercedes_Leon.mp4";
import Vid8 from "../assets/videos/risk.mp4";
import Vid9 from "../assets/videos/stage_g_class_dna.mp4";
import Vid10 from "../assets/videos/stage_xmas.mp4";
import Vid11 from "../assets/videos/IAA_Makingof.mp4";
import Vid12 from "../assets/videos/F1_stage.mp4";

const Slider = () => {
  // Hover functions sVideo and pVideo

  //when unhovered the video on the slider stops playing
  const sVid = (e) => {
    e.target.pause();
    console.log("off");
  };

  //when hovered the video on the slider starts playing
  const pVid = (e) => {
    e.target.play();
    console.log("on");
  };

  // video property
  // src path of the video
  //poster is more like <img src=>, it's image.
  //before hovered a "poster", when hovered the video plays

  return (
    <div className="slider">
      <div className="container">
        <div className="content">
          <div className="col">
            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid2}
                  poster={Download}
                  preload="none"
                />
                <div className="abs">
                  <h3>Grow up</h3>
                  <p className="grey">Stories of a new generation</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid11}
                  poster={Download1}
                  preload="none"
                />
                <div className="abs">
                  <h3>Luxury in motion</h3>
                  <p className="grey">The FO15 concept car</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid1}
                  poster={Download2}
                  preload="none"
                />
                <div className="abs">
                  <h3>Unleash your senses</h3>
                  <p className="grey">The new C-Class cabriolet</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid4}
                  poster={Download3}
                  preload="none"
                />
                <div className="abs">
                  <h3>Easy Rider</h3>
                  <p className="grey">Mercedes AMG GT C Roadster</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid6}
                  poster={Download4}
                  preload="none"
                />
                <div className="abs">
                  <h3>Jes! All veggie</h3>
                  <p className="grey">Our first ever sweets campaign</p>
                </div>
              </div>
            </div>

            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
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
                  onMouseOver={pVid}
                  onMouseOut={sVid}
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
                  onMouseOver={pVid}
                  onMouseOut={sVid}
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
                  onMouseOver={pVid}
                  onMouseOut={sVid}
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
                  onMouseOver={pVid}
                  onMouseOut={sVid}
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
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid5}
                  poster={Download10}
                  preload="none"
                />
                <div className="abs">
                  <h3>Flip the switch</h3>
                  <p className="grey">Electric Intelligence by Mercedes</p>
                </div>
              </div>
            </div>
            <div>
              <div className="vid">
                <video
                  onMouseOver={pVid}
                  onMouseOut={sVid}
                  src={Vid9}
                  poster={Download11}
                  preload="none"
                />
                <div className="abs">
                  <h3>Stronger than time</h3>
                  <p className="grey">The new G-Class</p>
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
