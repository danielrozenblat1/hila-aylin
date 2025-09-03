import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AcademySyllabus from './components/course/Course';
import ThirdScreen from './screens/ThirdScreen';
import TreatmentCards from './components/moreServices/MoreServices';
import AboutMe from './components/me/Me';
import NavBarNew from './components/NewNav/NavBarNew';
import FixedFirstScreen from './screens/FixedFirstScreen';
import Recommendations from './components/recommends/Recommends';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import SixthScreen from './screens/SixthScreen';

function App() {
  return <> 
  <NavBarNew/>
    <FixedFirstScreen/>
    <SixthScreen/>
    {/* <Recommendations title="זו יכולה להיות את!"/> */}
    <SecondScreen/>
    <AboutMe/>
    <AcademySyllabus/>
<ForthScreen/>
    <ThirdScreen/>
    <ByMe/>
  </>
}

export default App;
