import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-boite-form',
  templateUrl: './search-boite-form.component.html',
  styleUrls: ['./search-boite-form.component.css']
})
export class SearchBoiteFormComponent implements OnInit {

  ShowCritere : boolean = false;

  constructor() { }


  ngOnInit(): void {
  }
  addCritere(){
    this.ShowCritere=!this.ShowCritere;
  }

}
