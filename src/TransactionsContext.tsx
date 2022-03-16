import {createContext, useContext, useEffect, useState,  ReactNode} from 'react';
import { api } from './services/api';

export const TransactionsContext = createContext<Transactions[]>([]);

interface Transactions {
    id: number
    title: string
    amount: number
    category: string
    type: string
    createdAt: string
}

interface TransactionsProviderProps {
    children: ReactNode
}

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const data = useContext(TransactionsContext);

    const [transactions, setTransactions] = useState<Transactions[]>([]);
    
    useEffect(()=> {
        api.get('transactions')
        .then((response) => setTransactions(response.data.transactions)); 
        }, []);

    return(
            <TransactionsContext.Provider value={transactions}>
                {children}
            </TransactionsContext.Provider>
        )
    
    }