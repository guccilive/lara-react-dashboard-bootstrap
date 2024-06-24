import React from 'react'
import './main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'

function Main() {
  return (
    <main id='main' className='main'>
          <PageTitle page='Dashbaord' />
          <Dashboard />
    </main>
  )
}

export default Main