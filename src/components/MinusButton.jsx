function MinusButton(props){

    return(
        <button 
            type="button" 
            className="btn btn-minus beer-minus-btn btn-circle btn-sm pl-3"
            onClick={ ( )=>{props.cf( props.day ) } }
        >−</button>
    )

}

export default MinusButton