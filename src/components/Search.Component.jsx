import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ setResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const apiKey = '840de593b7028de6e424162454790fe5';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex justify-center items-center text-slate-700'>
      {/* Search Bar */}
      <div className='flex items-center'>
        <input
          type='text'
          placeholder='Search...'
          className='h-12 border-l border-t border-b border-gray-700 px-3 rounded-l-full outline-none'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <div
          className='bg-white border-r border-t border-b rounded-r-full h-12 border-gray-700 px-3 flex justify-center items-center text-xl'
          onClick={handleSearch}
        >
          <div className='text-red-500'>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
