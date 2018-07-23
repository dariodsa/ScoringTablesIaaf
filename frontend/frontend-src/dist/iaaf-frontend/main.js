(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main */ "./src/app/main/main.ts");
/* harmony import */ var _competitions_competitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competitions/competitions */ "./src/app/competitions/competitions.ts");
/* harmony import */ var _competition_competition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./competition/competition */ "./src/app/competition/competition.ts");
/* harmony import */ var _results_results__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results/results */ "./src/app/results/results.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'competitions', component: _competitions_competitions__WEBPACK_IMPORTED_MODULE_3__["CompetitionsComponent"] },
    { path: 'results/:id', component: _results_results__WEBPACK_IMPORTED_MODULE_5__["ResultsComponent"] },
    { path: 'competition/:id', component: _competition_competition__WEBPACK_IMPORTED_MODULE_4__["CompetitionToolbarComponent"] },
    { path: 'main', component: _main_main__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: '', component: _competitions_competitions__WEBPACK_IMPORTED_MODULE_3__["CompetitionsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".author {\n    text-align: right;\n    font-size: 10px;\n}\n.nav-link{\n    text-align: center;\n    width: 70%;\n    font-size: 28px;\n    font-family: sans-serif;\n}\na:link{\n    text-decoration: none;\n    \n    font-family: sans-serif;\n    font-size: 27px;\n    background-color: #b8d0e6;\n    color: blue;\n}\na:hover {\n    \n}\n.navbar{\n    width: 100%;\n    background-color: rgb(162, 236, 162);\n}\n.bottomBar {\n    width: -moz-available;\n    background-color: rgb(162, 236, 162);\n    font-size: 11px;\n    margin-top: 100px;\n}\n.login-button{\n    color: white;\n    background-color: #006dcc;\n    font-size: 14px;\n    font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    text-align: center;\n}\n.login-form{\n    float: right;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<table class=\"navbar\">\n  <tr>\n    <td class=\"nav-link\">\n      {{title}}\n    </td>\n    <td>\n      <a href=\"/competitions\">Natjecanja</a>\n    </td>\n    <td style=\"width:20%;\"></td>\n    <td>\n      <div *ngIf=\"loginIn == false\">\n        <form (ngSubmit)=\"login();\">\n          <table class=\"login-form\">\n            <tr>\n              \n                <td>\n                  <input type=\"text\" id=\"username\" placeholder=\"korisničko ime\"/>\n                </td>\n                <td>\n                    <input type=\"password\" id=\"password\" placeholder=\"lozinka\"/>\n                </td>\n                <td>\n                  <input class=\"login-button\" value=\"Prijava\" type=\"submit\"/>\n                </td>\n            </tr>\n        </table>\n      </form>\n    </div>\n    <div *ngIf=\"loginIn == true\">\n        Bok {{username}}!\n        <button (click)=\"logout();\">Odjava</button>\n      </div>\n    </td>\n  </tr>\n</table>\n<hr>\n<router-outlet></router-outlet>    \n<table class=\"bottomBar\">\n  <tr>\n   <td style=\"text-align: right;\">\n      {{author}}\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/simple-rest-api-service */ "./src/app/service/simple-rest-api-service.ts");
/* harmony import */ var _service_RestConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/RestConstants */ "./src/app/service/RestConstants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(restService) {
        this.restService = restService;
        this.title = 'Aplikacija za računanje IAAF bodova';
        this.author = "Dario Sindičić, AK Maksimir, 2018.";
        this.loginIn = false;
        if (sessionStorage.getItem("userId") != "null") {
            this.loginIn = true;
            this.username = sessionStorage.getItem("username");
        }
        console.log(this.loginIn);
    }
    AppComponent.getUserId = function () {
        if (sessionStorage.getItem("userId") != "null") {
            return Number(sessionStorage.getItem("userId"));
        }
        else {
            return -1;
        }
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].CHECK_USER, { username: username,
            password: password }).subscribe(function (res) {
            if (res != -1) {
                sessionStorage.setItem("userId", res.toString());
                sessionStorage.setItem("username", username);
                location.reload();
                _this.loginIn = true;
                _this.username = sessionStorage.getItem("username");
            }
            else {
                alert("Login nije uspio");
            }
        });
    };
    AppComponent.prototype.logout = function () {
        sessionStorage.setItem("userId", null);
        sessionStorage.setItem("username", null);
        this.loginIn = false;
        this.username = null;
        location.reload();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["SimpleRestApiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main */ "./src/app/main/main.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/simple-rest-api-service */ "./src/app/service/simple-rest-api-service.ts");
/* harmony import */ var _service_ComponentInjectorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/ComponentInjectorService */ "./src/app/service/ComponentInjectorService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _competitions_competitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./competitions/competitions */ "./src/app/competitions/competitions.ts");
/* harmony import */ var _competition_competition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./competition/competition */ "./src/app/competition/competition.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _results_results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./results/results */ "./src/app/results/results.ts");
/* harmony import */ var _model_countires__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/countires */ "./src/app/model/countires.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _main_main__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _competitions_competitions__WEBPACK_IMPORTED_MODULE_10__["CompetitionsComponent"],
                _competition_competition__WEBPACK_IMPORTED_MODULE_11__["CompetitionToolbarComponent"],
                _results_results__WEBPACK_IMPORTED_MODULE_13__["ResultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [_service_ComponentInjectorService__WEBPACK_IMPORTED_MODULE_6__["ComponentInjectorService"], _service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_5__["SimpleRestApiService"], _model_countires__WEBPACK_IMPORTED_MODULE_14__["Countries"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/competition/competition.css":
/*!*********************************************!*\
  !*** ./src/app/competition/competition.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-left: 150px;\n    margin-right: 150px;\n    width: -moz-available;\n}\n.table{\n    width: 94%;\n    text-align: center;\n    background-color: #eee8f3;\n    margin-left: 80px;\n}\ntable.table{\n    border: 1px solid #ddd;\n}\ntr:hover {background-color:#e0d7a3;}\n.selected {\n    background-color: lightcoral;\n}\nimg.image{\n    width: 40px;\n    height: 40px;\n}"

/***/ }),

