import React, {useState,useEffect} from 'react'
import {v1 as uuid} from 'uuid';

function History() {

    const[savedHistory,setSavedHistory] =useState([])
    const[weather,setWeather] =useState([])

    const saved = JSON.parse(localStorage.getItem("history"))
    const updatedhistory = [...saved, {
        id: uuid(),
        // setWeather : res.data,
    }]

    localStorage.setItem("history",
       JSON.stringify(updatedhistory))
       setSavedHistory(JSON.parse(localStorage.getItem("history")))
       .catch(err =>console.error(err))
    return (
        <div>
            {
                <ul>
                    {savedHistory?
                    savedHistory.map((history) => (
                        <li className='savedhistory' key={history.id}>
                            {history.Weather}
                        </li>
                    )       ): <></>}
                </ul>
            }
        </div>
    )
}

export default History
