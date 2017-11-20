import {NgModule} from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const materialModules = [
  MatListModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})

export class MaterialComponentsModule {
}
