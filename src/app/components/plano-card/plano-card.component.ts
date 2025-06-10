import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-plano-card',
  imports: [ CommonModule ],
  templateUrl: './plano-card.component.html',
  styleUrl: './plano-card.component.css'
})
export class PlanoCardComponent {
  @Input() plano!: Plano;
  @Input() isSelected: boolean = false;

  @Output() planoSelected = new EventEmitter<Plano>();

  constructor() { }

  onSelectPlano(): void {
    this.planoSelected.emit(this.plano);
  }
}
