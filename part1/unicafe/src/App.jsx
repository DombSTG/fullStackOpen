import { useState } from "react";

const Header = () => <h1>give feedback</h1>;

const Botao = ({ clicar, texto }) => {
    return <button onClick={clicar}>{texto}</button>;
};

const StatisticsLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
);

const Statistics = ({ good, neutral, bad, pontos }) => {
    const total = good + neutral + bad;
    const aver = total === 0 ? 0 : pontos / total;

    const porcent = (good / total) * 100;

    const retornPorcentagem = total === 0 ? 0 : porcent;

    if (total === 0) {
        return <div>Clique em um dos botões para usar a aplicação!</div>;
    }
    return (
        <div>
            <table>
                <tbody>
                    <StatisticsLine text="good" value={good} />
                    <StatisticsLine text="neutral" value={neutral} />
                    <StatisticsLine text="bad" value={bad} />
                    <StatisticsLine text="all" value={total} />
                    <StatisticsLine text="average" value={aver} />
                    <StatisticsLine
                        text="positive"
                        value={retornPorcentagem + " %"}
                    />
                </tbody>
            </table>
        </div>
    );
};

const App = () => {
    // salve os cliques de cada botão em seu próprio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [pontos, setPontos] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
        setPontos(pontos + 1);
    };
    const handleNeutral = () => {
        setNeutral(neutral + 1);
    };
    const handleBad = () => {
        setBad(bad + 1);
        setPontos(pontos - 1);
    };

    return (
        <div>
            <Header />
            <Botao clicar={handleGood} texto="good" />
            <Botao clicar={handleNeutral} texto="neutral" />
            <Botao clicar={handleBad} texto="bad" />
            <h2>statistics</h2>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                pontos={pontos}
            />
        </div>
    );
};

export default App;
