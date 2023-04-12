import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  formReg: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){
    this.authService.login(this.formReg.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error))
  }

  navigateToWelcome(): void {
    this.router.navigate(['/app-bienvenido']);
  }
}
