import Radio from './Radio';

function RadioSet(props){
    return(
    <div id={`${props.category}_form_check_id`} className="form-check">
        {props.name_array.map( ( button ) => <Radio id={ `${button.toLowerCase()}_${props.category.toLowerCase()}_id` } key={`${button}_${props.category}_key`} classes={props.classes} category={props.category} name={button} storeRadioClick={props.storeRadioClick}/> )}
    </div>    
    )

}

export default RadioSet