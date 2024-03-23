"use client";
// import React from 'react'
import { useState } from "react";
import { SearchManufactuter } from ".";

const SearchBar = () => {
    const [manufacturer ,setManufacturer]=useState('');
    
    const handleSearch = () => {};

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufactuter 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                />
            </div>
        </form>
    );
};

export default SearchBar;
