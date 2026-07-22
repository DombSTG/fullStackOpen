const Header = ({name}) => {
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

const Content = ({parts}) => {
    
    return (
        <>
            {parts.map((part, indice) => (
                <Part name={part.name} num={part.exercises} key={indice}/>
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

const Course = ({ course }) => {
    console.log(course);

    const part = course.parts;

    return (
        <div>
            <Header name={course.name}/>
            <Content  parts={course.parts}/>
        </div>
    );
};

const App = () => {
    const course = {
        name: "Desenvolvimento de aplicação Half Stack",
        parts: [
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
        ],
    };

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
