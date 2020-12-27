(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-player-test-player-module"],{

/***/ "DRwp":
/*!**********************************************************************!*\
  !*** ./src/app/modules/student/test-player/timer/timer.component.ts ***!
  \**********************************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Messages */ "R3lV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_test_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/test-player.service */ "+2A9");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/alert.service */ "Cmua");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");













const _c0 = function (a0, a1) { return { warning: a0, danger: a1 }; };
function TimerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.timer.minutes < 10 && ctx_r0.timer.hours == 0, ctx_r0.timer.minutes < 2 && ctx_r0.timer.hours == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.timer.hours, ":", ctx_r0.timer.minutes, ":", ctx_r0.timer.seconds, " ");
} }
function TimerComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0412\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0443... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TimerComponent {
    constructor(router, testPlayerService, alertService) {
        this.router = router;
        this.testPlayerService = testPlayerService;
        this.alertService = alertService;
        this.onCheck = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.time = {
            curtime: 0,
            unix_timestamp: 0,
            offset: 0,
        };
        this.timer = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
        this.timerInterval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
    }
    ngOnInit() {
        this.intervalSubscription = this.timerInterval$.subscribe(() => {
            this.createTimer();
        });
        this.getTestTime();
    }
    createTimer() {
        this.timer.hours = Math.floor(this.count / (1000 * 60 * 60));
        if (parseInt(this.timer.hours, 10) < 10) {
            this.timer.hours = '0' + this.timer.hours;
        }
        this.timer.minutes = Math.floor((this.count % (1000 * 60 * 60)) / (1000 * 60));
        if (parseInt(this.timer.minutes, 10) < 10) {
            this.timer.minutes = '0' + this.timer.minutes;
        }
        this.timer.seconds = Math.floor((this.count % (1000 * 60)) / 1000);
        if (parseInt(this.timer.seconds, 10) < 10) {
            this.timer.seconds = '0' + this.timer.seconds;
        }
        this.count -= 1000;
        if (this.count <= -1) {
            this.timer.hours = '00';
            this.timer.minutes = '00';
            this.timer.seconds = '00';
            this.finishTest(true);
        }
    }
    getTestTime() {
        this.timeForTest = this.test.time_for_test * 60 * 1000;
        this.getServerTimeAndSynchronize();
    }
    getServerTimeAndSynchronize() {
        this.timerSubscription = this.testPlayerService
            .getServerTime()
            .subscribe((response) => {
            this.time.curtime = response.unix_timestamp * 1000;
            this.startDate = new Date(this.time.curtime).getTime();
            this.endDate = this.startDate + this.timeForTest;
            this.count = this.endDate - this.startDate;
            this.getEndTestTime();
        }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["timerMessages"])('syncError'));
            this.router.navigate(['/student/profile']);
        });
    }
    getEndTestTime() {
        this.timerSubscription = this.testPlayerService
            .testPlayerGetEndTime()
            .subscribe((endTime) => {
            if (endTime.response === 'Empty slot') {
                this.saveTestTime();
            }
            else {
                this.count = endTime.end - this.startDate;
                if (this.count > this.endDate - this.startDate) {
                    this.count = this.endDate - this.startDate;
                }
                if (this.count === null) {
                    this.resetSession(true);
                }
            }
        }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["timerMessages"])('endError'));
            this.router.navigate(['/student/profile']);
        });
    }
    saveTestTime() {
        this.timerSubscription = this.testPlayerService
            .testPlayerSaveEndTime({
            end: this.startDate + this.count,
        })
            .subscribe(() => { }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["timerMessages"])('saveError'));
            this.router.navigate(['/student/profile']);
        });
    }
    finishTest(gone) {
        if (gone) {
            this.intervalSubscription.unsubscribe();
            this.resetSession(false);
        }
        else {
            this.onCheck.emit({ time: false, finish: true });
        }
    }
    resetSession(count) {
        this.timerSubscription = this.testPlayerService
            .testPlayerResetSession()
            .subscribe((response) => {
            if (response && count) {
                this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["timerMessages"])('timerError'));
            }
            else if (response && !count) {
                this.alertService.message(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('finish', false, '', true));
                this.onCheck.emit({ time: true, finish: false });
            }
        }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerServerMessages"])('reset'));
            this.router.navigate(['/student/profile']);
        });
    }
    ngOnDestroy() {
        if (this.timerSubscription || this.intervalSubscription) {
            this.timerSubscription.unsubscribe();
            this.intervalSubscription.unsubscribe();
        }
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_player_service__WEBPACK_IMPORTED_MODULE_4__["TestPlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], inputs: { test: "test" }, outputs: { onCheck: "onCheck" }, decls: 22, vars: 4, consts: [[1, "timer"], [1, "timer__info"], [1, "test-name"], [1, "timer-icon"], [1, "test-subject"], [1, "timer__panel"], [1, "timer-panel-text"], ["class", "timer-circle", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["initTime", ""], [1, "timer__actions"], ["type", "button", "mat-flat-button", "", "color", "warn", "matTooltip", "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", 1, "finish-btn", 3, "click"], [1, "timer-circle", 3, "ngClass"], [1, "timer-numbers"], [1, "timer-panel-icon"], [1, "timer-circle"], [1, "timer-init"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "school");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "collections_bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0414\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F \u0442\u0435\u0441\u0442\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TimerComponent_div_13_Template, 5, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TimerComponent_ng_template_14_Template, 5, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_17_listener() { return ctx.finishTest(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "check");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0442\u0435\u0441\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-divider");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.test.test_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.test.subjectname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer.hours || ctx.timer.minutes || ctx.timer.seconds)("ngIfElse", _r1);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"]], styles: [".timer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.timer[_ngcontent-%COMP%]   .timer-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 30px;\n  margin: -11px 10px auto auto;\n}\n.timer__info[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.timer__info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 580;\n}\n.timer__panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.timer__panel[_ngcontent-%COMP%]   .timer-circle[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 15px;\n  padding: 11px 0 12px 0;\n  background: #3f51b5;\n  color: white;\n}\n.timer__panel[_ngcontent-%COMP%]   .timer-circle.warning[_ngcontent-%COMP%] {\n  background: #fceb6f;\n  color: black;\n}\n.timer__panel[_ngcontent-%COMP%]   .timer-circle.danger[_ngcontent-%COMP%] {\n  background: #f44336;\n  color: black;\n}\n.timer__panel[_ngcontent-%COMP%]   .timer-panel-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  font-size: 30px;\n  margin: -10px 10px auto auto;\n}\n.timer__panel[_ngcontent-%COMP%]   .timer-numbers[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 25px;\n}\n.timer__panel[_ngcontent-%COMP%]   .timer-init[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 0;\n}\n.timer__actions[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.timer__actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-bottom: 2px;\n  padding-right: 5px;\n}\n.timer__actions[_ngcontent-%COMP%]   .finish-btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 5px 30px;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RpbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDUjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBSVE7RUFDSSxnQkFBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFIWjtBQUtZO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSGhCO0FBTVk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUFKaEI7QUFRUTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBTlo7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQVBaO0FBVVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFSWjtBQVlJO0VBQ0ksZ0JBQUE7QUFWUjtBQVlRO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVlo7QUFhUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVhaO0FBZ0JBO0VBQ0ksZ0JBQUE7QUFiSiIsImZpbGUiOiJ0aW1lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICYgLnRpbWVyLWljb24ge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIG1hcmdpbjogLTExcHggMTBweCBhdXRvIGF1dG87XG4gICAgfVxuXG4gICAgJl9faW5mbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgJiBoMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTgwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcGFuZWwge1xuICAgICAgICAmIGgxIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmIC50aW1lci1jaXJjbGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMCAxMnB4IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAmLndhcm5pbmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2ViNmY7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmRhbmdlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIC50aW1lci1wYW5lbC1pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW46IC0xMHB4IDEwcHggYXV0byBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgJiAudGltZXItbnVtYmVycyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiAudGltZXItaW5pdCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYWN0aW9ucyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICAgICAgJiBtYXQtaWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiAuZmluaXNoLWJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubWF0LWRpdmlkZXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_test_player_service__WEBPACK_IMPORTED_MODULE_4__["TestPlayerService"] }, { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, { test: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "F9GE":
/*!**********************************************************************!*\
  !*** ./src/app/modules/student/test-player/test-player.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPlayerComponent", function() { return TestPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/confirm/confirm.component */ "R6Eq");
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Messages */ "R3lV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_test_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/test-player.service */ "+2A9");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/modal.service */ "JK/P");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/alert.service */ "Cmua");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timer/timer.component */ "DRwp");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./questions/questions.component */ "VO1z");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ "668k");












function TestPlayerComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-timer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCheck", function TestPlayerComponent_section_0_Template_app_timer_onCheck_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.finishTest($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-questions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAnswer", function TestPlayerComponent_section_0_Template_app_questions_onAnswer_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.studentAnswer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("test", ctx_r0.currentTest);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("questionsAndAnswers", ctx_r0.testQuestionsAndAnswers);
} }
function TestPlayerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class TestPlayerComponent {
    constructor(router, testPlayerService, modalService, alertService) {
        this.router = router;
        this.testPlayerService = testPlayerService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.loading = false;
        this.testQuestionsAndAnswers = [];
        this.studentAnswers = [];
    }
    onReloadHandler(event) {
        event.returnValue = true;
    }
    ngOnInit() {
        this.loading = true;
        this.initCurrentTest();
    }
    initCurrentTest() {
        this.playerSubscription = this.testPlayerService
            .testPlayerGetData()
            .subscribe((response) => {
            if (response.response === 'Empty slot') {
                this.alertService.warning(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('emptySlot'));
                this.navigateTo('profile');
            }
            else {
                this.startTestPlayer(response);
            }
        }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerServerMessages"])('get'));
        });
    }
    startTestPlayer(response) {
        if (!response.id &&
            !response.currentTest &&
            +response.id !== +response.currentTest.test_id) {
            this.resetSession(false);
            this.navigateTo('profile');
            localStorage.setItem('isMatch', 'notMatch');
        }
        else {
            this.currentTest = response.currentTest;
            this.getTestQA(+response.currentTest.test_id);
        }
    }
    getTestQA(id) {
        this.testPlayerService.getAllQuestionsDataForTest(+id).subscribe((testQuestionsAndAnswers) => {
            this.testQuestionsAndAnswers = testQuestionsAndAnswers;
            this.loading = false;
        }, (error) => {
            this.loading = false;
            this.getTestQAErrorHandler(error);
            this.navigateTo('profile');
        });
    }
    getTestQAErrorHandler(error) {
        switch (error.error.response) {
            case Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('withoutMakingQuiz', true):
                this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('withoutMakingQuiz', false));
                break;
            case Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('enoughNumber', true):
                this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('enoughNumber', false));
                break;
            default:
                this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('default'));
                break;
        }
    }
    finishTest(event) {
        if (event.finish && !event.time) {
            this.modalService.openModal(_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
                data: {
                    icon: 'cancel',
                    message: Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('sureFinish', false, this.currentTest.test_name),
                },
            }, (result) => {
                if (result) {
                    this.resetSession(true);
                }
                else if (!result) {
                    this.alertService.message(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["snackBarMessages"])('cancel'));
                }
            });
        }
        else if (!event.finish && event.time) {
            this.checkTest();
        }
    }
    studentAnswer(event) {
        this.studentAnswers = event;
        sessionStorage.setItem('test_progress', JSON.stringify(event));
    }
    checkTest() {
        this.playerSubscription = this.testPlayerService
            .checkDoneTest(this.studentAnswers)
            .subscribe((response) => {
            this.navigateTo('results', response);
        }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('checkError'));
            this.navigateTo('profile');
        });
    }
    navigateTo(navigate, result) {
        if (navigate === 'results') {
            const navigationExtras = {
                state: {
                    result: result,
                    countOfQuestions: this.testQuestionsAndAnswers.length,
                    testName: this.currentTest.test_name,
                    subjectName: this.currentTest.subjectname,
                },
            };
            this.router.navigate(['/student/test-player/results'], navigationExtras);
        }
        else if (navigate === 'profile') {
            this.router.navigate(['/student/profile']);
        }
    }
    resetSession(finish) {
        this.playerSubscription = this.testPlayerService
            .testPlayerResetSession()
            .subscribe((response) => {
            if (response && finish) {
                this.alertService.message(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerMessages"])('finish', false, '', false));
                this.checkTest();
            }
        }, (error) => {
            this.alertService.error(Object(_Messages__WEBPACK_IMPORTED_MODULE_2__["testPlayerServerMessages"])('reset'));
        });
    }
    ngOnDestroy() {
        if (this.playerSubscription) {
            this.playerSubscription.unsubscribe();
        }
    }
}
TestPlayerComponent.ɵfac = function TestPlayerComponent_Factory(t) { return new (t || TestPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_player_service__WEBPACK_IMPORTED_MODULE_4__["TestPlayerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
TestPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestPlayerComponent, selectors: [["app-test-player"]], hostBindings: function TestPlayerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function TestPlayerComponent_beforeunload_HostBindingHandler($event) { return ctx.onReloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [["class", "test-player", 4, "ngIf", "ngIfElse"], ["loader", ""], [1, "test-player"], [1, "test-player__container"], [1, "test-player__header"], [3, "test", "onCheck"], [1, "test-player__content"], [3, "questionsAndAnswers", "onAnswer"]], template: function TestPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestPlayerComponent_section_0_Template, 6, 2, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestPlayerComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_8__["TimerComponent"], _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__["QuestionsComponent"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], styles: [".test-player[_ngcontent-%COMP%] {\n  margin: 20px auto;\n}\n.test-player__container[_ngcontent-%COMP%] {\n  max-width: 1750px;\n  padding: 0 15px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rlc3QtcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVSIiwiZmlsZSI6InRlc3QtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3QtcGxheWVyIHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAmX19jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDE3NTBweDtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test-player',
                templateUrl: './test-player.component.html',
                styleUrls: ['./test-player.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_test_player_service__WEBPACK_IMPORTED_MODULE_4__["TestPlayerService"] }, { type: _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"] }, { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }]; }, { onReloadHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


/***/ }),

/***/ "VO1z":
/*!******************************************************************************!*\
  !*** ./src/app/modules/student/test-player/questions/questions.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");











const _c0 = function (a0, a1) { return { active: a0, done: a1 }; };
function QuestionsComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changeQuestion($event, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.startTest === i_r7, ctx_r0.isAnswer[i_r7] === i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
} }
function QuestionsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.questionsAndAnswers[ctx_r1.startTest].attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuestionsComponent_ng_container_9_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", answer_r11.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuestionsComponent_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_ng_container_9_div_1_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const answer_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.trueAnswerSimpleOne($event, answer_r11.answer_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuestionsComponent_ng_container_9_div_1_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", answer_r11.answer_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", answer_r11.answer_id === ctx_r10.completed[ctx_r10.startTest]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r11.answer_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", answer_r11.attachment);
} }
function QuestionsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionsComponent_ng_container_9_div_1_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.questionsAndAnswers[ctx_r2.startTest].answers);
} }
function QuestionsComponent_ng_container_10_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", answer_r17.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuestionsComponent_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_ng_container_10_div_1_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const answer_r17 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.trueAnswerMulti($event, answer_r17.answer_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuestionsComponent_ng_container_10_div_1_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", answer_r17.answer_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r16.getTrueAnswer(answer_r17.answer_id, ctx_r16.startTest));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r17.answer_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", answer_r17.attachment);
} }
function QuestionsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionsComponent_ng_container_10_div_1_Template, 6, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.questionsAndAnswers[ctx_r3.startTest].answers);
} }
function QuestionsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0430\u0448\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_div_11_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.trueAnswerText($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.textValue[ctx_r4.startTest] ? ctx_r4.textValue[ctx_r4.startTest] : "");
} }
function QuestionsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuestionsComponent_div_12_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.truAnswerNum($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r5.answersIdNum[ctx_r5.startTest] ? ctx_r5.answersIdNum[ctx_r5.startTest] : "");
} }
class QuestionsComponent {
    constructor() {
        this.onAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAnswer = [];
        this.answersIdNum = [];
        this.answerIdsMulti = [];
        this.completed = [];
        this.btnCount = [];
        this.startTest = 0;
        this.sendAnswerData = [];
        this.textValue = [];
    }
    ngOnInit() {
        this.onAnswer.emit(this.firstEmitData());
        this.getRandomAnswers(this.questionsAndAnswers);
        this.btnCount = [...Array(this.questionsAndAnswers.length).keys()];
    }
    firstEmitData() {
        let firstEmit = [];
        firstEmit = this.questionsAndAnswers.map((elem) => {
            return { question_id: +elem.question_id, answer_ids: [''] };
        });
        return firstEmit;
    }
    changeQuestion(event, index) {
        event.preventDefault();
        this.startTest = index;
    }
    trueAnswerMulti(event, id) {
        if (event.checked) {
            this.answerIdsMulti.push(id);
        }
        else if (!event.checked) {
            this.answerIdsMulti = this.answerIdsMulti.filter((elem) => elem !== id);
        }
        this.sendAnswerData[this.startTest] = this.createStudentAnswer(+this.questionsAndAnswers[this.startTest].question_id, this.answerIdsMulti);
        this.onAnswer.emit(this.removeEmptyElem(this.sendAnswerData));
        this.markStudentAnswer();
    }
    trueAnswerSimpleOne(event, answerId) {
        if (event.checked) {
            this.completed[this.startTest] = answerId;
            this.sendAnswerData[this.startTest] = this.createStudentAnswer(+this.questionsAndAnswers[this.startTest].question_id, [answerId]);
        }
        else if (!event.checked) {
            this.completed[this.startTest] = null;
            this.sendAnswerData[this.startTest] = null;
        }
        this.onAnswer.emit(this.removeEmptyElem(this.sendAnswerData));
        this.markStudentAnswer();
    }
    trueAnswerText(event) {
        const value = event.target.value;
        this.textValue[this.startTest] = value ? value : null;
        this.sendUserAnswer(value);
    }
    truAnswerNum(event) {
        const value = event.target.value;
        this.answersIdNum[this.startTest] = value ? value : null;
        this.sendUserAnswer(value);
    }
    sendUserAnswer(value) {
        this.sendAnswerData[this.startTest] = this.createStudentAnswer(+this.questionsAndAnswers[this.startTest].question_id, [value]);
        this.onAnswer.emit(this.removeEmptyElem(this.sendAnswerData));
        this.markStudentAnswer();
    }
    createStudentAnswer(questionId, answerId) {
        return { question_id: questionId, answer_ids: answerId };
    }
    removeEmptyElem(array) {
        return array.filter((el) => el !== null);
    }
    getTrueAnswer(answerId, index) {
        if (this.sendAnswerData[index]) {
            return this.sendAnswerData[index].answer_ids.includes(answerId);
        }
    }
    markStudentAnswer() {
        this.isAnswer = this.sendAnswerData.map((elem, index) => {
            return !elem ||
                elem.answer_ids.includes(null) ||
                !elem.answer_ids.length
                ? -1
                : index;
        });
    }
    getShuffledArr(arr) {
        return arr.reduce((newArr, _, i) => {
            const rand = i + Math.floor(Math.random() * (newArr.length - i));
            [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]];
            return newArr;
        }, [...arr]);
    }
    getRandomAnswers(arr) {
        arr.forEach((elem) => {
            elem.answers = this.getShuffledArr(elem.answers);
        });
    }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(); };
QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], inputs: { questionsAndAnswers: "questionsAndAnswers" }, outputs: { onAnswer: "onAnswer" }, decls: 14, vars: 7, consts: [[1, "quiz"], [1, "quiz__button-question"], ["class", "quiz__number_of_question", "mat-raised-button", "", "color", "primary", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "quiz__question-container"], [1, "quiz__question-text"], ["class", "quiz__question-picture", 4, "ngIf"], [1, "quiz__answers-block"], ["class", "type_one answer-attachment", 4, "ngIf"], ["class", "type__two answer-attachment", 4, "ngIf"], ["class", "type_three", 4, "ngIf"], ["class", "type_four", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "quiz__number_of_question", 3, "ngClass", "click"], [1, "quiz__question-picture"], ["mat-card-image", "", "alt", "question picture", 3, "src"], [1, "type_one", "answer-attachment"], [4, "ngFor", "ngForOf"], [1, "simple-checkbox", 3, "checked", "id", "change"], [1, "answer-text"], [4, "ngIf"], ["mat-card-image", "", "alt", "answer picture", 3, "src"], [1, "type__two", "answer-attachment"], [1, "example-margin", 3, "id", "checked", "change"], [1, "type_three"], ["matInput", "", "type", "text", 3, "value", "change"], [1, "type_four"], ["matInput", "", "type", "number", 3, "value", "change"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuestionsComponent_button_3_Template, 2, 5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionsComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionsComponent_ng_container_9_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionsComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionsComponent_div_11_Template, 5, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuestionsComponent_div_12_Template, 5, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.btnCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.questionsAndAnswers[ctx.startTest].question_text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionsAndAnswers[ctx.startTest].attachment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionsAndAnswers[ctx.startTest].type === "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionsAndAnswers[ctx.startTest].type === "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionsAndAnswers[ctx.startTest].type === "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionsAndAnswers[ctx.startTest].type === "4");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"]], styles: [".quiz[_ngcontent-%COMP%] {\n  margin: 50px auto;\n}\n.quiz__button-question[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 30px;\n}\n.quiz__button-question[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 7px;\n}\n.quiz__question-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.quiz__question-container__question-text[_ngcontent-%COMP%] {\n  font-size: 27px;\n  font-weight: 500;\n}\n.quiz__question-container[_ngcontent-%COMP%]   .quiz__question-picture[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.quiz__question-container[_ngcontent-%COMP%]   .quiz__question-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media screen and (min-width: 820px) {\n  .quiz__question-container[_ngcontent-%COMP%]   .quiz__question-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 400px) {\n  .quiz__question-container[_ngcontent-%COMP%]   .quiz__question-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.quiz__answers-block[_ngcontent-%COMP%] {\n  padding: 20px;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  margin: 30px auto;\n}\n.quiz__answers-block[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]     .mat-checkbox-inner-container {\n  width: 25px;\n  height: 25px;\n  margin: 8px;\n}\n.quiz__answers-block[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-left: 10px;\n  font-size: 18px;\n  font-weight: 500;\n}\n.quiz__answers-block[_ngcontent-%COMP%]   .type_three[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.quiz[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #e2e2dd !important;\n  color: black !important;\n}\n.quiz[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  background-color: #2ba12b !important;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0FBR1o7QUFBSTtFQUNJLGFBQUE7RUFDQSwySEFBQTtBQUVSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ1o7QUFBWTtFQUNJLFVBQUE7QUFFaEI7QUFEZ0I7RUFGSjtJQUdRLFVBQUE7RUFJbEI7QUFDRjtBQUhnQjtFQUxKO0lBTVEsV0FBQTtFQU1sQjtBQUNGO0FBRkk7RUFDSSxhQUFBO0VBQ0EsMkhBQUE7RUFHQSxpQkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdaO0FBQVk7RUFDSSxlQUFBO0FBRWhCO0FBRUk7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0FBQVI7QUFFSTtFQUNJLG9DQUFBO0FBQVI7QUFJQTtFQUNJLGlCQUFBO0FBREoiLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1aXoge1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICAgICZfX2J1dHRvbi1xdWVzdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICYgYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogN3B4O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX3F1ZXN0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAmX19xdWVzdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgLnF1aXpfX3F1ZXN0aW9uLXBpY3R1cmUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19hbnN3ZXJzLWJsb2NrIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgICAgICAmIG1hdC1jaGVja2JveCA6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1pbm5lci1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgfVxuICAgICAgICAmIC5hbnN3ZXItdGV4dCB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgICYgLnR5cGVfdGhyZWUge1xuICAgICAgICAgICAgJiBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIyNiwgMjIxKSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgJiAuZG9uZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgMTYxLCA0MykgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-questions',
                templateUrl: './questions.component.html',
                styleUrls: ['./questions.component.scss'],
            }]
    }], function () { return []; }, { questionsAndAnswers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onAnswer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "tRV5":
/*!*******************************************************************!*\
  !*** ./src/app/modules/student/test-player/test-player.module.ts ***!
  \*******************************************************************/
/*! exports provided: TestPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPlayerModule", function() { return TestPlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/modules/shared.module */ "UKGz");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _test_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-player.component */ "F9GE");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer/timer.component */ "DRwp");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results/results.component */ "/Py5");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions/questions.component */ "VO1z");
/* harmony import */ var _results_answers_chart_answers_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./results/answers-chart/answers-chart.component */ "pqbn");












class TestPlayerModule {
}
TestPlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TestPlayerModule });
TestPlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TestPlayerModule_Factory(t) { return new (t || TestPlayerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _test_player_component__WEBPACK_IMPORTED_MODULE_5__["TestPlayerComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestPlayerModule, { declarations: [_test_player_component__WEBPACK_IMPORTED_MODULE_5__["TestPlayerComponent"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"],
        _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
        _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsComponent"],
        _results_answers_chart_answers_chart_component__WEBPACK_IMPORTED_MODULE_9__["AnswersChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestPlayerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _test_player_component__WEBPACK_IMPORTED_MODULE_5__["TestPlayerComponent"],
                    _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"],
                    _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
                    _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsComponent"],
                    _results_answers_chart_answers_chart_component__WEBPACK_IMPORTED_MODULE_9__["AnswersChartComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _test_player_component__WEBPACK_IMPORTED_MODULE_5__["TestPlayerComponent"] }]),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=test-player-test-player-module.js.map