webpackJsonp([0,3],{

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = (function () {
    function MovieService() {
        this.movies = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* database */];
    }
    MovieService.prototype.list = function (search, page, limit) {
        if (search === void 0) { search = null; }
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        var movieResult = this.movies.filter(function (movie) {
            return (search) ? movie.title.toLowerCase().indexOf(search) !== -1 : true;
        });
        var movieResultPage = movieResult.slice((page - 1) * limit, page * limit);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of({ total: movieResult.length, items: movieResultPage }).delay(100);
    };
    MovieService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MovieService);
    return MovieService;
}());
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/movie.service.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Movie; });
/**
 * Created by jobou on 07/01/17.
 */
var Movie = (function () {
    function Movie(id, title) {
        this.id = id;
        this.title = title;
    }
    ;
    return Movie;
}());
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/movie.js.map

/***/ },

/***/ 399:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 399;


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(510);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/main.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(671),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/app.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_list__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination__ = __webpack_require__(511);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_list__["a" /* SearchListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pagination__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pagination__["a" /* PaginationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__search_list__["b" /* MovieService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/app.module.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_component__ = __webpack_require__(512);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_component__["a"]; });
/**
 * Created by jobou on 07/01/17.
 */

//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/index.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.total = 0;
        this.page = 1;
        this.goTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.total / 10);
    };
    PaginationComponent.prototype.pagesRange = function () {
        return this.range(1, this.totalPages() + 1);
    };
    PaginationComponent.prototype.prevPage = function () {
        return Math.max(1, this.page - 1);
    };
    PaginationComponent.prototype.nextPage = function () {
        return Math.min(this.totalPages(), this.page + 1);
    };
    PaginationComponent.prototype.pageClicked = function (page) {
        this.goTo.next(page);
    };
    PaginationComponent.prototype.range = function (start, stop, step) {
        if (step === void 0) { step = 1; }
        if (!stop) {
            start = 0;
            stop = start;
        }
        return Array.from(new Array(Number((stop - start) / step)), function (x, i) { return start + i * step; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "total", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Number)
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]) === 'function' && _a) || Object)
    ], PaginationComponent.prototype, "goTo", void 0);
    PaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'pagination',
            template: __webpack_require__(672)
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
    var _a;
}());
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/pagination.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__movie__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return database; });

/**
 * Created by jobou on 07/01/17.
 */
// Extract from imdb
var database = [
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](1, "She Made Them Do It"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](2, "Poka stanitsa spit"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](3, "Memory Lane"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](4, "No Through Road"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](5, "Malcolm & Eddie"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](6, "Violet"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](7, "Last Call with Carson Daly"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](8, "The Yellow Badge of Courage"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](9, "Doctor Who: The Companion Chronicles"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](10, "The Feed"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](11, "Emmerdale Farm"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](12, "The Jeselnik Offensive"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](13, "Zero Minute"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](14, "Nina and the Neurons Go Inventing"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](15, "Dynamo"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](16, "Ammattimies"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](17, "Happening Now"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](18, "The O'Reilly Factor"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](19, "How Do I Look?"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](20, "Electric Playground"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](21, "Commissaire Laviolette"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](22, "The Young Doctors"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](23, "Married with Children"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](24, "Le clan Pasquier"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](25, "The Gale Storm Show: Oh! Susanna"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](26, "Serangoon Road"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](27, "The Young Doctors"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](28, "Family Matters"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](29, "Motormouth"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](30, "Antiques Roadshow"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](31, "Wasak"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](32, "Prime News"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](33, "May bukas pa"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](34, "The Hollywood Squares"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](35, "Els matins a TV3"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](36, "Your Favorite Story"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](37, "Los desayunos de TVE"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](38, "The Small House at Allington"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](39, "Minute to Win It"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](40, "El ministerio del tiempo"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](41, "The Fabulous Picture Show"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](42, "Black Jack"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](43, "Cutting Edge"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](44, "Judge Joe Brown"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](45, "All Saints"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](46, "Quincy M.E."),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](47, "Neighbours"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](48, "Chistoserdechnoe priznanie"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](49, "John Halifax, Gentleman"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](50, "Paul Flynn"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](51, "Texas Monthly Talks"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](52, "David Copperfield"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](53, "Obruchalnoe koltso"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](54, "Rock Macabre"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](55, "The Tonight Show Starring Johnny Carson"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](56, "Daesh molodezh"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](57, "Wicked Wicked Games"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](58, "Music Fair"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](59, "Flip My Food with Chef Jeff"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](60, "Un hombre solo"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](61, "My S Rostova"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](62, "Zwei bei Kallwass"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](63, "Last Call with Carson Daly"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](64, "Jimmy Kimmel Live!"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](65, "Plebs"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](66, "Lonelygirl15"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](67, "Plus belle la vie"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](68, "Watch What Happens: Live"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](69, "WRAL Murder Trials"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](70, "Secrets of the Bible"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](71, "Six O'Clock News"),
    new __WEBPACK_IMPORTED_MODULE_0__movie__["a" /* Movie */](72, "Jackie Gleason: American Scene Magazine"),
];
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/data.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_list_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_movie_service__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__search_list_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__api_movie_service__["a"]; });
/* unused harmony reexport Movie */
/**
 * Created by jobou on 07/01/17.
 */



