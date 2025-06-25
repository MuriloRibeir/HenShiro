import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { BannerCarouselComponent } from '../../components/banner-carousel/banner-carousel.component';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';
import { FooterComponent } from "../../components/footer/footer.component"; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, BannerCarouselComponent, CommonModule, SafeUrlPipe, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('mangaGridWrapper') mangaGridWrapper!: ElementRef<HTMLDivElement>;

  pdfUrl: string | null = null;

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
    { titulo: 'Naruto', imagem: 'naruto-cover.jpeg', pdf: 'naruto' },
    { titulo: 'One Piece', imagem: 'one-piece-cover.jpeg', pdf: 'one-piece' },
    { titulo: 'Bleach', imagem: 'bleach-cover.jpeg', pdf: 'bleach' },
    { titulo: 'Jujutsu Kaisen', imagem: 'jujutsu-kaisen-cover.jpeg', pdf: 'jujutsu-kaisen' },
    { titulo: 'Attack on Titan', imagem: 'aot-cover.jpeg', pdf: 'aot' },
    { titulo: 'Death Note', imagem: 'death-note-cover.jpeg', pdf: 'death-note' },
    { titulo: 'JoJo', imagem: 'jojo-cover.jpeg', pdf: 'jojo' }
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

  abrirManga(nomePdf: string): void {
    this.pdfUrl = `pdf/${nomePdf}.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=90`;
    document.body.style.overflow = 'hidden'; // bloqueia scroll da página
  }

  fecharManga(): void {
    this.pdfUrl = null;
    document.body.style.overflow = 'auto'; // libera scroll da página
  }
}
