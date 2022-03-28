function Input(props){
    const input_id = `money_input_${props.day.toLowerCase()}`
    return(
        <div className="input-group mb-3 col-sm">
            <span className="input-group-text">$</span>
            <input id={input_id} type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
            <span className="input-group-text">.00</span>
            <button className="btn btn-info" onClick={()=>{props.cf( document.getElementById(input_id).value, props.day ) } }>OK</button>
        </div>
    )

}

export default Input