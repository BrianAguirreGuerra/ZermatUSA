import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: FormControl = new FormControl(''); 

  constructor(private clienteService: ClienteService) { }

  onSubmit() {
    const emailValue = this.email.value; 
    this.clienteService.obteneterCliente(emailValue)
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
        console.error(error);
      });
  }
}
