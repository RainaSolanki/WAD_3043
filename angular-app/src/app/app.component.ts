import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: { username: string, password: string }[] = [];
  username = '';
  password = '';
  currentUser: { username: string, password: string } | null = null;
  mode: 'home' | 'register' | 'login' | 'profile' = 'home';

  // Register new user
  register() {
    this.users.push({ username: this.username, password: this.password });
    this.username = '';
    this.password = '';
    alert('Registered successfully!');
    this.mode = 'home';
  }

  // Login and show user details
  login() {
    const found = this.users.find(user => user.username === this.username && user.password === this.password);
    if (found) {
      this.currentUser = found;
      this.mode = 'profile';
    } else {
      alert('Login failed! User not found.');
    }
    this.username = '';
    this.password = '';
  }

  // Show list of all registered users
  showProfile() {
    this.mode = 'profile';
  }

  // Logout
  logout() {
    this.currentUser = null;
    this.mode = 'home';
  }
}
