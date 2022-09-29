import { ITransactionParams } from './../../interfaces/ITransactionParams';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Injeção de dependência
@Injectable({
  providedIn: 'root'  //Root significa para enquanto minha app estiver no ar
})
export class TransactionService {

  private transactionList : ITransactionParams[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transactionList = [];
   }

   get transactions(){
    return this.transactionList;
   }

   AllTransactions() : Observable<ITransactionParams[]>{
    return this.httpClient.get<ITransactionParams[]>(this.url);
   }

   add(transaction : ITransactionParams) : Observable<ITransactionParams>{
    this.hydrate(transaction);
    return this.httpClient.post<ITransactionParams>(this.url,transaction);
     }

   private hydrate(transaction : ITransactionParams){
    transaction.data = new Date() ;
   }
}
