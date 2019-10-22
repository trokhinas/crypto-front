import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {GlobalDataService} from '../service/global-data.service';

@Injectable({
    providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
    
    constructor(
        private global: GlobalDataService,
        private router: Router) {}
    
    canActivate(next : ActivatedRouteSnapshot,
                state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
        
        if (this.global.isTeacher()) {
            return true;
        }
        
        this.router.navigate(['/main']);
        return false;
    }
}
