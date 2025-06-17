import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PlanoCardComponent } from '../../components/plano-card/plano-card.component';

interface Plano {
  nome: string;
  precoMensal: number;
  biblioteca: string;
  resolucao: string;
  aparelhosCompativeis: string;
  acessoAntecipado: string;
  criadores: string;
  anuncios: string;
}

@Component({
  selector: 'app-planos',
  imports: [NavbarComponent, CommonModule, PlanoCardComponent],
  templateUrl: './planos.component.html',
  styleUrl: './planos.component.css'
})
export class PlanosComponent implements OnInit {
  planos: Plano[] = [];
  planoSelecionado: Plano | null = null;

  constructor() { }

  ngOnInit(): void {
    this.carregarPlanos();
  }

  carregarPlanos(): void {
    this.planos = [
      {
        nome: 'Gratuito <br> com anúncios',
        precoMensal: 0,
        biblioteca: 'Parcial',
        resolucao: 'Padrão',
        aparelhosCompativeis: 'TV, computador, celular, tablet',
        acessoAntecipado: 'X',
        criadores: 'X',
        anuncios: 'Com anúncios',
      },
      {
        nome: 'Premium <br> para Leitores',
        precoMensal: 9.99,
        biblioteca: 'Total',
        resolucao: 'Alto',
        aparelhosCompativeis: 'TV, computador, celular, tablet',
        acessoAntecipado: '✓',
        criadores: 'X',
        anuncios: 'Sem anúncios',
      },
      {
        nome: 'Premium <br> para Criadores',
        precoMensal: 14.99,
        biblioteca: 'Total',
        resolucao: 'Alto',
        aparelhosCompativeis: 'TV, computador, celular, tablet',
        acessoAntecipado: '✓',
        criadores: '✓',
        anuncios: 'Sem anúncios',
      }
    ];
  }

  selecionarPlano(plano: Plano): void {
    this.planoSelecionado = plano;
    console.log('Plano selecionado:', this.planoSelecionado.nome);
  }

  prosseguir(): void {
    if (this.planoSelecionado) {
      console.log(`Você selecionou o plano: ${this.planoSelecionado.nome}. Prosseguindo...`);
    } else {
      console.log('Por favor, selecione um plano antes de prosseguir.');
    }
  }

}
