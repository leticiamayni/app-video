import { Component } from '@angular/core';
import { UserAvatarComponent } from "../../components/user-avatar/user-avatar.component";
import { AuthService, User } from '@auth0/auth0-angular';
import { VideoCardComponent } from "../../components/video-card/video-card.component";
import { Video, VideoService } from '../../services/video.service';
import { NgForOf } from '@angular/common';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    UserAvatarComponent,
    VideoCardComponent,
    NgForOf,
    NavBarComponent
],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  profile?: User | undefined | null;
  videos: Video[] = [];
  popularVideos: Video[] = [];

  constructor(
    public auth: AuthService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {
      this.profile = profile;
    });

    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });

    this.videoService.getPopularVideos().subscribe((videos) => {
      this.popularVideos = videos;
    });
  }
}
