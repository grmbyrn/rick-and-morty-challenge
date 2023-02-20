import {useState, useEffect} from 'react'
import Card from '../components/Card/Card'

const Locations = () => {
  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  const {name, type, dimension} = info

  const api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function (){
      const data = await fetch(api)
        .then(res => res.json())
        setInfo(data)

      const a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then(res => res.json())
        })
      )
      setResults(a)
    })()
  }, [api])
  return (
    <div>
      <div>
        <h1>Location: {name === '' ? 'Unknown' : name}</h1>
        <h5>
          Dimension: {dimension === '' ? 'Unknown' : dimension}
        </h5>
        <h6>
          Type: {type === '' ? 'Unknown' : type}
        </h6>
      </div>
      <div>
        <div>
          <div>
            <h4>Pick Location</h4>
          </div>
        </div>
        <div>
          <div>
            <Card page='/location/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations