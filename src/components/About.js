import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <center>
        <h1>ABOUT US</h1>
      </center>
      <TedXYouth>
        <h2>TEDxYouth at CNMS</h2>
        <p>
          For the ideas worth spreading, the words worth hearing, the thoughts
          worth thinking and the people worth meeting. TEDxYouth@CNMS is an
          individually organised TED event, a platform for new perspectives; for
          new ideas; for greater understanding and comprehension of the “whys?”
          and “whats?” of life. With the constant hubbub of life in the 21st
          century, one of the many things that often go unnoticed is our lack of
          basic conversation. Despite it being one of the constants for humans,
          so many words go unspoken. We volunteer TEDxYouth as an amplifier to
          all those words still stuck in the dredges, the speeches crumpled on
          pieces of paper that never got half the chance they deserve. To those
          words, we apologise. We hope to bring you out of that darkness and, if
          you let us, to be the bridge that you overcome, on the path to light.
          Because what is a bridge, if there's no one to cross it?
        </p>
      </TedXYouth>

      <TedXYouth>
        <h2>About CNMS</h2>
        <p>
          C.N.M. SCHOOL & N. D. PAREKH.PRE-PRIMARY SCHOOL was the first English
          medium school started by SVKM in 1997. It was the dream project of
          Late Shri Mukeshbhai Patel, since SVKM was running several colleges
          but had only one vernacular medium school. Having stated off with a
          classroom of merely 25 students, Chatrabuj Narsee Memorial School, is
          now one of the best schools in the city, having a capacity of over
          3000 students. Giving our students the freedom over their choices and
          building their personality in more ways than one, is our goal.
          Training the global citizens of tomorrow, here at CNMS, we believe we
          can fly.
        </p>
      </TedXYouth>

      <TedXYouth>
        <h3>Motto</h3>
        <p className="para">
          To comprehend, ascend, and amend the unspoken; To bring your voice to
          the table, make the gap unbroken
        </p>
      </TedXYouth>

      <TedXYouth>
        <h3>Mission</h3>
        <p className="para">
          To speak their minds, voice their opinions, to not be afraid to stand
          out among the othersbe a safe space to allow experimentation of ideas,
          ideologies and mindsets.
        </p>
      </TedXYouth>

      <TedXYouth>
        <h3>Philosophy</h3>
        <p className="para">Conviction and consistency- a lifelong legacy.</p>
      </TedXYouth>

      <center>
        <h1 style={{ marginBottom: "10px" }}>ABOUT SPEAKERS</h1>
      </center>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <center>
                <img class="imageOfDude" src="/images/speakerImage.png" />
              </center>
              <h2 class="p1M">Mr. Siddhant Shah</h2>
              <p class="p1M">
                Mr. Siddhant Shah is a heritage architect and an access
                consultant. He has an MA in Heritage Management from the
                University of Kent and a post graduate diploma in Indian
                Aesthetics.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>01</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <center>
                <img class="imageOfDude" src="/images/speakerImage2.png" />
              </center>
              <h2 class="p2M">Dr. Anjana Vinod</h2>
              <p class="p2M">
                Dr. Anjana Vinod is a Positivity and Breast Cancer coach. She is
                a published Author and Keynote speaker as well as an image
                consultant and corporate trainer.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>02</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <center>
                <img class="imageOfDude" src="/images/speakerImage3.png" />
              </center>
              <h2 class="p3M">Ms. Sherin Matthew</h2>
              <p class="p3M">
                Ms. Sherin Matthew is an International storyteller, cognitive
                scientist, child psychologist and has innovated her methodology
                by integrating various therapeutic modalities.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>03</h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <center>
                <img class="imageOfDude" src="/images/speakerImage4.png" />
              </center>
              <h2 class="p1M">Ms. Arunima Sarkar</h2>
              <p class="p1M">
                Ms. Arunima has over 20 years of experience in corporate growth,
                technology policy with special focus on data and artificial
                intelligence. She's led the Global Applied intelligence Research
                of Accenture.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>04</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <center>
                <img class="imageOfDude" src="/images/speakerImage5.png" />
              </center>
              <h2 class="p2M">Mr. Dhumketu Punatar</h2>
              <p class="p2M">
                Mr. Dhumketu Punatar heads Panache Engineers Pvt. Ltd., a
                business which specialises in making OEM and Siemens
                equivalents, as well as custom designed electrical components.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>05</h2>
          </div>
        </div>

        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <center>
                <img class="imageOfDude" src="/images/speakerImage6.png" />
              </center>
              <h2 class="p3M">Dr. Harshada Rajadhyaksha</h2>
              <p class="p3M">
                Dr. Harshada Rajadhyaksha is the founder and owner of Prakruti
                Sports Science and Physiotherapy Clinic, which has been in
                existence since 1997.
              </p>
            </div>
          </div>
          <div class="face face2">
            <h2>06</h2>
          </div>
        </div>
      </div>
    </Container>
  );
}

const TedXYouth = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  h2 {
    font-size: 2em;
    height: 30px;
  }

  h3 {
    padding-left: 1rem;
    font-size: 2em;
    height: 12.5px;
  }

  .para {
    padding-left: 1rem;
  }
`;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  margin-top: 60px;

  h1 {
    font-size: 2.5rem;
  }

  .imageOfDude {
    height: 120px;
    width: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    object-fit: cover;
  }

  .container {
    max-width: 100vw;
    display: grid;
    grid-gap: 35px;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    margin: 0 auto;
    padding: 40px 0;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .card {
      position: relative;
      width: 300px;
      height: 400px;
      margin: 0 auto;
      background: #000;
      border-radius: 15px;

      .face {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &.face1 {
          box-sizing: border-box;
          padding: 20px;

          h2 {
            margin: 0;
            padding: 0;
          }

          .p2M {
            background-color: #fffc00;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .p1M {
            background-color: #00fffc;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .p3M {
            background-color: #fff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        &.face2 {
          transition: 0.5s;

          h2 {
            margin: 0;
            padding: 0;
            font-size: 10em;
            color: #fff;
            transition: 0.5s;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 10;
          }
        }
      }
    }

    .card:hover .face.face2 {
      height: 60px;

      h2 {
        font-size: 2em;
      }
    }

    .card:hover {
      box-shadow: 0 15px 60px #3d3a50;
    }

    .card:nth-child(1) .face.face2 {
      // background-image: linear-gradient(
      //   3180deg,
      //   #000000 0%,
      //   rgba(255, 0, 0, 1) 74%
      // );

      background-color: #990000;
      background-image: linear-gradient(147deg, #990000 0%, #ff0000 74%);
      border-radius: 15px;
    }

    .card:nth-child(2) .face.face2 {
      background-color: #990000;
      background-image: linear-gradient(147deg, #990000 0%, #ff0000 74%);
      border-radius: 15px;
    }

    .card:nth-child(3) .face.face2 {
      background-color: #990000;
      background-image: linear-gradient(147deg, #990000 0%, #ff0000 74%);
      border-radius: 15px;
    }
  }
`;

export default About;
