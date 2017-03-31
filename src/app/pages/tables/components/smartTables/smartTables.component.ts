import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./smartTables.scss';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {

  query: string = '';
  errorMessage: string;
  mode = 'Observable';

  settings = {
    columns: {
      film: {
        title: 'Film Name',
        type: 'string'
      },
      timesofindia: {
        title: 'Times of India (5)',
        type: 'string'
      },
      indiaglitz: {
        title: 'India Glitz (5)',
        type: 'string'
      },
      nowrunning: {
        title: 'Now Running (5)',
        type: 'string'
      },
       imdb: {
        title: 'IMDB (10)',
        type: 'string'
      },
       lensmen: {
        title: 'Lensmen (5)',
        type: 'string'
      },
       filmibeat: {
        title: 'Filmi Beat (5)',
        type: 'string'
      },
       bookmyshow: {
        title: 'BookmyShow (5)',
        type: 'string'
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
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
