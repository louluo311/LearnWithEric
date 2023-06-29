import React from 'react'

const AddUserInfor2 = () => {
    const name = '';
    const address = 'Martial Art';
    const age = '';

    const handleOnChangeName = (event) =>{
        // alert('me')
    }

    const handleOnChangeAge = (event) => {
        // alert('me')
    }
  return (
      <>
          my name is {name} and I'm from {address}. I'm {age}
          <form>
              <label>Your name:</label>
              <br />
              <input
                  value={name}
                  type="text"
                  onChange={(event) => handleOnChangeName()} />
              <br /><br />
              <label>Your age:</label>
              <br />
              <input
                  value={age}
                  type="text"
                  onChange={(event) => handleOnChangeAge()} />
              <button>submit</button>
          </form>
      </>
  )
}

export default AddUserInfor2