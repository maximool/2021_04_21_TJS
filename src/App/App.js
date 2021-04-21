import React from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button/Button';
import User from './components/User/User';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={count:0,users:[]};
  }
  componentDidMount(){
    fetch('http://desorbaix.alexandre.free.fr/phpRest/users/')
      .then(e=>e.json(),e=>[])
      .then(o=>{
        console.log(o);
        this.setState({count:o.length, users:o})
        return o;
      })
  }
  remove(){
    this.setState({count:this.state.count-1});
    console.log('remove');
  }
  render() {
    console.log('render APP',this.state)
    return (
      <div>
        La valeur de count est  { this.state.count }<br/>
        <Button title="Add" onclickbutton={()=>{
          this.setState({count:this.state.count+1});
          console.log('add');
        }}/>
        <Button bgColor='tomato' title="remove" onclickbutton={()=>{this.remove()}}/>
        {this.state.users.length>0 && <User user={this.state.users[0]}/>}
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
