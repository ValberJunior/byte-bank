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
  transactions : ITransactionParams[] = [];
  displayMessage : string =  ""

  //metodos
  transfer($event:any) {
    console.log($event);
    const transaction = {...$event, data: new Date()};
    this.transactions.push(transaction);
  }

  displayStatus($event: string){
    this.displayMessage = $event;
  }
}
