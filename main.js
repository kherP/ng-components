(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../lib/src/button/button.module.ts":
/*!*********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/button.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SebButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebButtonModule", function() { return SebButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "../../lib/src/button/button.ts");
/* harmony import */ var _parse_source_example_parse_source_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-source-example/parse-source-example.component */ "../../lib/src/button/parse-source-example/parse-source-example.component.ts");





var SebButtonModule = /** @class */ (function () {
    function SebButtonModule() {
    }
    SebButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_button__WEBPACK_IMPORTED_MODULE_3__["SebButtonDirective"], _parse_source_example_parse_source_example_component__WEBPACK_IMPORTED_MODULE_4__["ParseSourceExampleComponent"]],
            exports: [_button__WEBPACK_IMPORTED_MODULE_3__["SebButtonDirective"]]
        })
    ], SebButtonModule);
    return SebButtonModule;
}());



/***/ }),

/***/ "../../lib/src/button/button.ts":
/*!**************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/button.ts ***!
  \**************************************************************************/
/*! exports provided: SebButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebButtonDirective", function() { return SebButtonDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SebButtonDirective = /** @class */ (function () {
    function SebButtonDirective(elementRef) {
        this.elementRef = elementRef;
        this._btn = true;
        this._disabled = null;
        this._type = 'primary';
        this._outline = false;
        this._size = null;
        this._setClasses();
    }
    Object.defineProperty(SebButtonDirective.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (value && value !== this._type) {
                this._removeClasses();
                this._type = value;
                this._setClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SebButtonDirective.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = "" + value === 'true' ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SebButtonDirective.prototype, "outline", {
        get: function () {
            return this._outline;
        },
        set: function (value) {
            value = value != null && "" + value !== 'false';
            if (this._outline !== value) {
                this._removeClasses();
                this._outline = value;
                this._setClasses();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SebButtonDirective.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    SebButtonDirective.prototype._setClasses = function () {
        var styleClass = this.outline ? "btn-outline-" + this.type : "btn-" + this.type;
        this.elementRef.nativeElement.classList.add(styleClass);
    };
    SebButtonDirective.prototype._removeClasses = function () {
        var styleClass = this.outline ? "btn-outline-" + this.type : "btn-" + this.type;
        this.elementRef.nativeElement.classList.remove(styleClass);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.btn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SebButtonDirective.prototype, "_btn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SebButtonDirective.prototype, "_disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('seb-btn'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SebButtonDirective.prototype, "type", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SebButtonDirective.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], SebButtonDirective.prototype, "outline", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], SebButtonDirective.prototype, "size", null);
    SebButtonDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: 'button[seb-btn], a[seb-btn], span[seb-btn], input[seb-btn]',
            host: {
                '[class.btn-lg]': 'size === "lg"',
                '[class.btn-sm]': 'size === "sm"'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SebButtonDirective);
    return SebButtonDirective;
}());



/***/ }),

/***/ "../../lib/src/button/index.ts":
/*!*************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/index.ts ***!
  \*************************************************************************/
/*! exports provided: SebButtonModule, SebButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "../../lib/src/button/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SebButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SebButtonDirective"]; });




/***/ }),

/***/ "../../lib/src/button/parse-source-example/parse-source-example.component.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/parse-source-example/parse-source-example.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ParseSourceExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseSourceExampleComponent", function() { return ParseSourceExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


/**
 * Some description for the component
 */
var ParseSourceExampleComponent = /** @class */ (function () {
    function ParseSourceExampleComponent() {
        /**
         * Lorem ipsum dolar sit event
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.someValue = 'hello'; // holds some value for the component
        this._time = 'time';
        this._food = 'burger';
    }
    Object.defineProperty(ParseSourceExampleComponent.prototype, "date", {
        get: function () {
            return this._date;
        },
        /**
         * Some description for the date input, like format should be ex. `YYYYMMDD`.
         * Use it to display date in a specific format inside the component.
         */
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseSourceExampleComponent.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParseSourceExampleComponent.prototype, "food", {
        /**
         * Food for the component ex. `banana` [show banana](https://www.google.se/search?q=banana)
         */
        get: function () {
            return this._food;
        },
        set: function (value) {
            this._food = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Foo bar function for demo purposes
     */
    ParseSourceExampleComponent.prototype.foo = function (bar, hoo) {
        return !!bar;
    };
    ParseSourceExampleComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], ParseSourceExampleComponent.prototype, "date", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ParseSourceExampleComponent.prototype, "time", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ParseSourceExampleComponent.prototype, "food", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ParseSourceExampleComponent.prototype, "event", void 0);
    ParseSourceExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-doc-parse',
            template: "\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParseSourceExampleComponent);
    return ParseSourceExampleComponent;
}());



/***/ }),

/***/ "../../lib/src/button/public_api.ts":
/*!******************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/public_api.ts ***!
  \******************************************************************************/
/*! exports provided: SebButtonModule, SebButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.module */ "../../lib/src/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonModule", function() { return _button_module__WEBPACK_IMPORTED_MODULE_0__["SebButtonModule"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "../../lib/src/button/button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonDirective", function() { return _button__WEBPACK_IMPORTED_MODULE_1__["SebButtonDirective"]; });





/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/button/button.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/button/button.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {\n  Directive,\n  ElementRef,\n  HostBinding,\n  Input\n} from '@angular/core';\n\n\nexport type SebButtonType = 'primary' | 'secondary' | 'link' | 'light';\nexport type SebButtonSize = 'lg' | 'sm' | null;\n\n@Directive({\n  selector: 'button[seb-btn], a[seb-btn], span[seb-btn], input[seb-btn]',\n  host: {\n    '[class.btn-lg]' : 'size === \"lg\"',\n    '[class.btn-sm]' : 'size === \"sm\"'\n  }\n})\nexport class SebButtonDirective {\n\n  @HostBinding('class.btn') _btn = true;\n  @HostBinding('attr.disabled') _disabled = null;\n\n  @Input('seb-btn')\n  get type(): SebButtonType {\n    return this._type;\n  }\n\n  set type(value: SebButtonType) {\n    if (value && value !== this._type) {\n      this._removeClasses();\n      this._type = value;\n      this._setClasses();\n    }\n  }\n\n  private _type: SebButtonType = 'primary';\n\n  @Input()\n  get disabled(): boolean {\n    return this._disabled;\n  }\n\n  set disabled(value) {\n    this._disabled = `${value}` === 'true' ? true : null;\n  }\n\n  @Input()\n  get outline(): boolean {\n    return this._outline;\n  }\n\n  set outline(value: boolean) {\n\n    value = value != null && `${value}` !== 'false';\n\n    if (this._outline !== value) {\n      this._removeClasses();\n      this._outline = value;\n      this._setClasses();\n    }\n  }\n\n  private _outline: boolean = false;\n\n  @Input()\n  get size(): SebButtonSize {\n    return this._size;\n  }\n\n  set size(value: SebButtonSize) {\n      this._size = value;\n  }\n\n  private _size: SebButtonSize = null;\n\n  constructor(public elementRef: ElementRef) {\n    this._setClasses();\n  }\n\n  private _setClasses() {\n    const styleClass = this.outline ? `btn-outline-${this.type}` : `btn-${this.type}`;\n    this.elementRef.nativeElement.classList.add(styleClass);\n  }\n\n  public _removeClasses() {\n    const styleClass = this.outline ? `btn-outline-${this.type}` : `btn-${this.type}`;\n    this.elementRef.nativeElement.classList.remove(styleClass);\n  }\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/button/parse-source-example/parse-source-example.component.ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/button/parse-source-example/parse-source-example.component.ts ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';\nimport {Observable} from 'rxjs';\n\n/**\n * Some description for the component\n */\n@Component({\n  selector: 'lib-doc-parse',\n  template: `\n  `,\n  styles: []\n})\nexport class ParseSourceExampleComponent implements OnInit {\n\n  /**\n   * Some description for the date input, like format should be ex. `YYYYMMDD`.\n   * Use it to display date in a specific format inside the component.\n   */\n  @Input() set date(value: number) {\n    this._date = value;\n  }\n\n  get date(): number {\n    return this._date;\n  }\n\n  @Input() get time(): string {\n    return this._time;\n  }\n  set time(value: string) {\n    this._time = value;\n  }\n  /**\n   * Food for the component ex. `banana` [show banana](https://www.google.se/search?q=banana)\n   */\n  @Input() get food(): any {\n    return this._food;\n  }\n  set food(value: any) {\n    this._food = value;\n  }\n  /**\n   * Lorem ipsum dolar sit event\n   */\n  @Output() event: EventEmitter<any> = new EventEmitter();\n  someValue: string = 'hello'; // holds some value for the component\n  $anotherValue: Observable<boolean>; // observable for another value\n  private _time: string = 'time';\n  private _food: any = 'burger';\n  private _date: number;\n  constructor() { }\n\n  /**\n   * Foo bar function for demo purposes\n   */\n  foo(bar: string, hoo?: number): boolean {\n    return !!bar;\n  }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.directives.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/modal/modal.directives.ts ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {Directive} from '@angular/core';\n\n@Directive({\n  selector: '[sebModalTitle]',\n  host: {\n    '[class]': '\"modal-title\"'\n  }\n})\nexport class SebModalTitle { }\n\n@Directive({\n  selector: 'seb-modal-header, [sebModalHeader]',\n  host: {\n    '[class]': '\"modal-header\"'\n  }\n})\nexport class SebModalHeader { }\n\n@Directive({\n  selector: 'seb-modal-body, [sebModalBody]',\n  host: {\n    '[class]': '\"modal-body\"',\n    'style': 'display:block;'\n  }\n})\nexport class SebModalBody { }\n\n@Directive({\n  selector: 'seb-modal-footer, [sebModalFooter]',\n  host: {\n    '[class]': '\"modal-footer\"'\n  }\n})\nexport class SebModalFooter { }\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.service.ts":
/*!**************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/modal/modal.service.ts ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {\n  ApplicationRef,\n  ComponentFactory, ComponentFactoryResolver,\n  ComponentRef, Inject,\n  Injectable,\n  InjectionToken,\n  Injector, Renderer2, RendererFactory2,\n  Type\n} from '@angular/core';\nimport {SebModalConfig} from './modal.config';\nimport {SebModalInjector} from './modal.injector';\nimport {SebModalRef} from './modal.ref';\nimport {DOCUMENT, Location} from '@angular/common';\nimport {SebModal} from './modal';\nimport {SebModalBackdrop} from './modal.backdrop';\nimport {take} from 'rxjs/operators';\n\nexport const SEB_MODAL_DATA = new InjectionToken<any>('SebModalData');\nexport const SEB_DEFAULT_CONFIG = <SebModalConfig>({\n  type: null,\n  closable: true,\n  closeOnNavigationChanges: true,\n  data: null,\n  classes: null\n});\n\n@Injectable({providedIn: 'root'})\nexport class SebModalService {\n\n  constructor(\n    private injector: Injector,\n    private appRef: ApplicationRef,\n    private rendererFactory: RendererFactory2,\n    private cmpFactoryResolver: ComponentFactoryResolver,\n    private location: Location,\n    @Inject(DOCUMENT) private document) { }\n\n  public open<T>(cmp: Type<T>, config: SebModalConfig = {}): SebModalRef {\n\n    config = {...SEB_DEFAULT_CONFIG, ...config};\n\n    const modalRef: SebModalRef = new SebModalRef(this.location, config);\n    const cmpRef: ComponentRef<T> = this._getCmpRef(cmp, this._getInjector(modalRef, config.data));\n    const modalCmpRef: ComponentRef<SebModal> = this._getCmpRef(SebModal, this.injector, [[cmpRef.location.nativeElement]]);\n    const backdropCmpRef: ComponentRef<SebModalBackdrop> = this._getCmpRef(SebModalBackdrop, this.injector);\n\n    modalCmpRef.instance.modalRef = modalRef;\n\n    this._attachToView(modalCmpRef);\n    this._attachToView(backdropCmpRef);\n\n    const renderer: Renderer2 = this._getRenderer();\n    renderer.addClass(cmpRef.location.nativeElement, 'modal-content');\n    renderer.setStyle(this.document.body, 'overflow', 'hidden');\n    renderer.addClass(this.document.body, 'modal-open');\n\n    modalRef.onClose$.pipe(\n      take(1)\n    ).subscribe(() => {\n      renderer.removeStyle(this.document.body, 'overflow');\n      renderer.removeClass(this.document.body, 'modal-open');\n      this._detachFromView(modalCmpRef);\n      this._detachFromView(backdropCmpRef);\n\n      [modalCmpRef, backdropCmpRef, cmpRef]\n        .forEach(cmRef => {\n          cmRef.destroy();\n          cmRef = null;\n        })\n    });\n\n    return modalRef;\n  }\n\n  private _getRenderer(): Renderer2 {\n    return this.rendererFactory.createRenderer(null, null);\n  }\n\n\n  private _attachToView<T>(cmpRef: ComponentRef<T>): void {\n    const root: HTMLElement = this.document.body;\n    root.appendChild(cmpRef.location.nativeElement);\n  }\n\n\n  private _detachFromView<T>(cmpRef: ComponentRef<T>): void {\n    const el: HTMLElement = cmpRef.location.nativeElement;\n    el.parentNode.removeChild(el);\n  }\n\n\n  private _getInjector<D>(modalRef: SebModalRef, data: D): SebModalInjector {\n    const tokens = new WeakMap();\n    tokens.set(SEB_MODAL_DATA, data);\n    tokens.set(SebModalRef, modalRef);\n    return new SebModalInjector(this.injector, tokens);\n  }\n\n\n  private _getCmpRef<T>(cmp: Type<T>, injector: Injector, projectableNodes?: any[][]): ComponentRef<T> {\n    const cmpFactory: ComponentFactory<T> =\n      this.cmpFactoryResolver.resolveComponentFactory(cmp);\n    const cmpRef: ComponentRef<T> =\n      cmpFactory.create(injector, projectableNodes);\n    this.appRef.attachView(cmpRef.hostView);\n    return cmpRef;\n  }\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/modal/modal.ts ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {Component, ElementRef, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';\nimport {SebModalRef} from './modal.ref';\nimport {DOCUMENT} from '@angular/common';\nimport {FocusTrap, FocusTrapFactory} from '../core/focus/focus.trap';\n\n\n@Component({\n  templateUrl: 'modal.html',\n  host: {\n    '[class]': '\"modal fade show d-block\"',\n    '[class.modal-fullscreen]': 'modalRef?.config?.type === \"fullscreen\"',\n    '[class.modal-aside]': 'modalRef?.config?.type === \"aside-left\" || modalRef?.config?.type === \"aside-right\"',\n    '[class.modal-aside-left]': 'modalRef?.config?.type === \"aside-left\"',\n    '[class.modal-aside-right]': 'modalRef?.config?.type === \"aside-right\"',\n    'tabindex': '-1',\n    'role': 'dialog'\n  }\n})\nexport class SebModal implements OnInit, OnDestroy {\n\n  private focusTrap: FocusTrap;\n  public modalRef: SebModalRef;\n\n  constructor(\n    private elementRef: ElementRef,\n    private focusTrapFactory: FocusTrapFactory,\n    @Inject(DOCUMENT) private document) { }\n\n  @HostListener('keyup.esc') onEscKey() { this._close(); };\n  @HostListener('click', ['$event.target']) onBackdropClick(target) {\n    if (this.elementRef.nativeElement !== target) { return; }\n    this._close();\n  }\n\n  ngOnInit(): void {\n    this.focusTrap\n      = this.focusTrapFactory.trapFocus(this.elementRef.nativeElement);\n  }\n\n  private _close() {\n    if (\n      this.modalRef &&\n      this.modalRef.config &&\n      this.modalRef.config.closable) {\n        this.modalRef.close();\n    }\n  }\n\n  ngOnDestroy(): void {\n    if (this.focusTrap) {\n      this.focusTrap.restoreFocus();\n    }\n  }\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/buttons/examples/buttons/buttons.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/buttons/examples/buttons/buttons.component.html ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\ntitle: Buttons\ncomponentid: component-button\nvariantid: component-button-all\nurl: https://sebgroup.github.io/ng-components/components/buttons/examples\n-->\n\n<button seb-btn>Primary</button>\n<button seb-btn outline>Outlined</button>\n<button seb-btn=\"secondary\">Secondary</button>\n<button seb-btn=\"light\">Light</button>\n<button seb-btn=\"link\">Link</button>\n<button seb-btn size=\"sm\">Primary</button>\n<button seb-btn size=\"sm\" disabled=\"true\">Disabled</button>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/buttons/examples/buttons/buttons.component.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/buttons/examples/buttons/buttons.component.ts ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-buttons',\n  templateUrl: './buttons.component.html',\n  styleUrls: ['./buttons.component.scss']\n})\nexport class ButtonsComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/modal/examples/modal/modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/modal/examples/modal/modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\ntitle: Modal\ncomponentid: component-modal\nvariantid: component-modal-default\nurl: https://sebgroup.github.io/ng-components/components/buttons/examples\n-->\n\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal title</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Modal body text goes here.</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/modal/examples/modal/modal.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/modal/examples/modal/modal.component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-modal',\n  templateUrl: './modal.component.html',\n  styleUrls: ['./modal.component.scss']\n})\nexport class ModalComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "../../node_modules/typescript/lib sync recursive":
/*!**********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/typescript/lib sync ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/typescript/lib sync recursive";

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examples_components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/components/buttons/buttons.module */ "./src/app/examples/components/buttons/buttons.module.ts");
/* harmony import */ var _examples_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/components/modal/modal.module */ "./src/app/examples/components/modal/modal.module.ts");
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/installation/installation.component */ "./src/app/components/installation/installation.component.ts");






