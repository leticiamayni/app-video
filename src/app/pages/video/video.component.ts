import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video, VideoService } from '../../services/video.service';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { formatViews } from '../../utils/format-views';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    NgIf,
    NavBarComponent
],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  video? : Video;
  safeUrl?: SafeResourceUrl;
  formatViews = formatViews;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const videoId = params.get('id');
      if (videoId) {
        this.loadVideo(videoId);
      }
    });
  }

  loadVideo(id: string): void {
    this.videoService.getVideoById(id).subscribe((video) => {
      this.video = video;

      const videoIdMatch = video.url.match(/v=([^&]+)/);
      const embedUrl = videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : video.url;

      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      console.log(embedUrl);
    });
  }

  incrementViews(video: any): void {
    video.views++;
    this.videoService.updateViews(video.id, video.views).subscribe();
  }
}
