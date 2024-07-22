import React, { useState } from 'react'
import './MeetFloatingButton.css';

function MeetFloatingButton() {
    const [hovered, setHovered] = useState(false);
  return (
    <button
      className={`meetFloating ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? <p className='meetText'>Meet Our Team</p> : <i class="bi bi-calendar-check-fill"></i>}
    </button>
  )
}

export default MeetFloatingButton