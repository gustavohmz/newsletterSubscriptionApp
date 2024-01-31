import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { StateSubscriberComponent } from './component/state-subscriber/state-subscriber.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, StateSubscriberComponent],
  imports: [CommonModule, FeatureRoutingModule, FormsModule],
})
export class FeatureModule {}
