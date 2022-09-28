import { ITransactionParams } from './../../interfaces/ITransactionParams';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //receber as propriedades do app component através do decorator input
  @Input() transactions: ITransactionParams[] = [];
  @Input() displayMessage: string = "";

}
