import React from 'react'

const jsx2 = () => {
    const user = {
        name: "Ali Git",
        email: "ali@git",
        occupation: "Developper",
    };

  return (
    <>
    <div>
        Name {user.name} / Email {user.email} / Occupation {user.occupation}
    </div>

    </>
  )
}

export default jsx2