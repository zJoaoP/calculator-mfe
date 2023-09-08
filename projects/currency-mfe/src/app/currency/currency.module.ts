import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CurrencyRoutingModule } from './currency-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CurrencyRoutingModule],
})
export class CurrencyModule {}
