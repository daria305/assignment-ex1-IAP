import React from 'react'

function CoursesPage( {Logout, user}) {
    return (
        <div className="welcome">
            <h2>Welcome, <span>{user.name} {user.surname}</span></h2>
            <button onClick={Logout}>Logout</button>
      </div>
    )
}

export default CoursesPage;
