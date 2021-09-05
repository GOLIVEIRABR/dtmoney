import {useContext} from 'react';
import incomeImg from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary(){
  const {transactions} = useContext(TransactionsContext); //pega o valor do contexto de Transactions

  const summary = transactions.reduce((acc, transaction)=>{
    if(transaction.type ==='deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  function formatNumber(number:number){
    const formatedNumber = new Intl.NumberFormat('pt-BR', {
      style:'currency',
      currency: 'BRL'
    }).format(number)
    return formatedNumber;
  }

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>{formatNumber(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outCome} alt="" />
        </header>
        <strong>- {formatNumber(summary.withdraws)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>{formatNumber(summary.total)}</strong>
      </div>
    </Container>
  )
}