/***/ "./src/app/competition/competition.html":
/*!**********************************************!*\
  !*** ./src/app/competition/competition.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"userId == competition.authorId\">\n    \n    <h4>\n        {{competition.name}}\n    </h4>\n    \n    <button (click)=\"showNewResult();\">Dodaj rezultat</button><br>\n    <button (click)=\"showNewAthlete();\">Dodaj atletičara</button><br>\n    <button (click)=\"showRegistedAthletes();\">Popis atletičara</button><br>\n    <button >Promijeni rezultate</button><br>\n    \n    <div *ngIf=\"showAthletes\">\n        <table class=\"table\">\n            <tr>\n                <td>Redni broj</td>\n                <td>Ime</td>\n                <td>Prezime</td>\n                <td>Spol</td>\n                <td>Datum rođenja</td>\n                <td>Startni broj</td>\n                <td>Klub</td>\n                <td>Država</td>\n            </tr>\n            <tr *ngFor=\"let athlete of athletes; let i = index\">\n                <td>{{i+1}}.</td>\n                <td>{{athlete.firstName}}</td>\n                <td>{{athlete.lastName}}</td>\n                <td>{{athlete.gender}}</td>\n                <td>{{athlete.dateOfBirth}}</td>\n                <td>{{athlete.bib}}</td>\n                <td>{{athlete.club}}</td>\n                <td>{{athlete.country}}</td>\n            </tr>\n        </table>\n    </div>\n    <div id=\"newAthlete\" *ngIf=\"newAthlete\">\n        <table>\n            <tr>\n                <td colspan=\"4\">\n                    <h4>\n                        Novi atletičar\n                    </h4>\n                </td>\n            </tr>\n            <tr>\n                <td>Ime:</td>\n                <td>\n                    <input type=\"text\" id=\"firstName\" placeholder=\"Mirko\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>Prezime:</td>\n                <td>\n                    <input type=\"text\" id=\"lastName\" placeholder=\"Mišić\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>Spol:</td>\n                <td>\n                    <select id=\"gender\">\n                        <option value=\"MALE\">Muški</option>\n                        <option value=\"FEMALE\">Ženski</option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td>Datum rođenja:</td>\n                <td>\n                    <input type=\"date\" id=\"dateOfBirth\" placeholder=\"01.01.1970\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>Klub:</td>\n                <td>\n                    <input type=\"text\" id=\"club\" placeholder=\"Ak Maksimir\"/>\n                </td>\n            </tr>\n            <tr>\n                <td>Država:</td>\n                <td>\n                    <select id=\"country\">\n                        <option value=\"hr\">Hrvatska</option>\n                        <option *ngFor=\"let country of countries\" value=\"country.Code\">{{country.Name}}</option>\n                    </select>\n                </td>\n            </tr>\n            \n            <tr>\n                <td>Startni broj:</td>\n                <td><input type=\"number\" id=\"bib\" placeholder=\"242\"/></td>\n            </tr>\n            <tr>\n                <td></td>\n                <td>\n                    <button (click)=\"addAthlete();\">Registriraj atletičara</button>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div id=\"newResult\" *ngIf=\"newResult\">\n        <form (ngSubmit)=\"addResult();\">\n        <table>\n            <tr>\n                <td colspan=\"3\">\n                    <h4>Novi rezultat</h4>\n                </td>\n            </tr>\n            <tr>\n                <td>Startni broj:</td>\n                <td>\n                    <input type=\"number\" id=\"athlete\"/>\n                    \n                </td>\n                </tr>\n            <tr>\n                <td>Rezultat:</td>\n                <td><input type=\"text\" id=\"result\" placeholder=\"02:28:23\"></td>\n            </tr>\n            <tr>\n                <td>Discliplina: </td>\n                <td>\n                    <select id=\"discipline\">\n                        <option *ngFor=\"let discipline of disciplines\">\n                            {{discipline}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td>Tip mjerenja: </td>\n                <td>\n                    <select id=\"measurment\">\n                        <option *ngFor=\"let measurment of measurments\">\n                            {{measurment}}\n                        </option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td></td>\n                <td>\n                    <input type=\"submit\" value=\"Dodaj rezultat\"/>\n                </td>\n            </tr>\n        </table>\n        </form>\n    </div>\n    <br>\n    <div *ngIf=\"editId != -1\">\n        <h4>\n            Eidtiranje rezultata\n        </h4>\n        \n        <form (ngSubmit)=\"editResult();\">\n            <table>\n                <tr>\n                    <td>\n                        Startni broj\n                    </td>\n                    <td>\n                        <input id=\"editBib\" type=\"number\" #bibNumber/>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Disciplina      \n                    </td>\n                    <td>\n                        <select id=\"editDiscipline\" #discipline>\n                                <option *ngFor=\"let discipline of disciplines\">\n                                    {{discipline}}\n                                </option>\n                        </select>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Vrijeme\n                    </td>\n                    <td>\n                        <input id=\"editTime\" type=\"text\"/>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" style=\"text-align:center;\">\n                        <input type=\"submit\" value=\"Editiraj\"/>\n                    </td>\n                </tr>\n            </table>\n        </form>\n    </div>\n    <br> \n    <h4>\n        Zadnji 10 dodanih rezultata\n    </h4>\n    <table class=\"table\">\n        <tr>\n            <th>Redni broj</th>\n            <th>Startni broj</th>\n            <th>Disciplina</th>\n            <th>Vrijeme</th>\n            <th>Bodovi</th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let result of results; let i = index\" [ngClass]=\"{'selected': editId == i}\">\n            \n            <td>\n                {{i+1}}.\n            </td>\n            <td>\n                {{bibs[i]}}\n            </td>\n            <td>\n                {{result.discipline}}\n            </td>\n            <td>\n                {{result.resultRepresentation}}\n            </td>\n            <td>\n                {{result.points}}\n            </td>\n            <td>\n                <img class=\"image\" src=\"assets/images/edit.png\" (click)=\"setEditId(i)\"/>\n                <img class=\"image\" src=\"assets/images/trash.png\" (click)=\"deleteById(result.id);\"/>\n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/competition/competition.ts":
/*!********************************************!*\
  !*** ./src/app/competition/competition.ts ***!
  \********************************************/
