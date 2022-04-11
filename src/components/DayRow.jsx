import Input from './Input.jsx'
import MinusButton from './MinusButton.jsx';
import PlusButton from './PlusButton.jsx';
import RadioSet from './RadioSet.jsx';

function DayRow(props){

    return(
        <>
        <h3>{props.title.toUpperCase()}</h3>
        <div className="row h-100">

            <Input cf={ props.updateTotalMoney } category={ props.title }/>

          <div className="col-sm text-left">
            ${props.totalMoney}
            <MinusButton cf={ props.subtractTotalMoney } day={ props.title }/>
          </div>

          <div className="col-sm text-left mr-5">
            <MinusButton cf={ props.subtractBeers } day={ props.title }/>
              {props.totalBeers}
            <PlusButton cf={ props.addBeers } day={ props.title }/>
          </div>

          <div className="col-sm">
            <RadioSet category={props.title} classes='weekly-reset' name_array={['Beer', 'Cigs', '1700']}/>
          </div>

        </div>
        </>
    )

}

export default DayRow