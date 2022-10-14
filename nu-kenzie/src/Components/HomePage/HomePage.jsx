
import './HomePage.css'
import Form from '../Form/Form'
import EmptyCards from '../HomeNoCards/EmptyCard'
import FullCards from '../HomeCards/FullCards'
import Money from '../TheMoney/TheMoney'

function HomePage({setHome , listTransactions, setListTransactions}) {

    return (
        
        <div className='HomePage'>
            <section className='header'>
                <div className='containerHeader'>
                    <img src="./Nu Kenziepreto.png" alt="logo"/>
                    <button className='botao' onClick={() => setHome(true)}>Início</button>
                </div>
            </section>

            <section className='GeralContainer'>
                <div className='containerDescription'>
                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                    <Money listTransactions={listTransactions}/>
                </div>

                {listTransactions.length === 0 ? (
                    <EmptyCards/>) : (<FullCards listTransactions={listTransactions} setListTransactions={setListTransactions}/>)}

            </section>
        </div>

    )

}

export default HomePage