/*! exports provided: CompetitionToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionToolbarComponent", function() { return CompetitionToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/simple-rest-api-service */ "./src/app/service/simple-rest-api-service.ts");
/* harmony import */ var _service_RestConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/RestConstants */ "./src/app/service/RestConstants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _model_countires__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/countires */ "./src/app/model/countires.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompetitionToolbarComponent = /** @class */ (function () {
    function CompetitionToolbarComponent(restService, route) {
        this.restService = restService;
        this.route = route;
        this.title = 'Aplikacija za računanje IAAF bodova';
        this.author = "Dario Sindičić, AK Maksimir, 2018.";
        this.results = [];
        this.editId = -1;
        this.disciplines = [];
        this.measurments = [];
        this.athletes = [];
        this.newResult = false;
        this.newAthlete = false;
        this.showAthletes = false;
        this.bibs = new Array();
        this.competition = ({
            id: 0,
            name: "",
            authorId: -2,
            competitionType: "s"
        });
        this.userId = _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserId();
        this.countries = _model_countires__WEBPACK_IMPORTED_MODULE_5__["Countries"].list;
    }
    CompetitionToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.competitionId = params['id'];
        });
        this.restService.getUrlService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_COMPETITION_INFO + "/" + this.competitionId).subscribe(function (next) {
            _this.competition = next;
            if (_this.competition.authorId != _this.userId)
                return;
            _this.initResults();
            _this.initMeasurment();
            _this.initDisciplines();
        });
    };
    CompetitionToolbarComponent.prototype.showNewResult = function () {
        this.newResult = !this.newResult;
        this.newAthlete = false;
        this.showAthletes = false;
    };
    CompetitionToolbarComponent.prototype.showNewAthlete = function () {
        this.newAthlete = !this.newAthlete;
        this.newResult = false;
        this.showAthletes = false;
    };
    CompetitionToolbarComponent.prototype.addResult = function () {
        var _this = this;
        var bib = document.getElementById("athlete").value;
        var resultValue = document.getElementById("result").value;
        var discipline = document.getElementById("discipline").value;
        var measurment = document.getElementById("measurment").value;
        //TODO get athleteID with bib and competitionId
        this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_ATHLETE_COMPID_AND_BIB, { competitionId: this.competitionId,
            bib: bib }).subscribe(function (next) {
            if (next == null) {
                alert("Ne postoji atletičar sa takvim starnim brojem.");
            }
            else {
                var result = ({
                    id: 0,
                    competitionId: _this.competitionId,
                    athleteId: next.id,
                    discipline: discipline,
                    measurement: measurment,
                    resultRepresentation: resultValue
                });
                _this.restService.updateService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].ADD_RESULT, result).subscribe(function (data) {
                    alert("Dodan je rezultat.");
                    _this.showNewResult();
                    _this.initResults();
                }, function (err) { return alert("Dogodila se pogreška.\n"); });
            }
        });
    };
    CompetitionToolbarComponent.prototype.addAthlete = function () {
        var _this = this;
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var gender = document.getElementById("gender").value;
        var date = document.getElementById("dateOfBirth").value;
        var dateOfBirth = date;
        var club = document.getElementById("club").value;
        var country = document.getElementById("country").value;
        var bib = document.getElementById("bib").value;
        var object = ({
            id: 0,
            competitionId: this.competitionId,
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: dateOfBirth,
            gender: gender,
            club: club,
            country: country,
            bib: bib
        });
        this.restService.updateService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].ADD_ATHLETE, object).subscribe(function (data) {
            alert("Atletičar je dodan.");
            _this.newAthlete = false;
        }, function (err) { return alert("Dogodila se pogreška.\n" + err); });
    };
    CompetitionToolbarComponent.prototype.showRegistedAthletes = function () {
        this.getAthletes();
        this.showAthletes = !this.showAthletes;
        this.newAthlete = false;
        this.newResult = false;
    };
    CompetitionToolbarComponent.prototype.getAthletes = function () {
        var _this = this;
        var array = [];
        this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_ATHLETES_COMP, { competitionId: this.competitionId }).subscribe(function (next) {
            _this.athletes = next;
        });
    };
    CompetitionToolbarComponent.prototype.initResults = function () {
        var _this = this;
        this.results = [];
        this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_RESULTS, { id: this.competitionId }).subscribe(function (next) {
            _this.results = next;
            _this.bibs = new Array(_this.results.length);
            _this.results.reverse();
            var _loop_1 = function (i) {
                _this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_ATHLETE_INFO, { id: _this.results[i].athleteId }).subscribe(function (_athlete) {
                    _this.bibs[i] = _athlete.bib;
                });
            };
            for (var i = 0; i < _this.results.length; ++i) {
                _loop_1(i);
            }
        });
    };
    CompetitionToolbarComponent.prototype.initDisciplines = function () {
        var _this = this;
        this.restService.getUrlService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].LIST_DISCIPLINES).subscribe(function (next) {
            _this.disciplines = next;
        });
    };
    CompetitionToolbarComponent.prototype.initMeasurment = function () {
        var _this = this;
        this.restService.getUrlService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].LIST_MEASURMENT).subscribe(function (next) {
            _this.measurments = next;
        });
    };
    CompetitionToolbarComponent.prototype.editResult = function () {
        var _this = this;
        var time = document.getElementById("editTime").value;
        var discipline = document.getElementById("editDiscipline").value;
        var bib = document.getElementById("editBib").value;
        this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_ATHLETE_COMPID_AND_BIB, { competitionId: this.competitionId,
            bib: bib }).subscribe(function (next) {
            console.log("hjk");
            if (next == null) {
                //ERROR !!!!!!!!!!!!!!!!!!!
                alert("Pod time startnim brojem nitko nije registriran.");
            }
            else {
                console.log("hjk");
                _this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].UPDATE_RESULT, { id: _this.results[_this.editId].id,
                    athleteId: next.id,
                    resultRepresentation: time,
                    discipline: discipline }).subscribe(function (data) {
                    _this.editId = -1;
                    _this.initResults();
                    alert("Ažuriranje uspješno.");
                });
            }
        });
    };
    CompetitionToolbarComponent.prototype.setEditId = function (id) {
        this.editId = id;
    };
    CompetitionToolbarComponent.prototype.deleteById = function (id) {
        var _this = this;
        if (confirm("Jesi li siguran da želiš obrisati rezultat?")) {
            this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].DELETE_RESULT, { id: id }).subscribe(function (data) {
                alert("Obrisano");
                _this.initResults();
            });
        }
    };
    CompetitionToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'competition/:id',
            template: __webpack_require__(/*! ./competition.html */ "./src/app/competition/competition.html"),
            styles: [__webpack_require__(/*! ./competition.css */ "./src/app/competition/competition.css")],
            host: {
                '(document:click)': 'handleClick($event)',
            }
        }),
        __metadata("design:paramtypes", [_service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["SimpleRestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CompetitionToolbarComponent);
    return CompetitionToolbarComponent;
}());



/***/ }),

