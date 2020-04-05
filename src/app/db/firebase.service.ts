import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  hosts: AngularFirestoreCollection<any[]>;
  constructor(private db: AngularFirestore) {
    this.hosts = this.db.collection('/all-hosts');
  }
}
