import React from 'react';
// import logo from './logo.svg';
import './App.scss';


const lines = [
  'I went out to the hazel wood,',
  'Because a fire was in my head,',
  'And cut and peeled a hazel wand,',
  'And hooked a berry to a thread;',
  'And when white moths were on the wing,',
  'And moth-like stars were flickering out,',
  'I dropped the berry in a stream',
  'And caught a little silver trout.',
  'When I had laid it on the floor',
  'I went to blow the fire a-flame,',
  'But something rustled on the floor,',
  'And someone called me by my name:',
  'It had become a glimmering girl',
  'With apple blossom in her hair',
  'Who called me by my name and ran',
  'And faded through the brightening air.',
  'Though I am old with wandering',
  'Through hollow lands and hilly lands,',
  'I will find out where she has gone,',
  'And kiss her lips and take her hands;',
  'And walk among long dappled grass,',
  'And pluck till time and times are done,',
  'The silver apples of the moon,',
  'The golden apples of the sun.'
];

// class PoemSection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     }
//   }
//   render() {
//
//   }
// }

function PoemSection(props) {

  return (
    <section className="line-section">
      <h4 className="line">{props.section.line}</h4>
      {/*section.images.map( image => (*/}
      {/*  <img src={index + image} />*/}
      {/*))}*/}
    </section>
  )
}

class PoemImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <img />
    );
  }

}

class Poem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shownImage: 1
    }
    this.imageContainer = React.createRef();
    this.imageNumber = 13;
  }

  scrollToScrub = e => {
    let oneImageScrollDistance = window.innerHeight;
    let shownImage = this.imageContainer.current.scrollTop/oneImageScrollDistance;
    this.setState({
      shownImage : Math.ceil(shownImage)+1
    })
  }



  render() {

    let images = [];
    let topImage = this.imageNumber
    for (var i = 1; i < this.imageNumber+1; i++) {
      let topImage = this.state.shownImage === i ? 'top-image' : '';
      images.push(<img className={`image image-${i} ${topImage}`} src={`/images/${i}.jpg`}/>
      );
    }

    return (

      <div id="app">
        <div id="poem-container" ref={this.imageContainer} onScroll={this.scrollToScrub} >
          <div className="set-height"  style={{height: this.imageNumber * window.innerHeight + 'px'}}>
          </div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            {images}
          </div>
        </div>
      </div>
    );
  }


}

export default Poem;
