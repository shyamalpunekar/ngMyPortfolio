import { Injectable } from '@angular/core';
import { Activities } from './activities.model';
import { ACTIVITY } from './mock-activities';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  activities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.activities = database.list('activities');
  }


}
