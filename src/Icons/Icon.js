import React from 'react';
import classes from './Icon.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
const Icon = () => {
    return (
        <ScrollAnimation  duration={2}animateIn='fadeInUp' animateOnce={true} animateOut='fadeOutDown'>
        <div className={classes.container}>
            <ul>
                <li>
                    <a href="https://github.com/brandonjoe">
                    
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className={`fab fa-github`}></span>
        
                        
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/brandon-joe/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className={`fab fa-linkedin`}></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className={`fab fa-google-plus-g`}></span>
                    </a>
                </li>
                {/* <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className={`fab fa-medium`}></span>
                    </a>
                </li> */}
            </ul>
        </div>
        </ScrollAnimation>
        
    );
};

export default Icon;