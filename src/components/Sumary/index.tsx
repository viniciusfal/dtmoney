import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import {Container} from './styles';


export function Sumary(){
    const {transactions} = useContext(TransactionsContext)

    const sumary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposit += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraw += transaction.amount
            acc.total -= transaction.amount
        }
        return acc;

    },{
        deposit: 0,
        withdraw:0,
        total: 0,
    })
   
    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income Image" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                             }).format(sumary.deposit)
                    }
                </strong>
            </div>
    
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Income Image" />
                </header>
                <strong>
                    -{
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                             }).format(sumary.withdraw)
                    }
                </strong>
            </div>
    
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Income Image" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                             }).format(sumary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}