/***/ "./src/app/competitions/competitions.css":
/*!***********************************************!*\
  !*** ./src/app/competitions/competitions.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".component{\n    margin-top: 50px;\n    \n    margin-right: 100px;\n    margin-left: 100px;\n}\ntr:hover {background-color:#f5f5f5;}\n.table {\n    width: 95%;\n    /*background-color: rgb(77, 238, 238);*/\n    margin-left: 40px;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/competitions/competitions.html":
/*!************************************************!*\
  !*** ./src/app/competitions/competitions.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"component\">\n    <button *ngIf=\"ableToAddCompetition\" (click)=\"showNewCompetition();\">Dodaj natjecanje</button>\n    <div id=\"newCompetition\" *ngIf=\"newCompetition\">\n        <table>\n            <tr>\n                <td>Naziv natjecanja:</td>\n                <td><input type=\"text\" id=\"competitionName\" placeholder=\"Državno prvenstvo u višeboju za veterane\"></td>\n            </tr>\n            <tr>\n                <td>Tip natjecanja</td>\n                <td>\n                    <select id=\"competitionType\">\n                        <option value=\"OUTDOOR\">Vanjsko</option>\n                        <option value=\"INDOOR\">Dvoransko</option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td></td>\n                <td><button (click)=\"addCompetition();\">Dodaj natjecanje</button></td>\n            </tr>\n        </table>\n    </div>\n    <br> \n    <br>\n    <h3>Natjecanja</h3>\n    <table class=\"table\" border=\"1\">\n        <tr>\n            <td>\n                Redni broj\n            </td>\n            <td>\n                Naziv natjecanja\n            </td>\n            <td>\n                Tip natjecanja\n            </td>\n            <td>\n                Rezultati\n            </td>\n        </tr>\n        <tr *ngFor=\"let competition of competitions; let i = index\">\n            <td>\n                {{i+1}}.\n            </td>\n            <td>\n                <div *ngIf=\"userId == competition.authorId\">\n                    <a href=\"/competition/{{competition.id}}\">{{competition.name}}</a>\n                </div>\n                <div *ngIf=\"userId != competition.authorId\">\n                        {{competition.name}}\n                </div>\n            </td>\n            <td>\n                {{competition.competitionType}}\n            </td>\n            <td>\n                <a href=\"/results/{{i}}\">Rezultati</a>\n            </td>\n            <td *ngIf=\"userId == competition.authorId\">\n                <!--<button (click)=\"deleteCompetition(competition.id);\">Delete</button>-->\n                <img src=\"assets/images/trash.png\" height=\"40\" width=\"40\" (click)=\"deleteCompetition(competition.id);\"/>\n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/competitions/competitions.ts":
/*!**********************************************!*\
  !*** ./src/app/competitions/competitions.ts ***!
  \**********************************************/
/*! exports provided: CompetitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsComponent", function() { return CompetitionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/simple-rest-api-service */ "./src/app/service/simple-rest-api-service.ts");
/* harmony import */ var _service_RestConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/RestConstants */ "./src/app/service/RestConstants.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompetitionsComponent = /** @class */ (function () {
    function CompetitionsComponent(restService) {
        this.restService = restService;
        this.title = 'Aplikacija za računanje IAAF bodova';
        this.author = "Dario Sindičić, AK Maksimir, 2018.";
        this.competitions = [];
        this.newCompetition = false;
        this.ableToAddCompetition = false;
        this.initCompetitions();
        this.userId = _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getUserId();
        if (this.userId != -1) {
            this.ableToAddCompetition = true;
        }
    }
    CompetitionsComponent.prototype.ngOnInit = function () { };
    CompetitionsComponent.prototype.showNewCompetition = function () {
        if (this.userId == -1) {
            this.newCompetition = false;
            return;
        }
        this.newCompetition = !this.newCompetition;
    };
    CompetitionsComponent.prototype.addCompetition = function () {
        var _this = this;
        if (this.userId == -1)
            return;
        var competitionName = document.getElementById("competitionName").value;
        var competitionType = document.getElementById("competitionType").value;
        var competition = ({
            id: 0,
            name: competitionName,
            competitionType: competitionType,
            authorId: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"].getUserId()
        });
        this.restService.updateService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].ADD_COMPETITION, competition).subscribe(function (data) {
            alert("Natjecanje je dodano.");
            _this.showNewCompetition();
            _this.initCompetitions();
        }, function (err) { return alert("Dogodila se pogreška.\n"); });
    };
    CompetitionsComponent.prototype.initCompetitions = function () {
        var _this = this;
        this.competitions = [];
        this.restService.getUrlService(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_COMPETITIONS).subscribe(function (next) {
            _this.competitions = next;
            for (var i = 0; i < _this.competitions.length; ++i) {
                if (_this.competitions[i].competitionType == "OUTDOOR") {
                    _this.competitions[i].competitionType = "Vanjsko";
                }
                else {
                    _this.competitions[i].competitionType = "Dvoransko";
                }
            }
        });
    };
    CompetitionsComponent.prototype.deleteCompetition = function (id) {
        var _this = this;
        if (confirm("Jeste li sigurni da želite obrisati natjecanje?")) {
            this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].DELETE_COMPETITION, { id: id }).subscribe(function (data) {
                alert("Natjecanje je obrisano.");
                _this.initCompetitions();
            }, function (err) {
                alert("Dogodila se pogreška.");
            });
        }
    };
    CompetitionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'competitions',
            template: __webpack_require__(/*! ./competitions.html */ "./src/app/competitions/competitions.html"),
            styles: [__webpack_require__(/*! ./competitions.css */ "./src/app/competitions/competitions.css")]
        }),
        __metadata("design:paramtypes", [_service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["SimpleRestApiService"]])
    ], CompetitionsComponent);
    return CompetitionsComponent;
}());



