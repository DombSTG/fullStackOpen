const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                Olá {props.nome}, voce tem {props.idade} anos
            </p>
        </div>
    )
}


const App = () => {
    const amigos = ['Thalles', 'Nata']
    const nome = 'Vinicius'
    const idade = 10
    return (
        <>
        <p>{amigos}</p>
    <h1>
        Olá a todos!
    </h1>
    <Hello nome="Gabrielle" idade={26+10} />
    <Hello nome={nome} idade={idade} />
        </>
    

)}

export default App