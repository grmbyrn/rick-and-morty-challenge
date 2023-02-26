import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
  const {id} = useParams()
  const [fetchedData, setFetchedData] = useState([])
  const {name, image, location, origin, gender, species, status, episode} = fetchedData
  
  const api = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
    async function fetchData(){
      const res = await fetch(api)
      const data = await res.json()
      setFetchedData(data)
    }
    fetchData()
  }, [api])

  return (
    <div className='bg-black'>
      <div className='absolute top-20 left-0 p-4'>
        <h1 className='text-white text-6xl font-bold'>{name}</h1>
      </div>

      <div className="flex flex-row items-center justify-start max-w-lg mx-auto bg-white my-8 rounded-md">
          <div className="flex-shrink-0 relative w-1/3">
              <img className="w-full h-full object-cover rounded-tl-md rounded-bl-md" src={image} alt='' />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>
          </div>
          <div className="flex gap-24 justify-center ml-4">
            <div>
              <div>
                <h2 className='font-bold'>Name:</h2>
                <p>{name}</p>
              </div>
              <div>
                  <h2 className='font-bold'>Status:</h2>
                  <p>{status}</p>
              </div>
              <div>
                  <h2 className='font-bold'>Species:</h2>
                  <p>{species}</p>
              </div>
              <div>
                  <h2 className='font-bold'>Gender:</h2>
                  <p>{gender}</p>
              </div>
            </div>
            <div>
              <div>
                  <h2 className='font-bold'>Origin:</h2>
                  <p>{origin?.name}</p>
              </div>
              <div>
                  <h2 className='font-bold'>Location:</h2>
                  <p>{location?.name}</p>
              </div>
              <div>
                  <h2 className='font-bold'>Episodes:</h2>
                  <p>{episode?.length}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardDetails