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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "../../lib/src/button/button.ts");
/* harmony import */ var _parse_source_example_parse_source_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-source-example/parse-source-example.component */ "../../lib/src/button/parse-source-example/parse-source-example.component.ts");





let SebButtonModule = class SebButtonModule {
};
SebButtonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_button__WEBPACK_IMPORTED_MODULE_3__["SebButtonDirective"], _parse_source_example_parse_source_example_component__WEBPACK_IMPORTED_MODULE_4__["ParseSourceExampleComponent"]],
        exports: [_button__WEBPACK_IMPORTED_MODULE_3__["SebButtonDirective"]]
    })
], SebButtonModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SebButtonDirective = class SebButtonDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._btn = true;
        this._disabled = null;
        this._type = 'primary';
        this._outline = false;
        this._size = null;
        this._setClasses();
    }
    get type() {
        return this._type;
    }
    set type(value) {
        if (value && value !== this._type) {
            this._removeClasses();
            this._type = value;
            this._setClasses();
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = `${value}` === 'true' ? true : null;
    }
    get outline() {
        return this._outline;
    }
    set outline(value) {
        value = value != null && `${value}` !== 'false';
        if (this._outline !== value) {
            this._removeClasses();
            this._outline = value;
            this._setClasses();
        }
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    _setClasses() {
        const styleClass = this.outline ? `btn-outline-${this.type}` : `btn-${this.type}`;
        this.elementRef.nativeElement.classList.add(styleClass);
    }
    _removeClasses() {
        const styleClass = this.outline ? `btn-outline-${this.type}` : `btn-${this.type}`;
        this.elementRef.nativeElement.classList.remove(styleClass);
    }
};
SebButtonDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
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



/***/ }),

/***/ "../../lib/src/button/index.ts":
/*!*************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/index.ts ***!
  \*************************************************************************/
/*! exports provided: SebButtonModule, SebButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public_api */ "../../lib/src/button/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebButtonDirective"]; });





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


/**
 * Some description for the component
 */
