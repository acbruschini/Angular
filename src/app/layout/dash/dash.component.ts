import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss',
})
export class DashComponent {
  showFiller:boolean = false;
  constructor(private authService: AuthService){

  }

  logout(){
    this.authService.logout()
  }
}
