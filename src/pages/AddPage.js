import { useState } from 'react';
import { dvd, book, furniture } from './components/form-data-values/formInput';
import LabelInput from './components/LabelInput';
import Heading from './components/Heading';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';

const AddPage = ({ submit }) => 
{

  /* The state below is for the requirements messages that display
   when input requirements are not met. */

  const [message, changeMessage] = useState('')

  /* The 'type' state below is passed to the 'Select' component for the
  to handle the different types of input displayed when a type is selected.
  This is passed to the Form componnent */

  const [type, changeType] = useState( [] );

  const navigate = useNavigate();
  
  //The function below is called when the client clicks on the 'Cancel' button

  const goBack = () =>
  {
    navigate(-1);
  }

  //The function below is called when the client clicks on the 'Save' button.

  function submitForm() 
  {

    const rgx = /^\d+(\.\d+)?$/;

    let inputs = document.getElementsByClassName("input");

    let numInputs = document.getElementsByClassName("num-input");

    //The loop below is used to verify if the values in the input meet the requirements.

    //This loop is used to check if any input value is empty.
    for(let i = 0; i < inputs.length; i++)
     {

      let input = inputs[i];

      if(input.value.length <= 0)
      {
        changeMessage('Please, submit required data');

        return;
      }

      /* This loop is checks if inputs that should be only digits,
       contain any thing other than digits */
      for(let j = 0; j < numInputs.length; j++)
       {

        let numInput = numInputs[j];

          if(!rgx.test(numInput.value)) 
          {
            changeMessage('Please, provide the data of indicated type');

            return;
          }
        }


    }
    // This calls the function in App.js that posts the data to the php API

    submit();

    // This changes the 'effect' so the useEffect runs again when the new product is added.

    // This takes us back to the previous page.

    navigate(-1);


  }

  // The function below is called when the option of the select element is changed.
  function changeSelectOption() 
  {

      let selectValue = document.getElementById("productType").value;

      /* The object below deals with the different option values from select. I created 'dvd', 
      'book' and 'furniture' arrays in FormInput.js for this. */

      const Types = {
        1: {  type: dvd, unit: "size" },
        2: {  type: book, unit: "weight"  },
        3: {  type: furniture, unit: "dimension"  }
      }
      
      // The function is used to map through an array and return label and input elements based on it's data.
      const inputs = (elem) => 
      {
        return <LabelInput 
                  key={ elem.id }
                  id={  elem.elemId } 
                  name={  elem.name } 
                  label={ elem.label  } 
                  propClass="num-input"
               />
      }

      /* The ternary operator below maps through the specified array using the function above,
      if the client chooses either DVD, Book or Furniture options but returns an empty array if 
      the user chooses neither of those */

      let newType = selectValue >= 1 && selectValue <= 3 ?
        [   ...(Types[selectValue].type.map(inputs) ),

        // The element below displays the 'please provide...' depending on the option the client picks.

        <tbody key="a">

          <tr>
              <td colSpan="2">

                <b>Please provide { Types[selectValue].unit }.</b>

              </td>
          </tr>

        </tbody>  ]
        : [];

        /* This changes the 'type' state, which in turn changes the input based on the option the client
        selects */

      changeType( newType );

  }

  
  return (
    <div className="App">

      <Heading
       title="Product Add"
       firstBtnId="add-btn" firstBtnText="Save" firstBtnOnClick={ submitForm }
       secondBtnId="cancel-btn" secondBtnText="Cancel" secondBtnOnClick={ goBack }
      />

      <div className="form">

        <Form onChange={ changeSelectOption } id='product_form' type = { type } />

        <p className="message">{ message }</p>

      </div>

    </div>
  );


}

export default AddPage;
