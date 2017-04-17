import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';
import { PageService } from './pages.service';


@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">

      <div class="al-footer-right">
      <div class="col-md-12">
        <div class="dropdown al-user-profile" style="float:left;margin-right:25px">
          <a class="myProfile" id="user-profile-dd" href="https://www.linkedin.com/in/shabeershah/">
            <img src="{{ ( 'shab' | baProfilePicture ) }}" >
          </a>
        </div>
       Created with <img src="assets/img/heart_animated.gif" width="25px">
      </div>
      </div>

       
      <div class="al-footer-main clearfix">
        <ul class="al-share clearfix">
          <li>{{ visitors_count }} Visitors today !</li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
  
  visitors_count = ''
  constructor(private _menuService: BaMenuService,private page_service: PageService) {
  }

  ngOnInit() {
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
    this.getDailyHits();
   }

  getDailyHits() {
    this.page_service.getDailyHits().subscribe((data) => {
      console.log(data)
      this.visitors_count = data.count
    });
  }
}
