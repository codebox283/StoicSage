import HeroImg from '../assets/img1-min.jpg';
import '../styles/Hero.css'

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-Title">
        <h1 className="Hero-Title-head">“If it is not right, do not do it, if it is not true, do not say it.”</h1>
        <h1>– Marcus Aurelius</h1>
      </div>
      <div className="Hero-Img">
        <img src={HeroImg} alt=''></img>
      </div>
    </div>
  );
}

export default Hero;