const Header = ({ name }) => {
    return <h1>{name}</h1>;
};

const Part = (props) => {
    return (
        <>
            <p>
                {props.name} {props.num}
            </p>
        </>
    );
};

const Content = ({ parts }) => {
    return (
        <>
            {parts.map((part, indice) => (
                <Part name={part.name} num={part.exercises} key={indice} />
            ))}
        </>
    );
};

const Total = ({ parts }) => (
    <b>
        <p>
            Total of exercises{" "}
            {parts.reduce((sum, obj) => sum + obj.exercises, 0)}
        </p>
    </b>
);

// Renderiza todos os componentes
const Course = ({ course }) => {
    console.log(course);

    return (
        <div>
            {course.map((prop) => (
                <div key={prop.id}>
                    <Header name={prop.name} />
                    <Content parts={prop.parts} />
                    <Total parts={prop.parts} />
                </div>
            ))}
        </div>
    );
};

const App = () => {
    const course = [
        {
            name: "Half Stack application development",
            id: 1,
            parts: [
                {
                    name: "Fundamentals of React",
                    exercises: 10,
                    id: 1,
                },
                {
                    name: "Using props to pass data",
                    exercises: 7,
                    id: 2,
                },
                {
                    name: "State of a component",
                    exercises: 14,
                    id: 3,
                },
                {
                    name: "Redux",
                    exercises: 11,
                    id: 4,
                },
            ],
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1,
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];

    return (
        <div>
            {/*             <Header course={course} />
            <Content course={course} />
            <Total course={course} /> */}
            <Course course={course} />
        </div>
    );
};

export default App;
