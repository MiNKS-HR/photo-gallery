import React from 'react';

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div>
        {console.log('images!', this.props.image)}
        <img src={this.props.image} />
        </div>
    )
  }
};
