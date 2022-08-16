import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonce-search-form',
  templateUrl: './annonce-search-form.component.html',
  styleUrls: ['./annonce-search-form.component.css']
})
export class AnnonceSearchFormComponent implements OnInit {

  constructor() { }
  ShowCritere : boolean = false;

  ngOnInit(): void {
  }
  addCritere(){
    this.ShowCritere=!this.ShowCritere;
  }

}
