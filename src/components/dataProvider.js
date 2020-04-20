import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const DataProvider = (props) => {
    const [data, setData] = useState([])

    const getData = (qualifier) => {
        return fetch(`http://localhost:8088/${qualifier}`)
            .then(res => res.json())
            .then(setData)
    }

    const addData = (qualifier, data) => {
        return fetch(`http://localhost:8088/${qualifier}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(getData)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [data])

    return (
        <LocationContext.Provider value={{
            data, addData
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}