//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/index.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_movie_service__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchListComponent = (function () {
    function SearchListComponent(movieService) {
        this.movieService = movieService;
        this.terms = "";
        this.searchTermStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this.page = 1;
        this.pageStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    SearchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchSource = this.searchTermStream
            .debounceTime(1000)
            .distinctUntilChanged()
            .map(function (searchTerm) {
            _this.terms = searchTerm;
            return { search: searchTerm, page: 1 };
        });
        var pageSource = this.pageStream.map(function (pageNumber) {
            _this.page = pageNumber;
            return { search: _this.terms, page: pageNumber };
        });
        var source = pageSource
            .merge(searchSource)
            .startWith({ search: this.terms, page: this.page })
            .switchMap(function (params) {
            return _this.movieService.list(params.search, params.page);
        })
            .share();
        this.total$ = source.pluck('total');
        this.items$ = source.pluck('items');
    };
    SearchListComponent.prototype.search = function (terms) {
        this.searchTermStream.next(terms);
    };
    SearchListComponent.prototype.goToPage = function (page) {
        this.pageStream.next(page);
    };
    SearchListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-search-list',
            template: __webpack_require__(673)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_movie_service__["a" /* MovieService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__api_movie_service__["a" /* MovieService */]) === 'function' && _a) || Object])
    ], SearchListComponent);
    return SearchListComponent;
    var _a;
}());
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/search-list.component.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/environment.js.map

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/jobou/workspace/angular-search-list/src/polyfills.js.map

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "<h1>Paginated search list example</h1>\n\n<p>Based on my blog post <a href=\"https://blog.bouzekri.net/2016-05-15-angular2-rxjs-simple-paginated-list-with-search-field\">Angular2 and Rxjs : a simple paginated list with search field</a></p>\n\n<p>Note : this is not exactly the same as in the blog post but it is based on the same principles.</p>\n\n<app-search-list></app-search-list>\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<ul *ngIf=\"totalPages() > 1\" class=\"pagination pagination-sm no-margin pull-right\">\n  <li *ngIf=\"page != 1\"><a (click)=\"pageClicked(prevPage())\">«</a></li>\n  <li *ngFor=\"let p of pagesRange()\"><a (click)=\"pageClicked(p)\">{{p}}</a></li>\n  <li *ngIf=\"totalPages() > page\"><a (click)=\"pageClicked(nextPage())\">»</a></li>\n</ul>\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<form (submit)=\"search(term.value)\">\n  <div class=\"input-group input-group-sm\" style=\"margin-bottom: 10px;\">\n    <input #term (keyup)=\"search(term.value)\" [value]=\"terms\" class=\"form-control\" placeholder=\"Search\" autofocus>\n    <div class=\"input-group-btn\">\n      <button type=\"submit\" class=\"btn btn btn-default btn-flat\"><i class=\"fa fa-search\"></i></button>\n    </div>\n  </div>\n</form>\n\n<p>Results: {{ total$ | async }}</p>\n\n<table class=\"table table-striped table-hover\">\n  <thead>\n    <tr>\n      <th>id</th>\n      <th>title</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let movie of items$ | async\">\n      <td>{{ movie.id }}</td>\n      <td>{{ movie.title }}</td>\n    </tr>\n  </tbody>\n</table>\n\n<pagination [total]=\"total$ | async\" [page]=\"page\" (goTo)=\"goToPage($event)\"></pagination>\n"

/***/ },

/***/ 947:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(400);


/***/ }

},[947]);
//# sourceMappingURL=main.bundle.map