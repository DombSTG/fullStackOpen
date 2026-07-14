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
            <Part name={props.part1.name} num={props.part1.exercises} />
            <Part name={props.part2.name} num={props.part2.exercises} />
            <Part name={props.part3.name} num={props.part3.exercises} />
        </>
    );
};

const Total = (props) => (
    <p>
        Number of exercises{" "}
        {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
);

const App = () => {
    const course = "Desenvolvimento de aplicação Half Stack";
    const part1 = {
        name: "Fundamentos da biblioteca React",
        exercises: 10,
    };
    const part2 = {
        name: "Usando props para passar dados",
        exercises: 7,
    };
    const part3 = {
        name: "Estado de um componente",
        exercises: 14,
    };

    return (
        <div>
            <Header course={course} />
            <Content
                part1={part1}
                part2={part2}
                part3={part3}
            />
            <Total
                part1={part1}
                part2={part2}
                part3={part3}
            />
        </div>
    );
};

export default App;
