import React from 'react';
import DayRow from './components/DayRow';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
      total: 0,
    }
  }

  componentDidUpdate(){
    //this is where trigger update of chart showing weekly spending//
  }

  updateTotal = ( int_value, day ) => {
    let current_total = this.state[ `${day.toLowerCase()}` ];
    let new_state = {...this.state};

    if ( int_value && parseInt( int_value ) ){
      new_state[ `${day.toLowerCase()}` ] = current_total + parseInt( int_value );
      new_state.total = Object.values( new_state ).reduce( ( x, y ) => x + y, 0 ) - new_state.total;

      this.setState( new_state );
      
    };
    const input_id = `money_input_${day.toLowerCase()}`
    document.getElementById(input_id).value = '';
  }

  subtractTotal = ( day ) => {
    let current_total = this.state[ `${day.toLowerCase()}` ];
    let new_state = { ...this.state};

    if ( current_total > 0 ){
      new_state[ `${day.toLowerCase()}` ] = current_total - 1
    }
    
    new_state.total = Object.values( new_state ).reduce( ( x, y ) => x + y, 0 ) - new_state.total;

    this.setState( new_state );

  }

  clearWeek = ( ) => {
    let new_state = {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
      total: 0,
    };
    
    this.setState( new_state );

    /*loop through all the btn-check buttons and set checked = false*/
    const radio_buttons = document.getElementsByClassName( "btn-check" )
    for( var i = 0; i < radio_buttons.length; i++ ){
        radio_buttons[i].checked = false

    }

  }

  render(){
    return(
      <div className="container">

        <div className="row h-100">
          <div className="col-sm my-auto text-center">
            <h1 className="text-danger">DailyDetails</h1>
          </div>
        </div>

        <DayRow title={"Monday"} total={this.state.monday} updateTotal={ this.updateTotal } subtractTotal={ this.subtractTotal } />
        <DayRow title={"Tuesday"} total={this.state.tuesday} updateTotal={ this.updateTotal } subtractTotal={ this.subtractTotal } />
        <DayRow title={"Wednesday"} total={this.state.wednesday} updateTotal={ this.updateTotal } subtractTotal={ this.subtractTotal } />

        <div className="row h-100">
          <div className="col-sm my-auto text-center mt-3">
            <h1 className="text-secondary">Weekly Total: ${this.state.total}</h1>
          </div>
        </div>

        <div className="row h-100">
          <div className="col-sm my-auto text-center">
            <button className="btn btn-danger mt-5" onClick={()=>{this.clearWeek()}}>Clear Week</button>
          </div>
        </div>

      </div>
    )
  }


}

export default App;
