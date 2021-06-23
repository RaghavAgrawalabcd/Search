import React, { useState, useEffect } from 'react'
import axios from "./axios";
import "./Row.css";

function Row() {
    const [movies, setMovies] = useState([])
    const [value,setValue]= useState("awww")
    const [search, setSearch] = useState("awww/new.json")
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(search);
            setMovies(request.data.data.children);
            return request;
        }
        fetchData();
    }, [search]);
    return (
        <div className="row">
            <div className="Search">
                <h4>Search History</h4>
                <div className="SearchItems">
                    <input type="text" onChange={(e)=>{setValue(e.target.value)} } value={value}/>
                    <button onClick={()=>setSearch(`${value}/new.json`)}>Search</button>
                </div>
            </div>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movie.data.id}
                        className={`row_poster ${"row_posterLarge"}`}
                        src={movie.data.thumbnail}
                        alt={movie.data.title}
                    />
                )
                )}
            </div>     
        </div>
    )
}

export default Row
