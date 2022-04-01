import React from 'react';
import DayRow from './components/DayRow';
import WeekChart from './components/WeekChart';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      days_of_week: {
        monday: { 'money':0, 'beers':0 },
        tuesday: { 'money':0, 'beers':0 },
        wednesday: { 'money':0, 'beers':0 },
        thursday: { 'money':0, 'beers':0 },
        friday: { 'money':0, 'beers':0 },
        saturday: { 'money':0, 'beers':0 },
        sunday: { 'money':0, 'beers':0 },

        totals: { 'money':0, 'beers': 0 }
      }
    }
  }

  componentDidUpdate(){
    //this is where trigger update of chart showing weekly spending//
  }

  updateTotalMoney = ( int_value, day ) => {
    let current_total = this.state.days_of_week[ `${day.toLowerCase()}` ].money;
    let new_state = {...this.state};

    if ( int_value && parseInt( int_value ) ){
      new_state.days_of_week[ `${day.toLowerCase()}` ].money = current_total + parseInt( int_value );

      new_state.days_of_week.totals.money = Object.values( new_state.days_of_week ).reduce( (sum, { money } ) => sum + money, 0 ) - new_state.days_of_week.totals.money;
      this.setState( new_state );
      
    };
    const input_id = `money_input_${day.toLowerCase()}`
    document.getElementById(input_id).value = '';
  }

  addBeers = ( day ) => {
    let current_total  = this.state.days_of_week[ `${day.toLowerCase()}` ].beers;
    let new_state = {...this.state}

    new_state.days_of_week[ `${day.toLowerCase()}` ].beers = current_total + 1
    new_state.days_of_week.totals.beers = Object.values( new_state.days_of_week ).reduce( (sum, { beers } ) => sum + beers, 0 ) - new_state.days_of_week.totals.beers;

    this.setState( new_state );
  }

  subtractBeers = ( day ) => {
    let current_total  = this.state.days_of_week[ `${day.toLowerCase()}` ].beers;
    let new_state = {...this.state}

    if ( current_total > 0 ){
      new_state.days_of_week[ `${day.toLowerCase()}` ].beers = current_total - 1
    }
    
    new_state.days_of_week.totals.beers = Object.values( new_state.days_of_week ).reduce( (sum, { beers } ) => sum + beers, 0 ) - new_state.days_of_week.totals.beers;

    this.setState( new_state );
  }

  subtractTotalMoney = ( day ) => {
    let current_total = this.state.days_of_week[ `${day.toLowerCase()}` ].money;
    let new_state = { ...this.state};

    if ( current_total > 0 ){
      new_state.days_of_week[ `${day.toLowerCase()}` ].money = current_total - 1
    }
    
    new_state.days_of_week.totals.money = Object.values( new_state.days_of_week ).reduce( (sum, { money } ) => sum + money, 0 ) - new_state.days_of_week.totals.money;
    this.setState( new_state );

  }

  clearWeek = ( ) => {
    let new_state = {
      days_of_week: {
        monday: { 'money':0, 'beers':0 },
        tuesday: { 'money':0, 'beers':0 },
        wednesday: { 'money':0, 'beers':0 },
        thursday: { 'money':0, 'beers':0 },
        friday: { 'money':0, 'beers':0 },
        saturday: { 'money':0, 'beers':0 },
        sunday: { 'money':0, 'beers':0 },

        totals: { 'money':0, 'beers': 0 }
      }
    }
    
    this.setState( new_state );

    /*loop through all the btn-check buttons and set checked = false*/
    const radio_buttons = document.getElementsByClassName( "btn-check" )
    for( var i = 0; i < radio_buttons.length; i++ ){
        radio_buttons[i].checked = false

    }

  };

  render(){
    return(
      <div className="container">

        <div className="row h-100">
          <div className="col-sm my-auto text-center">
            <h1 className="text-danger">DailyDetails</h1>
          </div>
        </div>

        <DayRow title={"Monday"} 
            totalMoney={this.state.days_of_week.monday.money} 
            totalBeers={this.state.days_of_week.monday.beers} 

            updateTotalMoney={ this.updateTotalMoney } 
            addBeers={this.addBeers} 

            subtractTotalMoney={ this.subtractTotalMoney } 
            subtractBeers={this.subtractBeers}/>

        <DayRow title={"Tuesday"} 
            totalMoney={this.state.days_of_week.tuesday.money} 
            totalBeers={this.state.days_of_week.tuesday.beers} 

            updateTotalMoney={ this.updateTotalMoney } 
            addBeers={this.addBeers} 

            subtractTotalMoney={ this.subtractTotalMoney } 
            subtractBeers={ this.subtractBeers }/>

        <DayRow title={"Wednesday"} 
            totalMoney={ this.state.days_of_week.wednesday.money } 
            totalBeers={ this.state.days_of_week.wednesday.beers } 

            updateTotalMoney={ this.updateTotalMoney } 
            addBeers={this.addBeers} 

            subtractTotalMoney={ this.subtractTotalMoney } 
            subtractBeers= {this.subtractBeers }/>

        <div className="row h-100">
          <div className="col-sm my-auto text-center mt-3">
            <h1 className="text-secondary">Weekly Total: ${ this.state.days_of_week.totals.money }</h1>
          </div>
        </div>

        <div className="row h-100">
          <div className="col-sm my-auto text-center mt-3">
            <h1 className="text-secondary">Weekly Beers: { this.state.days_of_week.totals.beers }</h1>
          </div>
        </div>

        <div className="row h-100">
          <div className="col-sm my-auto text-center">
            <button className="btn btn-danger mt-5" onClick= {( )=>{ this.clearWeek( ) } }>Clear Week</button>
          </div>
        </div>
        <div>
          <row className="row">
            <WeekChart daily_data_array={ Object.values( this.state.days_of_week ).map( ( day ) => day.money ) } title={"Daily Spending"} />
            <WeekChart daily_data_array={ Object.values( this.state.days_of_week ).map( ( day ) => day.beers ) } title={"Daily Beers"} />
          </row>
        </div>
      </div>
    )
  }


}

export default App;
