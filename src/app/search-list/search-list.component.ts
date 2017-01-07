import {Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { Subject, Observable } from "rxjs";

import { MovieService } from "./api/movie.service";
import { Movie } from "./movie";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html'
})
export class SearchListComponent implements OnInit {
  total$: Observable<number>;
  items$: Observable<Movie[]>;

  terms: string = "";
  private searchTermStream = new Subject<string>();

  page: number = 1;
  private pageStream = new Subject<number>();

  constructor(protected movieService: MovieService) { }

  ngOnInit() {
    const searchSource = this.searchTermStream
      .debounceTime(1000)
      .distinctUntilChanged()
      .map(searchTerm => {
        this.terms = searchTerm;
        return {search: searchTerm, page: 1}
      });

    const pageSource = this.pageStream.map(pageNumber => {
      this.page = pageNumber;
      return {search: this.terms, page: pageNumber}
    });

    const source = pageSource
      .merge(searchSource)
      .startWith({search: this.terms, page: this.page})
      .switchMap((params: {search: string, page: number}) => {
        return this.movieService.list(params.search, params.page)
      })
      .share();

    this.total$ = source.pluck('total');
    this.items$ = source.pluck('items');
  }

  search(terms: string) {
    this.searchTermStream.next(terms)
  }

  goToPage(page: number) {
    this.pageStream.next(page)
  }
}