/***/ }),

/***/ "./src/app/main/main.css":
/*!*******************************!*\
  !*** ./src/app/main/main.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.html":
/*!********************************!*\
  !*** ./src/app/main/main.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fdsfdsfds\nfdsfds"

/***/ }),

/***/ "./src/app/main/main.ts":
/*!******************************!*\
  !*** ./src/app/main/main.ts ***!
  \******************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.title = 'Aplikacija za računanje IAAF bodova';
        this.author = "Dario Sindičić, AK Maksimir, 2018.";
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.login = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.html */ "./src/app/main/main.html"),
            styles: [__webpack_require__(/*! ./main.css */ "./src/app/main/main.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/model/countires.ts":
/*!************************************!*\
  !*** ./src/app/model/countires.ts ***!
  \************************************/
/*! exports provided: Countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
var Countries = /** @class */ (function () {
    function Countries() {
    }
    Countries.list = [{ "Code": "AF", "Name": "Afghanistan" }, { "Code": "AX", "Name": "\u00c5land Islands" }, { "Code": "AL", "Name": "Albania" }, { "Code": "DZ", "Name": "Algeria" }, { "Code": "AS", "Name": "American Samoa" }, { "Code": "AD", "Name": "Andorra" }, { "Code": "AO", "Name": "Angola" }, { "Code": "AI", "Name": "Anguilla" }, { "Code": "AQ", "Name": "Antarctica" }, { "Code": "AG", "Name": "Antigua and Barbuda" }, { "Code": "AR", "Name": "Argentina" }, { "Code": "AM", "Name": "Armenia" }, { "Code": "AW", "Name": "Aruba" }, { "Code": "AU", "Name": "Australia" }, { "Code": "AT", "Name": "Austria" }, { "Code": "AZ", "Name": "Azerbaijan" }, { "Code": "BS", "Name": "Bahamas" }, { "Code": "BH", "Name": "Bahrain" }, { "Code": "BD", "Name": "Bangladesh" }, { "Code": "BB", "Name": "Barbados" }, { "Code": "BY", "Name": "Belarus" }, { "Code": "BE", "Name": "Belgium" }, { "Code": "BZ", "Name": "Belize" }, { "Code": "BJ", "Name": "Benin" }, { "Code": "BM", "Name": "Bermuda" }, { "Code": "BT", "Name": "Bhutan" }, { "Code": "BO", "Name": "Bolivia, Plurinational State of" }, { "Code": "BQ", "Name": "Bonaire, Sint Eustatius and Saba" }, { "Code": "BA", "Name": "Bosnia and Herzegovina" }, { "Code": "BW", "Name": "Botswana" }, { "Code": "BV", "Name": "Bouvet Island" }, { "Code": "BR", "Name": "Brazil" }, { "Code": "IO", "Name": "British Indian Ocean Territory" }, { "Code": "BN", "Name": "Brunei Darussalam" }, { "Code": "BG", "Name": "Bulgaria" }, { "Code": "BF", "Name": "Burkina Faso" }, { "Code": "BI", "Name": "Burundi" }, { "Code": "KH", "Name": "Cambodia" }, { "Code": "CM", "Name": "Cameroon" }, { "Code": "CA", "Name": "Canada" }, { "Code": "CV", "Name": "Cape Verde" }, { "Code": "KY", "Name": "Cayman Islands" }, { "Code": "CF", "Name": "Central African Republic" }, { "Code": "TD", "Name": "Chad" }, { "Code": "CL", "Name": "Chile" }, { "Code": "CN", "Name": "China" }, { "Code": "CX", "Name": "Christmas Island" }, { "Code": "CC", "Name": "Cocos (Keeling) Islands" }, { "Code": "CO", "Name": "Colombia" }, { "Code": "KM", "Name": "Comoros" }, { "Code": "CG", "Name": "Congo" }, { "Code": "CD", "Name": "Congo, the Democratic Republic of the" }, { "Code": "CK", "Name": "Cook Islands" }, { "Code": "CR", "Name": "Costa Rica" }, { "Code": "CI", "Name": "C\u00f4te d'Ivoire" }, { "Code": "CU", "Name": "Cuba" }, { "Code": "CW", "Name": "Cura\u00e7ao" }, { "Code": "CY", "Name": "Cyprus" }, { "Code": "CZ", "Name": "Czech Republic" }, { "Code": "DK", "Name": "Denmark" }, { "Code": "DJ", "Name": "Djibouti" }, { "Code": "DM", "Name": "Dominica" }, { "Code": "DO", "Name": "Dominican Republic" }, { "Code": "EC", "Name": "Ecuador" }, { "Code": "EG", "Name": "Egypt" }, { "Code": "SV", "Name": "El Salvador" }, { "Code": "GQ", "Name": "Equatorial Guinea" }, { "Code": "ER", "Name": "Eritrea" }, { "Code": "EE", "Name": "Estonia" }, { "Code": "ET", "Name": "Ethiopia" }, { "Code": "FK", "Name": "Falkland Islands (Malvinas)" }, { "Code": "FO", "Name": "Faroe Islands" }, { "Code": "FJ", "Name": "Fiji" }, { "Code": "FI", "Name": "Finland" }, { "Code": "FR", "Name": "France" }, { "Code": "GF", "Name": "French Guiana" }, { "Code": "PF", "Name": "French Polynesia" }, { "Code": "TF", "Name": "French Southern Territories" }, { "Code": "GA", "Name": "Gabon" }, { "Code": "GM", "Name": "Gambia" }, { "Code": "GE", "Name": "Georgia" }, { "Code": "DE", "Name": "Germany" }, { "Code": "GH", "Name": "Ghana" }, { "Code": "GI", "Name": "Gibraltar" }, { "Code": "GR", "Name": "Greece" }, { "Code": "GL", "Name": "Greenland" }, { "Code": "GD", "Name": "Grenada" }, { "Code": "GP", "Name": "Guadeloupe" }, { "Code": "GU", "Name": "Guam" }, { "Code": "GT", "Name": "Guatemala" }, { "Code": "GG", "Name": "Guernsey" }, { "Code": "GN", "Name": "Guinea" }, { "Code": "GW", "Name": "Guinea-Bissau" }, { "Code": "GY", "Name": "Guyana" }, { "Code": "HT", "Name": "Haiti" }, { "Code": "HM", "Name": "Heard Island and McDonald Islands" }, { "Code": "VA", "Name": "Holy See (Vatican City State)" }, { "Code": "HN", "Name": "Honduras" }, { "Code": "HK", "Name": "Hong Kong" }, { "Code": "HU", "Name": "Hungary" }, { "Code": "IS", "Name": "Iceland" }, { "Code": "IN", "Name": "India" }, { "Code": "ID", "Name": "Indonesia" }, { "Code": "IR", "Name": "Iran, Islamic Republic of" }, { "Code": "IQ", "Name": "Iraq" }, { "Code": "IE", "Name": "Ireland" }, { "Code": "IM", "Name": "Isle of Man" }, { "Code": "IL", "Name": "Israel" }, { "Code": "IT", "Name": "Italy" }, { "Code": "JM", "Name": "Jamaica" }, { "Code": "JP", "Name": "Japan" }, { "Code": "JE", "Name": "Jersey" }, { "Code": "JO", "Name": "Jordan" }, { "Code": "KZ", "Name": "Kazakhstan" }, { "Code": "KE", "Name": "Kenya" }, { "Code": "KI", "Name": "Kiribati" }, { "Code": "KP", "Name": "Korea, Democratic People's Republic of" }, { "Code": "KR", "Name": "Korea, Republic of" }, { "Code": "KW", "Name": "Kuwait" }, { "Code": "KG", "Name": "Kyrgyzstan" }, { "Code": "LA", "Name": "Lao People's Democratic Republic" }, { "Code": "LV", "Name": "Latvia" }, { "Code": "LB", "Name": "Lebanon" }, { "Code": "LS", "Name": "Lesotho" }, { "Code": "LR", "Name": "Liberia" }, { "Code": "LY", "Name": "Libya" }, { "Code": "LI", "Name": "Liechtenstein" }, { "Code": "LT", "Name": "Lithuania" }, { "Code": "LU", "Name": "Luxembourg" }, { "Code": "MO", "Name": "Macao" }, { "Code": "MK", "Name": "Macedonia, the Former Yugoslav Republic of" }, { "Code": "MG", "Name": "Madagascar" }, { "Code": "MW", "Name": "Malawi" }, { "Code": "MY", "Name": "Malaysia" }, { "Code": "MV", "Name": "Maldives" }, { "Code": "ML", "Name": "Mali" }, { "Code": "MT", "Name": "Malta" }, { "Code": "MH", "Name": "Marshall Islands" }, { "Code": "MQ", "Name": "Martinique" }, { "Code": "MR", "Name": "Mauritania" }, { "Code": "MU", "Name": "Mauritius" }, { "Code": "YT", "Name": "Mayotte" }, { "Code": "MX", "Name": "Mexico" }, { "Code": "FM", "Name": "Micronesia, Federated States of" }, { "Code": "MD", "Name": "Moldova, Republic of" }, { "Code": "MC", "Name": "Monaco" }, { "Code": "MN", "Name": "Mongolia" }, { "Code": "ME", "Name": "Montenegro" }, { "Code": "MS", "Name": "Montserrat" }, { "Code": "MA", "Name": "Morocco" }, { "Code": "MZ", "Name": "Mozambique" }, { "Code": "MM", "Name": "Myanmar" }, { "Code": "NA", "Name": "Namibia" }, { "Code": "NR", "Name": "Nauru" }, { "Code": "NP", "Name": "Nepal" }, { "Code": "NL", "Name": "Netherlands" }, { "Code": "NC", "Name": "New Caledonia" }, { "Code": "NZ", "Name": "New Zealand" }, { "Code": "NI", "Name": "Nicaragua" }, { "Code": "NE", "Name": "Niger" }, { "Code": "NG", "Name": "Nigeria" }, { "Code": "NU", "Name": "Niue" }, { "Code": "NF", "Name": "Norfolk Island" }, { "Code": "MP", "Name": "Northern Mariana Islands" }, { "Code": "NO", "Name": "Norway" }, { "Code": "OM", "Name": "Oman" }, { "Code": "PK", "Name": "Pakistan" }, { "Code": "PW", "Name": "Palau" }, { "Code": "PS", "Name": "Palestine, State of" }, { "Code": "PA", "Name": "Panama" }, { "Code": "PG", "Name": "Papua New Guinea" }, { "Code": "PY", "Name": "Paraguay" }, { "Code": "PE", "Name": "Peru" }, { "Code": "PH", "Name": "Philippines" }, { "Code": "PN", "Name": "Pitcairn" }, { "Code": "PL", "Name": "Poland" }, { "Code": "PT", "Name": "Portugal" }, { "Code": "PR", "Name": "Puerto Rico" }, { "Code": "QA", "Name": "Qatar" }, { "Code": "RE", "Name": "R\u00e9union" }, { "Code": "RO", "Name": "Romania" }, { "Code": "RU", "Name": "Russian Federation" }, { "Code": "RW", "Name": "Rwanda" }, { "Code": "BL", "Name": "Saint Barth\u00e9lemy" }, { "Code": "SH", "Name": "Saint Helena, Ascension and Tristan da Cunha" }, { "Code": "KN", "Name": "Saint Kitts and Nevis" }, { "Code": "LC", "Name": "Saint Lucia" }, { "Code": "MF", "Name": "Saint Martin (French part)" }, { "Code": "PM", "Name": "Saint Pierre and Miquelon" }, { "Code": "VC", "Name": "Saint Vincent and the Grenadines" }, { "Code": "WS", "Name": "Samoa" }, { "Code": "SM", "Name": "San Marino" }, { "Code": "ST", "Name": "Sao Tome and Principe" }, { "Code": "SA", "Name": "Saudi Arabia" }, { "Code": "SN", "Name": "Senegal" }, { "Code": "RS", "Name": "Serbia" }, { "Code": "SC", "Name": "Seychelles" }, { "Code": "SL", "Name": "Sierra Leone" }, { "Code": "SG", "Name": "Singapore" }, { "Code": "SX", "Name": "Sint Maarten (Dutch part)" }, { "Code": "SK", "Name": "Slovakia" }, { "Code": "SI", "Name": "Slovenia" }, { "Code": "SB", "Name": "Solomon Islands" }, { "Code": "SO", "Name": "Somalia" }, { "Code": "ZA", "Name": "South Africa" }, { "Code": "GS", "Name": "South Georgia and the South Sandwich Islands" }, { "Code": "SS", "Name": "South Sudan" }, { "Code": "ES", "Name": "Spain" }, { "Code": "LK", "Name": "Sri Lanka" }, { "Code": "SD", "Name": "Sudan" }, { "Code": "SR", "Name": "Suriname" }, { "Code": "SJ", "Name": "Svalbard and Jan Mayen" }, { "Code": "SZ", "Name": "Swaziland" }, { "Code": "SE", "Name": "Sweden" }, { "Code": "CH", "Name": "Switzerland" }, { "Code": "SY", "Name": "Syrian Arab Republic" }, { "Code": "TW", "Name": "Taiwan, Province of China" }, { "Code": "TJ", "Name": "Tajikistan" }, { "Code": "TZ", "Name": "Tanzania, United Republic of" }, { "Code": "TH", "Name": "Thailand" }, { "Code": "TL", "Name": "Timor-Leste" }, { "Code": "TG", "Name": "Togo" }, { "Code": "TK", "Name": "Tokelau" }, { "Code": "TO", "Name": "Tonga" }, { "Code": "TT", "Name": "Trinidad and Tobago" }, { "Code": "TN", "Name": "Tunisia" }, { "Code": "TR", "Name": "Turkey" }, { "Code": "TM", "Name": "Turkmenistan" }, { "Code": "TC", "Name": "Turks and Caicos Islands" }, { "Code": "TV", "Name": "Tuvalu" }, { "Code": "UG", "Name": "Uganda" }, { "Code": "UA", "Name": "Ukraine" }, { "Code": "AE", "Name": "United Arab Emirates" }, { "Code": "GB", "Name": "United Kingdom" }, { "Code": "US", "Name": "United States" }, { "Code": "UM", "Name": "United States Minor Outlying Islands" }, { "Code": "UY", "Name": "Uruguay" }, { "Code": "UZ", "Name": "Uzbekistan" }, { "Code": "VU", "Name": "Vanuatu" }, { "Code": "VE", "Name": "Venezuela, Bolivarian Republic of" }, { "Code": "VN", "Name": "Viet Nam" }, { "Code": "VG", "Name": "Virgin Islands, British" }, { "Code": "VI", "Name": "Virgin Islands, U.S." }, { "Code": "WF", "Name": "Wallis and Futuna" }, { "Code": "EH", "Name": "Western Sahara" }, { "Code": "YE", "Name": "Yemen" }, { "Code": "ZM", "Name": "Zambia" }, { "Code": "ZW", "Name": "Zimbabwe" }];
    return Countries;
}());



/***/ }),

