import React, { Component, lazy, Suspense } from 'react';

import Intro from './Intro/Intro';
import About from './About/About';
import Skills from './Skills/Skills';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';
import classes from './Fullpage.module.css'
import ReactFullpage from '@fullpage/react-fullpage';
// const ReactFullpage = lazy(()=> import("@fullpage/react-fullpage"))
// const Intro = lazy(() => import('./Intro/Intro'))
// const About = lazy(() => import('./About/About'))
// const Skills = lazy(() => import('./Skills/Skills'))
// const Portfolio = lazy(() => import('./Portfolio/Portfolio'))
// const Contact = lazy(() => import('./Contact/Contact'))
// const Blog = lazy(() => import('./Blog/Blog'))
// const classes = lazy(() => import('./Fullpage.module.css'))

class Fullpage extends Component{
    constructor(props){
      super(props);
      this.state= {
          counter:0
      }
      this.handleImageLoad = this.handleImageLoad.bind(this)
  }
  handleImageLoad() {
      console.log('imageloaded')
      this.setState({
          counter: this.state.counter + 1
      })
      console.log(this.state.counter)
      
  }
render(){
  setTimeout(()=>{
    this.forceUpdate()
  },3000)
  const imagesloaded = this.state.counter;
  let content;
  if(this.state.counter <= 6){
    content = <div className={classes.loading}>still loading</div>
  } else {
    content = <div></div>
  }
  return (
  <ReactFullpage
    autoScrolling={false}
    render={({ state, fullpageApi }) => {
      return (
        <div>
        
       <ReactFullpage.Wrapper>
         
         {/* <div className={`section ${classes.section} fp-responsive`}>
{content}
         </div> */}
         <div className={`section ${classes.section} fp-responsive `} >
         <Intro loading={this.handleImageLoad}
         about={() => fullpageApi.moveTo(2)}
         skills={()=> fullpageApi.moveTo(3)}
         portfolio={()=> fullpageApi.moveTo(4)}
         blog={()=> fullpageApi.moveTo(5)}
         contact={()=> fullpageApi.moveTo(5)}/>
         
       </div>
       <div className={`section ${classes.section} `}>
         <About 
         skills={()=> fullpageApi.moveTo(3)}
         portfolio={()=> fullpageApi.moveTo(4)}
         blog={()=> fullpageApi.moveTo(5)}
         contact={()=> fullpageApi.moveTo(5)}/>
       </div>
       <div className={`section ${classes.section}`} >
         <Skills about={() => fullpageApi.moveTo(2)}
         portfolio={()=> fullpageApi.moveTo(4)}
         blog={()=> fullpageApi.moveTo(5)}
         contact={()=> fullpageApi.moveTo(5)}
         />
       </div>
       <div className={`section ${classes.section}`} >
         <Portfolio about={() => fullpageApi.moveTo(2) }
         skills={()=> fullpageApi.moveTo(3)}
         blog={()=> fullpageApi.moveTo(5)}
         contact={()=> fullpageApi.moveTo(5)}/>
       </div>
       {/* <div className={`section ${classes.section}`} >
         <Blog about={() => fullpageApi.moveTo(2) }
         skills={()=> fullpageApi.moveTo(3)}
         portfolio={()=> fullpageApi.moveTo(4)}
         contact={()=> fullpageApi.moveTo(6)}/>
       </div> */}

       <div className={`section ${classes.section}`} >
         <Contact about={() => fullpageApi.moveTo(2) }
         blog={()=> fullpageApi.moveTo(5)}
         skills={()=> fullpageApi.moveTo(3)}
         portfolio={()=> fullpageApi.moveTo(4)}/>
       </div>
       
     </ReactFullpage.Wrapper>
        </div>
       
      );
    }}
  />
  
  )
}
}
  
   


export default Fullpage;