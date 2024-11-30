import { Component } from '@angular/core';
import { UserAvatarComponent } from "../../components/user-avatar/user-avatar.component";
import { AuthService, User } from '@auth0/auth0-angular';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [UserAvatarComponent, SearchBarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile?: User | undefined | null;

  constructor(
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    })
  }
}
