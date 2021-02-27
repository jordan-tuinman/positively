import React from 'react'

import { connect } from 'react-redux'

import { updateCount, updateXp } from '../actions/index'
import { patchHabit, patchUser } from '../api/apiClient'

function Habit ({ dispatch, habit, user }) {
  function handleCount () {
    const newCount = habit.goalCount + 1
    const newXP = user.totalXp + 25
    patchHabit(habit.id, { goalCount: newCount })
      .then(() => {
        dispatch(updateCount(habit.id, newCount))
        return null
      })
      .then(() => {
        patchUser(user.id, { totalXp: newXP })
        return null
      })
      .then(() => {
        dispatch(updateXp(newXP))
        return null
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='habitListItem'>
      {<p>{habit.title}</p>}
      <button className='plusButton' onClick={handleCount}>
        <span>+</span>
      </button>
    </div>
  )
}

export default connect()(Habit)