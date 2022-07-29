import { useEffect, useState } from "react";

const Anecdotes = ( { anecdotes, points }) => {
    return (
        <div>
            <p>{anecdotes}</p>
            <p>has {points} votes</p>
        </div>
    )
}
const App = () => {
    const anecdotes = [
        "If it hurts, do it more often",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
    ]
    const [selected, setSelected] = useState(0)
    const [points, updatePoints] = useState(new Array(anecdotes.length).fill(0))
    const [maxPoint, updateMaxPoint] = useState(-1)

    const randomAnecdote = () => {
        const random = Math.floor(Math.random() * Math.floor(anecdotes.length))
        setSelected(random);
    }

    const voteAnecdotes = () => {
        let copy = [...points]
        copy[selected] += 1
        updatePoints(copy)
    }

    const maxPointAnecdotes = () => {
        let copy = [...points]
        let max = Math.max(...copy)
        updateMaxPoint(max)
    }

    useEffect(() => {
        maxPointAnecdotes()
    })

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdotes anecdotes={anecdotes[selected]} points={points[selected]}/>
            <button onClick={voteAnecdotes}>vote</button>
            <button onClick={randomAnecdote}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <Anecdotes anecdotes={anecdotes[points.indexOf(maxPoint)]} points={maxPoint}/>
        </div>
    )
}

export default App;