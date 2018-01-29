import React from 'react';

class BreedCard extends React.Component{
  render() {
    return (
      <div className="breed">
        { this.props.name }
      </div>
    );
  }
}

export default BreedCard;
