import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Lyric {
  title: string;
  lyrics: string;
  composer: string;
  artist: string;
}


@Injectable({
  providedIn: 'root'
})
export class FirelyricsService {

  private lyricsCollection: AngularFirestoreCollection<Lyric>;

  private lyrics: Observable<Lyric[]>;

  constructor(db: AngularFirestore) {
    this.lyricsCollection = db.collection<Lyric>('firelyrics');

    this.lyrics = this.lyricsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getFirelyrics() {
     return this.lyrics;
   }

   getFirelyric(id) {
     return this.lyricsCollection.doc<Lyric>(id).valueChanges();
   }

   updateFirelyric(lyric: Lyric, id: string) {
     return this.lyricsCollection.doc(id).update(lyric);
   }

   addFirelyric(lyric: Lyric) {
     return this.lyricsCollection.add(lyric);
   }

   removeFirelyric(id) {
     return this.lyricsCollection.doc(id).delete();
   }
}