let ParseSourceExampleComponent = class ParseSourceExampleComponent {
    constructor() {
        /**
         * Lorem ipsum dolar sit event
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.someValue = 'hello'; // holds some value for the component
        this._time = 'time';
        this._food = 'burger';
    }
    /**
     * Some description for the date input, like format should be ex. `YYYYMMDD`.
     * Use it to display date in a specific format inside the component.
     */
    set date(value) {
        this._date = value;
    }
    get date() {
        return this._date;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    /**
     * Food for the component ex. `banana` [show banana](https://www.google.se/search?q=banana)
     */
    get food() {
        return this._food;
    }
    set food(value) {
        this._food = value;
    }
    /**
     * Foo bar function for demo purposes
     */
    foo(bar, hoo) {
        return !!bar;
    }
    ngOnInit() {
    }
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
        template: `
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ParseSourceExampleComponent);



/***/ }),

/***/ "../../lib/src/button/public_api.ts":
/*!******************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/button/public_api.ts ***!
  \******************************************************************************/
/*! exports provided: SebButtonModule, SebButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.module */ "../../lib/src/button/button.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonModule", function() { return _button_module__WEBPACK_IMPORTED_MODULE_1__["SebButtonModule"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "../../lib/src/button/button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebButtonDirective", function() { return _button__WEBPACK_IMPORTED_MODULE_2__["SebButtonDirective"]; });






/***/ }),

/***/ "../../lib/src/core/focus/focus.trap.ts":
/*!**********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/core/focus/focus.trap.ts ***!
  \**********************************************************************************/
/*! exports provided: FocusTrap, FocusTrapFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



const FOCUSABLE_ELEMENTS_SELECTOR = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
    'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
].join(', ');
class FocusTrap {
    constructor(body, previousFocusedElement) {
        this.body = body;
        this.previousFocusedElement = previousFocusedElement;
    }
    restoreFocus() {
        if (this.previousFocusedElement &&
            this.previousFocusedElement['focus'] &&
            this.body.contains(this.previousFocusedElement)) {
            this.previousFocusedElement.focus();
        }
        else {
            this.body.focus();
        }
    }
}
let FocusTrapFactory = class FocusTrapFactory {
    constructor(document) {
        this.document = document;
    }
    trapFocus(element, enableAutoFocus = true) {
        const previousFocusedEl = this.document.activeElement;
        if (element.contains(previousFocusedEl)) {
            return null;
        }
        let focusedEl;
        if (enableAutoFocus) {
            const autoFocusEl = element.querySelector('[sebAutoFocus]');
            if (autoFocusEl) {
                focusedEl = autoFocusEl;
            }
        }
        focusedEl = focusedEl || this._getFirstFocusableElement(element) || element;
        focusedEl.focus();
        return new FocusTrap(this.document.body, previousFocusedEl);
    }
    _getFirstFocusableElement(element) {
        const elements = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR))
            .filter((el) => el.tabIndex !== -1);
        return elements[0];
    }
};
FocusTrapFactory.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
FocusTrapFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], FocusTrapFactory);



/***/ }),

/***/ "../../lib/src/modal/index.ts":
/*!************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/index.ts ***!
  \************************************************************************/
/*! exports provided: SebModalModule, SebModalInjector, SEB_MODAL_DATA, SEB_DEFAULT_CONFIG, SebModalService, SebModal, SebModalRef, SebModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public_api */ "../../lib/src/modal/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalInjector", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebModalInjector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEB_MODAL_DATA", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SEB_MODAL_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEB_DEFAULT_CONFIG", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SEB_DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModal", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalBackdrop", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebModalBackdrop"]; });





/***/ }),

/***/ "../../lib/src/modal/modal.backdrop.ts":
/*!*********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.backdrop.ts ***!
  \*********************************************************************************/
/*! exports provided: SebModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalBackdrop", function() { return SebModalBackdrop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SebModalBackdrop = class SebModalBackdrop {
};
SebModalBackdrop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: '',
        host: { '[class]': '"modal-backdrop fade show"' }
    })
], SebModalBackdrop);



/***/ }),

/***/ "../../lib/src/modal/modal.directives.ts":
/*!***********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.directives.ts ***!
  \***********************************************************************************/
/*! exports provided: SebModalTitle, SebModalHeader, SebModalBody, SebModalFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalTitle", function() { return SebModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalHeader", function() { return SebModalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalBody", function() { return SebModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalFooter", function() { return SebModalFooter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SebModalTitle = class SebModalTitle {
};
SebModalTitle = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[sebModalTitle]',
        host: {
            '[class]': '"modal-title"'
        }
    })
], SebModalTitle);

let SebModalHeader = class SebModalHeader {
};
SebModalHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'seb-modal-header, [sebModalHeader]',
        host: {
            '[class]': '"modal-header"'
        }
    })
], SebModalHeader);

let SebModalBody = class SebModalBody {
};
SebModalBody = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'seb-modal-body, [sebModalBody]',
        host: {
            '[class]': '"modal-body"',
            'style': 'display:block;'
        }
    })
], SebModalBody);

let SebModalFooter = class SebModalFooter {
};
SebModalFooter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'seb-modal-footer, [sebModalFooter]',
        host: {
            '[class]': '"modal-footer"'
        }
    })
], SebModalFooter);



/***/ }),

/***/ "../../lib/src/modal/modal.injector.ts":
/*!*********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.injector.ts ***!
  \*********************************************************************************/
/*! exports provided: SebModalInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalInjector", function() { return SebModalInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

class SebModalInjector {
    constructor(injector, tokens) {
        this.injector = injector;
        this.tokens = tokens;
    }
    get(token, notFoundValue) {
        const value = this.tokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this.injector.get(token, notFoundValue);
    }
}


/***/ }),

/***/ "../../lib/src/modal/modal.module.ts":
/*!*******************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SebModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalModule", function() { return SebModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "../../lib/src/modal/modal.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "../../lib/src/modal/modal.service.ts");
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.backdrop */ "../../lib/src/modal/modal.backdrop.ts");
/* harmony import */ var _modal_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.directives */ "../../lib/src/modal/modal.directives.ts");







let SebModalModule = class SebModalModule {
};
SebModalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [
            _modal__WEBPACK_IMPORTED_MODULE_3__["SebModal"],
            _modal_backdrop__WEBPACK_IMPORTED_MODULE_5__["SebModalBackdrop"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalTitle"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalHeader"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalBody"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalFooter"]
        ],
        exports: [
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalTitle"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalHeader"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalBody"],
            _modal_directives__WEBPACK_IMPORTED_MODULE_6__["SebModalFooter"]
        ],
        entryComponents: [
            _modal__WEBPACK_IMPORTED_MODULE_3__["SebModal"],
            _modal_backdrop__WEBPACK_IMPORTED_MODULE_5__["SebModalBackdrop"]
        ],
        providers: [
            _modal_service__WEBPACK_IMPORTED_MODULE_4__["SebModalService"]
        ]
    })
], SebModalModule);



/***/ }),

/***/ "../../lib/src/modal/modal.ref.ts":
/*!****************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.ref.ts ***!
  \****************************************************************************/
/*! exports provided: SebModalRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalRef", function() { return SebModalRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class SebModalRef {
    constructor(location, config) {
        this.location = location;
        this.config = config;
        this.onClose$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        if (this.config && this.config.closeOnNavigationChanges) {
            this._locationChanges = this.location
                .subscribe(() => this.close());
        }
    }
    close() {
        this._destroy();
    }
    dismiss(reason) {
        this._destroy(reason);
    }
    _destroy(reason) {
        this._locationChanges.unsubscribe();
        this.onClose$.next(reason);
    }
}


/***/ }),

/***/ "../../lib/src/modal/modal.service.ts":
/*!********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.service.ts ***!
  \********************************************************************************/
/*! exports provided: SEB_MODAL_DATA, SEB_DEFAULT_CONFIG, SebModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEB_MODAL_DATA", function() { return SEB_MODAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEB_DEFAULT_CONFIG", function() { return SEB_DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModalService", function() { return SebModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.injector */ "../../lib/src/modal/modal.injector.ts");
/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.ref */ "../../lib/src/modal/modal.ref.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "../../lib/src/modal/modal.ts");
/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.backdrop */ "../../lib/src/modal/modal.backdrop.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");








const SEB_MODAL_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SebModalData');
const SEB_DEFAULT_CONFIG = ({
    type: null,
    closable: true,
    closeOnNavigationChanges: true,
    data: null,
    classes: null
});
let SebModalService = class SebModalService {
    constructor(injector, appRef, rendererFactory, cmpFactoryResolver, location, document) {
        this.injector = injector;
        this.appRef = appRef;
        this.rendererFactory = rendererFactory;
        this.cmpFactoryResolver = cmpFactoryResolver;
        this.location = location;
        this.document = document;
    }
    open(cmp, config = {}) {
        config = Object.assign({}, SEB_DEFAULT_CONFIG, config);
        const modalRef = new _modal_ref__WEBPACK_IMPORTED_MODULE_3__["SebModalRef"](this.location, config);
        const cmpRef = this._getCmpRef(cmp, this._getInjector(modalRef, config.data));
        const modalCmpRef = this._getCmpRef(_modal__WEBPACK_IMPORTED_MODULE_5__["SebModal"], this.injector, [[cmpRef.location.nativeElement]]);
        const backdropCmpRef = this._getCmpRef(_modal_backdrop__WEBPACK_IMPORTED_MODULE_6__["SebModalBackdrop"], this.injector);
        modalCmpRef.instance.modalRef = modalRef;
        this._attachToView(modalCmpRef);
        this._attachToView(backdropCmpRef);
        const renderer = this._getRenderer();
        renderer.addClass(cmpRef.location.nativeElement, 'modal-content');
        renderer.setStyle(this.document.body, 'overflow', 'hidden');
        renderer.addClass(this.document.body, 'modal-open');
        modalRef.onClose$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
            renderer.removeStyle(this.document.body, 'overflow');
            renderer.removeClass(this.document.body, 'modal-open');
            this._detachFromView(modalCmpRef);
            this._detachFromView(backdropCmpRef);
            [modalCmpRef, backdropCmpRef, cmpRef]
                .forEach(cmRef => {
                cmRef.destroy();
                cmRef = null;
            });
        });
        return modalRef;
    }
    _getRenderer() {
        return this.rendererFactory.createRenderer(null, null);
    }
    _attachToView(cmpRef) {
        const root = this.document.body;
        root.appendChild(cmpRef.location.nativeElement);
    }
    _detachFromView(cmpRef) {
        const el = cmpRef.location.nativeElement;
        el.parentNode.removeChild(el);
    }
    _getInjector(modalRef, data) {
        const tokens = new WeakMap();
        tokens.set(SEB_MODAL_DATA, data);
        tokens.set(_modal_ref__WEBPACK_IMPORTED_MODULE_3__["SebModalRef"], modalRef);
        return new _modal_injector__WEBPACK_IMPORTED_MODULE_2__["SebModalInjector"](this.injector, tokens);
    }
    _getCmpRef(cmp, injector, projectableNodes) {
        const cmpFactory = this.cmpFactoryResolver.resolveComponentFactory(cmp);
        const cmpRef = cmpFactory.create(injector, projectableNodes);
        this.appRef.attachView(cmpRef.hostView);
        return cmpRef;
    }
};
SebModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
SebModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
], SebModalService);



/***/ }),

/***/ "../../lib/src/modal/modal.ts":
/*!************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/modal.ts ***!
  \************************************************************************/
/*! exports provided: SebModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebModal", function() { return SebModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_focus_focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/focus/focus.trap */ "../../lib/src/core/focus/focus.trap.ts");




let SebModal = class SebModal {
    constructor(elementRef, focusTrapFactory, document) {
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.document = document;
    }
    onEscKey() { this._close(); }
    ;
    onBackdropClick(target) {
        if (this.elementRef.nativeElement !== target) {
            return;
        }
        this._close();
    }
    ngOnInit() {
        this.focusTrap
            = this.focusTrapFactory.trapFocus(this.elementRef.nativeElement);
    }
    _close() {
        if (this.modalRef &&
            this.modalRef.config &&
            this.modalRef.config.closable) {
            this.modalRef.close();
        }
    }
    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.restoreFocus();
        }
    }
};
SebModal.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _core_focus_focus_trap__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup.esc'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SebModal.prototype, "onEscKey", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event.target']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SebModal.prototype, "onBackdropClick", null);
SebModal = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.html */ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.html")).default,
        host: {
            '[class]': '"modal fade show d-block"',
            '[class.modal-fullscreen]': 'modalRef?.config?.type === "fullscreen"',
            '[class.modal-aside]': 'modalRef?.config?.type === "aside-left" || modalRef?.config?.type === "aside-right"',
            '[class.modal-aside-left]': 'modalRef?.config?.type === "aside-left"',
            '[class.modal-aside-right]': 'modalRef?.config?.type === "aside-right"',
            'tabindex': '-1',
            'role': 'dialog'
        }
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _core_focus_focus_trap__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], Object])
], SebModal);



/***/ }),

/***/ "../../lib/src/modal/public_api.ts":
/*!*****************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/modal/public_api.ts ***!
  \*****************************************************************************/
/*! exports provided: SebModalModule, SebModalInjector, SEB_MODAL_DATA, SEB_DEFAULT_CONFIG, SebModalService, SebModal, SebModalRef, SebModalBackdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.module */ "../../lib/src/modal/modal.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalModule", function() { return _modal_module__WEBPACK_IMPORTED_MODULE_1__["SebModalModule"]; });

/* harmony import */ var _modal_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.injector */ "../../lib/src/modal/modal.injector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalInjector", function() { return _modal_injector__WEBPACK_IMPORTED_MODULE_2__["SebModalInjector"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.service */ "../../lib/src/modal/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEB_MODAL_DATA", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_3__["SEB_MODAL_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEB_DEFAULT_CONFIG", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_3__["SEB_DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalService", function() { return _modal_service__WEBPACK_IMPORTED_MODULE_3__["SebModalService"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "../../lib/src/modal/modal.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_4__["SebModal"]; });

/* harmony import */ var _modal_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.ref */ "../../lib/src/modal/modal.ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalRef", function() { return _modal_ref__WEBPACK_IMPORTED_MODULE_5__["SebModalRef"]; });

/* harmony import */ var _modal_backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.backdrop */ "../../lib/src/modal/modal.backdrop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebModalBackdrop", function() { return _modal_backdrop__WEBPACK_IMPORTED_MODULE_6__["SebModalBackdrop"]; });










/***/ }),

/***/ "../../lib/src/wizard/index.ts":
/*!*************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/index.ts ***!
  \*************************************************************************/
/*! exports provided: SebWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public_api */ "../../lib/src/wizard/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebWizardModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_1__["SebWizardModule"]; });





/***/ }),

/***/ "../../lib/src/wizard/public_api.ts":
/*!******************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/public_api.ts ***!
  \******************************************************************************/
/*! exports provided: SebWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wizard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wizard.module */ "../../lib/src/wizard/wizard.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SebWizardModule", function() { return _wizard_module__WEBPACK_IMPORTED_MODULE_1__["SebWizardModule"]; });





/***/ }),

/***/ "../../lib/src/wizard/wizard-step-label.directive.ts":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard-step-label.directive.ts ***!
  \***********************************************************************************************/
/*! exports provided: SebWizardStepLabelDirective, SebWizardStepLabelDescDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebWizardStepLabelDirective", function() { return SebWizardStepLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebWizardStepLabelDescDirective", function() { return SebWizardStepLabelDescDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SebWizardStepLabelDirective = class SebWizardStepLabelDirective {
    constructor(template) {
        this.template = template;
    }
};
SebWizardStepLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
SebWizardStepLabelDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[sebWizardStepLabel]' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], SebWizardStepLabelDirective);

let SebWizardStepLabelDescDirective = class SebWizardStepLabelDescDirective {
    constructor(template) {
        this.template = template;
    }
};
SebWizardStepLabelDescDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
SebWizardStepLabelDescDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[sebWizardStepLabelDesc]' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], SebWizardStepLabelDescDirective);



/***/ }),

/***/ "../../lib/src/wizard/wizard-step.component.ts":
/*!*****************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard-step.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SebWizardStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebWizardStepComponent", function() { return SebWizardStepComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard-step-label.directive */ "../../lib/src/wizard/wizard-step-label.directive.ts");



let SebWizardStepComponent = class SebWizardStepComponent {
    constructor() {
        this.hideFromNavigation = false;
        this._interacted = false;
        this._completed = null;
    }
    get interacted() {
        return this._interacted;
    }
    set interacted(value) {
        this._interacted = `${value}` === 'true';
    }
    get completed() {
        return this._completed === null
            ? this.stepControl
                ? this.stepControl.valid && this.interacted
                : this.interacted
            : this._completed;
    }
    set completed(value) {
        this._completed = `${value}` === 'true';
    }
    reset() {
        this._interacted = false;
        this._completed = null;
        if (this.stepControl) {
            this.stepControl.reset();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_2__["SebWizardStepLabelDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_2__["SebWizardStepLabelDirective"])
], SebWizardStepComponent.prototype, "wizardStepLabel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_2__["SebWizardStepLabelDescDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_2__["SebWizardStepLabelDescDirective"])
], SebWizardStepComponent.prototype, "wizardStepLabelDesc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], SebWizardStepComponent.prototype, "wizardStepContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SebWizardStepComponent.prototype, "hideFromNavigation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SebWizardStepComponent.prototype, "stepControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SebWizardStepComponent.prototype, "interacted", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SebWizardStepComponent.prototype, "completed", null);
SebWizardStepComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'div[seb-wizard-step], seb-wizard-step',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wizard-step.component.html */ "../../node_modules/raw-loader/index.js!../../lib/src/wizard/wizard-step.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], SebWizardStepComponent);



/***/ }),

/***/ "../../lib/src/wizard/wizard-title.directive.ts":
/*!******************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard-title.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: SebWizardTitleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebWizardTitleDirective", function() { return SebWizardTitleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SebWizardTitleDirective = class SebWizardTitleDirective {
    constructor(template) {
        this.template = template;
    }
};
SebWizardTitleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
SebWizardTitleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[sebWizardTitle]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], SebWizardTitleDirective);



/***/ }),

/***/ "../../lib/src/wizard/wizard.component.ts":
/*!************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard.component.ts ***!
  \************************************************************************************/
/*! exports provided: SebWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebWizardComponent", function() { return SebWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _wizard_title_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard-title.directive */ "../../lib/src/wizard/wizard-title.directive.ts");
/* harmony import */ var _wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-step.component */ "../../lib/src/wizard/wizard-step.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






let SebWizardComponent = class SebWizardComponent {
    constructor(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._ngOnDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideNavigation = false;
        this.disableNavigation = false;
        this._selectedIndex = 0;
        this._stepWise = false;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(index) {
        if (this.wizardSteps) {
            if (this._validIndex(index) && this._validStepControl(index)) {
                this._emitChanges(index);
                this._selectedIndex = index;
                this._changeDetectorRef.markForCheck();
            }
        }
        else {
            this._selectedIndex = index;
        }
    }
    get stepWise() {
        return this._stepWise;
    }
    set stepWise(value) {
        this._stepWise = `${value}` !== 'false';
    }
    select(wizardStep) {
        if (!this.disableNavigation) {
            this.selectedIndex = this.wizardSteps.toArray().indexOf(wizardStep);
        }
    }
    reset() {
        this.selectedIndex = 0;
        this.wizardSteps.forEach((step) => step.reset());
        this._changeDetectorRef.markForCheck();
    }
    next() {
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.wizardSteps.length - 1);
    }
    previous() {
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    }
    _validIndex(index) {
        if (index < 0 || index > this.wizardSteps.length - 1) {
            throw Error('SebWizard: selected index is out of bounds');
        }
        return this._selectedIndex !== index;
    }
    _validStepControl(index) {
        const wizardSteps = this.wizardSteps.toArray();
        wizardSteps[this.selectedIndex].interacted = true;
        if (this.stepWise) {
            return !wizardSteps
                .slice(0, index)
                .some((wizardStep) => {
                const { stepControl } = wizardStep;
                return stepControl
                    ? !stepControl.valid ||
                        stepControl.pending ||
                        !wizardStep.interacted
                    : !wizardStep.completed;
            });
        }
        return true;
    }
    disabledWizardStep(index) {
        return !this._validStepControl(index);
    }
    _emitChanges(index) {
        const wizardSteps = this.wizardSteps.toArray();
        this.onChanges.emit({
            selectedIndex: index,
            previousIndex: this.selectedIndex,
            selectedStep: wizardSteps[index],
            previousStep: wizardSteps[this.selectedIndex],
        });
    }
    ngAfterContentInit() {
        this.wizardSteps.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._ngOnDestroy$))
            .subscribe(() => this._changeDetectorRef.markForCheck());
    }
    ngOnDestroy() {
        this._ngOnDestroy$.next();
        this._ngOnDestroy$.complete();
    }
};
SebWizardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_wizard_title_directive__WEBPACK_IMPORTED_MODULE_2__["SebWizardTitleDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _wizard_title_directive__WEBPACK_IMPORTED_MODULE_2__["SebWizardTitleDirective"])
], SebWizardComponent.prototype, "wizardTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["SebWizardStepComponent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], SebWizardComponent.prototype, "wizardSteps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SebWizardComponent.prototype, "onChanges", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SebWizardComponent.prototype, "hideNavigation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], SebWizardComponent.prototype, "disableNavigation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], SebWizardComponent.prototype, "selectedIndex", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], SebWizardComponent.prototype, "stepWise", null);
SebWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'div[seb-wizard], seb-wizard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wizard.component.html */ "../../node_modules/raw-loader/index.js!../../lib/src/wizard/wizard.component.html")).default,
        host: {
            class: 'd-flex flex-column flex-md-row flex-md-row w-100 h-100 border',
        },
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], SebWizardComponent);



/***/ }),

/***/ "../../lib/src/wizard/wizard.module.ts":
/*!*********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SebWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SebWizardModule", function() { return SebWizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard.component */ "../../lib/src/wizard/wizard.component.ts");
/* harmony import */ var _wizard_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wizard-title.directive */ "../../lib/src/wizard/wizard-title.directive.ts");
/* harmony import */ var _wizard_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wizard-step.component */ "../../lib/src/wizard/wizard-step.component.ts");
/* harmony import */ var _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wizard-step-label.directive */ "../../lib/src/wizard/wizard-step-label.directive.ts");







let SebWizardModule = class SebWizardModule {
};
SebWizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [
            _wizard_component__WEBPACK_IMPORTED_MODULE_3__["SebWizardComponent"],
            _wizard_title_directive__WEBPACK_IMPORTED_MODULE_4__["SebWizardTitleDirective"],
            _wizard_step_component__WEBPACK_IMPORTED_MODULE_5__["SebWizardStepComponent"],
            _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__["SebWizardStepLabelDirective"],
            _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__["SebWizardStepLabelDescDirective"],
        ],
        exports: [
            _wizard_component__WEBPACK_IMPORTED_MODULE_3__["SebWizardComponent"],
            _wizard_title_directive__WEBPACK_IMPORTED_MODULE_4__["SebWizardTitleDirective"],
            _wizard_step_component__WEBPACK_IMPORTED_MODULE_5__["SebWizardStepComponent"],
            _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__["SebWizardStepLabelDirective"],
            _wizard_step_label_directive__WEBPACK_IMPORTED_MODULE_6__["SebWizardStepLabelDescDirective"],
        ],
    })
], SebWizardModule);



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

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/modal/modal.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/modal/modal.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\n    <ng-content></ng-content>\n</div>\n"

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

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/wizard/wizard-step.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard-step.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template>\n  <ng-content></ng-content>\n</ng-template>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/wizard/wizard.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"p-3 bg-light\" style=\"min-width: 200px\">\n  <ng-container\n    *ngIf=\"wizardTitle\"\n    [ngTemplateOutlet]=\"wizardTitle!.template\"\n  ></ng-container>\n  <ol\n    class=\"list-group list-group-ordered d-none d-md-block mt-2\"\n    *ngIf=\"!hideNavigation\"\n  >\n    <ng-container *ngFor=\"let wizardStep of wizardSteps; let i = index\">\n      <li\n        class=\"list-group-item-action\"\n        (click)=\"select(wizardStep)\"\n        *ngIf=\"!wizardStep!.hideFromNavigation\"\n        [attr.tabindex]=\"i\"\n        [class.active]=\"i === selectedIndex\"\n        [class.disabled]=\"disabledWizardStep(i)\"\n        [class.list-group-item-success]=\"\n          wizardStep.completed || wizardStep.interacted\n        \"\n      >\n        <ng-container\n          *ngIf=\"wizardStep.wizardStepLabel\"\n          [ngTemplateOutlet]=\"wizardStep!.wizardStepLabel!.template\"\n        ></ng-container>\n      </li>\n    </ng-container>\n  </ol>\n  <ng-container *ngFor=\"let wizardStep of wizardSteps; let i = index\">\n    <div\n      class=\"d-xs-block d-sm-block d-md-none\"\n      *ngIf=\"!wizardStep!.hideFromNavigation && i === selectedIndex\"\n    >\n      <div class=\"h3 mb-0 mt-2\">\n        <ng-container\n          *ngIf=\"wizardStep.wizardStepLabel\"\n          [ngTemplateOutlet]=\"wizardStep!.wizardStepLabel!.template\"\n        ></ng-container>\n      </div>\n      <ng-container *ngIf=\"wizardStep.wizardStepLabelDesc\">\n        <div class=\"text-muted\">\n          <ng-container\n            [ngTemplateOutlet]=\"wizardStep!.wizardStepLabelDesc!.template\"\n            [ngTemplateOutletContext]=\"{\n              $implicit: { currentStep: i + 1, totalSteps: wizardSteps?.length }\n            }\"\n          ></ng-container>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</nav>\n<ng-container *ngFor=\"let wizardStep of wizardSteps; let i = index\">\n  <section\n    [ngClass]=\"selectedIndex === i && 'p-3 bg-white flex-grow-1'\"\n    [ngStyle]=\"\n      selectedIndex !== i && { height: '0', width: '0', overflow: 'hidden' }\n    \"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"wizardStep?.wizardStepContent\"\n    ></ng-container>\n  </section>\n</ng-container>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../lib/src/wizard/wizard.module.ts":
/*!***************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!/home/travis/build/sebgroup/ng-components/lib/src/wizard/wizard.module.ts ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { SebWizardComponent } from './wizard.component';\nimport { SebWizardTitleDirective } from './wizard-title.directive';\nimport { SebWizardStepComponent } from './wizard-step.component';\nimport {\n  SebWizardStepLabelDescDirective,\n  SebWizardStepLabelDirective,\n} from './wizard-step-label.directive';\n\n@NgModule({\n  imports: [CommonModule],\n  declarations: [\n    SebWizardComponent,\n    SebWizardTitleDirective,\n    SebWizardStepComponent,\n    SebWizardStepLabelDirective,\n    SebWizardStepLabelDescDirective,\n  ],\n  exports: [\n    SebWizardComponent,\n    SebWizardTitleDirective,\n    SebWizardStepComponent,\n    SebWizardStepLabelDirective,\n    SebWizardStepLabelDescDirective,\n  ],\n})\nexport class SebWizardModule {}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!******************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/app.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-navigation-bar></app-navigation-bar>-->\n<!--<app-mobile-navigation></app-mobile-navigation>\n<app-side-navigation></app-side-navigation>-->\n<ng-container *ngIf=\"!($isFullscreen | async)\">\n  <app-header></app-header>\n  <app-side-menu></app-side-menu>\n</ng-container>\n<!--<div class=\"container-fluid\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-auto\">\n      <app-menu-navigation></app-menu-navigation>\n    </div>\n    <div class=\"col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>-->\n<div (window:scroll)=\"scroll($event)\" style=\"z-index: 0;\" [ngClass]=\"{'content': !($isFullscreen | async)}\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"mx-auto mt-5 mt-lg-0 pt-3 pt-lg-0\" style=\"max-width: 920px\">\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!($isFullscreen | async)\" class=\"py-3 text-center\">Version: <a href=\"{{'https://github.com/sebgroup/bootstrap/releases/' + versionLink}}\" target=\"_blank\" class=\"mr-3\">{{version}}</a>Build: {{travis_build_number}} </div>\n      </div>\n    </div>\n  </div>\n  <!--<app-sub-header [scrollPosition]=\"scrollPosition\"></app-sub-header>-->\n\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/api-list/api-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/example-page/api-list/api-list.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let section of $content | async\">\n  <h2>{{section.name}}</h2>\n  <p [innerHTML]=\"section.description\"></p>\n  <ng-container *ngIf=\"section.inputs.length > 0\">\n    <h3>Inputs</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.inputs\">\n        <td><code>{{item?.alias || item.name}}</code></td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n              <i>type: <code>{{item?.type}}</code></i>\n            </div>\n            <div *ngIf=\"item?.defaultValue\" class=\"col-12 col-sm-auto\">\n              <i>default value: {{item?.defaultValue}}</i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"section.outputs.length > 0\">\n    <h3>Outputs</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.outputs\">\n        <td>\n          <code>{{item.name}}</code>\n        </td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n              <i>type: <code>{{item?.type}}</code></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"section.properties.length > 0\">\n    <h3>Properties</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.properties\">\n        <td>\n          <code>{{item.name}}</code>\n        </td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div *ngIf=\"item?.type\" class=\"col-12 col-sm-auto\">\n              <i>type: <code>{{item?.type}}</code></i>\n            </div>\n            <div *ngIf=\"item?.default\" class=\"col-12 col-sm-auto\">\n              <i>default value: <code>{{item?.default}}</code></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n  <ng-container *ngIf=\"section.methods.length > 0\">\n    <h3>Methods</h3>\n    <table class=\"table mb-4 mt-3\">\n      <tr *ngFor=\"let item of section.methods\">\n        <td>\n          <code>{{item.name}}</code>\n        </td>\n        <td>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <p [innerHTML]=\"item.description\" class=\"mb-2\"></p>\n            </div>\n            <div class=\"col-12 col-sm-auto\">\n              <i>function: <code>{{item.functionCall}}: {{item?.type}}</code></i>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/example-list/example-list.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/example-page/example-list/example-list.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"$content | async as examples\">\n  <ng-container *ngIf=\"!($showOutlet | async)\">\n    <div *ngFor=\"let example of examples\" class=\"example\">\n      <app-example-template [example]=\"example\"></app-example-template>\n    </div>\n  </ng-container>\n  <div [hidden]=\"!$showOutlet | async\">\n    <router-outlet\n      (activate)=\"onActivate($event)\"\n      (deactivate)=\"onDeactivate($event)\"></router-outlet>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/example-list/example-template/example-template.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/example-page/example-list/example-template/example-template.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-3 align-items-end\">\n  <div class=\"col-12 col-sm pr-sm-3\">\n    <h3>{{example.data.title}}</h3>\n    <p class=\"mb-sm-0\" [innerHTML]=\"example.data.description\"></p>\n  </div>\n  <div class=\"col col-sm-auto pr-1\">\n    <button class=\"btn btn-outline-primary btn-sm w-100\" (click)=\"toggleCodeExample()\" [ngClass]=\"{'active': showCodeExample}\">\n      Code\n      <fa-icon icon=\"code\" class=\"ml-1\"></fa-icon>\n    </button>\n  </div>\n  <div class=\"col col-sm-auto px-1\">\n    <button class=\"btn btn-outline-primary btn-sm w-100\">\n      Stackblitz\n      <svg class=\"ml-1\" width=\"23\" height=\"34\" viewBox=\"0 0 23 34\"\n           xmlns=\"http://www.w3.org/2000/svg\">\n        <g class=\"icon\" fill=\"currentColor\"\n           fill-rule=\"nonzero\" id=\"Symbols\">\n          <polygon\n            id=\"Path\"\n            points=\"0 19.9187087 9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0\">\n          </polygon>\n        </g>\n      </svg>\n    </button>\n  </div>\n  <div class=\"col col-sm-auto pl-1\">\n    <button class=\"btn btn-outline-primary btn-sm w-100\" [routerLink]=\"example.path\">\n      Fullscreen\n      <fa-icon icon=\"expand-wide\" class=\"ml-1\"></fa-icon>\n    </button>\n  </div>\n</div>\n<div *ngIf=\"example.data.sources && showCodeExample\" [@enterAnimation]>\n  <exemplify [sources]=\"example.data.sources\"></exemplify>\n  <hr class=\"mt-0\">\n</div>\n<div class=\"bg-light p-3\">\n  <ng-template appCodeExample></ng-template>\n</div>\n\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/example-page.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/example-page/example-page.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 class=\"text-capitalize mt-3 mt-lg-4\" *ngIf=\"!($isFullscreen | async)\">{{$heading | async}}</h2>\n<section class=\"mt-2 mt-lg-3\" [ngClass]=\"{'card mx-n3 mx-sm-0': !($isFullscreen | async)}\">\n  <div [ngClass]=\"{'card-body': !($isFullscreen | async)}\">\n    <ul class=\"nav nav-tabs my-3\" *ngIf=\"!($isFullscreen | async)\">\n      <li *ngFor=\"let menuItem of $menuItems | async\" class=\"nav-item\">\n        <a class=\"nav-link text-capitalize\" [routerLink]=\"menuItem.path\" [routerLinkActive]=\"'active'\">{{menuItem.path}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"col-12 d-lg-none bg-white\">\n  <div class=\"row justify-content-between justify-content-lg-end h-100\">\n    <div class=\"col col-md-auto d-none d-md-flex brand\">\n      <div class=\"row mobile-header\">\n        <div class=\"col-auto px-0\">\n          <app-logo></app-logo>\n        </div>\n        <div class=\"col-auto align-self-center text-center px-3\" (click)=\"toggleMenu()\">\n          <fa-icon icon=\"bars\" class=\"d-block text-white\" size=\"1x\"></fa-icon>\n          <div>Menu</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col d-md-none px-0\" *ngIf=\"activeTab\">\n      <div class=\"row mobile-header h-100 align-items-center text-center no-gutters\">\n        <div *ngFor=\"let menuItem of $menuItems | async\" class=\"col\" ngClass=\"{{activeTab === menuItem.path ? 'active':''}}\" (click)=\"showMenu(menuItem.path)\">\n          <fa-icon [icon]=\"menuItem.icon\" size=\"1x\" class=\"d-block\"></fa-icon>\n          <span class=\"text-capitalize\">{{menuItem.text}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col align-self-center pl-3 d-none d-sm-flex\">\n      <h3 class=\"mb-0\">ng-components</h3>\n    </div>\n    <div class=\"col d-none d-md-flex bg-white border-bottom sticky-header\" [@scrollAnimation]=\"stickyHeader\">\n      <div class=\"row align-items-center h-100\">\n        <div class=\"col\">\n          <h5 class=\"mb-0\">Section header</h5>\n          <ol class=\"breadcrumb mb-0 pl-0 py-0\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Section header</li>\n          </ol>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"card-menu-control\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/installation/installation.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/installation/installation.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-capitalize mt-3 mt-lg-4\">Installation</h2>\n<section class=\"card mt-2 mt-lg-3 mx-n3 mx-sm-0\">\n  <div class=\"card-body pt-3\">\n    <p>Placeholder for content</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/logo/logo.component.html":
/*!***********************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/logo/logo.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n  <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n  <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n</svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/components/menu/side-menu.component.html":
/*!****************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/components/menu/side-menu.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"side-nav bg-dark\" [ngClass]=\"{'active': $isActive | async}\">\n  <div class=\"row no-gutters mb-3\">\n    <div class=\"col-auto\">\n      <app-logo></app-logo>\n    </div>\n    <div class=\"col align-self-center pl-3\">\n      <h5 class=\"text-white mb-0\">ng-components</h5>\n    </div>\n    <div class=\"col-auto align-self-center px-3 d-lg-none\" (click)=\"toggleMenu()\">\n      <i class=\"fal fa-times fa-lg text-white\"></i>\n      <fa-icon icon=\"times\" class=\"text-white\" size=\"lg\"></fa-icon>\n    </div>\n  </div>\n  <ng-container *ngFor=\"let menuGroup of $menuGroups | async\">\n    <label class=\"text-capitalize small text-muted ml-3\"><fa-icon [icon]=\"menuGroup.icon\" class=\"mr-2\"></fa-icon>{{menuGroup.text}}</label>\n    <ul class=\"nav flex-column mb-3\">\n      <li *ngFor=\"let menuItem of menuGroup.children\" class=\"nav-item\">\n        <a class=\"text-capitalize nav-link\" [routerLink]=\"menuItem.path\" [routerLinkActive]=\"'active'\">{{menuItem.text}}</a>\n      </li>\n    </ul>\n  </ng-container>\n</aside>\n\n"

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

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"wizardFormGroup\" class=\"h-100\">\n  <seb-wizard stepWise #wizard>\n    <ng-template sebWizardTitle>Wizard Title</ng-template>\n    <seb-wizard-step [stepControl]=\"wizardFormGroup.get('step1')\">\n      <ng-template sebWizardStepLabel\n        >Step 1\n        <ng-container *sebWizardStepLabelDesc=\"let wizard\">\n          Displaying {{ wizard.currentStep }} of {{ wizard.totalSteps }}\n        </ng-container>\n      </ng-template>\n      <div class=\"d-flex flex-column h-100\" formGroupName=\"step1\">\n        Headline\n        <h2>Content of step 1</h2>\n        <div class=\"form-row\">\n          <div class=\"col-auto\">\n            <label for=\"name\">Name</label>\n            <input\n              sebAutofocus\n              class=\"form-control col-auto\"\n              id=\"name\"\n              placeholder=\"Fill out your name\"\n              type=\"text\"\n              formControlName=\"name\"\n              [class.is-invalid]=\"wizardFormGroup.get('step1.name').invalid\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"wizardFormGroup.get('step1.name').invalid\"\n            >\n              Please provide a name.\n            </div>\n          </div>\n        </div>\n        <div class=\"mt-auto d-flex flex-row\">\n          <button\n            seb-btn\n            (click)=\"wizard.next()\"\n            class=\"ml-auto\"\n            [disabled]=\"wizardFormGroup.get('step1').invalid\"\n          >\n            Next\n          </button>\n        </div>\n      </div>\n    </seb-wizard-step>\n    <seb-wizard-step [stepControl]=\"wizardFormGroup.get('step2')\">\n      <ng-template sebWizardStepLabel\n        >Step 2\n        <ng-container *sebWizardStepLabelDesc=\"let wizard\">\n          Displaying {{ wizard.currentStep }} of {{ wizard.totalSteps }}\n        </ng-container>\n      </ng-template>\n      <div class=\"d-flex flex-column h-100\" formGroupName=\"step2\">\n        Headline\n        <h2>Content of step 2</h2>\n        <div class=\"form-row\">\n          <div class=\"col-auto\">\n            <label for=\"address\">Address</label>\n            <input\n              class=\"form-control col-auto\"\n              id=\"address\"\n              placeholder=\"Fill out your address\"\n              type=\"text\"\n              formControlName=\"address\"\n              [class.is-invalid]=\"wizardFormGroup.get('step2.address').invalid\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"wizardFormGroup.get('step2.address').invalid\"\n            >\n              Please provide a address.\n            </div>\n          </div>\n        </div>\n        <div class=\"mt-auto d-flex flex-row\">\n          <button seb-btn outline (click)=\"wizard.previous()\">Previous</button>\n          <button\n            seb-btn\n            (click)=\"wizard.next()\"\n            class=\"ml-auto\"\n            [disabled]=\"wizardFormGroup.get('step2').invalid\"\n          >\n            Next\n          </button>\n        </div>\n      </div>\n    </seb-wizard-step>\n    <seb-wizard-step [stepControl]=\"wizardFormGroup.get('step3')\">\n      <ng-template sebWizardStepLabel\n        >Step 3\n        <ng-container *sebWizardStepLabelDesc=\"let wizard\">\n          Displaying {{ wizard.currentStep }} of {{ wizard.totalSteps }}\n        </ng-container>\n      </ng-template>\n      <div class=\"d-flex flex-column h-100\" formGroupName=\"step3\">\n        Headline\n        <h2>Content of step 3</h2>\n        <div class=\"form-row\">\n          <div class=\"col-auto\">\n            <label for=\"age\">Age</label>\n            <input\n              class=\"form-control col-auto\"\n              id=\"age\"\n              placeholder=\"Fill out your age\"\n              type=\"number\"\n              formControlName=\"age\"\n              [class.is-invalid]=\"wizardFormGroup.get('step3.age').invalid\"\n            />\n            <div\n              class=\"invalid-feedback\"\n              *ngIf=\"wizardFormGroup.get('step3.age').invalid\"\n            >\n              Please provide your age.\n            </div>\n          </div>\n        </div>\n        <div class=\"mt-auto d-flex flex-row\">\n          <button seb-btn outline (click)=\"wizard.previous()\">Previous</button>\n          <button\n            seb-btn\n            (click)=\"wizard.next()\"\n            class=\"ml-auto\"\n            [disabled]=\"wizardFormGroup.get('step3').invalid\"\n          >\n            Next\n          </button>\n        </div>\n      </div>\n    </seb-wizard-step>\n    <seb-wizard-step [stepControl]=\"wizardFormGroup.get('step4')\">\n      <ng-template sebWizardStepLabel\n        >Step 4\n        <ng-container *sebWizardStepLabelDesc=\"let wizard\">\n          Displaying {{ wizard.currentStep }} of {{ wizard.totalSteps }}\n        </ng-container>\n      </ng-template>\n      <div class=\"d-flex flex-column h-100\" formGroupName=\"step4\">\n        Headline\n        <h2>Content of step 4</h2>\n        <div class=\"form-row\">\n          <div class=\"col-auto\">\n            <div class=\"custom-control custom-checkbox\">\n              <input\n                class=\"custom-control-input\"\n                formControlName=\"confirm\"\n                id=\"confirm\"\n                type=\"checkbox\"\n                [class.is-invalid]=\"\n                  wizardFormGroup.get('step4.confirm').invalid\n                \"\n              />\n              <label class=\"custom-control-label\" for=\"confirm\"\n                >Agree to terms and conditions</label\n              >\n              <div\n                class=\"invalid-feedback\"\n                *ngIf=\"wizardFormGroup.get('step4.confirm').invalid\"\n              >\n                You must agree.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"mt-auto d-flex flex-row\">\n          <button seb-btn outline (click)=\"wizard.previous()\" size=\"sm\">\n            Previous\n          </button>\n          <button\n            seb-btn\n            (click)=\"wizard.reset()\"\n            class=\"ml-auto\"\n            [disabled]=\"wizardFormGroup.get('step4').invalid\"\n          >\n            Reset\n          </button>\n        </div>\n      </div>\n    </seb-wizard-step>\n  </seb-wizard>\n</form>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { FormControl, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  templateUrl: 'wizard-forms.component.html',\n})\nexport class WizardFormsComponent implements OnInit {\n  public wizardFormGroup: FormGroup;\n\n  constructor() {\n    this.wizardFormGroup = new FormGroup({\n      step1: new FormGroup({\n        name: new FormControl('', Validators.required),\n      }),\n      step2: new FormGroup({\n        address: new FormControl('', Validators.required),\n      }),\n      step3: new FormGroup({\n        age: new FormControl('', Validators.required),\n      }),\n      step4: new FormGroup({\n        confirm: new FormControl('', Validators.required),\n      }),\n    });\n  }\n\n  ngOnInit() {}\n}\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard/wizard.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/wizard/examples/wizard/wizard.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Launch wizard (forms)</h3>\n<button seb-btn outline (click)=\"launchWizardForms()\" size=\"sm\">Launch</button>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard/wizard.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/raw-loader!./src/app/examples/components/wizard/examples/wizard/wizard.component.ts ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { SebModalService } from '../../../../../../../../../lib/src/modal';\nimport { WizardFormsComponent } from '../wizard-forms/wizard-forms.component';\n\n@Component({\n  templateUrl: 'wizard.component.html',\n})\nexport class WizardComponent {\n  constructor(private modal: SebModalService) {}\n\n  public launchWizardForms() {\n    this.modal.open(WizardFormsComponent, { type: 'fullscreen' });\n  }\n}\n"

/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!*********************************************************************************!*\
  !*** /home/travis/build/sebgroup/ng-components/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _examples_components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/components/buttons/buttons.module */ "./src/app/examples/components/buttons/buttons.module.ts");
/* harmony import */ var _examples_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/components/modal/modal.module */ "./src/app/examples/components/modal/modal.module.ts");
/* harmony import */ var _examples_components_wizard_wizard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/components/wizard/wizard.module */ "./src/app/examples/components/wizard/wizard.module.ts");
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/installation/installation.component */ "./src/app/components/installation/installation.component.ts");







const routes = [
    {
        path: 'get-started',
        data: {
            icon: 'home',
        },
        children: [
            {
                path: '',
                redirectTo: 'install',
                pathMatch: 'full',
            },
            {
                path: 'installation',
                component: _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_6__["InstallationComponent"],
            },
        ],
    },
    {
        path: 'components',
        data: {
            icon: 'cubes',
        },
        children: [
            {
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full',
            },
            {
                path: 'buttons',
                children: _examples_components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ROUTES"],
            },
            {
                path: 'modal',
                children: _examples_components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ROUTES"],
            },
            {
                path: 'wizard',
                children: _examples_components_wizard_wizard_module__WEBPACK_IMPORTED_MODULE_5__["ROUTES"],
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n@media (min-width: 992px) {\n  .content {\n    margin-left: 16rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC1jb3JlL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvdmFyaWFibGVzLnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBOzs7Ozs7RUFBQTtBQ0hJO0VDdERGO0lBQ0Usa0JDUG9CO0VDVXRCO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi92YXJpYWJsZXNcIjtcbkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3Mvc3R5bGVzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL21peGlucy9taXhpbnMnO1xuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogJG5nc2ViLWRvY3MtbWVudS13aWR0aDtcbiAgfVxufVxuXG4iLCIkbmdzZWItZG9jcy1tZW51LXdpZHRoOiAxNnJlbTtcbiIsIi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cmVtO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.service */ "./src/app/components/menu/menu.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _components_example_page_example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/example-page/example-list/example-template/example.query */ "./src/app/components/example-page/example-list/example-template/example.query.ts");








let AppComponent = class AppComponent {
    constructor(faIconService, router, menuService, exampleQuery) {
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
    ngOnInit() {
        const menuItems = this.router.config.reduce((prev, current) => {
            const menuGroup = {
                text: current.path,
                icon: current.data.icon,
                children: current.children
                    .filter(child => child.path.length > 1)
                    .map(child => {
                    return {
                        text: child.path,
                        path: current.path + '/' + child.path
                    };
                })
            };
            return [...prev, Object.assign({}, menuGroup)];
        }, []);
        this.menuService.updateMenuItems(menuItems);
        this.$isFullscreen = this.exampleQuery.$isFullscreen
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
    }
    scroll($event) {
        this.scrollPosition = $event.target.scrollingElement.scrollTop;
    }
};
AppComponent.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: _components_example_page_example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_7__["ExampleQuery"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _components_menu_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"],
        _components_example_page_example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_7__["ExampleQuery"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu/side-menu.component */ "./src/app/components/menu/side-menu.component.ts");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
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
/* harmony import */ var angular_exemplify__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-exemplify */ "../../node_modules/angular-exemplify/fesm2015/angular-exemplify.js");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons/faExpandWide */ "../../node_modules/@fortawesome/pro-light-svg-icons/faExpandWide.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_installation_installation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/installation/installation.component */ "./src/app/components/installation/installation.component.ts");

























let AppModule = class AppModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faList__WEBPACK_IMPORTED_MODULE_13__["faList"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_12__["faTimes"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faBars__WEBPACK_IMPORTED_MODULE_15__["faBars"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faCode__WEBPACK_IMPORTED_MODULE_18__["faCode"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faHome__WEBPACK_IMPORTED_MODULE_19__["faHome"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faCubes__WEBPACK_IMPORTED_MODULE_20__["faCubes"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_pro_light_svg_icons_faExpandWide__WEBPACK_IMPORTED_MODULE_23__["faExpandWide"]);
    }
};
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



/***/ }),

/***/ "./src/app/components/example-page/api-list/api-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/example-page/api-list/api-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.table tr td:first-child {\n  width: 25%;\n}\nh2 ~ h2 {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9wcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtcGFnZS9hcGktbGlzdC9hcGktbGlzdC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvZXhhbXBsZS1wYWdlL2FwaS1saXN0L2FwaS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTs7Ozs7O0VBQUE7QUM1REE7RUFDRSxVQUFBO0FDS0Y7QURGQTtFQUNFLGdCQUFBO0FDS0YiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXBhZ2UvYXBpLWxpc3QvYXBpLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3Mvc3R5bGVzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL21peGlucy9taXhpbnMnO1xuLnRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuaDIgfiBoMiB7XG4gIG1hcmdpbi10b3A6IG1hcF9nZXQoJHNwYWNlcnMsIDUpO1xufVxuIiwiLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgdHJhbnNpdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oJ3NsaWRlSW5VcCcpO1xuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oKCdzbGlkZUluVXAnLCdmYWRlSW4nKSlcbiAqL1xuLnRhYmxlIHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuaDIgfiBoMiB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var typescript_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typescript-parser */ "../../node_modules/typescript-parser/index.js");
/* harmony import */ var typescript_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typescript_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ "../../node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
var ApiListComponent_1;







let ApiListComponent = ApiListComponent_1 = class ApiListComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        const sources = this.route.routeConfig.data.sources;
        const obs = sources.reduce((previous, current) => {
            return [...previous, this.parseSourceFile(current)];
        }, []);
        this.$content = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...obs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["reduce"])((previous, current) => [...previous, ...current], []));
    }
    parseSourceFile(source) {
        const description = ApiListComponent_1.extractDescription(source);
        const inputs = ApiListComponent_1.extractInputs(source);
        const outputs = ApiListComponent_1.extractOutputs(source);
        const properties = ApiListComponent_1.extractProperties(source);
        const methods = ApiListComponent_1.extractMethods(source);
        const tsParser = new typescript_parser__WEBPACK_IMPORTED_MODULE_4__["TypescriptParser"]();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(tsParser.parseSource(source)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => this.parse(res, description, inputs, outputs, properties, methods)));
    }
    parse(file, description, inputs, outputs, properties, methods) {
        return file.declarations
            .filter(declaration => declaration.constructor.name === 'ClassDeclaration')
            .reduce((previous, current) => {
            const declaration = current;
            const section = {
                description: description
                    ? ApiListComponent_1.parseComment(description.groups.comment)
                    : 'n/a',
                name: declaration.name,
                // @ts-ignore
                inputs: this.parseInputs(declaration.accessors, inputs),
                // @ts-ignore
                outputs: this.parseOutputs(declaration.properties, outputs),
                // @ts-ignore
                properties: ApiListComponent_1.parseProperties(
                // @ts-ignore
                declaration.properties, properties),
                // @ts-ignore
                methods: ApiListComponent_1.parseMethods(declaration.methods, methods),
            };
            const isEmpty = !Object.entries(section)
                .filter(key => Array.isArray(key[1]))
                .some(key => key[1].length > 0);
            return isEmpty ? [...previous] : [...previous, section];
        }, []);
    }
    static extractInputs(sourceCode) {
        const regex = /(?<comment>\/\*\*(?:[\sA-Za-z\*\`\.\,\(\)\/\?\=\:\[\]\&\{\}]*)\*\/)?(?:[\r\n\t\s]*)(?<decorator>\@Input)\((?:'|"?)(?<alias>.*?)(?:'|")?(?:\))(?:[\W]+)(?<accessor>get|set|){1}(?:\W)?(?<name>[^\(]+)/g;
        let input = regex.exec(sourceCode);
        let inputs = input ? { [input.groups.name]: input.groups } : {};
        while (input !== null) {
            input = regex.exec(sourceCode);
            if (input) {
                inputs = Object.assign({}, inputs, { [input.groups.name]: input.groups });
            }
        }
        return inputs;
    }
    static extractOutputs(sourceCode) {
        const regex = /(?:\/\*\*(?<comment>[\s\S][^@]+)\*\/[^@]+|)(?<decorator>\@Output)\((?:'|"?)(?<alias>.*?)(?:'|")?(?:\))(?:\W)?(?<name>[^\:]+)/g;
        let output = regex.exec(sourceCode);
        let outputs = output ? { [output.groups.name]: output.groups } : {};
        while (output !== null) {
            output = regex.exec(sourceCode);
            if (output) {
                outputs = Object.assign({}, outputs, { [output.groups.name]: output.groups });
            }
        }
        return outputs;
    }
    static extractProperties(sourceCode) {
        const regex = /(?<name>[\w\$]+)\:\s(?<type>.[^\;\s]*)(?:\;\s| \=\s)[\'\"]?(?<default>[\w][^\;\/\'\"]*)?[\'\"]?(?:\;?\s?\/\/\s?(?<comment>.*))?/g;
        let property = regex.exec(sourceCode);
        let properties = property
            ? { [property.groups.name]: property.groups }
            : {};
        while (property !== null) {
            property = regex.exec(sourceCode);
            if (property) {
                properties = Object.assign({}, properties, { [property.groups.name]: property.groups });
            }
        }
        return properties;
    }
    static extractMethods(sourceCode) {
        const regex = /(?:\/\*\*(?<comment>[\s\S][^\/]*)\*\/[^\w\@]+|)[^\w\]](?!constructor|Input|Component)(?<name>[a-z]*)\((?<parameters>[^\)]*)\)\:?\s?(?<returns>[\w\<\>]*)/g;
        let method = regex.exec(sourceCode);
        let methods = method ? { [method.groups.name]: method.groups } : {};
        while (method !== null) {
            method = regex.exec(sourceCode);
            if (method) {
                methods = Object.assign({}, methods, { [method.groups.name]: method.groups });
            }
        }
        return methods;
    }
    static extractDescription(sourceCode) {
        const regex = /(?:\/\*\*(?<comment>[\s\S][^\/]*)\*\/[^\w])/;
        console.log(sourceCode, regex.exec(sourceCode));
        return regex.exec(sourceCode);
    }
    parseInputs(accessors, inputs) {
        return accessors
            .sort(ApiListComponent_1.sortInputs)
            .reduce((previous, current) => {
            const input = previous.find(i => i.name === current.name);
            if (input) {
                input.type = current.type;
                return [...previous];
            }
            return [
                ...previous,
                Object.assign({}, current, { alias: inputs[current.name].alias, description: ApiListComponent_1.parseComment(inputs[current.name].comment) }),
            ];
        }, []);
    }
    parseOutputs(properties, outputs) {
        return properties
            .filter(property => property.type && property.type.indexOf('EventEmitter') !== -1)
            .map(property => {
            return Object.assign({}, property, { description: ApiListComponent_1.parseComment(outputs[property.name].comment) });
        });
    }
    static parseProperties(properties, extractedProperties) {
        return properties
            .filter(property => property.type &&
            property.type.indexOf('EventEmitter') === -1 && // remove properties of type event emitter (Outputs)
            property.name.substring(0, 1) !== '_' // remove private properties
        )
            .map(property => {
            return extractedProperties[property.name]
                ? Object.assign({}, property, { default: extractedProperties[property.name].default, type: extractedProperties[property.name].type, description: ApiListComponent_1.parseComment(extractedProperties[property.name].comment) }) : Object.assign({}, property);
        });
    }
    static parseMethods(methods, extractedMethods) {
        return methods
            .filter(property => property.name.substring(0, 2) !== 'ng' && // remove angular lifecycle methods
            property.name.substring(0, 1) !== '_') // remove private methods
            .map(method => {
            return Object.assign({}, method, { functionCall: method.name +
                    '(' +
                    (extractedMethods[method.name]
                        ? extractedMethods[method.name].parameters
                        : method.parameters
                            .map(param => param.name + ': ' + param.type)
                            .toString()
                            .replace(/,/g, ', ')) +
                    ')', description: extractedMethods[method.name]
                    ? ApiListComponent_1.parseComment(extractedMethods[method.name].comment)
                    : 'n/a' });
        });
    }
    static parseComment(comment) {
        return comment
            ? marked__WEBPACK_IMPORTED_MODULE_5___default()(comment.replace(/\*\/+|\/\*+|\*\s+|[\t\r\n]/g, ''))
            : 'n/a';
    }
    static sortInputs(a, b) {
        const isSet = a.constructor.name === 'SetterDeclaration';
        return isSet ? -1 : 0;
    }
};
ApiListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ApiListComponent = ApiListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-api-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./api-list.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/api-list/api-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./api-list.component.scss */ "./src/app/components/example-page/api-list/api-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ApiListComponent);



/***/ }),

/***/ "./src/app/components/example-page/example-list/example-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/example-page/example-list/example-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.example + .example {\n  border-top: solid #dedede 1px;\n  margin-top: 1rem;\n  padding-top: 1rem;\n}\n/* use same style for buttons in tabs as normal links (anchor tags)*/\n::ng-deep button.nav-link {\n  font-weight: 500;\n  outline: none;\n  background: none;\n}\n::ng-deep button.nav-link:not(.active) {\n  color: #007AC7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9wcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtcGFnZS9leGFtcGxlLWxpc3QvZXhhbXBsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9leGFtcGxlLXBhZ2UvZXhhbXBsZS1saXN0L2V4YW1wbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTs7Ozs7O0VBQUE7QUMzREE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJRjtBRERBLG9FQUFBO0FBQ0E7RUFDRSxnQkU0TTRCO0VGM001QixhQUFBO0VBQ0EsZ0JBQUE7QUNJRjtBREhFO0VBQ0UsY0VvQ29CO0FEL0J4QiIsImZpbGUiOiJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2V4YW1wbGUtcGFnZS9leGFtcGxlLWxpc3QvZXhhbXBsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3N0eWxlcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvbWl4aW5zJztcbi5leGFtcGxlICsgLmV4YW1wbGUge1xuICBib3JkZXItdG9wOiBzb2xpZCAkYm9yZGVyLWNvbG9yICRib3JkZXItd2lkdGg7XG4gIG1hcmdpbi10b3A6IG1hcF9nZXQoJHNwYWNlcnMsMyk7XG4gIHBhZGRpbmctdG9wOiBtYXBfZ2V0KCRzcGFjZXJzLDMpO1xufVxuXG4vKiB1c2Ugc2FtZSBzdHlsZSBmb3IgYnV0dG9ucyBpbiB0YWJzIGFzIG5vcm1hbCBsaW5rcyAoYW5jaG9yIHRhZ3MpKi9cbjo6bmctZGVlcCBidXR0b24ubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogJGxpbmstd2VpZ2h0O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAmOm5vdCguYWN0aXZlKSB7XG4gICAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICB9XG59XG4iLCIvKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG4uZXhhbXBsZSArIC5leGFtcGxlIHtcbiAgYm9yZGVyLXRvcDogc29saWQgI2RlZGVkZSAxcHg7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4vKiB1c2Ugc2FtZSBzdHlsZSBmb3IgYnV0dG9ucyBpbiB0YWJzIGFzIG5vcm1hbCBsaW5rcyAoYW5jaG9yIHRhZ3MpKi9cbjo6bmctZGVlcCBidXR0b24ubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuOjpuZy1kZWVwIGJ1dHRvbi5uYXYtbGluazpub3QoLmFjdGl2ZSkge1xuICBjb2xvcjogIzAwN0FDNztcbn0iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjhmOCAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZTllOSAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZGVkZSAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlY2VjZSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYWRhZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzg2ODY4NiAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NDk0OSAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0MzQzNCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjEyMSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICAgICksXG4gICAgJGdyYXlzXG4pO1xuXG5cbiRyZWQ6ICAgICAgICAgICAgICAgICAgICNGMDM1Mjk7XG4kcmVkLWRhcms6ICAgICAgICAgICAgICAjRDgxQTFBOyAvLyBTRUIgc3BlY2lmaWNcbiRyZWQtZGFya2VyOiAgICAgICAgICAgICNCQjAwMEM7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdy1kYXJrZXI6ICAgICAgICAgI0Y4QTAwMDsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcms6ICAgICAgICAgICAjRkZCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3c6ICAgICAgICAgICAgICAgICNGRkM1MDA7XG4kZ3JlZW46ICAgICAgICAgICAgICAgICAjNjBjZDE4O1xuJGdyZWVuLWRhcms6ICAgICAgICAgICAgIzQ1QjQwMDsgLy8gU0VCIHNwZWNpZmljXG4kZ3JlZW4tZGFya2VyOiAgICAgICAgICAjMzc5RDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlOiAgICAgICAgICAgICAgICAgICM0MUIwRUU7XG4kYmx1ZS1kYXJrOiAgICAgICAgICAgICAjMDA5MkUxOyAvLyBTRUIgc3BlY2lmaWNcbiRibHVlLWRhcmtlcjogICAgICAgICAgICMwMDdBQzc7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZTogICAgICAgICAgICAgICAgIzY3M0FCNjtcbiRwdXJwbGUtZGFyazogICAgICAgICAgICM0RjJDOTk7IC8vIFNFQiBzcGVjaWZpY1xuJHB1cnBsZS1kYXJrZXI6ICAgICAgICAgIzNGMjU4NzsgLy8gU0VCIHNwZWNpZmljXG5cblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4tZGFya2VyICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRwdXJwbGUgIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkLWRhcmsgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICAgKSxcbiAgICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyB0aGVtZSBpY29ucyAvLyBTRUIgc3BlY2lmaWNcbiRpY29uLWZpbGwtY29sb3I6ICRibGFjaztcbiR0aGVtZS1pY29uczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWljb25zOiBtYXAtbWVyZ2UoXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCI6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIGQ9J000MzUuODQ4IDgzLjQ2NkwxNzIuODA0IDM0Ni41MWwtOTYuNjUyLTk2LjY1MmMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwbC0yOC4yODQgMjguMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTMzLjQyMSAxMzMuNDIxYzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0yOC4yODQtMjguMjg0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mb1wiOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDQ4IDgwdjM1MmMwIDI2LjUxLTIxLjQ5IDQ4LTQ4IDQ4SDQ4Yy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4VjgwYzAtMjYuNTEgMjEuNDktNDggNDgtNDhoMzUyYzI2LjUxIDAgNDggMjEuNDkgNDggNDh6bS00OCAzNDZWODZhNiA2IDAgMCAwLTYtNkg1NGE2IDYgMCAwIDAtNiA2djM0MGE2IDYgMCAwIDAgNiA2aDM0MGE2IDYgMCAwIDAgNi02ek0yMjQgMTE4YzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndhcm5pbmdcIjogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0OC43NDcgMjA0LjcwNWw2LjU4OCAxMTJjLjM3MyA2LjM0MyA1LjYyNiAxMS4yOTUgMTEuOTc5IDExLjI5NWg0MS4zN2ExMiAxMiAwIDAgMCAxMS45NzktMTEuMjk1bDYuNTg4LTExMmMuNDA1LTYuODkzLTUuMDc1LTEyLjcwNS0xMS45NzktMTIuNzA1aC01NC41NDdjLTYuOTAzIDAtMTIuMzgzIDUuODEyLTExLjk3OCAxMi43MDV6TTMzMCAzODRjMCAyMy4xOTYtMTguODA0IDQyLTQyIDQycy00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyIDQyIDE4LjgwNCA0MiA0MnptLS40MjMtMzYwLjAxNWMtMTguNDMzLTMxLjk1MS02NC42ODctMzIuMDA5LTgzLjE1NCAwTDYuNDc3IDQ0MC4wMTNDLTExLjk0NSA0NzEuOTQ2IDExLjExOCA1MTIgNDguMDU0IDUxMkg1MjcuOTRjMzYuODY1IDAgNjAuMDM1LTM5Ljk5MyA0MS41NzctNzEuOTg3TDMyOS41NzcgMjMuOTg1ek01My4xOTEgNDU1LjAwMkwyODIuODAzIDU3LjAwOGMyLjMwOS00LjAwMiA4LjA4NS00LjAwMiAxMC4zOTQgMGwyMjkuNjEyIDM5Ny45OTNjMi4zMDggNC0uNTc5IDguOTk4LTUuMTk3IDguOTk4SDU4LjM4OGMtNC42MTcuMDAxLTcuNTA0LTQuOTk3LTUuMTk3LTguOTk3eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYW5nZXJcIjogICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J00yNDguNzQ3IDIwNC43MDVsNi41ODggMTEyYy4zNzMgNi4zNDMgNS42MjYgMTEuMjk1IDExLjk3OSAxMS4yOTVoNDEuMzdhMTIgMTIgMCAwIDAgMTEuOTc5LTExLjI5NWw2LjU4OC0xMTJjLjQwNS02Ljg5My01LjA3NS0xMi43MDUtMTEuOTc5LTEyLjcwNWgtNTQuNTQ3Yy02LjkwMyAwLTEyLjM4MyA1LjgxMi0xMS45NzggMTIuNzA1ek0zMzAgMzg0YzAgMjMuMTk2LTE4LjgwNCA0Mi00MiA0MnMtNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MiA0MiAxOC44MDQgNDIgNDJ6bS0uNDIzLTM2MC4wMTVjLTE4LjQzMy0zMS45NTEtNjQuNjg3LTMyLjAwOS04My4xNTQgMEw2LjQ3NyA0NDAuMDEzQy0xMS45NDUgNDcxLjk0NiAxMS4xMTggNTEyIDQ4LjA1NCA1MTJINTI3Ljk0YzM2Ljg2NSAwIDYwLjAzNS0zOS45OTMgNDEuNTc3LTcxLjk4N0wzMjkuNTc3IDIzLjk4NXpNNTMuMTkxIDQ1NS4wMDJMMjgyLjgwMyA1Ny4wMDhjMi4zMDktNC4wMDIgOC4wODUtNC4wMDIgMTAuMzk0IDBsMjI5LjYxMiAzOTcuOTkzYzIuMzA4IDQtLjU3OSA4Ljk5OC01LjE5NyA4Ljk5OEg1OC4zODhjLTQuNjE3LjAwMS03LjUwNC00Ljk5Ny01LjE5Ny04Ljk5N3onIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgJHRoZW1lLWljb25zXG4pO1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVyczogICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYnV0dG9uLXZhcmlhdGlvbnM6ICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZy1ib290c3RyYXA6ICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWFuZ3VsYXItZ2VuZXJpYy10YWJsZTogIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmd4LXRvYXN0cjogICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMDogMCxcbiAgICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgICAgMzogJHNwYWNlcixcbiAgICAgIDQ6ICgkc3BhY2VyICogMiksXG4gICAgICA1OiAoJHNwYWNlciAqIDMpXG4gICAgKSxcbiAgICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAyNTogMjUlLFxuICAgICAgNTA6IDUwJSxcbiAgICAgIDc1OiA3NSUsXG4gICAgICAxMDA6IDEwMCUsXG4gICAgICBhdXRvOiBhdXRvXG4gICAgKSxcbiAgICAkc2l6ZXNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuXG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcblxuLy8gR3JpZCBjb250YWluZXJzXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDMpKjIgIWRlZmF1bHQ7XG5cbi8vIFNFQiBzcGVjaWZpYyBvdmVycmlkZSB3aGVuIHJlc3BvbnNpdmUgZ3V0dGVycyBhcmUgZW5hYmxlZFxuQGlmICgkZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVycykge1xuICAkZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDIpO1xufVxuXG4vLyBTRUIgc3BlY2lmaWNcbiRyZXNwb25zaXZlLWd1dHRlcnM6IChcbiAgc206bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgbGc6bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgeGw6bWFwLWdldCgkc3BhY2VycywgMykqMlxuKSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbjouNHMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbjogICAgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uICFkZWZhdWx0O1xuXG5cblxuLy8gRm9udHNcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kc2ViLWZvbnQtcGF0aDogICAgICAgICAgICAgICBcIn5Ac2ViZ3JvdXAvZm9udHMvZm9udHNcIiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogICAgICBcIlNFQlNhbnNTZXJpZlwiLCBcIlRyZWJ1Y2hldCBNU1wiLCBcIlRyZWJ1Y2hldFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgICBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhzOiAgICgkZm9udC1zaXplLWJhc2UgKiAuNjg3NSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbiRmb250LXdlaWdodC1tZWRpdW06ICAgICAgICAgIDUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMyAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAwLjg3NSAhZGVmYXVsdDtcblxuJGgxLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGgxLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDItc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgzLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRoZWFkaW5ncy1mb250LXdlaWdodDogICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICAjMjIyICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICRibHVlLWRhcmtlciAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaW5rLXdlaWdodDogICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcjogICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3I6ICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZD0nTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODB2MzUyYzAgMjYuNTEgMjEuNDkgNDggNDggNDhoMzUyYzI2LjUxIDAgNDgtMjEuNDkgNDgtNDhWODBjMC0yNi41MS0yMS40OS00OC00OC00OHptLTYgNDAwSDU0YTYgNiAwIDAgMS02LTZWODZhNiA2IDAgMCAxIDYtNmgzNDBhNiA2IDAgMCAxIDYgNnYzNDBhNiA2IDAgMCAxLTYgNnptLTU0LTMwNGwtMTM2IC4xNDVjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJWMTY3LjljMCA2LjcyMiA1LjUyMiAxMi4xMzMgMTIuMjQzIDExLjk5OGw1OC4wMDEtMi4xNDFMOTkuNTE1IDM0MC40ODVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwyMy4wMyAyMy4wMjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3IDBsMTYyLjcyOS0xNjIuNzI5LTIuMTQxIDU4LjAwMWMtLjEzNiA2LjcyMSA1LjI3NSAxMi4yNDIgMTEuOTk4IDEyLjI0MmgyNy43NTVjNi42MjggMCAxMi01LjM3MyAxMi0xMkwzNTIgMTQwYzAtNi42MjctNS4zNzMtMTItMTItMTJ6JyBmaWxsPScjeyRleHRlcm5hbC1saW5rLWljb24tY29sb3J9JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWhvdmVyLWljb246ICAgICAgICBzdHItcmVwbGFjZSgkZXh0ZXJuYWwtbGluay1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSk7XG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgICAgICAgeHM6IDAsXG4gICAgICAgIHNtOiA1NzZweCxcbiAgICAgICAgbWQ6IDc2OHB4LFxuICAgICAgICBsZzogOTkycHgsXG4gICAgICAgIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjYyNXJlbSAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuMjc1cmVtIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kdGFibGUtaG92ZXItYmc6ICAgICAgICAgICAgICByZ2JhKCRibHVlLCAuMDc1KSAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuXG4kdGFibGUtZXhwYW5kLWJnOiAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbjogICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3onIGZpbGw9JyN7JGJsdWV9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbi1hY3RpdmU6ICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkZHJvcGRvd24taWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGJsdWUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJHdoaXRlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGJsdWU7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICAxNnB4IDE2cHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgNHB4ICFkZWZhdWx0O1xuXG5cbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICBzdHItcmVwbGFjZShtYXAtZ2V0KCR0aGVtZS1pY29ucywgJ3N1Y2Nlc3MnKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGljb24tZmlsbC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKG1hcC1nZXQoJHRoZW1lLWljb25zLCAnZGFuZ2VyJyksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRpY29uLWZpbGwtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bi1iYWNrZHJvcDogICAgICAgICAgOTkwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cbi8vIE5hdnNcbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kbmF2LXRhYnMtbGluay1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gTmF2YmFyXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAuNDM3NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtZm9udC13ZWlnaHQ6ICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cblxuLy8gSnVtYm90cm9uXG5cbi8vIENhcmRzXG5cbi8vIFRvb2x0aXBzXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcblxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgMCAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1hc2lkZS13aWR0aDogICAgICAgICAgICAgICAgIDMyMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRtb2RhbC1hc2lkZS1sZy13aWR0aDogICAgICAgICAgICAgIG1hcF9nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpOyAvLyA4MDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vNTAwXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGFsZXJ0LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGFsZXJ0LWljb24taGVpZ2h0OiAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1wYWRkaW5nOiAkYWxlcnQtaWNvbi13aWR0aCArICgkYWxlcnQtcGFkZGluZy14KjIpOyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gVG9hc3Qgbm90aWZpY2F0aW9uc1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGFsZXJ0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LXBhZGRpbmc6ICAgICAgICAgICAgICAgICAgICAgJGFsZXJ0LXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3Qtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAwIDAgLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gTGlzdCBncm91cFxuJGxpc3QtZ3JvdXAtYnVsbGV0LWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMSAxJyUzRSUzQ3JlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgc3R5bGU9J2ZpbGw6I3skZGFya307JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWNoZWNrLWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIGQ9J000MzUuODQ4IDgzLjQ2NkwxNzIuODA0IDM0Ni41MWwtOTYuNjUyLTk2LjY1MmMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwbC0yOC4yODQgMjguMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTMzLjQyMSAxMzMuNDIxYzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0yOC4yODQtMjguMjg0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGdyZWVufScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItYmc6ICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBGaWd1cmVzXG5cbi8vIEJyZWFkY3J1bWJzXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yLWxpZ2h0OiAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yLWxpZ2h0OiAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00yNC43MDcgMzguMTAxTDQuOTA4IDU3Ljg5OWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDE4NS42MDcgMjU2IDQuOTA4IDQzNy4xM2MtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDI0LjcwNyA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjA5LjQxNC0yMDkuNDE0YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw0MS42NzggMzguMTAxYy00LjY4Ny00LjY4Ny0xMi4yODUtNC42ODctMTYuOTcxIDB6JyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItYmFjay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTIzMS4yOTMgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw3MC4zOTMgMjU2IDI1MS4wOTIgNzQuODdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIzMS4yOTMgMzguMWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDQuOTA4IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyMTQuMzIyIDQ3My45YzQuNjg3IDQuNjg2IDEyLjI4NSA0LjY4NiAxNi45NzEtLjAwMXonIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLXdpZHRoOiAgICAgICAgICAxNXB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItaGVpZ2h0OiAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQ2xvc2VcblxuLy8gQ29kZVxuXG4vLyBQcmludGluZ1xuXG5AaW1wb3J0IFwiYm9vdHN0cmFwLWNvcmUvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwiYm9vdHN0cmFwLWNvcmUvdmFyaWFibGVzXCI7XG5cbi8vIFNjcm9sbGJhclxuJHNjcm9sbGJhci10cmFjay1iZzogICRncmF5LTEwMDtcbiRzY3JvbGxiYXItdGh1bWItYmc6ICAkZ3JheS00MDA7XG4kc2Nyb2xsYmFyLXRyYWNrLWRhcmstYmc6ICAkZGFyaztcbiRzY3JvbGxiYXItdGh1bWItZGFyay1iZzogICRncmF5LTkwMDtcbiRzY3JvbGxiYXItdGh1bWItYWN0aXZlLWJnOiAkYmx1ZTtcbiRzY3JvbGxiYXItdGhpY2tuZXNzOiAgICAgMTBweDtcblxuLy8gQWNjb3JkaW9uXG5cbiRhY2NvcmRpb24taWNvbjogICAgICAgICAgICAkZHJvcGRvd24taWNvbiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWljb24tZGlzYWJsZWQ6ICAgc3RyLXJlcGxhY2UoJGFjY29yZGlvbi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZ3JheS00MDAgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1iZy1ob3ZlcjogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZzogICAgMCAxcmVtIDFyZW0gMi41cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXk6ICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy14OiAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmc6ICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LWJnLWFjdGl2ZTogICRhY2NvcmRpb24tYmctaG92ZXIgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1zaXplOiAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _example_template_example_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-template/example.service */ "./src/app/components/example-page/example-list/example-template/example.service.ts");
/* harmony import */ var _example_template_example_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example-template/example.query */ "./src/app/components/example-page/example-list/example-template/example.query.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







let ExampleListComponent = class ExampleListComponent {
    constructor(route, exampleService, exampleQuery) {
        this.route = route;
        this.exampleService = exampleService;
        this.exampleQuery = exampleQuery;
    }
    onActivate(event) {
        setTimeout(() => this.exampleService.setFullscreen(true));
    }
    onDeactivate(event) {
        setTimeout(() => this.exampleService.setFullscreen(false));
    }
    ngOnInit() {
        /*this.$content = this.route.data.pipe(
          map(data => Object.keys(data).map( key => data[key]))
        );*/
        this.$showOutlet = this.exampleQuery.$isFullscreen
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
        this.$content = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.route.routeConfig.children);
    }
};
ExampleListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _example_template_example_service__WEBPACK_IMPORTED_MODULE_4__["ExampleService"] },
    { type: _example_template_example_query__WEBPACK_IMPORTED_MODULE_5__["ExampleQuery"] }
];
ExampleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-list.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/example-list/example-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example-list.component.scss */ "./src/app/components/example-page/example-list/example-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _example_template_example_service__WEBPACK_IMPORTED_MODULE_4__["ExampleService"],
        _example_template_example_query__WEBPACK_IMPORTED_MODULE_5__["ExampleQuery"]])
], ExampleListComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");


let CodeExampleDirective = class CodeExampleDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
CodeExampleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
CodeExampleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appCodeExample]',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], CodeExampleDirective);



let ExampleTemplateComponent = class ExampleTemplateComponent {
    constructor(resolver) {
        this.resolver = resolver;
        this.showCodeExample = false;
    }
    get example() {
        return this._example;
    }
    set example(value) {
        this._example = value;
    }
    toggleCodeExample() {
        this.showCodeExample = !this.showCodeExample;
    }
    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(this._example.component);
        const viewContainerRef = this.exampleHost.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(factory);
    }
    ngOnDestroy() {
        this.componentRef.destroy();
    }
};
ExampleTemplateComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ExampleTemplateComponent.prototype, "example", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(CodeExampleDirective, { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CodeExampleDirective)
], ExampleTemplateComponent.prototype, "exampleHost", void 0);
ExampleTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example-template',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-template.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/example-list/example-template/example-template.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-1rem,0,0)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0,0,0)', opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(0,0,0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate3d(-1rem,0,0)', opacity: 0 })),
                ]),
            ]),
        ],
        styles: ["\n      svg,\n      fa-icon::ng-deep svg {\n        height: 1rem;\n        width: auto !important;\n        vertical-align: middle;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], ExampleTemplateComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");
/* harmony import */ var _example_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./example.store */ "./src/app/components/example-page/example-list/example-template/example.store.ts");




let ExampleQuery = class ExampleQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"] {
    constructor(store) {
        super(store);
        this.store = store;
        this.$isFullscreen = this.select('isFullscreen');
    }
};
ExampleQuery.ctorParameters = () => [
    { type: _example_store__WEBPACK_IMPORTED_MODULE_3__["ExampleStore"] }
];
ExampleQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_example_store__WEBPACK_IMPORTED_MODULE_3__["ExampleStore"]])
], ExampleQuery);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _example_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./example.store */ "./src/app/components/example-page/example-list/example-template/example.store.ts");



let ExampleService = class ExampleService {
    constructor(exampleStore) {
        this.exampleStore = exampleStore;
    }
    setFullscreen(isFullscreen) {
        this.exampleStore.update(_ => ({
            isFullscreen
        }));
    }
};
ExampleService.ctorParameters = () => [
    { type: _example_store__WEBPACK_IMPORTED_MODULE_2__["ExampleStore"] }
];
ExampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_example_store__WEBPACK_IMPORTED_MODULE_2__["ExampleStore"]])
], ExampleService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");



function createInitialState() {
    return {
        isFullscreen: false
    };
}
let ExampleStore = class ExampleStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"] {
    constructor() {
        super(createInitialState());
    }
};
ExampleStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'example' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExampleStore);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example-list/example-template/example.query */ "./src/app/components/example-page/example-list/example-template/example.query.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






let ExamplePageComponent = class ExamplePageComponent {
    constructor(route, exampleQuery) {
        this.route = route;
        this.exampleQuery = exampleQuery;
        this.$menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](0);
        this.$heading = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](0);
    }
    ngOnInit() {
        const menuItems = this.route.routeConfig.children.map(route => {
            return {
                text: route.path,
                path: route.path
            };
        });
        this.$isFullscreen = this.exampleQuery.$isFullscreen
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
        this.$heading.next(this.route.parent.routeConfig.path);
        this.$menuItems.next(menuItems);
    }
};
ExamplePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_4__["ExampleQuery"] }
];
ExamplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example-page.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/example-page/example-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example-page.component.scss */ "./src/app/components/example-page/example-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _example_list_example_template_example_query__WEBPACK_IMPORTED_MODULE_4__["ExampleQuery"]])
], ExamplePageComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\nheader {\n  height: 56px;\n  position: fixed;\n  z-index: 1020;\n  left: 0;\n}\n.brand, .profile, .mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px;\n}\n.seb-logo {\n  height: 56px;\n  width: 56px;\n}\n@media (min-width: 576px) {\n  header {\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);\n  }\n}\n@media (min-width: 992px) {\n  header {\n    width: calc(100% - 16rem);\n    left: 16rem;\n  }\n}\n.mobile-header .col {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.mobile-header .active {\n  background: #60cd18;\n}\n.dropdown-toggle {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  cursor: pointer;\n}\n.dropdown-toggle::after {\n  display: none;\n}\n.dropdown.show {\n  background: #41B0EE;\n}\n.dropdown-item-link {\n  padding: 0.5rem 1.5rem;\n}\n.breadcrumb-container {\n  height: 56px;\n}\n.dropdown-header {\n  color: #343434;\n  background: #dedede;\n}\n.dropdown-menu .dropdown-header:first-child {\n  border-radius: 4px 4px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9wcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9ub2RlX21vZHVsZXMvQHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsInByb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLWNvcmUvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvcHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7Ozs7OztFQUFBO0FDM0RBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQzZXa0M7RUQ1V2xDLE9BQUE7QUVJRjtBRkRBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRUlGO0FGREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRUlGO0FDcUNJO0VIdENGO0lBRUUsMENBQUE7RUVJRjtBQUNGO0FDK0JJO0VIaENGO0lBR0UseUJBQUE7SUFDQSxXSWhDb0I7RUZrQ3RCO0FBQ0Y7QUZFRTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUVBSjtBRkVFO0VBQ0UsbUJDS29CO0FDTHhCO0FGR0E7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBRUFGO0FGR0E7RUFDRSxhQUFBO0FFQUY7QUZHQTtFQUNFLG1CQ05zQjtBQ014QjtBRkdBO0VBQ0Usc0JBQUE7QUVBRjtBRkdBO0VBQ0UsWUFBQTtBRUFGO0FGR0E7RUFDRSxjQ2xEUztFRG1EVCxtQkN4RFM7QUN3RFg7QUZHQTtFQUNFLDBCQUFBO0FFQUYiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3N0eWxlcy9mdW5jdGlvbnMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfkBzZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvbWl4aW5zJztcbmhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAkemluZGV4LXN0aWNreTtcbiAgbGVmdDogMDtcbiAgLy9wYWRkaW5nLWxlZnQ6IDA7XG59XG4uYnJhbmQsIC5wcm9maWxlLCAubW9iaWxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6NTZweDtcbn1cblxuLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OjU2cHg7XG4gIHdpZHRoOiA1NnB4O1xufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICBoZWFkZXIge1xuICAgIC8vd2lkdGg6Y2FsYygxMDB2dyAtIDE3cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLDAsMCwwLjE1KTtcbiAgfVxufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICBoZWFkZXIge1xuICAgIC8vd2lkdGg6Y2FsYygxMDB2dyAtIDI1NnB4IC0gMTdweCk7XG4gICAgLy93aWR0aDpjYWxjKDEwMHZ3IC0gMjU2cHgpO1xuICAgIHdpZHRoOmNhbGMoMTAwJSAtICN7JG5nc2ViLWRvY3MtbWVudS13aWR0aH0pO1xuICAgIGxlZnQ6ICRuZ3NlYi1kb2NzLW1lbnUtd2lkdGg7XG4gIH1cbn1cblxuLm1vYmlsZS1oZWFkZXIge1xuICAuY29sIHtcbiAgICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLnNob3cge1xuICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGNvbG9yOiRkYXJrO1xuICBiYWNrZ3JvdW5kOiAkZ3JheS0zMDA7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgJGJ0bi1ib3JkZXItcmFkaXVzIDAgMDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbi1kYXJrZXIgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJHB1cnBsZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQtZGFyayAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIHRoZW1lIGljb25zIC8vIFNFQiBzcGVjaWZpY1xuJGljb24tZmlsbC1jb2xvcjogJGJsYWNrO1xuJHRoZW1lLWljb25zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtaWNvbnM6IG1hcC1tZXJnZShcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6ICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDggODB2MzUyYzAgMjYuNTEtMjEuNDkgNDgtNDggNDhINDhjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhWODBjMC0yNi41MSAyMS40OS00OCA0OC00OGgzNTJjMjYuNTEgMCA0OCAyMS40OSA0OCA0OHptLTQ4IDM0NlY4NmE2IDYgMCAwIDAtNi02SDU0YTYgNiAwIDAgMC02IDZ2MzQwYTYgNiAwIDAgMCA2IDZoMzQwYTYgNiAwIDAgMCA2LTZ6TTIyNCAxMThjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiOiAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQ4Ljc0NyAyMDQuNzA1bDYuNTg4IDExMmMuMzczIDYuMzQzIDUuNjI2IDExLjI5NSAxMS45NzkgMTEuMjk1aDQxLjM3YTEyIDEyIDAgMCAwIDExLjk3OS0xMS4yOTVsNi41ODgtMTEyYy40MDUtNi44OTMtNS4wNzUtMTIuNzA1LTExLjk3OS0xMi43MDVoLTU0LjU0N2MtNi45MDMgMC0xMi4zODMgNS44MTItMTEuOTc4IDEyLjcwNXpNMzMwIDM4NGMwIDIzLjE5Ni0xOC44MDQgNDItNDIgNDJzLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDIgNDIgMTguODA0IDQyIDQyem0tLjQyMy0zNjAuMDE1Yy0xOC40MzMtMzEuOTUxLTY0LjY4Ny0zMi4wMDktODMuMTU0IDBMNi40NzcgNDQwLjAxM0MtMTEuOTQ1IDQ3MS45NDYgMTEuMTE4IDUxMiA0OC4wNTQgNTEySDUyNy45NGMzNi44NjUgMCA2MC4wMzUtMzkuOTkzIDQxLjU3Ny03MS45ODdMMzI5LjU3NyAyMy45ODV6TTUzLjE5MSA0NTUuMDAyTDI4Mi44MDMgNTcuMDA4YzIuMzA5LTQuMDAyIDguMDg1LTQuMDAyIDEwLjM5NCAwbDIyOS42MTIgMzk3Ljk5M2MyLjMwOCA0LS41NzkgOC45OTgtNS4xOTcgOC45OThINTguMzg4Yy00LjYxNy4wMDEtNy41MDQtNC45OTctNS4xOTctOC45OTd6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiOiAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0OC43NDcgMjA0LjcwNWw2LjU4OCAxMTJjLjM3MyA2LjM0MyA1LjYyNiAxMS4yOTUgMTEuOTc5IDExLjI5NWg0MS4zN2ExMiAxMiAwIDAgMCAxMS45NzktMTEuMjk1bDYuNTg4LTExMmMuNDA1LTYuODkzLTUuMDc1LTEyLjcwNS0xMS45NzktMTIuNzA1aC01NC41NDdjLTYuOTAzIDAtMTIuMzgzIDUuODEyLTExLjk3OCAxMi43MDV6TTMzMCAzODRjMCAyMy4xOTYtMTguODA0IDQyLTQyIDQycy00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyIDQyIDE4LjgwNCA0MiA0MnptLS40MjMtMzYwLjAxNWMtMTguNDMzLTMxLjk1MS02NC42ODctMzIuMDA5LTgzLjE1NCAwTDYuNDc3IDQ0MC4wMTNDLTExLjk0NSA0NzEuOTQ2IDExLjExOCA1MTIgNDguMDU0IDUxMkg1MjcuOTRjMzYuODY1IDAgNjAuMDM1LTM5Ljk5MyA0MS41NzctNzEuOTg3TDMyOS41NzcgMjMuOTg1ek01My4xOTEgNDU1LjAwMkwyODIuODAzIDU3LjAwOGMyLjMwOS00LjAwMiA4LjA4NS00LjAwMiAxMC4zOTQgMGwyMjkuNjEyIDM5Ny45OTNjMi4zMDggNC0uNTc5IDguOTk4LTUuMTk3IDguOTk4SDU4LjM4OGMtNC42MTcuMDAxLTcuNTA0LTQuOTk3LTUuMTk3LTguOTk3eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAkdGhlbWUtaWNvbnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0tNiA0MDBINTRhNiA2IDAgMCAxLTYtNlY4NmE2IDYgMCAwIDEgNi02aDM0MGE2IDYgMCAwIDEgNiA2djM0MGE2IDYgMCAwIDEtNiA2em0tNTQtMzA0bC0xMzYgLjE0NWMtNi42MjcgMC0xMiA1LjM3My0xMiAxMlYxNjcuOWMwIDYuNzIyIDUuNTIyIDEyLjEzMyAxMi4yNDMgMTEuOTk4bDU4LjAwMS0yLjE0MUw5OS41MTUgMzQwLjQ4NWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIzLjAzIDIzLjAyOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGwxNjIuNzI5LTE2Mi43MjktMi4xNDEgNTguMDAxYy0uMTM2IDYuNzIxIDUuMjc1IDEyLjI0MiAxMS45OTggMTIuMjQyaDI3Ljc1NWM2LjYyOCAwIDEyLTUuMzczIDEyLTEyTDM1MiAxNDBjMC02LjYyNy01LjM3My0xMi0xMi0xMnonIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbjogICAgICAgIHN0ci1yZXBsYWNlKCRleHRlcm5hbC1saW5rLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRleHRlcm5hbC1saW5rLWljb24tY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKTtcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICAgICAgICB4czogMCxcbiAgICAgICAgc206IDU3NnB4LFxuICAgICAgICBtZDogNzY4cHgsXG4gICAgICAgIGxnOiA5OTJweCxcbiAgICAgICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNjI1cmVtIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4yNzVyZW0gLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsdWUsIC4wNzUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1leHBhbmQtYmc6ICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI4MTI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIDEgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjYyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pY29uOiAgICAgICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDEuOSAxNjcuM2wtMTkuOC0xOS44Yy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDMyOC4yIDQyLjkgMTQ3LjVjLTQuNy00LjctMTIuMy00LjctMTcgMEw2LjEgMTY3LjNjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMDkuNCAyMDkuNGM0LjcgNC43IDEyLjMgNC43IDE3IDBsMjA5LjQtMjA5LjRjNC43LTQuNyA0LjctMTIuMyAwLTE3eicgZmlsbD0nI3skYmx1ZX0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pY29uLWFjdGl2ZTogICAgICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkd2hpdGUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDY1JSA2NSUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zbGlkZS10b2dnbGUtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkYmx1ZTtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDE2cHggMTZweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UoJGRyb3Bkb3duLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRibHVlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKG1hcC1nZXQoJHRoZW1lLWljb25zLCAnc3VjY2VzcycpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkaWNvbi1maWxsLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UobWFwLWdldCgkdGhlbWUtaWNvbnMsICdkYW5nZXInKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGljb24tZmlsbC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1saW5lLXRoaWNrbmVzczogICAgICAycHggIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy81MDBcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYWxlcnQtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAxLjEyNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLXBhZGRpbmc6ICRhbGVydC1pY29uLXdpZHRoICsgKCRhbGVydC1wYWRkaW5nLXgqMik7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZ3JlZW59Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3ItbGlnaHQ6ICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3ItbGlnaHQ6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYWN0aXZlLWZvbnQtd2VpZ2h0OiAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0LjcwNyAzOC4xMDFMNC45MDggNTcuODk5Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMTg1LjYwNyAyNTYgNC45MDggNDM3LjEzYy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjQuNzA3IDQ3My45YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyMDkuNDE0LTIwOS40MTRjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDQxLjY3OCAzOC4xMDFjLTQuNjg3LTQuNjg3LTEyLjI4NS00LjY4Ny0xNi45NzEgMHonIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjMxLjI5MyA0NzMuODk5bDE5Ljc5OS0xOS43OTljNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDcwLjM5MyAyNTYgMjUxLjA5MiA3NC44N2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMMjMxLjI5MyAzOC4xYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMNC45MDggMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDIxNC4zMjIgNDczLjljNC42ODcgNC42ODYgMTIuMjg1IDQuNjg2IDE2Ljk3MS0uMDAxeicgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItZGl2aWRlci1oZWlnaHQ6ICAgICAgICAgMS41cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBDbG9zZVxuXG4vLyBDb2RlXG5cbi8vIFByaW50aW5nXG5cbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS92YXJpYWJsZXNcIjtcblxuLy8gU2Nyb2xsYmFyXG4kc2Nyb2xsYmFyLXRyYWNrLWJnOiAgJGdyYXktMTAwO1xuJHNjcm9sbGJhci10aHVtYi1iZzogICRncmF5LTQwMDtcbiRzY3JvbGxiYXItdHJhY2stZGFyay1iZzogICRkYXJrO1xuJHNjcm9sbGJhci10aHVtYi1kYXJrLWJnOiAgJGdyYXktOTAwO1xuJHNjcm9sbGJhci10aHVtYi1hY3RpdmUtYmc6ICRibHVlO1xuJHNjcm9sbGJhci10aGlja25lc3M6ICAgICAxMHB4O1xuXG4vLyBBY2NvcmRpb25cblxuJGFjY29yZGlvbi1pY29uOiAgICAgICAgICAgICRkcm9wZG93bi1pY29uICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taWNvbi1kaXNhYmxlZDogICBzdHItcmVwbGFjZSgkYWNjb3JkaW9uLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRibHVlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRncmF5LTQwMCArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJnLWhvdmVyOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9yZGVyLWNvbG9yOiAgICAkdGFibGUtYm9yZGVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9yZGVyLXdpZHRoOiAgICAkdGFibGUtYm9yZGVyLXdpZHRoICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taGVhZGVyLXBhZGRpbmc6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nOiAgICAwIDFyZW0gMXJlbSAyLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmctYWN0aXZlOiAgJGFjY29yZGlvbi1iZy1ob3ZlciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iLCIvKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5oZWFkZXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAyMDtcbiAgbGVmdDogMDtcbn1cblxuLmJyYW5kLCAucHJvZmlsZSwgLm1vYmlsZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuXG4uc2ViLWxvZ28ge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiA1NnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBoZWFkZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnJlbSk7XG4gICAgbGVmdDogMTZyZW07XG4gIH1cbn1cbi5tb2JpbGUtaGVhZGVyIC5jb2wge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59XG4ubW9iaWxlLWhlYWRlciAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzYwY2QxODtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcm9wZG93bi5zaG93IHtcbiAgYmFja2dyb3VuZDogIzQxQjBFRTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGNvbG9yOiAjMzQzNDM0O1xuICBiYWNrZ3JvdW5kOiAjZGVkZWRlO1xufVxuXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24taGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCIkbmdzZWItZG9jcy1tZW51LXdpZHRoOiAxNnJlbTtcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu/menu.service */ "./src/app/components/menu/menu.service.ts");
/* harmony import */ var _menu_menu_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.query */ "./src/app/components/menu/menu.query.ts");





let HeaderComponent = class HeaderComponent {
    constructor(menuService, menuQuery) {
        this.menuService = menuService;
        this.menuQuery = menuQuery;
        this.activeTab = 'components';
        this._scrollPosition = 0;
        this.stickyHeader = 'hide';
    }
    get scrollPosition() {
        return this._scrollPosition;
    }
    set scrollPosition(value) {
        this._scrollPosition = value;
        if (this.scrollPosition >= 100) {
            this.stickyHeader = 'show';
        }
        else {
            this.stickyHeader = 'hide';
        }
    }
    ngOnInit() {
        this.$isActive = this.menuQuery.$isMenuActive;
        this.$menuItems = this.menuQuery.$menuItems;
    }
    showMenu(tab) {
        // this.menuService.switchTab(tab);
        this.activeTab = tab;
    }
    toggleMenu() {
        this.menuService.toggleMenu();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: _menu_menu_query__WEBPACK_IMPORTED_MODULE_4__["MenuQuery"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
], HeaderComponent.prototype, "scrollPosition", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/header/header.component.html")).default,
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
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _menu_menu_query__WEBPACK_IMPORTED_MODULE_4__["MenuQuery"]])
], HeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let InstallationComponent = class InstallationComponent {
    constructor() { }
    ngOnInit() {
    }
};
InstallationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./installation.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/installation/installation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./installation.component.scss */ "./src/app/components/installation/installation.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InstallationComponent);



/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seb-logo {\n  height: 56px;\n  width: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OjU2cHg7XG4gIHdpZHRoOiA1NnB4O1xufVxuIiwiLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/logo/logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");
/* harmony import */ var _menu_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.store */ "./src/app/components/menu/menu.store.ts");




let MenuQuery = class MenuQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Query"] {
    constructor(store) {
        super(store);
        this.store = store;
        this.$isMenuActive = this.select('isMenuActive');
        this.$menuItems = this.select('menuItems');
    }
};
MenuQuery.ctorParameters = () => [
    { type: _menu_store__WEBPACK_IMPORTED_MODULE_3__["MenuStore"] }
];
MenuQuery = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_store__WEBPACK_IMPORTED_MODULE_3__["MenuStore"]])
], MenuQuery);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.store */ "./src/app/components/menu/menu.store.ts");



let MenuService = class MenuService {
    constructor(menuStore) {
        this.menuStore = menuStore;
    }
    updateMenuItems(menuItems) {
        this.menuStore.update(currentState => ({ menuItems }));
    }
    toggleMenu(state) {
        this.menuStore.update(currentState => ({
            isMenuActive: typeof state !== 'undefined' ? state : !currentState.isMenuActive
        }));
    }
};
MenuService.ctorParameters = () => [
    { type: _menu_store__WEBPACK_IMPORTED_MODULE_2__["MenuStore"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_store__WEBPACK_IMPORTED_MODULE_2__["MenuStore"]])
], MenuService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/fesm2015/datorama-akita.js");



function createInitialState() {
    return {
        isMenuActive: true,
        menuItems: []
    };
}
let MenuStore = class MenuStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["Store"] {
    constructor() {
        super(createInitialState());
    }
};
MenuStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({ name: 'navigation' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuStore);



/***/ }),

/***/ "./src/app/components/menu/side-menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/menu/side-menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.side-nav {\n  transform: translate3d(-16rem, 0, 0);\n  transition: transform 400ms ease-in-out;\n  background: #343434;\n  width: 16rem;\n  height: 100vh;\n  position: fixed;\n  z-index: 1030;\n  left: 0;\n  top: 0;\n}\n.side-nav.active {\n  transform: translate3d(0, 0, 0);\n  display: block;\n  z-index: 1030;\n}\n@media (max-width: 767.98px) {\n  .side-nav.active {\n    display: none;\n  }\n}\n@media (min-width: 992px) {\n  .side-nav {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.seb-logo {\n  height: 56px;\n  width: 56px;\n}\n.nav-link {\n  color: #fff;\n}\n.list-group-menu .list-group-item.active {\n  background: #60cd18;\n}\n.list-group-menu .list-group-item a {\n  color: #fff;\n}\n.nav-item .nav-link {\n  transition: background-color 0.15s linear;\n}\n.nav-item:hover .nav-link {\n  background: rgba(96, 205, 24, 0.25);\n}\n.nav-item .nav-link.active {\n  background: #60cd18;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19hbmltYXRpb25zLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9wcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL25nLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL0BzZWJncm91cC9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvbmctY29tcG9uZW50cy9wcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL3ZhcmlhYmxlcy5zY3NzIiwicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvY29tcG9uZW50cy9tZW51L3NpZGUtbWVudS5jb21wb25lbnQuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL25vZGVfbW9kdWxlcy9Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLWNvcmUvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTs7Ozs7O0VBQUE7QUMxREE7RUFDRSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsbUJDVVM7RURUVCxZRVRzQjtFRlV0QixhQUFBO0VBQ0EsZUFBQTtFQUNBLGFDeVdrQztFRHhXbEMsT0FBQTtFQUNBLE1BQUE7QUdHRjtBSEZFO0VBQ0UsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUNtV2dDO0FFL1ZwQztBQ21ESTtFSm5ERjtJQUNFLGFBQUE7RUdJRjtBQUNGO0FDZ0NJO0VKaENGO0lBQ0UsK0JBQUE7RUdHRjtBQUNGO0FIQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBR0VGO0FIQ0E7RUFDRSxXQzdCUztBRStCWDtBSEdJO0VBQ0UsbUJDRWtCO0FFRnhCO0FIRUk7RUFDRSxXQ3RDSztBRXNDWDtBSE1FO0VBQ0UseUNBQUE7QUdISjtBSEtFO0VBQ0UsbUNBQUE7QUdISjtBSEtFO0VBQ0UsbUJDZG9CO0FFV3hCIiwiZmlsZSI6InByb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXNcIjtcbkBpbXBvcnQgJ35Ac2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3Mvc3R5bGVzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+QHNlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL21peGlucy9taXhpbnMnO1xuXG4uc2lkZS1uYXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0kbmdzZWItZG9jcy1tZW51LXdpZHRoLDAsMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogJGRhcms7XG4gIHdpZHRoOiAkbmdzZWItZG9jcy1tZW51LXdpZHRoO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6ICR6aW5kZXgtZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgJi5hY3RpdmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6ICR6aW5kZXgtZml4ZWQ7XG4gIH1cbn1cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAuc2lkZS1uYXYuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcbiAgLnNpZGUtbmF2IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgfVxufVxuXG4uc2ViLWxvZ28ge1xuICBoZWlnaHQ6NTZweDtcbiAgd2lkdGg6IDU2cHg7XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiAkd2hpdGU7XG59XG5cbi5saXN0LWdyb3VwLW1lbnUge1xuICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW47XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1pdGVtIHtcbiAgLm5hdi1saW5rIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb247XG4gIH1cbiAgJjpob3ZlciAubmF2LWxpbmsge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGdyZWVuLC4yNSk7XG4gIH1cbiAgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG5cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbi1kYXJrZXIgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJHB1cnBsZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQtZGFyayAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIHRoZW1lIGljb25zIC8vIFNFQiBzcGVjaWZpY1xuJGljb24tZmlsbC1jb2xvcjogJGJsYWNrO1xuJHRoZW1lLWljb25zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtaWNvbnM6IG1hcC1tZXJnZShcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6ICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDggODB2MzUyYzAgMjYuNTEtMjEuNDkgNDgtNDggNDhINDhjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhWODBjMC0yNi41MSAyMS40OS00OCA0OC00OGgzNTJjMjYuNTEgMCA0OCAyMS40OSA0OCA0OHptLTQ4IDM0NlY4NmE2IDYgMCAwIDAtNi02SDU0YTYgNiAwIDAgMC02IDZ2MzQwYTYgNiAwIDAgMCA2IDZoMzQwYTYgNiAwIDAgMCA2LTZ6TTIyNCAxMThjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiOiAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQ4Ljc0NyAyMDQuNzA1bDYuNTg4IDExMmMuMzczIDYuMzQzIDUuNjI2IDExLjI5NSAxMS45NzkgMTEuMjk1aDQxLjM3YTEyIDEyIDAgMCAwIDExLjk3OS0xMS4yOTVsNi41ODgtMTEyYy40MDUtNi44OTMtNS4wNzUtMTIuNzA1LTExLjk3OS0xMi43MDVoLTU0LjU0N2MtNi45MDMgMC0xMi4zODMgNS44MTItMTEuOTc4IDEyLjcwNXpNMzMwIDM4NGMwIDIzLjE5Ni0xOC44MDQgNDItNDIgNDJzLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDIgNDIgMTguODA0IDQyIDQyem0tLjQyMy0zNjAuMDE1Yy0xOC40MzMtMzEuOTUxLTY0LjY4Ny0zMi4wMDktODMuMTU0IDBMNi40NzcgNDQwLjAxM0MtMTEuOTQ1IDQ3MS45NDYgMTEuMTE4IDUxMiA0OC4wNTQgNTEySDUyNy45NGMzNi44NjUgMCA2MC4wMzUtMzkuOTkzIDQxLjU3Ny03MS45ODdMMzI5LjU3NyAyMy45ODV6TTUzLjE5MSA0NTUuMDAyTDI4Mi44MDMgNTcuMDA4YzIuMzA5LTQuMDAyIDguMDg1LTQuMDAyIDEwLjM5NCAwbDIyOS42MTIgMzk3Ljk5M2MyLjMwOCA0LS41NzkgOC45OTgtNS4xOTcgOC45OThINTguMzg4Yy00LjYxNy4wMDEtNy41MDQtNC45OTctNS4xOTctOC45OTd6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiOiAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0OC43NDcgMjA0LjcwNWw2LjU4OCAxMTJjLjM3MyA2LjM0MyA1LjYyNiAxMS4yOTUgMTEuOTc5IDExLjI5NWg0MS4zN2ExMiAxMiAwIDAgMCAxMS45NzktMTEuMjk1bDYuNTg4LTExMmMuNDA1LTYuODkzLTUuMDc1LTEyLjcwNS0xMS45NzktMTIuNzA1aC01NC41NDdjLTYuOTAzIDAtMTIuMzgzIDUuODEyLTExLjk3OCAxMi43MDV6TTMzMCAzODRjMCAyMy4xOTYtMTguODA0IDQyLTQyIDQycy00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyIDQyIDE4LjgwNCA0MiA0MnptLS40MjMtMzYwLjAxNWMtMTguNDMzLTMxLjk1MS02NC42ODctMzIuMDA5LTgzLjE1NCAwTDYuNDc3IDQ0MC4wMTNDLTExLjk0NSA0NzEuOTQ2IDExLjExOCA1MTIgNDguMDU0IDUxMkg1MjcuOTRjMzYuODY1IDAgNjAuMDM1LTM5Ljk5MyA0MS41NzctNzEuOTg3TDMyOS41NzcgMjMuOTg1ek01My4xOTEgNDU1LjAwMkwyODIuODAzIDU3LjAwOGMyLjMwOS00LjAwMiA4LjA4NS00LjAwMiAxMC4zOTQgMGwyMjkuNjEyIDM5Ny45OTNjMi4zMDggNC0uNTc5IDguOTk4LTUuMTk3IDguOTk4SDU4LjM4OGMtNC42MTcuMDAxLTcuNTA0LTQuOTk3LTUuMTk3LTguOTk3eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAkdGhlbWUtaWNvbnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0tNiA0MDBINTRhNiA2IDAgMCAxLTYtNlY4NmE2IDYgMCAwIDEgNi02aDM0MGE2IDYgMCAwIDEgNiA2djM0MGE2IDYgMCAwIDEtNiA2em0tNTQtMzA0bC0xMzYgLjE0NWMtNi42MjcgMC0xMiA1LjM3My0xMiAxMlYxNjcuOWMwIDYuNzIyIDUuNTIyIDEyLjEzMyAxMi4yNDMgMTEuOTk4bDU4LjAwMS0yLjE0MUw5OS41MTUgMzQwLjQ4NWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIzLjAzIDIzLjAyOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGwxNjIuNzI5LTE2Mi43MjktMi4xNDEgNTguMDAxYy0uMTM2IDYuNzIxIDUuMjc1IDEyLjI0MiAxMS45OTggMTIuMjQyaDI3Ljc1NWM2LjYyOCAwIDEyLTUuMzczIDEyLTEyTDM1MiAxNDBjMC02LjYyNy01LjM3My0xMi0xMi0xMnonIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbjogICAgICAgIHN0ci1yZXBsYWNlKCRleHRlcm5hbC1saW5rLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRleHRlcm5hbC1saW5rLWljb24tY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKTtcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICAgICAgICB4czogMCxcbiAgICAgICAgc206IDU3NnB4LFxuICAgICAgICBtZDogNzY4cHgsXG4gICAgICAgIGxnOiA5OTJweCxcbiAgICAgICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNjI1cmVtIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4yNzVyZW0gLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsdWUsIC4wNzUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1leHBhbmQtYmc6ICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI4MTI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIDEgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjYyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pY29uOiAgICAgICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDEuOSAxNjcuM2wtMTkuOC0xOS44Yy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDMyOC4yIDQyLjkgMTQ3LjVjLTQuNy00LjctMTIuMy00LjctMTcgMEw2LjEgMTY3LjNjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMDkuNCAyMDkuNGM0LjcgNC43IDEyLjMgNC43IDE3IDBsMjA5LjQtMjA5LjRjNC43LTQuNyA0LjctMTIuMyAwLTE3eicgZmlsbD0nI3skYmx1ZX0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pY29uLWFjdGl2ZTogICAgICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkd2hpdGUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDY1JSA2NSUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zbGlkZS10b2dnbGUtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkYmx1ZTtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDE2cHggMTZweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UoJGRyb3Bkb3duLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRibHVlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKG1hcC1nZXQoJHRoZW1lLWljb25zLCAnc3VjY2VzcycpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkaWNvbi1maWxsLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UobWFwLWdldCgkdGhlbWUtaWNvbnMsICdkYW5nZXInKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGljb24tZmlsbC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1saW5lLXRoaWNrbmVzczogICAgICAycHggIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy81MDBcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYWxlcnQtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAxLjEyNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLXBhZGRpbmc6ICRhbGVydC1pY29uLXdpZHRoICsgKCRhbGVydC1wYWRkaW5nLXgqMik7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZ3JlZW59Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1iZzogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3ItbGlnaHQ6ICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3ItbGlnaHQ6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYWN0aXZlLWZvbnQtd2VpZ2h0OiAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0LjcwNyAzOC4xMDFMNC45MDggNTcuODk5Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMTg1LjYwNyAyNTYgNC45MDggNDM3LjEzYy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjQuNzA3IDQ3My45YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyMDkuNDE0LTIwOS40MTRjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDQxLjY3OCAzOC4xMDFjLTQuNjg3LTQuNjg3LTEyLjI4NS00LjY4Ny0xNi45NzEgMHonIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjMxLjI5MyA0NzMuODk5bDE5Ljc5OS0xOS43OTljNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDcwLjM5MyAyNTYgMjUxLjA5MiA3NC44N2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMMjMxLjI5MyAzOC4xYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBMNC45MDggMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDIxNC4zMjIgNDczLjljNC42ODcgNC42ODYgMTIuMjg1IDQuNjg2IDE2Ljk3MS0uMDAxeicgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItZGl2aWRlci1oZWlnaHQ6ICAgICAgICAgMS41cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBDbG9zZVxuXG4vLyBDb2RlXG5cbi8vIFByaW50aW5nXG5cbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAtY29yZS92YXJpYWJsZXNcIjtcblxuLy8gU2Nyb2xsYmFyXG4kc2Nyb2xsYmFyLXRyYWNrLWJnOiAgJGdyYXktMTAwO1xuJHNjcm9sbGJhci10aHVtYi1iZzogICRncmF5LTQwMDtcbiRzY3JvbGxiYXItdHJhY2stZGFyay1iZzogICRkYXJrO1xuJHNjcm9sbGJhci10aHVtYi1kYXJrLWJnOiAgJGdyYXktOTAwO1xuJHNjcm9sbGJhci10aHVtYi1hY3RpdmUtYmc6ICRibHVlO1xuJHNjcm9sbGJhci10aGlja25lc3M6ICAgICAxMHB4O1xuXG4vLyBBY2NvcmRpb25cblxuJGFjY29yZGlvbi1pY29uOiAgICAgICAgICAgICRkcm9wZG93bi1pY29uICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taWNvbi1kaXNhYmxlZDogICBzdHItcmVwbGFjZSgkYWNjb3JkaW9uLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRibHVlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRncmF5LTQwMCArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJnLWhvdmVyOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9yZGVyLWNvbG9yOiAgICAkdGFibGUtYm9yZGVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9yZGVyLXdpZHRoOiAgICAkdGFibGUtYm9yZGVyLXdpZHRoICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taGVhZGVyLXBhZGRpbmc6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nOiAgICAwIDFyZW0gMXJlbSAyLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmctYWN0aXZlOiAgJGFjY29yZGlvbi1iZy1ob3ZlciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iLCIkbmdzZWItZG9jcy1tZW51LXdpZHRoOiAxNnJlbTtcbiIsIi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbi5zaWRlLW5hdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2cmVtLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kOiAjMzQzNDM0O1xuICB3aWR0aDogMTZyZW07XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAzMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnNpZGUtbmF2LmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6LWluZGV4OiAxMDMwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnNpZGUtbmF2LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5zaWRlLW5hdiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5saXN0LWdyb3VwLW1lbnUgLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjBjZDE4O1xufVxuLmxpc3QtZ3JvdXAtbWVudSAubGlzdC1ncm91cC1pdGVtIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgbGluZWFyO1xufVxuLm5hdi1pdGVtOmhvdmVyIC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTYsIDIwNSwgMjQsIDAuMjUpO1xufVxuLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNjBjZDE4O1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.service */ "./src/app/components/menu/menu.service.ts");
/* harmony import */ var _menu_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.query */ "./src/app/components/menu/menu.query.ts");




let SideMenuComponent = class SideMenuComponent {
    constructor(menuServiceService, menuQuery) {
        this.menuServiceService = menuServiceService;
        this.menuQuery = menuQuery;
        this.$isActive = this.menuQuery.$isMenuActive;
    }
    ngOnInit() {
        this.$menuGroups = this.menuQuery.$menuItems;
    }
    toggleMenu(state) {
        this.menuServiceService.toggleMenu();
    }
};
SideMenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _menu_query__WEBPACK_IMPORTED_MODULE_3__["MenuQuery"] }
];
SideMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-menu.component.html */ "../../node_modules/raw-loader/index.js!./src/app/components/menu/side-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-menu.component.scss */ "./src/app/components/menu/side-menu.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"],
        _menu_query__WEBPACK_IMPORTED_MODULE_3__["MenuQuery"]])
], SideMenuComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _examples_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/buttons/buttons.component */ "./src/app/examples/components/buttons/examples/buttons/buttons.component.ts");
/* harmony import */ var _sebgroup_ng_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sebgroup/ng-components */ "../../lib/src/button/index.ts");
/* harmony import */ var _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/example-page/example-list/example-list.component */ "./src/app/components/example-page/example-list/example-list.component.ts");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");








const ROUTES = [
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
                            description: `Same component used for the sake of showing how multiple examples can be set up.
                          It's also possible to add html like a <a href="http://www.seb.se" target="blank">link</a>.`,
                            sources: [{
                                    name: 'buttons.component.html',
                                    src: `<div>Some other <strong class="fancy-class">inline</strong> example markup</div>`,
                                    lang: 'markup'
                                }, {
                                    name: 'buttons.component.js',
                                    src: `foo(bar: any) => {
                console.log(bar);
              }`,
                                    lang: 'js'
                                }, {
                                    name: 'buttons.component.css',
                                    src: `
                .fancy-class {
                  color: hotpink !important;
                }
              `,
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
let ButtonsModule = class ButtonsModule {
};
ButtonsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_examples_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _sebgroup_ng_components__WEBPACK_IMPORTED_MODULE_5__["SebButtonModule"]
        ]
    })
], ButtonsModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ButtonsComponent = class ButtonsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buttons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buttons.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/buttons/examples/buttons/buttons.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buttons.component.scss */ "./src/app/examples/components/buttons/examples/buttons/buttons.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ButtonsComponent);



/***/ }),

/***/ "./src/app/examples/components/modal/examples/modal/modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/examples/components/modal/examples/modal/modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  position: static;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9uZy1jb21wb25lbnRzL3Byb2plY3RzL25nLWNvbXBvbmVudHMtZG9jcy9zcmMvYXBwL2V4YW1wbGVzL2NvbXBvbmVudHMvbW9kYWwvZXhhbXBsZXMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZy1jb21wb25lbnRzLWRvY3Mvc3JjL2FwcC9leGFtcGxlcy9jb21wb25lbnRzL21vZGFsL2V4YW1wbGVzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbmctY29tcG9uZW50cy1kb2NzL3NyYy9hcHAvZXhhbXBsZXMvY29tcG9uZW50cy9tb2RhbC9leGFtcGxlcy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuIiwiLm1vZGFsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ModalComponent = class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/modal/examples/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/examples/components/modal/examples/modal/modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _examples_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/modal/modal.component */ "./src/app/examples/components/modal/examples/modal/modal.component.ts");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/example-page/example-list/example-list.component */ "./src/app/components/example-page/example-list/example-list.component.ts");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");







const ROUTES = [
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
let ModalModule = class ModalModule {
};
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



/***/ }),

/***/ "./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts ***!
  \********************************************************************************************/
/*! exports provided: WizardFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardFormsComponent", function() { return WizardFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");



let WizardFormsComponent = class WizardFormsComponent {
    constructor() {
        this.wizardFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            step1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
            step2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
            step3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
            step4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            }),
        });
    }
    ngOnInit() { }
};
WizardFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wizard-forms.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WizardFormsComponent);



/***/ }),

/***/ "./src/app/examples/components/wizard/examples/wizard/wizard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/examples/components/wizard/examples/wizard/wizard.component.ts ***!
  \********************************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _lib_src_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../lib/src/modal */ "../../lib/src/modal/index.ts");
/* harmony import */ var _wizard_forms_wizard_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wizard-forms/wizard-forms.component */ "./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts");




let WizardComponent = class WizardComponent {
    constructor(modal) {
        this.modal = modal;
    }
    launchWizardForms() {
        this.modal.open(_wizard_forms_wizard_forms_component__WEBPACK_IMPORTED_MODULE_3__["WizardFormsComponent"], { type: 'fullscreen' });
    }
};
WizardComponent.ctorParameters = () => [
    { type: _lib_src_modal__WEBPACK_IMPORTED_MODULE_2__["SebModalService"] }
];
WizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wizard.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard/wizard.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lib_src_modal__WEBPACK_IMPORTED_MODULE_2__["SebModalService"]])
], WizardComponent);



