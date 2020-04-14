import { Component, OnInit } from '@angular/core';
import {SearchFacadeService, UserState} from '../../services/search-facade.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.scss']
})
export class FacadeComponent implements OnInit {
  searchTerm: FormControl;
  showButton = true;
  vm$: Observable<UserState> = this.facade.vm$;

  constructor(public facade: SearchFacadeService) { }

  ngOnInit() {
    const {criteria} = this.facade.getStateSnapshot();

    this.searchTerm = this.facade.buildSearchTermControl();
    this.searchTerm.patchValue(criteria, { emitEvent: false });
  }

  getPageSize() {
    this.showButton = false;
  }
}
