import React from 'react'
import { useState } from 'react'

const courses = [
    "Advanced Database Technologies",
    "Algebraic and Numerical Algorithms",
    "Advanced Data Structures and Algorithms",
    "Methods of Artificial Intelligence",
    "Modelling and Analysis of Information Systems",
    "Advanced Programming Practices",
    "Computer Games Programming",
    "Creating Web Applications",
    "Design Contribution of Distributed Systems",
    "Modelling and Analysis of Informatic Systems",
    "Information and Network Security",
    "Object-oriented Programming in Java",
    "Basic Internet Technologies",
    "Designing and Programming Business Applications",
    "Team Project",
    "Scientific and Technical Calculations",
]



function CoursesPage( {Logout, user}) {
    let [chosenCourses, setChosenCourses] = useState([]);
    const [coursesSubmitted, setCoursesSubmitted] = useState(false)

    const addCourse = (courseIndex) => {
        const newCourses = [...chosenCourses, courses[courseIndex]]
        console.log("newCourses", newCourses)
        setChosenCourses(newCourses)
    }

    const removeCourse = (courseIndex) => {
        if (chosenCourses.length > 0) {
            const removeIndex = chosenCourses.indexOf(courses[courseIndex])
            if (removeIndex > -1) {
                chosenCourses.splice(removeIndex, 1);
            }
        }    
    }

    const handleCheckBox = e => {
        const courseIndex = Number(e.target.id)
        console.log("courseIndex ", courseIndex)
        if (e.target.checked) {
            console.log("Adding course")
            addCourse(courseIndex)
            return
        }
        removeCourse(courseIndex)
    }




    return (
        <div className="coursePage">
            <div className="welcome">
                <h2>Welcome, <span>{user.name} {user.surname}</span></h2>
                <button onClick={Logout}>Logout</button>
            </div>

            {(coursesSubmitted) ? (<AcceptedCoursesList chosenCourses={chosenCourses} />) : (<CoursesList handleCheckBox={handleCheckBox} chosenCourses={chosenCourses} setCoursesSubmitted={setCoursesSubmitted} />)}
        </div>
    )
}

function CoursesList({ handleCheckBox, setCoursesSubmitted, chosenCourses }) {
    const [error, setError] = useState("")
    
    const elemCoursesCheckBox = []
    for (const [index, value] of courses.entries()) {
        elemCoursesCheckBox.push(
            <li className="courseItem" key={index}>
                <input type="checkbox" name="course" id={index} value={value} onChange={handleCheckBox} />
                <label htmlFor={index}>{value}</label>
            </li>
        )
    }
    
    const showCourses = e => {
        e.preventDefault();
        if (chosenCourses.length < 6 || chosenCourses.lenght > 8) {
            setError("Incorrect number of courses")
        } else {
            setCoursesSubmitted(true)
        }
    }

    return (
        <form onSubmit={showCourses}>
            <h2>Courses list</h2>
            <p>Please choose 6 to 8 courses from the below list:</p>
            <ul className="courses">
                {elemCoursesCheckBox}
            </ul>
            <p className="error">{error}</p>
            <input type="submit" value="Enroll" />
        </form>
    )
}

function AcceptedCoursesList( {chosenCourses} ) {

    const elemChosenCourses = []
    for (const [index, value] of chosenCourses.entries()) {
        elemChosenCourses.push(
            <li className="courseItem">{value}</li>
        )
    }

    return (
        <div>
            <h3>You are enrolled to the following courses:</h3>
            <ul className="courses">
                {elemChosenCourses}
            </ul>
        </div>
    )
}




export default CoursesPage;