/***/ }),

/***/ "./src/app/examples/components/wizard/wizard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/examples/components/wizard/wizard.module.ts ***!
  \*************************************************************/
/*! exports provided: ROUTES, WizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardModule", function() { return WizardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/example-page/example-page.component */ "./src/app/components/example-page/example-page.component.ts");
/* harmony import */ var _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/example-page/example-list/example-list.component */ "./src/app/components/example-page/example-list/example-list.component.ts");
/* harmony import */ var _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/example-page/api-list/api-list.component */ "./src/app/components/example-page/api-list/api-list.component.ts");
/* harmony import */ var _examples_wizard_forms_wizard_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/wizard-forms/wizard-forms.component */ "./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _lib_src_wizard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../lib/src/wizard */ "../../lib/src/wizard/index.ts");
/* harmony import */ var _lib_src_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../lib/src/button */ "../../lib/src/button/index.ts");
/* harmony import */ var _lib_src_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../lib/src/modal */ "../../lib/src/modal/index.ts");
/* harmony import */ var _examples_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/wizard/wizard.component */ "./src/app/examples/components/wizard/examples/wizard/wizard.component.ts");












const ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'examples' },
    {
        path: '',
        component: _components_example_page_example_page_component__WEBPACK_IMPORTED_MODULE_3__["ExamplePageComponent"],
        children: [
            {
                path: 'examples',
                component: _components_example_page_example_list_example_list_component__WEBPACK_IMPORTED_MODULE_4__["ExampleListComponent"],
                children: [
                    {
                        path: 'wizard',
                        component: _examples_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"],
                        data: {
                            title: 'Wizard',
                            description: 'Additional description for example (optional)',
                            sources: [
                                {
                                    name: 'wizard.component.html',
                                    src: __webpack_require__(/*! raw-loader!./examples/wizard/wizard.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard/wizard.component.html"),
                                    lang: 'markup',
                                },
                                {
                                    name: 'wizard.component.ts',
                                    src: __webpack_require__(/*! raw-loader!./examples/wizard/wizard.component.ts */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard/wizard.component.ts"),
                                    lang: 'ts',
                                },
                                {
                                    name: 'wizard-forms.component.html',
                                    src: __webpack_require__(/*! raw-loader!./examples/wizard-forms/wizard-forms.component.html */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.html"),
                                    lang: 'markup',
                                },
                                {
                                    name: 'wizard-forms.component.ts',
                                    src: __webpack_require__(/*! raw-loader!./examples/wizard-forms/wizard-forms.component.ts */ "../../node_modules/raw-loader/index.js!./src/app/examples/components/wizard/examples/wizard-forms/wizard-forms.component.ts"),
                                    lang: 'ts',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                path: 'api',
                component: _components_example_page_api_list_api_list_component__WEBPACK_IMPORTED_MODULE_5__["ApiListComponent"],
                data: {
                    sources: [
                        __webpack_require__(/*! raw-loader!../../../../../../../lib/src/wizard/wizard.module.ts */ "../../node_modules/raw-loader/index.js!../../lib/src/wizard/wizard.module.ts"),
                    ],
                },
            },
        ],
    },
];
let WizardModule = class WizardModule {
};
WizardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_examples_wizard_forms_wizard_forms_component__WEBPACK_IMPORTED_MODULE_6__["WizardFormsComponent"], _examples_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _lib_src_wizard__WEBPACK_IMPORTED_MODULE_8__["SebWizardModule"],
            _lib_src_button__WEBPACK_IMPORTED_MODULE_9__["SebButtonModule"],
            _lib_src_modal__WEBPACK_IMPORTED_MODULE_10__["SebModalModule"],
        ],
        entryComponents: [_examples_wizard_forms_wizard_forms_component__WEBPACK_IMPORTED_MODULE_6__["WizardFormsComponent"]],
    })
], WizardModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buttons/buttons.module */ "./src/app/examples/components/buttons/buttons.module.ts");
/* harmony import */ var _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/modal.module */ "./src/app/examples/components/modal/modal.module.ts");
/* harmony import */ var _components_wizard_wizard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/wizard/wizard.module */ "./src/app/examples/components/wizard/wizard.module.ts");






let ExamplesModule = class ExamplesModule {
};
ExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _components_buttons_buttons_module__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"], _components_modal_modal_module__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], _components_wizard_wizard_module__WEBPACK_IMPORTED_MODULE_5__["WizardModule"]],
    })
], ExamplesModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    version: (() => {
        let version = '';
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


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
/*!*******************************************!*\
  !*** @microsoft/typescript-etw (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map