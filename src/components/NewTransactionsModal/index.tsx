import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../TransactionsContext';
import {Container, TransactionTypeContainer, RadioBox} from './styles';


interface TransactionsModal {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewtransactionsModal({isOpen, onRequestClose}: TransactionsModal) {
    const {createTransaction} = useContext(TransactionsContext);


    const [title, setTitle] = useState('');
    const [amount,setAmount] = useState(0);
    const [category,setCategory] = useState('')
    const [type, setType] = useState('deposit')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            type,
            category,
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();

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
         value={amount}
         onChange={event => setAmount(Number(event.target.value))} 
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