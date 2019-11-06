import React, { Component, lazy, Suspense } from 'react';
import classes from './Intro.module.css';
import Grid from './Grid';
// const Grid = lazy(() => import("./Grid"))
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { rerender: 0 };
        
      }
    render() {
        setTimeout(() => {
            this.setState({
                rerender: 1
            })
        }, 5000)
        return (
            <div  className={classes.main}>
            {/* <Suspense fallback={<div>load;lkajdf;kljasdf</div>}> */}
                
                    <Grid loading={this.props.loading} about={this.props.about} skills={this.props.skills} portfolio={this.props.portfolio} blog={this.props.blog} contact={this.props.contact}/>
{/*             
            </Suspense> */}
            </div>
                

        );
    }
}

export default Intro;