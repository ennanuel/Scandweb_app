import Heading from './components/Heading';
import { useNavigate } from 'react-router-dom';

const Main = ({ content, deleteProduct }) =>   
{
    
  let navigate = useNavigate();

  // The function below is called when the client clicks on the ADD button.
  const goToAdd = () => 
  {
    navigate('/add');
  }
  
  /* The function is called when mapping through the array fetched from the php
  API to display them as 'products' */
  const mapProducts = ( elem  ) => 
  {
        return (
        <div className="product" key={  elem.id  }>

            <input type="checkbox" name="delete_prod[]" className="delete-checkbox" value={ elem.SKU } />

            <p className="info">

                { elem.SKU }<br />

                { elem.Name }<br />

                { elem.Price }$<br />

                { elem.measurement }: { elem.Size }{ elem.unit }<br />

            </p>

        </div>
        )
    }

    return (
        <div className="main">

            <Heading
                title="Product List"
                firstBtnId="add-product-btn" 
                firstBtnText="ADD" 
                firstBtnOnClick={ goToAdd }
                secondBtnId="delete-product-btn"
                secondBtnText="MASS DELETE"
                secondBtnOnClick={ deleteProduct }
            />

            <form id="deleteForm">

                <div className="container">

                {
                    content.length ?

                    content.map( mapProducts )
                    
                    :<div className="loading"></div>
                }

                </div>

            </form>
            
        </div>
    )
}

export default Main;