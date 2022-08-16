import { Component, OnInit } from '@angular/core';
// import { AuthentificationService } from '../../services/authen/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ShowCritere : boolean = true;
  ShowRegister : boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  addCritere(){
    this.ShowCritere=!this.ShowCritere;
    this.ShowRegister=!this.ShowRegister;
  }
  addConnexion(){
    this.ShowCritere=!this.ShowCritere;
    this.ShowRegister=!this.ShowRegister;
  }

}
