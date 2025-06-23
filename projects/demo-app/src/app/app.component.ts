import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService, Post } from './api.service';
import { EMPTY, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  title = 'demo-app';
  posts: Post[] = [];
  post!: Post;

  constructor(private postsService: ApiService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => {
        this.posts = []
        return EMPTY;
      },
    });
  }

  getPostById() {
    this.postsService.getPostById(3).subscribe((res) => {
      this.post = res;
      this.posts = [];
    });
  }

  crash(): void {
    throw new Error('Erro simulado para o ErrorHandler');
  }
}
