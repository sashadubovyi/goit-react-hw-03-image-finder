import { Component } from 'react';
import { Main } from './App.styled';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
  };

  handleSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <Main>
        <SearchForm handleSearch={this.handleSearch} />
        <ImageGallery search={this.state.search} />
      </Main>
    );
  }
}

export default App;
