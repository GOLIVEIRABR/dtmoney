import React, {useContext} from 'react';
import incomeImg from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary(){
  const data = useContext(TransactionsContext); //pega o valor do contexto de Transactions

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outCome} alt="" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}