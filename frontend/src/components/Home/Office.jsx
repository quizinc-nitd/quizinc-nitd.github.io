import React from "react";
import "./Office.css";
import profile from "../../assets/profile.png";
import ankit from "../../assets/ankit.jpeg";
import pranit from "../../assets/pranit.jpg";
import Ridam from "../../assets/Ridam.jpg";
import saptaparna from "../../assets/saptaparna.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Office = () => {


    AOS.init({
        offset:240,
        duration: 1000,
      });    

  return (
    <div class="homeOffice">
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={saptaparna} class="user-img" alt="Aniket" />
              <h2>Saptaparna Patra</h2>
              <p>President</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 98314 49219</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/saptaparna.patra.007">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:saptaparna.patra@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={ankit} class="user-img" alt="Aniket" />
              <h2>Ankit Rai</h2>
              <p>Treasurer</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 87773 24733</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/ar0399">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:ankitrai2000@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={pranit} class="user-img" alt="Aniket" />
              <h2>Pranit Pandey</h2>
              <p>Convenor</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 86172 25347</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/martinlouis.kingjuniorx.9">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:pranithonypandeano@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="homeOfficeCard" data-aos="zoom-in">
        <div class="homeOfficeInnerBox" id="card">
          <div class="homeOfficeCardFront">
            <div class="homeOfficeProfile">
              <img src={Ridam} class="user-img" alt="Aniket" />
              <h2>Ridam Hazra</h2>
              <p>General Secretary</p>
            </div>
          </div>
          <div class="homeOfficeCardBack">
            <div class="homeOfficeData">
              <p>Contact Handles</p>
              <h3>+91 9874490801</h3>
              <div class="homeOfficesocialImage">
              <a href="https://www.facebook.com/ridam.hazra">
                  <i class="fa fa-facebook facebook" aria-hidden="true" />
                </a>
                <a href="mailto:rhazra0602@gmail.com">
                  <i class="fa fa-envelope instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