var routes = [
    {
        path: 'get-started',
        data: {
            icon: 'home'
        },
        children: [{
                path: '',
                redirectTo: 'install',
                pathMatch: 'full'
            }, {
                path: 'installation',
                component: _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_5__["InstallationComponent"]
            }]
    }, {
        path: 'components',
        data: {
            icon: 'cubes'
        },
        children: [{
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full'
            }, {
                path: 'buttons',
                children: _examples_components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ROUTES"]
            }, {
                path: 'modal',
                children: _examples_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ROUTES"]
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-navigation-bar></app-navigation-bar>-->\n<!--<app-mobile-navigation></app-mobile-navigation>\n<app-side-navigation></app-side-navigation>-->\n<ng-container *ngIf=\"!($isFullscreen | async)\">\n  <app-header></app-header>\n  <app-side-menu></app-side-menu>\n</ng-container>\n<!--<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-auto\">\n      <app-menu-navigation></app-menu-navigation>\n    </div>\n    <div class=\"col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>-->\n<div (window:scroll)=\"scroll($event)\" style=\"z-index: 0;\" [ngClass]=\"{'content': !($isFullscreen | async)}\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"mx-auto mt-5 mt-lg-0 pt-3 pt-lg-0\" style=\"max-width: 920px\">\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!($isFullscreen | async)\" class=\"py-3 text-center\">Version: <a href=\"{{'https://github.com/sebgroup/bootstrap/releases/' + versionLink}}\" target=\"_blank\" class=\"mr-3\">{{version}}</a>Build: {{travis_build_number}} </div>\n      </div>\n    </div>\n  </div>\n  <!--<app-sub-header [scrollPosition]=\"scrollPosition\"></app-sub-header>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n@media (min-width: 992px) {\n  .content {\n    margin-left: 16rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC1jb3JlL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBOzs7Ozs7RUN6REU7QUNzREU7RUN0REY7SUFDRSxrQkNQeUIsRUFBQSxFRFExQiIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cmVtOyB9IH1cbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9zdHlsZXMvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL21peGlucyc7XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAkbmdzZWItZG9jcy1tZW51LXdpZHRoO1xuICB9XG59XG5cbiIsIiRuZ3NlYi1kb2NzLW1lbnUtd2lkdGg6IDE2cmVtO1xuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.service */ "./src/app/components/menu/menu.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_example_page_example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/example-page/example-list/example-template/example.query */ "./src/app/components/example-page/example-list/example-template/example.query.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(faIconService, router, menuService, exampleQuery) {
        this.faIconService = faIconService;
        this.router = router;
        this.menuService = menuService;
        this.exampleQuery = exampleQuery;
        this.travis_build_number = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].travis_build_number;
        this.version = (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version === '0.0.0-semantically-released' || _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version === 'n/a') ?
            'unreleased dev version' : _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
        this.versionLink = (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version === '0.0.0-semantically-released' || _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version === 'n/a') ?
            'latest' : 'tag/v' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version;
        this.faIconService.defaultPrefix = 'fal';
    }
    AppComponent.prototype.ngOnInit = function () {
        var menuItems = this.router.config.reduce(function (prev, current) {
            var menuGroup = {
                text: current.path,
                icon: current.data.icon,
                children: current.children
                    .filter(function (child) { return child.path.length > 1; })
                    .map(function (child) {
                    return {
                        text: child.path,
                        path: current.path + '/' + child.path
                    };
                })
            };
            return prev.concat([tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, menuGroup)]);
        }, []);
        this.menuService.updateMenuItems(menuItems);
        this.$isFullscreen = this.exampleQuery.$isFullscreen
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
    };
    AppComponent.prototype.scroll = function ($event) {
        this.scrollPosition = $event.target.scrollingElement.scrollTop;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
            _components_example_page_example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_7__["ExampleQuery"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/side-menu.component */ "./src/app/components/menu/side-menu.component.ts");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faTimes */ "../../node_modules/@fortawesome/pro-light-svg-icons/faTimes.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_pro_light_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faList */ "../../node_modules/@fortawesome/pro-light-svg-icons/faList.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faBars */ "../../node_modules/@fortawesome/pro-light-svg-icons/faBars.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/example-page/example-list/example-list.component */ "./src/app/components/example-page/example-list/example-list.component.ts");
/* harmony import */ var _components_example_page_example_list_example_template_example_template_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/example-page/example-list/example-template/example-template.component */ "./src/app/components/example-page/example-list/example-template/example-template.component.ts");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faCode */ "../../node_modules/@fortawesome/pro-light-svg-icons/faCode.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_pro_light_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faHome */ "../../node_modules/@fortawesome/pro-light-svg-icons/faHome.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fortawesome_pro_light_svg_icons_faCubes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faCubes */ "../../node_modules/@fortawesome/pro-light-svg-icons/faCubes.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faCubes__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faCubes__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var angular_exemplify__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-exemplify */ "../../node_modules/angular-exemplify/fesm5/angular-exemplify.js");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faExpandWide */ "../../node_modules/@fortawesome/pro-light-svg-icons/faExpandWide.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/installation/installation.component */ "./src/app/components/installation/installation.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13__["faList"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_12__["faTimes"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_15__["faBars"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_18__["faCode"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_19__["faHome"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faCubes__WEBPACK_IMPORTED_MODULE_20__["faCubes"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23__["faExpandWide"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__["SideMenuComponent"],
                _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_8__["ExamplePageComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"],
                _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_16__["ExampleListComponent"],
                _components_example_page_example_list_example_template_example_template_component__WEBPACK_IMPORTED_MODULE_17__["CodeExampleDirective"],
                _components_example_page_example_list_example_template_example_template_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTemplateComponent"],
                _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_22__["ApiListComponent"],
                _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_24__["InstallationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                angular_exemplify__WEBPACK_IMPORTED_MODULE_21__["ExemplifyModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_9__["ExamplesModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/example-page/api-list/api-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/example-page/api-list/api-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let section of $content | async\">\n  <h2>{{section.name}}</h2>\n  <p [innerHTML]=\"section.description\"></p>\n  <ng-container *ngIf=\"section.inputs.length > 0\">\n    <h3>Inputs</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.inputs\">\n        <td><code>{{item?.alias || item.name}}</code></td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n              <i>type: <code>{{item?.type}}</code></i>\n            </div>\n            <div *ngIf=\"item?.defaultValue\" class=\"col-12 col-sm-auto\">\n              <i>default value: {{item?.defaultValue}}</i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"section.outputs.length > 0\">\n    <h3>Outputs</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.outputs\">\n        <td>\n          <code>{{item.name}}</code>\n        </td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n              <i>type: <code>{{item?.type}}</code></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"section.properties.length > 0\">\n    <h3>Properties</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.properties\">\n        <td>\n          <code>{{item.name}}</code>\n        </td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div *ngIf=\"item?.type\" class=\"col-12 col-sm-auto\">\n              <i>type: <code>{{item?.type}}</code></i>\n            </div>\n            <div *ngIf=\"item?.default\" class=\"col-12 col-sm-auto\">\n              <i>default value: <code>{{item?.default}}</code></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"section.methods.length > 0\">\n    <h3>Methods</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.methods\">\n        <td>\n          <code>{{item.name}}</code>\n        </td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n              <i>function: <code>{{item.functionCall}}: {{item?.type}}</code></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/example-page/api-list/api-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/example-page/api-list/api-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.table tr td:first-child {\n  width: 25%; }\nh2 ~ h2 {\n  margin-top: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtcGFnZS9hcGktbGlzdC9hcGktbGlzdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZS1wYWdlL2FwaS1saXN0L2FwaS1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL0BzZWJncm91cC9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBOzs7Ozs7RUN6REU7QUNIRjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsZ0JDZ0hvQixFQUFBIiwiZmlsZSI6InByb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZS1wYWdlL2FwaS1saXN0L2FwaS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCIvKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG4udGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMjUlOyB9XG5cbmgyIH4gaDIge1xuICBtYXJnaW4tdG9wOiAzcmVtOyB9XG4iLCJAaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3N0eWxlcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvbWl4aW5zJztcbi50YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbmgyIH4gaDIge1xuICBtYXJnaW4tdG9wOiBtYXBfZ2V0KCRzcGFjZXJzLCA1KTtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkcHVycGxlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBkYXRhLXByZWZpeD0nZmFsJyBkYXRhLWljb249J2V4dGVybmFsLWxpbmstc3F1YXJlJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUgZmEtdy0xNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIGQ9J000MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyek05OS41MTUgMzc0LjgyOGMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDE5NS4xNS0xOTUuMTUtLjcwNy0uNzA3LTg5Ljk1OC4zNDJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTkuOTk5YzAtNi42MjggNS4zNzItMTIgMTItMTJMMzQwIDEyOGM2LjYyNyAwIDEyIDUuMzcyIDEyIDEybC0uMzQzIDEzNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC05Ljk5OWMtNi42MjcgMC0xMi01LjM3My0xMi0xMmwuMzQyLTg5Ljk1OC0uNzA3LS43MDctMTk1LjE1IDE5NS4xNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3MSAwbC01LjY1Ny01LjY1N3onLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgIHhzOiAwLFxuICAgICAgICBzbTogNTc2cHgsXG4gICAgICAgIG1kOiA3NjhweCxcbiAgICAgICAgbGc6IDk5MnB4LFxuICAgICAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC42MjVyZW0gLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjI3NXJlbSAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmx1ZSwgLjA3NSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWV4cGFuZC1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRibHVlO1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgMTZweCAxNnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTQ0My41IDE2Mi42bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDM1MSAyOC41IDE1NS41Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC43IDQuOC0xMi4zLjEtMTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000MTMuNTA1IDkxLjk1MUwxMzMuNDkgMzcxLjk2NmwtOTguOTk1LTk4Ljk5NWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDYuMjExIDI4NC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMTguNzk0IDExOC43OTRjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTExLjMxNC0xMS4zMTRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU0LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTIgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6bS0yNy42NTggMTUuOTkxbC0yNDAtNDE2Yy02LjE2LTEwLjY3OC0yMS41ODMtMTAuNjM0LTI3LjcxOCAwbC0yNDAgNDE2QzI3Ljk4MyA0NjYuNjc4IDM1LjczMSA0ODAgNDggNDgwaDQ4MGMxMi4zMjMgMCAxOS45OS0xMy4zNjkgMTMuODU5LTIzLjk5NnpNMjg4IDM3MmMtMTUuNDY0IDAtMjggMTIuNTM2LTI4IDI4czEyLjUzNiAyOCAyOCAyOCAyOC0xMi41MzYgMjgtMjgtMTIuNTM2LTI4LTI4LTI4em0tMTEuNDktMjEyaDIyLjk3OWM2LjgyMyAwIDEyLjI3NCA1LjY4MiAxMS45OSAxMi41bC03IDE2OGMtLjI2OCA2LjQyOC01LjU1NiAxMS41LTExLjk5IDExLjVoLTguOTc5Yy02LjQzMyAwLTExLjcyMi01LjA3My0xMS45OS0xMS41bC03LTE2OGMtLjI4My02LjgxOCA1LjE2Ny0xMi41IDExLjk5LTEyLjV6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tY2hldnJvbi1jb2xvcjogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZHJvcGRvd24tY2hldnJvbi1hY3RpdmUtY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLzUwMFxuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRhbGVydC1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLWhlaWdodDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZ3JlZW59JyBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGNsYXNzPSdzdDAnLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9JyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00xNy41MjUgMzYuNDY1bC03LjA3MSA3LjA3Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDQ1MS40OTRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw3LjA3MSA3LjA3YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDIxMS4wNTEtMjExLjA1YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwzNC40OTUgMzYuNDY1Yy00LjY4Ni00LjY4Ny0xMi4yODQtNC42ODctMTYuOTcgMHonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjM4LjQ3NSA0NzUuNTM1bDcuMDcxLTcuMDdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDUwLjA1MyAyNTYgMjQ1LjU0NiA2MC41MDZjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMEwxMC40NTQgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45Ny0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAuNzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgICR0YWJsZS1jZWxsLXBhZGRpbmcgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41NjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/example-page/api-list/api-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/example-page/api-list/api-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ApiListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiListComponent", function() { return ApiListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var typescript_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typescript-parser */ "../../node_modules/typescript-parser/index.js");
/* harmony import */ var typescript_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typescript_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ "../../node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var ApiListComponent = /** @class */ (function () {
    function ApiListComponent(route) {
        this.route = route;
    }
    ApiListComponent_1 = ApiListComponent;
    ApiListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sources = this.route.routeConfig.data.sources;
        var obs = sources.reduce(function (previous, current) {
            return previous.concat([_this.parseSourceFile(current)]);
        }, []);
        this.$content = rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["reduce"])(function (previous, current) { return previous.concat(current); }, []));
    };
    ApiListComponent.prototype.parseSourceFile = function (source) {
        var _this = this;
        var description = ApiListComponent_1.extractDescription(source);
        var inputs = ApiListComponent_1.extractInputs(source);
        var outputs = ApiListComponent_1.extractOutputs(source);
        var properties = ApiListComponent_1.extractProperties(source);
        var methods = ApiListComponent_1.extractMethods(source);
        var tsParser = new typescript_parser__WEBPACK_IMPORTED_MODULE_4__["TypescriptParser"]();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(tsParser.parseSource(source)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) { return _this.parse(res, description, inputs, outputs, properties, methods); }));
    };
    ApiListComponent.prototype.parse = function (file, description, inputs, outputs, properties, methods) {
        var _this = this;
        return file.declarations
            .filter(function (declaration) { return declaration.constructor.name === 'ClassDeclaration'; })
            .reduce(function (previous, current) {
            var declaration = current;
            var section = {
                description: description ? ApiListComponent_1.parseComment(description.groups.comment) : 'n/a',
                name: declaration.name,
                // @ts-ignore
                inputs: _this.parseInputs(declaration.accessors, inputs),
                // @ts-ignore
                outputs: _this.parseOutputs(declaration.properties, outputs),
                // @ts-ignore
                properties: ApiListComponent_1.parseProperties(declaration.properties, properties),
                // @ts-ignore
                methods: ApiListComponent_1.parseMethods(declaration.methods, methods)
            };
            var isEmpty = !Object.entries(section)
                .filter(function (key) { return Array.isArray(key[1]); })
                .some(function (key) { return key[1].length > 0; });
            return isEmpty ? previous.slice() : previous.concat([section]);
        }, []);
    };
    ApiListComponent.extractInputs = function (sourceCode) {
        var _a, _b;
        var regex = /(?<comment>\/\*\*(?:[\sA-Za-z\*\`\.\,\(\)\/\?\=\:\[\]\&\{\}]*)\*\/)?(?:[\r\n\t\s]*)(?<decorator>\@Input)\((?:'|"?)(?<alias>.*?)(?:'|")?(?:\))(?:[\W]+)(?<accessor>get|set|){1}(?:\W)?(?<name>[^\(]+)/g;
        var input = regex.exec(sourceCode);
        var inputs = input ? (_a = {}, _a[input.groups.name] = input.groups, _a) : {};
        while (input !== null) {
            input = regex.exec(sourceCode);
            if (input) {
                inputs = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, inputs, (_b = {}, _b[input.groups.name] = input.groups, _b));
            }
        }
        return inputs;
    };
    ApiListComponent.extractOutputs = function (sourceCode) {
        var _a, _b;
        var regex = /(?:\/\*\*(?<comment>[\s\S][^@]+)\*\/[^@]+|)(?<decorator>\@Output)\((?:'|"?)(?<alias>.*?)(?:'|")?(?:\))(?:\W)?(?<name>[^\:]+)/g;
        var output = regex.exec(sourceCode);
        var outputs = output ? (_a = {}, _a[output.groups.name] = output.groups, _a) : {};
        while (output !== null) {
            output = regex.exec(sourceCode);
            if (output) {
                outputs = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, outputs, (_b = {}, _b[output.groups.name] = output.groups, _b));
            }
        }
        return outputs;
    };
    ApiListComponent.extractProperties = function (sourceCode) {
        var _a, _b;
        var regex = /(?<name>[\w\$]+)\:\s(?<type>.[^\;\s]*)(?:\;\s| \=\s)[\'\"]?(?<default>[\w][^\;\/\'\"]*)?[\'\"]?(?:\;?\s?\/\/\s?(?<comment>.*))?/g;
        var property = regex.exec(sourceCode);
        var properties = property ? (_a = {}, _a[property.groups.name] = property.groups, _a) : {};
        while (property !== null) {
            property = regex.exec(sourceCode);
            if (property) {
                properties = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, properties, (_b = {}, _b[property.groups.name] = property.groups, _b));
            }
        }
        return properties;
    };
    ApiListComponent.extractMethods = function (sourceCode) {
        var _a, _b;
        var regex = /(?:\/\*\*(?<comment>[\s\S][^\/]*)\*\/[^\w\@]+|)[^\w\]](?!constructor|Input|Component)(?<name>[a-z]*)\((?<parameters>[^\)]*)\)\:?\s?(?<returns>[\w\<\>]*)/g;
        var method = regex.exec(sourceCode);
        var methods = method ? (_a = {}, _a[method.groups.name] = method.groups, _a) : {};
        while (method !== null) {
            method = regex.exec(sourceCode);
            if (method) {
                methods = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, methods, (_b = {}, _b[method.groups.name] = method.groups, _b));
            }
        }
        return methods;
    };
    ApiListComponent.extractDescription = function (sourceCode) {
        var regex = /(?:\/\*\*(?<comment>[\s\S][^\/]*)\*\/[^\w])/;
        console.log(regex.exec(sourceCode));
        return regex.exec(sourceCode);
    };
    ApiListComponent.prototype.parseInputs = function (accessors, inputs) {
        return accessors
            .sort(ApiListComponent_1.sortInputs)
            .reduce(function (previous, current) {
            var input = previous.find(function (i) { return i.name === current.name; });
            if (input) {
                input.type = current.type;
                return previous.slice();
            }
            return previous.concat([tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, current, { alias: inputs[current.name].alias, description: ApiListComponent_1.parseComment(inputs[current.name].comment) })]);
        }, []);
    };
    ApiListComponent.prototype.parseOutputs = function (properties, outputs) {
        return properties
            .filter(function (property) { return property.type && property.type.indexOf('EventEmitter') !== -1; })
            .map(function (property) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, property, { description: ApiListComponent_1.parseComment(outputs[property.name].comment) });
        });
    };
    ApiListComponent.parseProperties = function (properties, extractedProperties) {
        return properties
            .filter(function (property) {
            return property.type && property.type.indexOf('EventEmitter') === -1 && // remove properties of type event emitter (Outputs)
                property.name.substring(0, 1) !== '_';
        } // remove private properties
        )
            .map(function (property) {
            return extractedProperties[property.name] ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, property, { default: extractedProperties[property.name].default, type: extractedProperties[property.name].type, description: ApiListComponent_1.parseComment(extractedProperties[property.name].comment) }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, property);
        });
    };
    ApiListComponent.parseMethods = function (methods, extractedMethods) {
        return methods
            .filter(function (property) {
            return property.name.substring(0, 2) !== 'ng' && // remove angular lifecycle methods
                property.name.substring(0, 1) !== '_';
        }) // remove private methods
            .map(function (method) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, method, { functionCall: method.name + '(' + (extractedMethods[method.name] ?
                    extractedMethods[method.name].parameters :
                    (method.parameters.map(function (param) { return param.name + ': ' + param.type; }).toString().replace(/,/g, ', '))) +
                    ')', description: extractedMethods[method.name] ? ApiListComponent_1.parseComment(extractedMethods[method.name].comment) : 'n/a' });
        });
    };
    ApiListComponent.parseComment = function (comment) {
        return comment ? marked__WEBPACK_IMPORTED_MODULE_5___default()(comment.replace(/\*\/+|\/\*+|\*\s+|[\t\r\n]/g, '')) : 'n/a';
    };
    ApiListComponent.sortInputs = function (a, b) {
        var isSet = a.constructor.name === 'SetterDeclaration';
        return isSet ? -1 : 0;
    };
    var ApiListComponent_1;
    ApiListComponent = ApiListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-api-list',
            template: __webpack_require__(/*! ./api-list.component.html */ "./src/app/components/example-page/api-list/api-list.component.html"),
            styles: [__webpack_require__(/*! ./api-list.component.scss */ "./src/app/components/example-page/api-list/api-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ApiListComponent);
    return ApiListComponent;
}());



/***/ }),

/***/ "./src/app/components/example-page/example-list/example-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"$content | async as examples\">\n  <ng-container *ngIf=\"!($showOutlet | async)\">\n    <div *ngFor=\"let example of examples\" class=\"example\">\n      <app-example-template [example]=\"example\"></app-example-template>\n    </div>\n  </ng-container>\n  <div [hidden]=\"!$showOutlet | async\">\n    <router-outlet\n      (activate)=\"onActivate($event)\"\n      (deactivate)=\"onDeactivate($event)\"></router-outlet>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/components/example-page/example-list/example-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.example + .example {\n  border-top: solid #dedede 1px;\n  margin-top: 1rem;\n  padding-top: 1rem; }\n/* use same style for buttons in tabs as normal links (anchor tags)*/\n::ng-deep button.nav-link {\n  font-weight: 500;\n  outline: none;\n  background: none; }\n::ng-deep button.nav-link:not(.active) {\n    color: #007AC7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtcGFnZS9leGFtcGxlLWxpc3QvZXhhbXBsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvcHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXBhZ2UvZXhhbXBsZS1saXN0L2V4YW1wbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLWNvcmUvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL0BzZWJncm91cC9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBOzs7Ozs7RUN6REU7QUNGRjtFQUNFLDZCQ2tPK0I7RURqTy9CLGdCRXdHVztFRnZHWCxpQkV1R1csRUFBQTtBRnBHYixvRUFBQTtBQUNBO0VBQ0UsZ0JFOEwrQjtFRjdML0IsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0FBSGxCO0lBS0ksY0VvQzJCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXBhZ2UvZXhhbXBsZS1saXN0L2V4YW1wbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhbmltYXRpb25zOiAoXG4gIHNsaWRlSW5MZWZ0OiBzbGlkZUluTGVmdCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblJpZ2h0OiBzbGlkZUluUmlnaHQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5VcDogc2xpZGVJblVwICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluRG93bjogc2xpZGVJbkRvd24gJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIGZhZGVJbjogZmFkZUluICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4gIGZhZGVJblVwOiBmYWRlSW5VcCAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuKTtcblxuQG1peGluIGFuaW1hdGlvbnMoKSB7XG4gIEBpZiAkZW5hYmxlLXRyYW5zaXRpb25zIHtcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwzMHB4LDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxMDAlLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgdHJhbnNpdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oJ3NsaWRlSW5VcCcpO1xuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oKCdzbGlkZUluVXAnLCdmYWRlSW4nKSlcbiAqL1xuQG1peGluIGFkZC10cmFuc2l0aW9uKCRsaXN0KSB7XG4gICRjb21iaW5lZDogJyc7XG4gIEBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnc3RyaW5nJyB7XG4gICAgYW5pbWF0aW9uOiBtYXBfZ2V0KCRhbmltYXRpb25zLCAkbGlzdCk7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkbGlzdCkgPT0gJ2xpc3QnIHtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkbGlzdCkge1xuICAgICAgJGFuaW06IG1hcF9nZXQoJGFuaW1hdGlvbnMsIG50aCgkbGlzdCwgJGkpKTtcbiAgICAgIEBpZiAkYW5pbSA9PSBudWxsIHtcbiAgICAgICAgQHdhcm4gbnRoKCRsaXN0LCAkaSkgdW5xdW90ZSgnbm90IGZvdW5kLCBwbGVhc2UgdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFuaW1hdGlvbnM6JykgdG8tbGlzdCgkYW5pbWF0aW9ucywgJ2tleXMnKTtcbiAgICAgIH1cblxuICAgICAgQGlmICRpID09IGxlbmd0aCgkbGlzdCkge1xuICAgICAgICAkY29tYmluZWQ6ICRjb21iaW5lZCArICRhbmltO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICAkY29tYmluZWQ6ICRjb21iaW5lZCArICRhbmltICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRpb246IHVucXVvdGUoJGNvbWJpbmVkKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgdHJhbnNpdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oJ3NsaWRlSW5VcCcpO1xuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oKCdzbGlkZUluVXAnLCdmYWRlSW4nKSlcbiAqL1xuLmV4YW1wbGUgKyAuZXhhbXBsZSB7XG4gIGJvcmRlci10b3A6IHNvbGlkICNkZWRlZGUgMXB4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTsgfVxuXG4vKiB1c2Ugc2FtZSBzdHlsZSBmb3IgYnV0dG9ucyBpbiB0YWJzIGFzIG5vcm1hbCBsaW5rcyAoYW5jaG9yIHRhZ3MpKi9cbjo6bmctZGVlcCBidXR0b24ubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lOyB9XG4gIDo6bmctZGVlcCBidXR0b24ubmF2LWxpbms6bm90KC5hY3RpdmUpIHtcbiAgICBjb2xvcjogIzAwN0FDNzsgfVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9zdHlsZXMvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL21peGlucyc7XG4uZXhhbXBsZSArIC5leGFtcGxlIHtcbiAgYm9yZGVyLXRvcDogc29saWQgJGJvcmRlci1jb2xvciAkYm9yZGVyLXdpZHRoO1xuICBtYXJnaW4tdG9wOiBtYXBfZ2V0KCRzcGFjZXJzLDMpO1xuICBwYWRkaW5nLXRvcDogbWFwX2dldCgkc3BhY2VycywzKTtcbn1cblxuLyogdXNlIHNhbWUgc3R5bGUgZm9yIGJ1dHRvbnMgaW4gdGFicyBhcyBub3JtYWwgbGlua3MgKGFuY2hvciB0YWdzKSovXG46Om5nLWRlZXAgYnV0dG9uLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6ICRsaW5rLXdlaWdodDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgJjpub3QoLmFjdGl2ZSkge1xuICAgIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRjb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4gICksXG4gICRjb2xvcnNcbik7XG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAyNTogMjUlLFxuICAgIDUwOiA1MCUsXG4gICAgNzU6IDc1JSxcbiAgICAxMDA6IDEwMCUsXG4gICAgYXV0bzogYXV0b1xuICApLFxuICAkc2l6ZXNcbik7XG5cblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogMTUlICFkZWZhdWx0O1xuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206ICAgMXJlbSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogam9pbihcbiAgKFxuICAgICgyMSA5KSxcbiAgICAoMTYgOSksXG4gICAgKDQgMyksXG4gICAgKDEgMSksXG4gICksXG4gICRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3Ncbik7XG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCIgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LWJhc2U6ICAgICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuODc1ICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogICAgICAgICBsaWdodGVyICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LW5vcm1hbDogICAgICAgICAgNDAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6ICAgICAgICAgICAgNzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogICAgICAgICAgYm9sZGVyICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG5cbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgIDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogICAgICAgIDEuMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS1zaXplOiAgICAgICAgICAgICAgIDZyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTItc2l6ZTogICAgICAgICAgICAgICA1LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTMtc2l6ZTogICAgICAgICAgICAgICA0LjVyZW0gIWRlZmF1bHQ7XG4kZGlzcGxheTQtc2l6ZTogICAgICAgICAgICAgICAzLjVyZW0gIWRlZmF1bHQ7XG5cbiRkaXNwbGF5MS13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5Mi13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5My13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5NC13ZWlnaHQ6ICAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAgICAgICAgICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRsZWFkLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgIDMwMCAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgODAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogICAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtYmc6ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItY29sb3I6ICAgICAgICAgICAkdGFibGUtY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtYWN0aXZlLWJnOiAgICAgICAgICAgICAkdGFibGUtaG92ZXItYmcgIWRlZmF1bHQ7XG5cbiR0YWJsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDI1JSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXl9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW19ICsgI3skaW5wdXQtcGFkZGluZy15IC8gMn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtfSArICN7JGlucHV0LWJ0bi1wYWRkaW5nLXktc20gKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtfSArICN7JGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6ICAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM2UlM2NwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBjYWxjKCN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplfSAtICN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKiA0fSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmFja2dyb3VuZDogICAgICAgICAgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yIG5vLXJlcGVhdCByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSAhZGVmYXVsdDsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcblxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wYWRkaW5nLXJpZ2h0OiBjYWxjKCgxZW0gKyAjezIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXl9KSAqIDMgLyA0ICsgI3skY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ30pICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PSctMiAtMiA3IDcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgZD0nTTAgMGwzIDNtMC0zTDAgMycvJTNlJTNjY2lyY2xlIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3k9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIGN5PSczJyByPScuNScvJTNlJTNjL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwidmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICAgKSxcbiAgICBcImludmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICAgICksXG4gICksXG4gICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4pO1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG5cblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgY2FsYygjeyRkcm9wZG93bi1ib3JkZXItcmFkaXVzfSAtICN7JGRyb3Bkb3duLWJvcmRlci13aWR0aH0pICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJG5hdi1kaXZpZGVyLW1hcmdpbi15ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRncmF5LTkwMCwgNSUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuXG4vLyBKdW1ib3Ryb25cblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gQ2FyZHNcblxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIFRvYXN0c1xuXG4kdG9hc3QtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgICAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjI1cmVtIC43NXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBCYWRnZXNcblxuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgNzUlICFkZWZhdWx0O1xuJGJhZGdlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC40ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGJhZGdlLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgJGJ0bi10cmFuc2l0aW9uICFkZWZhdWx0O1xuJGJhZGdlLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcblxuJGJhZGdlLXBpbGwtcGFkZGluZy14OiAgICAgICAgICAgICAgLjZlbSAhZGVmYXVsdDtcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiRiYWRnZS1waWxsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1iZzogICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuXG4vLyBGaWd1cmVzXG5cbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6ICAgICAgICAgIDkwJSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gQ2Fyb3VzZWxcblxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAgICAgICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1vcGFjaXR5OiAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAgICAgLjkgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiAgICAgICAgb3BhY2l0eSAuMTVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oZWlnaHQ6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6ICAgICAgICAgIDNweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6ICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTUuMjUgMGwtNCA0IDQgNCAxLjUtMS41LTIuNS0yLjUgMi41LTIuNS0xLjUtMS41eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZTllOSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZGVkZSAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlY2VjZSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYWRhZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzg2ODY4NiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NDk0OSAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0MzQzNCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjEyMSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICAgICksXG4gICAgJGdyYXlzXG4pO1xuXG5cbiRyZWQ6ICAgICAgICAgICAgICAgICAgICNGMDM1Mjk7XG4kcmVkLWRhcms6ICAgICAgICAgICAgICAjRDgxQTFBOyAvLyBTRUIgc3BlY2lmaWNcbiRyZWQtZGFya2VyOiAgICAgICAgICAgICNCQjAwMEM7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdy1kYXJrZXI6ICAgICAgICAgI0Y4QTAwMDsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcms6ICAgICAgICAgICAjRkZCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3c6ICAgICAgICAgICAgICAgICNGRkM1MDA7XG4kZ3JlZW46ICAgICAgICAgICAgICAgICAjNjBjZDE4O1xuJGdyZWVuLWRhcms6ICAgICAgICAgICAgIzQ1QjQwMDsgLy8gU0VCIHNwZWNpZmljXG4kZ3JlZW4tZGFya2VyOiAgICAgICAgICAjMzc5RDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlOiAgICAgICAgICAgICAgICAgICM0MUIwRUU7XG4kYmx1ZS1kYXJrOiAgICAgICAgICAgICAjMDA5MkUxOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlLWRhcmtlcjogICAgICAgICAgICMwMDdBQzc7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZTogICAgICAgICAgICAgICAgIzY3M0FCNjtcbiRwdXJwbGUtZGFyazogICAgICAgICAgICM0RjJDOTk7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZS1kYXJrZXI6ICAgICAgICAgIzNGMjU4NzsgLy8gU0VCIHNwZWNpZmljXG5cblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJHB1cnBsZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICAgKSxcbiAgICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVyczogICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYnV0dG9uLXZhcmlhdGlvbnM6ICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZy1ib290c3RyYXA6ICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWFuZ3VsYXItZ2VuZXJpYy10YWJsZTogIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmd4LXRvYXN0cjogICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMDogMCxcbiAgICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgICAgMzogJHNwYWNlcixcbiAgICAgIDQ6ICgkc3BhY2VyICogMiksXG4gICAgICA1OiAoJHNwYWNlciAqIDMpXG4gICAgKSxcbiAgICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAyNTogMjUlLFxuICAgICAgNTA6IDUwJSxcbiAgICAgIDc1OiA3NSUsXG4gICAgICAxMDA6IDEwMCUsXG4gICAgICBhdXRvOiBhdXRvXG4gICAgKSxcbiAgICAkc2l6ZXNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuXG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcblxuLy8gR3JpZCBjb250YWluZXJzXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDMpKjIgIWRlZmF1bHQ7XG5cbi8vIFNFQiBzcGVjaWZpYyBvdmVycmlkZSB3aGVuIHJlc3BvbnNpdmUgZ3V0dGVycyBhcmUgZW5hYmxlZFxuQGlmICgkZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVycykge1xuICAkZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDIpO1xufVxuXG4vLyBTRUIgc3BlY2lmaWNcbiRyZXNwb25zaXZlLWd1dHRlcnM6IChcbiAgc206bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgbGc6bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgeGw6bWFwLWdldCgkc3BhY2VycywgMykqMlxuKSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbjouNHMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbjogICAgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gRm9udHNcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kc2ViLWZvbnQtcGF0aDogICAgICAgICAgICAgICBcIn5Ac2ViZ3JvdXAvZm9udHMvZm9udHNcIiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcIlNFQlNhbnNTZXJpZlwiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIlRyZWJ1Y2hldFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhzOiAgICgkZm9udC1zaXplLWJhc2UgKiAuNjg3NSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMyAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDtcblxuJGgxLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGgxLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDItc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgzLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRibHVlLWRhcmtlciAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaW5rLXdlaWdodDogICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcjogICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3I6ICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbjogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgYXJpYS1oaWRkZW49J3RydWUnIGRhdGEtcHJlZml4PSdmYWwnIGRhdGEtaWNvbj0nZXh0ZXJuYWwtbGluay1zcXVhcmUnIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1leHRlcm5hbC1saW5rLXNxdWFyZSBmYS13LTE0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uLWNvbG9yfScgZD0nTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMTYgNDAwYzAgOC44MjItNy4xNzggMTYtMTYgMTZINDhjLTguODIyIDAtMTYtNy4xNzgtMTYtMTZWODBjMC04LjgyMiA3LjE3OC0xNiAxNi0xNmgzNTJjOC44MjIgMCAxNiA3LjE3OCAxNiAxNnYzNTJ6TTk5LjUxNSAzNzQuODI4Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsMTk1LjE1LTE5NS4xNS0uNzA3LS43MDctODkuOTU4LjM0MmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtOS45OTljMC02LjYyOCA1LjM3Mi0xMiAxMi0xMkwzNDAgMTI4YzYuNjI3IDAgMTIgNS4zNzIgMTIgMTJsLS4zNDMgMTM2YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTkuOTk5Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEybC4zNDItODkuOTU4LS43MDctLjcwNy0xOTUuMTUgMTk1LjE1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcxIDBsLTUuNjU3LTUuNjU3eicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICAgICAgICB4czogMCxcbiAgICAgICAgc206IDU3NnB4LFxuICAgICAgICBtZDogNzY4cHgsXG4gICAgICAgIGxnOiA5OTJweCxcbiAgICAgICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNjI1cmVtIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4yNzVyZW0gLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsdWUsIC4wNzUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1leHBhbmQtYmc6ICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjgxMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgMSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgIDRweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgIDRweCAhZGVmYXVsdDtcblxuLy8gRm9ybXNcblxuJGxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNjUlIDY1JSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNsaWRlLXRvZ2dsZS1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkYmx1ZTtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDE2cHggMTZweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J000NDMuNSAxNjIuNmwtNy4xLTcuMWMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzNTEgMjguNSAxNTUuNWMtNC43LTQuNy0xMi4zLTQuNy0xNyAwbC03LjEgNy4xYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjExIDIxMS4xYzQuNyA0LjcgMTIuMyA0LjcgMTcgMGwyMTEtMjExLjFjNC44LTQuNyA0LjgtMTIuMy4xLTE3eicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgNHB4ICFkZWZhdWx0O1xuXG5cbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NC00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUyIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4em0tMjcuNjU4IDE1Ljk5MWwtMjQwLTQxNmMtNi4xNi0xMC42NzgtMjEuNTgzLTEwLjYzNC0yNy43MTggMGwtMjQwIDQxNkMyNy45ODMgNDY2LjY3OCAzNS43MzEgNDgwIDQ4IDQ4MGg0ODBjMTIuMzIzIDAgMTkuOTktMTMuMzY5IDEzLjg1OS0yMy45OTZ6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHptLTExLjQ5LTIxMmgyMi45NzljNi44MjMgMCAxMi4yNzQgNS42ODIgMTEuOTkgMTIuNWwtNyAxNjhjLS4yNjggNi40MjgtNS41NTYgMTEuNS0xMS45OSAxMS41aC04Ljk3OWMtNi40MzMgMC0xMS43MjItNS4wNzMtMTEuOTktMTEuNWwtNy0xNjhjLS4yODMtNi44MTggNS4xNjctMTIuNSAxMS45OS0xMi41ek0yODggMzcyYy0xNS40NjQgMC0yOCAxMi41MzYtMjggMjhzMTIuNTM2IDI4IDI4IDI4IDI4LTEyLjUzNiAyOC0yOC0xMi41MzYtMjgtMjgtMjh6JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWxpbmUtdGhpY2tuZXNzOiAgICAgIDJweCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG5cbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcblxuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNoZXZyb24tY29sb3I6ICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGRyb3Bkb3duLWNoZXZyb24tYWN0aXZlLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bi1iYWNrZHJvcDogICAgICAgICAgOTkwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kbmF2LXRhYnMtbGluay1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gTmF2YmFyXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAuNDM3NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC13ZWlnaHQ6ICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cblxuLy8gSnVtYm90cm9uXG5cbi8vIENhcmRzXG5cbi8vIFRvb2x0aXBzXG5cbi8vIFBvcG92ZXJzXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcblxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgMCAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1hc2lkZS13aWR0aDogICAgICAgICAgICAgICAgIDMyMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRtb2RhbC1hc2lkZS1sZy13aWR0aDogICAgICAgICAgICAgIG1hcF9nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpOyAvLyA4MDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy81MDBcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYWxlcnQtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAxLjEyNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gVG9hc3Qgbm90aWZpY2F0aW9uc1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGFsZXJ0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAwIDAgLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gTGlzdCBncm91cFxuJGxpc3QtZ3JvdXAtYnVsbGV0LWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMSAxJyUzRSUzQ3JlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgc3R5bGU9J2ZpbGw6I3skZGFya307JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWNoZWNrLWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGdyZWVufScgZD0nTTQxMy41MDUgOTEuOTUxTDEzMy40OSAzNzEuOTY2bC05OC45OTUtOTguOTk1Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMNi4yMTEgMjg0LjI4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDExOC43OTQgMTE4Ljc5NGM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjk5LjgxMy0yOTkuODEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtMTEuMzE0LTExLjMxNGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDB6JyBjbGFzcz0nc3QwJy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBGaWd1cmVzXG5cbi8vIEJyZWFkY3J1bWJzXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtZm9udC13ZWlnaHQ6ICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMTcuNTI1IDM2LjQ2NWwtNy4wNzEgNy4wN2MtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA0NTEuNDk0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsNy4wNzEgNy4wN2M0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGwyMTEuMDUxLTIxMS4wNWM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMMzQuNDk1IDM2LjQ2NWMtNC42ODYtNC42ODctMTIuMjg0LTQuNjg3LTE2Ljk3IDB6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItYmFjay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTIzOC40NzUgNDc1LjUzNWw3LjA3MS03LjA3YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw1MC4wNTMgMjU2IDI0NS41NDYgNjAuNTA2YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDBMMTAuNDU0IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTctLjAwMXonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLXdpZHRoOiAgICAgICAgICAxNXB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBDbG9zZVxuXG4vLyBDb2RlXG5cbi8vIFByaW50aW5nXG5cbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS92YXJpYWJsZXNcIjtcblxuLy8gU2Nyb2xsYmFyXG4kc2Nyb2xsYmFyLXRyYWNrLWJnOiAgJGdyYXktMTAwO1xuJHNjcm9sbGJhci10aHVtYi1iZzogICRncmF5LTQwMDtcbiRzY3JvbGxiYXItdHJhY2stZGFyay1iZzogICRkYXJrO1xuJHNjcm9sbGJhci10aHVtYi1kYXJrLWJnOiAgJGdyYXktOTAwO1xuJHNjcm9sbGJhci10aHVtYi1hY3RpdmUtYmc6ICRibHVlO1xuJHNjcm9sbGJhci10aGlja25lc3M6ICAgICAxMHB4O1xuXG4vLyBBY2NvcmRpb25cblxuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICR0YWJsZS1ib3JkZXItY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICR0YWJsZS1ib3JkZXItd2lkdGggIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1oZWFkZXItcGFkZGluZzogIDAgLjc1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nOiAgICAkdGFibGUtY2VsbC1wYWRkaW5nICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXk6ICAuNTYyNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy14OiAgMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmc6ICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1zaXplOiAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuIl19 */"

/***/ }),

/***/ "./src/app/components/example-page/example-list/example-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleListComponent", function() { return ExampleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _example_template_example_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-template/example.service */ "./src/app/components/example-page/example-list/example-template/example.service.ts");
/* harmony import */ var _example_template_example_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example-template/example.query */ "./src/app/components/example-page/example-list/example-template/example.query.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");







var ExampleListComponent = /** @class */ (function () {
    function ExampleListComponent(route, exampleService, exampleQuery) {
        this.route = route;
        this.exampleService = exampleService;
        this.exampleQuery = exampleQuery;
    }
    ExampleListComponent.prototype.onActivate = function (event) {
        var _this = this;
        setTimeout(function () { return _this.exampleService.setFullscreen(true); });
    };
    ExampleListComponent.prototype.onDeactivate = function (event) {
        var _this = this;
        setTimeout(function () { return _this.exampleService.setFullscreen(false); });
    };
    ExampleListComponent.prototype.ngOnInit = function () {
        /*this.$content = this.route.data.pipe(
          map(data => Object.keys(data).map( key => data[key]))
        );*/
        this.$showOutlet = this.exampleQuery.$isFullscreen
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
        this.$content = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.route.routeConfig.children);
    };
    ExampleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-list',
            template: __webpack_require__(/*! ./example-list.component.html */ "./src/app/components/example-page/example-list/example-list.component.html"),
            styles: [__webpack_require__(/*! ./example-list.component.scss */ "./src/app/components/example-page/example-list/example-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _example_template_example_service__WEBPACK_IMPORTED_MODULE_4__["ExampleService"],
            _example_template_example_query__WEBPACK_IMPORTED_MODULE_5__["ExampleQuery"]])
    ], ExampleListComponent);
    return ExampleListComponent;
}());



/***/ }),

/***/ "./src/app/components/example-page/example-list/example-template/example-template.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-template/example-template.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-3 align-items-end\">\n  <div class=\"col-12 col-sm pr-sm-3\">\n    <h3>{{example.data.title}}</h3>\n    <p class=\"mb-sm-0\" [innerHTML]=\"example.data.description\"></p>\n  </div>\n  <div class=\"col col-sm-auto pr-1\">\n    <button class=\"btn btn-outline-primary btn-sm w-100\" (click)=\"toggleCodeExample()\" [ngClass]=\"{'active': showCodeExample}\">\n      Code\n      <fa-icon icon=\"code\" class=\"ml-1\"></fa-icon>\n    </button>\n  </div>\n  <div class=\"col col-sm-auto px-1\">\n    <button class=\"btn btn-outline-primary btn-sm w-100\">\n      Stackblitz\n      <svg class=\"ml-1\" width=\"23\" height=\"34\" viewBox=\"0 0 23 34\"\n           xmlns=\"http://www.w3.org/2000/svg\">\n        <g class=\"icon\" fill=\"currentColor\"\n           fill-rule=\"nonzero\" id=\"Symbols\">\n          <polygon\n            id=\"Path\"\n            points=\"0 19.9187087 9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0\">\n          </polygon>\n        </g>\n      </svg>\n    </button>\n  </div>\n  <div class=\"col col-sm-auto pl-1\">\n    <button class=\"btn btn-outline-primary btn-sm w-100\" [routerLink]=\"example.path\">\n      Fullscreen\n      <fa-icon icon=\"expand-wide\" class=\"ml-1\"></fa-icon>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"example.data.sources && showCodeExample\" [@enterAnimation]>\n  <exemplify [sources]=\"example.data.sources\"></exemplify>\n  <hr class=\"mt-0\">\n</div>\n<div class=\"bg-light p-3\">\n  <ng-template appCodeExample></ng-template>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/example-page/example-list/example-template/example-template.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-template/example-template.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CodeExampleDirective, ExampleTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleDirective", function() { return CodeExampleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTemplateComponent", function() { return ExampleTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");


var CodeExampleDirective = /** @class */ (function () {
    function CodeExampleDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    CodeExampleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCodeExample]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], CodeExampleDirective);
    return CodeExampleDirective;
}());



var ExampleTemplateComponent = /** @class */ (function () {
    function ExampleTemplateComponent(resolver) {
        this.resolver = resolver;
        this.showCodeExample = false;
    }
    Object.defineProperty(ExampleTemplateComponent.prototype, "example", {
        get: function () {
            return this._example;
        },
        set: function (value) {
            this._example = value;
        },
        enumerable: true,
        configurable: true
    });
    ExampleTemplateComponent.prototype.toggleCodeExample = function () {
        this.showCodeExample = !this.showCodeExample;
    };
    ExampleTemplateComponent.prototype.ngOnInit = function () {
        var factory = this.resolver.resolveComponentFactory(this._example.component);
        var viewContainerRef = this.exampleHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(factory);
    };
    ExampleTemplateComponent.prototype.ngOnDestroy = function () {
        this.componentRef.destroy();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ExampleTemplateComponent.prototype, "example", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(CodeExampleDirective),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CodeExampleDirective)
    ], ExampleTemplateComponent.prototype, "exampleHost", void 0);
    ExampleTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example-template',
            template: __webpack_require__(/*! ./example-template.component.html */ "./src/app/components/example-page/example-list/example-template/example-template.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-1rem,0,0)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0,0,0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0,0,0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-1rem,0,0)', opacity: 0 }))
                    ])
                ])
            ],
            styles: ["\n    svg, fa-icon::ng-deep svg {\n      height: 1rem;\n      width: auto !important;\n      vertical-align: middle;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], ExampleTemplateComponent);
    return ExampleTemplateComponent;
}());



/***/ }),

/***/ "./src/app/components/example-page/example-list/example-template/example.query.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-template/example.query.ts ***!
  \****************************************************************************************/
/*! exports provided: ExampleQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleQuery", function() { return ExampleQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _example_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example.store */ "./src/app/components/example-page/example-list/example-template/example.store.ts");




var ExampleQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleQuery, _super);
    function ExampleQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.$isFullscreen = _this.select('isFullscreen');
        return _this;
    }
    ExampleQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_example_store__WEBPACK_IMPORTED_MODULE_3__["ExampleStore"]])
    ], ExampleQuery);
    return ExampleQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"]));



/***/ }),

/***/ "./src/app/components/example-page/example-list/example-template/example.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-template/example.service.ts ***!
  \******************************************************************************************/
/*! exports provided: ExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return ExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _example_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.store */ "./src/app/components/example-page/example-list/example-template/example.store.ts");



var ExampleService = /** @class */ (function () {
    function ExampleService(exampleStore) {
        this.exampleStore = exampleStore;
    }
    ExampleService.prototype.setFullscreen = function (isFullscreen) {
        this.exampleStore.update(function (_) { return ({
            isFullscreen: isFullscreen
        }); });
    };
    ExampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_example_store__WEBPACK_IMPORTED_MODULE_2__["ExampleStore"]])
    ], ExampleService);
    return ExampleService;
}());



/***/ }),

/***/ "./src/app/components/example-page/example-list/example-template/example.store.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-template/example.store.ts ***!
  \****************************************************************************************/
/*! exports provided: createInitialState, ExampleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialState", function() { return createInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleStore", function() { return ExampleStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm5/datorama-akita.js");



function createInitialState() {
    return {
        isFullscreen: false
    };
}
var ExampleStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleStore, _super);
    function ExampleStore() {
        return _super.call(this, createInitialState()) || this;
    }
    ExampleStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'example' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleStore);
    return ExampleStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]));



/***/ }),

/***/ "./src/app/components/example-page/example-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/example-page/example-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"text-capitalize mt-3 mt-lg-4\" *ngIf=\"!($isFullscreen | async)\">{{$heading | async}}</h2>\n<section class=\"mt-2 mt-lg-3\" [ngClass]=\"{'card mx-n3 mx-sm-0': !($isFullscreen | async)}\">\n  <div [ngClass]=\"{'card-body': !($isFullscreen | async)}\">\n    <ul class=\"nav nav-tabs my-3\" *ngIf=\"!($isFullscreen | async)\">\n      <li *ngFor=\"let menuItem of $menuItems | async\" class=\"nav-item\">\n        <a class=\"nav-link text-capitalize\" [routerLink]=\"menuItem.path\" [routerLinkActive]=\"'active'\">{{menuItem.path}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/example-page/example-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/example-page/example-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtcGFnZS9leGFtcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/example-page/example-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/example-page/example-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplePageComponent", function() { return ExamplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-list/example-template/example.query */ "./src/app/components/example-page/example-list/example-template/example.query.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");






var ExamplePageComponent = /** @class */ (function () {
    function ExamplePageComponent(route, exampleQuery) {
        this.route = route;
        this.exampleQuery = exampleQuery;
        this.$menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](0);
        this.$heading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](0);
    }
    ExamplePageComponent.prototype.ngOnInit = function () {
        var menuItems = this.route.routeConfig.children.map(function (route) {
            return {
                text: route.path,
                path: route.path
            };
        });
        this.$isFullscreen = this.exampleQuery.$isFullscreen
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.$heading.next(this.route.parent.routeConfig.path);
        this.$menuItems.next(menuItems);
    };
    ExamplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./example-page.component.html */ "./src/app/components/example-page/example-page.component.html"),
            styles: [__webpack_require__(/*! ./example-page.component.scss */ "./src/app/components/example-page/example-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_4__["ExampleQuery"]])
    ], ExamplePageComponent);
    return ExamplePageComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"col-12 d-lg-none bg-white\">\n  <div class=\"row justify-content-between justify-content-lg-end h-100\">\n    <div class=\"col col-md-auto d-none d-md-flex brand\">\n      <div class=\"row mobile-header\">\n        <div class=\"col-auto px-0\">\n          <app-logo></app-logo>\n        </div>\n        <div class=\"col-auto align-self-center text-center px-3\" (click)=\"toggleMenu()\">\n          <fa-icon icon=\"bars\" class=\"d-block text-white\" size=\"1x\"></fa-icon>\n          <div>Menu</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col d-md-none px-0\" *ngIf=\"activeTab\">\n      <div class=\"row mobile-header h-100 align-items-center text-center no-gutters\">\n        <div *ngFor=\"let menuItem of $menuItems | async\" class=\"col\" ngClass=\"{{activeTab === menuItem.path ? 'active':''}}\" (click)=\"showMenu(menuItem.path)\">\n          <fa-icon [icon]=\"menuItem.icon\" size=\"1x\" class=\"d-block\"></fa-icon>\n          <span class=\"text-capitalize\">{{menuItem.text}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col align-self-center pl-3 d-none d-sm-flex\">\n      <h3 class=\"mb-0\">ng-components</h3>\n    </div>\n    <div class=\"col d-none d-md-flex bg-white border-bottom sticky-header\" [@scrollAnimation]=\"stickyHeader\">\n      <div class=\"row align-items-center h-100\">\n        <div class=\"col\">\n          <h5 class=\"mb-0\">Section header</h5>\n          <ol class=\"breadcrumb mb-0 pl-0 py-0\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Section header</li>\n          </ol>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"card-menu-control\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\nheader {\n  height: 56px;\n  position: fixed;\n  z-index: 1020;\n  left: 0; }\n.brand, .profile, .mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px; }\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n@media (min-width: 576px) {\n  header {\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15); } }\n@media (min-width: 992px) {\n  header {\n    width: calc(100% - 16rem);\n    left: 16rem; } }\n.mobile-header .col {\n  padding-top: .25rem;\n  padding-bottom: .25rem; }\n.mobile-header .active {\n  background: #60cd18; }\n.dropdown-toggle {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  cursor: pointer; }\n.dropdown-toggle::after {\n  display: none; }\n.dropdown.show {\n  background: #41B0EE; }\n.dropdown-item-link {\n  padding: 0.5rem 1.5rem; }\n.breadcrumb-container {\n  height: 56px; }\n.dropdown-header {\n  color: #343434;\n  background: #dedede; }\n.dropdown-menu .dropdown-header:first-child {\n  border-radius: 4px 4px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9wcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLWNvcmUvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvcHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7Ozs7OztFQ3pERTtBQ0ZGO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQzhWc0M7RUQ3VnRDLE9BQU8sRUFBQTtBQUdUO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFXLEVBQUE7QUFHYjtFQUNFLFlBQVc7RUFDWCxXQUFXLEVBQUE7QUV5Q1Q7RUZ0Q0Y7SUFFRSwwQ0FBdUMsRUFBQSxFQUN4QztBRW1DQztFRmhDRjtJQUdFLHlCQUE0QztJQUM1QyxXR2hDeUIsRUFBQSxFSGlDMUI7QUFHSDtFQUVJLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTtBQUgxQjtFQU1JLG1CQ0syQixFQUFBO0FERi9CO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7QUFHakI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLG1CQ042QixFQUFBO0FEUy9CO0VBQ0Usc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGNDbERnQjtFRG1EaEIsbUJDeERnQixFQUFBO0FEMkRsQjtFQUNFLDBCQUF3RCxFQUFBIiwiZmlsZSI6InByb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhbmltYXRpb25zOiAoXG4gIHNsaWRlSW5MZWZ0OiBzbGlkZUluTGVmdCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblJpZ2h0OiBzbGlkZUluUmlnaHQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5VcDogc2xpZGVJblVwICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluRG93bjogc2xpZGVJbkRvd24gJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIGZhZGVJbjogZmFkZUluICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4gIGZhZGVJblVwOiBmYWRlSW5VcCAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuKTtcblxuQG1peGluIGFuaW1hdGlvbnMoKSB7XG4gIEBpZiAkZW5hYmxlLXRyYW5zaXRpb25zIHtcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwzMHB4LDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxMDAlLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgdHJhbnNpdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oJ3NsaWRlSW5VcCcpO1xuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oKCdzbGlkZUluVXAnLCdmYWRlSW4nKSlcbiAqL1xuQG1peGluIGFkZC10cmFuc2l0aW9uKCRsaXN0KSB7XG4gICRjb21iaW5lZDogJyc7XG4gIEBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnc3RyaW5nJyB7XG4gICAgYW5pbWF0aW9uOiBtYXBfZ2V0KCRhbmltYXRpb25zLCAkbGlzdCk7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkbGlzdCkgPT0gJ2xpc3QnIHtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkbGlzdCkge1xuICAgICAgJGFuaW06IG1hcF9nZXQoJGFuaW1hdGlvbnMsIG50aCgkbGlzdCwgJGkpKTtcbiAgICAgIEBpZiAkYW5pbSA9PSBudWxsIHtcbiAgICAgICAgQHdhcm4gbnRoKCRsaXN0LCAkaSkgdW5xdW90ZSgnbm90IGZvdW5kLCBwbGVhc2UgdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFuaW1hdGlvbnM6JykgdG8tbGlzdCgkYW5pbWF0aW9ucywgJ2tleXMnKTtcbiAgICAgIH1cblxuICAgICAgQGlmICRpID09IGxlbmd0aCgkbGlzdCkge1xuICAgICAgICAkY29tYmluZWQ6ICRjb21iaW5lZCArICRhbmltO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICAkY29tYmluZWQ6ICRjb21iaW5lZCArICRhbmltICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRpb246IHVucXVvdGUoJGNvbWJpbmVkKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgdHJhbnNpdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oJ3NsaWRlSW5VcCcpO1xuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oKCdzbGlkZUluVXAnLCdmYWRlSW4nKSlcbiAqL1xuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMjA7XG4gIGxlZnQ6IDA7IH1cblxuLmJyYW5kLCAucHJvZmlsZSwgLm1vYmlsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA1NnB4OyB9XG5cbi5zZWItbG9nbyB7XG4gIGhlaWdodDogNTZweDtcbiAgd2lkdGg6IDU2cHg7IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIGhlYWRlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpOyB9IH1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGhlYWRlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cmVtKTtcbiAgICBsZWZ0OiAxNnJlbTsgfSB9XG5cbi5tb2JpbGUtaGVhZGVyIC5jb2wge1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtOyB9XG5cbi5tb2JpbGUtaGVhZGVyIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjBjZDE4OyB9XG5cbi5kcm9wZG93bi10b2dnbGUge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmRyb3Bkb3duLnNob3cge1xuICBiYWNrZ3JvdW5kOiAjNDFCMEVFOyB9XG5cbi5kcm9wZG93bi1pdGVtLWxpbmsge1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtOyB9XG5cbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTZweDsgfVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgY29sb3I6ICMzNDM0MzQ7XG4gIGJhY2tncm91bmQ6ICNkZWRlZGU7IH1cblxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3N0eWxlcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvbWl4aW5zJztcbmhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAkemluZGV4LXN0aWNreTtcbiAgbGVmdDogMDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDA7XG59XG4uYnJhbmQsIC5wcm9maWxlLCAubW9iaWxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6NTZweDtcbn1cblxuLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OjU2cHg7XG4gIHdpZHRoOiA1NnB4O1xufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICBoZWFkZXIge1xuICAgIC8vd2lkdGg6Y2FsYygxMDB2dyAtIDE3cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbiAgfVxufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICBoZWFkZXIge1xuICAgIC8vd2lkdGg6Y2FsYygxMDB2dyAtIDI1NnB4IC0gMTdweCk7XG4gICAgLy93aWR0aDpjYWxjKDEwMHZ3IC0gMjU2cHgpO1xuICAgIHdpZHRoOmNhbGMoMTAwJSAtICN7JG5nc2ViLWRvY3MtbWVudS13aWR0aH0pO1xuICAgIGxlZnQ6ICRuZ3NlYi1kb2NzLW1lbnUtd2lkdGg7XG4gIH1cbn1cblxuLm1vYmlsZS1oZWFkZXIge1xuICAuY29sIHtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLnNob3cge1xuICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGNvbG9yOiRkYXJrO1xuICBiYWNrZ3JvdW5kOiAkZ3JheS0zMDA7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgJGJ0bi1ib3JkZXItcmFkaXVzIDAgMDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkcHVycGxlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBkYXRhLXByZWZpeD0nZmFsJyBkYXRhLWljb249J2V4dGVybmFsLWxpbmstc3F1YXJlJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUgZmEtdy0xNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIGQ9J000MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyek05OS41MTUgMzc0LjgyOGMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDE5NS4xNS0xOTUuMTUtLjcwNy0uNzA3LTg5Ljk1OC4zNDJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTkuOTk5YzAtNi42MjggNS4zNzItMTIgMTItMTJMMzQwIDEyOGM2LjYyNyAwIDEyIDUuMzcyIDEyIDEybC0uMzQzIDEzNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC05Ljk5OWMtNi42MjcgMC0xMi01LjM3My0xMi0xMmwuMzQyLTg5Ljk1OC0uNzA3LS43MDctMTk1LjE1IDE5NS4xNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3MSAwbC01LjY1Ny01LjY1N3onLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgIHhzOiAwLFxuICAgICAgICBzbTogNTc2cHgsXG4gICAgICAgIG1kOiA3NjhweCxcbiAgICAgICAgbGc6IDk5MnB4LFxuICAgICAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC42MjVyZW0gLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjI3NXJlbSAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmx1ZSwgLjA3NSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWV4cGFuZC1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRibHVlO1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgMTZweCAxNnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTQ0My41IDE2Mi42bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDM1MSAyOC41IDE1NS41Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC43IDQuOC0xMi4zLjEtMTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000MTMuNTA1IDkxLjk1MUwxMzMuNDkgMzcxLjk2NmwtOTguOTk1LTk4Ljk5NWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDYuMjExIDI4NC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMTguNzk0IDExOC43OTRjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTExLjMxNC0xMS4zMTRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU0LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTIgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6bS0yNy42NTggMTUuOTkxbC0yNDAtNDE2Yy02LjE2LTEwLjY3OC0yMS41ODMtMTAuNjM0LTI3LjcxOCAwbC0yNDAgNDE2QzI3Ljk4MyA0NjYuNjc4IDM1LjczMSA0ODAgNDggNDgwaDQ4MGMxMi4zMjMgMCAxOS45OS0xMy4zNjkgMTMuODU5LTIzLjk5NnpNMjg4IDM3MmMtMTUuNDY0IDAtMjggMTIuNTM2LTI4IDI4czEyLjUzNiAyOCAyOCAyOCAyOC0xMi41MzYgMjgtMjgtMTIuNTM2LTI4LTI4LTI4em0tMTEuNDktMjEyaDIyLjk3OWM2LjgyMyAwIDEyLjI3NCA1LjY4MiAxMS45OSAxMi41bC03IDE2OGMtLjI2OCA2LjQyOC01LjU1NiAxMS41LTExLjk5IDExLjVoLTguOTc5Yy02LjQzMyAwLTExLjcyMi01LjA3My0xMS45OS0xMS41bC03LTE2OGMtLjI4My02LjgxOCA1LjE2Ny0xMi41IDExLjk5LTEyLjV6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tY2hldnJvbi1jb2xvcjogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZHJvcGRvd24tY2hldnJvbi1hY3RpdmUtY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLzUwMFxuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRhbGVydC1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLWhlaWdodDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZ3JlZW59JyBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGNsYXNzPSdzdDAnLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9JyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00xNy41MjUgMzYuNDY1bC03LjA3MSA3LjA3Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDQ1MS40OTRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw3LjA3MSA3LjA3YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDIxMS4wNTEtMjExLjA1YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwzNC40OTUgMzYuNDY1Yy00LjY4Ni00LjY4Ny0xMi4yODQtNC42ODctMTYuOTcgMHonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjM4LjQ3NSA0NzUuNTM1bDcuMDcxLTcuMDdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDUwLjA1MyAyNTYgMjQ1LjU0NiA2MC41MDZjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMEwxMC40NTQgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45Ny0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAuNzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgICR0YWJsZS1jZWxsLXBhZGRpbmcgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41NjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIiRuZ3NlYi1kb2NzLW1lbnUtd2lkdGg6IDE2cmVtO1xuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/components/menu/menu.service.ts");
/* harmony import */ var _menu_menu_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.query */ "./src/app/components/menu/menu.query.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(menuService, menuQuery) {
        this.menuService = menuService;
        this.menuQuery = menuQuery;
        this.activeTab = 'components';
        this._scrollPosition = 0;
        this.stickyHeader = 'hide';
    }
    Object.defineProperty(HeaderComponent.prototype, "scrollPosition", {
        get: function () {
            return this._scrollPosition;
        },
        set: function (value) {
            this._scrollPosition = value;
            if (this.scrollPosition >= 100) {
                this.stickyHeader = 'show';
            }
            else {
                this.stickyHeader = 'hide';
            }
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
        this.$isActive = this.menuQuery.$isMenuActive;
        this.$menuItems = this.menuQuery.$menuItems;
    };
    HeaderComponent.prototype.showMenu = function (tab) {
        // this.menuService.switchTab(tab);
        this.activeTab = tab;
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuService.toggleMenu();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HeaderComponent.prototype, "scrollPosition", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _menu_menu_query__WEBPACK_IMPORTED_MODULE_4__["MenuQuery"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/installation/installation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/installation/installation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-capitalize mt-3 mt-lg-4\">Installation</h2>\n<section class=\"card mt-2 mt-lg-3 mx-n3 mx-sm-0\">\n  <div class=\"card-body pt-3\">\n    <p>Placeholder for content</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/installation/installation.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/installation/installation.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2luc3RhbGxhdGlvbi9pbnN0YWxsYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/installation/installation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/installation/installation.component.ts ***!
  \*******************************************************************/
/*! exports provided: InstallationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationComponent", function() { return InstallationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var InstallationComponent = /** @class */ (function () {
    function InstallationComponent() {
    }
    InstallationComponent.prototype.ngOnInit = function () {
    };
    InstallationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-installation',
            template: __webpack_require__(/*! ./installation.component.html */ "./src/app/components/installation/installation.component.html"),
            styles: [__webpack_require__(/*! ./installation.component.scss */ "./src/app/components/installation/installation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InstallationComponent);
    return InstallationComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n  <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n  <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n</svg>\n"

/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seb-logo {\n  height: 56px;\n  width: 56px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVztFQUNYLFdBQVcsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWItbG9nbyB7XG4gIGhlaWdodDo1NnB4O1xuICB3aWR0aDogNTZweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.query.ts":
/*!***********************************************!*\
  !*** ./src/app/components/menu/menu.query.ts ***!
  \***********************************************/
/*! exports provided: MenuQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuQuery", function() { return MenuQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm5/datorama-akita.js");
/* harmony import */ var _menu_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.store */ "./src/app/components/menu/menu.store.ts");




var MenuQuery = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MenuQuery, _super);
    function MenuQuery(store) {
        var _this = _super.call(this, store) || this;
        _this.store = store;
        _this.$isMenuActive = _this.select('isMenuActive');
        _this.$menuItems = _this.select('menuItems');
        return _this;
    }
    MenuQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_store__WEBPACK_IMPORTED_MODULE_3__["MenuStore"]])
    ], MenuQuery);
    return MenuQuery;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"]));



/***/ }),

/***/ "./src/app/components/menu/menu.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/menu/menu.service.ts ***!
  \*************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.store */ "./src/app/components/menu/menu.store.ts");



var MenuService = /** @class */ (function () {
    function MenuService(menuStore) {
        this.menuStore = menuStore;
    }
    MenuService.prototype.updateMenuItems = function (menuItems) {
        this.menuStore.update(function (currentState) { return ({ menuItems: menuItems }); });
    };
    MenuService.prototype.toggleMenu = function (state) {
        this.menuStore.update(function (currentState) { return ({
            isMenuActive: typeof state !== 'undefined' ? state : !currentState.isMenuActive
        }); });
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_store__WEBPACK_IMPORTED_MODULE_2__["MenuStore"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.store.ts":
/*!***********************************************!*\
  !*** ./src/app/components/menu/menu.store.ts ***!
  \***********************************************/
/*! exports provided: createInitialState, MenuStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialState", function() { return createInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStore", function() { return MenuStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm5/datorama-akita.js");



function createInitialState() {
    return {
        isMenuActive: true,
        menuItems: []
    };
}
var MenuStore = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MenuStore, _super);
    function MenuStore() {
        return _super.call(this, createInitialState()) || this;
    }
    MenuStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'navigation' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuStore);
    return MenuStore;
}(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"]));



/***/ }),

/***/ "./src/app/components/menu/side-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/menu/side-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-nav bg-dark\" [ngClass]=\"{'active': $isActive | async}\">\n  <div class=\"row no-gutters mb-3\">\n    <div class=\"col-auto\">\n      <app-logo></app-logo>\n    </div>\n    <div class=\"col align-self-center pl-3\">\n      <h5 class=\"text-white mb-0\">ng-components</h5>\n    </div>\n    <div class=\"col-auto align-self-center px-3 d-lg-none\" (click)=\"toggleMenu()\">\n      <i class=\"fal fa-times fa-lg text-white\"></i>\n      <fa-icon icon=\"times\" class=\"text-white\" size=\"lg\"></fa-icon>\n    </div>\n  </div>\n  <ng-container *ngFor=\"let menuGroup of $menuGroups | async\">\n    <label class=\"text-capitalize small text-muted ml-3\"><fa-icon [icon]=\"menuGroup.icon\" class=\"mr-2\"></fa-icon>{{menuGroup.text}}</label>\n    <ul class=\"nav flex-column mb-3\">\n      <li *ngFor=\"let menuItem of menuGroup.children\" class=\"nav-item\">\n        <a class=\"text-capitalize nav-link\" [routerLink]=\"menuItem.path\" [routerLinkActive]=\"'active'\">{{menuItem.text}}</a>\n      </li>\n    </ul>\n  </ng-container>\n</aside>\n\n"

/***/ }),

/***/ "./src/app/components/menu/side-menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/menu/side-menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.side-nav {\n  -webkit-transform: translate3d(-16rem, 0, 0);\n          transform: translate3d(-16rem, 0, 0);\n  transition: -webkit-transform 400ms ease-in-out;\n  transition: transform 400ms ease-in-out;\n  transition: transform 400ms ease-in-out, -webkit-transform 400ms ease-in-out;\n  background: #343434;\n  width: 16rem;\n  height: 100vh;\n  position: fixed;\n  z-index: 1030;\n  left: 0;\n  top: 0; }\n.side-nav.active {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    display: block;\n    z-index: 1030; }\n@media (max-width: 767.98px) {\n  .side-nav.active {\n    display: none; } }\n@media (min-width: 992px) {\n  .side-nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n.nav-link {\n  color: #fff; }\n.list-group-menu .list-group-item.active {\n  background: #60cd18; }\n.list-group-menu .list-group-item a {\n  color: #fff; }\n.nav-item .nav-link {\n  transition: background-color 0.15s linear; }\n.nav-item:hover .nav-link {\n  background: rgba(96, 205, 24, 0.25); }\n.nav-item .nav-link.active {\n  background: #60cd18; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvcHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvcHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy92YXJpYWJsZXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLWNvcmUvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTs7Ozs7O0VDekRFO0FDREY7RUFDRSw0Q0FBbUQ7VUFBbkQsb0NBQW1EO0VBQ25ELCtDQUF1QztFQUF2Qyx1Q0FBdUM7RUFBdkMsNEVBQXVDO0VBQ3ZDLG1CQ1VnQjtFRFRoQixZRVQyQjtFRlUzQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFDMFZzQztFRHpWdEMsT0FBTztFQUNQLE1BQU0sRUFBQTtBQVRSO0lBV0ksdUNBQTZCO1lBQTdCLCtCQUE2QjtJQUM3QixjQUFjO0lBQ2QsYUNvVm9DLEVBQUE7QUU3UnBDO0VIbkRGO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7QUdvQ0M7RUhoQ0Y7SUFDRSx1Q0FBNkI7WUFBN0IsK0JBQTZCLEVBQUEsRUFDOUI7QUFHSDtFQUNFLFlBQVc7RUFDWCxXQUFXLEVBQUE7QUFHYjtFQUNFLFdDN0JhLEVBQUE7QURnQ2Y7RUFHTSxtQkNFeUIsRUFBQTtBREwvQjtFQU1NLFdDdENTLEVBQUE7QUQyQ2Y7RUFFSSx5Q0M4SHFDLEVBQUE7QURoSXpDO0VBS0ksbUNDWDJCLEVBQUE7QURNL0I7RUFRSSxtQkNkMkIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCIvKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG4uc2lkZS1uYXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNnJlbSwgMCwgMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogIzM0MzQzNDtcbiAgd2lkdGg6IDE2cmVtO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMzA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDsgfVxuICAuc2lkZS1uYXYuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDEwMzA7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zaWRlLW5hdi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnNpZGUtbmF2IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9IH1cblxuLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDsgfVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjsgfVxuXG4ubGlzdC1ncm91cC1tZW51IC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzYwY2QxODsgfVxuXG4ubGlzdC1ncm91cC1tZW51IC5saXN0LWdyb3VwLWl0ZW0gYSB7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5uYXYtaXRlbSAubmF2LWxpbmsge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGxpbmVhcjsgfVxuXG4ubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5NiwgMjA1LCAyNCwgMC4yNSk7IH1cblxuLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjBjZDE4OyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3N0eWxlcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvbWl4aW5zJztcblxuLnNpZGUtbmF2IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtJG5nc2ViLWRvY3MtbWVudS13aWR0aCwwLDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICRkYXJrO1xuICB3aWR0aDogJG5nc2ViLWRvY3MtbWVudS13aWR0aDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAkemluZGV4LWZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gICYuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAkemluZGV4LWZpeGVkO1xuICB9XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgLnNpZGUtbmF2LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gIC5zaWRlLW5hdiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIH1cbn1cblxuLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OjU2cHg7XG4gIHdpZHRoOiA1NnB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogJHdoaXRlO1xufVxuXG4ubGlzdC1ncm91cC1tZW51IHtcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5uYXYtaXRlbSB7XG4gIC5uYXYtbGluayB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uO1xuICB9XG4gICY6aG92ZXIgLm5hdi1saW5rIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRncmVlbiwuMjUpO1xuICB9XG4gIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgfVxufVxuXG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZTllOSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZGVkZSAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlY2VjZSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYWRhZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzg2ODY4NiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NDk0OSAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0MzQzNCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjEyMSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICAgICksXG4gICAgJGdyYXlzXG4pO1xuXG5cbiRyZWQ6ICAgICAgICAgICAgICAgICAgICNGMDM1Mjk7XG4kcmVkLWRhcms6ICAgICAgICAgICAgICAjRDgxQTFBOyAvLyBTRUIgc3BlY2lmaWNcbiRyZWQtZGFya2VyOiAgICAgICAgICAgICNCQjAwMEM7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdy1kYXJrZXI6ICAgICAgICAgI0Y4QTAwMDsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcms6ICAgICAgICAgICAjRkZCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3c6ICAgICAgICAgICAgICAgICNGRkM1MDA7XG4kZ3JlZW46ICAgICAgICAgICAgICAgICAjNjBjZDE4O1xuJGdyZWVuLWRhcms6ICAgICAgICAgICAgIzQ1QjQwMDsgLy8gU0VCIHNwZWNpZmljXG4kZ3JlZW4tZGFya2VyOiAgICAgICAgICAjMzc5RDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlOiAgICAgICAgICAgICAgICAgICM0MUIwRUU7XG4kYmx1ZS1kYXJrOiAgICAgICAgICAgICAjMDA5MkUxOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlLWRhcmtlcjogICAgICAgICAgICMwMDdBQzc7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZTogICAgICAgICAgICAgICAgIzY3M0FCNjtcbiRwdXJwbGUtZGFyazogICAgICAgICAgICM0RjJDOTk7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZS1kYXJrZXI6ICAgICAgICAgIzNGMjU4NzsgLy8gU0VCIHNwZWNpZmljXG5cblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJHB1cnBsZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICAgKSxcbiAgICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVyczogICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYnV0dG9uLXZhcmlhdGlvbnM6ICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZy1ib290c3RyYXA6ICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWFuZ3VsYXItZ2VuZXJpYy10YWJsZTogIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmd4LXRvYXN0cjogICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMDogMCxcbiAgICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgICAgMzogJHNwYWNlcixcbiAgICAgIDQ6ICgkc3BhY2VyICogMiksXG4gICAgICA1OiAoJHNwYWNlciAqIDMpXG4gICAgKSxcbiAgICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAyNTogMjUlLFxuICAgICAgNTA6IDUwJSxcbiAgICAgIDc1OiA3NSUsXG4gICAgICAxMDA6IDEwMCUsXG4gICAgICBhdXRvOiBhdXRvXG4gICAgKSxcbiAgICAkc2l6ZXNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuXG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcblxuLy8gR3JpZCBjb250YWluZXJzXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDMpKjIgIWRlZmF1bHQ7XG5cbi8vIFNFQiBzcGVjaWZpYyBvdmVycmlkZSB3aGVuIHJlc3BvbnNpdmUgZ3V0dGVycyBhcmUgZW5hYmxlZFxuQGlmICgkZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVycykge1xuICAkZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDIpO1xufVxuXG4vLyBTRUIgc3BlY2lmaWNcbiRyZXNwb25zaXZlLWd1dHRlcnM6IChcbiAgc206bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgbGc6bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgeGw6bWFwLWdldCgkc3BhY2VycywgMykqMlxuKSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbjouNHMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbjogICAgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gRm9udHNcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kc2ViLWZvbnQtcGF0aDogICAgICAgICAgICAgICBcIn5Ac2ViZ3JvdXAvZm9udHMvZm9udHNcIiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcIlNFQlNhbnNTZXJpZlwiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIlRyZWJ1Y2hldFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhzOiAgICgkZm9udC1zaXplLWJhc2UgKiAuNjg3NSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMyAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDtcblxuJGgxLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGgxLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDItc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgzLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRibHVlLWRhcmtlciAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaW5rLXdlaWdodDogICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcjogICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3I6ICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbjogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgYXJpYS1oaWRkZW49J3RydWUnIGRhdGEtcHJlZml4PSdmYWwnIGRhdGEtaWNvbj0nZXh0ZXJuYWwtbGluay1zcXVhcmUnIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1leHRlcm5hbC1saW5rLXNxdWFyZSBmYS13LTE0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uLWNvbG9yfScgZD0nTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptMTYgNDAwYzAgOC44MjItNy4xNzggMTYtMTYgMTZINDhjLTguODIyIDAtMTYtNy4xNzgtMTYtMTZWODBjMC04LjgyMiA3LjE3OC0xNiAxNi0xNmgzNTJjOC44MjIgMCAxNiA3LjE3OCAxNiAxNnYzNTJ6TTk5LjUxNSAzNzQuODI4Yy00LjY4Ni00LjY4Ni00LjY4Ni0xMi4yODQgMC0xNi45NzFsMTk1LjE1LTE5NS4xNS0uNzA3LS43MDctODkuOTU4LjM0MmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtOS45OTljMC02LjYyOCA1LjM3Mi0xMiAxMi0xMkwzNDAgMTI4YzYuNjI3IDAgMTIgNS4zNzIgMTIgMTJsLS4zNDMgMTM2YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTkuOTk5Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEybC4zNDItODkuOTU4LS43MDctLjcwNy0xOTUuMTUgMTk1LjE1Yy00LjY4NiA0LjY4Ni0xMi4yODQgNC42ODYtMTYuOTcxIDBsLTUuNjU3LTUuNjU3eicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICAgICAgICB4czogMCxcbiAgICAgICAgc206IDU3NnB4LFxuICAgICAgICBtZDogNzY4cHgsXG4gICAgICAgIGxnOiA5OTJweCxcbiAgICAgICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNjI1cmVtIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4yNzVyZW0gLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsdWUsIC4wNzUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1leHBhbmQtYmc6ICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjgxMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgMSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgIDRweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgIDRweCAhZGVmYXVsdDtcblxuLy8gRm9ybXNcblxuJGxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNjUlIDY1JSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNsaWRlLXRvZ2dsZS1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkYmx1ZTtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDE2cHggMTZweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J000NDMuNSAxNjIuNmwtNy4xLTcuMWMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzNTEgMjguNSAxNTUuNWMtNC43LTQuNy0xMi4zLTQuNy0xNyAwbC03LjEgNy4xYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjExIDIxMS4xYzQuNyA0LjcgMTIuMyA0LjcgMTcgMGwyMTEtMjExLjFjNC44LTQuNyA0LjgtMTIuMy4xLTE3eicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgNHB4ICFkZWZhdWx0O1xuXG5cbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NC00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUyIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4em0tMjcuNjU4IDE1Ljk5MWwtMjQwLTQxNmMtNi4xNi0xMC42NzgtMjEuNTgzLTEwLjYzNC0yNy43MTggMGwtMjQwIDQxNkMyNy45ODMgNDY2LjY3OCAzNS43MzEgNDgwIDQ4IDQ4MGg0ODBjMTIuMzIzIDAgMTkuOTktMTMuMzY5IDEzLjg1OS0yMy45OTZ6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHptLTExLjQ5LTIxMmgyMi45NzljNi44MjMgMCAxMi4yNzQgNS42ODIgMTEuOTkgMTIuNWwtNyAxNjhjLS4yNjggNi40MjgtNS41NTYgMTEuNS0xMS45OSAxMS41aC04Ljk3OWMtNi40MzMgMC0xMS43MjItNS4wNzMtMTEuOTktMTEuNWwtNy0xNjhjLS4yODMtNi44MTggNS4xNjctMTIuNSAxMS45OS0xMi41ek0yODggMzcyYy0xNS40NjQgMC0yOCAxMi41MzYtMjggMjhzMTIuNTM2IDI4IDI4IDI4IDI4LTEyLjUzNiAyOC0yOC0xMi41MzYtMjgtMjgtMjh6JyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWxpbmUtdGhpY2tuZXNzOiAgICAgIDJweCAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG5cbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcblxuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAuNjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWNoZXZyb24tY29sb3I6ICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGRyb3Bkb3duLWNoZXZyb24tYWN0aXZlLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bi1iYWNrZHJvcDogICAgICAgICAgOTkwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kbmF2LXRhYnMtbGluay1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gTmF2YmFyXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAuNDM3NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC13ZWlnaHQ6ICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cblxuLy8gSnVtYm90cm9uXG5cbi8vIENhcmRzXG5cbi8vIFRvb2x0aXBzXG5cbi8vIFBvcG92ZXJzXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcblxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgMCAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1hc2lkZS13aWR0aDogICAgICAgICAgICAgICAgIDMyMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRtb2RhbC1hc2lkZS1sZy13aWR0aDogICAgICAgICAgICAgIG1hcF9nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpOyAvLyA4MDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy81MDBcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYWxlcnQtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAxLjEyNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gVG9hc3Qgbm90aWZpY2F0aW9uc1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGFsZXJ0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAwIDAgLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gTGlzdCBncm91cFxuJGxpc3QtZ3JvdXAtYnVsbGV0LWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMSAxJyUzRSUzQ3JlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgc3R5bGU9J2ZpbGw6I3skZGFya307JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWNoZWNrLWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGdyZWVufScgZD0nTTQxMy41MDUgOTEuOTUxTDEzMy40OSAzNzEuOTY2bC05OC45OTUtOTguOTk1Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMNi4yMTEgMjg0LjI4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDExOC43OTQgMTE4Ljc5NGM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjk5LjgxMy0yOTkuODEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtMTEuMzE0LTExLjMxNGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDB6JyBjbGFzcz0nc3QwJy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBGaWd1cmVzXG5cbi8vIEJyZWFkY3J1bWJzXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtZm9udC13ZWlnaHQ6ICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMTcuNTI1IDM2LjQ2NWwtNy4wNzEgNy4wN2MtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDIwNS45NDcgMjU2IDEwLjQ1NCA0NTEuNDk0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsNy4wNzEgNy4wN2M0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGwyMTEuMDUxLTIxMS4wNWM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMMzQuNDk1IDM2LjQ2NWMtNC42ODYtNC42ODctMTIuMjg0LTQuNjg3LTE2Ljk3IDB6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItYmFjay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTIzOC40NzUgNDc1LjUzNWw3LjA3MS03LjA3YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw1MC4wNTMgMjU2IDI0NS41NDYgNjAuNTA2YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDBMMTAuNDU0IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwyMTEuMDUxIDIxMS4wNWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTctLjAwMXonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLXdpZHRoOiAgICAgICAgICAxNXB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBDbG9zZVxuXG4vLyBDb2RlXG5cbi8vIFByaW50aW5nXG5cbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS92YXJpYWJsZXNcIjtcblxuLy8gU2Nyb2xsYmFyXG4kc2Nyb2xsYmFyLXRyYWNrLWJnOiAgJGdyYXktMTAwO1xuJHNjcm9sbGJhci10aHVtYi1iZzogICRncmF5LTQwMDtcbiRzY3JvbGxiYXItdHJhY2stZGFyay1iZzogICRkYXJrO1xuJHNjcm9sbGJhci10aHVtYi1kYXJrLWJnOiAgJGdyYXktOTAwO1xuJHNjcm9sbGJhci10aHVtYi1hY3RpdmUtYmc6ICRibHVlO1xuJHNjcm9sbGJhci10aGlja25lc3M6ICAgICAxMHB4O1xuXG4vLyBBY2NvcmRpb25cblxuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICR0YWJsZS1ib3JkZXItY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICR0YWJsZS1ib3JkZXItd2lkdGggIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1oZWFkZXItcGFkZGluZzogIDAgLjc1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nOiAgICAkdGFibGUtY2VsbC1wYWRkaW5nICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXk6ICAuNTYyNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy14OiAgMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmc6ICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1zaXplOiAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuIiwiJG5nc2ViLWRvY3MtbWVudS13aWR0aDogMTZyZW07XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu/side-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/menu/side-menu.component.ts ***!
  \********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.service */ "./src/app/components/menu/menu.service.ts");
/* harmony import */ var _menu_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.query */ "./src/app/components/menu/menu.query.ts");




var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(menuServiceService, menuQuery) {
        this.menuServiceService = menuServiceService;
        this.menuQuery = menuQuery;
        this.$isActive = this.menuQuery.$isMenuActive;
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.$menuGroups = this.menuQuery.$menuItems;
    };
    SideMenuComponent.prototype.toggleMenu = function (state) {
        this.menuServiceService.toggleMenu();
    };
    SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/components/menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/components/menu/side-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
            _menu_query__WEBPACK_IMPORTED_MODULE_3__["MenuQuery"]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/examples/components/buttons/buttons.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/examples/components/buttons/buttons.module.ts ***!
  \***************************************************************/
/*! exports provided: ROUTES, ButtonsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _examples_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/buttons/buttons.component */ "./src/app/examples/components/buttons/examples/buttons/buttons.component.ts");
/* harmony import */ var _sebgroup_ng_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sebgroup/ng-components */ "../../lib/src/button/index.ts");
/* harmony import */ var _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/example-page/example-list/example-list.component */ "./src/app/components/example-page/example-list/example-list.component.ts");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");








var ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'examples' },
    {
        path: '',
        component: _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_3__["ExamplePageComponent"],
        children: [
            { path: 'examples',
                component: _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_6__["ExampleListComponent"],
                children: [{
                        path: 'button',
                        component: _examples_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
                        data: {
                            title: 'Button directive',
                            description: 'Additional description for example (optional)',
                            sources: [{
                                    name: 'buttons.component.html',
                                    src: __webpack_require__(/*! raw-loader!./examples/buttons/buttons.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/buttons/examples/buttons/buttons.component.html"),
                                    lang: 'markup'
                                }, {
                                    name: 'buttons.component.ts',
                                    src: __webpack_require__(/*! raw-loader!./examples/buttons/buttons.component.ts */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/buttons/examples/buttons/buttons.component.ts"),
                                    lang: 'ts'
                                }]
                        }
                    }, {
                        path: 'another-example',
                        component: _examples_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"],
                        data: {
                            title: 'Another button example (same component)',
                            description: "Same component used for the sake of showing how multiple examples can be set up.\n                          It's also possible to add html like a <a href=\"http://www.seb.se\" target=\"blank\">link</a>.",
                            sources: [{
                                    name: 'buttons.component.html',
                                    src: "<div>Some other <strong class=\"fancy-class\">inline</strong> example markup</div>",
                                    lang: 'markup'
                                }, {
                                    name: 'buttons.component.js',
                                    src: "foo(bar: any) => {\n                console.log(bar);\n              }",
                                    lang: 'js'
                                }, {
                                    name: 'buttons.component.css',
                                    src: "\n                .fancy-class {\n                  color: hotpink !important;\n                }\n              ",
                                    lang: 'css'
                                }]
                        }
                    }] },
            {
                path: 'api',
                component: _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_7__["ApiListComponent"],
                data: {
                    sources: [__webpack_require__(/*! raw-loader!../../../../../../../lib/src/button/button.ts */ "../../node_modules/raw-loader/index.js!../../lib/src/button/button.ts")]
                }
            }
        ]
    }
];
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    ButtonsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_examples_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sebgroup_ng_components__WEBPACK_IMPORTED_MODULE_5__["SebButtonModule"]
            ]
        })
    ], ButtonsModule);
    return ButtonsModule;
}());



/***/ }),

/***/ "./src/app/examples/components/buttons/examples/buttons/buttons.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/examples/components/buttons/examples/buttons/buttons.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9leGFtcGxlcy9jb21wb25lbnRzL2J1dHRvbnMvZXhhbXBsZXMvYnV0dG9ucy9idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/examples/components/buttons/examples/buttons/buttons.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/examples/components/buttons/examples/buttons/buttons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/buttons/examples/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/examples/components/buttons/examples/buttons/buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/examples/components/modal/examples/modal/modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/examples/components/modal/examples/modal/modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  position: static; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2V4YW1wbGVzL2NvbXBvbmVudHMvbW9kYWwvZXhhbXBsZXMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvZXhhbXBsZXMvY29tcG9uZW50cy9tb2RhbC9leGFtcGxlcy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/examples/components/modal/examples/modal/modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/examples/components/modal/examples/modal/modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/modal/examples/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/examples/components/modal/examples/modal/modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/examples/components/modal/modal.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/examples/components/modal/modal.module.ts ***!
  \***********************************************************/
/*! exports provided: ROUTES, ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _examples_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/modal/modal.component */ "./src/app/examples/components/modal/examples/modal/modal.component.ts");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/example-page/example-list/example-list.component */ "./src/app/components/example-page/example-list/example-list.component.ts");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");







var ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'examples' },
    {
        path: '',
        component: _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_4__["ExamplePageComponent"],
        children: [
            { path: 'examples',
                component: _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_5__["ExampleListComponent"],
                children: [{
                        path: 'modal',
                        component: _examples_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"],
                        data: {
                            title: 'Modal component',
                            description: 'Additional description for example (optional)',
                            sources: [{
                                    name: 'modal.component.html',
                                    // @ts-ignore
                                    src: __webpack_require__(/*! raw-loader!./examples/modal/modal.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/modal/examples/modal/modal.component.html"),
                                    lang: 'markup'
                                }, {
                                    name: 'modal.component.ts',
                                    // @ts-ignore
                                    src: __webpack_require__(/*! raw-loader!./examples/modal/modal.component.ts */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/modal/examples/modal/modal.component.ts"),
                                    lang: 'ts'
                                }]
                        }
                    }] },
            { path: 'api', component: _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_6__["ApiListComponent"], data: {
                    sources: [
                        __webpack_require__(/*! raw-loader!../../../../../../../lib/src/button/parse-source-example/parse-source-example.component.ts */ "../../node_modules/raw-loader/index.js!../../lib/src/button/parse-source-example/parse-source-example.component.ts"),
                        __webpack_require__(/*! raw-loader!../../../../../../../lib/src/modal/modal.ts */ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.ts"),
                        __webpack_require__(/*! raw-loader!../../../../../../../lib/src/modal/modal.directives.ts */ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.directives.ts"),
                        __webpack_require__(/*! raw-loader!../../../../../../../lib/src/modal/modal.service.ts */ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.service.ts")
                    ]
                }
            }
        ]
    }
];
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _examples_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buttons/buttons.module */ "./src/app/examples/components/buttons/buttons.module.ts");
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.module */ "./src/app/examples/components/modal/modal.module.ts");





var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    version: (function () {
        var version = '';
        try {
            // @ts-ignore
            version = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../dist/lib/package.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())).version;
        }
        catch (e) {
            version = 'n/a';
        }
        return version;
    })(),
    travis_build_number: '__TRAVIS_BUILD_NUMBER__'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/sebgroup/ng-components/projects/ng-components-docs/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map