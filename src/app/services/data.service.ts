import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Meme } from '../utis/interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getMemes() {
    return this._http.get<Meme[]>(`${environment.strapiUrl}/api/memes?populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        }),
        map((memes: Meme[]) => {
          return memes.map((meme) => {
            meme.attributes.image.data.attributes.curl = `http://localhost:1337${meme.attributes.image.data.attributes.url}`;
            console.log(meme.attributes.image.data.attributes.url)
            return meme;
          })
        }))
  }

  deleteMeme(id: number) {
    return this._http.delete(`${environment.strapiUrl}/api/memes/${id}`)
  }

  addMeme(data: any) {
    return this._http.post(`${environment.strapiUrl}/api/memes`, data);
  }
}
