import React from 'react';
// import logo from './logo.svg';
import './App.scss';


const poemSections = [
  { 'line' : "I went out to the hazel wood,",
    'images' : [1,2,3,4,5,6,7,8]
  },
  { 'line' : "Because a fire was in my head,",
    'images' : [9,10,11,12,13]
  },
  { 'line' : "And cut and peeled a hazel wand,",
    'images' : [

    ]
  },
  { 'line' : "And hooked a berry to a thread;",
    'images' : [

    ]
  },
  { 'line' : "And when white moths were on the wing,",
    'images' : [

    ]
  },
  { 'line' : "And moth-like stars were flickering out,",
    'images' : [

    ]
  },
  { 'line' : "I dropped the berry in a stream",
    'images' : [

    ]
  },
  { 'line' : "And caught a little silver trout.",
    'images' : [

    ]
  },
  { 'line' : "When I had laid it on the floor",
    'images' : [

    ]
  },
  { 'line' : "I went to blow the fire a-flame,",
    'images' : [

    ]
  },
  { 'line' : "But something rustled on the floor,",
    'images' : [

    ]
  },
  { 'line' : "And someone called me by my name:",
    'images' : [

    ]
  },
  { 'line' : "It had become a glimmering girl",
    'images' : [

    ]
  },
  { 'line' : "With apple blossom in her hair",
    'images' : [

    ]
  },
  { 'line' : "Who called me by my name and ran",
    'images' : [

    ]
  },
  { 'line' : "And faded through the brightening air.",
    'images' : [

    ]
  },
  { 'line' : "Though I am old with wandering",
    'images' : [

    ]
  },
  { 'line' : "Through hollow lands and hilly lands,",
    'images' : [

    ]
  },
  { 'line' : "I will find out where she has gone,",
    'images' : [

    ]
  },
  { 'line' : "And kiss her lips and take her hands;",
    'images' : [

    ]
  },
  { 'line' : "And walk among long dappled grass,",
    'images' : [

    ]
  },
  { 'line' : "And pluck till time and times are done,",
    'images' : [

    ]
  },
  { 'line' : "The silver apples of the moon,",
    'images' : [

    ]
  },
  { 'line' : "The golden apples of the sun.",
    'images' : [

    ]
  },
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

    console.log('something')

    console.log(this.imageContainer.current.scrollTop, "window pageYOffset")

    let oneImageScrollDistance = window.innerHeight;
    let shownImage = this.imageContainer.current.scrollTop/oneImageScrollDistance;
    this.setState({
      shownImage : Math.ceil(shownImage)+1
    })
    console.log(this.state.shownImage)
  }



  render() {

    let images = [];
    let topImage = this.imageNumber
    for (var i = 1; i < this.imageNumber+1; i++) {
      let topImage = this.state.shownImage === i ? 'top-image' : '';
      console.log('top image', topImage)
      console.log('shown image', this.state.shownImage)
      console.log('i', i)
      // note: we add a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
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
          {images}
        </div>
      </div>
    );
  }


}

export default Poem;
