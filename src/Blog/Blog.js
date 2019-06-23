// AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g
// blog id 4363987315518081969
import React, { Component } from "react";
import classes from './Blog.module.css'
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

    const getData = fetch(
      `https://www.googleapis.com/blogger/v3/blogs/4363987315518081969/posts?key=AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g `
    )
      .then(res => res.json())
      .then(value => {
        let arr = [];
   
        console.log("HI");
        for (let i = 0; i < 3; i++){
            let str = value.items[0].content;
            var regex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
            var src = regex.exec(str)[1];
           console.log("ASDSADA")
            let preview = limitTitle(extractContent(value.items[i].content));
            let title = value.items[i].title;
            let date = new Date(value.items[i].published);
            let url = value.items[i].url;
            let displayName = value.items[i].displayName;
            let fullDate = `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  
            let obj = {
                title: title,
                preview: preview,
                fullDate: fullDate,
                url: url,
                displayName: displayName
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
  render() {
    return (
        <div className={classes.container}>
            {this.state.posts.map((post, index) => {
                return (
                    <div key={index}>
                        <h1>{post.title}</h1>
                        <h2>{post.fullDate}</h2>
                        <h3>{post.preview}</h3>
                        <h4>{post.url}</h4>
                    </div>
                )
            })}
        </div>
    )
}
}

export default Blog;
