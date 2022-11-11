import React from 'react';

function SearchBar() {
  return (
    <form className="flex flex-row justify-end h-16 w-[60%] bg-white rounded-xl px-4 shadow-lg">
      <input
        type="text"
        className="py-8 px-4 grow focus:outline-none"
        placeholder="Search your pokemon..."
      />
      <button type="submit" className="my-auto hover:scale-110 easeout duration-100">
        <svg className="w-10 h-10 stroke-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </form>
  );
}

export default SearchBar;
