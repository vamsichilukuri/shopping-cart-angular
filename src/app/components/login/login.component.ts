import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  login() {
    // console.log(this.model);
    if (this.model.username === 'admin' && this.model.password === 'india@') {
      console.log('success');
      this._router.navigate(['/admin']);
    } else {
      this._auth.loginUser(this.model).subscribe(
        (res) => {
          localStorage.setItem('token', res.token);
          this._router.navigate(['/products']);
        },
        (err) => console.log(err)
      );
    }
  }
}
