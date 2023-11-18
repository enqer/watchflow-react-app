import {useState} from "react";
import '../../styles/movies.css'
import img from '../../img/loki.jpg'

const Movies = () => {
    const arr = [...Array(20).keys()]

        // TODO stylizacja select i jego menu i poprawienie wysokości żeby było na równi z filmami
        // TODO dorobić własne menu + takie samo do ustawień

  return(
      <div className="moviesContainer">
          <div className="moviesHeader">
              <p className="moviesText">
                  Filmy
              </p>
              <select className="moviesSelect" >
                  {options.map((option) =>(
                      <option className="moviesOpton" value={option.value}>{option.label}</option>
                  ))}
              </select>
          </div>
          <div className="moviesWrapperImages">
              {/*// TODO cells with img of movies*/}
              {arr.map(a => (
                      <div className="moviesImage">
                          {/*<div className="moviesImg">{a+1}</div>*/}
                          <img className="moviesImg" src={img}/>
                      </div>
              ))}
          </div>

      </div>
  )
}



const options = [
    {
        label: "Polecane",
        value: "1",
    },
    {
        label: "Wszystkie filmy",
        value: "2",
    },
    {
        label: "Akcja",
        value: "3",
    },
    {
        label: "Komedie",
        value: "4",
    },
    {
        label: "Dokumentalne",
        value: "5",
    },
    {
        label: "Dramaty",
        value: "6",
    },
    {
        label: "Komedie romantyczne",
        value: "7",
    },
    {
        label: "Science fiction",
        value: "8",
    },
    {
        label: "Thrillery",
        value: "9",
    },
    {
        label: "Dla dzieci",
        value: "10",
    },

];
export default Movies;
