import React from 'react'

const Jsx5 = () => {
const names = ["Ali" , "Veli" ,"Ayse" , "Fatma"]

  return (
    <div>
        <ul>
            {names.map((name,i)=><li key={i}>{name}</li>)}
            <li>Map kullanirken key degeri almak zorundayiz suslu icinde kullanilir 
                ve map sonrasi gelen ilk degerden alinir
            </li>
           
        </ul>
    </div>
  )
}

export default Jsx5