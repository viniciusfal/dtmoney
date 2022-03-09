import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer} from'miragejs';

createServer({
  routes(){
    this.namespace = 'api' // Todas as chamadas a api que irei fazer estarão apartir de /api/

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: '673',
          type: 'deposit',
          category: 'food',
          created: new Date(),
        },
      ]
    }) // Quando tiver uma busca na api/transactions eu retorno os dados de uma transação ficticia
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

