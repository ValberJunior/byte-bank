import { ITransactionParams } from './../../interfaces/ITransactionParams';
import { Injectable } from '@angular/core';
//Injeção de dependência
@Injectable({
  providedIn: 'root'  //Root significa para enquanto minha app estiver no ar
})
export class TransactionService {

  private transactionList : ITransactionParams[];

  constructor() {
    this.transactionList = [];
   }

   get transactions(){
    return this.transactionList;
   }

   add(transaction : ITransactionParams){
    this.hydrate(transaction);
    this.transactionList.push(transaction);
   }

   private hydrate(transaction : ITransactionParams){
    transaction.data = new Date() ;
   }
}
