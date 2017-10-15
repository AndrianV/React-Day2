import React, { Component } from 'react';
import './images.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { imgNumber: 0 }
    console.log('Number:' + this.state.imgNumber);
  }

  getRandom() {
    return Math.floor(Math.random() * 7); // from 0 to 7
  }

  render() {
    var imagesArr = [
      'image/alone.jpg',
      'image/creativity_banana.jpg',
      'image/honey_bee.jpg',
      'image/ladybird.jpg',
      'image/lonely_woman.jpg',
      'image/peace.jpg',
      'image/tiny_man.jpg'
    ];

    var imagesList = imagesArr.map((image, index) => <img id={index} src={image} alt={image} key={index} />);
    return (
      <div className="App">
        <p>Hello</p>
        <h4>Images here:</h4>
        <button id={'shuffle'}>Shuffle Pictures</button>
        <div>{imagesList[this.getRandom()]}</div>
      </div>
    );
  }
}
