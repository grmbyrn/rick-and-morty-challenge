import {useState, useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import Pagination from '../components/Pagination/Pagination'
import Search from '../components/Search/Search'

const Locations = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [locations, setLocations] = useState([])
  const [search, setSearch] = useState('')
  console.log(locations)

  const api = `https://rickandmortyapi.com/api/location/?name=${search}`
  const {info} = locations

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(api)
      const data = await response.json()
      setLocations(data.results)
    }

    fetchData()
  }, [api])

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <Search
          setPageNumber={setPageNumber}
          setSearch={setSearch}
        />
        <ul>
          {locations.map((location) => (
            <li key={location.id} className="border py-4">
              <h3 className="text-xl font-bold mb-2">Name: {location.name}</h3>
              <p className="text-gray-600">Type: {location.type}</p>
              <p className="text-gray-600">Dimension: {location.dimension}</p>
            </li>
          ))}
        </ul>
      </div>
      <Pagination 
          info={info} 
          pageNumber={pageNumber} 
          setPageNumber={setPageNumber}
      />
      <Footer />
    </div>
  )
}

export default Locations