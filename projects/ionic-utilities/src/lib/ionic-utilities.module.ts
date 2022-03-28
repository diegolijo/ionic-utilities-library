import { NgModule } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular/';
import { IonicUtilitiesComponent } from './ionic-utilities.component';

@NgModule({
  declarations: [IonicUtilitiesComponent],
  imports: [],
  exports: [IonicUtilitiesComponent],
  providers: [
    NativeStorage,
    Storage,
    Platform],
})
export class IonicUtilitiesModule { }
