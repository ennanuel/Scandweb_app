import Label from './Label';
import Input from './Input';

//This component is used to set the 'label' and 'input' components.

export default function LabelInput( { name, id, label, propClass } ) {
    return (
        <tbody>
            <tr>
                <td>
                    <Label For={name} labelText={label} />
                </td>
                <td>
                    <Input propName={name} id={ id } propClass={"input " + propClass} />
                </td>
            </tr>
        </tbody>
    )
}