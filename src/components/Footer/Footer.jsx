import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6">
      <div className="flex justify-center">
        <a href="https://www.facebook.com/" className="mx-4">
          <FontAwesomeIcon icon={faFacebook} size="2x" className="text-white hover:text-blue-500" />
        </a>
        <a href="https://www.instagram.com/" className="mx-4">
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-pink-500" />
        </a>
        <a href="https://www.linkedin.com/" className="mx-4">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-blue-500" />
        </a>
      </div>
    </footer>
  )
}

export default Footer