import React from 'react'

const ProfileLayout = ({children}) => {
  return (
    <div>
        <div>Profile Header</div>
        <div>{children}</div>
    </div>
  )
}

export default ProfileLayout