import { DOCUMENT, Location } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
  }

  setLayouts(){
     //this.renderer.addClass(this.document.body, "navbar");
    // this.renderer.addClass(this.document.body, "sidebar");
    // this.renderer.addClass(this.document.body, "footer");
  }

}
