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
  transaction : ITransactionParams = {
    value: 0,
    destination: 0
  };
  displayMessage : string =  ""

  //metodos
  transfer($event:any) {
    console.log($event);
    this.transaction = $event;
  }

  displayStatus($event: string){
    this.displayMessage = $event;
  }
}
