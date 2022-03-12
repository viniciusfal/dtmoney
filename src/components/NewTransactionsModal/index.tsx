import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import {Container, TransactionTypeContainer, RadioBox} from './styles';


interface TransactionsModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewtransactionsModal({isOpen, onRequestClose}: TransactionsModal) {
    const [type, setType] = useState('deposit')
    
    const [title, setTitle] = useState('');
    const [value,setValue] = useState(0);
    const [category,setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,
            value,
            category,   
            type
        })

        api.post('/transactions');

    }

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

        <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register Transaction</h2>

        <input 
         placeholder='Title'
         value={title}
         onChange={event => setTitle(event.target.value)}
        />

        <input 
         type="number" 
         placeholder='Value'
         value={value}
         onChange={event => setValue(Number(event.target.value))} 
        />

        <TransactionTypeContainer >
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

        <input 
         placeholder='Category'
         value={category}
         onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Register</button>
        

        </Container>
        </Modal>
    )
}