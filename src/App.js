import React from 'react';
import DayRow from './components/DayRow';
import WeekChart from './components/WeekChart';
import MonthlyExpenseRow from './components/MonthlyExpenseRow';
import MonthlyExpensesChart from './components/MonthlyExpensesChart'
import RadioSet from './components/RadioSet';
import firebase from 'firebase/compat/app';
import firebase_config from './components/Firebase/config.js';

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
      },
      clicked_radio_buttons: [],
      monthly_exenditures: {
        groceries: 0,
        household: 0,
        bills: 0,
        medical: 0,
        transportation: 0,
        cumulative_weekly_spending: 0,
      }
    }

    firebase.initializeApp(firebase_config);
    this.db = firebase.database();
    
  }

  componentDidMount(){
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      return this.saveToDB();
    })

    let rootRef = this.db.ref()
    rootRef.once('value', (snapshot) => {
      let db_data = snapshot.val( )
      this.setState( db_data )
      this.set_radios_from_db( db_data.clicked_radio_buttons )
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    }); 

    
  }
  
  saveToDB = () =>{
    let rootRef = this.db.ref();
    rootRef.set( this.state )
  }

  set_radios_from_db( radios_from_db ){
    if( radios_from_db ){
      for( var i = 0; i < radios_from_db.length; i++ ){
        let btn = document.getElementById( radios_from_db[i] )
        btn.checked = true
    }
  }
  }
  
  clearWeek = ( ) => {
    let checked_boxes = [ ...this.state.clicked_radio_buttons ]
    let checked_boxes_weekly_removed = [ ]
    for( var i = 0; i < checked_boxes.length; i++ ){
      if( checked_boxes[i].includes('monthly') ){
        checked_boxes_weekly_removed.push( checked_boxes[i])
      }

  }
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
      },
      clicked_radio_buttons: checked_boxes_weekly_removed,
    }
    
    this.setState( new_state );

    /*loop through all the btn-check buttons and set checked = false*/
    const radio_buttons = document.getElementsByClassName( "weekly-reset" )
    for( var i = 0; i < radio_buttons.length; i++ ){
        radio_buttons[i].checked = false

    }

  };

  clearAll = ( ) => {
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
      },
      clicked_radio_buttons: [],
      monthly_exenditures: {
        groceries: 0,
        household: 0,
        bills: 0,
        medical: 0,
        transportation: 0,
        cumulative_weekly_spending: 0,
      }
    }
    
    this.setState( new_state );

    /*loop through all the btn-check buttons and set checked = false*/
    const radio_buttons = document.getElementsByClassName( "btn-check" )
    for( var i = 0; i < radio_buttons.length; i++ ){
        radio_buttons[i].checked = false

    }

  };

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
  };

  addBeers = ( day ) => {
    let current_total  = this.state.days_of_week[ `${day.toLowerCase()}` ].beers;
    let new_state = {...this.state}

    new_state.days_of_week[ `${day.toLowerCase()}` ].beers = current_total + 1
    new_state.days_of_week.totals.beers = Object.values( new_state.days_of_week ).reduce( (sum, { beers } ) => sum + beers, 0 ) - new_state.days_of_week.totals.beers;

    this.setState( new_state );
  };

  subtractBeers = ( day ) => {
    let current_total  = this.state.days_of_week[ `${day.toLowerCase()}` ].beers;
    let new_state = {...this.state}

    if ( current_total > 0 ){
      new_state.days_of_week[ `${day.toLowerCase()}` ].beers = current_total - 1
    }
    
    new_state.days_of_week.totals.beers = Object.values( new_state.days_of_week ).reduce( (sum, { beers } ) => sum + beers, 0 ) - new_state.days_of_week.totals.beers;

    this.setState( new_state );
  };

  subtractTotalMoney = ( day ) => {
    let current_total = this.state.days_of_week[ `${day.toLowerCase()}` ].money;
    let new_state = { ...this.state};

    if ( current_total > 0 ){
      new_state.days_of_week[ `${day.toLowerCase()}` ].money = current_total - 1
    }
    
    new_state.days_of_week.totals.money = Object.values( new_state.days_of_week ).reduce( (sum, { money } ) => sum + money, 0 ) - new_state.days_of_week.totals.money;
    this.setState( new_state );

  };
  
  saveWeeklySpending = ( ) => {
    let weekly_spending_total = { ...this.state.days_of_week.totals }
    let new_state = { ...this.state }

    let cumulative_weekly_spending = weekly_spending_total.money + new_state.monthly_exenditures.cumulative_weekly_spending
    new_state.monthly_exenditures.cumulative_weekly_spending = cumulative_weekly_spending

    this.setState( new_state )

    this.clearWeek( );

  }; 

  update_monthly_expenditures = ( value, expenditure ) => {
    let current_total = this.state.monthly_exenditures[ `${expenditure.toLowerCase()}` ];
    let new_state = {...this.state};

    if ( value && parseInt( value ) ){
      new_state.monthly_exenditures[ `${expenditure.toLowerCase( )}` ] = current_total + parseInt( value );
      this.setState( new_state );
      
    };

    const input_id = `money_input_${expenditure.toLowerCase( )}`
    document.getElementById(input_id).value = '';
  };

  storeRadioClick = ( input ) => {
    let clicked_radio_btns = [...this.state.clicked_radio_buttons ]
    if ( clicked_radio_btns.includes( input ) ){
      let idx = clicked_radio_btns.indexOf( input )
      clicked_radio_btns.splice( idx, 1 )
    } else {
      clicked_radio_btns.push( input )
    }

    this.setState( { clicked_radio_buttons: clicked_radio_btns } )
  };

  render(){
    return(
      <div className="container-fluid">
          <div className="row h-100">
            <div className="col-sm my-auto text-center">
              <h1 className="" id="site-title">DailyDetails</h1>
            </div>
          </div>

          <DayRow title={"Monday"} 
              totalMoney={this.state.days_of_week.monday.money} 
              totalBeers={this.state.days_of_week.monday.beers} 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers={this.subtractBeers}
              
              storeRadioClick={this.storeRadioClick}/>


          <DayRow title={"Tuesday"} 
              totalMoney={this.state.days_of_week.tuesday.money} 
              totalBeers={this.state.days_of_week.tuesday.beers} 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers={ this.subtractBeers }
              storeRadioClick={this.storeRadioClick}/>

          <DayRow title={"Wednesday"} 
              totalMoney={ this.state.days_of_week.wednesday.money } 
              totalBeers={ this.state.days_of_week.wednesday.beers } 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers= {this.subtractBeers }
              storeRadioClick={this.storeRadioClick}/>

          <DayRow title={"Thursday"} 
              totalMoney={ this.state.days_of_week.thursday.money } 
              totalBeers={ this.state.days_of_week.thursday.beers } 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers= {this.subtractBeers }
              storeRadioClick={this.storeRadioClick}/>

          <DayRow title={"Friday"} 
              totalMoney={ this.state.days_of_week.friday.money } 
              totalBeers={ this.state.days_of_week.friday.beers } 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers= {this.subtractBeers }
              storeRadioClick={this.storeRadioClick}/>

          <DayRow title={"Saturday"} 
              totalMoney={ this.state.days_of_week.saturday.money } 
              totalBeers={ this.state.days_of_week.saturday.beers } 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers= {this.subtractBeers }
              storeRadioClick={this.storeRadioClick}/>

          <DayRow title={"Sunday"} 
              totalMoney={ this.state.days_of_week.sunday.money } 
              totalBeers={ this.state.days_of_week.sunday.beers } 

              updateTotalMoney={ this.updateTotalMoney } 
              addBeers={this.addBeers} 

              subtractTotalMoney={ this.subtractTotalMoney } 
              subtractBeers= {this.subtractBeers }
              storeRadioClick={this.storeRadioClick}/>

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
              <button className="btn btn-danger mt-5" onClick= {( )=>{ this.saveWeeklySpending( ) } }>Save Week</button>
            </div>
          </div>

          <div className="row h-100">
            <div className="col-sm my-auto text-center">
              <button className="btn btn-danger mt-5" onClick= {( )=>{ this.clearWeek( ) } }>Clear Week</button>
            </div>
          </div>

          <div>
            <div className="row h-100">
              <WeekChart daily_data_array={ 
                [
                  this.state.days_of_week.monday.money,
                  this.state.days_of_week.tuesday.money,
                  this.state.days_of_week.wednesday.money,
                  this.state.days_of_week.thursday.money,
                  this.state.days_of_week.friday.money,
                  this.state.days_of_week.saturday.money,
                  this.state.days_of_week.sunday.money,
                ]
              } title={"Daily Spending"} max_y={ 115 }/>
              <WeekChart daily_data_array={ 
                [
                  this.state.days_of_week.monday.beers,
                  this.state.days_of_week.tuesday.beers,
                  this.state.days_of_week.wednesday.beers,
                  this.state.days_of_week.thursday.beers,
                  this.state.days_of_week.friday.beers,
                  this.state.days_of_week.saturday.beers,
                  this.state.days_of_week.sunday.beers,
                ] 
              } title={"Daily Beers"} max_y={ 15 }/>
            </div>
          </div>
          <div id="monthly-expenses-row" >
            <div className="col-md-6 mt-5 d-inline-block">
              <MonthlyExpenseRow 
                title={"Groceries"}
                update_monthly_expenditures={ this.update_monthly_expenditures }
                expenseTotal={ this.state.monthly_exenditures.groceries }
              />
              <MonthlyExpenseRow 
                title={"Household"}
                update_monthly_expenditures={ this.update_monthly_expenditures }
                expenseTotal={ this.state.monthly_exenditures.household }
              />
              <MonthlyExpenseRow 
                title={"Bills"}
                update_monthly_expenditures={ this.update_monthly_expenditures }
                expenseTotal={ this.state.monthly_exenditures.bills }
              />
              <MonthlyExpenseRow 
                title={"Medical"}
                update_monthly_expenditures={ this.update_monthly_expenditures }
                expenseTotal={ this.state.monthly_exenditures.medical }
              />
              <MonthlyExpenseRow 
                title={"Transportation"}
                update_monthly_expenditures={ this.update_monthly_expenditures }
                expenseTotal={ this.state.monthly_exenditures.transportation }
              />

            </div>

            <div className="col-md-6 mt-5 d-inline-block">
            <MonthlyExpensesChart 
              labels={ [
                "groceries",
                "household",
                "bills",
                "medical",
                "transportation",
                "cumulative pocket money",
              ] }
              data_array={ [
                this.state.monthly_exenditures.groceries,
                this.state.monthly_exenditures.household,
                this.state.monthly_exenditures.bills,
                this.state.monthly_exenditures.medical,
                this.state.monthly_exenditures.transportation,
                this.state.monthly_exenditures.cumulative_weekly_spending,
              ] }
            />
            </div>
          </div>

          <div className="row h-100">
              <div className="col-sm my-auto text-left mt-5">
                <h1>Total Monthly Pocket: ${ this.state.monthly_exenditures.cumulative_weekly_spending }</h1>
              </div>
              <div className="col-sm mt-5">
                <h1>Monthly Bills Checklist</h1>
                  <RadioSet storeRadioClick={ this.storeRadioClick } category='monthly_bills_checklist' classes='monthly-reset' name_array={['Gas', 'Electric', 'Apartment Insurance', 'CC', 'Internet', 'Rent']}/>
              </div>
            </div>
            <div className="row h-100">
              <div className="col-sm my-auto text-left mt-5">
                <h1>Total Monthly Expenses: ${ Object.values( this.state.monthly_exenditures ).reduce( (sum, exp ) => sum + exp, 0 )}</h1>
              </div>
            </div>
          
          
          <div className="row h-100">
            <div className="col-sm my-auto text-center">
              <button className="btn btn-danger mt-5 mb-5" onClick= {( )=>{ this.clearAll( ) } }>Clear All</button>
            </div>
          </div>

      </div>
    )
  };


}

export default App;
