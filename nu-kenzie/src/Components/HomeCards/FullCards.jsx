import Cards from "./Cards/Cards";
import { useEffect, useState } from 'react'

function FullCards({listTransactions, setListTransactions}) {
    
    const [leaches, setLeaches] = useState(listTransactions)

    const [isActive, setIsActive] = useState('todos');

    useEffect(() =>{
            setLeaches(listTransactions)
        },[listTransactions])
        
    function strainer(event) {

        if(event.target.value == 'todos') {
            setLeaches(listTransactions)
        } else {
            const percolate = listTransactions.filter((item) =>
                event.target.value === item.type
            )

            if(percolate.length === 0){
                setLeaches(percolate)
            }else{
                setLeaches(percolate)
            }
        }

        setIsActive(event.target.value);
    }

    return (

        <div className="containerCards">
            
            <div className="containerFilter">
                <h3>Resumo financeiro</h3>
                
                <div className="containerBtnFiltros">
                    <button className="botao" value='todos' onClick={strainer} id={isActive == 'todos' ? 'ativo' : ''}>Todos</button>
                    <button className="botao" value='entrada' onClick={strainer} id={isActive == 'entrada' ? 'ativo' : ''}>Entradas</button>
                    <button className="botao" value='saida' onClick={strainer} id={isActive == 'saida' ? 'ativo' : ''}>Despesas</button>
                </div>                
            </div>

            <Cards listTransactions={leaches || listTransactions} listTransactionsAgain={listTransactions} setListTransactions={setListTransactions}/>        

        </div>

    )

}

export default FullCards