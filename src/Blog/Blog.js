// AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g
// blog id 4363987315518081969
import React, { Component } from "react";
import classes from './Blog.module.css'
import { Link } from "react-router-dom";
import ColorBox from '../Intro/ColorBox';
import ScrollAnimation from 'react-animate-on-scroll';
class Blog extends Component {
  constructor(props) {
    super(props);
    const keys = "AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g";
    //AIzaSyBsnoc9bzHl8bIsq8x7vm1dD1v9Eepg-TU
    //AIzaSyBCI-ZqIIw7Kqrbs9KDEJEhjmmiRhthJPE
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const extractContent = s => {
      let span = document.createElement("span");
      span.innerHTML = s;
      return span.textContent || span.innerText;
    };
    const limitTitle = (title, limit = 400) => {
      let newTitle = [];
      if (title.length > limit) {
        title.split(" ").reduce((acc, cur) => {
          if (acc + cur.length <= limit || acc == 0) {
            newTitle.push(cur);
          }
          return acc + cur.length;
        }, 0);

        return `${newTitle.join(" ")}...`;
      }
      return title;
    };

    const getData = () => {

      fetch(
        `https://www.googleapis.com/blogger/v3/blogs/4363987315518081969/posts?key=AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g `
      )
        .then(res => res.json())
        .then(value => {
          console.log(value.items[0])
          let arr = [];
          for (let i = 0; i < 3; i++){
            let m;
            let urls= [];
            let str = `"${value.items[i].content}"`;
            let rex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
            while ( m = rex.exec( str ) ) {
              urls.push( m[1] );
          }
              let preview = limitTitle(extractContent(value.items[i].content));
              let title = value.items[i].title;
              let labels = value.items[i].labels;
              let date = new Date(value.items[i].published);
              let url = value.items[i].url;
              let displayName = value.items[i].displayName;
              let fullDate = `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
              let image = urls[0]
              console.log(labels)
              let obj = {
                  title: title,
                  preview: preview,
                  fullDate: fullDate,
                  url: url,
                  displayName: displayName,
                  image: image,
                  labels: labels
              }
              arr.push(obj)
          }
          return arr
  
        })
        .then(
          value => {
              this.setState({
                  posts: value
              })
          }
        )
    } 
    getData();
    
  }
  render() {
    
    return (
        <div className={classes.container}>
          <div className={classes.main}>
          <div className={classes.nav}>
                
                <ScrollAnimation  animateOut='fadeOutUp' offset={150}  duration={2} animateIn='fadeInDown' className={`${classes.skills} ${classes.box}`}><button onClick={() => {this.props.skills()}} className={classes.box}><ColorBox color={'#004346'} icon={'fas fa-code'} title={'Skills'}/></button></ScrollAnimation >
                <ScrollAnimation animateOut='fadeOutDown' duration={2} animateIn='fadeInRight' className={`${classes.portfolio} ${classes.box}`}><button onClick={() => {this.props.portfolio()}} className={classes.box}><ColorBox color={'#09BC8A'} icon={'far fa-images'} title={'Portfolio'}/></button></ScrollAnimation >
                <ScrollAnimation  animateOnce={true} duration={2} animateIn='fadeInDown' animateOut='fadeOutUp'>
                        <div className={classes.title}>
                            Blog
                        </div>
                    </ScrollAnimation>
               <ScrollAnimation animateOut='fadeOutDown' offset={150} duration={2} animateIn='fadeInUp' className={`${classes.blog} ${classes.box}`}><button className={classes.box}><ColorBox color={'#74B3CE'} icon={'far fa-comment'} title={'Blog'}/></button></ScrollAnimation >
                <ScrollAnimation  animateOut='fadeOutLeft' offset={150} duration={2} animateIn='fadeInRight' className={`${classes.contact} ${classes.box}`}><button onClick={() => {this.props.contact()}} className={classes.box}><ColorBox color={'#1c486b'}icon={'far fa-id-card'} title={'Contact'}/></button></ScrollAnimation >
        </div>
          </div>
            {this.state.posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <h2>{post.fullDate}</h2>
                        <h3>{post.preview}</h3>
                        <h4>{post.url}</h4>
                        <h4>{post.image}</h4>
                        {post.labels.map((label, index) => {
                          return(
                            <a href={`https://brandonjoe42.blogspot.com/search/label/${label}`} target="_blank">{label}</a>
                          )
                        })}
                    
                    </div>
                )
            })}
        </div>
    )
}
}

export default Blog;
