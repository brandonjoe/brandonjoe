import React, { Component } from 'react';
import classes from './Intro.module.css';
import Grid from './Grid';
class Intro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            didLoad: false
        }
    }

    onLoad = () => {
        this.setState({
            didLoad: true
        })
    }
    render() {
        const style = this.state.didLoad ? {} : {visibility: 'hidden'}
        return (

                <div  className={classes.main} onLoad={this.onLoad}>
                    <Grid about={this.props.about} skills={this.props.skills} portfolio={this.props.portfolio} contact={this.props.contact}/>
                </div>
                
                

        );
    }
}

export default Intro;