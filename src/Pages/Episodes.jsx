import {useState, useEffect} from 'react'
import Card from '../components/Card/Card'
import Search from '../components/Search/Search'

const Episodes = () => {
  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  const {air_date, name} = info

  const api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function (){
      const data = await fetch(api)
        .then(res => res.json())
        setInfo(data)

      const a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then(res => res.json())
        })
      )
      setResults(a)
    })()
  }, [api])

  return (
    <div>
      <div>
        <h1>Episode: {name === '' ? 'Unknown' : name}</h1>
        <h5>Air Date: {air_date === '' ? 'Unknown' : air_date}</h5>
      </div>
      <div>
        <div>
          <div>
            <h4>Pick Episode</h4>
            <Search />
          </div>
        </div>
        <div>
          <div>
            <Card page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes