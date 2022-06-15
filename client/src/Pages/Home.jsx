import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import HeroHome from '../components/LandingPage/HeroHome';
import Newsletter from '../components/LandingPage/Newsletter';
import Testimonials from '../components/LandingPage/Testimonials';
import FeaturesBlocks from '../components/LandingPage/FeaturesBlocks';
import FeaturesHome from '../components/LandingPage/Features';

function Home() {
  return (
    <>
     <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
       <Header />
 
      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

      </div>
   </>
  );
}

export default Home;
