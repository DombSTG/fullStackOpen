const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => {
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
            {props.parts.map((part) => (
                <Part name={part.name} num={part.exercises} />
            ))}
        </>
    );
};

const Total = (props) => (
    <p>
        Number of exercises{" "}
        {props.parts.reduce((sum, obj) => sum + obj.exercises, 0)}
    </p>
);

const App = () => {
    const course = "Desenvolvimento de aplicação Half Stack";
    const parts = [
        {
            name: "Fundamentos da biblioteca React",
            exercises: 10,
        },
        {
            name: "Usando props para passar dados",
            exercises: 7,
        },
        {
            name: "Estado de um componente",
            exercises: 14,
        },
    ];

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};

export default App;
