(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "F5Gg":
/*!*************************************************************!*\
  !*** ./src/app/modules/admin/dashboard/dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "Tx3C");







const routes = [{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] }];
class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "Tx3C":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ "tfmr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function DashboardComponent_mat_grid_tile_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r1.link);
} }
class DashboardComponent {
    constructor(breakpointObserver, infoservice) {
        this.breakpointObserver = breakpointObserver;
        this.infoservice = infoservice;
        this.ResponsiveData = {
            breakpoint: 4,
            rowHeight: 400,
            isXLScreen: '(min-width: 1250px)',
            isLGScreen: '(max-width: 1250px)',
            isMDScreen: '(max-width: 1000px)',
            isSMScreen: '(max-width: 780px)',
            isMSScreen: '(max-width: 460px)',
        };
        this.layoutChangesMedia = this.breakpointObserver.observe([
            this.ResponsiveData.isXLScreen,
            this.ResponsiveData.isLGScreen,
            this.ResponsiveData.isMDScreen,
            this.ResponsiveData.isSMScreen,
            this.ResponsiveData.isMSScreen,
        ]);
    }
    layoutChange(result) {
        for (const item in result) {
            if (result[item]) {
                switch (item) {
                    case this.ResponsiveData.isXLScreen:
                        this.ResponsiveData.breakpoint = 4;
                        this.ResponsiveData.rowHeight = 380;
                        break;
                    case this.ResponsiveData.isLGScreen:
                        this.ResponsiveData.breakpoint = 3;
                        this.ResponsiveData.rowHeight = 320;
                        break;
                    case this.ResponsiveData.isMDScreen:
                        this.ResponsiveData.breakpoint = 3;
                        this.ResponsiveData.rowHeight = 280;
                        break;
                    case this.ResponsiveData.isSMScreen:
                        this.ResponsiveData.breakpoint = 2;
                        this.ResponsiveData.rowHeight = 230;
                        break;
                    case this.ResponsiveData.isMSScreen:
                        this.ResponsiveData.breakpoint = 1;
                        break;
                }
            }
        }
    }
    ngOnInit() {
        this.layoutChangesMedia.subscribe((result) => {
            this.layoutChange(result.breakpoints);
        });
        this.CARDSDATA = [
            {
                title: 'Факультети',
                icon: 'account_balance',
                count: null,
                link: '/admin/faculties',
            },
            {
                title: 'Групи',
                icon: 'groups',
                count: null,
                link: '/admin/group',
            },
            {
                title: 'Спеціальності',
                icon: 'dns',
                count: null,
                link: '/admin/speciality',
            },
            {
                title: 'Предмети',
                icon: 'collections_bookmark',
                count: null,
                link: '/admin/subjects',
            },
            {
                title: 'Cтуденти',
                icon: 'how_to_reg',
                count: null,
                link: '/admin/group',
            },
            {
                title: 'Адміни',
                icon: 'supervised_user_circle',
                count: null,
                link: '/admin/admins',
            },
            {
                title: 'Результати',
                icon: 'insights',
                count: null,
                link: '/admin/results',
            },
            {
                title: 'Протокол',
                icon: 'contact_page',
                count: null,
                link: '/admin/protocol',
            },
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])({
            FacultiesNumber: this.infoservice.getFacultiesNumber(),
            GroupsNumber: this.infoservice.getGroupsNumber(),
            SpecialitiesNumber: this.infoservice.getSpecialitiesNumber(),
            SubjectNumber: this.infoservice.getSubjectsNumber(),
            StudentsNumber: this.infoservice.getStudentsNumber(),
            AdminsNumber: this.infoservice.getAdminsNumber(),
        }).subscribe((result) => {
            this.CARDSDATA.forEach((item, index) => {
                index === 0 ? (item.count = result.FacultiesNumber) : null;
                index === 1 ? (item.count = result.GroupsNumber) : null;
                index === 2 ? (item.count = result.SpecialitiesNumber) : null;
                index === 3 ? (item.count = result.SubjectNumber) : null;
                index === 4 ? (item.count = result.StudentsNumber) : null;
                index === 5 ? (item.count = result.AdminsNumber) : null;
            });
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])], decls: 7, vars: 3, consts: [[1, "grid-container"], [1, "mat-h1", "entity-title"], [1, "entity-title-icon"], [3, "cols", "rowHeight"], [4, "ngFor", "ngForOf"], [1, "dashboard-card"], [1, "dashboard-card-content"], [1, "dashboard-card-link", 3, "routerLink"], [1, "dashboard-card-content__container"], [1, "dashboard-card-content__icon"], ["mat-fab", "", "color", "primary", 1, "dashboard-card-content__count", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", 1, "dashboard-card-content__link", 3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0413\u043E\u043B\u043E\u0432\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_mat_grid_tile_6_Template, 14, 6, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.ResponsiveData.breakpoint)("rowHeight", ctx.ResponsiveData.rowHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CARDSDATA);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"]], styles: [".entity-title[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.entity-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.dashboard-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n}\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dashboard-card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dashboard-card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90%;\n  overflow: hidden;\n}\n.dashboard-card-content[_ngcontent-%COMP%]:hover   .dashboard-card-content__icon[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  transition: all 0.2s ease;\n}\n.dashboard-card-link[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.dashboard-card-content__container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.dashboard-card-content__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 10rem;\n  transition: all 0.2s ease;\n}\n@media screen and (max-width: 1250px) {\n  .dashboard-card-content__icon[_ngcontent-%COMP%] {\n    font-size: 6rem;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .dashboard-card-content__icon[_ngcontent-%COMP%] {\n    font-size: 5rem;\n    margin-bottom: 2rem;\n  }\n}\n.dashboard-card-content__count[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-flex;\n  color: white;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: 500;\n  right: -0.5rem;\n  top: -0.5rem;\n}\nmat-grid-tile[_ngcontent-%COMP%]:nth-child(7)   .dashboard-card-content__count[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-grid-tile[_ngcontent-%COMP%]:nth-child(8)   .dashboard-card-content__count[_ngcontent-%COMP%] {\n  display: none;\n}\n.dashboard-card-content__link[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n}\n@media screen and (max-width: 850px) {\n  .dashboard-card-content__icon[_ngcontent-%COMP%] {\n    font-size: 5rem;\n    margin-bottom: 2rem;\n  }\n\n  .dashboard-card-content__count[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n    font-size: 1.2rem;\n  }\n}\n@media screen and (max-width: 760px) {\n  .dashboard-card-content__link[_ngcontent-%COMP%] {\n    position: relative;\n    right: 0rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLGlCQUFBO0FBRko7QUFESTtFQUNJLGlCQUFBO0FBR1I7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBQ1o7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlBO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJO0lBQ0ksZUFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUhKO0FBT0k7RUFDSSxhQUFBO0FBSlI7QUFTSTtFQUNJLGFBQUE7QUFOUjtBQVVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQVBOOztFQVNFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQU5OO0FBQ0Y7QUFTQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0VBUE47QUFDRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW50aXR5LXRpdGxlIHtcbiAgICAmIG1hdC1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmRhc2hib2FyZC1jYXJkLWNvbnRlbnRfX2ljb24ge1xuICAgICAgICAgICAgY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGFzaGJvYXJkLWNhcmQtbGluayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnRfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGFzaGJvYXJkLWNhcmQtY29udGVudF9faWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjEyNTBweCkge1xuICAgIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50X19pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjEwMDBweCkge1xuICAgIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50X19pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnRfX2NvdW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB3aWR0aDogMy41cmVtO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcmlnaHQ6IC0wLjVyZW07XG4gICAgdG9wOiAtMC41cmVtO1xufVxuXG5tYXQtZ3JpZC10aWxlOm50aC1jaGlsZCg3KSB7XG4gICAgLmRhc2hib2FyZC1jYXJkLWNvbnRlbnRfX2NvdW50IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbm1hdC1ncmlkLXRpbGU6bnRoLWNoaWxkKDgpIHtcbiAgICAuZGFzaGJvYXJkLWNhcmQtY29udGVudF9fY291bnQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnRfX2xpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMXJlbTtcbiAgICBib3R0b206IDFyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDo4NTBweCkge1xuICAgIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50X19pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIH1cbiAgICAuZGFzaGJvYXJkLWNhcmQtY29udGVudF9fY291bnQge1xuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6NzYwcHgpIHtcbiAgICAuZGFzaGJvYXJkLWNhcmQtY29udGVudF9fbGluayB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IDByZW07XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
                providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]],
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }, { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"] }]; }, null); })();


/***/ }),

/***/ "tfmr":
/*!**************************************************************!*\
  !*** ./src/app/modules/admin/dashboard/dashboard.service.ts ***!
  \**************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class DashboardService {
    constructor(httpInstance) {
        this.httpInstance = httpInstance;
    }
    getFacultiesNumber() {
        return this.httpInstance
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL}Faculty/countRecords`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('numberOfRecords'));
    }
    getGroupsNumber() {
        return this.httpInstance
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL}Group/countRecords`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('numberOfRecords'));
    }
    getSpecialitiesNumber() {
        return this.httpInstance
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL}Speciality/countRecords`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('numberOfRecords'));
    }
    getSubjectsNumber() {
        return this.httpInstance
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL}Subject/countRecords`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('numberOfRecords'));
    }
    getStudentsNumber() {
        return this.httpInstance
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL}Student/countRecords`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('numberOfRecords'));
    }
    getAdminsNumber() {
        return this.httpInstance
            .get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASEURL}AdminUser/countRecords`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('numberOfRecords'));
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map