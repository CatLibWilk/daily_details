function Radio(props){
    const button_id = `btn-check${props.id}-outlined-${props.category}`
    const classes = `btn-check ${props.classes}`
    return(
        <>
            <input type="checkbox" className={classes} id={button_id} autoComplete="off" />
            <label className="btn btn-outline-info mr-1 radio-btn" htmlFor={button_id}>{props.name}</label>
        </>
    )

}

export default Radio