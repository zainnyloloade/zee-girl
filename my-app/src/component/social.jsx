import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Social = () => {
  return (
    <div  className='pl-5 text-3xl rounded-b-ful flex-1/5 justify-between'>
        <a href="https://web.facebook.com/heyfoodNg?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className='text-3xl' /></a>
       <a href="https://x.com/HeyfoodAfrica" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitterSquare} /></a>
      <a href="https://www.instagram.com/heyfood.africa/#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareInstagram} /></a>
              <a href="https://www.linkedin.com/company/heyfood/" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} /></a>

    </div>
  )
}

export default Social
