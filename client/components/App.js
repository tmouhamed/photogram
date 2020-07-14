import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actioncreators from '../actions/actionCreator';

import Main from './Main';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actioncreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
