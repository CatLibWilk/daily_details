import Input from './Input.jsx'

function MonthlyExpenseRow(props){

    return(
        <>
        <h3>{props.title.toUpperCase()}</h3>
        <div className="row h-100">

            <Input cf={ props.update_monthly_expenditures } category={ props.title }/>

          <div className="col-sm text-left">
            ${props.expenseTotal}

          </div>
        </div>
        </>
    )

}

export default MonthlyExpenseRow