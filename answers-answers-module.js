(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["answers-answers-module"],{

/***/ "CMdM":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/answers/validators/minMaxValidator.ts ***!
  \*********************************************************************/
/*! exports provided: minMaxValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minMaxValidator", function() { return minMaxValidator; });
function minMaxValidator(group) {
    const minValue = group.get('numericAnswerMin').value;
    const maxValue = group.get('numericAnswerMax').value;
    return minValue >= maxValue
        ? {
            comparisonError: true,
        }
        : null;
}


/***/ }),

/***/ "Log4":
/*!************************************************************!*\
  !*** ./src/app/modules/admin/answers/answers.component.ts ***!
  \************************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/confirm/confirm.component */ "R6Eq");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/alert/alert.component */ "FYjP");
/* harmony import */ var _validators_minMaxValidator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators/minMaxValidator */ "CMdM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _answers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./answers.service */ "4e9z");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/modal.service */ "JK/P");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");





















function AnswersComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.errorQuestionTitle, " ");
} }
function AnswersComponent_mat_card_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_mat_card_10_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeImageQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.attachmentQuestionSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AnswersComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r9, " ");
} }
function AnswersComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r12 + 1, " ");
} }
function AnswersComponent_div_27_div_2_mat_checkbox_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-checkbox", 33);
} }
function AnswersComponent_div_27_div_2_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AnswersComponent_div_27_div_2_mat_checkbox_5_Template_mat_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.trueAnswerSimpleOne(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r14);
} }
function AnswersComponent_div_27_div_2_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r18.errorQuestionTitle, " ");
} }
function AnswersComponent_div_27_div_2_mat_card_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_div_27_div_2_mat_card_14_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.removeImageAnswer(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r19.answerAtachmentSrc[i_r14], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AnswersComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_div_27_div_2_Template_button_click_1_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnswersComponent_div_27_div_2_mat_checkbox_4_Template, 1, 0, "mat-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnswersComponent_div_27_div_2_mat_checkbox_5_Template, 1, 1, "mat-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0440\u0456\u0430\u043D\u0442 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnswersComponent_div_27_div_2_mat_error_10_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_div_27_div_2_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.removeAnswer($event, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AnswersComponent_div_27_div_2_mat_card_14_Template, 4, 1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-mat-file-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AnswersComponent_div_27_div_2_Template_ngx_mat_file_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.inputAnswerAtachment(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r14 = ctx_r34.index;
    const ans_r13 = ctx_r34.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r14 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.typeOfQuestion === "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.typeOfQuestion === "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ans_r13.controls.text.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.answerAtachmentSrc[i_r14]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ".png,.jpeg");
} }
function AnswersComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnswersComponent_div_27_div_2_Template, 20, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.showAnswers);
} }
function AnswersComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnswersComponent_div_29_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.errorQuestionTitle);
} }
function AnswersComponent_div_29_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.errorQuestionTitle);
} }
function AnswersComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnswersComponent_div_29_mat_error_5_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E\u0432\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnswersComponent_div_29_mat_error_10_Template, 2, 1, "mat-error", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.answersTypeNumeric.controls.numericAnswerMin.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.answersTypeNumeric.controls.numericAnswerMin.invalid);
} }
class AnswersComponent {
    constructor(activatedRoute, router, fb, answerServise, modalService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.fb = fb;
        this.answerServise = answerServise;
        this.modalService = modalService;
        this.confirmIcon = 'question_answer';
        this.answerAtachmentSrc = [];
        this.noChanges = false;
        this.alert = {
            titleAlert: 'Повідомлення',
            titleError: 'Помилка',
            messageNoAnswer: 'Питання повинне містити відповіді',
            messageNumCompare: 'Мінімальне значення не може бути більше або рівне макcимального',
            messageNoEdit: 'Для редагування внесіть зміни в форму',
            messageNoTruAnswer: 'Відсутня правильна відповідь',
            messageAnswerUpdate: 'Відповідь оновлена',
            messageAnswerCreate: 'Відповідь створена',
            messageAnswerDelete: 'Відповідь видалена',
            messageQuestionCreate: 'Питання створено',
            messageQuestionUpdate: 'Питання оновлено',
            messageConfirm: 'Ви впевнені що бажаєте видалити цю відповідь?',
            messageNoAnswerTitle: "Заповніть усі обов'язкові поля",
        };
        this.errorQuestionTitle = "Це поле обов'язкове";
        this.showAtachmentAnswer = false;
        this.noAnswers = false;
        this.idAnswerArray = [];
        this.createMode = true;
        this.sendAnswerData = [];
        this.showAnswers = false;
        this.showAnswersNumeric = false;
        this.levelType = [...Array(20).keys()];
        this.questionType = [
            'Простий вибір',
            'Мульти вибір',
            'Текстове поле',
            'Числовий діапазон',
        ];
    }
    formInitialazer() {
        this.answerForm = this.fb.group({
            questionText: [
                this.state ? this.state.question_text : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            typeOfQuestion: [this.state ? this.state.type : '1'],
            level: [this.state ? this.state.level : '1'],
            atachmentQuestion: [this.state ? this.state.attachment : ''],
            answersType: this.fb.array([]),
            answersTypeNumeric: this.fb.group({
                numericAnswerMin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                numericAnswerMax: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                answer_idMin: [''],
                answer_idMax: [''],
            }, {
                validators: [_validators_minMaxValidator__WEBPACK_IMPORTED_MODULE_5__["minMaxValidator"]],
            }),
        });
    }
    newAnswersType(item, trueAnswer) {
        return this.fb.group({
            text: [item ? item.answer_text : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            trueAnswerSimple: [
                trueAnswer === '1' ? true : false,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            trueAnswerMulti: [
                trueAnswer === '1' ? true : false,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            atachmentAnswer: [item ? item.attachment : ''],
            answer_id: [item ? item.answer_id : ''],
        });
    }
    get level() {
        const levelValue = this.answerForm.get('level').value;
        return levelValue;
    }
    get typeOfQuestion() {
        const typeOfQuestionValue = this.answerForm.get('typeOfQuestion').value;
        return typeOfQuestionValue;
    }
    get questionText() {
        const questionTextValue = this.answerForm.get('questionText').value;
        return questionTextValue;
    }
    get answersType() {
        return this.answerForm.get('answersType');
    }
    get answersTypeNumeric() {
        return this.answerForm.get('answersTypeNumeric');
    }
    get atachmentQuestion() {
        return this.answerForm.get('atachmentQuestion');
    }
    get trueAnswer() {
        return this.answerForm.controls.answersType;
    }
    ngOnInit() {
        let mode;
        this.activatedRoute.queryParams.subscribe((params) => {
            this.testId = params.test_id;
            mode = params.mode;
        });
        if (mode === 'edit') {
            this.state = history.state.data;
            this.checkState(mode);
        }
        this.formInitialazer();
    }
    checkState(mode) {
        if (this.state) {
            const localState = this.state;
            localStorage.setItem('state', JSON.stringify({
                localState,
            }));
        }
        if (mode === 'edit' && !this.state) {
            const data = JSON.parse(localStorage.getItem('state'));
            this.state = data.localState;
        }
        this.state.test_id = this.testId;
        switch (this.state.type) {
            case 'Простий вибір':
                this.state.type = '1';
                break;
            case 'Мульти вибір':
                this.state.type = '2';
                break;
            case '	Текстове поле':
                this.state.type = '3';
                break;
            case 'Числове поле вводу':
                this.state.type = '4';
                break;
            default:
                break;
        }
        this.initializeEditMode();
    }
    //update question and answer part
    initializeEditMode() {
        this.createMode = false;
        this.questionId = this.state.question_id;
        this.attachmentQuestionSrc = this.state.attachment;
        this.allSubscription = this.answerServise
            .getQuestions(this.questionId)
            .subscribe((res) => {
            if (res[0]) {
                this.state.attachment = res[0].attachment;
                this.attachmentQuestionSrc = res[0].attachment;
            }
            else {
                this.state.attachment = '';
            }
            this.getAnswers();
        });
    }
    getAnswers() {
        this.answerServise
            .getAnswers(this.state.question_id)
            .subscribe((res) => {
            this.answerForm.get('typeOfQuestion').disable();
            if (!res[0]) {
                this.noAnswers = true;
                this.noChanges = true;
            }
            else {
                this.updateAnswers = res;
                this.fillForm(res);
            }
        });
    }
    fillForm(result) {
        this.showAnswers = true;
        if (this.typeOfQuestion === '4') {
            this.showAnswersNumeric = true;
            result.map((item, index) => {
                this.idAnswerArray.push(item.answer_id);
                if (index === 0) {
                    this.answerForm.controls.answersTypeNumeric
                        .get('numericAnswerMin')
                        .setValue(item.answer_text);
                    this.answerForm.controls.answersTypeNumeric
                        .get('answer_idMin')
                        .setValue(item.answer_id);
                }
                else {
                    this.answerForm.controls.answersTypeNumeric
                        .get('numericAnswerMax')
                        .setValue(item.answer_text);
                    this.answerForm.controls.answersTypeNumeric
                        .get('answer_idMax')
                        .setValue(item.answer_id);
                }
            });
        }
        else {
            result.map((item) => {
                this.answerAtachmentSrc.push(item.attachment);
                this.idAnswerArray.push(item.answer_id);
                this.showAtachmentAnswer = item.attachment ? true : false;
                const trueAnswer = item.true_answer;
                this.answersType.push(this.newAnswersType(item, trueAnswer));
            });
        }
    }
    compareQuestions() {
        if (this.createMode) {
            return false;
        }
        return this.objectsAreSame(this.sendQuestionData, this.state);
    }
    removeImageQuestion() {
        this.attachmentQuestionSrc = '';
        this.answerForm.controls.atachmentQuestion.setValue('');
    }
    compareAnswers() {
        if (this.noChanges) {
            return false;
        }
        else if (!this.createMode) {
            if (this.sendAnswerData.length !== this.updateAnswers.length) {
                return false;
            }
            return this.sendAnswerData
                .map((elem, index) => {
                return this.objectsAreSame(elem, this.updateAnswers[index]);
            })
                .every((elem) => {
                return elem === true;
            });
        }
    }
    getIdOfUpdateAnswer() {
        let chooseArr = 0;
        if (this.sendAnswerData.length > this.updateAnswers.length) {
            chooseArr = this.updateAnswers.length;
        }
        else {
            chooseArr = this.sendAnswerData.length;
        }
        this.idAnswerArray.slice(0, chooseArr);
        const result = [];
        for (let i = 0; i < this.idAnswerArray.length; i++) {
            if (this.objectsAreSame(this.sendAnswerData[i], this.updateAnswers[i]) === false) {
                result.push(this.idAnswerArray[i]);
            }
        }
        this.idAnswerArray = result;
    }
    removeImageAnswer(i) {
        this.answersType.controls[i].get('atachmentAnswer').setValue('');
        this.answerAtachmentSrc[i] = '';
    }
    objectsAreSame(x, y) {
        let objectsAreSame = true;
        for (const propertyName in x) {
            if (x[propertyName] !== y[propertyName]) {
                objectsAreSame = false;
                break;
            }
        }
        return objectsAreSame;
    }
    //create question part
    createQuestionData() {
        this.sendQuestionData = {
            question_id: this.questionId,
            question_text: this.questionText,
            type: this.typeOfQuestion,
            level: this.level,
            test_id: this.testId,
            attachment: this.atachmentQuestion.value
                ? this.atachmentQuestion.value
                : '',
        };
    }
    inputQuestionAtachment() {
        const atachment = this.answerForm.get('atachmentQuestion');
        if (atachment.value._files[0]) {
            this.getImageBase64(atachment.value._files[0]).subscribe((res) => {
                atachment.setValue(res);
                this.attachmentQuestionSrc = res;
            });
        }
        else {
            atachment.setValue('');
        }
    }
    createQuestion() {
        if (this.createMode) {
            this.answerServise
                .createQuestionRequest(this.sendQuestionData)
                .subscribe((res) => {
                this.openModal(this.alert.titleAlert, this.alert.messageQuestionCreate, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
                this.questionId = res[0].question_id;
                this.sendAnswerDataRequest();
                this.navigateToQuestionPage();
            });
        }
        else if (!this.compareQuestions()) {
            this.answerServise
                .updateQuestion(this.sendQuestionData, this.questionId)
                .subscribe((res) => {
                if (this.questionId === res[0].question_id) {
                    this.openModal(this.alert.titleAlert, this.alert.messageQuestionUpdate, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
                }
                this.sendAnswerDataRequest();
                this.navigateToQuestionPage();
            });
        }
        else {
            this.sendAnswerDataRequest();
            this.navigateToQuestionPage();
        }
    }
    // create answer part
    addAnswer(e) {
        e.preventDefault();
        this.noChanges = true;
        this.noAnswers = false;
        this.showAnswers = true;
        this.answersType.push(this.newAnswersType());
    }
    removeAnswer(e, index) {
        e.preventDefault();
        const removeId = this.idAnswerArray[index];
        if (!this.createMode && removeId) {
            this.modalService.openModal(_shared_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmComponent"], {
                data: {
                    icon: this.confirmIcon,
                    message: this.alert.messageConfirm,
                },
            }, (result) => {
                dialog(result);
            });
            const dialog = (res) => {
                if (res) {
                    this.allSubscription = this.answerServise
                        .deleteAnswer(+removeId)
                        .subscribe((res) => {
                        if (res.response === 'ok') {
                            this.answersType.removeAt(index);
                            this.idAnswerArray.splice(index, 1);
                            this.openModal(this.alert.titleAlert, this.alert.messageAnswerDelete, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
                        }
                    });
                }
                else {
                    return;
                }
            };
        }
        else {
            this.answersType.removeAt(index);
        }
    }
    getTrueAnswer(item) {
        switch (this.typeOfQuestion) {
            case '1':
                if (item.trueAnswerSimple) {
                    return '1';
                }
                else {
                    return '0';
                }
            case '2':
                if (item.trueAnswerMulti) {
                    return '1';
                }
                else {
                    return '0';
                }
            default:
                return '1';
        }
    }
    inputAnswerAtachment(index) {
        const atachment = this.answersType.controls[index].get('atachmentAnswer');
        if (this.answersType.value[index].atachmentAnswer._files[0]) {
            this.allSubscription = this.getImageBase64(this.answersType.value[index].atachmentAnswer._files[0]).subscribe((res) => {
                this.answerAtachmentSrc[index] = res;
                atachment.setValue(res);
            });
        }
        else {
            atachment.setValue('');
        }
    }
    getImageBase64(file) {
        const reader = new FileReader();
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                observer.next(reader.result);
                observer.complete();
            };
        });
    }
    isTrueAnswer() {
        switch (this.typeOfQuestion) {
            case '1':
                return this.trueAnswer.value.every((res) => res.trueAnswerSimple === false);
            case '2':
                return this.trueAnswer.value.every((res) => res.trueAnswerMulti === false);
            default:
                return false;
        }
    }
    createAnswerData() {
        this.sendAnswerData = [];
        const formFieldsValue = this.answerForm.value;
        if (this.typeOfQuestion === '4') {
            const typeQuestionNumeric = [
                {
                    answer_text: formFieldsValue.answersTypeNumeric.numericAnswerMin,
                    answer_id: formFieldsValue.answersTypeNumeric.answer_idMin,
                },
                {
                    answer_text: formFieldsValue.answersTypeNumeric.numericAnswerMax,
                    answer_id: formFieldsValue.answersTypeNumeric.answer_idMax,
                },
            ];
            for (let i = 0; i < typeQuestionNumeric.length; i++) {
                const item = typeQuestionNumeric[i];
                this.sendAnswerData.push({
                    answer_id: item.answer_id,
                    answer_text: `${item.answer_text}`,
                    true_answer: '1',
                    question_id: this.questionId,
                    attachment: '',
                });
            }
        }
        else {
            formFieldsValue.answersType.map((item) => {
                {
                    this.sendAnswerData.push({
                        answer_id: item.answer_id,
                        question_id: this.questionId,
                        true_answer: this.getTrueAnswer(item),
                        answer_text: item.text,
                        attachment: item.atachmentAnswer,
                    });
                }
            });
        }
    }
    changeTypeQuestion() {
        switch (this.typeOfQuestion) {
            case '4':
                this.showAnswersNumeric = true;
                this.showAnswers = false;
                break;
            default:
                this.showAnswersNumeric = false;
                this.showAnswers = true;
                break;
        }
    }
    trueAnswerSimpleOne(id) {
        this.answersType.value.map((elem, index) => {
            if (id !== index) {
                this.answersType.controls[index]
                    .get('trueAnswerSimple')
                    .setValue(false);
            }
        });
    }
    sendAnswerDataRequest() {
        let counter = null;
        if (this.createMode) {
            this.createAnswerData();
        }
        if (!this.createMode && this.updateAnswers) {
            this.getIdOfUpdateAnswer();
        }
        this.sendAnswerData.map((elem) => {
            if (this.createMode || !elem.answer_id) {
                delete elem.answer_id;
                return (this.allSubscription = this.answerServise
                    .createAnswerRequest(elem)
                    .subscribe((res) => {
                    if (res[0].answer_id && this.compareQuestions()) {
                        counter = 0;
                    }
                }));
            }
            else if (this.idAnswerArray.includes(elem.answer_id)) {
                return (this.allSubscription = this.answerServise
                    .updateAnswer(elem, elem.answer_id)
                    .subscribe((res) => {
                    if (this.compareQuestions() && res) {
                        counter = 1;
                    }
                }));
            }
        });
        this.showMessage(counter);
    }
    showMessage(counter) {
        if (this.compareQuestions()) {
            const message = counter === 0
                ? this.alert.messageAnswerCreate
                : this.alert.messageAnswerUpdate;
            this.openModal(this.alert.titleAlert, message, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
        }
    }
    createQuestionAndAnswer() {
        var _a, _b;
        this.createAnswerData();
        this.createQuestionData();
        if ((this.compareAnswers() && this.compareQuestions()) ||
            (((_a = this.answersTypeNumeric.errors) === null || _a === void 0 ? void 0 : _a.comparisonError) &&
                this.typeOfQuestion === '4')) {
            let message = this.alert.messageNoAnswer;
            if (((_b = this.answersTypeNumeric.errors) === null || _b === void 0 ? void 0 : _b.comparisonError) &&
                this.typeOfQuestion === '4') {
                message = this.alert.messageNumCompare;
            }
            else if (this.compareAnswers() && this.compareQuestions()) {
                message = this.alert.messageNoEdit;
            }
            this.openModal(this.alert.titleAlert, message, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
            return;
        }
        else if (this.isTrueAnswer() ||
            this.sendAnswerData.some((elem) => elem.answer_text === '')) {
            this.openModal(this.alert.titleError, this.isTrueAnswer()
                ? this.alert.messageNoTruAnswer
                : this.alert.messageNoAnswerTitle, _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"]);
            return;
        }
        else {
            this.createQuestion();
        }
    }
    cancelButton(e) {
        e.preventDefault();
        this.navigateToQuestionPage();
    }
    navigateToQuestionPage() {
        this.router.navigate([`admin/subjects/tests/${this.testId}/questions`], {
            queryParams: {
                test_id: this.testId,
            },
        });
    }
    openModal(title, message, component) {
        this.modalService.openModal(component, {
            data: {
                message,
                title,
            },
        });
    }
}
AnswersComponent.ɵfac = function AnswersComponent_Factory(t) { return new (t || AnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_answers_service__WEBPACK_IMPORTED_MODULE_7__["AnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"])); };
AnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswersComponent, selectors: [["app-answers"]], decls: 40, vars: 13, consts: [[3, "formGroup", "submit"], [1, "question-container"], [1, "question"], ["appearance", "fill"], ["formControlName", "questionText", "matInput", ""], [4, "ngIf"], ["formControlName", "atachmentQuestion", "placeholder", "\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F", 3, "accept", "change"], ["matSuffix", ""], ["formControlName", "typeOfQuestion", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "level"], [1, "createAnswer"], ["formArrayName", "answersType", 4, "ngFor", "ngForOf"], ["formGroupName", "answersTypeNumeric", "class", "answer-container", 4, "ngIf"], [1, "create-btn"], ["mat-raised-button", "", "color", "primary", 1, "create-answer-btn", 3, "disabled", "click"], ["\u0441lass", "btn-group", 2, "display", "flex", "justify-content", "space-between"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["alt", "question picture", 1, "image", 3, "src"], [1, "material-icons", "close-btn", 3, "click"], [3, "value"], ["formArrayName", "answersType"], [3, "formGroupName"], ["class", "answer-container", 4, "ngIf"], [1, "answer-container"], ["mat-mini-fab", "", "color", "primary", 1, "answer-number", 3, "click"], [1, "addAnswerField"], ["class", "example-margin", "formControlName", "trueAnswerMulti", 4, "ngIf"], ["class", "radio-button", "formControlName", "trueAnswerSimple", 3, "id", "change", 4, "ngIf"], ["formControlName", "text", "matInput", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon", 3, "click"], ["formControlName", "atachmentAnswer", "placeholder", "\u0414\u043E\u0434\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F", 3, "accept", "change"], ["formControlName", "trueAnswerMulti", 1, "example-margin"], ["formControlName", "trueAnswerSimple", 1, "radio-button", 3, "id", "change"], ["alt", "answer", 1, "image", 3, "src"], ["formGroupName", "answersTypeNumeric", 1, "answer-container"], ["formControlName", "numericAnswerMin", "matInput", "", "type", "number"], ["formControlName", "numericAnswerMax", "matInput", "", "type", "number"]], template: function AnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AnswersComponent_Template_form_submit_0_listener() { return ctx.createQuestionAndAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0422\u0435\u043A\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnswersComponent_mat_error_9_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AnswersComponent_mat_card_10_Template, 4, 1, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-mat-file-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AnswersComponent_Template_ngx_mat_file_input_change_13_listener() { return ctx.inputQuestionAtachment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0422\u0438\u043F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AnswersComponent_Template_mat_select_selectionChange_19_listener() { return ctx.changeTypeQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AnswersComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0456\u0432\u0435\u043D\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AnswersComponent_mat_option_25_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AnswersComponent_div_27_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AnswersComponent_div_28_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AnswersComponent_div_29_Template, 11, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_Template_button_click_31_listener($event) { return ctx.addAnswer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnswersComponent_Template_button_click_38_listener($event) { return ctx.cancelButton($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.answerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.createMode ? "\u0417\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0435\u0439 \u0434\u043E \u043D\u044C\u043E\u0433\u043E" : "\u0412\u043D\u0435\u0441\u0456\u0442\u044C \u0437\u043C\u0456\u043D\u0438 \u0434\u043B\u044F \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answerForm.controls.questionText.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attachmentQuestionSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ".png,.jpeg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levelType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answersType.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noAnswers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAnswersNumeric);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.showAnswersNumeric);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.answerForm.controls.questionText.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.createMode ? "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438" : "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_12__["FileInputComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]], styles: [".question-container,\n.answer-container {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  padding: 25px;\n}\n.question-container h2,\n.answer-container h2 {\n  text-align: center;\n}\n.answer-container {\n  margin-top: 30px;\n  position: relative;\n}\n.answer-container .answer-number {\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  font-size: 20px;\n  cursor: default;\n}\n.create-btn {\n  margin: 20px 0;\n  text-align: center;\n}\n.addAnswerField {\n  display: flex;\n  align-items: center;\n}\n.addAnswerField mat-checkbox {\n  margin-right: 10px;\n}\n.create-answer-btn {\n  margin: 10px;\n}\n.question {\n  display: flex;\n}\n.image {\n  position: relative;\n  width: 50%;\n}\n.close-btn {\n  cursor: pointer;\n  color: red;\n  font-size: 30px;\n  top: -5%;\n  position: absolute;\n}\n.mat-card {\n  text-align: center;\n}\n.btn-group {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fuc3dlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksMkhBQUE7RUFHQSxhQUFBO0FBREo7QUFFSTs7RUFDSSxrQkFBQTtBQUNSO0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNSO0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFHQTtFQUNJLFlBQUE7QUFBSjtBQUdBO0VBQ0ksYUFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUFKIiwiZmlsZSI6ImFuc3dlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb24tY29udGFpbmVyLFxuLmFuc3dlci1jb250YWluZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmFuc3dlci1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5hbnN3ZXItbnVtYmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIH1cbn1cblxuLmNyZWF0ZS1idG4ge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZEFuc3dlckZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF0LWNoZWNrYm94IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cblxuLmNyZWF0ZS1hbnN3ZXItYnRuIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5xdWVzdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmNsb3NlLWJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRvcDogLTUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1hdC1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answers',
                templateUrl: './answers.component.html',
                styleUrls: ['./answers.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _answers_service__WEBPACK_IMPORTED_MODULE_7__["AnswersService"] }, { type: _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"] }]; }, null); })();


/***/ }),

/***/ "eGE3":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/answers/answers.module.ts ***!
  \*********************************************************/
/*! exports provided: AnswersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersModule", function() { return AnswersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-material-file-input */ "7ZcW");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "UKGz");
/* harmony import */ var _answers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answers.component */ "Log4");








const routes = [{ path: '', component: _answers_component__WEBPACK_IMPORTED_MODULE_5__["AnswersComponent"] }];
class AnswersModule {
}
AnswersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnswersModule });
AnswersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnswersModule_Factory(t) { return new (t || AnswersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_3__["MaterialFileInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnswersModule, { declarations: [_answers_component__WEBPACK_IMPORTED_MODULE_5__["AnswersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ngx_material_file_input__WEBPACK_IMPORTED_MODULE_3__["MaterialFileInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_answers_component__WEBPACK_IMPORTED_MODULE_5__["AnswersComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    ngx_material_file_input__WEBPACK_IMPORTED_MODULE_3__["MaterialFileInputModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=answers-answers-module.js.map