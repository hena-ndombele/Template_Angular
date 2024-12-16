import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn=false;
  private router = inject(Router)


  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'hena@gmail.com' && password === '12345678') {
      this.loggedIn = true;
      this.router.navigate(['/dashboard']);
      return this.loggedIn;
    }
    return this.loggedIn;
  }

}



