import React from 'react';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <div>
        <p className="description">{this.props.description.description}</p>
        </div>
    )
  }
};
