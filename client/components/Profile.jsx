import React from 'react'
import { connect } from 'react-redux'
import HabitList from './HabitList'

const Profile = ({ user }) => {
  return (
    <>
      <div>
        <h1>Hey {user.firstName} {user.lastName}!</h1>
        <img src={user.userImage} alt="user-image"/>
        <h2>Level: </h2>
        <p>Current Exp. {user.totalXp}</p>
      </div>
      <HabitList />
    </>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
