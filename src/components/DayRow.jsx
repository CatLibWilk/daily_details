import Input from './Input.jsx'
import MinusButton from './MinusButton.jsx';
import PlusButton from './PlusButton.jsx';
import RadioSet from './RadioSet.jsx';

function DayRow(props){

    return(
        <>
        <h3>{props.title.toUpperCase()}</h3>
        <div className="row h-100">

            <Input cf={ props.updateTotal } day={props.title}/>

          <div className="col-sm text-left">
            ${props.total}
            <MinusButton cf={ props.subtractTotal } day={ props.title }/>
          </div>

          <div className="col-sm text-left">
            <MinusButton cf={ props.subtractBeers } day={ props.title }/>
            {props.drinks}
            <PlusButton cf={ props.addBeers } day={ props.title }/>
          </div>

          <div className="col-sm">
            <RadioSet day={props.title}/>
          </div>

        </div>
        </>
    )

}

export default DayRow