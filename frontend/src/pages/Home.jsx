import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "Naruto", release_date: "2020" },
        { id: 2, title: "One Piece", release_date: "1999" },
        { id: 3, title: "Bleach", release_date: "1990" },
        { id: 4, title: "One Punch Man", release_date: "1992" }
    ]

    const handleSearch = (e)=>{

        e.preventDefault()
        alert("You serched for "+searchQuery)
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange = {(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())&&<MovieCard movie={movie} key={movie.id} />)}
            
        </div>
    </div>
}

export default Home