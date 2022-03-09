import {Container} from './styles';
import {useEffect} from 'react';
import { api } from '../../services/api';

export function TransactionsTable() {
    useEffect(()=> {
        api.get('transactions')
        .then((response) => console.log(response.data)); 
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>Site Developer</td>
                    <td className='in-money'>12.000,00</td>
                    <td>Sale</td>
                    <td>05/03/2022</td>
                    </tr>
                </tbody>
            
                <tbody>
                    <tr>
                    <td>Barber</td>
                    <td className='out-money'>- 100,00</td>
                    <td>Appearance</td>
                    <td>04/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}