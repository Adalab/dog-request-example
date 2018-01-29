import React, { Component } from 'react';
import BreedCard from './BreedCard';

class App extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      breeds: [],
      showOnlyShortBreeds: false
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then(response => response.json())
      .then(json => {
        this.setState({
          breeds: json.message
        });
      });
  }

  handleClick() {

    this.setState({
      showOnlyShortBreeds: !this.state.showOnlyShortBreeds
    });
  }

  paintBreeds() {
    // const list = [];
    // for (const breed of this.state.breeds) {
    //   list.push(
    //     <li> { breed } </li>
    //   );
    // }
    let breedsToShow = this.state.breeds;
    if(this.state.showOnlyShortBreeds){
      breedsToShow =
        this.state.breeds.filter(breed => breed.length < 7);
    }

    return (<ul>
      {
        breedsToShow.map(
          breed => <li>
            <BreedCard name={breed} />
          </li>
        )
      }

    </ul>);



  }

  render() {
    return (
      <div>
        <header>
          <h1>Dog Request</h1>
        </header>
        <main>
          <button onClick={this.handleClick}>
            Lo bueno si breve...
          </button>
          { this.paintBreeds() }
        </main>
      </div>
    );
  }
}

export default App;
