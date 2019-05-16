import React from 'react';
import classes from './Project.module.css';

const Project = (props) => {
    console.log(props.demo)
    return (
        
        <div className={classes.container} onClick={()=> window.open("{props.demo}", "_blank")}>
            <div className={classes.textcontainer}>
                <div className={classes.text}>{props.text}</div>
            </div>
            <div className={classes.main}>
                <div className={classes.image}>
                    <img className={classes.img} src={props.img}/>
                <div className={classes.overlay}></div>
                </div>
                <div className={classes.title}><div>{props.title}</div></div>
                <div className={classes.github}>
                    <div className={classes.lang}>&lt;/&gt; {props.languages}</div>
                    <a href={props.github} target="_blank" className={classes.git}>
                        <i class={`devicon-github-plain ${classes.githubicon}`}></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;