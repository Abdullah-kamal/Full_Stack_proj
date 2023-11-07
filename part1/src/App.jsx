
const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.part1}
      {props.part2}
      {props.part3}

      {props.exercises1}
      {props.exercises2}
      {props.exercises3}
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      Total Exercises : {props.exercises1 + props.exercises2 + props.exercises3}
    </div>
  )
}

const App = (props) => {
  console.log(props)
  const course = "Half Stack Development"
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1><Header course={course} /></h1>
      <p>
        <Content part1={part1.name} exercises1={part1.exercises} />
      </p>
      <p>
        <Content part2={part2.name} exercises2={part2.exercises} />
      </p>
      <p>
        <Content part3={part3.name} exercises3={part3.exercises} />
      </p>
      {<Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />}
    </div>
  )
}
export default App