import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Travel } from '../models/travel';

const STORAGE_TRAVELS_ID = 'travels';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) { }

  public initTravels() {
    this.storage.set(STORAGE_TRAVELS_ID, []);
  }

  public getAllTravels() {
    return this.storage.get(STORAGE_TRAVELS_ID);
  }

  public saveTravelInfo(travels: Travel[]) {
    return this.storage.set(STORAGE_TRAVELS_ID, travels);
  }

  // getTravel(id: number) {

  // }

  public removeAllTravels() {
    this.storage.remove(STORAGE_TRAVELS_ID).then(() => { });
  }
}
