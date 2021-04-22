import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button/Button';
import User from './components/User/User';
import FormUser from './components/FormUser/FormUser';
import SelectUser from './components/SelectUser/SelectUser';
import Tchat from './components/Tchat/Tchat';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={count:0,users:[]};
  }
  // componentDidMount(){
    // fetch('http://desorbaix.alexandre.free.fr/phpRest/tchatUsers/')
    //   .then(e=>e.json(),e=>[])
    //   .then(o=>{
    //     console.log(o);
    //     this.setState({count:o.length, users:o,selectedUser:null, selectedId:-1})
    //     return o;
    //   })
  // }
  // remove(){
  //   this.setState({count:this.state.count-1});
  //   console.log('remove');
  // }
  render() {
    console.log('render APP',this.state)
    return (
      <div>
        <Tchat></Tchat>
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
