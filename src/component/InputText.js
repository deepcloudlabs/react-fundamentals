export default function InputText({htmlFor,label,value,handleInput}) {
    return (
        <>
            <label className="control-label"
                   htmlFor={htmlFor}>{label}:</label>
            <input type="number"
                   className="form-control"
                   name={htmlFor}
                   id={htmlFor}
                   value={value}
                   onChange={handleInput}
            />
        </>
    );
}
