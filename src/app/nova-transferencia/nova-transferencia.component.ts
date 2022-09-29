import { ITransactionParams } from './../../interfaces/ITransactionParams';
import { TransactionService } from './../services/transaction.service';
import { Component, EventEmitter, Output } from "@angular/core";

//Decorator
@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {
  //metadado
  @Output() whenTransferring = new EventEmitter<any>();
  @Output() transferError = new EventEmitter<string>();

  //propriedades
  value: number = 0;
  destination: number = 0;

  constructor(private service : TransactionService){
  }


  //metodos
  transferValue(){
      if(this.itsValid()){
        const emitValue: ITransactionParams = {
          value: this.value, destination: this.destination
         };
      //  this.whenTransferring.emit(emitValue);
      this.service.add(emitValue).subscribe(result => {
        console.log(result);
        this.clearFields();  //sempre que for manipular algo na tela, deixar no met. subscribe
      },
        error => console.log(error)  //tratamento de erro
       )
      }
  };

  clearFields(){
    this.value = 0;
    this.destination = 0;
    this.transferError.emit("");
  }

  private itsValid(){
    const valid = this.value > 0 && this.destination !== 0;
    if (!valid) return this.transferError.emit("Insira um valor e um destino válido !");
    return valid;
  }
}
