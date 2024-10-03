import React, { useState, useEffect } from 'react'

function App() {

  // Initialize state 'backendData' with an array containing one empty object.
  // This will store the data fetched from the backend API.
  const [backendData, setBackendData] = useState([{}])

  // useEffect hook to run the data fetching logic after the component mounts.
  // It runs only once when the component is first rendered due to the empty dependency array [].
  useEffect(() => {
    // Fetch data from the '/api' route (backend API).
    fetch("/api")
      .then(
        // Convert the response to JSON.
        response => response.json()
      )
      .then(
        // After the data is received, update the backendData state with the fetched data.
        data => {
          setBackendData(data)
        }
      )
  }, []) // Empty array ensures this effect runs only once (component did mount).

  return (
    <div>
      {/* 
      Conditional rendering:
      If 'backendData.users' is undefined (data hasn't been fetched yet), display a loading message.
      Once the data is fetched and 'backendData.users' is defined, map over the users array and render each user.
      */}
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (

          <p key={i}> {user}</p>
        ))
      )}
    </div>
  )
}

export default App
