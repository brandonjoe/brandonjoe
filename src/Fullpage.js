import React from 'react';

import Intro from './Intro/Intro';
import About from './About/About';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import classes from './Fullpage.module.css'
import { Link } from "react-router-dom";
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
    <ReactFullpage
      autoScrolling={false}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className={`section ${classes.section} fp-responsive`} >
              <Intro 
              about={() => fullpageApi.moveTo(2)}
              skills={()=> fullpageApi.moveTo(3)}
              portfolio={()=> fullpageApi.moveTo(4)}
              contact={()=> fullpageApi.moveTo(5)}/>
              
            </div>
            <div className={`section ${classes.section}`}>
              <About 
              skills={()=> fullpageApi.moveTo(3)}
              portfolio={()=> fullpageApi.moveTo(4)}
              contact={()=> fullpageApi.moveTo(5)}/>
            </div>
            <div className={`section ${classes.section}`} >
              <Skills about={() => fullpageApi.moveTo(2)}
              portfolio={()=> fullpageApi.moveTo(4)}
              contact={()=> fullpageApi.moveTo(5)}
              />
            </div>
            <div className={`section ${classes.section}`} >
              <Portfolio about={() => fullpageApi.moveTo(2) }
              skills={()=> fullpageApi.moveTo(3)}
              contact={()=> fullpageApi.moveTo(5)}/>
            </div>
            <div className={`section ${classes.section}`} >
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