import Header from '../components/Header';
import Hero from '../components/Hero';
import What from '../components/What';
import Newsletter from '../components/Newsletter';
import StoicAI from '../components/StoicAI';
import Wallpapers from  '../components/Wallpapers';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
// import './App.css';

function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <What></What>
      <Newsletter></Newsletter>
      <StoicAI></StoicAI>
      <Wallpapers></Wallpapers>
      <Blogs></Blogs>
      <Footer></Footer>
    </>
  );
}

export default Home;
