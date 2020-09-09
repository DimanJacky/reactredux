import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add, asyncAdd} from "./redux/actions/actions";

class App extends Component {
  render() {
    return (
        <div className="App">
          <p>{this.props.counter}</p>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onAsyncAdd}>Добавить 1 через секунду</button>
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
    onAdd: () => dispatch(add()),
    onAsyncAdd: () => dispatch(asyncAdd())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)