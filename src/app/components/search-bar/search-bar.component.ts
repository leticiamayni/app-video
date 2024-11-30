import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { VideoService, Video } from '../../services/video.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() videoSelected = new EventEmitter<Video>();

  searchControl = new FormControl('');
  videos: Video[] = [];
  filteredTitles: string[] = [];

  constructor(
    private videoService: VideoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((videos) => {
      this.videos = videos;
      this.setupAutoComplete();
    });
  }

  setupAutoComplete(): void {
    this.searchControl.valueChanges.subscribe((value: string | null) => {
      if (value) {
        this.filteredTitles = this.videos
        .map((video) => video.title)
        .filter((title) =>
          title.toLowerCase().includes(value.toLowerCase())
        );
      } else {
        this.filteredTitles = [];
      }
    });
  }

  onOptionSelected(event : any): void {
    const selectedTitle = event.option.value;
    const selectedVideo = this.videos.find((video) => video.title === selectedTitle);
    if (selectedVideo) {
      this.videoSelected.emit(selectedVideo);
      this.router.navigate(['video/', selectedVideo.id]);
      console.log(selectedVideo.id)
    }
  }
}