import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    medium: string;
    large: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  phone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  fetchRandomUser(): void {
    this.loading = true;
    this.error = null;
    
    this.userService.getRandomUser().subscribe({
      next: (data: any) => {
        this.user = data.results[0];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
        this.error = 'Failed to fetch user. Please try again.';
        this.loading = false;
      }
    });
  }
}
