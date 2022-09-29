import { ITransactionParams } from './../../interfaces/ITransactionParams';
import { Component, Input, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  constructor(private service: TransactionService) { }

  //receber as propriedades do app component através do decorator input
  transactions: ITransactionParams[] = [];
  @Input() displayMessage: string = "";

  ngOnInit(){
    this.service.AllTransactions().
    subscribe((transactions: ITransactionParams[]) =>{
      console.table(transactions);
      this.transactions = transactions;
    });
  }

}
