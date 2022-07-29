import form from './form-data-values/formInput';
import LabelInput from './LabelInput';
import Select from './Select';


/* This is component deals with displaying inputs in the 'Add Product' page. It maps through an array in 'FormInput.js'
and returns different input for specified data. */

export default function Form({ onChange, type, id }) 
{

    function showInput(input) 
    {
        return (
            <LabelInput
            key={ input.id }
            id={ input.elemId }
            name={ input.name }
            label={ input.label }
            propClass={ input.class }
            />
        )
    }


    return (

        <form id={ id }>

            <table>

                {form.map(showInput)}

                <Select onChange={onChange} type={type} />

            </table>
            
        </form>

    )

}