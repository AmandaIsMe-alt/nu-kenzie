import './TheMoney.css'

function Money({listTransactions}) {

    const total = listTransactions.reduce((valueNow, acc) => {
        if(acc.type === 'entrada'){
            return parseInt(acc.value) + valueNow
        }else{
            return valueNow - parseInt(acc.value)
        }

    },0)

    return(

        <div className="containerMoney">
            <h3>
                Valor total:
                <p>O valor se refere ao saldo</p>
            </h3> <p>R$ {total}</p>
        </div>
    )
}

export default Money

