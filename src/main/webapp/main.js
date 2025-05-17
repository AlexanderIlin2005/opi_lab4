(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sasailin/Desktop/Web_programming/web-lab4/src/main/angular/lab-app/src/main.ts */"zUnb");


/***/ }),

/***/ "3Mlf":
/*!******************************************************!*\
  !*** ./src/app/services/language-storage.service.ts ***!
  \******************************************************/
/*! exports provided: LanguageStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageStorageService", function() { return LanguageStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LanguageStorageService {
    constructor() {
        this.storage = localStorage;
    }
    store(code) {
        this.storage.setItem('selectedLanguageCode', code);
    }
    load() {
        return this.storage.getItem('selectedLanguageCode');
    }
}
LanguageStorageService.ɵfac = function LanguageStorageService_Factory(t) { return new (t || LanguageStorageService)(); };
LanguageStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageStorageService, factory: LanguageStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






function TableComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "TABLE.NO_HITS"), " -");
} }
function TableComponent_p_table_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Y");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, "TABLE.RESULT"));
} }
function TableComponent_p_table_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hit_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hit_r4.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, hit_r4.y, "1.2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hit_r4.r);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "TABLE." + (hit_r4.result ? "HIT" : "MISS")));
} }
function TableComponent_p_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_p_table_2_ng_template_1_Template, 10, 3, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_p_table_2_ng_template_2_Template, 11, 9, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("paginator", true)("rows", 12);
} }
class TableComponent {
    constructor() {
        this.value = [];
    }
    ngOnInit() {
        this.$value.subscribe(newValues => {
            this.value = newValues;
            console.log(this.value);
        });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { $value: ["value", "$value"] }, decls: 3, vars: 2, consts: [[2, "text-align", "center"], ["style", "color: lightslategray", 4, "ngIf"], ["styleClass", "p-datatable-sm", 3, "value", "paginator", "rows", 4, "ngIf"], [2, "color", "lightslategray"], ["styleClass", "p-datatable-sm", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_span_1_Template, 3, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_p_table_2_Template, 3, 3, "p-table", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.value.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["p-table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAtdGFibGUgKiAqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], null, { $value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['value']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bpjv":
/*!*******************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.ts ***!
  \*******************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/functions */ "XwJM");



