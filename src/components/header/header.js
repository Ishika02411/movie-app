import React from "react"
import "./header.css"
import {Link} from "react-router-dom"

const Header =()=> {
    return (
        <div classname = "header">
            <div classname= "headerLeft">
                <Link to ="/"><img className = "header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /> </Link>
                <Link to="/movies/popular">popular</Link>
                <Link to ="/movies/top_rated">top rated</Link>
                <Link to ="/movies/upcoming">upcoming</Link>
            </div>
        </div>
    )
}