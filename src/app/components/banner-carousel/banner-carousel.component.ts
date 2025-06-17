import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  imports: [CommonModule],
  templateUrl: './banner-carousel.component.html',
  styleUrl: './banner-carousel.component.css'
})
export class BannerCarouselComponent {
  @Input() destaques: { titulo: string; descricao: string; imagem: string }[] = [];

  destaqueIndex = 0;

  proximo(): void {
    this.destaqueIndex = (this.destaqueIndex + 1) % this.destaques.length;
  }

  anterior(): void {
    this.destaqueIndex = (this.destaqueIndex - 1 + this.destaques.length) % this.destaques.length;
  }

  irPara(index: number): void {
    this.destaqueIndex = index;
  }

  lerManga(manga: any): void {
    console.log('Abrir manga:', manga);
    // Aqui você pode emitir um evento ou navegar para a página de leitura
  }
}
