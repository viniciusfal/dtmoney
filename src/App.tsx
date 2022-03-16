import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewtransactionsModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './TransactionsContext';
import {GlobalStyle} from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
    
  function handleOpenModal() {
      setIsOpen(true);
  }

  function handleCloseModal() {
      setIsOpen(false);
  }

  return (
    < TransactionsProvider>
    <Header onHandleOpenModal={handleOpenModal}/>

    <Dashboard/>

    <NewtransactionsModal 
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
    />

    <GlobalStyle/>
    </TransactionsProvider>
  );
}

