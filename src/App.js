import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPage from './pages/AddPage';
import Main from './pages/Main';
import Error from './pages/Error';
import Home from './pages/Home';

const App = () => 
{

  const page = 'https://products-page.000webhostapp.com/';

  const [list, setList] = useState([]);

  const [effect, setEffect] = useState(true);

  /* The useEffect Hook below fetches the products from my php API
  and sets the value of the list state to the array it fetched from the API */

    useEffect
    (
      () => 
      {
        fetch(  page  )

          .then(  res => res.json() )

            .then(  
              data => {

              setList(data.items);

              } 
            )
      }, [effect]
    )

    /* The function below is what is called when the user taps the MASS DELETE.
    The function is called in Main.js and only runs wheh at least one checkbox is clicked */

    const deleteProduct = () => 
    {
      const delete_form = document.getElementById('deleteForm');

      const values = new FormData( delete_form);

      // This is used to change the state of list, which contains the product divs.
      
      let arr = [ ...values ];
      // We check to see if there are any values before sending the product data.

      if(arr.length <= 0) 
      {
        return;
      }

      const deleteRequest = { method: 'POST', headers: {}, body: values };

      /* The code below filters out filters out any element that has been deleted before sending
       the POST request to the api delete the product specified. */

      setList
      (
        list.filter(  elem => !arr.some(  item => item[1] === elem.SKU  ) )
      );

      fetch( page , deleteRequest )

        .then(  response => response.json() )

            .then(  data=> console.log(data)  )

  };

  /* The function below is called Save Button is clicked, it is called in AddPage.js
  and runs only when all the requirements for input are met */

  const addProduct = () => 
  {
    const add_form = document.getElementById('product_form');

    const values = new FormData(add_form);

    const addRequest = { method: 'POST', headers: {}, body: values };

    fetch( page , addRequest )
      .then( 
        res => res.json()
        .then(  data => 
          {
            console.log(data);
            setEffect(!effect);
          } )
        )

  };

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}>

          <Route index element={<Main content={ list } deleteProduct={ deleteProduct }/>} />

          <Route path="add" element={<AddPage submit={ addProduct }/>} />

          <Route path="*" element={<Error />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )


}

export default App;