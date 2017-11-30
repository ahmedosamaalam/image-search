import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ImageService {

    private query: string;
    private ApiKey: string = environment.PIXBAY_API_KEY;
    private ApiUrl: string = environment.PIXBAY_API_URL;
    private Url: string = this.ApiUrl + this.ApiKey + '&q=';
    private perPage: string ='&per_page=10';


    constructor(private _http : Http){}

    getImages(query){
      return  this._http.get(this.Url + query + this.perPage).map(res=>res.json())
  }

}
