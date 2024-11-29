import { Component, Input, Inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { NgIf, DOCUMENT } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [ 
    NgIf,
    MatMenuModule
  ],
  template: `
  <div class="avatar-container" 
  [matMenuTriggerFor]="menu" 
  *ngIf="showMenu">
      <img 
        [src]="profile?.picture" 
        [style.width]="size" 
        [style.height]="size" 
        alt="profile?.name"
      />
    </div>

    <img 
      *ngIf="!showMenu" 
      [src]="profile?.picture" 
      [style.width]="size" 
      [style.height]="size" 
      alt="profile?.name"
    />

    <mat-menu #menu="matMenu">
      <button mat-menu-item>Ver perfil</button>
      <button mat-menu-item (click)="logout()">Logout</button>
    </mat-menu>
`,
  styleUrl: './user-avatar.component.scss'
})
export class UserAvatarComponent {
  @Input() size: string = '40px';
  @Input() showMenu: boolean = true;

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  profile?: User | undefined | null;

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    })
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: this.doc.location.origin } });
  }
}