'use client'
import React, { useState } from 'react';
import CourseCard from '../allCoursePage/CourseCard';

const SearchandDisplay = ({ courses }) => {
  const [searchText, setSearchText] = useState("");
  const [items, setItems] = useState([...courses])

  const getItems = (searchText) => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchText.toLowerCase()))
    setItems(filtered);

  }
  return (
    <div className='space-y-2'>
      <div className='text-center lg:text-left space-y-2 lg:flex px-5'>

        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
        <div>

          <button onClick={() => { getItems(searchText) }} className='btn btn-primary px-5 py-2 ml-2'>Search</button>
          <button onClick={() => { setItems([...courses]) }} className='btn btn-secondary px-5 py-2 ml-2'>Reset</button>
        </div>
      </div>

      <div className='space-y-2 px-5 '>

        {
          items.map((course, index) => (
            <CourseCard key={index} course={course}></CourseCard>
          ))
        }
      </div>
    </div>
  );
};

export default SearchandDisplay;