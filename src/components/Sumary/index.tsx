import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import {Container} from './styles';


export function Sumary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income Image" />
                </header>
                <strong>$ 17.400,00</strong>
            </div>
    
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Income Image" />
                </header>
                <strong>$ 1.039,00</strong>
            </div>
    
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Income Image" />
                </header>
                <strong>$ 16.361,00</strong>
            </div>
        </Container>
    )
}