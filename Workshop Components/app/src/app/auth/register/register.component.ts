import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: [],
    email: [],
    tel: [],
    pass: this.fb.group({
      password: [],
      rePassword: []
    })
  });

  constructor(private fb: FormBuilder) {}
}
