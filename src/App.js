import "./App.css";

import FirstSection from "./FirstSection";
import Hor from "./Hor";
import Main from "./Main";
import tv from "./Images/tv.png";
import rajma from "./Images/rajma.png";
import mobile from "./Images/mobile.jpg";
import SecondSection from "./SecondSection";
import child from "./Images/child.png";
import Faq from "./Faq";
import Email from "./Email";
import Strange from "./Strange";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./Hero";
import SignIn from "./SignIn";
import Card from "./Dashboard/Card";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";

function HomePage() {
  return (
    <div className="app">
      <Main>
        <Nav /> <Hero />
      </Main>
      <Hor />
      <FirstSection
        head="Enjoy on your TV"
        para=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        img={tv}
      />
      <Hor />
      <SecondSection
        img={mobile}
        head="Download your shows to watch offline"
        para="Save your favourites easily and always have something to watch."
      >
        <Strange />
      </SecondSection>
      <Hor />
      <FirstSection
        head="Watch everywhere"
        para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img={rajma}
      />
      <Hor />
      <SecondSection
        img={child}
        head="Create profiles for kids"
        para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      />
      <Hor />
      <Faq />
      <Hor />
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signin" element={<SignIn />}></Route>
//         <Route path="/">
//           <div className="app">
//             <Main>
//               <Nav /> <Hero />
//             </Main>
//             <Hor />
//             <FirstSection
//               head="Enjoy on your TV"
//               para=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
//               img={tv}
//             />
//             <Hor />
//             <SecondSection
//               img={mobile}
//               head="Download your shows to watch offline"
//               para="Save your favourites easily and always have something to watch."
//             >
//               <Strange />
//             </SecondSection>
//             <Hor />
//             <FirstSection
//               head="Watch everywhere"
//               para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
//               img={rajma}
//             />
//             <Hor />
//             <SecondSection
//               img={child}
//               head="Create profiles for kids"
//               para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
//             />
//             <Hor />
//             <Faq />
//             <Hor />
//             <Footer />
//             <Hor />
//           </div>
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
