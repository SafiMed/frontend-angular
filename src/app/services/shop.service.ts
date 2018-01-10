import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {

  // local Laravel server
  server = 'http://localhost:8000/';
  
  headers: Headers = new Headers;
  options: any;

  constructor(private http: Http) { 
  	this.headers.append('enctype', 'multipart/form-data');
  	this.headers.append('Content-Type', 'application/json');
  	this.headers.append('X-Requested-With', 'XMLHttpRequest');
  	this.options = new RequestOptions({ headers: this.headers });
  }
  /*
  getShop(id){
    return this.http.get(this.server+"getShop/"+id).map(res => res.json());
  }
  */
 
  /**
   * Getting Nearby Shops from the server
   */
  showNearbyShops(){
    return this.http.get(this.server+"nearby-shops").map(res => res.json());
  }

  /**
   * Getting Preferred Shop from the server
   */
  showPreferredShops(){
    return this.http.get(this.server+"preferred-shops").map(res => res.json());
  }

  /**
   * Sending the id of the Liked Shop to the server
   * @param {[type]} id identifier of the Liked Shop
   */
  likeShop(id){
    return this.http.get(this.server+"like-shop/"+id).map(res => res.json());
  }

  /**
   * Sending the id of the Disliked Shop to the server
   * @param {[type]} id identifier of the Liked Shop
   */
  dislikeShop(id){
    return this.http.get(this.server+"dislike-shop/"+id).map(res => res.json());
  }

  /**
   * Sending the id of the Removed Shop to the server
   * @param {[type]} id identifier of the Removed Shop
   */
  removeShop(id){
    return this.http.get(this.server+"remove-shop/"+id).map(res => res.json());
  }
}
