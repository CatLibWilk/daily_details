import Input from './Input.jsx'

function MonthlyExpenseRow(props){

    return(
        <>
        <h3>{props.title.toUpperCase()}</h3>
        <div className="">

          <div className="mt-5 d-inline-block">
            <Input cf={ props.update_monthly_expenditures } category={ props.title }/>
          </div>
          <div className="ms-5 d-inline-block">
            ${props.expenseTotal}

          </div>
        </div>
        </>
    )

}

export default MonthlyExpenseRow