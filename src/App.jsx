import { useRef,useState  } from 'react';
import BottomNav from './components/BottomNav';
import WASD from './components/WASD';
import ResumeDownloadButton from './components/ResumeDownloadButton';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ClickSpark from './common/ClickSpark';
import Ribbons from './common/Ribbons';
import SplashCursor from './common/SplashCursor';
import Settings from "./common/Settings";
import StackedSections from "./StackedSections";
import ScrollStack, { ScrollStackItem } from './components/ui/ScrollStack';



function App() {
const resumeRef = useRef(null);
const [ribbonSettings, setRibbonSettings] = useState(null);


  return (
    <div className="relative min-h-screen">
      {/* Ribbons effect for cursor movement */}
      <div className="fixed inset-0 z-[0]">
        <Ribbons
          baseThickness={30}
          colors={ribbonSettings?.selected ?? ['#ffffff','#3d5afe','#ff9800','#ff5722','#e91e63','#f44336','#9c27b0','#64ffda','#c0ca33']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
          style={{ pointerEvents: 'none' }} // Pass style to Ribbons if supported
        />
      </div>

      

      <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          {/* <StackedSections>
            <About />
            <Home />
          </StackedSections> */}
{/* <ScrollStack>
  <ScrollStackItem><Home /></ScrollStackItem>
  <ScrollStackItem><About /></ScrollStackItem>
</ScrollStack>     */}
          <Home />
          <About />
          
          <Projects />
          <Contact />


        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4">
          <ResumeDownloadButton ref={resumeRef} />
          <Settings
            anchorBelowRef={resumeRef}
            onChange={setRibbonSettings}
          />
        </div>

          {/* <WASD /> */}
          <BottomNav />
          {/* <SplashCursor /> */}

      
</ClickSpark>
      {/* Main content with ClickSpark */}
      
    </div>
  );
}

export default App;