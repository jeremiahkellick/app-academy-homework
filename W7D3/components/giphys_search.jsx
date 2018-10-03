import React from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    const { searchTerm } = this.state;
    const { giphys } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={searchTerm} />
          <input type="submit" value="Search" />
        </form>
        {
          giphys.map(giphy =>
            <img key={giphy.id} src={giphy.images.original.url} />
          )
        }
      </div>
    );
  }
}

export default GiphysSearch;