const _c0 = ["container"];
const _c1 = ["aim"];
const _c2 = ["canvas"];
const design = {
    colors: {
        aim: 'yellow',
        hit: 'lawngreen',
        miss: 'red',
        shapes: '#aaaef3',
        main: 'black',
        background: 'white'
    },
    point: {
        outlineWidth: 3.5,
        radius: 4
    },
    fontSize: 15,
    coordsSystem: {
        lineWidth: 2
    }
};
class CanvasComponent {
    constructor() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // First OnChanges happens before children are created, so this is needed
        this.initialized = false;
        this.hits = []; // buffer
        this.eraseAim = () => this.clearCanvas(this.aimCtx);
    }
    ngOnChanges(changes) {
        if (this.initialized && (changes.rValue || changes.matchingRads)) {
            this.redrawAll();
        }
    }
    ngOnInit() {
        this.$hits.subscribe(newHits => {
            this.hits = newHits;
            this.redrawAll();
        });
    }
    ngAfterViewInit() {
        this.center = this.wh / 2;
        this.rOffset = this.wh * 2 / 5;
        this.aimCtx = this.aimCanvasRef.nativeElement.getContext('2d');
        this.aimCtx.strokeStyle = design.colors.main;
        this.aimCtx.lineWidth = design.point.outlineWidth;
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        this.ctx.lineWidth = design.point.outlineWidth;
        this.ctx.strokeStyle = design.colors.main;
        this.canvasContainer = this.canvasContainerRef.nativeElement;
        this.initialized = true;
        this.drawAll();
    }
    submitHit(e) {
        let scale = this.drawingR / this.rOffset;
        let x = Math.round((Object(_model_functions__WEBPACK_IMPORTED_MODULE_1__["canvasRelativeX"])(e, this.canvasContainer) - this.center) * scale);
        let y = (this.center - Object(_model_functions__WEBPACK_IMPORTED_MODULE_1__["canvasRelativeY"])(e, this.canvasContainer)) * scale;
        this.onSubmit.emit({ 'x': x, 'y': y, 'r': this.rValue });
    }
    drawLetters(ctx, center, rOffset) {
        const textOffset = this.wh / 100; // previously 5
        const axisLetterBorderOffset = design.fontSize;
        const R = String(this.drawingR);
        const halfR = String(this.drawingR / 2);
        ctx.strokeStyle = design.colors.main;
        ctx.font = design.fontSize + 'px Arial';
        // R
        ctx.textAlign = 'center';
        // left
        ctx.strokeText('- ' + R, center - rOffset, center - textOffset);
        ctx.strokeText('- ' + halfR, center - rOffset / 2, center - textOffset);
        // right
        ctx.strokeText(R, center + rOffset, center - textOffset);
        ctx.strokeText(halfR, center + rOffset / 2, center - textOffset);
        // top
        ctx.textAlign = 'left';
        ctx.strokeText(R, center + textOffset, center - rOffset);
        ctx.strokeText(halfR, center + textOffset, center - rOffset / 2);
        // bottom
        ctx.strokeText('- ' + R, center + textOffset, center + rOffset);
        ctx.strokeText('- ' + halfR, center + textOffset, center + rOffset / 2);
        // X, Y
        ctx.strokeText('X', this.wh - axisLetterBorderOffset, center - textOffset);
        ctx.strokeText('Y', center + textOffset, axisLetterBorderOffset);
    }
    drawCoordsSystem(ctx) {
        // styles
        ctx.strokeStyle = design.colors.main;
        ctx.lineWidth = design.coordsSystem.lineWidth;
        // horizontal
        ctx.beginPath();
        ctx.moveTo(0, this.center);
        ctx.lineTo(this.wh, this.center);
        ctx.stroke();
        // vertical
        ctx.beginPath();
        ctx.moveTo(this.center, this.wh);
        ctx.lineTo(this.center, 0);
        ctx.stroke();
    }
    clearCanvas(ctx) {
        ctx.clearRect(0, 0, this.wh, this.wh);
    }
    drawShapes(ctx, center, rOffset) {
        ctx.fillStyle = design.colors.shapes;
        // прямоугольник
        ctx.fillRect(center - rOffset, center, center, rOffset / 2);
        // треугольник
        ctx.moveTo(center, center);
        ctx.beginPath();
        ctx.lineTo(center, center + rOffset);
        ctx.lineTo(center + rOffset, center);
        ctx.lineTo(center, center);
        ctx.fill();
        // четверть круга
        ctx.beginPath();
        ctx.lineTo(center - rOffset, center);
        ctx.arc(center, center, rOffset, -Math.PI, -Math.PI / 2);
        ctx.lineTo(center, center);
        ctx.fill();
    }
    drawAll() {
        this.drawBackground(this.ctx);
        this.drawHits(this.ctx);
    }
    redrawAll() {
        this.clearCanvas(this.ctx);
        this.drawAll();
    }
    redrawAim(e, ctx) {
        this.eraseAim();
        let scale = this.drawingR / this.rOffset;
        ctx.fillStyle = design.colors.aim;
        ctx.beginPath();
        ctx.arc(Math.round((Object(_model_functions__WEBPACK_IMPORTED_MODULE_1__["canvasRelativeX"])(e, this.canvasContainer) - this.center) * scale) / scale + this.center, Object(_model_functions__WEBPACK_IMPORTED_MODULE_1__["canvasRelativeY"])(e, this.canvasContainer), design.point.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    drawHit(ctx, x, y, fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.strokeStyle = design.colors.main;
        ctx.beginPath();
        ctx.arc(this.center + x * this.rOffset / this.drawingR, this.center - y * this.rOffset / this.drawingR, design.point.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
    drawBackground(ctx) {
        if (this.rValue != 0) {
            this.drawShapes(ctx, this.center, this.rOffset);
        }
        this.drawCoordsSystem(this.ctx);
        this.drawLetters(ctx, this.center, this.rOffset);
    }
    drawHits(ctx) {
        ctx.lineWidth = design.point.outlineWidth;
        let hits = this.matchingRads ? this.hits.filter(point => point.r == this.rValue) : this.hits;
        hits.forEach(point => this.drawHit(ctx, point.x, point.y, design.colors[point.result ? 'hit' : 'miss']));
    }
    get drawingR() {
        return this.rValue == 0 ? 1 : this.rValue;
    }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(); };
CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasComponent, selectors: [["app-canvas"]], viewQuery: function CanvasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasContainerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aimCanvasRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    } }, inputs: { wh: ["widthHeight", "wh"], rValue: ["radius", "rValue"], matchingRads: ["matching-radius", "matchingRads"], $hits: ["hits", "$hits"] }, outputs: { onSubmit: "onSubmit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 8, consts: [[3, "click", "mousemove", "mouseout"], ["container", ""], [3, "height", "width"], ["canvas", ""], ["aim", ""]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_Template_div_click_0_listener($event) { return ctx.submitHit($event); })("mousemove", function CanvasComponent_Template_div_mousemove_0_listener($event) { return ctx.redrawAim($event, ctx.aimCtx); })("mouseout", function CanvasComponent_Template_div_mouseout_0_listener() { return ctx.eraseAim(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 2, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.wh, "px")("width", ctx.wh, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.wh)("width", ctx.wh);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", ctx.wh)("width", ctx.wh);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ncanvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhbnZhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBQ0YiLCJmaWxlIjoiY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5jYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-canvas',
                templateUrl: './canvas.component.html',
                styleUrls: ['./canvas.component.scss']
            }]
    }], null, { canvasContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }], aimCanvasRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['aim']
        }], canvasRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], wh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['widthHeight']
        }], rValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['radius']
        }], matchingRads: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matching-radius']
        }], $hits: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hits']
        }], onSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "CF8s":
/*!*************************************************************************!*\
  !*** ./src/app/components/language-switch/language-switch.component.ts ***!
  \*************************************************************************/
