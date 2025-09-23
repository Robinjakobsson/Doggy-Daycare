
import './App.css'
import { useState, useEffect } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import CataloguePage from './pages/CataloguePage'
import WelcomePage from './pages/WelcomePage'
import DogDetailPage from './pages/DogDetailPage'

function App() {
  const url = 'https://api.jsonbin.io/v3/b/68cd3354d0ea881f408302f7'
  const [dogs, setDogs] = useState(null);


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



const router = createHashRouter([
  {
    path: '/',
    element: <WelcomePage/>,
    errorElement: <h2>Fel</h2>
  },
  {
    path: '/cataloguePage',
    element: <CataloguePage dogs={dogs}/>,
    errorElement: <h2>Fel</h2>
  },
  {
    path: 'dogDetailPage/:id',
    element: <DogDetailPage dogs={dogs}/>,
    errorElement: <h2>Fel</h2>
  }
])

  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
