import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelancer of website",
          amount: 7000,
          category: "developer",
          type: "deposit",
          createdAt: new Date('2022-05-03')
        },
        {
          id:2, 
          title: "Fat Burguer",
          amount: 60.00,
          category: "Food",
          type: "withdraw",
          createdAt: new Date('2022-05-04')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api' 
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
       
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    }) 
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

