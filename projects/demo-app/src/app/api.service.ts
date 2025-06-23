import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

 getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${this.BASE_URL}/postsasfasfsafasfas`)
  }

  getPostById(id: number): Observable<Post> {
    return this.http
      .get<Post>(`${this.BASE_URL}/posts/${id};1213`)
  }
}
