import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword , sendPasswordResetEmail,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {getFirestore,setDoc,doc,getDoc} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  /**================AUTENTIFICACION======================*/

  /**==============ACEDER==================*/

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //==============Base DE DATOS=================

  setDocument(path:string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  

  }

  //=========== CREAR USER====================

signUp(user:User){
  return createUserWithEmailAndPassword(getAuth(),user.email,user.password);

}

//=========== UPDATE USER====================

updateUser(displayName:string){
  return updateProfile(getAuth().currentUser,{displayName});

}
//=========== OBTEN UN DOCUMENTO====================

async getDocument(path: string) {
  return (await getDoc(doc(getFirestore(), path))). data();
  

  }
}
