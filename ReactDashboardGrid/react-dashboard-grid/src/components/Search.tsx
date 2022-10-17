import React from 'react';

function Search() {
    return (
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search by Port/Region" />
            <button className="search__button">
                <svg className="search__icon">
                    <use xlinkHref="/sprite.svg#icon-magnifying-glass"></use>
                </svg>
            </button>
        </form>
    );
}

export default Search;