function PlusButton(props){

    return(
        <button 
            type="button" 
            className="btn btn-minus btn-circle btn-sm pl-3"
            onClick={ ( )=>{props.cf( props.day ) } }
        >+</button>
    )

}

export default PlusButton