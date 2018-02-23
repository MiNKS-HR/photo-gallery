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
    this.hasImages = this.hasImages.bind(this);
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

  hasImages(prop) {
    if (prop.length === 0) {
      return <img src="img/no-photo.jpg" />
    } else if (prop.length === 1) {
      return <img src={prop[0]} />
    } else {
      return (
      <div>
        <img src={this.state.images[0]} data-toggle="modal" data-target="#photo_modal" />
        <p className="num-photos">There are <strong>{prop.length}</strong> photos in this gallery.</p>

        <div className="modal fade" id="photo_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                  <div className="selected">
                    {prop.map((image, index) => {
                      return <div key={index}>
                              <Photo image={image} />
                              <p>Image <strong>{index + 1}</strong> out of {prop.length}</p>
                             </div>
                    })
                    }
                  </div>          

                  <div className="slider-nav">
                    {prop.map((image, index) => {
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
  }

  render(){
    return (
      <div>
        {this.hasImages(this.state.images)}
      </div>
    )
  }
};