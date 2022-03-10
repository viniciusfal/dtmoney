import Modal from 'react-modal';
import { useState } from 'react';
import {Container, TransactionTypeContainer, RadioBox} from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


interface TransactionsModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewtransactionsModal({isOpen, onRequestClose}: TransactionsModal) {
    const [type, setType] = useState('deposit')

    return (
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        
        <button
            onClick={onRequestClose}
            className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container>
        <h2>Register Transaction</h2>

        <input placeholder='Name'/>
        <input type="number" placeholder='Price'/>

        <TransactionTypeContainer>
            <RadioBox
             onClick={() => setType('deposit')}
             isActive={type === 'deposit'}
             colorActive='green'
            >
                <img src={incomeImg} alt="Income" />
                <span>Income</span>
            </RadioBox>
            
            <RadioBox
             onClick={() => setType('withdraw')}
             isActive={type === 'withdraw'}
             colorActive='red'
            >
                <img src={outcomeImg} alt="Outcome" />
                <span>Outcome</span> 
            </RadioBox>
        </TransactionTypeContainer>

        <input placeholder='Category' />
        <button type="submit">Register</button>
        

        </Container>
        </Modal>
    )
}