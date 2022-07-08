import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import HeroHome from "../components/LandingPage/HeroHome";
import Newsletter from "../components/LandingPage/Newsletter";
import Testimonials from "../components/LandingPage/Testimonials";
import FeaturesBlocks from "../components/LandingPage/FeaturesBlocks";
import FeaturesHome from "../components/LandingPage/Features";
import { Notify } from "../components/Toast/Toast";
import EmailSent from "./EmailSent";

function Home() {
  var users = localStorage.getItem("todoAppUserID");
  var userid = JSON.stringify(users);
  // var xlog = getUser();
  // console.log(xlog);
  // var newUser = localStorage.getItem("newUser");

  return (
    <>
      {localStorage.getItem("todoAppUser") ? (
        localStorage.getItem("verified") === "true" ? (
          <div className="flex flex-col min-h-screen overflow-hidden">
            <Notify />
            {/* {users && getUser()} */}
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
        ) : (
          <EmailSent />
        )
      ) : (
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Notify />
          {/* {users && getUser()} */}
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
      )}
    </>
  );
}

export default Home;
