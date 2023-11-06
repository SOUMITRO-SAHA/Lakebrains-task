import React from 'react';

const Result = ({ result }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='p-8 rounded-lg bg-white shadow-lg'>
        {/* API Title */}
        <h2 className='text-2xl font-bold mb-4'>{result?.name}</h2>

        {/* Other Response */}
        <div className='mb-2'>
          <span className='font-bold'>Temperature:</span> {result?.main?.temp}°C
        </div>
        <div className='mb-2'>
          <span className='font-bold'>Feels Like:</span>{' '}
          {result?.main?.feels_like}°C
        </div>
        <div className='mb-2'>
          <span className='font-bold'>Description:</span>{' '}
          {result?.weather[0]?.description}
        </div>
        <div className='mb-2'>
          <span className='font-bold'>Wind Speed:</span> {result?.wind.speed}{' '}
          m/s
        </div>
        <div className='mb-2'>
          <span className='font-bold'>Humidity:</span> {result?.main?.humidity}%
        </div>
        <div className='mb-2'>
          <span className='font-bold'>Pressure:</span> {result?.main?.pressure}{' '}
          hPa
        </div>
      </div>
    </div>
  );
};

export default Result;
