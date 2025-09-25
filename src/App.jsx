
import './App.css'
import { useState, useEffect } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import CataloguePage from './pages/CataloguePage'
import WelcomePage from './pages/WelcomePage'
import DogDetailPage from './pages/DogDetailPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  const url = 'https://api.jsonbin.io/v3/b/68d50b75d0ea881f408a430e'
  const [dogs, setDogs] = useState(null);

  // newDog
  const newDog = {
  name: "Max",
  sex: "male",
  breed: "beagle",
  img: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
  present: false,
  age: 2,
  chipNumber: "XYZ123456",
  owner: {
    name: "Anna",
    lastName: "Karlsson",
    phoneNumber: "0701234567"
  }
};

        /**
         * API call, fetches dogs and sets dogs to {dogs}
         */

        useEffect(() => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'X-MASTER-KEY': '$2a$10$03DlZkaCarNNVUJZe8u.mePBGnzRxrsMn9Tj3shi7dOhrGdyCF8u6'
                }
                
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response not ok');
                }
                return response.json();
            })
            .then((json) => {
                console.log(json);

                /** Adding id property to all dogs  * */
                const addIds = json.record.record.map((dog, index) =>  (
                    {...dog,
                        id: index
                    }
                ))

                setDogs(addIds);
                console.log(json)
            })
            .catch((error) => console.log(error));
        }, [])

        // add a new dog function
        const addNewDog = async() => {
          fetch(url, {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
              'X-MASTER-KEY': '$2a$10$03DlZkaCarNNVUJZe8u.mePBGnzRxrsMn9Tj3shi7dOhrGdyCF8u6'
            },
            body: JSON.stringify({record: [...dogs, newDog]})
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
        }


// Created router here because i wanted to send the {dogs} to different pages
const router = createHashRouter([
  {
    path: '/',
    element: <WelcomePage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/cataloguePage',
    element: <CataloguePage dogs={dogs} addNewDog={addNewDog}/>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'dogDetailPage/:id',
    element: <DogDetailPage dogs={dogs}/>,
    errorElement: <ErrorPage/>
  }
])

  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