/***/ "./src/app/results/results.css":
/*!*************************************!*\
  !*** ./src/app/results/results.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n    width: -moz-available;\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/results/results.html":
/*!**************************************!*\
  !*** ./src/app/results/results.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <tr>\n        <td>Redni broj</td>\n        <td></td>\n        <td>Ime i Prezime</td>\n        <td>Kategorija</td>\n        <td>Klub</td>\n        <td *ngFor=\"let discipline of disciplines\">\n            {{discipline}}\n        </td>\n        <td>Zbroj</td>\n    </tr>\n    <tr *ngFor=\"let result of results; let i = index\">\n        <td>{{i+1}}.</td>\n        <td><img src=\"assets/images/flags/{{result.user.country}}.png\"></td>\n        <td>{{result.user.firstName}}&nbsp;{{result.user.lastName}}</td>\n        <td>M30</td>\n        <td>{{result.user.club}}</td>\n        <td *ngFor=\"let point of result.points\">\n            {{point}}\n        </td>\n        <td>{{result.total}}</td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/results/results.ts":
/*!************************************!*\
  !*** ./src/app/results/results.ts ***!
  \************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/simple-rest-api-service */ "./src/app/service/simple-rest-api-service.ts");
/* harmony import */ var _service_RestConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/RestConstants */ "./src/app/service/RestConstants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(restService, route) {
        this.restService = restService;
        this.route = route;
        this.title = 'Aplikacija za računanje IAAF bodova';
        this.author = "Dario Sindičić, AK Maksimir, 2018.";
        this.competitionId = 0;
        this.resultsMap = new Map();
        this.disciplines = new Set();
        this.results = new Array();
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.competitionId = params['id'];
            _this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_RESULTS, { id: _this.competitionId }).subscribe(function (next) {
                next.forEach(function (element) {
                    if (_this.resultsMap.has(element.athleteId)) {
                        var list = _this.resultsMap.get(element.athleteId);
                        list.push(element);
                        _this.resultsMap.set(element.athleteId, list);
                    }
                    else {
                        _this.resultsMap.set(element.athleteId, new Array(element));
                    }
                    _this.disciplines.add(element.discipline);
                });
                _this.constructResult();
            });
        });
    };
    ResultsComponent.prototype.constructResult = function () {
        var _this = this;
        this.resultsMap.forEach(function (value, key) {
            var result = ({
                athleteId: 0,
                user: _this.getEmptyUser(),
                total: 0,
                points: new Array()
            });
            _this.disciplines.forEach(function (discipline) {
                var point = 0;
                for (var i = 0; i < value.length; ++i) {
                    console.log(value[i].discipline + " " + discipline + " " + value[i].points);
                    if (value[i].discipline == discipline) {
                        point = value[i].points;
                    }
                }
                console.log("points " + point);
                result.points.push(point);
                console.log(result.points);
                result.total += point;
            });
            console.log(result);
            result.athleteId = key;
            _this.results.push(result);
        });
        this.results.sort(function (obj1, obj2) {
            if (obj1.total > obj2.total) {
                return -1;
            }
            else if (obj1.total < obj2.total) {
                return 1;
            }
            else {
                return 0;
            }
        });
        this.getUsersInfo();
        console.log("GOTOVO");
        console.log(this.results);
    };
    ResultsComponent.prototype.getUsersInfo = function () {
        var _this = this;
        this.results.forEach(function (element) {
            //console.log(element);
            _this.restService.getUrlServiceWithParams(_service_RestConstants__WEBPACK_IMPORTED_MODULE_2__["RestConstants"].GET_ATHLETE_INFO, { id: element.athleteId }).subscribe(function (next) {
                element.user = next;
            });
        });
    };
    ResultsComponent.prototype.getEmptyUser = function () {
        return ({
            id: 0,
            competitionId: 0,
            firstName: "",
            lastName: "",
            country: "",
            club: "",
            gender: "",
            dateOfBirth: "",
            bib: ""
        });
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'results',
            template: __webpack_require__(/*! ./results.html */ "./src/app/results/results.html"),
            styles: [__webpack_require__(/*! ./results.css */ "./src/app/results/results.css")]
        }),
        __metadata("design:paramtypes", [_service_simple_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["SimpleRestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/service/ComponentInjectorService.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/ComponentInjectorService.ts ***!
  \*****************************************************/
/*! exports provided: ComponentInjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentInjectorService", function() { return ComponentInjectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ComponentInjectorService = /** @class */ (function () {
    function ComponentInjectorService(factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    ComponentInjectorService.prototype.setRootViewHolder = function (rootView) {
        this.rootView = rootView;
    };
    ComponentInjectorService.prototype.fillComponent = function (componentClass) {
        var componentFactory = this.factoryResolver.resolveComponentFactory(componentClass);
        var component = componentFactory.create(this.rootView.parentInjector);
        this.rootView.clear();
        this.rootView.insert(component.hostView);
    };
    ComponentInjectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])),
        __metadata("design:paramtypes", [Object])
    ], ComponentInjectorService);
    return ComponentInjectorService;
}());