/*! exports provided: LanguageSwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitchComponent", function() { return LanguageSwitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_language_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language-storage.service */ "3Mlf");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LanguageSwitchComponent {
    constructor(translateService, languageStorage) {
        this.translateService = translateService;
        this.languageStorage = languageStorage;
        this.languages = [
            { name: 'Русский', code: 'ru' },
            { name: 'English', code: 'en' }
        ];
    }
    ngOnInit() {
        var _a;
        let currentLangCode = (_a = this.translateService.currentLang) !== null && _a !== void 0 ? _a : this.translateService.defaultLang;
        this.selectedLanguage = this.languages.find(lang => lang.code == currentLangCode);
    }
    changeLanguage() {
        this.translateService.use(this.selectedLanguage.code);
        this.languageStorage.store(this.selectedLanguage.code);
    }
}
LanguageSwitchComponent.ɵfac = function LanguageSwitchComponent_Factory(t) { return new (t || LanguageSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_storage_service__WEBPACK_IMPORTED_MODULE_2__["LanguageStorageService"])); };
LanguageSwitchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguageSwitchComponent, selectors: [["app-language-switch"]], decls: 1, vars: 3, consts: [["optionLabel", "name", 3, "options", "ngModel", "showClear", "ngModelChange"]], template: function LanguageSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LanguageSwitchComponent_Template_p_dropdown_ngModelChange_0_listener($event) { return ctx.selectedLanguage = $event; })("ngModelChange", function LanguageSwitchComponent_Template_p_dropdown_ngModelChange_0_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.languages)("ngModel", ctx.selectedLanguage)("showClear", false);
    } }, directives: [primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1zd2l0Y2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageSwitchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-language-switch',
                templateUrl: './language-switch.component.html',
                styleUrls: ['./language-switch.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _services_language_storage_service__WEBPACK_IMPORTED_MODULE_2__["LanguageStorageService"] }]; }, null); })();


/***/ }),

/***/ "M2V3":
/*!********************************************************!*\
  !*** ./src/app/pages/auth-page/auth-page.component.ts ***!
  \********************************************************/
