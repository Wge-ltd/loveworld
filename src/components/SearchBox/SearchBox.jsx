import { useState, useEffect } from "react";
import "./SearchBox.scss";
import SearchIcon from "../../assets/Search.svg";
import useDebounce from "../../hooks/useDebounce";

const SearchBox = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    const debouncedSearchQuery = useDebounce(searchText);

    useEffect(() => {
        const handleSearch = () => {
            onSearch(debouncedSearchQuery);
        };

        handleSearch();
    }, [debouncedSearchQuery, onSearch]);

    return (
        <div className="searchBox">
            <input
                type="text"
                placeholder="Search Files"
                className="dashboard_search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <img className="searchIcon" src={SearchIcon} alt="Search" />
        </div>
    );
};

export default SearchBox;
