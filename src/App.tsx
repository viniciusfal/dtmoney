import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import {GlobalStyle} from './styles/global';
import { NewtransactionsModal } from './components/NewTransactionsModal';

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
    <>
    <Header onHandleOpenModal={handleOpenModal}/>
    <Dashboard/>
    <NewtransactionsModal 
    isOpen={modalIsOpen}
    onRequestClose={handleCloseModal}
    />
    <GlobalStyle/>
    </>
  );
}

