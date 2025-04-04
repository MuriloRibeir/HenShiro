import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() botaoPrimario: string = "";
  @Input() botaoSecundario: string = "";
  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}
