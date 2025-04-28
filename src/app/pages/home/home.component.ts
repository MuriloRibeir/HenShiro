import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mangas = [
    { titulo: 'Naruto', imagem: 'assets/naruto.jpg' },
    { titulo: 'One Piece', imagem: 'assets/onepiece.jpg' },
    { titulo: 'Bleach', imagem: 'assets/bleach.jpg' },
    { titulo: 'Jujutsu Kaisen', imagem: 'assets/jujutsu.jpg' },
    { titulo: 'Attack on Titan', imagem: 'assets/aot.jpg' },
    { titulo: 'Death Note', imagem: 'assets/deathnote.jpg' }
  ];
}
