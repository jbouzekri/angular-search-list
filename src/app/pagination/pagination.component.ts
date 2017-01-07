import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {

  @Input()
  total: number = 0;

  @Input()
  page: number = 1;

  @Output()
  goTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  totalPages() {
    return Math.ceil(this.total / 10);
  }

  pagesRange() {
    return this.range(1, this.totalPages() + 1);
  }

  prevPage() {
    return Math.max(1, this.page - 1);
  }

  nextPage() {
    return Math.min(this.totalPages(), this.page + 1);
  }

  pageClicked(page: number) {
    this.goTo.next(page);
  }

  range(start, stop, step=1){
    if (!stop) { start=0;stop=start; }
    return Array.from(new Array(Number((stop-start)/step)), (x,i) => start+ i*step)
  }
}
