import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BannerCarouselComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  @ViewChild('mangaGridWrapper') mangaGridWrapper!: ElementRef<HTMLDivElement>;

    destaques = [
    {
      titulo: 'Jujutsu Kaisen',
      descricao: 'Em um mundo onde maldições ameaçam a humanidade, Itadori luta para proteger seus amigos.',
      imagem: 'jujutsu-banner.jpg'
    },
    {
      titulo: 'Naruto',
      descricao: 'A jornada de um jovem ninja para se tornar Hokage.',
      imagem: 'naruto-banner.jpg'
    }
  ];

  mangas = [
    { titulo: 'Naruto', imagem: 'naruto-cover.jpeg' },
    { titulo: 'One Piece', imagem: 'one-piece-cover.jpeg' },
    { titulo: 'Bleach', imagem: 'bleach-cover.jpeg' },
    { titulo: 'Jujutsu Kaisen', imagem: 'jujutsu-kaisen-cover.jpeg' },
    { titulo: 'Attack on Titan', imagem: 'aot-cover.jpeg' },
    { titulo: 'Death Note', imagem: 'death-note-cover.jpeg' },
    { titulo: 'JoJo', imagem: 'jojo-cover.jpeg' }
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
