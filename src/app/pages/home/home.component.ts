import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('mangaGridWrapper') mangaGridWrapper!: ElementRef<HTMLDivElement>;

  mangas = [
    { titulo: 'Naruto', imagem: 'naruto-cover.jpeg' },
    { titulo: 'One Piece', imagem: 'one-piece-cover.jpeg' },
    { titulo: 'Bleach', imagem: 'bleach-cover.jpeg' },
    { titulo: 'Jujutsu Kaisen', imagem: 'jujutsu-kaisen-cover.jpeg' },
    { titulo: 'Attack on Titan', imagem: 'aot-cover.jpeg' },
    { titulo: 'Death Note', imagem: 'death-note-cover.jpeg' }
  ];
  
  scrollAmount: number = 300;

  scrollLeft(): void {
    if (this.mangaGridWrapper) {
      this.mangaGridWrapper.nativeElement.scrollBy({
        left: -this.scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  scrollRight(): void {
    if (this.mangaGridWrapper) {
      this.mangaGridWrapper.nativeElement.scrollBy({
        left: this.scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}
