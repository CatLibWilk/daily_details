import Radio from './Radio';

function RadioSet(props){
    return(
    <div className="form-check">
        {props.name_array.map( ( button, i ) => <Radio id={i} classes={props.classes} category={props.category} name={button}/> )}
    </div>    
    )

}

export default RadioSet