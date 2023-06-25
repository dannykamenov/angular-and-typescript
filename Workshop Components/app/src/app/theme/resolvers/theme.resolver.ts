import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ITheme } from 'src/app/interfaces/theme';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ThemeResolver implements Resolve<ITheme | null> {
    constructor(private apiService: ApiService, private router: Router) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ITheme | null | Observable<ITheme> | Promise<ITheme> {
        const themeId = route.params['id'];
        if(!themeId) {
            this.router.navigate(['/theme/main']);
            return null;
        }
        return this.apiService.loadTheme(themeId);
    }
  
  
  }