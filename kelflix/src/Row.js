import React, { useEffect, useState } from "react"
import "./Row.css"
import axios from "./axios"

const baseUrl = "http://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  //a snippet of code which runs based on specific variable/condition
  useEffect(() => {
    //if [], run onces when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      //"https://api.themoviedb.org/3"
      console.log(request.data.results)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Row
