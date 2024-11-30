import { Component, Input } from '@angular/core';
import { Video } from '../../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() video!: Video;

  constructor(private router: Router) {}

  redirectToVideo(): void {
    this.router.navigate(['/video', this.video.id]);
  }
}
