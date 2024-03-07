import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterCompComponent } from './footer-comp.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [FooterCompComponent],
    exports: [FooterCompComponent]
})
export class FooterCompComponentModule {}
