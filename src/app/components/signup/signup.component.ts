import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

//if the data is valid return null else return an object
function symbolValidator(control) {
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if (control.value.indexOf('@') > -1) {
    return null;
  } else {
    return { symbol: true };
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.builder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: [
          '',
          [Validators.required, symbolValidator, Validators.minLength(5)],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.confirmPasswordMatch('password', 'confirmPassword'),
      }
    );
  }

  confirmPasswordMatch(control1: string, control2: string) {
    return (formGroup: FormGroup) => {
      const pwd = formGroup.controls[control1];
      const cpwd = formGroup.controls[control2];

      if (pwd.value !== cpwd.value) {
        cpwd.setErrors({ confirmPassword: true });
      } else {
        cpwd.setErrors(null);
      }
    };
  }

  signup() {
    // console.log(this.signupForm.value);
    this._auth.signupUser(this.signupForm.value).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/products']);
      },
      (err) => console.log(err)
    );
  }
}
