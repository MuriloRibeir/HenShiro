import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mangas = [
    { titulo: 'Naruto', imagem: 'naruto-cover.jpeg' },
    { titulo: 'One Piece', imagem: 'one-piece-cover.jpeg' },
    { titulo: 'Bleach', imagem: 'bleach-cover.jpeg' },
    { titulo: 'Jujutsu Kaisen', imagem: 'jujutsu-kaisen-cover.jpeg' },
    { titulo: 'Attack on Titan', imagem: 'aot-cover.jpeg' },
    { titulo: 'Death Note', imagem: 'death-note-cover.jpeg' }
  ];
}
