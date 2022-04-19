function Radio(props){
    const button_id = props.id
    const classes = `btn-check ${props.classes}`
    return(
        <>
            <input type="checkbox" onClick={()=>{props.storeRadioClick(button_id)}} className={classes} id={button_id} autoComplete="off" />
            <label className="btn btn-outline-info mr-1 radio-btn" htmlFor={button_id}>{props.name}</label>
        </>
    )

}

export default Radio