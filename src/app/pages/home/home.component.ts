import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, NgForOf } from '@angular/common';
import { Video, VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { UserAvatarComponent } from "../../components/user-avatar/user-avatar.component";
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    VideoCardComponent,
    NgForOf,
    UserAvatarComponent,
    SearchBarComponent,
    NavBarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  videos: Video[] = [];

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }
}
