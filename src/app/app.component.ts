import { TransactionService } from './services/transaction.service';
import { ITransactionParams } from './../interfaces/ITransactionParams';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //propriedades
  title = 'byte-bank';
  displayMessage : string =  ""

  constructor(private service: TransactionService){};

  //metodos
  transfer($event:any) {
    this.service.add($event);
  }

  displayStatus($event: string){
    this.displayMessage = $event;
  }
}
