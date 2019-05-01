import React from 'react';

import Intro from './Intro/Intro';
import About from './About/About';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';



import ReactFullpage from '@fullpage/react-fullpage';
const Fullpage = () => (
    <ReactFullpage
      autoScrolling={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" >
              <Intro 
              about={() => fullpageApi.moveTo(2)}
              skills={()=> fullpageApi.moveTo(3)}
              portfolio={()=> fullpageApi.moveTo(4)}/>
              
            </div>
            <div className="section">
              <About skills={()=> fullpageApi.moveTo(3)}
              portfolio={()=> fullpageApi.moveTo(4)}/>
            </div>
            <div className="section" >
              <Skills about={() => fullpageApi.moveTo(2)}
              portfolio={()=> fullpageApi.moveTo(4)}
              />
            </div>
            <div className="section" >
              <Portfolio about={() => fullpageApi.moveTo(2) }
              skills={()=> fullpageApi.moveTo(3)}/>
            </div>
            <div className="section" >
              <Contact about={() => fullpageApi.moveTo(2) }
              skills={()=> fullpageApi.moveTo(3)}
              portfolio={()=> fullpageApi.moveTo(4)}/>
            </div>
            
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

export default Fullpage;