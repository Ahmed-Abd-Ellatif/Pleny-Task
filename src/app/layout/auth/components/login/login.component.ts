import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginObj } from '../../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // ------------------------------
  // CONSTRUCTOR
  // ------------------------------
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}
  // ------------------------------
  // FORM
  // ------------------------------
  form = this._fb.group({
    username: ['carterb'],
    email: ['carter.baker@x.dummyjson.com'],
    password: ['carterbpass'],
  });
  get formControl() {
    return this.form.controls;
  }
  // ------------------------------
  // SUBMIT
  // ------------------------------
  submit() {
    const obj: LoginObj = {
      username: this.form.value.username!,
      password: this.form.value.password!,
    };
    this._authService.login(obj).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('pleny-token', res.token);
        localStorage.setItem('userId', JSON.stringify(res.id));
        this._router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }
}
