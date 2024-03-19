import { Injectable, inject } from '@angular/core';
import {
  LoadingController,
  ToastController,
  ToastOptions,
} from '@ionic/angular';

import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject (Router)

  //=======loading=====
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' });
  }

  //========Toast=========
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

    //======= ENRUTA A CUALQUIER PAGINA  =========
    routerLink(url: string){
      return this.router.navigateByUrl(url);
    }  

  //=================== GUARDA UN ELEMENTO ======================

  saveInlocalStorage(key:string, value: any){
    return localStorage.setItem(key, JSON.stringify(value))

  }


  //=================      ====================
    getFromLocalStorage(key: string){
      return JSON.parse(localStorage.getItem(key));
    }
  
  
}
