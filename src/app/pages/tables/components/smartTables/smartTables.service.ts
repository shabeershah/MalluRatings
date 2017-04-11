import {Injectable} from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SmartTablesService {

  constructor ( private http: Http ){
    }

  smartTableData = [
    {
      filmName: 1,
      toi: 'Mark',
      ig: 'Otto',
      nr: '@mdo',
    },
    {
      filmName: 2,
      toi: 'Mark',
      ig: 'Otto',
      nr: '@mdo',
    },
    {
      filmName: 3,
      toi: 'Mark',
      ig: 'Otto',
      nr: '@mdo',
    },
    {
      filmName: 4,
      toi: 'Mark',
      ig: 'Otto',
      nr: '@mdo',
    },
    {
      filmName: 5,
      toi: 'Mark',
      ig: 'Otto',
      nr: '@mdo',
    }
    
  ];

  getDataObservable(url:string) {
   
  }

  private headers = new Headers({'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Content-Type': 'application/json; charset=utf-8'});

  getFilms() : Observable<any> {
   //return this.http.get("https://film-reviews.herokuapp.com/get/50/films?format=json",{headers: this.headers})
   return this.http.get("http://0.0.0.0:8000/get/50/films?format=json",{headers: this.headers})
               .map(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
