const Header = (props) =>{ 

return (<h1>{props.course.name}</h1>);}

const Part = (props) => {
    console.log(props)

    return (
        <>
            <p>
                {props.name} {props.num}
            </p>
        </>
    );
};

const Content = (props) => {
    console.log(props);

    return (
        <>
            {props.course.parts.map((part) => (
                <Part name={part.name} num={part.exercises} />
            ))}
        </>
    );
};

const Total = (props) => (
    <p>
        Number of exercises{" "}
        {props.course.parts.reduce((sum, obj) => sum + obj.exercises, 0)}
    </p>
);

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
};

export default App;
