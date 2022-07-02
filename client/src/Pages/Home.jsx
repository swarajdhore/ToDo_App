import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";
import HeroHome from "../components/LandingPage/HeroHome";
import Newsletter from "../components/LandingPage/Newsletter";
import Testimonials from "../components/LandingPage/Testimonials";
import FeaturesBlocks from "../components/LandingPage/FeaturesBlocks";
import FeaturesHome from "../components/LandingPage/Features";
import { Notify } from "../components/Toast/Toast";
// import Toast from "../components/Toast/Toast";
import { getUser } from "../Redux/Reducer/User/user.action";

function Home() {
  var users = localStorage.getItem("todoAppUserID");
  // var newUser = localStorage.getItem("newUser");

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Notify />
        {users && getUser()}
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
      {/* <ToastContainer limit={1} /> */}
    </>
  );
  // if (users) {
  //   return (
  //     <>
  //       {/* me don min madhe aalo  */}
  //       <div className="flex flex-col min-h-screen overflow-hidden">
  //         <Notify />
  //         {users && getUser()}
  //         {/*  Site header */}
  //         <Header />
  //         {/*  Page content */}
  //         <main className="flex-grow">
  //           {/*  Page sections */}
  //           <HeroHome />
  //           <FeaturesHome />
  //           <FeaturesBlocks />
  //           <Testimonials />
  //           <Newsletter />
  //         </main>
  //         {/*  Site footer */}
  //         <Footer />
  //       </div>
  //       <ToastContainer limit={1} />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       {/* me don min madhe aalo  */}
  //       <div className="flex flex-col min-h-screen overflow-hidden">
  //         {users && getUser()}
  //         {/*  Site header */}
  //         <Header />
  //         {/*  Page content */}
  //         <main className="flex-grow">
  //           {/*  Page sections */}
  //           <HeroHome />
  //           <FeaturesHome />
  //           <FeaturesBlocks />
  //           <Testimonials />
  //           <Newsletter />
  //           {/* <Toast /> */}
  //         </main>
  //         {/*  Site footer */}
  //         <Footer />
  //       </div>
  //       {/* <ToastContainer limit="1" /> */}
  //     </>
  //   );
  // }
}

export default Home;
