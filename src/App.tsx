import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root'); //questão de acessibilidade onde esconde a div root quando o modal é acionado

export function App() {
  const [isNewTransactionModalOPen, setIsNewTransactionModalOPen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOPen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOPen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionModalOPen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}