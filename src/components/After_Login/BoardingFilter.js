import React, { useState } from 'react';

const BoardingFilter = ({ onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [priceFilter, setPriceFilter] = useState('0');
    const [ratingFilter, setRatingFilter] = useState('1');
    const [distanceFilter, setDistanceFilter] = useState('0');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleFilterChange = () => {
        // Validate input values
        const validatedPriceFilter = Math.max(0, parseFloat(priceFilter)) || ''; // Ensure price is non-negative
        const validatedRatingFilter =
            Math.max(1, Math.min(5, parseFloat(ratingFilter))) || ''; // Ensure rating is between 1 and 5
        const validatedDistanceFilter =
            Math.max(0, parseFloat(distanceFilter)) || ''; // Ensure distance is non-negative

        // Call the onFilterChange prop with the validated filter values
        onFilterChange({
            searchTerm,
            priceFilter: validatedPriceFilter,
            ratingFilter: validatedRatingFilter,
            distanceFilter: validatedDistanceFilter,
        });
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Add an event listener to call handleFilterChange when the button is clicked
    const applyFilters = () => {
        handleFilterChange();
    };

    return (
        <div className={`boarding-filter${isDarkMode ? ' dark-mode' : ''}`}>
            <h3>Boarding Filters</h3>
            <input
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <label>
                Price Filter:
                <input
                    type="number"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                />
            </label>
            <label>
                Rating Filter:
                <input
                    type="number"
                    step="0.1"
                    max="5"
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                />
            </label>
            <label>
                Distance Filter:
                <input
                    type="number"
                    value={distanceFilter}
                    onChange={(e) => setDistanceFilter(e.target.value)}
                />
            </label>
            {/* Use the applyFilters function as the onClick handler for the button */}
            <button onClick={applyFilters}>Apply Filters</button>
            {/* Toggle dark mode button */}
            <button id="toggle-dark-mode" onClick={toggleDarkMode}>
                Toggle Dark Mode
            </button>
        </div>
    );
};

export default BoardingFilter;
