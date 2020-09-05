import React from 'react';
// import logo from './logo.svg';
import './App.scss';


const lines = new Map([
  [8, 'I went out to the hazel wood,'],
  [13, 'Because a fire was in my head,'],
  [20, 'And cut and peeled a hazel wand,'],
  [27, 'And hooked a berry to a thread;'],
  [33, 'And when white moths were on the wing,'],
  [40, 'And moth-like stars were flickering out,'],
  [47, 'I dropped the berry in a stream'],
  [53, 'And caught a little silver trout.'],
  [60, 'When I had laid it on the floor'],
  [67, 'I went to blow the fire a-flame,'],
  [73, 'But something rustled on the floor,'],
  [80, 'And someone called me by my name:'],
  [87, 'It had become a glimmering girl'],
  [93, 'With apple blossom in her hair'],
  [100, 'Who called me by my name and ran'],
  [107, 'And faded through the brightening air.'],
  [113, 'Though I am old with wandering'],
  [120, 'Through hollow lands and hilly lands,'],
  [127, 'I will find out where she has gone,'],
  [133, 'And kiss her lips and take her hands;'],
  [140, 'And walk among long dappled grass,'],
  [147, 'And pluck till time and times are done,'],
  [153, 'The silver apples of the moon,'],
  [160, 'The golden apples of the sun.'],
])

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
    for (var i = 1; i < this.imageNumber+1; i++) {
      let topImage = this.state.shownImage === i ? 'top-image' : '';
      images.push(<img key={i} className={`image image-${i} ${topImage}`} src={`/images/${i}.jpg`}/>
      );
    }

    // ultimately, this should probably be changed to a conditional to trigger the animation of the text in
    let shownLine = lines.get(this.state.shownImage);

    return (

      <div id="app">
        <div id="poem-container" ref={this.imageContainer} onScroll={this.scrollToScrub} >
          <div className="set-height"  style={{height: this.imageNumber * window.innerHeight + 'px'}}>
          </div>
        </div>
        <div className="line-container">
          <div className="line-wrapper">
            <h4 className="line">{shownLine}</h4>
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
