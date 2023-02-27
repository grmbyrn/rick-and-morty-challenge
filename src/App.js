import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CardDetails from './components/Card/CardDetails';
import hero from './images/hero.png'
import Footer from './components/Footer/Footer';

function App(){
  return (
    <Router>
      <div className="App">
        <Navbar />
        <img src={hero} alt="" style={{height: '50%', width: '100%'}} />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetails />} />

        <Route path='/episodes' element={<Episodes />} />
        <Route path='/episodes/:id' element={<CardDetails />} />

        <Route path='/locations' element={<Locations />} />
        <Route path='/locations/:id' element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () =>  {
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const [search, setSearch] = useState('')

  const {info, results} = fetchedData
  console.log(fetchedData)

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect(() => {
    async function fetchData (){
      const res = await fetch(api)
      const data = await res.json()
      setFetchedData(data)
    }

    fetchData()
  }, [api])

  return (
    <>
      <div className='bg-black'>
        <div className='absolute top-20 left-0 p-4'>
          <h1 className='text-white text-6xl font-bold'>The Rick and Morty Challenge</h1>
          <p className='text-white text-2xl font-thin mt-4'>Lorem Ipsum dolor sit amet</p>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-lg mt-4'>Subscribe</button>
        </div>
        <Search
          setPageNumber={setPageNumber}
          setSearch={setSearch}
        />
        <div className='bg-gray-500'>
          <div className="">
            <div className="">
              <Card page='/' results={results} />
            </div>
          </div>
        </div>
        <Pagination 
          info={info} 
          pageNumber={pageNumber} 
          setPageNumber={setPageNumber}
        />
        <Footer />
      </div>
    </>
  )
}

export default App;
