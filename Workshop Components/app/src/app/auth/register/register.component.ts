import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { matchPasswordGroup, appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
    ext: ['00359'],
    tel: [],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [matchPasswordGroup('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  registerHandler(): void {
    if(this.form.invalid) {
      return;
    }
    const {username, email, pass: {password, rePassword} = {}, tel} = this.form.value;
    this.authService.register(username!, email!, password!, rePassword!, tel || undefined)
    .subscribe(user => {
      /* this.authService.user = user; */
      this.router.navigate(['/auth/login']);
    })
  }
}
