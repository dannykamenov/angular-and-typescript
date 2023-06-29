import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;

  

  // to access form we use @ViewChild and the # sign is used to get the reference of the form

  constructor(private activatedRoute: ActivatedRoute ,private router: Router, private authService: AuthService) {
  }

  loginHandler(form: NgForm): void {
    // console.log(this.files.nativeElement.files);
    if (form.invalid) { return; }
    const { email, password } = form.value;
    this.authService.login(email!, password!)
      .subscribe(user => {
        this.authService.user = user; 
        this.router.navigate(['/theme/list']);
      });

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';

    this.router.navigate([returnUrl]);
  }
  // loginHandler uses the ActivatedRoute service to get the returnUrl query parameter and if it is not available, it uses the root path. Then it navigates to the returnUrl.
  // Upon login user will be redirected to his original Url
}
