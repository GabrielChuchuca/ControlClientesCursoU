import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  }

  constructor(private clientesServicio: ClienteServicio, private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.clientes != null){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo!;
      })
    }
    return saldoTotal;
  }

  agregar(clienteForm : NgForm){
    if (!clienteForm.valid) {
      this.flashMessages.show("Por favor llena el formulario correctamente", {
        cssClass: 'alert-danger', timeout: 4000
      })
    }else{

    }

  }

}