/***/ }),

/***/ "./src/app/service/RestConstants.ts":
/*!******************************************!*\
  !*** ./src/app/service/RestConstants.ts ***!
  \******************************************/
/*! exports provided: RestConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestConstants", function() { return RestConstants; });
var RestConstants = /** @class */ (function () {
    function RestConstants() {
    }
    RestConstants.PREFIX = "http://127.0.0.1:8080/";
    RestConstants.REST_API_PREFIX = RestConstants.PREFIX + "api/";
    RestConstants.CHECK_USER = RestConstants.REST_API_PREFIX + "user";
    RestConstants.LIST_GENDERS = RestConstants.REST_API_PREFIX + "listGenders";
    RestConstants.LIST_CATEGORIES = RestConstants.REST_API_PREFIX + "listCategories";
    RestConstants.LIST_DISCIPLINES = RestConstants.REST_API_PREFIX + "listDisciplines";
    RestConstants.LIST_MEASURMENT = RestConstants.REST_API_PREFIX + "listMeasurment";
    RestConstants.ADD_ATHLETE = RestConstants.REST_API_PREFIX + "athlete/add";
    RestConstants.ADD_COMPETITION = RestConstants.REST_API_PREFIX + "competitions/add";
    RestConstants.ADD_RESULT = RestConstants.REST_API_PREFIX + "result/add";
    RestConstants.GET_COMPETITIONS = RestConstants.REST_API_PREFIX + "competitions";
    RestConstants.GET_COMPETITION_INFO = RestConstants.REST_API_PREFIX + "competitions";
    RestConstants.GET_RESULTS = RestConstants.REST_API_PREFIX + "result/getCompetitionId/";
    RestConstants.GET_POINTS = RestConstants.REST_API_PREFIX + "getPoints";
    RestConstants.GET_ATHLETES_COMP = RestConstants.REST_API_PREFIX + "athlete/withCompetititonId";
    RestConstants.GET_ATHLETE_COMPID_AND_BIB = RestConstants.REST_API_PREFIX + "athlete/withCompetitionIdAndBib";
    RestConstants.GET_ATHLETE_INFO = RestConstants.REST_API_PREFIX + "athlete/id";
    RestConstants.DELETE_RESULT = RestConstants.REST_API_PREFIX + "result/deleteResult";
    RestConstants.DELETE_COMPETITION = RestConstants.REST_API_PREFIX + "competitions/deleteById";
    RestConstants.UPDATE_RESULT = RestConstants.REST_API_PREFIX + "result/updateResult";
    return RestConstants;
}());



