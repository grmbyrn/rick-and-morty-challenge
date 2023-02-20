import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({results, page}) => {
    let display;

    if(results){
        display = results.map(result => {
            let {id, name, image, location, species, status, episode} = result
            return (
                <Link 
                    to={`${page}${id}`} 
                    key={id}
                >
                    <div className="flex flex-row items-center justify-start max-w-lg mx-auto bg-white my-8 rounded-md">
                        <div className="flex-shrink-0 relative w-1/3">
                            <img className="w-full h-full object-cover rounded-tl-md rounded-bl-md" src={image} alt='' />
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>
                        </div>
                        <div className="flex flex-col justify-center ml-4">
                            <h2 className='font-bold text-lg'>{name}</h2>
                            <div>
                                <h2><span>{status}</span> - <span>{species}</span></h2>
                            </div>
                            <div>
                                <h2>Last known location:</h2>
                                <p>{location.name}</p>
                            </div>
                            <div>
                                <h2>First seen in:</h2>
                                <p>{episode[0]}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
    } else {
        display = 'No characters found :/'
    }
  return (
    <>{display}</>
  )
}

export default Card