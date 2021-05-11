import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateUsername } from '../redux/reducers/users'

const onChangeUserName = (e) => {
  updateUsername(e.target.value)
}
const Users = () => {
  const userName = useSelector((store) => store.users.name)
  const dispatch = useDispatch()
  return (
    <div>
      {userName}
      <input
        type="text"
        className="boarder-black boarder-2"
        onChange={(event) => {
          dispatch(onChangeUserName(event))
        }}
      />
    </div>
  )
}

export default Users
