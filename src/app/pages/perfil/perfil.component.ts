import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

interface Perfil {
  fotoUrl: string;
  nomeUsuario: string;
  localizacao: string;
  nivel: number;
  insigniasDestaque?: string[];
  atividadeRecente: {
    titulo: string;
    tempo: string;
    ultimaVez: string;
    capaUrl: string;
  }[];
  statusOnline: boolean;
  totalInsignias: number;
  totalMangas: number;
  mangasFavoritos?: string[]; 
  mangasLidosRecentemente?: string[];
  mangasColecao?: string[];
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  perfil: Perfil | undefined;

  constructor() { }

  ngOnInit(): void {
    this.perfil = {
      fotoUrl: 'profile-placeholder.png',
      nomeUsuario: 'Guilherme Anthony',
      localizacao: 'Brasil',
      nivel: 5,
      atividadeRecente: [
        {
          titulo: 'One Piece',
          tempo: '15 capítulos lidos',
          ultimaVez: 'Lido em 10 de jun.',
          capaUrl: 'img/one-piece-cover.jpeg'
        },
        {
          titulo: 'Naruto',
          tempo: '5 horas de leitura',
          ultimaVez: 'Lido em 9 de jun.',
          capaUrl: 'img/naruto-cover.jpeg'
        },
        {
          titulo: 'Berserk',
          tempo: '3 capítulos lidos',
          ultimaVez: 'Lido em 8 de jun.',
          capaUrl: 'img/berserk-cover.jpeg'
        }
      ],
      statusOnline: true,
      totalInsignias: 5,
      totalMangas: 25,
      mangasFavoritos: ['One Piece', 'Naruto'],
      mangasLidosRecentemente: ['One Piece', 'Naruto', 'Berserk'],
      mangasColecao: ['One Piece', 'Naruto', 'Berserk', 'Fullmetal Alchemist']
    };
  }
}
