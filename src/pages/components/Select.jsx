import Label from './Label';



export default 

function Select({ onChange, type }) 
{
    
    return (
        <>

        <tbody>

        <tr>

            <td>    <Label for="select" labelText="Type Switcher" />    </td>

            <td>
                <select className="input" onChange={ onChange } name="type_id" id="select">

                    <option value="">Type Switcher</option>

                    <option value="1">DVD</option>

                    <option value="2">Book</option>

                    <option value="3">Furniture</option>

                </select>
            </td>

        </tr>

        </tbody>

        {type}

        </>
    )


}