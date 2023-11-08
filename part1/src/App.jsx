
const Header = (props) => {
  return (
    <p>{props.course}</p>
  )
}

const Content = (props) => {
  return (
    <p>{props.part1}</p>
  )
}

const Total = (props) => {
  return (
    <p>
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>)
}
// our app api
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  let part1 = parts[0];
  let part2 = parts[1];
  let part3 = parts[2];

  console.log(part1.exercises + part2.exercises + part3.exercises);
  console.log(part1)

  return (
    <div>
      <h1><Header course={course} /></h1>
      <div>
        <p>
          <Content part1={part1.name} exercises1={part1.exercises} />
        </p>
        <p>
          <Content part2={part2.name} exercises2={part2.exercises} />
        </p>
        <p>
          <Content part3={part3.name} exercises3={part3.exercises} />
        </p>
        <p>
          {<Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />}
        </p>
      </div>
    </div>
  )
}

export default App