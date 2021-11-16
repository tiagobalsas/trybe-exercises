import { Component } from 'react';
// import data from './data';

class Pokemon extends Component {
  render() {
    const {
      name,
      type,
      averageWeight: { value, measurementUnit },
      image,
    } = this.props.pokemon;

    return (
      <div className='pokemon'>
        <p>{name}</p>
        <p>{type}</p>
        {`Average weight: ${value} ${measurementUnit}`}
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;
