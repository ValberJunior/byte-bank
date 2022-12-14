import { ITransactionParams } from './../../interfaces/ITransactionParams';
import { TransactionService } from './../services/transaction.service';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from '@angular/router';

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
  @Input() displayMessage: string = "";

  //propriedades
  value: number = 0;
  destination: number = 0;

  //sempre injetar no constructor da classe, atributos que irei utilizar
  constructor(private service : TransactionService, private router : Router){
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
        // this.router.navigate(['extrato', ...])  <-- antes utlizava assim, com a rota e mais um parametro
        this.router.navigateByUrl('extrato');  //assim é mais utilizado
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
    if (!valid) alert("Insira um valor e um destino válido !");
    return valid;
  }
}
