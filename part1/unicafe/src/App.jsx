import { useState } from "react";

const Header = () => <h1>give feedback</h1>;

const Botao = ({ clicar, texto }) => {
    return <button onClick={clicar}>{texto}</button>;
};

const Totais = ({ texto, quant }) => {
    return (
        <div>
            <p>
                {texto} {quant}
            </p>
        </div>
    );
};

const Total = ({ total }) => <p>all {total}</p>;

const Avg = ({ aver }) => {
    return <p>average {aver}</p>;
};

const Porcent = ({ posi }) => <p>positive {posi} </p>

const App = () => {
    // salve os cliques de cada botão em seu próprio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [click, setClick] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
        setTotal(total + 1);
        setClick(click + 1);
    };
    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setTotal(total + 1);
    };
    const handleBad = () => {
        setBad(bad + 1);
        setTotal(total + 1);
        setClick(click - 1);
    };

    const aver = total === 0 ? 0 : click / total;

    const porcent = (good / total) * 100
    
    const retornPorcentagem = total === 0 ? 0 : porcent
    


    return (
        <div>
            <Header />
            <Botao clicar={handleGood} texto="good" />
            <Botao clicar={handleNeutral} texto="neutral" />
            <Botao clicar={handleBad} texto="bad" />
            <h2>statistics</h2>
            <Totais texto="good" quant={good} />
            <Totais texto="neutral" quant={neutral} />
            <Totais texto="bad" quant={bad} />
            <Total total={total} />
            <Avg aver={aver} />
            <Porcent posi={retornPorcentagem} />
        </div>
    );
};

export default App;
