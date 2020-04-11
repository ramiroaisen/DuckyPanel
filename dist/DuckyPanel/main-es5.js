function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"(isHandset$ | async) === false && isFullscreen === false\"\n  >\n    <!-- Create all navigation items -->\n    <mat-nav-list>\n      <div class=\"nav-top-part\">\n        <ng-container *ngFor=\"let navCategory of navCategories; first as isFirst\">\n          <!-- Only add divider if not the first category in the list -->\n          <mat-divider *ngIf=\"!isFirst\"></mat-divider>\n          <h3 mat-subheader>{{ navCategory.title }}</h3>\n\n          <ng-container *ngFor=\"let navItem of navCategory.items\">\n            <a\n              mat-list-item\n              *ngIf=\"navItem.routerLink; else href\"\n              (click)=\"closeDrawerConditional()\"\n              [routerLink]=\"navItem.routerLink\"\n            >\n              <mat-icon mat-list-icon>{{ navItem.icon }}</mat-icon>\n              <h4 mat-line>{{ navItem.name }}</h4>\n            </a>\n            <ng-template #href>\n              <a mat-list-item (click)=\"closeDrawerConditional()\" [href]=\"navItem.href\" target=\"_blank\">\n                <mat-icon mat-list-icon>{{ navItem.icon }}</mat-icon>\n                <h4 mat-line>{{ navItem.name }}</h4>\n                <mat-icon class=\"external-link\">launch</mat-icon>\n              </a>\n            </ng-template>\n          </ng-container>\n        </ng-container>\n      </div>\n      <a class=\"profile-link\" mat-list-item (click)=\"closeDrawerConditional()\" routerLink=\"/profile\">\n        <mat-icon mat-list-icon>account_circle</mat-icon>\n        <h4 mat-line>{{profileService.user.username}}</h4>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar *ngIf=\"isFullscreen === false\" color=\"primary\" [ngStyle]=\"{ 'z-index': 100 }\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>{{ title }}</span>\n    </mat-toolbar>\n    <div [class.content]=\"isFullscreen === false\">\n      <router-outlet></router-outlet>\n      <!-- This is where the router will add a component based on the url -->\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/accounts.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/accounts.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountsAccountsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"column\" fxLayoutGap=\"10px\">\n  <mat-card>\n    <mat-card-title>Your Email Accounts</mat-card-title>\n    <mat-card-content\n      >This is an overview of the email accounts you have access to. Here you can also add, edit and delete accounts\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"account-table-card\">\n    <ng-template #loading>\n      <td-loading-mask width=\"100%\" height=\"56px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n    </ng-template>\n\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Filter</mat-label>\n        <input matInput type=\"search\" (keyup)=\"applyFilter($event.target.value)\" />\n      </mat-form-field>\n      <mat-paginator\n        [pageSizeOptions]=\"[10, 25, 50, 100, 200, 300, 400, 500]\"\n        pageSize=\"50\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n    <ng-container *ngIf=\"accountSubscription.closed; else loading\">\n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"name\"> {{ row.name }} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Address </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"address\"> {{ row.address }} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"quotaUsedFormatted\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header arrowPosition=\"before\"> Used </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"quotaUsedFormatted\"> {{ row.quotaUsedFormatted }} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"quotaAllowedFormatted\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Quota </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"quotaAllowedFormatted\">\n            {{ row.quotaAllowedFormatted }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"actions\">\n            <button\n              [routerLink]=\"['/accounts', row.id]\"\n              matTooltip=\"Modify account\"\n              matTooltipPosition=\"left\"\n              matTooltipShowDelay=\"500\"\n              mat-icon-button\n              aria-label=\"Modify account\"\n            >\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button\n              (click)=\"removeConfirmDialog(row.id, row.address)\"\n              matTooltip=\"Remove this account\"\n              matTooltipPosition=\"left\"\n              matTooltipShowDelay=\"500\"\n              mat-icon-button\n              aria-label=\"Remove this account\"\n            >\n              <mat-icon>delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"> </mat-row>\n      </mat-table>\n    </ng-container>\n  </mat-card>\n</div>\n<app-fab-button (click)=\"accountDialog()\" icon=\"add\"></app-fab-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/components/account-dialog/account-dialog.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/components/account-dialog/account-dialog.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountsComponentsAccountDialogAccountDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>{{ isModifyDialog ? 'Modify' : 'New' }} email account</h2>\n<mat-dialog-content>\n  <ng-template #loader>\n    <div class=\"loader-container\" fxLayout=\"column\" fxLayoutGap=\"calc(10px + 1.34375em)\">\n      <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" class=\"row-container\" fxLayoutGap=\"10px\">\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n        <div *ngIf=\"!(isHandset$ | async)\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n          @\n        </div>\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      </div>\n      <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\" class=\"row-container\">\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      </div>\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\" class=\"row-container\">\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n        <td-loading-mask class=\"loading-field\" width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end\">\n        <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n        <td-loading-mask width=\"66px\" height=\"36px\"></td-loading-mask>\n      </div>\n    </div>\n  </ng-template>\n  <ng-container\n    *ngIf=\"\n      (!isModifyDialog && domainsService.domainsSubscription && domainsService.domainsSubscription.closed) ||\n        (accountDetailsSubscription && accountDetailsSubscription.closed);\n      else loader\n    \"\n  >\n  <!-- <ng-container *ngIf=\"false; else loader\"> -->\n    <form [formGroup]=\"accountForm\" id=\"accountForm\" (ngSubmit)=\"updateAccount()\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" />\n      </mat-form-field>\n\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" class=\"row-container\" fxLayoutGap=\"10px\">\n        <mat-form-field appearance=\"fill\" [class.user-input-right]=\"!(isHandset$ | async)\">\n          <mat-label>User</mat-label>\n          <input matInput formControlName=\"addressUser\" [required]=\"isModifyDialog ? null : 'required'\" />\n          <mat-error *ngIf=\"accountForm.controls['addressUser'].hasError('required')\">\n            User is required\n          </mat-error>\n          <mat-error *ngIf=\"accountForm.controls['addressUser'].hasError('AddressUsername')\">\n            Invalid email address format\n          </mat-error>\n        </mat-form-field>\n\n        <div *ngIf=\"!(isHandset$ | async)\" class=\"at-symbol\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n          @\n        </div>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Domain</mat-label>\n          <span *ngIf=\"isHandset$ | async\" matPrefix>@</span>\n          <mat-select formControlName=\"domain\" [required]=\"isModifyDialog ? null : 'required'\">\n            <ng-container *ngFor=\"let domain of domainsService.domainsStrings; let i = index\">\n              <mat-option [value]=\"domain\">{{ domain }}</mat-option>\n            </ng-container>\n          </mat-select>\n          <mat-error *ngIf=\"accountForm.controls['domain'].hasError('required')\">\n            Domain is required\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" formControlName=\"password\" [required]=\"isModifyDialog ? null : 'required'\" />\n        <mat-error *ngIf=\"accountForm.controls['password'].hasError('required')\">\n          Password is required\n        </mat-error>\n        <mat-error *ngIf=\"accountForm.controls['password'].hasError('minlength')\">\n          Password must be at least 8 characters\n        </mat-error>\n      </mat-form-field>\n\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\" class=\"row-container\">\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Spam treshold</mat-label>\n          <input matInput type=\"number\" formControlName=\"spamLevel\" />\n          <mat-hint>0-100</mat-hint>\n          <mat-error\n            *ngIf=\"\n              accountForm.controls['spamLevel'].hasError('min') || accountForm.controls['spamLevel'].hasError('max')\n            \"\n          >\n            Treshold must be between 0-100\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Quota</mat-label>\n          <input matInput type=\"number\" formControlName=\"quota\" />\n          <span matSuffix>MiB</span>\n          <mat-hint *ngIf=\"isModifyDialog\"\n            >Current usage: {{ math.round(accountDetails.limits.quota.used / math.pow(1024, 2)) }}MiB</mat-hint\n          >\n          <mat-error *ngIf=\"accountForm.controls['quota'].hasError('min')\">\n            Quota must be above 0\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Disabled services</mat-label>\n          <mat-select multiple formControlName=\"disabledScopes\">\n            <mat-option value=\"smtp\">SMTP</mat-option>\n            <mat-option value=\"imap\">IMAP</mat-option>\n            <mat-option value=\"pop3\">POP3</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\" class=\"row-container\">\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Send limit</mat-label>\n          <input matInput type=\"number\" formControlName=\"sendLimit\" />\n          <mat-hint *ngIf=\"isModifyDialog\">Current usage: {{ accountDetails.limits.send.used }}</mat-hint>\n          <mat-error\n            *ngIf=\"\n              accountForm.controls['sendLimit'].hasError('min') || accountForm.controls['sendLimit'].hasError('max')\n            \"\n          >\n            Limit must be between 1-300\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Receive limit</mat-label>\n          <input matInput type=\"number\" formControlName=\"receiveLimit\" />\n          <mat-hint *ngIf=\"isModifyDialog\">Current usage: {{ accountDetails.limits.receive.used }}</mat-hint>\n          <mat-error *ngIf=\"accountForm.controls['receiveLimit'].hasError('min')\">\n            Limit must be above 0\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Forward limit</mat-label>\n          <input matInput type=\"number\" formControlName=\"forwardLimit\" />\n          <mat-hint *ngIf=\"isModifyDialog\">Current usage: {{ accountDetails.limits.forward.used }}</mat-hint>\n          <mat-error\n            *ngIf=\"\n              accountForm.controls['forwardLimit'].hasError('min') ||\n              accountForm.controls['forwardLimit'].hasError('max')\n            \"\n          >\n            Limit must be between 1-200\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end\">\n        <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n        <div (click)=\"forceCheckForm()\">\n          <mat-spinner-button [options]=\"saveButtonConfig\"></mat-spinner-button>\n        </div>\n      </div>\n    </form>\n  </ng-container>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dns/dns.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dns/dns.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDnsDnsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Switch to row or column mode depending on mobile or not -->\n<div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\">\n  <ng-template #loading>\n    <mat-spinner diameter=\"50\"></mat-spinner>\n  </ng-template>\n  <mat-card fxFlex=\"30%\" [fxFlexAlign]=\"(isHandset$ | async) ? null : 'start'\">\n    <mat-card-title>DNS records check</mat-card-title>\n    <mat-card-content\n      >Select a domain to view the needed records for it. A check will also be performed to see if you've set the\n      records correctly.</mat-card-content\n    >\n  </mat-card>\n  <div fxFlex=\"70%\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <form\n      *ngIf=\"domainsService.domainsSubscription && domainsService.domainsSubscription.closed; else loading\"\n      [formGroup]=\"domainForm\"\n      id=\"domainForm\"\n    >\n      <mat-form-field appearance=\"fill\" class=\"domain-field\">\n        <mat-label>Domain</mat-label>\n        <mat-select formControlName=\"domain\">\n          <ng-container *ngFor=\"let domain of domainsService.domainsAndAliasesStrings; let i = index\">\n            <mat-option [value]=\"domain\">{{ domain }}</mat-option>\n          </ng-container>\n        </mat-select>\n      </mat-form-field>\n    </form>\n    <ng-container *ngIf=\"selectedDomain\">\n      <ng-container *ngIf=\"dnsCheckSubscription && dnsCheckSubscription.closed; else loading\">\n        <mat-card>\n          <mat-card-title class=\"dns-card-title\">Valid records for {{ selectedDomain }}</mat-card-title>\n          <h5 class=\"table-title\">MX records</h5>\n          <mat-table [dataSource]=\"correctMxDataSource\">\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"name\"> {{ selectedDomain }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"server\">\n              <mat-header-cell *matHeaderCellDef> Mail server </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"server\"> {{ row.exchange }} </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"priority\">\n              <mat-header-cell *matHeaderCellDef> Priority </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"priority\"> {{ row.priority }} </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"correctMxDisplayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: correctMxDisplayedColumns\"></mat-row>\n          </mat-table>\n          <h5 class=\"table-title\">TXT records</h5>\n          <mat-table [dataSource]=\"correctTxtDataSource\">\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"name\">\n                {{\n                  row.isDkim ? dnsCheck.correctValues.dkim.selector + '._domainkey.' + selectedDomain : selectedDomain\n                }}\n              </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"content\">\n              <mat-header-cell *matHeaderCellDef> Content </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\" data-label=\"content\" [class.dkim-content]=\"row.isDkim\">\n                {{ row.content }}\n              </mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"correctTxtDisplayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: correctTxtDisplayedColumns\"> </mat-row>\n          </mat-table>\n        </mat-card>\n        <mat-card>\n          <ng-template #noErrors>\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n              <mat-icon mat-list-icon class=\"success-icon\">check_circle</mat-icon>\n              <mat-card-title class=\"dns-card-title\">DNS config for {{ selectedDomain }} looks valid</mat-card-title>\n            </div>\n          </ng-template>\n\n          <ng-container *ngIf=\"dnsCheck.errors.length !== 0; else noErrors\">\n            <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n              <mat-icon mat-list-icon class=\"error-icon\">error</mat-icon>\n              <mat-card-title class=\"dns-card-title\">Invalid DNS config found for {{ selectedDomain }}</mat-card-title>\n            </div>\n            <mat-table [dataSource]=\"errorDataSource\">\n              <ng-container matColumnDef=\"type\">\n                <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"type\"> {{ row.type }} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"message\">\n                <mat-header-cell *matHeaderCellDef> Error message </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\" data-label=\"message\"> {{ row.message }} </mat-cell>\n              </ng-container>\n              <mat-header-row *matHeaderRowDef=\"errorDisplayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: errorDisplayedColumns\"></mat-row>\n            </mat-table>\n          </ng-container>\n        </mat-card>\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDomainsComponentsAddAliasDialogAddAliasDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Add Alias</h2>\n<mat-dialog-content>\n  <form (ngSubmit)=\"addAlias()\" [formGroup]=\"aliasForm\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Existing domain</mat-label>\n      <mat-select formControlName=\"existingDomain\" required>\n        <ng-container *ngFor=\"let domain of domainsService.domainsStrings; let i = index\">\n          <mat-option [value]=\"domain\">{{ domain }}</mat-option>\n        </ng-container>\n      </mat-select>\n      <mat-error *ngIf=\"aliasForm.controls['existingDomain'].hasError('required')\">\n        Existing domain is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Alias domain</mat-label>\n      <input type=\"text\" matInput formControlName=\"aliasDomain\" required />\n      <mat-error *ngIf=\"aliasForm.controls['aliasDomain'].hasError('pattern')\">\n        Not a valid domain name\n      </mat-error>\n      <mat-error *ngIf=\"aliasForm.controls['aliasDomain'].hasError('required')\">\n        Alias domain is required\n      </mat-error>\n    </mat-form-field>\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end\">\n      <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n      <mat-spinner-button [options]=\"addButtonConfig\"></mat-spinner-button>\n    </div>\n  </form>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDomainsComponentsAddDomainDialogAddDomainDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Add Domain</h2>\n<mat-dialog-content>\n  <form (ngSubmit)=\"addDomain()\">\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Domain</mat-label>\n      <input type=\"text\" matInput required [formControl]=\"domainInput\" />\n      <mat-error *ngIf=\"domainInput.hasError('pattern')\">\n        Not a valid domain name\n      </mat-error>\n    </mat-form-field>\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end\">\n      <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n      <mat-spinner-button [options]=\"addButtonConfig\"></mat-spinner-button>\n    </div>\n  </form>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDomainsComponentsDkimDialogDkimDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>{{ isModifyDialog ? 'Modify' : 'New' }} DKIM for {{ data.domain }}</h2>\n<mat-dialog-content>\n  <form [formGroup]=\"dkimForm\" id=\"dkimForm\" (ngSubmit)=\"updateDkim()\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <ng-template #selectorLoader>\n      <td-loading-mask width=\"100%\" height=\"60px\"></td-loading-mask>\n    </ng-template>\n    <ng-container *ngIf=\"!isModifyDialog || (isModifyDialog && dkimKeySubscription.closed); else selectorLoader\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Selector</mat-label>\n        <input matInput formControlName=\"selector\" required />\n        <mat-hint>{{ dkimForm.controls['selector'].value }}._domainkey.{{ data.domain }}</mat-hint>\n        <mat-error *ngIf=\"dkimForm.controls['selector'].hasError('required')\">\n          Selector is required\n        </mat-error>\n      </mat-form-field>\n    </ng-container>\n    <mat-form-field appearance=\"fill\" class=\"text-area\">\n      <mat-label>Private key</mat-label>\n      <textarea matInput formControlName=\"privateKey\"></textarea>\n      <mat-hint>{{\n        isModifyDialog ? 'Leave empty to keep the same key' : 'Leave empty to generate a new key'\n      }}</mat-hint>\n    </mat-form-field>\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start\">\n        <mat-spinner-button\n          *ngIf=\"isModifyDialog\"\n          (btnClick)=\"disableDialog()\"\n          [options]=\"disableButtonConfig\"\n        ></mat-spinner-button>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end\" fxLayoutGap=\"10px\">\n        <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n        <div (click)=\"forceCheckForm()\">\n          <mat-spinner-button [options]=\"saveButtonConfig\"></mat-spinner-button>\n        </div>\n      </div>\n    </div>\n  </form>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/domains.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/domains.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDomainsDomainsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Switch to row or column mode depending on mobile or not -->\n<div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\">\n  <mat-card fxFlex=\"30%\" [fxFlexAlign]=\"(isHandset$ | async) ? null : 'start'\">\n    <mat-card-title>Your domains</mat-card-title>\n    <mat-card-content>\n      <p>\n        These are the domains you have added to your account. You have access to any accounts and forwarders associated\n        to these domains. Here you can add and delete domains, and manage the DKIM keys for them as well.\n      </p>\n      <p>\n        Do note that when you delete a domain, the accounts will be deleted with it.\n      </p>\n    </mat-card-content>\n  </mat-card>\n  <mat-card fxFlex=\"70%\">\n    <ng-template #loader>\n      <td-loading-mask width=\"100%\" height=\"56px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n    </ng-template>\n    <ng-container *ngIf=\"domainsService.domainsSubscription && domainsService.domainsSubscription.closed; else loader\">\n      <mat-table [dataSource]=\"dataSource\">\n        <ng-container matColumnDef=\"domain\">\n          <mat-header-cell *matHeaderCellDef> Domain </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"domain\">\n            <mat-icon *ngIf=\"!row.admin\">subdirectory_arrow_right</mat-icon> {{ row.domain }}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"actions\">\n            <button\n              [routerLink]=\"['/domains', row.domain, 'dkim', row.dkim ? 'edit' : 'new']\"\n              [matTooltip]=\"row.dkim ? 'Edit DKIM' : 'Add DKIM'\"\n              matTooltipPosition=\"left\"\n              matTooltipShowDelay=\"500\"\n              mat-icon-button\n            >\n              <mat-icon [class.grayed-out]=\"row.dkim\">vpn_key</mat-icon>\n              <mat-icon *ngIf=\"row.dkim\" class=\"overlap-icon\">{{ row.dkim ? 'edit' : 'close' }}</mat-icon>\n            </button>\n            <ng-container *ngIf=\"row.admin; else deleteAlias\">\n              <button\n                (click)=\"removeDomainConfirmDialog(row.domain)\"\n                matTooltip=\"Remove this domain\"\n                matTooltipPosition=\"left\"\n                matTooltipShowDelay=\"500\"\n                mat-icon-button\n              >\n                <mat-icon>delete</mat-icon>\n              </button>\n            </ng-container>\n            <ng-template #deleteAlias>\n              <button\n                (click)=\"removeAliasConfirmDialog(row.aliasOf, row.domain)\"\n                matTooltip=\"Remove this alias\"\n                matTooltipPosition=\"left\"\n                matTooltipShowDelay=\"500\"\n                mat-icon-button\n              >\n                <mat-icon>link_off</mat-icon>\n              </button>\n            </ng-template>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"> </mat-row>\n      </mat-table>\n    </ng-container>\n  </mat-card>\n</div>\n<router-outlet></router-outlet>\n\n<ng-container\n  *ngIf=\"\n    domainsService.domainsSubscription && domainsService.domainsSubscription.closed && dataSource.data.length > 0;\n    else addDomain\n  \"\n>\n  <eco-fab-speed-dial animationMode=\"scale\">\n    <eco-fab-speed-dial-trigger spin=\"true\">\n      <button mat-fab><mat-icon class=\"spin135\">add</mat-icon></button>\n    </eco-fab-speed-dial-trigger>\n\n    <eco-fab-speed-dial-actions>\n      <button mat-mini-fab (click)=\"addDomainDialog()\" matTooltip=\"Add domain\" matTooltipPosition=\"left\">\n        <mat-icon>domain</mat-icon>\n      </button>\n      <button mat-mini-fab (click)=\"addAliasDialog()\" matTooltip=\"Add alias\" matTooltipPosition=\"left\">\n        <mat-icon>link</mat-icon>\n      </button>\n    </eco-fab-speed-dial-actions>\n  </eco-fab-speed-dial>\n</ng-container>\n<ng-template #addDomain>\n  <app-fab-button icon=\"add\" (click)=\"addDomainDialog()\"></app-fab-button>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForwardersComponentsForwarderDialogForwarderDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>{{ isModifyDialog ? 'Modify' : 'New' }} forwarder</h2>\n<mat-dialog-content>\n  <ng-template #loader>\n    <div class=\"loader-container\" fxLayout=\"column\" fxLayoutGap=\"calc(10px + 1.34375em)\">\n      <td-loading-mask width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" class=\"row-container\" fxLayoutGap=\"10px\">\n        <td-loading-mask width=\"100%\" height=\"59.5px\"></td-loading-mask>\n        <div *ngIf=\"!(isHandset$ | async)\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n          @\n        </div>\n        <td-loading-mask width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      </div>\n      <td-loading-mask width=\"100%\" height=\"73.3px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"59.5px\"></td-loading-mask>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end\">\n        <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n        <td-loading-mask width=\"66px\" height=\"36px\"></td-loading-mask>\n      </div>\n    </div>\n  </ng-template>\n  <ng-container\n    *ngIf=\"\n      (!isModifyDialog && domainsService.domainsSubscription && domainsService.domainsSubscription.closed) ||\n        (isModifyDialog &&\n          domainsService.domainsSubscription &&\n          domainsService.domainsSubscription.closed &&\n          forwarderDetailsSubscription &&\n          forwarderDetailsSubscription.closed);\n      else loader\n    \"\n  >\n    <form\n      [formGroup]=\"forwarderForm\"\n      id=\"forwarderForm\"\n      (ngSubmit)=\"updateForwarder()\"\n      fxLayout=\"column\"\n      fxLayoutGap=\"10px\"\n    >\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"name\" />\n      </mat-form-field>\n\n      <div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" class=\"row-container\" fxLayoutGap=\"10px\">\n        <mat-form-field appearance=\"fill\" [class.user-input-right]=\"!(isHandset$ | async)\">\n          <mat-label>User</mat-label>\n          <input matInput formControlName=\"addressUser\" [required]=\"isModifyDialog ? null : 'required'\" />\n          <mat-error *ngIf=\"forwarderForm.controls['addressUser'].hasError('required')\">\n            User is required\n          </mat-error>\n          <mat-error *ngIf=\"forwarderForm.controls['addressUser'].hasError('AddressUsername')\">\n            Invalid email address format\n          </mat-error>\n        </mat-form-field>\n\n        <div *ngIf=\"!(isHandset$ | async)\" class=\"at-symbol\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n          @\n        </div>\n\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Domain</mat-label>\n          <span *ngIf=\"isHandset$ | async\" matPrefix>@</span>\n          <mat-select formControlName=\"domain\" [required]=\"isModifyDialog ? null : 'required'\">\n            <ng-container *ngFor=\"let domain of domainsService.domainsStrings; let i = index\">\n              <mat-option [value]=\"domain\">{{ domain }}</mat-option>\n            </ng-container>\n          </mat-select>\n          <mat-error *ngIf=\"forwarderForm.controls['domain'].hasError('required')\">\n            Domain is required\n          </mat-error>\n        </mat-form-field>\n      </div>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Forwarding targets</mat-label>\n        <mat-chip-list #targetsChipList formControlName=\"newTarget\">\n          <mat-chip\n            *ngFor=\"let forwardTarget of forwardTargets\"\n            selectable=\"false\"\n            removable=\"true\"\n            (removed)=\"removeTarget(forwardTarget)\"\n          >\n            {{ forwardTarget }}\n            <mat-icon matChipRemove>cancel</mat-icon>\n          </mat-chip>\n          <input\n            matInput\n            formControlName=\"newTarget\"\n            [matChipInputFor]=\"targetsChipList\"\n            matChipInputAddOnBlur=\"true\"\n            [matChipInputSeparatorKeyCodes]=\"newTargetSeperators\"\n            (matChipInputTokenEnd)=\"addTarget($event)\"\n          />\n        </mat-chip-list>\n        <mat-error *ngIf=\"forwarderForm.controls['newTarget'].hasError('forwardingTarget')\">\n          Not an email address, smtp address, or http address\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Forward limit</mat-label>\n        <input matInput type=\"number\" formControlName=\"forwardLimit\" />\n        <mat-hint *ngIf=\"isModifyDialog\">Current usage: {{ forwarderDetails.limits.forward.used }}</mat-hint>\n        <mat-error\n          *ngIf=\"\n            forwarderForm.controls['forwardLimit'].hasError('min') ||\n            forwarderForm.controls['forwardLimit'].hasError('max')\n          \"\n        >\n          Limit must be between 1-200\n        </mat-error>\n      </mat-form-field>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end\">\n        <mat-spinner-button (btnClick)=\"dialogRef.close()\" [options]=\"cancelButtonConfig\"></mat-spinner-button>\n        <div (click)=\"forceCheckForm()\">\n          <mat-spinner-button [options]=\"saveButtonConfig\"></mat-spinner-button>\n        </div>\n      </div>\n    </form>\n  </ng-container>\n</mat-dialog-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forwarders/forwarders.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forwarders/forwarders.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForwardersForwardersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Switch to row or column mode depending on mobile or not -->\n<div [fxLayout]=\"(isHandset$ | async) ? 'column' : 'row'\" fxLayoutGap=\"10px\">\n  <mat-card fxFlex=\"30%\" [fxFlexAlign]=\"(isHandset$ | async) ? null : 'start'\">\n    <mat-card-title>Your forwarders</mat-card-title>\n    <mat-card-content\n      >Here you can manage your forwarders. You can forward to any email address, smtp server, or HTTP server (POST\n      request).</mat-card-content\n    >\n  </mat-card>\n  <mat-card fxFlex=\"70%\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Filter</mat-label>\n        <input matInput type=\"search\" (keyup)=\"applyFilter($event.target.value)\" />\n      </mat-form-field>\n      <mat-paginator\n        [pageSizeOptions]=\"[10, 25, 50, 100, 200, 300, 400, 500]\"\n        pageSize=\"50\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n    <ng-template #loader>\n      <td-loading-mask width=\"100%\" height=\"56px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n      <td-loading-mask width=\"100%\" height=\"48px\"></td-loading-mask>\n    </ng-template>\n    <ng-container *ngIf=\"forwarderSubscription.closed; else loader\">\n      <mat-table [dataSource]=\"dataSource\" matSort>\n        <ng-container matColumnDef=\"address\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Forward address </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"address\"> {{ row.address }} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" data-label=\"actions\">\n            <button\n              [routerLink]=\"['/forwarders', row.id]\"\n              matTooltip=\"Modify forwarder\"\n              matTooltipPosition=\"left\"\n              matTooltipShowDelay=\"500\"\n              mat-icon-button\n              aria-label=\"Modify forwarder\"\n            >\n              <mat-icon>edit</mat-icon>\n            </button>\n            <button\n              (click)=\"removeConfirmDialog(row.id, row.address)\"\n              matTooltip=\"Remove forwarder\"\n              matTooltipPosition=\"left\"\n              matTooltipShowDelay=\"500\"\n              mat-icon-button\n              aria-label=\"Remove forwarder\"\n            >\n              <mat-icon>delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"> </mat-row>\n      </mat-table>\n    </ng-container>\n  </mat-card>\n</div>\n<app-fab-button icon=\"add\" (click)=\"forwarderDialog()\"></app-fab-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"layout-center\" [class.is-handset]=\"isHandset$ | async\">\n  <mat-card [class.is-handset]=\"isHandset$ | async\">\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Username</mat-label>\n            <input type=\"text\" matInput formControlName=\"username\" required />\n            <mat-error *ngIf=\"loginForm.controls['username'].hasError('required')\">\n              Username is required\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Password</mat-label>\n            <input type=\"password\" matInput formControlName=\"password\" required />\n            <mat-error *ngIf=\"loginForm.controls['password'].hasError('required')\">\n              Password is required\n            </mat-error>\n          </mat-form-field>\n        </div>\n\n        <div align=\"end\">\n          <mat-spinner-button type=\"submit\" [options]=\"loginButtonConfig\"></mat-spinner-button>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"single-column-content\">\n  <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <mat-card>\n      <mat-card-title>{{ profileService.user.username }}</mat-card-title>\n      <mat-card-content>\n        <p>\n          You are logged in as {{ profileService.user.username }}, you've got access to {{ quota.formatted }} of\n          storage.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button (click)=\"logout()\" mat-button color=\"warn\">LOG OUT</button>\n        <button (click)=\"logoutAllDialog()\" mat-button color=\"warn\">LOG OUT FROM ALL DEVICES</button>\n      </mat-card-actions>\n    </mat-card>\n    <mat-card>\n      <mat-card-title>Storage used</mat-card-title>\n      <mat-card-content>\n        <p>Currently using {{ usage.bytes / quota.bytes | percent: '1.0-2' }} of storage.</p>\n        <div fxLayout=\"row\" fxLayoutGap=\"10px\">\n          <mat-progress-bar\n            fxFlexAlign=\"center\"\n            [mode]=\"calculateStorageSubscription && calculateStorageSubscription.closed ? 'determinate' : 'query'\"\n            value=\"{{ (usage.bytes / quota.bytes) * 100 | number: '1.0-2' }}\"\n          ></mat-progress-bar>\n          <p class=\"usage-text\">{{ usage.formatted }}/{{ quota.formatted }}</p>\n        </div>\n      </mat-card-content>\n    </mat-card>\n    <mat-card>\n      <mat-card-title>Change username/password</mat-card-title>\n      <mat-card-content>\n        <form [formGroup]=\"loginDetailsForm\" (ngSubmit)=\"changeLoginDetails()\">\n          <div fxLayout=\"column\" fxLayoutGap=\"10px\">\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Username</mat-label>\n              <input type=\"text\" matInput formControlName=\"username\" />\n              <mat-error *ngIf=\"loginDetailsForm.controls['username'].hasError('isAscii')\">\n                Username can only contain ASCII characters\n              </mat-error>\n              <mat-error *ngIf=\"loginDetailsForm.controls['username'].hasError('notContains')\">\n                Username can not contain spaces\n              </mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n              <mat-label>Password</mat-label>\n              <input type=\"password\" matInput formControlName=\"password\" />\n              <mat-error *ngIf=\"loginDetailsForm.controls['password'].hasError('required')\">\n                Password is required\n              </mat-error>\n            </mat-form-field>\n          </div>\n\n          <div align=\"end\">\n            <mat-spinner-button type=\"submit\" [options]=\"loginDetailsButtonConfig\"></mat-spinner-button>\n          </div>\n        </form>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog/dialog.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog/dialog.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>{{ data.title }}</h2>\n<mat-dialog-content>\n  {{ data.text }}\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <ng-container *ngFor=\"let button of data.buttons\">\n    <mat-spinner-button\n      (btnClick)=\"button.callback ? button.callback(dialogRef) : dialogRef.close()\"\n      [options]=\"button.options\"\n    ></mat-spinner-button>\n  </ng-container>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/error-snackbar/error-snackbar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/error-snackbar/error-snackbar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsErrorSnackbarErrorSnackbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n  <span>{{ message }}</span>\n  <div *ngIf=\"errorDetails\" class=\"action\">\n    <button mat-button (click)=\"showDetails()\" color='accent'>Details</button>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/fab-button/fab-button.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/fab-button/fab-button.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFabButtonFabButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-fab>\n  <mat-icon>{{ icon }}</mat-icon>\n</button>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/accounts/accounts.component */
    "./src/app/pages/accounts/accounts.component.ts");
    /* harmony import */


    var _pages_dns_dns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/dns/dns.component */
    "./src/app/pages/dns/dns.component.ts");
    /* harmony import */


    var _pages_domains_components_dkim_dialog_dkim_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/domains/components/dkim-dialog/dkim-dialog.component */
    "./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.ts");
    /* harmony import */


    var _pages_domains_domains_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/domains/domains.component */
    "./src/app/pages/domains/domains.component.ts");
    /* harmony import */


    var _pages_forwarders_forwarders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/forwarders/forwarders.component */
    "./src/app/pages/forwarders/forwarders.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");

    var routes = [{
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
      data: {
        isFullscreen: true
      }
    }, {
      path: 'domains',
      component: _pages_domains_domains_component__WEBPACK_IMPORTED_MODULE_6__["DomainsComponent"],
      data: {
        title: 'Domains'
      },
      children: [{
        path: ':domain/dkim/:action',
        component: _pages_domains_components_dkim_dialog_dkim_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DkimDialogEntryComponent"]
      }]
    }, {
      path: 'accounts',
      redirectTo: 'accounts/'
    }, {
      path: 'accounts/:id',
      component: _pages_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_3__["AccountsComponent"],
      data: {
        title: 'Email Accounts'
      }
    }, {
      path: 'forwarders',
      redirectTo: 'forwarders/'
    }, {
      path: 'forwarders/:id',
      component: _pages_forwarders_forwarders_component__WEBPACK_IMPORTED_MODULE_7__["ForwardersComponent"],
      data: {
        title: 'Forwarders'
      }
    }, {
      path: 'dns',
      component: _pages_dns_dns_component__WEBPACK_IMPORTED_MODULE_4__["DnsComponent"],
      data: {
        title: 'DNS Check'
      }
    }, {
      path: 'profile',
      component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
      data: {
        title: 'Profile'
      }
    }, {
      path: '**',
      redirectTo: 'accounts/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 275px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.content {\n  margin: auto;\n  padding: 20px;\n  max-width: 1200px;\n}\n\n.external-link {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: grey;\n}\n\n.nav-top-part {\n  margin-bottom: 70px;\n}\n\n.profile-link.mat-list-item.mat-list-item-with-avatar {\n  height: 70px;\n  background-color: white;\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNzVweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi5leHRlcm5hbC1saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm5hdi10b3AtcGFydCB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5wcm9maWxlLWxpbmsubWF0LWxpc3QtaXRlbS5tYXQtbGlzdC1pdGVtLXdpdGgtYXZhdGFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59IiwiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyNzVweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG59XG5cbi5leHRlcm5hbC1saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogZ3JleTtcbn1cblxuLm5hdi10b3AtcGFydCB7XG4gIG1hcmdpbi1ib3R0b206IDcwcHg7XG59XG5cbi5wcm9maWxlLWxpbmsubWF0LWxpc3QtaXRlbS5tYXQtbGlzdC1pdGVtLXdpdGgtYXZhdGFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _pages_domains_domains_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/domains/domains.service */
    "./src/app/pages/domains/domains.service.ts");
    /* harmony import */


    var _pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/profile/profile.service */
    "./src/app/pages/profile/profile.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(breakpointObserver, router, profileService, domainsService) {
        _classCallCheck(this, AppComponent);

        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.profileService = profileService;
        this.domainsService = domainsService;
        this.title = 'DuckyPanel';
        this.navCategories = [{
          title: 'General',
          items: [{
            name: 'Dashboard',
            icon: 'dashboard',
            routerLink: '/'
          }]
        }, {
          title: 'Account management',
          items: [{
            name: 'Domains',
            icon: 'domain',
            routerLink: '/domains'
          }, {
            name: 'Email Accounts',
            icon: 'email',
            routerLink: '/accounts'
          }, {
            name: 'Forwarders',
            icon: 'send',
            routerLink: '/forwarders/'
          }]
        }, {
          title: 'Help',
          items: [{
            name: 'DNS records',
            icon: 'dns',
            routerLink: '/dns'
          }]
        }];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
          return result.matches;
        }));
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.profileService.getUserInfo();
          this.domainsService.getDomains();
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RoutesRecognized"] && event.state.root.firstChild) {
              _this.isFullscreen = event.state.root.firstChild.data.isFullscreen ? true : false;
              _this.title = event.state.root.firstChild.data.title ? event.state.root.firstChild.data.title : 'DuckyPanel';
            }
          });
        }
      }, {
        key: "closeDrawerConditional",
        value: function closeDrawerConditional() {
          var _this2 = this;

          this.isHandset$.subscribe(function (isHandset$) {
            if (isHandset$) {
              _this2.drawer.close();
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _pages_profile_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
      }, {
        type: _pages_domains_domains_service__WEBPACK_IMPORTED_MODULE_5__["DomainsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('drawer', {
      static: true
    })], AppComponent.prototype, "drawer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: apiConfigFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "apiConfigFactory", function () {
      return apiConfigFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _covalent_experimental_loading_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @covalent/experimental/loading-mask */
    "./node_modules/@covalent/experimental/fesm2015/covalent-experimental-loading-mask.js");
    /* harmony import */


    var _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ecodev/fab-speed-dial */
    "./node_modules/@ecodev/fab-speed-dial/fesm2015/ecodev-fab-speed-dial.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! mat-progress-buttons */
    "./node_modules/mat-progress-buttons/esm2015/mat-progress-buttons.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/accounts/accounts.component */
    "./src/app/pages/accounts/accounts.component.ts");
    /* harmony import */


    var _pages_accounts_components_account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/accounts/components/account-dialog/account-dialog.component */
    "./src/app/pages/accounts/components/account-dialog/account-dialog.component.ts");
    /* harmony import */


    var _pages_dns_dns_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/dns/dns.component */
    "./src/app/pages/dns/dns.component.ts");
    /* harmony import */


    var _pages_domains_components_add_alias_dialog_add_alias_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/domains/components/add-alias-dialog/add-alias-dialog.component */
    "./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.ts");
    /* harmony import */


    var _pages_domains_components_add_domain_dialog_add_domain_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/domains/components/add-domain-dialog/add-domain-dialog.component */
    "./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.ts");
    /* harmony import */


    var _pages_domains_components_dkim_dialog_dkim_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/domains/components/dkim-dialog/dkim-dialog.component */
    "./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.ts");
    /* harmony import */


    var _pages_domains_domains_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/domains/domains.component */
    "./src/app/pages/domains/domains.component.ts");
    /* harmony import */


    var _pages_forwarders_components_forwarder_dialog_forwarder_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/forwarders/components/forwarder-dialog/forwarder-dialog.component */
    "./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.ts");
    /* harmony import */


    var _pages_forwarders_forwarders_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/forwarders/forwarders.component */
    "./src/app/pages/forwarders/forwarders.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/profile/profile.component */
    "./src/app/pages/profile/profile.component.ts");
    /* harmony import */


    var _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var _shared_components_error_snackbar_error_snackbar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./shared/components/error-snackbar/error-snackbar.component */
    "./src/app/shared/components/error-snackbar/error-snackbar.component.ts");
    /* harmony import */


    var _shared_components_fab_button_fab_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./shared/components/fab-button/fab-button.component */
    "./src/app/shared/components/fab-button/fab-button.component.ts"); // TODO: take these values from a config file or envvar


    function apiConfigFactory() {
      var accessToken = localStorage.getItem('access_token');
      var params = {
        basePath: 'http://localhost:3000',
        accessToken: accessToken
      };
      return new ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_12__["Configuration"](params);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      entryComponents: [_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DialogComponent"], _pages_accounts_components_account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AccountDialogComponent"], _pages_domains_components_add_domain_dialog_add_domain_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AddDomainDialogComponent"], _pages_domains_components_add_alias_dialog_add_alias_dialog_component__WEBPACK_IMPORTED_MODULE_19__["AddAliasDialogComponent"], _shared_components_error_snackbar_error_snackbar_component__WEBPACK_IMPORTED_MODULE_28__["ErrorSnackbarComponent"], _pages_forwarders_components_forwarder_dialog_forwarder_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ForwarderDialogComponent"], _pages_domains_components_dkim_dialog_dkim_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DkimDialogComponent"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _pages_domains_domains_component__WEBPACK_IMPORTED_MODULE_22__["DomainsComponent"], _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_27__["DialogComponent"], _pages_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__["AccountsComponent"], _shared_components_fab_button_fab_button_component__WEBPACK_IMPORTED_MODULE_29__["FabButtonComponent"], _pages_accounts_components_account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_17__["AccountDialogComponent"], _pages_domains_components_add_domain_dialog_add_domain_dialog_component__WEBPACK_IMPORTED_MODULE_20__["AddDomainDialogComponent"], _pages_domains_components_add_alias_dialog_add_alias_dialog_component__WEBPACK_IMPORTED_MODULE_19__["AddAliasDialogComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"], _shared_components_error_snackbar_error_snackbar_component__WEBPACK_IMPORTED_MODULE_28__["ErrorSnackbarComponent"], _pages_forwarders_forwarders_component__WEBPACK_IMPORTED_MODULE_24__["ForwardersComponent"], _pages_forwarders_components_forwarder_dialog_forwarder_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ForwarderDialogComponent"], _pages_domains_components_dkim_dialog_dkim_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DkimDialogComponent"], _pages_domains_components_dkim_dialog_dkim_dialog_component__WEBPACK_IMPORTED_MODULE_21__["DkimDialogEntryComponent"], _pages_dns_dns_component__WEBPACK_IMPORTED_MODULE_18__["DnsComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"], ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_12__["ApiModule"].forRoot(apiConfigFactory), mat_progress_buttons__WEBPACK_IMPORTED_MODULE_13__["MatProgressButtonsModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"], _ecodev_fab_speed_dial__WEBPACK_IMPORTED_MODULE_11__["EcoFabSpeedDialModule"], _covalent_experimental_loading_mask__WEBPACK_IMPORTED_MODULE_10__["TdLoadingMaskModule"]],
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
        useValue: {
          duration: 5000
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/accounts/accounts.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/accounts/accounts.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountsAccountsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-actions {\n  -webkit-box-flex: 0;\n          flex: 0 0 80px;\n}\n\n.mat-column-actions.mat-header-cell {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.mat-column-quotaUsedFormatted {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  padding-right: 15px;\n}\n\nmat-table {\n  min-width: 650px;\n}\n\n.account-table-card {\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.account-table-card::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2FjY291bnRzL2FjY291bnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0FGOztBRElBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0RGOztBREtBO0VBQ0UsOEJBQUE7RUFBQSw4QkFBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNIRjs7QURNQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFsaWduIGFjdGlvbnMgY29sdW1uIHRvIHRoZSByaWdodFxuLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufVxuXG4vLyBBbGlnbiBhY3Rpb25zIGNvbHVtbiBjZW50ZXJcbi5tYXQtY29sdW1uLWFjdGlvbnMubWF0LWhlYWRlci1jZWxsIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8vIEFsaWduIHVzZWQgY29sdW1uIHRvIGJlIHJpZ2h0IG5leHQgdG8gcXVvdGEgY29sdW1uXG4ubWF0LWNvbHVtbi1xdW90YVVzZWRGb3JtYXR0ZWQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi8vIERvbid0IGxldCB0aGUgdGFibGUgZ2V0IHRvbyBuYXJyb3cgYW5kIGhpZGUgc2Nyb2xsYmFyXG5tYXQtdGFibGUge1xuICBtaW4td2lkdGg6IDY1MHB4O1xufVxuXG4uYWNjb3VudC10YWJsZS1jYXJkIHtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbn1cblxuLmFjY291bnQtdGFibGUtY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuIiwiLm1hdC1jb2x1bW4tYWN0aW9ucyB7XG4gIGZsZXg6IDAgMCA4MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1hY3Rpb25zLm1hdC1oZWFkZXItY2VsbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWNvbHVtbi1xdW90YVVzZWRGb3JtYXR0ZWQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbm1hdC10YWJsZSB7XG4gIG1pbi13aWR0aDogNjUwcHg7XG59XG5cbi5hY2NvdW50LXRhYmxlLWNhcmQge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xufVxuXG4uYWNjb3VudC10YWJsZS1jYXJkOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/accounts/accounts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/accounts/accounts.component.ts ***!
    \******************************************************/

  /*! exports provided: AccountsComponent */

  /***/
  function srcAppPagesAccountsAccountsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountsComponent", function () {
      return AccountsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var src_app_shared_functions_formatBytes_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/functions/formatBytes.function */
    "./src/app/shared/functions/formatBytes.function.ts");
    /* harmony import */


    var _components_account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/account-dialog/account-dialog.component */
    "./src/app/pages/accounts/components/account-dialog/account-dialog.component.ts");

    var AccountsComponent =
    /*#__PURE__*/
    function () {
      function AccountsComponent(dialog, accountsService, router, activatedRoute, snackBar, errorSnackbarService) {
        _classCallCheck(this, AccountsComponent);

        this.dialog = dialog;
        this.accountsService = accountsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.displayedColumns = ['address', 'name', 'quotaUsedFormatted', 'quotaAllowedFormatted', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
      }

      _createClass(AccountsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.getAccounts();
          this.dataSource.paginator = this.paginator;
          this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
              _this3.accountDialog(params['id']);
            }
          });
        }
      }, {
        key: "getAccounts",
        value: function getAccounts() {
          var _this4 = this;

          this.accountSubscription = this.accountsService.getAccounts().subscribe(function (accounts) {
            var accountsFormatted = accounts; // Convert quota bytes to human readable

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = accountsFormatted[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var accountFormatted = _step.value;
                accountFormatted.quotaAllowedFormatted = Object(src_app_shared_functions_formatBytes_function__WEBPACK_IMPORTED_MODULE_7__["formatBytes"])(accountFormatted.quota.allowed);
                accountFormatted.quotaUsedFormatted = Object(src_app_shared_functions_formatBytes_function__WEBPACK_IMPORTED_MODULE_7__["formatBytes"])(accountFormatted.quota.used);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            _this4.dataSource.data = accountsFormatted;

            _this4.dataSource.sortingDataAccessor = function (item, property) {
              // Sort the number of bytes instead of the formatted string
              switch (property) {
                case 'quotaUsedFormatted':
                  return item.quota.used;

                case 'quotaAllowedFormatted':
                  return item.quota.allowed;

                default:
                  return item[property];
              }
            };
          }, function (error) {
            _this4.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "accountDialog",
        value: function accountDialog(id) {
          var _this5 = this;

          var dialogConfig = {};

          if (id) {
            dialogConfig.data = {
              id: id
            };
          }

          var dialog = this.dialog.open(_components_account_dialog_account_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AccountDialogComponent"], dialogConfig);
          dialog.afterClosed().subscribe(function (result) {
            _this5.router.navigateByUrl('/accounts/');

            if (result) {
              _this5.getAccounts();
            }
          });
        }
      }, {
        key: "removeConfirmDialog",
        value: function removeConfirmDialog(accountId, address) {
          var _this6 = this;

          var dialogConfig = {
            data: {
              title: "Remove ".concat(address || accountId),
              text: 'Are you sure? This will delete all messages in this account.',
              buttons: [{
                options: {
                  active: false,
                  text: 'NO'
                }
              }, {
                options: {
                  active: false,
                  text: 'YES',
                  buttonColor: 'warn',
                  spinnerSize: 18,
                  mode: 'indeterminate'
                },
                callback: function callback(dialogRef) {
                  dialogRef.disableClose = true;
                  dialogConfig.data.buttons[0].options.disabled = true;
                  dialogConfig.data.buttons[1].options.active = true;

                  _this6.accountsService.deleteAccount(accountId).subscribe(function () {
                    dialogRef.close();

                    _this6.snackBar.open("".concat(address || accountId, " has been removed"), undefined, {
                      panelClass: 'success-snackbar'
                    });

                    _this6.getAccounts();
                  }, function (error) {
                    dialogRef.disableClose = false;
                    dialogConfig.data.buttons[0].options.disabled = false;
                    dialogConfig.data.buttons[1].options.active = false;

                    _this6.errorSnackbarService.open(error);
                  });
                }
              }]
            }
          };
          this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], dialogConfig);
        }
      }, {
        key: "content",
        set: function set(sort) {
          // Needed because of the ngif wrapper around the table
          if (this.dataSource) {
            this.dataSource.sort = sort;
          }
        }
      }]);

      return AccountsComponent;
    }();

    AccountsComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_4__["EmailAccountsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["ErrorSnackbarService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      static: false
    })], AccountsComponent.prototype, "content", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], AccountsComponent.prototype, "paginator", void 0);
    AccountsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accounts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accounts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/accounts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accounts.component.scss */
      "./src/app/pages/accounts/accounts.component.scss")).default]
    })], AccountsComponent);
    /***/
  },

  /***/
  "./src/app/pages/accounts/components/account-dialog/account-dialog.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/accounts/components/account-dialog/account-dialog.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountsComponentsAccountDialogAccountDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row-container > mat-form-field {\n  min-width: 0;\n  width: 100%;\n}\n\n.user-input-right {\n  text-align: right;\n}\n\n.at-symbol {\n  padding-bottom: 1.34375em;\n}\n\n.loader-container {\n  width: 80vw;\n  margin: 0 -24px;\n  padding: 0 24px;\n  box-sizing: border-box;\n  max-width: 707.81px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2FjY291bnRzL2NvbXBvbmVudHMvYWNjb3VudC1kaWFsb2cvYWNjb3VudC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnRzL2NvbXBvbmVudHMvYWNjb3VudC1kaWFsb2cvYWNjb3VudC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50cy9jb21wb25lbnRzL2FjY291bnQtZGlhbG9nL2FjY291bnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLWlucHV0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hdC1zeW1ib2wge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG4ubG9hZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXJnaW46IDAgLTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA3MDcuODFweDsgLy8gV2lkdGggb2YgdGhlIGVudGlyZSBmb3JtLiBTb3JyeSBmb3IgdGhlIG1hZ2ljIG51bWJlciwgSSBjb3VsZG4ndCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdG8gdGhpcyB2YWx1ZSBvdGhlcndpc2Vcbn0iLCIucm93LWNvbnRhaW5lciA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgbWluLXdpZHRoOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItaW5wdXQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmF0LXN5bWJvbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5sb2FkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbjogMCAtMjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDcwNy44MXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/accounts/components/account-dialog/account-dialog.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/accounts/components/account-dialog/account-dialog.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AccountDialogComponent */

  /***/
  function srcAppPagesAccountsComponentsAccountDialogAccountDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountDialogComponent", function () {
      return AccountDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_pages_domains_domains_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pages/domains/domains.service */
    "./src/app/pages/domains/domains.service.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var src_app_shared_validators_address_username_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/validators/address-username-validator.directive */
    "./src/app/shared/validators/address-username-validator.directive.ts");

    var AccountDialogComponent =
    /*#__PURE__*/
    function () {
      function AccountDialogComponent(dialogRef, breakpointObserver, domainsService, emailAccountsService, snackBar, errorSnackbarService, data) {
        _classCallCheck(this, AccountDialogComponent);

        this.dialogRef = dialogRef;
        this.breakpointObserver = breakpointObserver;
        this.domainsService = domainsService;
        this.emailAccountsService = emailAccountsService;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.data = data;
        this.math = Math;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
          return result.matches;
        }));
        this.accountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
          spamLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](50, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]),
          disabledScopes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
          addressUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, Object(src_app_shared_validators_address_username_validator_directive__WEBPACK_IMPORTED_MODULE_9__["AddressUsernameValidator"])()),
          domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)),
          quota: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)),
          sendLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(300)]),
          receiveLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)),
          forwardLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(200)])
        });
        this.saveButtonConfig = {
          active: false,
          text: 'SAVE',
          disabled: true,
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
        this.cancelButtonConfig = {
          active: false,
          type: 'button',
          text: 'CANCEL'
        };
      }

      _createClass(AccountDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.accountForm.valueChanges.subscribe(function () {
            _this7.saveButtonConfig.disabled = _this7.accountForm.invalid || _this7.accountForm.pristine;
          }); // If id was passed this is a modify dialog, otherwise it is a create dialog

          if (this.data) {
            this.isModifyDialog = true;
            this.getAccount();
          }
        }
      }, {
        key: "forceCheckForm",
        value: function forceCheckForm() {
          if (this.accountForm.invalid) {
            this.accountForm.markAllAsTouched();
          }
        }
      }, {
        key: "getAccount",
        value: function getAccount() {
          var _this8 = this;

          this.accountForm.controls['addressUser'].disable();
          this.accountForm.controls['domain'].disable();
          this.accountDetailsSubscription = this.emailAccountsService.getAccountDetails(this.data.id).subscribe(function (account) {
            _this8.accountDetails = account; // Split address to name and domain for split input

            var addressUser = _this8.accountDetails.address.substring(0, _this8.accountDetails.address.lastIndexOf('@'));

            _this8.accountForm.setValue({
              name: account.name,
              spamLevel: account.spamLevel,
              disabledScopes: account.disabledScopes,
              addressUser: addressUser,
              domain: _this8.accountDetails.address.substring(_this8.accountDetails.address.lastIndexOf('@') + 1),
              password: null,
              quota: Math.round(account.limits.quota.allowed / Math.pow(1024, 2)),
              sendLimit: account.limits.send.allowed,
              receiveLimit: account.limits.receive.allowed,
              forwardLimit: account.limits.forward.allowed
            });
          }, function (error) {
            _this8.dialogRef.close();

            _this8.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "updateAccount",
        value: function updateAccount() {
          var _this9 = this;

          this.dialogRef.disableClose = true;
          this.cancelButtonConfig.disabled = true;
          this.saveButtonConfig.active = true;
          var dirtyValues = {};

          for (var key in this.accountForm.controls) {
            var value = this.accountForm.controls[key].value;

            if (this.accountForm.controls[key].dirty && value !== null && value !== '') {
              dirtyValues[key] = value;
            }
          }

          var account = {
            name: dirtyValues.name,
            spamLevel: dirtyValues.spamLevel,
            disabledScopes: dirtyValues.disabledScopes,
            address: dirtyValues.addressUser ? "".concat(dirtyValues.addressUser, "@").concat(dirtyValues.domain) : undefined,
            password: dirtyValues.password,
            limits: {
              quota: dirtyValues.quota ? dirtyValues.quota * Math.pow(1024, 2) : undefined,
              send: dirtyValues.sendLimit,
              receive: dirtyValues.receiveLimit,
              forward: dirtyValues.forwardLimit
            }
          };

          var onError = function onError(error) {
            _this9.dialogRef.disableClose = false;
            _this9.cancelButtonConfig.disabled = false;
            _this9.saveButtonConfig.active = false;

            _this9.errorSnackbarService.open(error);
          };

          if (this.isModifyDialog) {
            var address = "".concat(this.accountForm.controls['addressUser'].value, "@").concat(this.accountForm.controls['domain'].value);
            delete account.address;
            this.emailAccountsService.updateAccount(this.data.id, account).subscribe(function () {
              _this9.snackBar.open("".concat(address, " successfully updated"), undefined, {
                panelClass: 'success-snackbar'
              });

              _this9.dialogRef.close(true);
            }, onError);
          } else {
            this.emailAccountsService.createAccount(account).subscribe(function () {
              _this9.snackBar.open("".concat(account.address, " successfully added"), undefined, {
                panelClass: 'success-snackbar'
              });

              _this9.dialogRef.close(true);
            }, onError);
          }
        }
      }]);

      return AccountDialogComponent;
    }();

    AccountDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
      }, {
        type: src_app_pages_domains_domains_service__WEBPACK_IMPORTED_MODULE_7__["DomainsService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["EmailAccountsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["ErrorSnackbarService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AccountDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-account-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accounts/components/account-dialog/account-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-dialog.component.scss */
      "./src/app/pages/accounts/components/account-dialog/account-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))], AccountDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/dns/dns.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/dns/dns.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDnsDnsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".domain-field {\n  width: 100%;\n}\n\n.dns-card-title {\n  margin-bottom: 0;\n}\n\n.table-title {\n  margin-bottom: 0;\n}\n\n.dkim-content {\n  word-break: break-all;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.success-icon {\n  color: green;\n}\n\n.error-icon {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2Rucy9kbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rucy9kbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG5zL2Rucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb21haW4tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRucy1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhYmxlLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmRraW0tY29udGVudCB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uc3VjY2Vzcy1pY29uIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZXJyb3ItaWNvbiB7XG4gIGNvbG9yOiByZWQ7XG59IiwiLmRvbWFpbi1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZG5zLWNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGFibGUtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZGtpbS1jb250ZW50IHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5zdWNjZXNzLWljb24ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5lcnJvci1pY29uIHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/dns/dns.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/dns/dns.component.ts ***!
    \********************************************/

  /*! exports provided: DnsComponent */

  /***/
  function srcAppPagesDnsDnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DnsComponent", function () {
      return DnsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var _domains_domains_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../domains/domains.service */
    "./src/app/pages/domains/domains.service.ts");

    var DnsComponent =
    /*#__PURE__*/
    function () {
      function DnsComponent(breakpointObserver, apiDomainsService, domainsService, errorSnackbarService) {
        _classCallCheck(this, DnsComponent);

        this.breakpointObserver = breakpointObserver;
        this.apiDomainsService = apiDomainsService;
        this.domainsService = domainsService;
        this.errorSnackbarService = errorSnackbarService;
        this.correctMxDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.correctMxDisplayedColumns = ['name', 'server', 'priority'];
        this.correctTxtDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.correctTxtDisplayedColumns = ['name', 'content'];
        this.errorDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.errorDisplayedColumns = ['type', 'message'];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
          return result.matches;
        }));
        this.domainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null)
        });
      }

      _createClass(DnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.domainForm.controls['domain'].valueChanges.subscribe(function (value) {
            _this10.selectedDomain = value;

            _this10.checkDNS(value);
          });
        }
      }, {
        key: "checkDNS",
        value: function checkDNS(domain) {
          var _this11 = this;

          this.dnsCheckSubscription = this.apiDomainsService.checkDNS(domain).subscribe(function (dnsCheck) {
            _this11.dnsCheck = dnsCheck;
            _this11.errorDataSource.data = dnsCheck.errors;
            _this11.correctMxDataSource.data = dnsCheck.correctValues.mx;
            _this11.correctTxtDataSource.data = [];

            _this11.correctTxtDataSource.data.push({
              content: dnsCheck.correctValues.spf
            });

            if (dnsCheck.correctValues.dkim) {
              _this11.correctTxtDataSource.data.push({
                content: dnsCheck.correctValues.dkim.value,
                isDkim: true
              });
            }
          }, function (error) {
            _this11.errorSnackbarService.open(error);
          });
        }
      }]);

      return DnsComponent;
    }();

    DnsComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["DomainsService"]
      }, {
        type: _domains_domains_service__WEBPACK_IMPORTED_MODULE_8__["DomainsService"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["ErrorSnackbarService"]
      }];
    };

    DnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-dns',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dns.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dns/dns.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dns.component.scss */
      "./src/app/pages/dns/dns.component.scss")).default]
    })], DnsComponent);
    /***/
  },

  /***/
  "./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDomainsComponentsAddAliasDialogAddAliasDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvbWFpbnMvY29tcG9uZW50cy9hZGQtYWxpYXMtZGlhbG9nL2FkZC1hbGlhcy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AddAliasDialogComponent */

  /***/
  function srcAppPagesDomainsComponentsAddAliasDialogAddAliasDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAliasDialogComponent", function () {
      return AddAliasDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var _domains_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../domains.service */
    "./src/app/pages/domains/domains.service.ts");

    var AddAliasDialogComponent =
    /*#__PURE__*/
    function () {
      function AddAliasDialogComponent(dialogRef, apiDomainsService, domainsService, snackBar, errorSnackbarService, data) {
        _classCallCheck(this, AddAliasDialogComponent);

        this.dialogRef = dialogRef;
        this.apiDomainsService = apiDomainsService;
        this.domainsService = domainsService;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.data = data;
        this.cancelButtonConfig = {
          active: false,
          type: 'button',
          text: 'CANCEL'
        };
        this.addButtonConfig = {
          active: false,
          disabled: true,
          text: 'ADD',
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
        this.aliasForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          existingDomain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
          aliasDomain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\\.)+[a-zA-Z]{2,63}$)')))
        });
      }

      _createClass(AddAliasDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.aliasForm.valueChanges.subscribe(function () {
            if (_this12.domainsService.domainsSubscription.closed) {
              _this12.addButtonConfig.disabled = _this12.aliasForm.invalid;
            }
          });
        }
      }, {
        key: "addAlias",
        value: function addAlias() {
          var _this13 = this;

          this.dialogRef.disableClose = true;
          this.cancelButtonConfig.disabled = true;
          this.addButtonConfig.active = true;
          this.apiDomainsService.addAlias(this.aliasForm.controls['existingDomain'].value, {
            domain: this.aliasForm.controls['aliasDomain'].value
          }).subscribe(function () {
            _this13.dialogRef.close(true);

            _this13.snackBar.open("".concat(_this13.aliasForm.controls['aliasDomain'].value, " successfully added"), undefined, {
              panelClass: 'success-snackbar'
            });
          }, function (error) {
            _this13.dialogRef.disableClose = false;
            _this13.cancelButtonConfig.disabled = false;
            _this13.addButtonConfig.active = false;

            _this13.errorSnackbarService.open(error);
          });
        }
      }]);

      return AddAliasDialogComponent;
    }();

    AddAliasDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_4__["DomainsService"]
      }, {
        type: _domains_service__WEBPACK_IMPORTED_MODULE_6__["DomainsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["ErrorSnackbarService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddAliasDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-alias-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-alias-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-alias-dialog.component.scss */
      "./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], AddAliasDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDomainsComponentsAddDomainDialogAddDomainDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvbWFpbnMvY29tcG9uZW50cy9hZGQtZG9tYWluLWRpYWxvZy9hZGQtZG9tYWluLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AddDomainDialogComponent */

  /***/
  function srcAppPagesDomainsComponentsAddDomainDialogAddDomainDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddDomainDialogComponent", function () {
      return AddDomainDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");

    var AddDomainDialogComponent =
    /*#__PURE__*/
    function () {
      function AddDomainDialogComponent(dialogRef, domainsService, snackBar, errorSnackbarService, data) {
        _classCallCheck(this, AddDomainDialogComponent);

        this.dialogRef = dialogRef;
        this.domainsService = domainsService;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.data = data;
        this.cancelButtonConfig = {
          active: false,
          type: 'button',
          text: 'CANCEL'
        };
        this.addButtonConfig = {
          active: false,
          disabled: true,
          text: 'ADD',
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
        this.domainInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp('(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\\.)+[a-zA-Z]{2,63}$)')));
      }

      _createClass(AddDomainDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.domainInput.valueChanges.subscribe(function () {
            _this14.addButtonConfig.disabled = _this14.domainInput.invalid;
          });
        }
      }, {
        key: "addDomain",
        value: function addDomain() {
          var _this15 = this;

          this.dialogRef.disableClose = true;
          this.cancelButtonConfig.disabled = true;
          this.addButtonConfig.active = true;
          this.domainsService.addDomain({
            domain: this.domainInput.value
          }).subscribe(function () {
            _this15.dialogRef.close(true);

            _this15.snackBar.open("".concat(_this15.domainInput.value, " successfully added"), undefined, {
              panelClass: 'success-snackbar'
            });
          }, function (error) {
            _this15.dialogRef.disableClose = false;
            _this15.cancelButtonConfig.disabled = false;
            _this15.addButtonConfig.active = false;

            _this15.errorSnackbarService.open(error);
          });
        }
      }]);

      return AddDomainDialogComponent;
    }();

    AddDomainDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_4__["DomainsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["ErrorSnackbarService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AddDomainDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-domain-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-domain-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-domain-dialog.component.scss */
      "./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], AddDomainDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDomainsComponentsDkimDialogDkimDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-area,\n.loader {\n  width: 400px;\n  max-width: 100%;\n}\n.text-area textarea,\n.loader textarea {\n  max-height: 40vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2RvbWFpbnMvY29tcG9uZW50cy9ka2ltLWRpYWxvZy9ka2ltLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9tYWlucy9jb21wb25lbnRzL2RraW0tZGlhbG9nL2RraW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTs7RUFDRSxnQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9tYWlucy9jb21wb25lbnRzL2RraW0tZGlhbG9nL2RraW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXJlYSxcbi5sb2FkZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcblxuICB0ZXh0YXJlYSB7XG4gICAgbWF4LWhlaWdodDogNDB2aDtcbiAgfVxufVxuIiwiLnRleHQtYXJlYSxcbi5sb2FkZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi50ZXh0LWFyZWEgdGV4dGFyZWEsXG4ubG9hZGVyIHRleHRhcmVhIHtcbiAgbWF4LWhlaWdodDogNDB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DkimDialogComponent, DkimDialogEntryComponent */

  /***/
  function srcAppPagesDomainsComponentsDkimDialogDkimDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DkimDialogComponent", function () {
      return DkimDialogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DkimDialogEntryComponent", function () {
      return DkimDialogEntryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var _domains_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../domains.service */
    "./src/app/pages/domains/domains.service.ts");

    var DkimDialogComponent =
    /*#__PURE__*/
    function () {
      function DkimDialogComponent(dialogRef, dialog, dkimService, snackBar, errorSnackbarService, data) {
        _classCallCheck(this, DkimDialogComponent);

        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.dkimService = dkimService;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.data = data;
        this.dkimForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          selector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
          privateKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.saveButtonConfig = {
          active: false,
          text: 'SAVE',
          disabled: true,
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
        this.disableButtonConfig = {
          active: false,
          type: 'button',
          text: 'DISABLE',
          buttonColor: 'warn',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
        this.cancelButtonConfig = {
          active: false,
          type: 'button',
          text: 'CANCEL'
        };
      }

      _createClass(DkimDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.dkimForm.valueChanges.subscribe(function () {
            if (!_this16.isModifyDialog || _this16.dkimKeySubscription.closed) {
              _this16.saveButtonConfig.disabled = _this16.dkimForm.invalid || _this16.dkimForm.pristine;
            }
          });

          if (this.data.edit) {
            this.getDkim();
            this.isModifyDialog = true;
          }
        }
      }, {
        key: "getDkim",
        value: function getDkim() {
          var _this17 = this;

          this.dkimKeySubscription = this.dkimService.getDkim(this.data.domain).subscribe(function (dkimKey) {
            _this17.dkimForm.setValue({
              selector: dkimKey.selector,
              privateKey: null
            });
          }, function (error) {
            _this17.dialogRef.close();

            _this17.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "updateDkim",
        value: function updateDkim() {
          var _this18 = this;

          this.dialogRef.disableClose = true;
          this.cancelButtonConfig.disabled = true;
          this.saveButtonConfig.active = true;
          var dirtyValues = {};

          for (var key in this.dkimForm.controls) {
            var value = this.dkimForm.controls[key].value;

            if (this.dkimForm.controls[key].dirty && value !== null && value !== '') {
              dirtyValues[key] = value;
            }
          }

          var dkimKey = {
            selector: dirtyValues.selector,
            privateKey: dirtyValues.privateKey
          };
          this.dkimService.updateDkim(this.data.domain, dkimKey).subscribe(function () {
            _this18.dialogRef.close(true);

            _this18.snackBar.open("DKIM for ".concat(_this18.data.domain, " ").concat(_this18.isModifyDialog ? 'updated' : 'enabled'), undefined, {
              panelClass: 'success-snackbar'
            });
          }, function (error) {
            _this18.dialogRef.disableClose = false;
            _this18.cancelButtonConfig.disabled = false;
            _this18.saveButtonConfig.active = false;

            _this18.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "forceCheckForm",
        value: function forceCheckForm() {
          if (this.dkimForm.invalid) {
            this.dkimForm.markAllAsTouched();
          }
        }
      }, {
        key: "disableDialog",
        value: function disableDialog() {
          var _this19 = this;

          var dialogConfig = {
            data: {
              title: "Disable DKIM for ".concat(this.data.domain),
              text: 'Are you sure? This will also delete the private key from the server.',
              buttons: [{
                options: {
                  active: false,
                  text: 'NO'
                }
              }, {
                options: {
                  active: false,
                  text: 'YES',
                  buttonColor: 'warn',
                  spinnerSize: 18,
                  mode: 'indeterminate'
                },
                callback: function callback(dialogRef) {
                  dialogRef.disableClose = true;
                  dialogConfig.data.buttons[0].options.disabled = true;
                  dialogConfig.data.buttons[1].options.active = true;

                  _this19.dkimService.deleteDkim(_this19.data.domain).subscribe(function () {
                    dialogRef.close();

                    _this19.snackBar.open("DKIM for ".concat(_this19.data.domain, " has been disabled"), undefined, {
                      panelClass: 'success-snackbar'
                    });

                    _this19.dialogRef.close(true);
                  }, function (error) {
                    dialogRef.disableClose = false;
                    dialogConfig.data.buttons[0].options.disabled = false;
                    dialogConfig.data.buttons[1].options.active = false;

                    _this19.errorSnackbarService.open(error);
                  });
                }
              }]
            }
          };
          this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        }
      }]);

      return DkimDialogComponent;
    }();

    DkimDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["DkimService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["ErrorSnackbarService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DkimDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dkim-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dkim-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dkim-dialog.component.scss */
      "./src/app/pages/domains/components/dkim-dialog/dkim-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))], DkimDialogComponent);

    var DkimDialogEntryComponent =
    /*#__PURE__*/
    function () {
      function DkimDialogEntryComponent(dialog, router, route, domainService) {
        _classCallCheck(this, DkimDialogEntryComponent);

        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.domainService = domainService;
      }

      _createClass(DkimDialogEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.route.params.subscribe(function (params) {
            _this20.dkimDialog(params['domain'], params['action'] === 'edit');
          });
        }
      }, {
        key: "dkimDialog",
        value: function dkimDialog(domain) {
          var _this21 = this;

          var edit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var dialog = this.dialog.open(DkimDialogComponent, {
            data: {
              domain: domain,
              edit: edit
            }
          });
          dialog.afterClosed().subscribe(function (result) {
            if (result) {
              _this21.domainService.getDomains();

              _this21.router.navigateByUrl('/domains');
            } else {
              _this21.router.navigateByUrl('/domains');
            }
          });
        }
      }]);

      return DkimDialogEntryComponent;
    }();

    DkimDialogEntryComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _domains_service__WEBPACK_IMPORTED_MODULE_8__["DomainsService"]
      }];
    };

    DkimDialogEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: ''
    })], DkimDialogEntryComponent);
    /***/
  },

  /***/
  "./src/app/pages/domains/domains.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/domains/domains.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDomainsDomainsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-actions {\n  -webkit-box-flex: 0;\n          flex: 0 0 80px;\n}\n\n.mat-column-actions.mat-header-cell {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.grayed-out {\n  color: #cfcfcf;\n}\n\n.overlap-icon {\n  margin-left: -24px;\n}\n\neco-fab-speed-dial {\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2RvbWFpbnMvZG9tYWlucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9tYWlucy9kb21haW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQUY7O0FESUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb21haW5zL2RvbWFpbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbGlnbiBhY3Rpb25zIGNvbGx1bW4gdG8gdGhlIHJpZ2h0XG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgZmxleDogMCAwIDgwcHhcbn1cblxuLy8gQWxpZ24gYWN0aW9ucyBjb2x1bW4gY2VudGVyXG4ubWF0LWNvbHVtbi1hY3Rpb25zLm1hdC1oZWFkZXItY2VsbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ3JheWVkLW91dCB7XG4gIGNvbG9yOiAjY2ZjZmNmO1xufVxuXG4ub3ZlcmxhcC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4XG59XG5cbmVjby1mYWItc3BlZWQtZGlhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbn0iLCIubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgZmxleDogMCAwIDgwcHg7XG59XG5cbi5tYXQtY29sdW1uLWFjdGlvbnMubWF0LWhlYWRlci1jZWxsIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmF5ZWQtb3V0IHtcbiAgY29sb3I6ICNjZmNmY2Y7XG59XG5cbi5vdmVybGFwLWljb24ge1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG59XG5cbmVjby1mYWItc3BlZWQtZGlhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/domains/domains.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/domains/domains.component.ts ***!
    \****************************************************/

  /*! exports provided: DomainsComponent */

  /***/
  function srcAppPagesDomainsDomainsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomainsComponent", function () {
      return DomainsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var _components_add_alias_dialog_add_alias_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/add-alias-dialog/add-alias-dialog.component */
    "./src/app/pages/domains/components/add-alias-dialog/add-alias-dialog.component.ts");
    /* harmony import */


    var _components_add_domain_dialog_add_domain_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/add-domain-dialog/add-domain-dialog.component */
    "./src/app/pages/domains/components/add-domain-dialog/add-domain-dialog.component.ts");
    /* harmony import */


    var _domains_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./domains.service */
    "./src/app/pages/domains/domains.service.ts");

    var DomainsComponent =
    /*#__PURE__*/
    function () {
      function DomainsComponent(breakpointObserver, dialog, snackBar, errorSnackbarService, apiDomainsService, domainsService, router) {
        _classCallCheck(this, DomainsComponent);

        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.apiDomainsService = apiDomainsService;
        this.domainsService = domainsService;
        this.router = router;
        this.displayedColumns = ['domain', 'actions'];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
          return result.matches;
        }));
      }

      _createClass(DomainsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.domainsService.domainsSubscription.add(function () {
            _this22.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this22.domainsService.domainsAndAliases);
          });
          this.domainsService.domainsAndAliasesSubject.subscribe(function (domainsAndAliases) {
            _this22.dataSource.data = domainsAndAliases;
          });
        }
      }, {
        key: "addDomainDialog",
        value: function addDomainDialog() {
          var _this23 = this;

          var dialog = this.dialog.open(_components_add_domain_dialog_add_domain_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AddDomainDialogComponent"]);
          dialog.afterClosed().subscribe(function (result) {
            if (result) {
              _this23.domainsService.getDomains();
            }
          });
        }
      }, {
        key: "addAliasDialog",
        value: function addAliasDialog() {
          var _this24 = this;

          var dialog = this.dialog.open(_components_add_alias_dialog_add_alias_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddAliasDialogComponent"]);
          dialog.afterClosed().subscribe(function (result) {
            if (result) {
              _this24.domainsService.getDomains();
            }
          });
        }
      }, {
        key: "removeDomainConfirmDialog",
        value: function removeDomainConfirmDialog(domain) {
          var _this25 = this;

          var dialogConfig = {
            data: {
              title: "Remove ".concat(domain),
              text: 'Are you sure? This will also remove accounts associated with this domain.',
              buttons: [{
                options: {
                  active: false,
                  text: 'NO'
                }
              }, {
                options: {
                  active: false,
                  text: 'YES',
                  buttonColor: 'warn',
                  spinnerSize: 18,
                  mode: 'indeterminate'
                },
                callback: function callback(dialogRef) {
                  dialogRef.disableClose = true;
                  dialogConfig.data.buttons[0].options.disabled = true;
                  dialogConfig.data.buttons[1].options.active = true;

                  _this25.apiDomainsService.deleteDomain(domain).subscribe(function () {
                    dialogRef.close();

                    _this25.snackBar.open("".concat(domain, " has been removed"), undefined, {
                      panelClass: 'success-snackbar'
                    });

                    _this25.domainsService.getDomains();
                  }, function (error) {
                    dialogRef.close();

                    _this25.errorSnackbarService.open(error);
                  });
                }
              }]
            }
          };
          this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], dialogConfig);
        }
      }, {
        key: "removeAliasConfirmDialog",
        value: function removeAliasConfirmDialog(domain, alias) {
          var _this26 = this;

          var dialogConfig = {
            data: {
              title: "Remove ".concat(alias),
              text: 'Are you sure? Any account data will remain as this is just an alias.',
              buttons: [{
                options: {
                  active: false,
                  text: 'NO'
                }
              }, {
                options: {
                  active: false,
                  text: 'YES',
                  buttonColor: 'warn',
                  spinnerSize: 18,
                  mode: 'indeterminate'
                },
                callback: function callback(dialogRef) {
                  dialogRef.disableClose = true;
                  dialogConfig.data.buttons[0].options.disabled = true;
                  dialogConfig.data.buttons[1].options.active = true;

                  _this26.apiDomainsService.deleteAlias(domain, alias).subscribe(function () {
                    dialogRef.close();

                    _this26.snackBar.open("".concat(alias, " has been removed"), undefined, {
                      panelClass: 'success-snackbar'
                    });

                    _this26.domainsService.getDomains();
                  }, function (error) {
                    dialogRef.close();

                    _this26.errorSnackbarService.open(error);
                  });
                }
              }]
            }
          };
          this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], dialogConfig);
        }
      }]);

      return DomainsComponent;
    }();

    DomainsComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["ErrorSnackbarService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["DomainsService"]
      }, {
        type: _domains_service__WEBPACK_IMPORTED_MODULE_11__["DomainsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DomainsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-domains',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./domains.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/domains/domains.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./domains.component.scss */
      "./src/app/pages/domains/domains.component.scss")).default]
    })], DomainsComponent);
    /***/
  },

  /***/
  "./src/app/pages/domains/domains.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/domains/domains.service.ts ***!
    \**************************************************/

  /*! exports provided: DomainsService */

  /***/
  function srcAppPagesDomainsDomainsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomainsService", function () {
      return DomainsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");

    var DomainsService =
    /*#__PURE__*/
    function () {
      function DomainsService(errorSnackbarService, apiDomainsService) {
        _classCallCheck(this, DomainsService);

        this.errorSnackbarService = errorSnackbarService;
        this.apiDomainsService = apiDomainsService;
        this.domainsAndAliasesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(DomainsService, [{
        key: "getDomains",
        value: function getDomains() {
          var _this27 = this;

          this.domainsSubscription = this.apiDomainsService.getDomains().subscribe(function (domains) {
            _this27.domains = domains;
            _this27.domainsStrings = domains.map(function (value) {
              return value.domain;
            }); // Assert domains as a different type so we can add "aliasOf"

            var assertedDomains = domains;
            var domainsAndAliases = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = assertedDomains[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var domain = _step2.value;
                domainsAndAliases.push(domain);

                if (domain.aliases && domain.aliases.length > 0) {
                  var _iteratorNormalCompletion3 = true;
                  var _didIteratorError3 = false;
                  var _iteratorError3 = undefined;

                  try {
                    for (var _iterator3 = domain.aliases[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var alias = _step3.value;
                      alias.aliasOf = domain.domain;
                      domainsAndAliases.push(alias);
                    }
                  } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                        _iterator3.return();
                      }
                    } finally {
                      if (_didIteratorError3) {
                        throw _iteratorError3;
                      }
                    }
                  }
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            _this27.domainsAndAliases = domainsAndAliases;

            _this27.domainsAndAliasesSubject.next(domainsAndAliases);

            _this27.domainsAndAliasesStrings = domainsAndAliases.map(function (value) {
              return value.domain;
            });
          }, function (error) {
            _this27.errorSnackbarService.open(error);
          });
        }
      }]);

      return DomainsService;
    }();

    DomainsService.ctorParameters = function () {
      return [{
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["ErrorSnackbarService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_2__["DomainsService"]
      }];
    };

    DomainsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DomainsService);
    /***/
  },

  /***/
  "./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForwardersComponentsForwarderDialogForwarderDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row-container > mat-form-field {\n  min-width: 0;\n  width: 100%;\n}\n\n.user-input-right {\n  text-align: right;\n}\n\n.at-symbol {\n  padding-bottom: 1.34375em;\n}\n\n.loader-container {\n  width: 80vw;\n  margin: 0 -24px;\n  padding: 0 24px;\n  box-sizing: border-box;\n  max-width: 490.38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2ZvcndhcmRlcnMvY29tcG9uZW50cy9mb3J3YXJkZXItZGlhbG9nL2ZvcndhcmRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcndhcmRlcnMvY29tcG9uZW50cy9mb3J3YXJkZXItZGlhbG9nL2ZvcndhcmRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3J3YXJkZXJzL2NvbXBvbmVudHMvZm9yd2FyZGVyLWRpYWxvZy9mb3J3YXJkZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1jb250YWluZXIgPiBtYXQtZm9ybS1maWVsZCB7XG4gIG1pbi13aWR0aDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLWlucHV0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hdC1zeW1ib2wge1xuICBwYWRkaW5nLWJvdHRvbTogMS4zNDM3NWVtO1xufVxuXG4ubG9hZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXJnaW46IDAgLTI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LXdpZHRoOiA0OTAuMzhweDsgLy8gV2lkdGggb2YgdGhlIGVudGlyZSBmb3JtLiBTb3JyeSBmb3IgdGhlIG1hZ2ljIG51bWJlciwgSSBjb3VsZG4ndCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgdG8gdGhpcyB2YWx1ZSBvdGhlcndpc2Vcbn0iLCIucm93LWNvbnRhaW5lciA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgbWluLXdpZHRoOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItaW5wdXQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmF0LXN5bWJvbCB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5sb2FkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbjogMCAtMjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtd2lkdGg6IDQ5MC4zOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ForwarderDialogComponent */

  /***/
  function srcAppPagesForwardersComponentsForwarderDialogForwarderDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForwarderDialogComponent", function () {
      return ForwarderDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_pages_domains_domains_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pages/domains/domains.service */
    "./src/app/pages/domains/domains.service.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var src_app_shared_validators_address_username_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/validators/address-username-validator.directive */
    "./src/app/shared/validators/address-username-validator.directive.ts");
    /* harmony import */


    var src_app_shared_validators_forwarding_target_validator_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/validators/forwarding-target-validator.directive */
    "./src/app/shared/validators/forwarding-target-validator.directive.ts");

    var ForwarderDialogComponent =
    /*#__PURE__*/
    function () {
      function ForwarderDialogComponent(dialogRef, breakpointObserver, domainsService, forwardersService, snackBar, errorSnackbarService, data) {
        _classCallCheck(this, ForwarderDialogComponent);

        this.dialogRef = dialogRef;
        this.breakpointObserver = breakpointObserver;
        this.domainsService = domainsService;
        this.forwardersService = forwardersService;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.data = data;
        this.forwardTargets = [];
        this.forwardTargetsDirty = false;
        this.newTargetSeperators = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["SPACE"]];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (result) {
          return result.matches;
        }));
        this.forwarderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
          addressUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, Object(src_app_shared_validators_address_username_validator_directive__WEBPACK_IMPORTED_MODULE_10__["AddressUsernameValidator"])()),
          domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
          newTarget: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, Object(src_app_shared_validators_forwarding_target_validator_directive__WEBPACK_IMPORTED_MODULE_11__["forwardingTargetValidator"])()),
          forwardLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(200)])
        });
        this.saveButtonConfig = {
          active: false,
          text: 'SAVE',
          disabled: true,
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
        this.cancelButtonConfig = {
          active: false,
          type: 'button',
          text: 'CANCEL'
        };
      }

      _createClass(ForwarderDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          this.forwarderForm.valueChanges.subscribe(function () {
            if (_this28.forwarderForm.dirty && _this28.forwarderForm.valid) {
              _this28.saveButtonConfig.disabled = false;
            } else {
              _this28.saveButtonConfig.disabled = true;
            }
          }); // If id was passed this is a modify dialog and we need to get existing data

          if (this.data) {
            this.isModifyDialog = true;
            this.getForwarder();
          }
        }
      }, {
        key: "addTarget",
        value: function addTarget(event) {
          if (this.forwarderForm.controls['newTarget'].valid) {
            if ((event.value || '').trim()) {
              this.forwardTargetsDirty = true;
              this.forwardTargets.push(event.value.trim());
            } // Reset the input value


            if (event.input) {
              this.forwarderForm.controls['newTarget'].setValue('');
              this.forwarderForm.controls['newTarget'].markAsUntouched();
            }
          } else {
            this.forwarderForm.controls['newTarget'].markAsTouched();
          }
        }
      }, {
        key: "removeTarget",
        value: function removeTarget(target) {
          var index = this.forwardTargets.indexOf(target);

          if (index >= 0) {
            this.forwardTargetsDirty = true;
            this.forwarderForm.controls['newTarget'].markAsDirty();
            this.forwarderForm.controls['newTarget'].markAsTouched();
            this.saveButtonConfig.disabled = false;
            this.forwardTargets.splice(index, 1);
          }
        }
      }, {
        key: "forceCheckForm",
        value: function forceCheckForm() {
          if (this.forwarderForm.invalid) {
            this.forwarderForm.markAllAsTouched();
          }
        }
      }, {
        key: "getForwarder",
        value: function getForwarder() {
          var _this29 = this;

          this.forwarderDetailsSubscription = this.forwardersService.getForwarderDetails(this.data.id).subscribe(function (forwarder) {
            _this29.forwarderDetails = forwarder; // Split address to name and domain for split input

            var addressUser = _this29.forwarderDetails.address.substring(0, _this29.forwarderDetails.address.lastIndexOf('@'));

            var domain = _this29.forwarderDetails.address.substring(_this29.forwarderDetails.address.lastIndexOf('@') + 1);

            _this29.forwarderForm.setValue({
              name: forwarder.name ? forwarder.name : null,
              addressUser: addressUser,
              domain: domain,
              newTarget: null,
              forwardLimit: forwarder.limits.forward.allowed
            });

            _this29.forwardTargets = forwarder.targets;
          }, function (error) {
            _this29.dialogRef.close();

            _this29.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "updateForwarder",
        value: function updateForwarder() {
          var _this30 = this;

          this.dialogRef.disableClose = true;
          this.cancelButtonConfig.disabled = true;
          this.saveButtonConfig.active = true;
          var dirtyValues = {};

          for (var key in this.forwarderForm.controls) {
            var value = this.forwarderForm.controls[key].value;

            if (this.forwarderForm.controls[key].dirty && value !== null && value !== '') {
              dirtyValues[key] = value;
            }
          }

          var address = "".concat(this.forwarderForm.controls['addressUser'].value, "@").concat(this.forwarderForm.controls['domain'].value);
          var dirtyAddress;

          if (dirtyValues.addressUser || dirtyValues.domain) {
            dirtyAddress = "".concat(this.forwarderForm.controls['addressUser'].value, "@").concat(this.forwarderForm.controls['domain'].value);
          }

          var forwarder = {
            name: dirtyValues.name,
            address: dirtyAddress,
            targets: this.forwardTargetsDirty ? this.forwardTargets : undefined,
            limits: {
              forward: dirtyValues.forwardLimit
            }
          };

          var onError = function onError(error) {
            _this30.dialogRef.disableClose = false;
            _this30.cancelButtonConfig.disabled = false;
            _this30.saveButtonConfig.active = false;

            _this30.errorSnackbarService.open(error);
          };

          if (this.isModifyDialog) {
            this.forwardersService.updateForwarder(this.data.id, forwarder).subscribe(function () {
              _this30.snackBar.open("".concat(address, " successfully updated"), undefined, {
                panelClass: 'success-snackbar'
              });

              _this30.dialogRef.close(true);
            }, onError);
          } else {
            this.forwardersService.createForwarder(forwarder).subscribe(function () {
              _this30.snackBar.open("".concat(address, " successfully added"), undefined, {
                panelClass: 'success-snackbar'
              });

              _this30.dialogRef.close(true);
            }, onError);
          }
        }
      }]);

      return ForwarderDialogComponent;
    }();

    ForwarderDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
      }, {
        type: src_app_pages_domains_domains_service__WEBPACK_IMPORTED_MODULE_8__["DomainsService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_6__["ForwardersService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_9__["ErrorSnackbarService"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ForwarderDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-forwarder-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forwarder-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forwarder-dialog.component.scss */
      "./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))], ForwarderDialogComponent);
    /***/
  },

  /***/
  "./src/app/pages/forwarders/forwarders.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/forwarders/forwarders.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForwardersForwardersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-column-actions {\n  -webkit-box-flex: 0;\n          flex: 0 0 80px;\n}\n\n.mat-column-actions.mat-header-cell {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2ZvcndhcmRlcnMvZm9yd2FyZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9yd2FyZGVycy9mb3J3YXJkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQUY7O0FESUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3J3YXJkZXJzL2ZvcndhcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbGlnbiBhY3Rpb25zIGNvbGx1bW4gdG8gdGhlIHJpZ2h0XG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgZmxleDogMCAwIDgwcHhcbn1cblxuLy8gQWxpZ24gYWN0aW9ucyBjb2x1bW4gY2VudGVyXG4ubWF0LWNvbHVtbi1hY3Rpb25zLm1hdC1oZWFkZXItY2VsbCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi5tYXQtY29sdW1uLWFjdGlvbnMge1xuICBmbGV4OiAwIDAgODBweDtcbn1cblxuLm1hdC1jb2x1bW4tYWN0aW9ucy5tYXQtaGVhZGVyLWNlbGwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/forwarders/forwarders.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/forwarders/forwarders.component.ts ***!
    \**********************************************************/

  /*! exports provided: ForwardersComponent */

  /***/
  function srcAppPagesForwardersForwardersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForwardersComponent", function () {
      return ForwardersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var _components_forwarder_dialog_forwarder_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/forwarder-dialog/forwarder-dialog.component */
    "./src/app/pages/forwarders/components/forwarder-dialog/forwarder-dialog.component.ts");

    var ForwardersComponent =
    /*#__PURE__*/
    function () {
      function ForwardersComponent(breakpointObserver, dialog, snackBar, errorSnackbarService, forwardersService, router, activatedRoute) {
        _classCallCheck(this, ForwardersComponent);

        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.forwardersService = forwardersService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = ['address', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
          return result.matches;
        }));
      }

      _createClass(ForwardersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.getForwarders();
          this.dataSource.paginator = this.paginator;
          this.activatedRoute.params.subscribe(function (params) {
            if (params['id']) {
              _this31.forwarderDialog(params['id']);
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getForwarders",
        value: function getForwarders() {
          var _this32 = this;

          this.forwarderSubscription = this.forwardersService.getForwarders().subscribe(function (forwarders) {
            _this32.dataSource.data = forwarders;
          }, function (error) {
            _this32.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "forwarderDialog",
        value: function forwarderDialog(id) {
          var _this33 = this;

          var dialogConfig = {};

          if (id) {
            dialogConfig.data = {
              id: id
            };
          }

          var dialog = this.dialog.open(_components_forwarder_dialog_forwarder_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ForwarderDialogComponent"], dialogConfig);
          dialog.afterClosed().subscribe(function (result) {
            _this33.router.navigateByUrl('/forwarders/');

            if (result) {
              _this33.getForwarders();
            }
          });
        }
      }, {
        key: "removeConfirmDialog",
        value: function removeConfirmDialog(forwarderId, address) {
          var _this34 = this;

          var dialogConfig = {
            data: {
              title: "Remove ".concat(address || forwarderId),
              text: 'Are you sure?',
              buttons: [{
                options: {
                  active: false,
                  text: 'NO'
                }
              }, {
                options: {
                  active: false,
                  text: 'YES',
                  buttonColor: 'warn',
                  spinnerSize: 18,
                  mode: 'indeterminate'
                },
                callback: function callback(dialogRef) {
                  dialogRef.disableClose = true;
                  dialogConfig.data.buttons[0].options.disabled = true;
                  dialogConfig.data.buttons[1].options.active = true;

                  _this34.forwardersService.deleteForwarder(forwarderId).subscribe(function () {
                    dialogRef.close();

                    _this34.snackBar.open("".concat(address || forwarderId, " has been removed"), undefined, {
                      panelClass: 'success-snackbar'
                    });

                    _this34.getForwarders();
                  }, function (error) {
                    dialogRef.disableClose = false;
                    dialogConfig.data.buttons[0].options.disabled = false;
                    dialogConfig.data.buttons[1].options.active = false;

                    _this34.errorSnackbarService.open(error);
                  });
                }
              }]
            }
          };
          this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], dialogConfig);
        }
      }, {
        key: "content",
        set: function set(sort) {
          // Needed because of the ngif wrapper around the table
          if (this.dataSource) {
            this.dataSource.sort = sort;
          }
        }
      }]);

      return ForwardersComponent;
    }();

    ForwardersComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_8__["ErrorSnackbarService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["ForwardersService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: false
    })], ForwardersComponent.prototype, "content", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      static: true
    })], ForwardersComponent.prototype, "paginator", void 0);
    ForwardersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-forwarders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forwarders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forwarders/forwarders.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forwarders.component.scss */
      "./src/app/pages/forwarders/forwarders.component.scss")).default]
    })], ForwardersComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".layout-center {\n  background-color: #00BCD4;\n  height: 100vh;\n}\n\nmat-card {\n  box-sizing: border-box;\n  width: 400px;\n  padding: 30px;\n}\n\nmat-card.is-handset {\n  width: 100vw;\n  height: 100vh;\n}\n\nmat-card-title {\n  text-align: center;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCQ0Q0O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5tYXQtY2FyZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMzBweDtcblxuICAmLmlzLWhhbmRzZXQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuIiwiLmxheW91dC1jZW50ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCQ0Q0O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5tYXQtY2FyZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMzBweDtcbn1cbm1hdC1jYXJkLmlzLWhhbmRzZXQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbm1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var _domains_domains_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../domains/domains.service */
    "./src/app/pages/domains/domains.service.ts");
    /* harmony import */


    var _profile_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../profile/profile.service */
    "./src/app/pages/profile/profile.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(breakpointObserver, authenticationService, profileService, errorSnackbarService, domainsService, router) {
        _classCallCheck(this, LoginComponent);

        this.breakpointObserver = breakpointObserver;
        this.authenticationService = authenticationService;
        this.profileService = profileService;
        this.errorSnackbarService = errorSnackbarService;
        this.domainsService = domainsService;
        this.router = router;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
          return result.matches;
        }));
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.loginButtonConfig = {
          active: false,
          text: 'LOGIN',
          disabled: true,
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.loginForm.valueChanges.subscribe(function () {
            _this35.loginButtonConfig.disabled = _this35.loginForm.invalid;
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this36 = this;

          if (this.loginForm.valid) {
            this.loginButtonConfig.active = true;
            this.authenticationService.getAccessToken({
              username: this.loginForm.value.username,
              password: this.loginForm.value.password
            }).subscribe(function (accessToken) {
              localStorage.setItem('access_token', accessToken.accessToken);
              _this36.authenticationService.configuration.accessToken = accessToken.accessToken;
              _this36.profileService.user.username = _this36.loginForm.value.username;

              _this36.profileService.getUserInfo();

              _this36.domainsService.getDomains();

              _this36.router.navigateByUrl('/accounts');
            }, function (error) {
              _this36.loginButtonConfig.active = false;

              if (error.error.error === 'Unauthorized') {
                _this36.errorSnackbarService.open('Invalid username or password');
              } else {
                _this36.errorSnackbarService.open(error);
              }
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _profile_profile_service__WEBPACK_IMPORTED_MODULE_9__["ProfileService"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["ErrorSnackbarService"]
      }, {
        type: _domains_domains_service__WEBPACK_IMPORTED_MODULE_8__["DomainsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/profile/profile.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".usage-text {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2FnZS10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCIudXNhZ2UtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");
    /* harmony import */


    var src_app_shared_functions_formatBytes_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/functions/formatBytes.function */
    "./src/app/shared/functions/formatBytes.function.ts");
    /* harmony import */


    var src_app_shared_validators_ascii_validator_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/validators/ascii-validator.directive */
    "./src/app/shared/validators/ascii-validator.directive.ts");
    /* harmony import */


    var src_app_shared_validators_not_contains_validator_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/validators/not-contains-validator.directive */
    "./src/app/shared/validators/not-contains-validator.directive.ts");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/pages/profile/profile.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(apiProfileService, profileService, authenticationService, emailAccountsService, snackBar, errorSnackbarService, router, dialog) {
        _classCallCheck(this, ProfileComponent);

        this.apiProfileService = apiProfileService;
        this.profileService = profileService;
        this.authenticationService = authenticationService;
        this.emailAccountsService = emailAccountsService;
        this.snackBar = snackBar;
        this.errorSnackbarService = errorSnackbarService;
        this.router = router;
        this.dialog = dialog;
        this.usage = {
          bytes: 0,
          formatted: 'Usage'
        };
        this.quota = {
          bytes: 0,
          formatted: 'Quota'
        };
        this.loginDetailsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.profileService.user.username, [Object(src_app_shared_validators_ascii_validator_directive__WEBPACK_IMPORTED_MODULE_9__["IsAsciiValidator"])(), Object(src_app_shared_validators_not_contains_validator_directive__WEBPACK_IMPORTED_MODULE_10__["notContainsValidator"])(' ')]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.loginDetailsButtonConfig = {
          active: false,
          text: 'CHANGE',
          disabled: true,
          raised: true,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          spinnerSize: 18,
          mode: 'indeterminate'
        };
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.calculateStorage();
          this.profileService.userInfoSubscription.add(function () {
            // Only set username and quota if the userinfo request has finished
            _this37.loginDetailsForm.controls['username'].setValue(_this37.profileService.user.username);

            _this37.quota.bytes = _this37.profileService.user.quota;
            _this37.quota.formatted = Object(src_app_shared_functions_formatBytes_function__WEBPACK_IMPORTED_MODULE_8__["formatBytes"])(_this37.quota.bytes);
          });
          this.loginDetailsForm.valueChanges.subscribe(function () {
            _this37.loginDetailsButtonConfig.disabled = _this37.loginDetailsForm.invalid;
          });
        }
      }, {
        key: "calculateStorage",
        value: function calculateStorage() {
          var _this38 = this;

          this.usage.bytes = 0;
          this.calculateStorageSubscription = this.emailAccountsService.getAccounts().subscribe(function (accounts) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = accounts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var account = _step4.value;
                _this38.usage.bytes += account.quota.used;
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            _this38.usage.formatted = Object(src_app_shared_functions_formatBytes_function__WEBPACK_IMPORTED_MODULE_8__["formatBytes"])(_this38.usage.bytes);
          }, function (error) {
            _this38.errorSnackbarService.open(error);
          });
        }
      }, {
        key: "changeLoginDetails",
        value: function changeLoginDetails() {
          var _this39 = this;

          if (this.loginDetailsForm.valid) {
            this.loginDetailsButtonConfig.active = true;
            this.apiProfileService.updateMe({
              username: this.loginDetailsForm.value.username,
              password: this.loginDetailsForm.value.password
            }).subscribe(function () {
              _this39.loginDetailsButtonConfig.active = false;

              _this39.snackBar.open("Username/Password successfully updated", undefined, {
                panelClass: 'success-snackbar'
              });

              _this39.profileService.getUserInfo();
            }, function (error) {
              _this39.loginDetailsButtonConfig.active = false;

              _this39.errorSnackbarService.open(error);
            });
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('access_token');
          delete this.authenticationService.configuration.accessToken;
          this.snackBar.open('Logged out successfully', undefined, {
            panelClass: 'success-snackbar'
          });
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "logoutAllDialog",
        value: function logoutAllDialog() {
          var _this40 = this;

          var dialogConfig = {
            data: {
              title: 'Log out from all devices',
              text: 'Are you sure? This will also log you out on this device.',
              buttons: [{
                options: {
                  active: false,
                  text: 'NO'
                }
              }, {
                options: {
                  active: false,
                  text: 'YES',
                  buttonColor: 'warn',
                  spinnerSize: 18,
                  mode: 'indeterminate'
                },
                callback: function callback(dialogRef) {
                  dialogRef.disableClose = true;
                  dialogConfig.data.buttons[0].options.disabled = true;
                  dialogConfig.data.buttons[1].options.active = true;

                  _this40.authenticationService.revokeAllAccessTokens().subscribe(function () {
                    dialogRef.close();

                    _this40.logout();
                  }, function (error) {
                    dialogRef.disableClose = false;
                    dialogConfig.data.buttons[0].options.disabled = false;
                    dialogConfig.data.buttons[1].options.active = false;

                    _this40.errorSnackbarService.open(error);
                  });
                }
              }]
            }
          };
          this.dialog.open(src_app_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], dialogConfig);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_11__["ProfileService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_5__["EmailAccountsService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["ErrorSnackbarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/pages/profile/profile.component.scss")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/profile/profile.service.ts ***!
    \**************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppPagesProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ducky-api-client-angular */
    "./node_modules/ducky-api-client-angular/fesm2015/ducky-api-client-angular.js");
    /* harmony import */


    var src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/components/error-snackbar/error-snackbar.service */
    "./src/app/shared/components/error-snackbar/error-snackbar.service.ts");

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(apiProfileService, errorSnackbarService) {
        _classCallCheck(this, ProfileService);

        this.apiProfileService = apiProfileService;
        this.errorSnackbarService = errorSnackbarService;
        this.user = {};
      }

      _createClass(ProfileService, [{
        key: "getUserInfo",
        value: function getUserInfo() {
          var _this41 = this;

          this.userInfoSubscription = this.apiProfileService.getMe().subscribe(function (user) {
            _this41.user = user;
          }, function (error) {
            _this41.errorSnackbarService.open(error);
          });
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: ducky_api_client_angular__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }, {
        type: src_app_shared_components_error_snackbar_error_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["ErrorSnackbarService"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  },

  /***/
  "./src/app/shared/components/dialog/dialog.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/dialog/dialog.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsDialogDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-dialog-content {\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG4iLCJtYXQtZGlhbG9nLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/dialog/dialog.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/dialog/dialog.component.ts ***!
    \**************************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppSharedComponentsDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DialogComponent = function DialogComponent(dialogRef, data) {
      _classCallCheck(this, DialogComponent);

      this.dialogRef = dialogRef;
      this.data = data;
    };

    DialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'custom-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/dialog/dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.component.scss */
      "./src/app/shared/components/dialog/dialog.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DialogComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/error-snackbar/error-snackbar.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/error-snackbar/error-snackbar.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsErrorSnackbarErrorSnackbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".action {\n  margin: -8px -8px -8px -8px;\n}\n\n.flex-container {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Vycm9yLXNuYWNrYmFyL2Vycm9yLXNuYWNrYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1zbmFja2Jhci9lcnJvci1zbmFja2Jhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci1zbmFja2Jhci9lcnJvci1zbmFja2Jhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24ge1xuICBtYXJnaW46IC04cHggLThweCAtOHB4IC04cHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlXG59IiwiLmFjdGlvbiB7XG4gIG1hcmdpbjogLThweCAtOHB4IC04cHggLThweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/error-snackbar/error-snackbar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/error-snackbar/error-snackbar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ErrorSnackbarComponent */

  /***/
  function srcAppSharedComponentsErrorSnackbarErrorSnackbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorSnackbarComponent", function () {
      return ErrorSnackbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/shared/components/dialog/dialog.component.ts");

    var ErrorSnackbarComponent =
    /*#__PURE__*/
    function () {
      function ErrorSnackbarComponent(snackBarRef, dialog, router, data) {
        _classCallCheck(this, ErrorSnackbarComponent);

        this.snackBarRef = snackBarRef;
        this.dialog = dialog;
        this.router = router;
        this.data = data;
      }

      _createClass(ErrorSnackbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.data instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            if (this.data.error.error === 'Unauthorized') {
              this.message = 'Session expired, please login.';
              this.router.navigateByUrl('/login');
            } else if (this.data.error.error === 'ValidationError') {
              this.message = 'Invalid input';
              this.errorDetails = JSON.stringify(this.data.error.message);
            } else if (this.data.error.message) {
              this.message = this.data.error.message;
            } else {
              this.message = 'Unknown error. 🤷‍';
              this.errorDetails = JSON.stringify(this.data.message);
            }
          } else {
            this.message = this.data;
          }
        }
      }, {
        key: "showDetails",
        value: function showDetails() {
          var dialogConfig = {
            data: {
              title: 'Error details',
              text: this.errorDetails,
              buttons: [{
                options: {
                  active: false,
                  text: 'OK'
                }
              }]
            }
          };
          this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], dialogConfig);
        }
      }]);

      return ErrorSnackbarComponent;
    }();

    ErrorSnackbarComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarRef"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_SNACK_BAR_DATA"]]
        }]
      }];
    };

    ErrorSnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-error-snackbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error-snackbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/error-snackbar/error-snackbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error-snackbar.component.scss */
      "./src/app/shared/components/error-snackbar/error-snackbar.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_SNACK_BAR_DATA"]))], ErrorSnackbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/error-snackbar/error-snackbar.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/error-snackbar/error-snackbar.service.ts ***!
    \****************************************************************************/

  /*! exports provided: ErrorSnackbarService */

  /***/
  function srcAppSharedComponentsErrorSnackbarErrorSnackbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorSnackbarService", function () {
      return ErrorSnackbarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _error_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-snackbar.component */
    "./src/app/shared/components/error-snackbar/error-snackbar.component.ts");

    var ErrorSnackbarService =
    /*#__PURE__*/
    function () {
      function ErrorSnackbarService(snackBar, zone) {
        _classCallCheck(this, ErrorSnackbarService);

        this.snackBar = snackBar;
        this.zone = zone;
      }

      _createClass(ErrorSnackbarService, [{
        key: "open",
        value: function open(error) {
          var _this42 = this;

          this.zone.run(function () {
            _this42.snackBar.openFromComponent(_error_snackbar_component__WEBPACK_IMPORTED_MODULE_3__["ErrorSnackbarComponent"], {
              data: error,
              panelClass: ['error-snackbar']
            });
          });
        }
      }]);

      return ErrorSnackbarService;
    }();

    ErrorSnackbarService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    ErrorSnackbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ErrorSnackbarService);
    /***/
  },

  /***/
  "./src/app/shared/components/fab-button/fab-button.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/fab-button/fab-button.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFabButtonFabButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  position: fixed;\n  right: 30px;\n  bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhbWlyby9EZXYvRHVja3lQYW5lbC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZhYi1idXR0b24vZmFiLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZmFiLWJ1dHRvbi9mYWItYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mYWItYnV0dG9uL2ZhYi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDMwcHg7XG59XG4iLCJidXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/fab-button/fab-button.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/fab-button/fab-button.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FabButtonComponent */

  /***/
  function srcAppSharedComponentsFabButtonFabButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabButtonComponent", function () {
      return FabButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FabButtonComponent = function FabButtonComponent() {
      _classCallCheck(this, FabButtonComponent);
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FabButtonComponent.prototype, "icon", void 0);
    FabButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fab-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fab-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/fab-button/fab-button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fab-button.component.scss */
      "./src/app/shared/components/fab-button/fab-button.component.scss")).default]
    })], FabButtonComponent);
    /***/
  },

  /***/
  "./src/app/shared/functions/formatBytes.function.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/functions/formatBytes.function.ts ***!
    \**********************************************************/

  /*! exports provided: formatBytes */

  /***/
  function srcAppSharedFunctionsFormatBytesFunctionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatBytes", function () {
      return formatBytes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function formatBytes(bytes) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      if (bytes == 0) return '0 Bytes';
      var k = 1024,
          sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
          i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
    }
    /***/

  },

  /***/
  "./src/app/shared/validators/address-username-validator.directive.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/validators/address-username-validator.directive.ts ***!
    \***************************************************************************/

  /*! exports provided: AddressUsernameValidator */

  /***/
  function srcAppSharedValidatorsAddressUsernameValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressUsernameValidator", function () {
      return AddressUsernameValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! class-validator */
    "./node_modules/class-validator/index.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * @description Function that validates if string is empty, email address, smtp address, or http address
     */


    function AddressUsernameValidator() {
      var validator = new class_validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]();
      return function (control) {
        var completeAddress = "".concat(control.value, "@example.com");

        if (validator.isEmail(completeAddress)) {
          // string is valid
          return null;
        } else {
          // string is not an email or an url with a valid protocol
          return {
            AddressUsername: {
              valid: false
            }
          };
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/validators/ascii-validator.directive.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/validators/ascii-validator.directive.ts ***!
    \****************************************************************/

  /*! exports provided: IsAsciiValidator */

  /***/
  function srcAppSharedValidatorsAsciiValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IsAsciiValidator", function () {
      return IsAsciiValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! class-validator */
    "./node_modules/class-validator/index.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * @description Function that validates if string only ascii characters
     */


    function IsAsciiValidator() {
      var validator = new class_validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]();
      return function (control) {
        if (validator.isAscii(control.value)) {
          // string is valid
          return null;
        } else {
          // string is not ascii
          return {
            isAscii: {
              valid: false
            }
          };
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/validators/forwarding-target-validator.directive.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/validators/forwarding-target-validator.directive.ts ***!
    \****************************************************************************/

  /*! exports provided: forwardingTargetValidator */

  /***/
  function srcAppSharedValidatorsForwardingTargetValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forwardingTargetValidator", function () {
      return forwardingTargetValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! class-validator */
    "./node_modules/class-validator/index.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * @description Function that validates if string is empty, email address, smtp address, or http address
     */


    function forwardingTargetValidator() {
      var validator = new class_validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]();
      return function (control) {
        if (validator.isEmpty(control.value) || validator.isEmail(control.value) || validator.isURL(control.value, {
          protocols: ['http', 'https', 'smtp', 'smtps'],
          // eslint-disable-next-line @typescript-eslint/camelcase
          require_protocol: true
        })) {
          // string is valid
          return null;
        } else {
          // string is not an email or an url with a valid protocol
          return {
            forwardingTarget: {
              valid: false
            }
          };
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/shared/validators/not-contains-validator.directive.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/validators/not-contains-validator.directive.ts ***!
    \***********************************************************************/

  /*! exports provided: notContainsValidator */

  /***/
  function srcAppSharedValidatorsNotContainsValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "notContainsValidator", function () {
      return notContainsValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! class-validator */
    "./node_modules/class-validator/index.js");
    /* harmony import */


    var class_validator__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * @description Function that validates if string does not contain the given seed
     */


    function notContainsValidator(seed) {
      var validator = new class_validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]();
      return function (control) {
        if (validator.notContains(control.value, seed)) {
          // string is valid
          return null;
        } else {
          // string is not ascii
          return {
            notContains: {
              valid: false
            }
          };
        }
      };
    }
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return alert(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/ramiro/Dev/DuckyPanel/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map