/*! exports provided: AuthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function() { return AuthPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _model_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/functions */ "XwJM");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_display_mode_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/display-mode.service */ "YX19");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/language-switch/language-switch.component */ "CF8s");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _components_logged_in_card_logged_in_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/logged-in-card/logged-in-card.component */ "RPOy");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function AuthPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-message", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", error_r3);
} }
function AuthPageComponent_div_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VALIDATION.USERNAME_REQUIRED"), " ");
} }
const _c0 = function () { return { value: "4-15" }; };
function AuthPageComponent_div_23_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "VALIDATION.USERNAME_WRONG_LENGTH", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0)), " ");
} }
function AuthPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_div_23_small_1_Template, 3, 3, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_div_23_small_2_Template, 3, 5, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.usernameForm == null ? null : ctx_r1.usernameForm.errors == null ? null : ctx_r1.usernameForm.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.usernameForm == null ? null : ctx_r1.usernameForm.errors == null ? null : ctx_r1.usernameForm.errors.minlength) || (ctx_r1.usernameForm == null ? null : ctx_r1.usernameForm.errors == null ? null : ctx_r1.usernameForm.errors.maxlength));
} }
function AuthPageComponent_div_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VALIDATION.PASSWORD_REQUIRED"), " ");
} }
const _c1 = function () { return { value: "4" }; };
function AuthPageComponent_div_30_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "VALIDATION.PASSWORD_WRONG_LENGTH", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1)), " ");
} }
function AuthPageComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthPageComponent_div_30_small_1_Template, 3, 3, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthPageComponent_div_30_small_2_Template, 3, 5, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.passwordForm == null ? null : ctx_r2.passwordForm.errors == null ? null : ctx_r2.passwordForm.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.passwordForm == null ? null : ctx_r2.passwordForm.errors == null ? null : ctx_r2.passwordForm.errors.minlength);
} }
class AuthPageComponent {
    constructor(formBuilder, authService, router, dms) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.dms = dms;
        this.window = window;
        this.authForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]]
        });
    }
    login() {
        this.authService.login(this.credentials).subscribe(() => Object(_model_functions__WEBPACK_IMPORTED_MODULE_2__["route"])('/', this.router));
    }
    register() {
        this.authService.register(this.credentials).subscribe(() => Object(_model_functions__WEBPACK_IMPORTED_MODULE_2__["route"])('/', this.router));
    }
    get usernameForm() {
        return this.authForm.get('username');
    }
    get passwordForm() {
        return this.authForm.get('password');
    }
    get credentials() {
        return this.authForm.value;
    }
    fillAdmin() {
        this.authForm.setValue({ username: 'admin', password: 'admin' });
    }
}
AuthPageComponent.ɵfac = function AuthPageComponent_Factory(t) { return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_display_mode_service__WEBPACK_IMPORTED_MODULE_5__["DisplayModeService"])); };
AuthPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthPageComponent, selectors: [["app-auth-page"]], decls: 42, vars: 33, consts: [[1, "p-toolbar-group-left", 2, "padding", "10px"], [1, "p-toolbar-group-right"], [1, "page", "p-grid", "p-align-center", "p-justify-center", "vertical-container"], [1, "login-div", "p-col", "p-col-align-center"], [3, "hidden"], [2, "text-align", "center"], ["style", "text-align: center", 4, "ngIf"], [3, "formGroup"], [1, "p-field"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "pInputText", "", "formControlName", "username", 3, "placeholder"], ["class", "p-invalid", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "pPassword", "", "pInputText", "", "formControlName", "password", 3, "placeholder"], [1, "p-grid", "p-justify-around"], [3, "disabled", "click"], [3, "click"], ["icon", "pi pi-github", 3, "click"], ["severity", "error", 3, "text"], [1, "p-invalid"], [4, "ngIf"]], template: function AuthPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-language-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthPageComponent_div_14_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AuthPageComponent_div_23_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AuthPageComponent_div_30_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthPageComponent_Template_p_button_click_32_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthPageComponent_Template_p_button_click_35_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthPageComponent_Template_p_button_click_38_listener() { return ctx.fillAdmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "[Admin]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthPageComponent_Template_p_button_click_40_listener() { return ctx.window.open("https://github.com/AlexanderIlin2005/web-lab4", "_blank"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-logged-in-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 15, "OTHER.AUTH_PAGE_TITLE"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 19, "MODES." + ctx.dms.mode)), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.authService.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 21, "AUTH.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 23, ctx.authService.error$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 25, "AUTH.USERNAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.usernameForm == null ? null : ctx.usernameForm.invalid) && (ctx.usernameForm == null ? null : ctx.usernameForm.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 27, "AUTH.PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.passwordForm == null ? null : ctx.passwordForm.invalid) && (ctx.passwordForm == null ? null : ctx.passwordForm.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.authForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 29, "BUTTONS.LOG_IN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.authForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 31, "BUTTONS.SIGN_UP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.authService.loggedIn);
    } }, directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_7__["LanguageSwitchComponent"], primeng_card__WEBPACK_IMPORTED_MODULE_8__["Card"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_password__WEBPACK_IMPORTED_MODULE_11__["PasswordDirective"], primeng_button__WEBPACK_IMPORTED_MODULE_12__["Button"], _components_logged_in_card_logged_in_card_component__WEBPACK_IMPORTED_MODULE_13__["LoggedInCardComponent"], primeng_message__WEBPACK_IMPORTED_MODULE_14__["UIMessage"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".login-div[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n\nform[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n#loggedInCard[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dGgtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImF1dGgtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1kaXYge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xufVxuXG5mb3JtID4gKiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNsb2dnZWRJbkNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth-page',
                templateUrl: './auth-page.component.html',
                styleUrls: ['./auth-page.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_display_mode_service__WEBPACK_IMPORTED_MODULE_5__["DisplayModeService"] }]; }, null); })();


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/functions */ "XwJM");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(routeSnap, state) {
        if (!this.auth.loggedIn) {
            Object(_model_functions__WEBPACK_IMPORTED_MODULE_1__["route"])('auth', this.router);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "RPOy":
/*!***********************************************************************!*\
  !*** ./src/app/components/logged-in-card/logged-in-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoggedInCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInCardComponent", function() { return LoggedInCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







class LoggedInCardComponent {
    constructor(authService) {
        this.authService = authService;
    }
    openGithub() {
        window.open('https://github.com/AlexanderIlin2005/web-lab4', '_blank');
    }
}
LoggedInCardComponent.ɵfac = function LoggedInCardComponent_Factory(t) { return new (t || LoggedInCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoggedInCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoggedInCardComponent, selectors: [["app-logged-in-card"]], decls: 18, vars: 16, consts: [[3, "click"], ["id", "routerButton", "routerLink", "/"], ["icon", "pi pi-github", 3, "click"]], template: function LoggedInCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoggedInCardComponent_Template_p_button_click_9_listener() { return ctx.authService.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoggedInCardComponent_Template_p_button_click_15_listener() { return ctx.openGithub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "OTHER.WELCOME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "OTHER.SIGNED_IN_AS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "BUTTONS.SIGN_OUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "BUTTONS.GO_TO_MAIN_PAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 14, "BUTTONS.GO_TO_GITHUB"), " ");
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["Button"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["p-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#routerButton[_ngcontent-%COMP%] {\n  margin: 0 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2dlZC1pbi1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoibG9nZ2VkLWluLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNyb3V0ZXJCdXR0b24ge1xuICBtYXJnaW46IDAgMC4zcmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggedInCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logged-in-card',
                templateUrl: './logged-in-card.component.html',
                styleUrls: ['./logged-in-card.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(titleService, translateService) {
        this.titleService = titleService;
        this.translateService = translateService;
        translateService.get('OTHER.BROWSER_TITLE').subscribe(title => titleService.setTitle(title));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "WXUZ":
/*!*****************************************************!*\
  !*** ./src/app/services/error-translate.service.ts ***!
  \*****************************************************/
/*! exports provided: ErrorTranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorTranslateService", function() { return ErrorTranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class ErrorTranslateService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    getLocalizedErrorMessage(errorResp) {
        let key = 'ERRORS.' + errorResp.error;
        return this.translateService.get(key).toPromise().then(text => text != key ? text : errorResp.message);
    }
}
ErrorTranslateService.ɵfac = function ErrorTranslateService_Factory(t) { return new (t || ErrorTranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
ErrorTranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorTranslateService, factory: ErrorTranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorTranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "XwJM":
/*!************************************!*\
  !*** ./src/app/model/functions.ts ***!
  \************************************/
/*! exports provided: route, canvasRelativeX, canvasRelativeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRelativeX", function() { return canvasRelativeX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRelativeY", function() { return canvasRelativeY; });
function route(url, router) {
    router.navigateByUrl(url).then(() => console.log('Navigated to ' + url));
}
function canvasRelativeX(event, canvasContainer) {
    return event.pageX - canvasContainer.offsetLeft;
}
function canvasRelativeY(event, canvasContainer) {
    return event.pageY - canvasContainer.offsetTop;
}


/***/ }),

/***/ "YX19":
/*!**************************************************!*\
  !*** ./src/app/services/display-mode.service.ts ***!
  \**************************************************/
/*! exports provided: DisplayModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayModeService", function() { return DisplayModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DisplayModeService {
    constructor(rendererFactory2) {
        this.rendererFactory2 = rendererFactory2;
        this.updateMode();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
        this.renderer.listen('window', 'resize', () => {
            console.log('resize detected');
            this.updateMode();
        });
    }
    updateMode() {
        let width = window.innerWidth;
        if (width >= 1052) {
            this.mode = 'desktop';
        }
        else if (width > 840) {
            this.mode = 'tablet';
        }
        else {
            this.mode = 'mobile';
        }
    }
}
DisplayModeService.ɵfac = function DisplayModeService_Factory(t) { return new (t || DisplayModeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"])); };
DisplayModeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DisplayModeService, factory: DisplayModeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayModeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/auth-page/auth-page.component */ "M2V3");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ "QIUk");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_hit_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/hit.service */ "rrdJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/password */ "+YxP");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/listbox */ "+07z");
/* harmony import */ var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/canvas/canvas.component */ "Bpjv");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/messages */ "dts7");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/message */ "FMpt");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var _components_logged_in_card_logged_in_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/logged-in-card/logged-in-card.component */ "RPOy");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/table/table.component */ "9pw4");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/language-switch/language-switch.component */ "CF8s");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var _services_language_storage_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./services/language-storage.service */ "3Mlf");





































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_31__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppModule {
    constructor(translate, languageStorage) {
        this.translate = translate;
        this.languageStorage = languageStorage;
        let lang = languageStorage.load();
        if (lang) {
            translate.use(lang);
        }
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_language_storage_service__WEBPACK_IMPORTED_MODULE_34__["LanguageStorageService"])); }, providers: [
        _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
        _services_hit_service__WEBPACK_IMPORTED_MODULE_16__["HitService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"],
        primeng_api__WEBPACK_IMPORTED_MODULE_25__["MessageService"],
        {
            provide: 'loginUrl',
            useValue: '/api/auth/login'
        },
        {
            provide: 'registerUrl',
            useValue: '/api/auth/register'
        },
        {
            provide: 'hitsUrl',
            useValue: '/api/hits'
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
            primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
            primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
            primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["ToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            primeng_password__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_20__["ListboxModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_23__["MessageModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_22__["MessagesModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_24__["ToastModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_26__["CheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            primeng_slider__WEBPACK_IMPORTED_MODULE_27__["SliderModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"].forRoot({
                // forRoot() provides and configures services at the same time
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]],
                },
                defaultLanguage: 'en'
            }),
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__["DropdownModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"],
        _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_21__["CanvasComponent"],
        _components_logged_in_card_logged_in_card_component__WEBPACK_IMPORTED_MODULE_28__["LoggedInCardComponent"],
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_29__["TableComponent"],
        _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_32__["LanguageSwitchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
        primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
        primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["ToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        primeng_password__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
        primeng_listbox__WEBPACK_IMPORTED_MODULE_20__["ListboxModule"],
        primeng_message__WEBPACK_IMPORTED_MODULE_23__["MessageModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_22__["MessagesModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_24__["ToastModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_26__["CheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_27__["SliderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__["DropdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                    _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_5__["AuthPageComponent"],
                    _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_21__["CanvasComponent"],
                    _components_logged_in_card_logged_in_card_component__WEBPACK_IMPORTED_MODULE_28__["LoggedInCardComponent"],
                    _components_table_table_component__WEBPACK_IMPORTED_MODULE_29__["TableComponent"],
                    _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_32__["LanguageSwitchComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonModule"],
                    primeng_card__WEBPACK_IMPORTED_MODULE_12__["CardModule"],
                    primeng_panel__WEBPACK_IMPORTED_MODULE_13__["PanelModule"],
                    primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__["ToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    primeng_password__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
                    primeng_listbox__WEBPACK_IMPORTED_MODULE_20__["ListboxModule"],
                    primeng_message__WEBPACK_IMPORTED_MODULE_23__["MessageModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_22__["MessagesModule"],
                    primeng_toast__WEBPACK_IMPORTED_MODULE_24__["ToastModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_26__["CheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    primeng_slider__WEBPACK_IMPORTED_MODULE_27__["SliderModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"].forRoot({
                        // forRoot() provides and configures services at the same time
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]],
                        },
                        defaultLanguage: 'en'
                    }),
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__["DropdownModule"],
                ],
                providers: [
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                    _services_hit_service__WEBPACK_IMPORTED_MODULE_16__["HitService"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"],
                    primeng_api__WEBPACK_IMPORTED_MODULE_25__["MessageService"],
                    {
                        provide: 'loginUrl',
                        useValue: '/api/auth/login'
                    },
                    {
                        provide: 'registerUrl',
                        useValue: '/api/auth/register'
                    },
                    {
                        provide: 'hitsUrl',
                        useValue: '/api/hits'
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateService"] }, { type: _services_language_storage_service__WEBPACK_IMPORTED_MODULE_34__["LanguageStorageService"] }]; }, null); })();


/***/ }),

/***/ "h6PX":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/functions */ "XwJM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_hit_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/hit.service */ "rrdJ");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _services_error_translate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/error-translate.service */ "WXUZ");
/* harmony import */ var _services_display_mode_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/display-mode.service */ "YX19");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ "5EWq");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/language-switch/language-switch.component */ "CF8s");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/panel */ "7CaW");
/* harmony import */ var _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/canvas/canvas.component */ "Bpjv");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ "Ji6n");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/slider */ "+la4");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/listbox */ "+07z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/table/table.component */ "9pw4");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

























