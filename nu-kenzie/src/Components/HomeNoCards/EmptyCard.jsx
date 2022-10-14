import SemCard from "./SemCard/NoCard"
import './EmptyCard.css'

function EmptyCards(props) {
    
    return(

        <div className="containerCards">
            
            <div className="filtros">
                <h3>Resumo financeiro</h3>            
            </div>

            <h2>Você ainda não possui nenhum lançamento</h2>
            <div className="NoCard">
                <SemCard/>
                <SemCard/>
                <SemCard/>
            </div>

        </div>
    )
    
}

export default EmptyCards