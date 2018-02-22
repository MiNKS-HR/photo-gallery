import React from 'react';
import Photo from './photo.jsx';

export default class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      images: ['https://robohash.org/perferendiscupiditateminima.png?size=300x400&set=set1',
               'https://robohash.org/eosquisquia.bmp?size=300x400&set=set1',
               'https://robohash.org/doloreofficiispraesentium.jpg?size=300x400&set=set1',
               'https://robohash.org/voluptatibusidsaepe.png?size=300x400&set=set1',
               'https://robohash.org/ullamcorruptivoluptatibus.png?size=300x400&set=set1',
               'https://robohash.org/voluptatibusetprovident.jpg?size=300x400&set=set1',
               'https://robohash.org/maioresnatussuscipit.jpg?size=300x400&set=set1'
              ]
    };
  }

  render(){
    return (
      <div>
        <h1>Photo Gallery</h1>
        <p>There are <strong>{this.state.images.length}</strong> photos in this gallery</p>

          <img src={this.state.images[0]} data-toggle="modal" data-target="#exampleModal" />

          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body">

                    <div className="selected">
                      {console.log(this.state.images)}
                      {this.state.images.map((image, index) => {
                        return <div key={index}>
                                <Photo image={image} />
                                <p>Image <strong>{index + 1}</strong> out of {this.state.images.length}</p>
                        </div>
                      })
                      }
                    </div>          

                    <div className="slider-nav">
                      {console.log(this.state.images)}
                      {this.state.images.map((image, index) => {
                        return <div key={index}><Photo image={image} /></div>
                      })
                      }
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

      </div>
    )
  }
};

/* 
          {console.log(this.state.images)}
          {this.state.images.map((image, index) => {
            return <Photo image={image} key={index} />
          })
          }
*/