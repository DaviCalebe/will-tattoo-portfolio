import React from 'react'
import star from '../assets/star.png'
import calendar from '../assets/calendar.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.png'

const Topbar = () => {
  return (
      <div className="flex justify-between px-16 fixed top-0 w-full h-10 bg-transparent">
        <div className="flex gap-4">
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
          <img src={star} alt="star" className="w-9 h-9" />
        </div>

        <div className="flex items-center justify-evenly bg-primary w-52 h-10 rounded-b-lg">
          <img src={calendar} alt="calendar" className="w-8 h-8" />
          <img src={whatsapp} alt="whatsapp" className="w-8 h-8" />
          <img src={instagram} alt="instagram" className="w-8 h-8" />
        </div>
      </div>
  )
}

export default Topbar