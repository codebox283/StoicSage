import Header from '../components/Header';
import Hero from '../components/Hero';
import What from '../components/What';
import Newsletter from '../components/Newsletter';
import StoicAI from '../components/StoicAI';
import Wallpapers from  '../components/Wallpapers';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Discover from '../components/Discover';
// import './App.css';

function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Discover></Discover>
      <Blogs></Blogs>
      <StoicAI></StoicAI>
      {/* <Footer></Footer> */}
      <Newsletter></Newsletter>
      <Footer></Footer>
      {/*
      <StoicAI></StoicAI>
      <Wallpapers></Wallpapers>
      <Footer></Footer> */}
    </>
  );
}

export default Home;
