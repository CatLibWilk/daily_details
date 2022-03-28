import React from 'react';
import Input from './components/Input.jsx'
import MinusButton from './components/MinusButton.jsx';
import RadioSet from './components/RadioSet.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0
    }
  }
  
  updateTotal = ( int_value ) => {
    let current_total = this.state.total;
    let new_state = {
      total: 0
    };

    if ( int_value && parseInt( int_value ) ){
      new_state.total = current_total + parseInt( int_value );
      this.setState( new_state );
      
    };
    document.getElementById('money_input').value = '';
  }

  subtractTotal = ( ) => {
    let current_total = this.state.total;
    let new_state = {
      total: 0
    };

    if ( current_total > 0 ){
      new_state.total = current_total - 1
    }

    this.setState( new_state )
  }

  render(){
    return(
      <div className="container">

        <div className="row h-100">
          <div className="col-sm my-auto text-center">
            <h1 className="text-danger">AddMoney.com</h1>
          </div>
        </div>

        <div className="row h-100">

            <Input cf={ this.updateTotal } />

          <div className="col-sm text-center">
            ${this.state.total}
            <MinusButton cf={ this.subtractTotal } />
          </div>

          <div className="col-sm">
            <RadioSet />
          </div>

        </div>

      </div>
    )
  }


}

export default App;
