import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UploadPdfComponent } from './upload-pdf/upload-pdf.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrowserModule, RouterModule, UploadPdfComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

