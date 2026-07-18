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

const Porcent = ({ posi }) => <p>positive {posi} </p>;

const Statistics = ({ good, neutral, bad, all, pontos}) => {
    const aver = all === 0 ? 0 : pontos / all;

    const porcent = (good / all) * 100;

    const retornPorcentagem = all === 0 ? 0 : porcent;

    return (
    <>
    <Totais texto="good" quant={good} />
    <Totais texto="neutral" quant={neutral} />
    <Totais texto="bad" quant={bad} />
    <Total total={all} />
    <Avg aver={aver} />
    <Porcent posi={retornPorcentagem} />
    </>)
};

const App = () => {
    // salve os cliques de cada botão em seu próprio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);
    const [pontos, setPontos] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
        setTotal(total + 1);
        setPontos(pontos + 1);
    };
    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setTotal(total + 1);
    };
    const handleBad = () => {
        setBad(bad + 1);
        setTotal(total + 1);
        setPontos(pontos - 1);
    };

    return (
        <div>
            <Header />
            <Botao clicar={handleGood} texto="good" />
            <Botao clicar={handleNeutral} texto="neutral" />
            <Botao clicar={handleBad} texto="bad" />
            <h2>statistics</h2>
            <Statistics good={good} neutral={neutral} bad={bad} all={total} pontos={pontos}/>
        </div>
    );
};

export default App;
