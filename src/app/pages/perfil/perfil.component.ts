import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

interface Perfil {
  fotoUrl: string;
  nomeUsuario: string;
  localizacao: string;
  nivel: number;
  insigniasDestaque?: string[]; // URLs ou nomes de insígnias para destaque
  atividadeRecente: {
    titulo: string;
    tempo: string; // Ex: '73 horas registradas'
    ultimaVez: string; // Ex: 'jogada pela última vez em 10 de jun.'
    capaUrl: string;
  }[];
  statusOnline: boolean;
  totalInsignias: number;
  totalMangas: number; // Total de mangas na plataforma
  mangasFavoritos?: string[]; // Lista de mangas favoritos
  mangasLidosRecentemente?: string[]; // Lista de mangas lidos recentemente
  mangasColecao?: string[]; // Lista de mangas que o utilizador coleciona
  reviews?: string[]; // Reviews do utilizador
  guias?: string[]; // Guias criados pelo utilizador
  artes?: string[]; // Artes criadas pelo utilizador
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
    // Dados de exemplo para o perfil
    this.perfil = {
      fotoUrl: 'assets/profile-placeholder.png', // Coloque uma imagem sua aqui
      nomeUsuario: 'LeitorManga123',
      localizacao: 'Portugal',
      nivel: 5,
      atividadeRecente: [
        {
          titulo: 'One Piece',
          tempo: '15 capítulos lidos',
          ultimaVez: 'Lido em 10 de jun.',
          capaUrl: 'assets/one-piece-cover.jpg' // Capa do mangá
        },
        {
          titulo: 'Naruto',
          tempo: '5 horas de leitura',
          ultimaVez: 'Lido em 9 de jun.',
          capaUrl: 'assets/naruto-cover.jpg' // Capa do mangá
        },
        {
          titulo: 'Berserk',
          tempo: '3 capítulos lidos',
          ultimaVez: 'Lido em 8 de jun.',
          capaUrl: 'assets/berserk-cover.jpg' // Capa do mangá
        }
      ],
      statusOnline: true,
      totalInsignias: 5,
      totalMangas: 25,
      mangasFavoritos: ['One Piece', 'Naruto'],
      mangasLidosRecentemente: ['One Piece', 'Naruto', 'Berserk'],
      mangasColecao: ['One Piece', 'Naruto', 'Berserk', 'Fullmetal Alchemist'],
      reviews: [], // Deixe vazio por enquanto
      guias: [], // Deixe vazio por enquanto
      artes: [] // Deixe vazio por enquanto
    };
  }
}
