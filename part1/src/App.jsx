import useState from 'react';

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  let name = course[0].name;
  let name2 = course[1].name;
  let totalExercise = course[0].parts.reduce((s, p) => {
    console.log('what is happening', s, p)
    return s + p.exercises
  }, 0)
  let totalExercise2 = course[1].parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)
  return (
    <>
      <div>
        <h1>{name}</h1>
        {course[0].parts.map((parts) => {
          return <li key={parts.id}>{parts.name} {parts.exercises}</li>
        })}
        <p><strong>Total of {totalExercise} exercise exist.</strong></p>
      </div>
      <div>
        <h1>{name2}</h1>
        {course[1].parts.map((parts) => {
          return <li key={parts.id}> {parts.name} {parts.exercises}</li>
        })}
        <p><strong>Total of {totalExercise2} exercise exist.</strong></p>
      </div>
    </>
  )
}

export default App