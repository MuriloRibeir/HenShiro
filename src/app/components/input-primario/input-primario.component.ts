import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "senha"

@Component({
  selector: 'app-input-primario',
  imports: [ ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPrimarioComponent),
      multi: true
    }
  ],
  templateUrl: './input-primario.component.html',
  styleUrl: './input-primario.component.css'
})
export class InputPrimarioComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";
  @Input() labelStyle: any

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};
  
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {}
}
