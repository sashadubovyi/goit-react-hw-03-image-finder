import { Component } from 'react';
import { Main } from './App.styled';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import PropTypes from 'prop-types';

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

App.propTypes = {
  state: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
};

export default App;
