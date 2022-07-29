import React from 'React'
const Header = ({ course }) => {
    return (
        <h1>{ course.name }</h1>
    )
}

const Total = ( {course} ) => {
    const total = course.parts.reduce((item, addNum) => {
        return item + addNum.exercises
    }, 0)
    return (
        <p><b>Total amount of exercises : {total}</b></p>
    )
}

const Content = ( {parts} ) => {
    const displayParts = parts.map((item) => {
        return (
            <li key={item.id}>
                {item.part} : {item.exercise}
            </li>
        )
    })
    return (
        <>
            <ul>{displayParts}</ul>
        </>
    )
}
export default function Course({course}) {
    return(
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Total course={course}/>
        </div>
    )
}