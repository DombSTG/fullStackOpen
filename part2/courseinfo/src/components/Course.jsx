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
            {parts.map((part) => (
                <Part name={part.name} num={part.exercises} key={part.id} />
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

export default Course