import Radio from './components/Radio';

function RadioSet(props){
    const button1 = `btn-check-outlined-${props.day}`
    const button2 = `btn-check2-outlined-${props.day}`
    const button3 = `btn-check3-outlined-${props.day}`
    return(
        <>
        <div className="form-check">
            <input type="checkbox" className="btn-check" id={button1} autoComplete="off" />
            <label className="btn btn-outline-info mr-1 radio-btn" htmlFor={button1}>Beer</label>

            <input type="checkbox" className="btn-check" id={button2} autoComplete="off" />
            <label className="btn btn-outline-info mr-1 radio-btn" htmlFor={button2}>Cigs</label>

            <input type="checkbox" className="btn-check" id={button3} autoComplete="off" />
            <label className="btn btn-outline-info mr-1 radio-btn" htmlFor={button3}>1700</label>
        </div>
        </>
    )

}

export default RadioSet