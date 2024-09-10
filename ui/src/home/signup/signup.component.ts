import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { Route } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponseStatus } from '../../model/Response';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: HomeService,
    private snackbar: MatSnackBar,private router: Route) {
    this.signupForm = this.formBuilder.group({
      name: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  onSubmit() {
    if (this.signupForm.valid) {
      this.service.signup(this.signupForm.value).subscribe(response => {
        if(response.status === ResponseStatus.SUCCESS) {
          this.snackbar.open('Signup successful', 'Close', { duration: 2000 });
          this.router.navigate(['/login']);
        } else {
          this.snackbar.open('Signup failed', 'Close', { duration: 2000 });
        }
      });
    }
  }
}
