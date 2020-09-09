import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add} from "./redux/actions/actions";

class App extends Component {
  render() {
    return (
        <div className="App">
          <p>{this.props.counter}</p>
          <button onClick={this.props.onAdd}>Добавить 1</button>
        </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)