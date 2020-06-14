import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(public db:AngularFirestore,public auth:AuthService) { }


}
