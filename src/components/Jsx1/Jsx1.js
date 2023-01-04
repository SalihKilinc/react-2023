import React from 'react'

const Jsx1 = () => {

const message= "Tum elemenler tek bir cati olmak zorundadir yoksa compile etmez";

  return (
    <>
    <li>Jsx1</li>

    <li className='message'>!!! Tum elemenler tek bir cati olmak zorundadir yoksa compile etmez
        ornegin burda section elementi </li>
        <li className='title'>{message} </li>
    </>


  )
}

export default Jsx1;