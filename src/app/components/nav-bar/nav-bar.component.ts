import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { UserAvatarComponent } from "../user-avatar/user-avatar.component";
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    SearchBarComponent, 
    UserAvatarComponent,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router) {}

  redirectToHome() {
    this.router.navigate(['home']);
  }
}
