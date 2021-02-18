

import React from 'react'

const HomeSearch = () => {
  return (
    <div>
      <form>
        <div className="home-search">
          <div className="location-search">
            <p>Location</p>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="check-in-search">
            <p>Check in</p>
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2020-07-22"
              placeholder="Add date"
            />
          </div>
          <div className="check-out-search">
            <p>Check out</p>
            <input
              type="date"
              value="2020-07-22"
              placeholder="Add date"
            />
          </div>
          <div className="guests-search">
            <p>Guests</p>
            <input type="text" placeholder="Add guests" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default HomeSearch

