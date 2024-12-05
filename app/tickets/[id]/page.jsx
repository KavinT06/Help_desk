import React from 'react'

export default function TicketDetails({ params }) {

  const id = params.id;

  return (
    <div>
      <h1>TicketDetails</h1>
      <p>{id}</p>
      <p>check msg!</p>
    </div>
  )
}
