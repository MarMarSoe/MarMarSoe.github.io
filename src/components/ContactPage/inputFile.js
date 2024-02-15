const InputFile = ({register, errors, id, label, ...props}) =>{
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props}  className="border p-2 border-gray-400 rounded-md"
        {...register(id, { required: true })}
        />
        </>
        
        )
    }
    
    export default InputFile;