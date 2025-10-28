import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {

  // 1. INPUT: Define el texto del botón (e.g., 'Crear', 'Eliminar')
  @Input() label: string = 'Boton';

  // 2. INPUT: Define el icono (e.g., 'add', 'delete', 'search')
  //@Input() icon: string = '';

  // 3. INPUT: Define el estilo (color, clase CSS)
  //@Input() type: 'primary' | 'warn' | 'accent' | 'basic' = 'primary';
  
  // 4. INPUT: Define el tipo de acción (útil para el componente padre)
  // No se usa directamente en el HTML, pero ayuda al padre a saber qué evento ocurrió.
  @Input() actionType: string = 'click'; 

  // 5. OUTPUT: Emite un evento cuando se hace clic
  // El padre se suscribe a este evento.
  @Output() buttonClick = new EventEmitter<string>(); 

  // Método que se ejecuta al hacer clic en el botón
  onClick(): void {
    // Emite el actionType para que el padre sepa qué botón se presionó
    this.buttonClick.emit(this.actionType);
  }
}