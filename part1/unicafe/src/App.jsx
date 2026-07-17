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

const App = () => {
    // salve os cliques de cada botão em seu próprio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => setGood(good + 1);
    const handleNeutral = () => setNeutral(neutral + 1);
    const handleBad = () => setBad(bad + 1);

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
        </div>
    );
};

export default App;
