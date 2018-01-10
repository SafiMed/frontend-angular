import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShopService } from '../services/shop.service';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-nearby-shops',
  templateUrl: './nearby-shops.component.html',
  styleUrls: ['./nearby-shops.component.css']
})
export class NearbyShopsComponent implements OnInit {
  nearbyshops: any;

  constructor(private shopService: ShopService, 
  			      private messageService: MessageService) {

  }

  ngOnInit() {
    this.getNearbyShops();
  }

  /**
   * asking the api service for all nearby shops & putting them in the local variable
   */
  getNearbyShops(){
  	this.shopService.showNearbyShops().subscribe(nearbyshops =>{
  		this.nearbyshops = nearbyshops;
  		//console.log(this.nearbyshops);
  	});
  }
  
  /**
   * showing a message when the shop is liked successfully
   */
  shopLiked(id){
    this.shopService.likeShop(id).subscribe(response =>{
      console.log(response);
      this.hideShop("div#"+id);
      this.messageService.showMessage("div#msg", "alert-info", "Shop has been liked", "glyphicon-ok");
    });
  }

  /**
   * showing a message when the shop is disliked successfully
   */
  shopDisliked(id){
    this.shopService.dislikeShop(id).subscribe(response =>{
      console.log(response);
      this.hideShop("div#"+id);
      this.messageService.showMessage("div#msg", "alert-danger", "Shop has been disliked", "glyphicon-ok");
    });
  }
  
  hideShop(selector){
    $(selector).hide();
  }
}
