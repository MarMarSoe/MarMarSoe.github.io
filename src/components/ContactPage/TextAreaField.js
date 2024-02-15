const TextareaField = ({id, label, register, ...props}) => {
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} {...props}  className="border p-2 border-gray-400 rounded-md" row="5"
        {...register(id, { required: true })}
        />
        </>
        )
    }
    
    export default TextareaField;