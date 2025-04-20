import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page-layout',
  templateUrl: './first-page-layout.component.html',
  styleUrls: ['./first-page-layout.component.css']
})
export class FirstPageLayoutComponent implements OnInit {
  isDarkMode = false;

  mangas = [
    { titulo: 'Naruto', imagem: 'assets/naruto.jpg' },
    { titulo: 'One Piece', imagem: 'assets/onepiece.jpg' },
    { titulo: 'Bleach', imagem: 'assets/bleach.jpg' },
    { titulo: 'Jujutsu Kaisen', imagem: 'assets/jujutsu.jpg' },
    { titulo: 'Attack on Titan', imagem: 'assets/aot.jpg' },
    { titulo: 'Death Note', imagem: 'assets/deathnote.jpg' }
  ];

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
