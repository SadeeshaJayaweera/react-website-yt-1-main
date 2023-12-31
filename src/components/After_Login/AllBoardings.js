    // AllBoardings.js

    import React, { useState } from 'react';
    import './AllBoardings.css'; // Import the CSS file
    import BoardingFilter from './BoardingFilter'; // Import the BoardingFilter component
    import './BoardingFilter.css';
    import './BoardingFilter.js';

    const boardingData = [
        { id: 1, title: 'Temple Junction Shared Room', imageSrc: 'https://lh3.googleusercontent.com/p/AF1QipNOURw1V7JM2Ta6n-t5CHucYpB99GpzrxfR1rbC=w574-h384-n-k-rw-no-v1', description: 'Immerse yourself in a serene living environment designed exclusively for NSBM students. Our accommodations offer well-furnished rooms with attached bathrooms', rating: 4.5, price: 5000 },
        { id: 2, title: 'Temple Junction Room', imageSrc: 'https://shorturl.at/lnMVW', description: 'Immerse yourself in a serene living environment designed exclusively for NSBM students. Our accommodations offer well-furnished rooms with attached bathrooms', rating: 3.8, price: 3500 },
        { id: 3, title: 'School Junction Room', imageSrc: 'https://shorturl.at/nEMN9', description:'Immerse yourself in a serene living environment designed exclusively for NSBM students. Our accommodations offer well-furnished rooms with attached bathrooms', rating: 5.0, price: 6000 },
        { id: 4, title: 'Homagama Room for Girls, near NSBM', imageSrc: 'https://rb.gy/10l6tf', description: 'Immerse yourself in a serene living environment designed exclusively for NSBM students. Our accommodations offer well-furnished rooms with attached bathrooms', rating: 4.2, price: 4500 },
        { id: 5, title: 'Pitipana Junction Shared Room', imageSrc: 'https://shorturl.at/xMOUV', description: 'Immerse yourself in a serene living environment designed exclusively for NSBM students. Our accommodations offer well-furnished rooms with attached bathrooms', rating: 3.5, price: 3000 },
        { id: 6, title: 'Temple Junction Rooms for Boys, near NSBM', imageSrc: 'https://rb.gy/0a7efy', description: 'Immerse yourself in a serene living environment designed exclusively for NSBM students. Our accommodations offer well-furnished rooms with attached bathrooms', rating: 4.0, price: 4800 },
        // Add more boarding data as needed
    ];

    const BoardingItem = ({ title, imageSrc, description, rating, price }) => (
        <div className="boarding-item">
            <img src={imageSrc} alt={title} />
            <div className="boarding-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="star-rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}>&#9733;</span>
                    ))}
                </div>
                <p className="price">LKr {price}</p>
                <button className="availability-button" disabled>Available Boarding</button>
            </div>
        </div>
    );

    const AllBoardings = () => {
        const [filteredBoardings, setFilteredBoardings] = useState([...boardingData]);

        const handleFilter = (filters) => {
            const filteredData = boardingData.filter((boarding) => {
                return (
                    boarding.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
                    (filters.priceFilter === '' || boarding.price >= filters.priceFilter) &&
                    (filters.ratingFilter === '' || boarding.rating >= filters.ratingFilter)
                    // Add more filtering conditions as needed
                );
            });

            setFilteredBoardings(filteredData);
        };

        return (
            <div className="all-boardings-page">
                <div className="filter-and-list">
                    {/* Correct prop name: onFilterChange -> onFilter */}
                    <BoardingFilter onFilterChange={handleFilter} />
                    <div className="boarding-list">
                        {filteredBoardings.map((boarding) => (
                            <BoardingItem key={boarding.id} {...boarding} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };



    export default AllBoardings;
