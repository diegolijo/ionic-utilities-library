import { Injectable } from '@angular/core';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular/';
import { IonicUtilitiesModule } from './ionic-utilities.module';




@Injectable({
  providedIn: IonicUtilitiesModule
})
export class IonicUtilitiesService {


  constructor(
    private platform: Platform,
    private storage_browser: Storage,
    private storage_native: NativeStorage
  ) {
    this.storage_browser.create();
  }


  public setKey(key: string, value: any) {
    return this.setItem(key, value);
  }

  public getKey(key: string): any {
    return this.getItem(key);
  }

  public destroyKey(key: string) {
    return this.removeItem(key);
  }


  private async setItem(key: string, value: any) {
    if (this.platform.is('cordova')) {
      return new Promise((resolve, reject) => {
        this.storage_native.setItem(key, value).then(() => {
          resolve(null);
        }, (err: any) => {
          reject(err);
        });
      });
    } else {
      return this.storage_browser.set(key, value);
    }
  }

  private getItem(key: string) {
    if (this.platform.is('cordova')) {
      return new Promise((resolve, reject) => {
        this.storage_native.getItem(key).then((value: any) => {
          resolve(value);
        }, (err: any) => {
          if (err.code === 2) {
            resolve(null);
          } else {
            reject(err);
          }
        });
      });
    } else {
      return this.storage_browser.get(key);
    }
  }

  private removeItem(key: string) {
    if (this.platform.is('cordova')) {
      return new Promise((resolve, reject) => {
        this.storage_native.remove(key).then(() => {
          resolve(null);
        }).catch((err: any) => {
          reject(err);
        });
      });
    } else {
      return this.storage_browser.remove(key);
    }
  }
}






