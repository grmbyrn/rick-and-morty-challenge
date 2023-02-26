import {useState, useEffect} from 'react'
// import Card from '../components/Card/Card'

const Locations = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [locations, setLocations] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const api = `https://rickandmortyapi.com/api/location/?${pageNumber}&name=${searchTerm}`

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(api)
      const data = await response.json()
      setLocations(data.results)
    }

    fetchData()
  }, [api])

  function handleSearch(e){
    setSearchTerm(e.target.value)
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text" 
          value={searchTerm} 
          onChange={handleSearch}
          className="border rounded px-2 py-1 w-full" 
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
    </div>
  )
}

export default Locations