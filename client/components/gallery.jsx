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
    this.slider = this.slider.bind(this);
  }

  slider() {
    $(document).ready(function(){
      $('.selected').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.slider-nav'
      });

      $('.slider-nav').slick({
      asNavFor: '.selected',
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      infinite: false
      });
    });
  }

  render(){
    return (
      <div>

        <img src={this.state.images[0]} data-toggle="modal" data-target="#photo_modal" />
        <p className="num-photos">There are <strong>{this.state.images.length}</strong> photos in this gallery</p>


        <div className="modal fade" id="photo_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                  <div className="selected">
                    {this.state.images.map((image, index) => {
                      return <div key={index}>
                              <Photo image={image} />
                              <p>Image <strong>{index + 1}</strong> out of {this.state.images.length}</p>
                      </div>
                    })
                    }
                  </div>          

                  <div className="slider-nav">
                    {this.state.images.map((image, index) => {
                      return <div key={index}><Photo image={image} /></div>
                    })
                    }
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
};