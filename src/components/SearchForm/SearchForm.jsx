import { Component } from 'react';
import { SearchBtn, SearchInput } from './SearchForm.styled';

class SearchForm extends Component {
  state = {
    input: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSearch(this.state.input);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.input}
          onChange={e => {
            this.setState({ input: e.target.value });
          }}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </form>
    );
  }
}

export default SearchForm;
