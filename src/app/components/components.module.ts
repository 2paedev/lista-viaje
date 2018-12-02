import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, NgxSpinnerModule],
  declarations: [CardComponent, SpinnerComponent],
  exports: [CardComponent, NgxSpinnerModule, SpinnerComponent],
  entryComponents: []
})
export class ComponentsModule {}
