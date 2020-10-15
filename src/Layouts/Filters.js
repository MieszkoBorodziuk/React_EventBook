import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import IconsApi from '../API/IconsApi';
import searchImg from '../Images/search.svg';
import '../Styles/sass/filters.sass';





const Filters = () => {
    const { setIsCityFilterEvents, setIsCategoryFilterEvents, setIsTitleFilterEvents } = useContext(StoreContext);


    const handleCityFilter = (e) => {
        setIsCityFilterEvents(e.target.value)
    };

    const handleCategoryFilter = (e) => {
        setIsCategoryFilterEvents(e.currentTarget.className)
    };

    const Icon = IconsApi.Icons.map(icon => (
        <div key={icon.name} className={icon.name + "-container"} >
            <button className={icon.name} onClick={handleCategoryFilter}>
                {icon.graphic}
                {icon.name}
            </button>
        </div>
    ));

    const handleNameFilter = (e) => {
        setIsTitleFilterEvents(e.target.value)
    }
    return (
        <div className="filters">
            <div className="search-container">
                <input className="search" placeholder="Wyszukaj" onChange={handleNameFilter}></input>
                <img className="search_img" src={searchImg} alt="bi bi-search"></img>
            </div>
            <div className="localization-container">
                <select className="localization" onClick={handleCityFilter}>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Trójmiasto">Trójmiasto</option>
                </select>
            </div>
            <div className="event_type-container">
                {Icon}
            </div>
            {/* <div className="filters-container_btn">
                <svg className="filters_logo_btn" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path></svg>
                <button className="filters_btn" >Filtry</button>
            </div> */}
        </div>
    );
}

export default Filters;