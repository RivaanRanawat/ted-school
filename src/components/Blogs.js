import React from "react";
import styled from "styled-components";

function Blogs() {
  return (
    <Container>
      <center>
        <h1 style={{fontSize: '2.5rem'}}>BLOGS</h1>
      </center>
      <div className="container">
        <div className="card">
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">Technology</span>
            <h4>What's new in 2022 Tech</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?food"
              alt="card__image"
              class="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-brown">Food</span>
            <h4>Delicious Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?car,automobile"
              alt="card__image"
              class="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-red">Automobile</span>
            <h4>Race to your heart content</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-block: 2rem;
    gap: 2.4rem;
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 0.1rem 1rem rgba(255, 255, 255, 0.1);
    border-radius: 1em;
    background: #303041;
  }

  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .tag-blue {
    background: #56ccf2;
    background: linear-gradient(to bottom, #2f80ed, #56ccf2);
    color: #fafafa;
  }

  .tag-brown {
    background: #d1913c;
    background: linear-gradient(to bottom, #ffd194, #d1913c);
    color: #fafafa;
  }

  .tag-red {
    background: #cb2d3e;
    background: linear-gradient(to bottom, #ef473a, #cb2d3e);
    color: #fafafa;
  }

  .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .user {
    display: flex;
    gap: 0.5rem;
  }
`;

export default Blogs;
