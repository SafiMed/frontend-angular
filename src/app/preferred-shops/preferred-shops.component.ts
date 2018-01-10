import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShopService } from '../services/shop.service';
import { MessageService } from '../services/message.service';

declare var $: any;

@Component({
  selector: 'app-preferred-shops',
  templateUrl: './preferred-shops.component.html',
  styleUrls: ['./preferred-shops.component.css']
})
export class PreferredShopsComponent implements OnInit {
  preferredshops: any;
  
  constructor(private shopService: ShopService, 
  			  private messageService: MessageService) {

  }

  ngOnInit() {
    this.getPreferredShops();
  }
  
  /**
   * asking the api service for all preferred shops & putting them in the local variable
   */
  getPreferredShops(){
    this.shopService.showPreferredShops().subscribe(preferredshops =>{
      this.preferredshops = preferredshops;
      //console.log(this.nearbyshops);
    });
  }

  /**
   * showing a message when the shop is removed successfully
   */
  shopRemoved(id){
    this.shopService.removeShop(id).subscribe(response =>{
      console.log(response);
      this.hideShop("div#"+id);
      this.messageService.showMessage("div#msg", "alert-warning", "Shop has been removed", "glyphicon-ok");
    });
  }

  hideShop(selector){
    $(selector).hide();
  }
}
