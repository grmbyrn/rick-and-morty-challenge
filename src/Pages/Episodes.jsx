import {useState, useEffect} from 'react'
// import Card from '../components/Card/Card'
// import Search from '../components/Search/Search'
import Pagination from '../components/Pagination/Pagination'
// import Footer from '../components/Footer/Footer'

const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const api = `https://rickandmortyapi.com/api/episode/?${pageNumber}&name=${searchTerm}`
  const {info} = episodes
  console.log(episodes)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setEpisodes(data.results);
    }

    fetchData();
  }, [api]);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  console.log(episodes)

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
          {episodes.map((episode) => (
            <li key={episode.id} className="border-b py-4">
              <h3 className="text-xl font-bold mb-2">{episode.name}</h3>
              <p className="text-gray-600">Episode: {episode.episode}</p>
              <p className="text-gray-600">Air date: {episode.air_date}</p>
            </li>
          ))}
        </ul>
      </div>
      <Pagination 
          info={info} 
          pageNumber={pageNumber} 
          setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default Episodes