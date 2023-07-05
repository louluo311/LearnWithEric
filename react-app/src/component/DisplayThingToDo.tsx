import React, { useState } from 'react'
import './DisplayInfor.scss'

const DisplayThingToDo = (props) => {
  const { listThings } = props;
  const [isShowHideListThing, setShowHideListThing] = useState(true);
  const handleShowHideListThing = () => {
    setShowHideListThing(!isShowHideListThing)
  }
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListThing()}>{isShowHideListThing ? 'Hide' : 'Show'} list todo</span>
      </div>
      {isShowHideListThing &&
        <div>
          {listThings.map((user, index) => {
            // console.log(listUsers)
            return (
              <div key={user.id} className={(user.thing.length > 8) ? 'red' : 'blue'}>
                <div>
                  {/* <div>My focus on: {user.name}</div> */}
                  <div>My focus on: {user.thing}</div>

                </div>
                <div>
                  <button onClick={() => props.handleDeleteThing(user.id)}>Delete</button>
                </div>
              </div>

            )

          })}
        </div>
      }
    </div>
  )

}

export default DisplayThingToDo