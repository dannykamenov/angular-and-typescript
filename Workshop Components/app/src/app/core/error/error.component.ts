import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { API_ERROR } from 'src/app/shared/constants';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  apiError$ = this.apiError.asObservable();

  constructor(@Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>, private router: Router) { 
    this.apiError$.pipe(take(1)).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
