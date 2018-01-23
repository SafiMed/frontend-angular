import { Component, OnInit } from '@angular/core';

import { ShopService } from '../services/shop.service';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit() {
  }

  /**
   * asking the api service for logout function
   */
  logout(){
  	this.shopService.logout().subscribe(reponse =>{
  		console.log(reponse);
  	});
  }
}
