import React from "react";
import classes from "./Project.module.css";

const Project = props => {
  return (
    <div className={classes.container}>
      <div
        className={classes.textcontainer}
        onClick={() => {
          window.open(`${props.demo}`);
          console.log(props.demo);
        }}
      >
        <div className={classes.text}>{props.text}</div>
      </div>
      <div className={classes.main}>
        <div className={classes.image}>
          <img className={classes.img} src={props.img} />
          <div className={classes.overlay} />
        </div>
        <div className={classes.title}>
          <div>{props.title}</div>
        </div>
        <div className={classes.github}>
          <div className={classes.lang}>&lt;/&gt; {props.languages}</div>
          <a href={props.github} target="_blank" className={classes.git}>
            <i className={`devicon-github-plain ${classes.githubicon}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
