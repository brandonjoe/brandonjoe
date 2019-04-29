import React from 'react';

import Intro from './Intro/Intro';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import ReactFullpage from '@fullpage/react-fullpage';
const Fullpage = () => (
    <ReactFullpage
      autoScrolling={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" >
              <Intro about={() => fullpageApi.moveTo(2)}/>
              
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section" >
              <Skills />
            </div>
            <div className="section">
              <About />
            </div>
            <div className="section" >
              <Intro />
            </div>
            
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

export default Fullpage;