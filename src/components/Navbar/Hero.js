import Carousel from "react-bootstrap/Carousel";
import video_1 from "../../videos/video_1(1080p).mp4";
import video_2 from "../../videos/video_2.mp4";
import video_3 from "../../videos/video_3.mp4";
import video_4 from "../../videos/Video_4.mp4";
import video_5 from "../../videos/Video_5.mp4";
import video_6 from "../../videos/Video_6.mp4";

const Hero = () => {
  const sliderVideos = document.querySelectorAll(".slider-video");
  const handler = () => {
    sliderVideos.forEach((video,key) => {
    video.pause();
    video.currentTime = 0;
    video.load();
});
  };
  return (
    <div className="Hero video_edit">
      <div>
        <Carousel controls={false}fade={true} interval={5500} pause={false}className="hero-slider" onSlid={handler}
        >
          <Carousel.Item>
                <video className="slider-video" src={video_6} loop autoPlay muted loading="lazy"></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={video_5}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={video_3}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={video_4}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={video_1}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
          <Carousel.Item>
            <video
            className="slider-video"
            src={video_2}
            loop
            autoPlay
            muted
            loading="lazy"
          ></video>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
export default Hero;