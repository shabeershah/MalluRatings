import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ModalDirective } from 'ng2-bootstrap';


import 'style-loader!./smartTables.scss';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {

  query: string = '';
  errorMessage: string;
  mode = 'Observable';
  filmsList = []
  selectedItem = {}
  filmsCopy = []

  settings = {
    columns: {
      film: {
        title: 'Malyalam Movie Name',
        type: 'string'
      },
      timesofindia: {
        title: 'TimesOfIndia (5)',
        type: 'string'
      },
      indiaglitz: {
        title: 'IndiaGlitz (5)',
        type: 'string'
      },
      nowrunning: {
        title: 'NowRunning (5)',
        type: 'string'
      },
       imdb: {
        title: 'IMDB (10)',
        type: 'string'
      },
       lensmen: {
        title: 'Lensmen(5)',
        type: 'string'
      },
       filmibeat: {
        title: 'FilmiBeat (5)',
        type: 'string'
      },
       bookmyshow: {
        title: 'BookmyShow (5)',
        type: 'string'
      },
       firstpost: {
        title: 'FirstPost (5)',
        type: 'string'
      },
       malluratings: {
        title: 'Critic(5)',
        type: 'html'
      }
      }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTablesService) {
  }
  ngOnInit() { 
    this.getHeroes();
   }

  getHeroes() {
    this.service.getFilms().subscribe((data) => {
      this.source.load(data);
      console.log(data)
      this.filmsList = data
      this.filmsCopy = data
    });
  }

  selectFilm(item): void{
    this.selectedItem = item
    console.log('Selected Item');
    console.log(item)
  }

  goBack(): void{
   this.selectedItem = {}
  }

  public search(word) {
    console.log(word);
    this.filmsList = this.filmsCopy 
    if(!word){
      this.filmsList = this.filmsCopy      
    } else {
        this.filmsList = Object.assign([], this.filmsList).filter(
        item => item.film.toLowerCase().indexOf(word.toLowerCase()) > -1
     )
    }
     
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}


