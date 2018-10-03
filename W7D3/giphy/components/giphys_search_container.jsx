import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = ({ giphys }) => ({ giphys });

export default connect(mapStateToProps, { fetchSearchGiphys })(GiphysSearch);
