function Radio(props){
    const button_id = `btn-check${props.id}-outlined-${props.category}`
    return(
        <>
            <input type="checkbox" className="btn-check" id={button_id} autoComplete="off" />
            <label className="btn btn-outline-info mr-1 radio-btn" htmlFor={button_id}>{props.name}</label>
        </>
    )

}

export default Radio