function MainPageComponent_div_46_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VALIDATION.Y_MUST_BE_IN_RANGE"), " (-5...5) ");
} }
function MainPageComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_46_small_1_Template, 3, 3, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.yForm.errors == null ? null : ctx_r0.yForm.errors.min) || (ctx_r0.yForm.errors == null ? null : ctx_r0.yForm.errors.max));
} }
function MainPageComponent_small_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VALIDATION.RADIUS_MUST_BE_POSITIVE"), " ");
} }
const _c0 = function () { return { "max-height": "100px" }; };
class MainPageComponent {
    constructor(authService, router, fb, hitService, messageService, errorTranslateService, dms) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.hitService = hitService;
        this.messageService = messageService;
        this.errorTranslateService = errorTranslateService;
        this.dms = dms;
        this.$hits = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.xValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3].reverse();
        this.rValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3].reverse();
        this.canvasRadius = 1;
        this.matchingRadius = false;
        this.canvasWidthHeight = 500;
        this.pointForm = fb.group({
            x: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            y: ['0', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(-4.99999), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(4.99999)]],
            r: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0)]]
        });
    }
    ngOnInit() {
        var _a;
        this.username = (_a = this.authService.username) !== null && _a !== void 0 ? _a : '[something is wrong]';
        this.getHits();
    }
    submitHit(hit) {
        console.log(`Submitting hit with x = ${hit.x}, y = ${hit.y}, r = ${hit.r}`);
        this.hitService.postHit(hit).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this))).subscribe(() => this.getHits());
    }
    getHits() {
        console.log(`GET hits`);
        this.hitService.getHits().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this))).subscribe(hits => this.$hits.next(hits));
    }
    clearHits() {
        console.log(`DELETE hits (clear)`);
        this.hitService.deleteHits().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this))).subscribe(() => this.$hits.next([]));
    }
    handleError(errorResp) {
        this.errorTranslateService.getLocalizedErrorMessage(errorResp).then(message => {
            this.messageService.add({
                detail: message,
                severity: 'error',
                closable: true,
                key: 'main',
                life: 5 * 1000
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResp);
    }
    signOut() {
        this.authService.signOut();
        Object(_model_functions__WEBPACK_IMPORTED_MODULE_1__["route"])('/auth', this.router);
    }
    get yForm() {
        return this.pointForm.get('y');
    }
    get rForm() {
        return this.pointForm.get('r');
    }
    isNaN(value) {
        return Number.isNaN(value);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_hit_service__WEBPACK_IMPORTED_MODULE_7__["HitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_error_translate_service__WEBPACK_IMPORTED_MODULE_9__["ErrorTranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_display_mode_service__WEBPACK_IMPORTED_MODULE_10__["DisplayModeService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 63, vars: 59, consts: [["position", "top-left", "key", "main"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], [3, "click"], ["routerLink", "/auth"], [1, "container"], ["id", "canvas-panel", 3, "header"], [3, "radius", "widthHeight", "matching-radius", "hits", "onSubmit"], [1, "p-field-checkbox"], ["id", "matching-radius", 3, "ngModel", "binary", "ngModelChange"], ["for", "matching-radius"], [3, "ngModel", "step", "min", "max", "ngModelChange"], ["id", "manual-input-panel", 3, "header"], [2, "text-align", "center", 3, "formGroup"], [1, "p-field"], [1, "p-inputgroup", 2, "align-items", "center"], [2, "margin-right", "10px"], ["formControlName", "x", 3, "options", "listStyle"], ["id", "y-input"], [2, "margin-right", "15px"], ["type", "range", "min", "-5", "max", "5", "step", "0.01", "formControlName", "y"], ["class", "p-invalid", 4, "ngIf"], ["formControlName", "r", 3, "options", "listStyle"], ["class", "p-invalid", "style", "margin-left: 0.5rem", 4, "ngIf"], ["id", "manual-input-buttons"], ["id", "submit", 3, "disabled", "click"], ["id", "clear", 3, "click"], ["id", "table-panel", 3, "header"], [3, "value"], [1, "p-invalid"], [4, "ngIf"], [1, "p-invalid", 2, "margin-left", "0.5rem"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-toast", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_p_button_click_11_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-language-switch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-canvas", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function MainPageComponent_Template_app_canvas_onSubmit_21_listener($event) { return ctx.submitHit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainPageComponent_Template_p_checkbox_ngModelChange_24_listener($event) { return ctx.matchingRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainPageComponent_Template_p_slider_ngModelChange_31_listener($event) { return ctx.canvasRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p-panel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "X:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p-listbox", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MainPageComponent_div_46_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "R:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "p-listbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MainPageComponent_small_52_Template, 3, 3, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_p_button_click_54_listener() { return ctx.submitHit(ctx.pointForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_p_button_click_57_listener() { return ctx.clearHits(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p-panel", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 32, "OTHER.MODE"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 36, "MODES." + ctx.dms.mode)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 38, "BUTTONS.SIGN_OUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 40, "BUTTONS.GO_TO_AUTH_PAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 42, "HEADERS.CANVAS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", ctx.canvasRadius)("widthHeight", ctx.canvasWidthHeight)("matching-radius", ctx.matchingRadius)("hits", ctx.$hits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.matchingRadius)("binary", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 44, "OTHER.MATCHING_RADIUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R = ", ctx.canvasRadius, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.canvasRadius)("step", 1)("min", 0)("max", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 46, "HEADERS.MANUAL_INPUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pointForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.xValues)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Y = ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 48, ctx.yForm.value, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.yForm.invalid && ctx.yForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.rValues)("listStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rForm.value < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pointForm.invalid || ctx.isNaN(ctx.yForm.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 51, "BUTTONS.SUBMIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 53, "BUTTONS.CLEAR_HITS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 55, "HEADERS.TABLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.$hits);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_11__["Toast"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], primeng_button__WEBPACK_IMPORTED_MODULE_13__["Button"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_14__["LanguageSwitchComponent"], primeng_panel__WEBPACK_IMPORTED_MODULE_15__["Panel"], _components_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_16__["CanvasComponent"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__["Checkbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], primeng_slider__WEBPACK_IMPORTED_MODULE_18__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], primeng_listbox__WEBPACK_IMPORTED_MODULE_19__["Listbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _components_table_table_component__WEBPACK_IMPORTED_MODULE_21__["TableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DecimalPipe"]], styles: ["#y-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: stretch;\n  flex-wrap: nowrap;\n}\n#y-input[_ngcontent-%COMP%]   input[type=range][_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: auto;\n  max-width: 300px;\n}\n.container[_ngcontent-%COMP%] {\n  margin: 0.5rem -0.25rem;\n  justify-content: stretch;\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n}\n#table-panel[_ngcontent-%COMP%] {\n  min-width: 250px;\n  flex-basis: 250px;\n  flex-grow: 10000;\n}\n@media screen and (min-width: 1052px) {\n  #manual-input-panel[_ngcontent-%COMP%] {\n    min-width: 300px;\n    flex-basis: 300px;\n    flex-grow: 1;\n  }\n}\n@media screen and (min-width: 840px) and (max-width: 1052px) {\n  #table-panel[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  #manual-input-panel[_ngcontent-%COMP%] {\n    min-width: 250px;\n    flex-basis: 250px;\n    flex-grow: 1;\n  }\n}\n@media screen and (max-width: 840px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  #canvas-panel[_ngcontent-%COMP%] {\n    align-self: center;\n  }\n}\np-button#clear[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n.p-toolbar-group-right[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKO0FBZUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVpGO0FBZ0JBO0VBQ0Usd0JBQUE7QUFiRjtBQWdCQTtFQWxCRSxnQkFtQnNCO0VBbEJ0QixpQkFrQnNCO0VBQ3RCLGdCQUFBO0FBWkY7QUFnQkE7RUFDRTtJQXpCQSxnQkEwQndCO0lBekJ4QixpQkF5QndCO0lBQ3RCLFlBQUE7RUFaRjtBQUNGO0FBZ0JBO0VBQ0U7SUFDRSxnQkFBQTtFQWRGOztFQWdCQTtJQXBDQSxnQkFxQ3dCO0lBcEN4QixpQkFvQ3dCO0lBQ3RCLFlBQUE7RUFaRjtBQUNGO0FBZ0JBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBZEY7O0VBZ0JBO0lBQ0Usa0JBQUE7RUFiRjtBQUNGO0FBZ0JBO0VBQ0UsbUJBQUE7QUFkRjtBQWlCQTtFQUNFLG1CQUFBO0FBZEYiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ktaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGlucHV0W3R5cGU9J3JhbmdlJ10ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICB9XG59XG5cbi8vIEJyZWFrcG9pbnRzXG4kbW9iaWxlOiAwO1xuJHRhYmxldDogODQwcHg7XG4kZGVza3RvcDogMTA1MnB4O1xuXG4vLyBNaXhpbnNcbkBtaXhpbiBzaHJpbmstbGltaXQoJHdpZHRoKSB7XG4gIG1pbi13aWR0aDogJHdpZHRoO1xuICBmbGV4LWJhc2lzOiAkd2lkdGg7XG59XG5cbi8vIFBhbmVsIGNvbnRhaW5lclxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMC41cmVtIC0wLjI1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7IC8vIGhvcml6b250YWwgYWxpZ25tZW50XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvLyBvbiB0b3Agb2YgaXRlbXNcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vLyBQYW5lbHNcbi5jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luOiAwIDAuMjVyZW0gMC41cmVtO1xufVxuXG4jdGFibGUtcGFuZWwge1xuICBAaW5jbHVkZSBzaHJpbmstbGltaXQoMjUwcHgpO1xuICBmbGV4LWdyb3c6IDEwMDAwO1xufVxuXG4vLyBEZXNrdG9wXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xuICAjbWFudWFsLWlucHV0LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBzaHJpbmstbGltaXQoMzAwcHgpO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG4vLyBUYWJsZXRcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR0YWJsZXQpIGFuZCAobWF4LXdpZHRoOiAkZGVza3RvcCkge1xuICAjdGFibGUtcGFuZWwge1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7IC8vIGZvcmNlcyB0YWJsZS1wYW5lbCBiZSBzY3JlZW4td2lkZSBvbiBuZXh0IHJvd1xuICB9XG4gICNtYW51YWwtaW5wdXQtcGFuZWwge1xuICAgIEBpbmNsdWRlIHNocmluay1saW1pdCgyNTBweCk7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi8vIE1vYmlsZVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG4gICNjYW52YXMtcGFuZWwge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuXG5wLWJ1dHRvbiNjbGVhciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG59XG5cbi5wLXRvb2xiYXItZ3JvdXAtcmlnaHQgPiAqIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_hit_service__WEBPACK_IMPORTED_MODULE_7__["HitService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }, { type: _services_error_translate_service__WEBPACK_IMPORTED_MODULE_9__["ErrorTranslateService"] }, { type: _services_display_mode_service__WEBPACK_IMPORTED_MODULE_10__["DisplayModeService"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-translate.service */ "WXUZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class AuthService {
    constructor(loginUrl, registerUrl, errorTranslateService, http) {
        this.loginUrl = loginUrl;
        this.registerUrl = registerUrl;
        this.errorTranslateService = errorTranslateService;
        this.http = http;
        this.storage = localStorage;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    login(user) {
        return this.postCredentials(this.loginUrl, user);
    }
    register(user) {
        return this.postCredentials(this.registerUrl, user);
    }
    signOut() {
        console.log(`${this.username} signed out`);
        this.removeUserToken();
    }
    postCredentials(url, user) {
        return this.http.post(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(response => this.saveUserToken(response.token, user.username)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError.bind(this)));
    }
    handleError(errorResp) {
        this.errorTranslateService.getLocalizedErrorMessage(errorResp)
            .then(message => {
            this.error$.next(message);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorResp);
    }
    saveUserToken(token, username) {
        this.storage.setItem('token', token);
        this.storage.setItem('username', username);
    }
    removeUserToken() {
        this.storage.removeItem('token');
        this.storage.removeItem('username');
    }
    get loggedIn() {
        return (this.token != null);
    }
    get token() {
        return this.storage.getItem('token');
    }
    get username() {
        return this.storage.getItem('username');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('loginUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('registerUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_translate_service__WEBPACK_IMPORTED_MODULE_3__["ErrorTranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['loginUrl']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['registerUrl']
            }] }, { type: _error_translate_service__WEBPACK_IMPORTED_MODULE_3__["ErrorTranslateService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rrdJ":
/*!*****************************************!*\
  !*** ./src/app/services/hit.service.ts ***!
  \*****************************************/
/*! exports provided: HitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitService", function() { return HitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "lGQG");





class HitService {
    constructor(url, authService, http) {
        this.url = url;
        this.authService = authService;
        this.http = http;
    }
    getHits() {
        return this.http.get(this.url, this.options);
    }
    postHit(hit) {
        return this.http.post(this.url, hit, this.options);
    }
    deleteHits() {
        return this.http.delete(this.url, this.options);
    }
    get options() {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ authorization: 'Bearer ' + this.authService.token })
        };
    }
}
HitService.ɵfac = function HitService_Factory(t) { return new (t || HitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('hitsUrl'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HitService, factory: HitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['hitsUrl']
            }] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth-page/auth-page.component */ "M2V3");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");







const routes = [
    {
        path: 'auth',
        component: _pages_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_2__["AuthPageComponent"]
    },
    {
        path: '',
        component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/compiler */ "1uSB");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map