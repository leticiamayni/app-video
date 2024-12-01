import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT, NgForOf } from '@angular/common';
import { Video, VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../../components/video-card/video-card.component';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    VideoCardComponent,
    NgForOf,
    NavBarComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  videos: Video[] = [];
  popularVideos: Video[] = [];
  recentVideos: Video[] = [];

  constructor(public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });

    this.videoService.getPopularVideos().subscribe((videos) => {
      this.popularVideos = videos;
    });

    this.videoService.getRecentVideos().subscribe((videos) => {
      this.recentVideos = videos;
    });
  }
}