/***/ }),

/***/ "./src/app/service/simple-rest-api-service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/simple-rest-api-service.ts ***!
  \****************************************************/
/*! exports provided: SimpleRestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRestApiService", function() { return SimpleRestApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleRestApiService = /** @class */ (function () {
    function SimpleRestApiService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" });
        this.options = { headers: this.headers };
    }
    SimpleRestApiService.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SimpleRestApiService.handleError = function (error) {
        var errorMessage = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    SimpleRestApiService.prototype.getUrlService = function (url) {
        return this.http.get(url, this.options);
    };
    SimpleRestApiService.prototype.getUrlServiceWithParams = function (url, jsonParams) {
        var options = {
            params: this.getParamsFromJSON(jsonParams),
        };
        return this.http.get(url, options);
    };
    SimpleRestApiService.prototype.updateService = function (url, object) {
        var body = JSON.stringify(object);
        return this.http.post(url, body, this.options);
    };
    SimpleRestApiService.prototype.getParamsFromJSON = function (jsonData) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        Object.keys(jsonData).forEach(function (key) {
            httpParams = httpParams.set(key, jsonData[key]);
        });
        return httpParams;
    };
    SimpleRestApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SimpleRestApiService);
    return SimpleRestApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dario/Documents/Projects/IaafScore/frontend/frontend-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map