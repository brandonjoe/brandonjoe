// AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g
// blog id 4363987315518081969
import React, { Component } from "react";
import classes from "./Blog.module.css";
import { Link } from "react-router-dom";
import ColorBox from "../Intro/ColorBox";
import ScrollAnimation from "react-animate-on-scroll";
class Blog extends Component {
  constructor(props) {
    super(props);
    const keys = "AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g";
    //AIzaSyBsnoc9bzHl8bIsq8x7vm1dD1v9Eepg-TU
    //AIzaSyBCI-ZqIIw7Kqrbs9KDEJEhjmmiRhthJPE
    this.state = {
      posts: [],
      showed: [],
      index: 0,
      showLeft: false,
      showRight: true
    };
  }
  next = () => {
    let posts = this.state.posts;
    let index = this.state.index;
    index = index + 1;
    if (posts.length - 1 === index) {
      this.setState({
        showRight: false
      });
    }
    this.setState({
      index: index,
      showed: posts[index],
      showLeft: true
    });
    console.log(index);
  };

  prev = () => {
    let posts = this.state.posts;
    let index = this.state.index;
    index = index - 1;
    if (index === 0) {
      console.log("bbbb");
      this.setState({
        showLeft: false
      });
    }
    this.setState({
      index: index,
      showed: posts[index],
      showRight: true
    });
    console.log(index);
  };

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
    const limitTitle = (title, limit = 200) => {
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
          console.log(value.items[0]);
          let arr = [];
          console.log(value.items.length);
          for (let i = 0; i < value.items.length; i++) {
            let m;
            let urls = [];
            let str = `"${value.items[i].content}"`;
            let rex = /<img.*?src="([^">]*\/([^">]*?))".*?>/g;
            while ((m = rex.exec(str))) {
              urls.push(m[1]);
            }
            let preview = limitTitle(extractContent(value.items[i].content));
            let title = value.items[i].title;
            let labels = value.items[i].labels;
            let date = new Date(value.items[i].published);
            let url = value.items[i].url;
            let displayName = value.items[i].displayName;
            let fullDate = `${dayNames[date.getDay()]}, ${
              monthNames[date.getMonth()]
            } ${date.getDate()} ${date.getFullYear()}`;
            let image = urls[0];
            console.log(labels);
            let obj = {
              title: title,
              preview: preview,
              fullDate: fullDate,
              url: url,
              displayName: displayName,
              image: image,
              labels: labels
            };
            arr.push(obj);
          }
          return arr;
        })
        .then(value => {
          let arr = [];
          if (value.length > 1) {
            for (let i = 0; i < 3; i++) {
              arr.push(value[i]);
            }
          }
          let arrays = [];
          function myFunction(x) {
            if (x.matches) {
              // If media query matches
              while (value.length > 0) {
                arrays.push(value.splice(0, 2));
              }
            } else {
              while (value.length > 0) {
                arrays.push(value.splice(0, 3));
              }
            }
          }
          function myFunction(y) {
            if (y.matches) {
              // If media query matches
              while (value.length > 0) {
                arrays.push(value.splice(0, 1));
              }
            } else {
              while (value.length > 0) {
                arrays.push(value.splice(0, 3));
              }
            }
          }

          let x = window.matchMedia("(max-width: 1000px)");
          let y = window.matchMedia("(max-width: 500px)");
          myFunction(x); // Call listener function at run time
          x.addListener(myFunction);
          myFunction(y); // Call listener function at run time
          y.addListener(myFunction);
          this.setState({
            posts: arrays,
            showed: arrays[0]
          });
        });
    };
    getData();
  }
  render() {
    let left;
    let right;
    if (this.state.showLeft) {
      left = (
        <div
          onClick={this.prev}
          className={`${classes.pagi} ${classes.pagileft}`}
        >
          <span />
          Newer
        </div>
      );
    } else {
      left = <div />;
    }
    if (this.state.showRight) {
      right = (
        // <div className={`${classes.pagi} ${classes.pagiright}`}  onClick={this.next}></div>;
        <div
          onClick={this.next}
          className={`${classes.pagi} ${classes.pagiright}`}
        >
          <span />
          Older
        </div>
      );
    } else {
      right = <div />;
    }

    return (
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.nav}>
            <ScrollAnimation
              animateOut="fadeOutDown"
              offset={150}
              duration={2}
              animateIn="fadeInUp"
              className={`${classes.blog} ${classes.box}`}
            >
              <ScrollAnimation
                duration={2}
                animateIn="fadeInDown"
                animateOut="fadeOutDown"
                className={`${classes.about} ${classes.box}`}
              >
                <button
                  onClick={() => {
                    this.props.about();
                  }}
                  className={classes.box}
                >
                  <ColorBox
                    color={"#508991"}
                    icon={"far fa-address-card"}
                    title={"About"}
                  />
                </button>
              </ScrollAnimation>
            </ScrollAnimation>
            <ScrollAnimation
              animateOut="fadeOutUp"
              offset={150}
              duration={2}
              animateIn="fadeInRight"
              className={`${classes.skills} ${classes.box}`}
            >
              <button
                onClick={() => {
                  this.props.skills();
                }}
                className={classes.box}
              >
                <ColorBox
                  color={"#004346"}
                  icon={"fas fa-code"}
                  title={"Skills"}
                />
              </button>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce={true}
              duration={2}
              animateIn="fadeIn"
              animateOut="fadeOutUp"
            >
              <div className={classes.title}>Blog</div>
            </ScrollAnimation>
            <ScrollAnimation
              animateOut="fadeOutDown"
              duration={2}
              animateIn="fadeInDown"
              className={`${classes.portfolio} ${classes.box}`}
            >
              <button
                onClick={() => {
                  this.props.portfolio();
                }}
                className={classes.box}
              >
                <ColorBox
                  color={"#09BC8A"}
                  icon={"far fa-images"}
                  title={"Portfolio"}
                />
              </button>
            </ScrollAnimation>

            <ScrollAnimation
              animateOut="fadeOutLeft"
              offset={150}
              duration={2}
              animateIn="fadeInLeft"
              className={`${classes.contact} ${classes.box}`}
            >
              <button
                onClick={() => {
                  this.props.contact();
                }}
                className={classes.box}
              >
                <ColorBox
                  color={"#1c486b"}
                  icon={"far fa-id-card"}
                  title={"Contact"}
                />
              </button>
            </ScrollAnimation>
          </div>
        </div>
        <div className={classes.posts}>
          <div className={classes.pagination}>
            {left}
            {right}
          </div>
          {this.state.showed.map((post, index) => {
            return (
              <div className={classes.post} key={index}>
                <div className={classes.darker}>
                  <a
                    href={`${post.url}`}
                    target="_blank"
                    className={classes.readmore}
                  >
                    Read More
                  </a>
                </div>
                <img
                  onClick={() => {
                    window.open(`${post.url}`);
                  }}
                  className={classes.image}
                  src={post.image}
                />
                <div
                  onClick={() => {
                    window.open(`${post.url}`);
                  }}
                  className={classes.postTitle}
                >
                  {post.title}
                </div>
                <div
                  onClick={() => {
                    window.open(`${post.url}`);
                  }}
                  className={classes.date}
                >
                  {post.fullDate}
                </div>
                <div
                  onClick={() => {
                    window.open(`${post.url}`);
                  }}
                  className={classes.preview}
                >
                  {post.preview}
                </div>

                {post.labels.map((label, index) => {
                  return (
                    <a
                      className={classes.labels}
                      href={`https://brandonjoe42.blogspot.com/search/label/${label}`}
                      target="_blank"
                    >
                      #{label}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Blog;
