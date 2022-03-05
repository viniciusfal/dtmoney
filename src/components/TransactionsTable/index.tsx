import {Container} from './styles';

export function TransactionsTable() {
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
                    <td className='out-money'>- 100</td>
                    <td>Appearance</td>
                    <td>04/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}