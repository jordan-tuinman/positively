import React from 'react'
import { connect } from 'react-redux'
import HabitList from './HabitList'

import UserDetails from './UserDetails'
import Achievements from './Achievements'

const Profile = () => {
  return (
    <div className="row gx-3 pe-3 py-3 ps-3 ps-md-0">
      <div >
        <h1>Hey {user.firstName} {user.lastName}!</h1>
        <img src={user.userImage} alt="user-image"/>
        <h2>Level: {calculateLevelv2(user.totalXp)}</h2>
        <p>Current Exp. {user.totalXp}</p>
      </div>
      <div className="col-md-6 mb-md-0 mb-3">
        <UserDetails />
      </div>
      <div className="col-md-6">
        <HabitList />
        <Achievements />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
