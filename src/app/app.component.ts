import { Component } from '@angular/core';
import { AuthService } from './services/auth-service';
import { UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-adoption';

  constructor(private readonly authService: AuthService, private readonly userService: UserService) { 
    
  }

  ngOnInit(){
  }
}

