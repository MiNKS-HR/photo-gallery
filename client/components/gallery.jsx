import React from 'react';
import Photo from './photo.jsx';
import Description from './description.jsx';

export default class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      images: []
    };
    this.slider = this.slider.bind(this);
    this.hasImages = this.hasImages.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/images',
      // contentType: 'application/json',
      // dataType: 'json',
      type: 'GET',
      success: (data) => {
        this.setState({
          images: data
        });
      },
      error: (err) => {
        console.log('Gallery.jsx failure... ', err);
      }
    });
  }

  slider() {
  }

  hasImages(prop) {
    if (prop.length === 0) {
      return <img src="img/no-photo.jpg" className="main-image" />
    } else if (prop.length === 1) {
      return <img src={this.state[0].url} className="main-image" />
    } else {
      return (
      <div>
        <img src={this.state.images[0].url} data-toggle="modal" data-target="#photo_modal" className="main-image"  />
        <p className="num-photos">There are <strong>{prop.length}</strong> photos in this gallery.</p>

        <div className="modal fade" id="photo_modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                  <div className="selected">
                    {prop.map((image, index) => {
                      return <div key={index}>
                              <p>Image <strong>{index + 1}</strong> out of {prop.length}</p>
                              <Photo image={image} />
                              <Description description={image} />
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


/* 
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

*/