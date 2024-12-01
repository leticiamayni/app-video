import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Video {
videoId: any;
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  views: number;
  uploadedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/videos'

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  getVideoById(id: string): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }

  getPopularVideos(): Observable<Video[]> {
    return this.getVideos().pipe(
      map((videos) => videos.sort((a, b) => b.views - a.views).slice(0, 10))
    );
  }

  getRecentVideos(): Observable<Video[]> {
    return this.getVideos().pipe(
      map((videos) =>
        videos
          .sort(
            (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
          )
          .slice(0, 10)
      )
    );
  }

  updateViews(videoId: number, newViews: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${videoId}`, { views: newViews });
  }

}
