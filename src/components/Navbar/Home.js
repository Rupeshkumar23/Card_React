import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "./Imgs/India.jpg";
import Img2 from "./Imgs/London.jpg";
import Img3 from "./Imgs/Newyork.jpg";
import Img4 from "./Imgs/Img4.jpg";
import Img5 from "./Imgs/Img5.jpg";
import Img6 from "./Imgs/Img6.jpg";
import Img_1 from "./Imgs/Img_1.jpg";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
     <Container className="pt-5 pb-5  "> 
         <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid rounded img_1"
              src={Img1}
              alt="FirstSlide"
            />
            <Carousel.Caption>
              <h3 className="fs-1 Nav_bg font_F">Plan Your Trip India</h3>
              <p className="fs-3 Nav_bg1 text-black font_F ">
                Explore the incredible diversity of India's culture and
                landscapes.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid rounded img_1"
              src={Img2}
              alt="SecondSlide"
            />
            <Carousel.Caption>
              <h3 className="fs-1 Nav_bg font_F">Plan Your Trip London</h3>
              <p className="fs-3 Nav_bg1 text-black font_F">
                Experience the rich history and vibrant culture of London.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid rounded img_1 "
              src={Img3}
              alt="ThirdSlide"
            />
            <Carousel.Caption>
              <h3 className="fs-1 Nav_bg font_F">Plan Your Trip NewYork</h3>
              <p className="fs-3 Nav_bg1 text-black font_F">
                Discover the exciting opportunities and attractions in New York
                City.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
     </Container> 
      <Container>
        <h1 className="fs-3 fw-bold bg-dark text-white text-uppercase text-center mt-2">
          Visit Our Famous Countries
        </h1>
        <div className=" py-5 Nav_bg3">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="card shadow-sm bg-dark text-white d-flex flex-column">
                <div className="col">
                  <img
                    src={Img_1}
                    alt="India"
                    width="100%"
                    height="200"
                    className="img-fluid"
                  />

                  <div className="card-body d-flex flex-column">
                    <p className="card-text">
                      Explore the rich culture and heritage of India. From the
                      iconic Taj Mahal to the bustling streets of Delhi, India
                      offers a vibrant and diverse travel experience.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="fs-3">⭐⭐⭐⭐⭐</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm bg-dark text-white d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img2}
                      alt="London"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <p className="card-text">
                        Discover the historic landmarks of London, including the
                        Tower of London, Buckingham Palace, and the British
                        Museum. London is a city filled with history and
                        modernity.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="fs-3">⭐⭐⭐⭐⭐</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm bg-dark text-white d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img3}
                      alt="New york"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <p className="card-text">
                        Experience the hustle and bustle of New York City, the
                        city that never sleeps. Visit iconic landmarks such as
                        Times Square, Central Park, and the Statue of Liberty.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="fs-3">⭐⭐⭐⭐⭐</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm bg-dark text-white d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img4}
                      alt="China"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <p className="card-text">
                        Explore the rich history and culture of China. Visit the
                        Great Wall of China, the Forbidden City, and enjoy
                        delicious Chinese cuisine.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="fs-3">⭐⭐⭐⭐⭐</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm bg-dark text-white d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img5}
                      alt="Japan"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <p className="card-text">
                        Immerse yourself in the beauty of cherry blossoms,
                        witness traditional tea ceremonies, and discover the
                        perfect blend of tradition and innovation in Japan.
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <small className="fs-3">⭐⭐⭐⭐⭐</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm bg-dark text-white d-flex flex-column">
                  <div className="col">
                    <img
                      src={Img6}
                      alt="India"
                      width="100%"
                      height="200"
                      className="img-fluid"
                    />

                    <div className="card-body d-flex flex-column">
                      <p className="card-text">
                        Fall in love with the romantic city of Paris. Visit
                        iconic landmarks such as the Eiffel Tower and the Louvre
                        Museum, savor exquisite French cuisine.
                      </p>

                      <div className="d-flex justify-content-between align-items-center">
                        <small className="fs-3">⭐⭐⭐⭐⭐</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
