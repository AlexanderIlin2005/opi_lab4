import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // если требуется для signOut

@Component({
  selector: 'app-logged-in-card',
  templateUrl: './logged-in-card.component.html',
  styleUrls: ['./logged-in-card.component.scss']
})
export class LoggedInCardComponent {
  constructor(public authService: AuthService) {}

  openGithub() {
    window.open('https://github.com/AlexanderIlin2005/web-lab4', '_blank');
  }
}
