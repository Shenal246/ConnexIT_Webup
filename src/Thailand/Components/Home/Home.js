
import HeroSection from '../Home/Hero/Hero';
import WhoweareSection from './Who_we_are/Whoweare';
import Latest from './LatestEvents/Latest';
// import Test from './Testing/test';
import Vendors from './Vendors/Vendors';
import ThaiNavbar from '../Navbar/Navbar';
import ThaiChat from '../ChatBot/Chat';
import ThaiFooter from '../Footer/Footer';


function Home() {
  return (
    <>
<ThaiNavbar/>
<ThaiChat/>
      <HeroSection />
      <WhoweareSection />
      {/* <Test/> */}
      <Vendors />
      <Latest/>
<ThaiFooter/>
    </>
  );
}

export default Home;