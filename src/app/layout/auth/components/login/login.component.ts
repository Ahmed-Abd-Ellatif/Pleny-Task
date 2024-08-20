import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginObj } from '../../models/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _fb: FormBuilder, private _authService: AuthService) {}

  form = this._fb.group({
    username: ['emilys'],
    email: ['emily.johnson@x.dummyjson.com'],
    password: ['emilyspass'],
    // expiresInMins: [30],
  });
  get formControl() {
    return this.form.controls;
  }

  submit() {
    const obj: LoginObj = {
      username: this.form.value.username!,
      password: this.form.value.password!,
    };
    this._authService.login(obj).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('pleny-token', res.token);
      },
      error: (err) => {
        console.log(err);
        alert(err.error.message);
      },
    });
  }
}
