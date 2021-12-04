import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <center>
        <h1>ABOUT SPEAKERS</h1>
      </center>
      <div class="container">
        <div class="card">
          <div class="face face1">
            <div class="content">
              <span class="stars"></span>
              <img
                class="imageOfDude"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
              />
              <h2 class="p1M">Virat Kohli</h2>
              <p class="p1M">
                Virat Kohli is an Indian cricketer and the captain of India
                national cricket team in ODIs and Tests.
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
              <img
                class="imageOfDude"
                src="https://www.botlibre.com/avatars/a15197017.jpg"
              />
              <h2 class="p2M">Bill Gates</h2>
              <p class="p2M">
                Bill Gates is an American business magnate, software developer,
                investor and philanthropist. He is also the co-founder of
                Microsoft.
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
              <img
                class="imageOfDude"
                src="https://www.forbes.com/special-report/2014/midas/img/midas-elon-musk.png"
              />
              <h2 class="p3M">Elon Musk</h2>
              <p class="p3M">
                Elon Reeve Musk FRS is an entrepreneur and business magnate. He
                is the founder, CEO and Chief Engineer at SpaceX.
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
                <img
                  class="imageOfDude"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
                />
                <h2 class="p1M">Virat Kohli</h2>
                <p class="p1M">
                  Virat Kohli is an Indian cricketer and the captain of India
                  national cricket team in ODIs and Tests.
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
                <img
                  class="imageOfDude"
                  src="https://www.botlibre.com/avatars/a15197017.jpg"
                />
                <h2 class="p2M">Bill Gates</h2>
                <p class="p2M">
                  Bill Gates is an American business magnate, software
                  developer, investor and philanthropist. He is also the
                  co-founder of Microsoft.
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
                <img
                  class="imageOfDude"
                  src="https://www.forbes.com/special-report/2014/midas/img/midas-elon-musk.png"
                />
                <h2 class="p3M">Elon Musk</h2>
                <p class="p3M">
                  Elon Reeve Musk FRS is an entrepreneur and business magnate.
                  He is the founder, CEO and Chief Engineer at SpaceX.
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

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  margin-top: 60px;

  h1 {
    font-size: 2.5rem;
  }

  .imageOfDude {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin-left: 20%;
    margin-bottom: 5px;
  }

  .container {
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    padding: 40px 0;

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
