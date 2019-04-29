import React, { Component } from 'react';
import classes from './Intro.module.css';
import Grid from './Grid';
class Intro extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.main}>
                    <Grid about={this.props.about} skills={this.props.skills}/>
                </div>
                
                
            </div>
        );
    }
}

export default Intro;