import React, {Component} from 'react';
import {connect} from 'react-redux'
import {add, addNumber, asyncAdd} from "./redux/actions/actions";
import {bindActionCreators} from "redux";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

class App extends Component {
  render() {
    return (
        <div className="App">
            <Login />
            <DialogsContainer />
          <p>{this.props.counter}</p>
          <button onClick={this.props.add}>Добавить 1</button>
          <button onClick={this.props.asyncAdd}>Добавить 1 через секунду</button>
          <button onClick={() => this.props.addNumber(10)}>Добавить 10</button>
        </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counterReducer.counter
  }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
      add,
      addNumber,
      asyncAdd
  },
    dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(App)
