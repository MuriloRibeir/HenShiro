import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-pdf',
  standalone: true,
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.css']
})
export class UploadPdfComponent {
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/pdf') {
        this.selectedFile = file;
        console.log('Arquivo PDF selecionado:', file.name);
      } else {
        alert('Por favor, selecione um arquivo PDF válido.');
        this.selectedFile = null;
      }
    }
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      alert('Nenhum arquivo selecionado para upload.');
      return;
    }

    // Aqui você implementaria a lógica para enviar o arquivo para o backend ou serviço.
    console.log('Fazendo upload do arquivo:', this.selectedFile.name);

    // Exemplo básico: apenas limpa o arquivo selecionado após "upload"
    this.selectedFile = null;
  }
}
