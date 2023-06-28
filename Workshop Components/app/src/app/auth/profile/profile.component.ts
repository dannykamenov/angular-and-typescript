import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  get user() {
    const {username, email, tel: telephone } = this.authService.user!;
    const [ext, ...tel] = telephone.split(' ');
    return {
      username,
      email,
      ext,
      tel,
    }
  }

form = this.fb.group({
  username: ['', [Validators.required, Validators.minLength(5)]],
  email: ['', [Validators.required, appEmailValidator(appEmailDomains)]],
  ext: ['00359'],
  tel: [],
});

  constructor(private fb: FormBuilder, private authService: AuthService) { }
}
