
const FormInput = ( {type, name, id, placeholder, state, setState} ) => {
    return (
        <div className="wrapper-items">
            <input 
                type={type} 
                placeholder={placeholder} 
                id={id} 
                name={name} 
                onChange={e => setState(e.target.value)} 
                value={state}    
                />
        </div>
    );
}

export default FormInput;
