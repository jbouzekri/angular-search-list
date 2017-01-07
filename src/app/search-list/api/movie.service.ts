import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

import { Movie } from "../movie";
import { ListResult } from "./list-result.interface";
import { database } from "./data";

@Injectable()
export class MovieService {
  movies: Movie[] = database;

  constructor() {}

  list(search: string = null, page: number = 1, limit: number = 10): Observable<ListResult<Movie>> {
    let movieResult = this.movies.filter(function(movie: Movie) {
        return (search) ? movie.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    let movieResultPage = movieResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: movieResult.length, items: movieResultPage}).delay(100);
  }
}
