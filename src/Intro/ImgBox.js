import React, {Component} from 'react';
import classes from './ImgBox.module.css';

class ImgBox extends Component  {
    
render(){
    return (
        <div>
            <img className={classes.img} src={this.props.img} onLoad={this.props.load}/>
        </div>
    );
}
  
    
};

export default ImgBox;