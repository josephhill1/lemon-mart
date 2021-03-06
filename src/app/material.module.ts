import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule],
  declarations: [],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule],
})
export class MaterialModule {}
