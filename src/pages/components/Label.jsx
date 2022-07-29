export default
 function Label({ For, labelText }) 
 {
    return (
        <label htmlFor={For}>{labelText}</label>
    )
}