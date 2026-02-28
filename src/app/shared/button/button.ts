import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [ngClass]="computedClasses">

      @if (!loading) {
        <ng-content></ng-content>
      } @else {
        <span class="flex items-center gap-2">
          <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"
              stroke="currentColor"
              stroke-width="4"
              fill="none"
              class="opacity-25" />
            <path fill="currentColor"
              class="opacity-75"
              d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          {{ loadingText }}
        </span>
      }

    </button>
  `,
  styles: ``
})
export class Button {

  @Input() variant: 'default' | 'outline' | 'destructive' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() loadingText = 'Cargando...';
  @Input() class = '';

  get computedClasses(): string {

    const base =
      'inline-flex items-center justify-center rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      default: 'bg-pink-600 text-white hover:bg-pink-700',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
      destructive: 'bg-red-600 text-white hover:bg-red-700'
    };

    const sizes = {
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    return `${base} ${variants[this.variant]} ${sizes[this.size]} ${this.class}`;
  }

}