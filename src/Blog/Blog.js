// AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g
// blog id 4363987315518081969
import React, { Component } from 'react';

class Blog extends Component {
    constructor(props) {
        super(props);
        const keys = "AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g";
        //AIzaSyBsnoc9bzHl8bIsq8x7vm1dD1v9Eepg-TU
        //AIzaSyBCI-ZqIIw7Kqrbs9KDEJEhjmmiRhthJPE
        this.state = {
          comments: [],
          nextToken: "",
          numResults: "",
          isDone: false
        };
      }
      
    componentWillMount() {
        function extractContent(s) {
            var span = document.createElement('span');
            span.innerHTML = s;
            return span.textContent || span.innerText;
          };
              
        
        const getData = fetch(
            `https://www.googleapis.com/blogger/v3/blogs/4363987315518081969/posts?key=AIzaSyB-rN5kLH0-xVqpMh9r3y5kKocfhSHmT5g `
        )
        .then(res=> res.json())
        .then(value => {
            console.log(value.items[0].content)
            console.log(extractContent(value.items[0].content))
        })
    }
    render() {
        return (
            <div>
                HELLO WORLD
            </div>
        );
    }
}

export default Blog;