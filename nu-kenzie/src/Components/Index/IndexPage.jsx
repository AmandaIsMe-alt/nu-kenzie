import "./IndexPage.css"

function Index({setHome}) {
    
    return(
        
        <div className="containerIndex">

            <section className="containerText">
                <img src="./Nu Kenzie.png" alt="logo"/>
                <h2>Centralize o controle das suas finanças</h2>
                <h6>de forma rápida e segura</h6>
                <button onClick={() => setHome(false)}>Iniciar</button>
            </section>

            <section className="illustrationimg">

                <img src="illustration.png" alt="IMG Tela Inicial"/>

            </section>

        </div>

    )

}

export default Index