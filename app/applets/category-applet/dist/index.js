
/*! *****************************************************************************************************************************
* Copyright (c) Tuvalsoft Corporation. All rights reserved.                                                                     *
*                                                                                                                               *
* ████████╗██╗   ██╗██╗   ██╗ █████╗ ██╗         ███████╗██████╗  █████╗ ███╗   ███╗███████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗ *
* ╚══██╔══╝██║   ██║██║   ██║██╔══██╗██║         ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝ *
*    ██║   ██║   ██║██║   ██║███████║██║         █████╗  ██████╔╝███████║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║██████╔╝█████╔╝  *
*    ██║   ██║   ██║╚██╗ ██╔╝██╔══██║██║         ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║██╔══██╗██╔═██╗  *
*    ██║   ╚██████╔╝ ╚████╔╝ ██║  ██║███████╗    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗ *
*    ╚═╝    ╚═════╝   ╚═══╝  ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ *
*                                                                                                                               *
*                                                                                                                               *
* This file is part of Tuval Framework.                                                                                         *
* Copyright (c) Tuvalsoft 2019 All rights reserved.                                                                             *
*                                                                                                                               *
* Licensed under the GNU General Public License v3.0.                                                                           *
* More info at: https://choosealicense.com/licenses/gpl-3.0/                                                                    *
* Tuval Framework Created By Tuvalsoft in 2019                                                                                  *
******************************************************************************************************************************@*/
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TreeController.tsx":
/*!********************************!*\
  !*** ./src/TreeController.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditIcon: () => (/* binding */ EditIcon),
/* harmony export */   TreeController: () => (/* binding */ TreeController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var EditIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" }))); };
var TreeController = /** @class */ (function (_super) {
    __extends(TreeController, _super);
    function TreeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeController.prototype.LoadView = function () {
        var _a;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _b = this.props.config || {}, onItemSelected = _b.onItemSelected, item = _b.item;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _c[0], setIsEditing = _c[1];
        var _d = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(item === null || item === void 0 ? void 0 : item.name), title = _d[0], setTitle = _d[1];
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDocument)(workspaceId).updateDocument;
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useAppletNavigate)().navigate;
        var _e = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useDeleteApplet)(), deleteApplet = _e.deleteApplet, isLoading = _e.isLoading;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 2 })(
        // Title
        (isEditing && _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.string(item === null || item === void 0 ? void 0 : item.name)) ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)()
                .border('0')
                .fontSize(14)
                // .fontWeight('500')
                .marginLeft(-2)
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, 3)
                .value(title)
                .onChange(function (value) { return setTitle(value); })
                .outline({ focus: 'none' })
                .onBlur(function () {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: item.$id,
                    data: {
                        name: title
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: item.$id,
                        data: {
                            name: title
                        }
                    }, function () {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: item });
                    });
                });
            }))
                .draggable(true)
                .onDragStart(function (e) {
                e.preventDefault();
                e.stopPropagation();
            })
                .height()
                .onClick(function (e) { return e.stopPropagation(); })
                .onClickAway(function () {
                setTimeout(function () {
                    setIsEditing(false);
                }, 100);
                //setIsEditing(false);
            })
            :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(
                // HDivider().background('#E4EAE2').height(1),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item === null || item === void 0 ? void 0 : item.name)
                    .foregroundColor('white')
                    .fontSize(12)
                    .fontWeight('500')
                    .textTransform('uppercase'))
                    .width()
                    .height(24)
                    .padding('4px 8px 4px 5px')
                    .cornerRadius(6)
                    //  .background('rgb(16, 144, 224)')
                    .background((_a = applet === null || applet === void 0 ? void 0 : applet.themeColor) !== null && _a !== void 0 ? _a : 'rgb(16, 144, 224)')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)()
                    .model([
                    {
                        title: 'DIVIDER APPLET',
                        type: 'Title'
                    },
                    {
                        title: 'Rename',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__edit', '#151719', '18px', '18px'),
                        onClick: function () { return setIsEditing(true); }
                    },
                    {
                        title: 'Applet settings',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return navigate("settings/general"); }
                    },
                    {
                        title: 'Delete Applet',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete', '#bc4841', '18px', '18px'),
                        color: '#bc4841',
                        onClick: function () {
                            deleteApplet(applet.$id, function () {
                                // alert('deleted')
                                _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: item });
                            });
                        }
                    },
                ])
                    .icon(EditIcon))
                    .width().height()
                    .onClick(function (e) { return e.stopPropagation(); }))
                    .height(30)
                    //.marginVertical(5)
                    //  .padding()
                    // .background('#E4EAE2')
                    .cornerRadius(5)
        //.clipPath('polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%, 0 0)')
        )
            .onClick(function () {
            navigate("");
        }));
    };
    return TreeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/+controller.ts":
/*!***********************************!*\
  !*** ./src/routes/+controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletController: () => (/* binding */ AppletController)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AppletController = /** @class */ (function (_super) {
    __extends(AppletController, _super);
    function AppletController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppletController.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var database = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDatabase)(workspaceId, appletId).database;
        var createCollection = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateCollection)(workspaceId).createCollection;
        var collections = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListCollections)(workspaceId, appletId).collections;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useState)(null), selectedCollection = _a[0], setSelectedCollection = _a[1];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)(database === null || database === void 0 ? void 0 : database.name)
            .fontFamily("ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol")
            .fontSize(18)
            .fontWeight("500"))
            .padding('6px 12px 6px 6px'))
            .paddingTop('12px')
            .paddingBottom('8px')
            .paddingRight('24px')
            .background('white')
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)('com.celmino.widget.tab-view')
            .config({
            //  allViews: views,
            views: collections !== null && collections !== void 0 ? collections : [],
            ////  isLoading: isTaskViewsLoading,
            //selectedIndex: taskViews?.findIndex(x => x.id === object_view_id),
            onChange: function (index) {
                setSelectedCollection(collections[index]);
                navigate("/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/collection-").concat(collections[index].$id));
                /*    setWidgetController({
                       controller: class extends WidgetController { }
                   });
                   setSelectedViewIndex(index) */
            },
            actions: [
                {
                    title: 'New Collection',
                    onClick: function () {
                        //DynoDialog.Show(AddCollectionDialog(workspaceId, appletId));
                    }
                }
            ]
        }))
            .background('white')
            .borderTop('1px solid rgba(0,0,0,.05)')
            .borderBottom('1px solid rgba(0,0,0,.05)')
            .height(50), 
        //Text(JSON.stringify(collections)),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIRouteOutlet)().width('100%').height('100%')));
    };
    return AppletController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIFormController));



/***/ }),

/***/ "./src/routes/+routes.ts":
/*!*******************************!*\
  !*** ./src/routes/+routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteController: () => (/* binding */ RouteController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+controller */ "./src/routes/+controller.ts");
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/+controller */ "./src/routes/settings/+controller.ts");
/* harmony import */ var _settings_general_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/general/+controller */ "./src/routes/settings/general/+controller.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RouteController = /** @class */ (function (_super) {
    __extends(RouteController, _super);
    function RouteController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteController.prototype.routeView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _controller__WEBPACK_IMPORTED_MODULE_1__.AppletController).children(
            /*  UIRoute('list/:listId', ListController).children(
                 UIRoute('view/:viewId', class extends  ViewController {}),
             ), */
            /*  UIRoute('folder/:folderId',   class extends  FolderController {} ),
             UIRoute('document/:documentId',   class extends  DocumentController {} ),
             UIRoute('whiteboard/:whiteboardId',   class extends  WhiteboardController {} ),
             UIRoute(':view_id', ViewController),
             UIRoute(':view_id/*', ViewController) */
            ), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/settings', _settings_controller__WEBPACK_IMPORTED_MODULE_2__.SettingsController).children(
            //UIRoute('features', FeatureSettingsController),
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('general', _settings_general_controller__WEBPACK_IMPORTED_MODULE_3__.GeneralSettingsController))))
                .background('var(--primary-background-color)');
        }));
    };
    RouteController.prototype.LoadView = function () {
        return this.routeView();
    };
    return RouteController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/settings/+controller.ts":
/*!********************************************!*\
  !*** ./src/routes/settings/+controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsController: () => (/* binding */ SettingsController),
/* harmony export */   getSettingsName: () => (/* binding */ getSettingsName)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


function getSettingsName() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/settings\/([^\/]+)/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];
    }
    else {
        return;
    }
}
var SettingsController = /** @class */ (function (_super) {
    __extends(SettingsController, _super);
    function SettingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingsController.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var menu = [
            {
                id: 'general',
                title: 'General',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/general"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-settings')
            },
            {
                id: 'import',
                title: 'Document Types',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/import"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-importIcon')
            },
            {
                id: 'features',
                title: 'Features',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/features"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-settings')
            },
            {
                id: 'collections',
                title: 'Collections',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/collections"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-settings')
            },
            {
                id: 'import',
                title: 'Integrations',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/import"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-importIcon')
            },
            {
                id: 'security',
                title: 'Security & Permissions ',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/security"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-protectedAlt')
            },
            {
                id: 'import',
                title: 'Imports / Exports',
                url: "/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings/import"),
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-importIcon')
            },
        ];
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
        // 
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, __spreadArray([(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Heading)('DOCUMENT APPLET').h3().foregroundColor('rgb(101, 111, 125)')
                .fontSize(11).fontWeight('600')).padding('16px 8px 8px').height()], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(menu)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 8 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(item.icon).foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : 'rgb(42, 46, 52)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(item.title).fontSize(14).foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : 'rgb(42, 46, 52)')
                .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
                .lineHeight(16)).height(32)
                .cornerRadius(6)
                .background({ default: item.id === getSettingsName() ? '#E5E4FC' : '', hover: '#E8EAED' })
                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 8)
                .cursor('pointer')
                .onClick(function () {
                navigate(item.url);
            });
        }), false)).padding()
            .background('#F7F8F9')
            .allWidth(240)
            .margin('0 8px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteOutlet)().width('100%').height('100%')));
    };
    return SettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIFormController));



/***/ }),

/***/ "./src/routes/settings/general/+controller.ts":
/*!****************************************************!*\
  !*** ./src/routes/settings/general/+controller.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralSettingsController: () => (/* binding */ GeneralSettingsController)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var GeneralSettingsController = /** @class */ (function (_super) {
    __extends(GeneralSettingsController, _super);
    function GeneralSettingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeneralSettingsController.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('General').fontSize(24).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Applet').fontSize(20).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Name').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.TextField)()
            .value(applet === null || applet === void 0 ? void 0 : applet.name)
            .border('0')
            .outline({ focus: 'none' })
            .shadow('rgba(224, 227, 230, 0.7) 0px 0px 0px 1px')
            .padding(12)
            .cornerRadius(6)).height().width(400))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Icon').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIWidget)("com.tuvalsoft.widget.icons")
            .config({
            onChange: function (value) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: appletId,
                    data: {
                        iconName: value.iconName,
                        iconCategory: value.iconCategory
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: appletId,
                        data: {
                            iconName: value.iconName,
                            iconCategory: value.iconCategory
                        }
                    }, function () {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: value });
                    });
                });
            },
            selectedIcon: applet === null || applet === void 0 ? void 0 : applet.iconName,
            color: applet === null || applet === void 0 ? void 0 : applet.themeColor,
            selectedCategory: applet === null || applet === void 0 ? void 0 : applet.iconCategory,
            width: 32,
            height: 32
        }))
            .border('1px dashed rgba(69,104,251,.3)')
            .transition('border-color .12s ease-in-out')
            .cornerRadius(6)
            .padding(4)
            //.background('#FCE8E8')
            .width(44).height(44).cornerRadius(5))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(Text('Theme Color')
            .fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.ColorSelect)({
            onSelect: function (color) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: appletId,
                    data: {
                        themeColor: color
                    }
                }, function () {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'ws_tree',
                        documentId: appletId,
                        data: {
                            iconColor: color
                        }
                    }, function (item) {
                        _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: item });
                    });
                });
            }
        }).width(500))
            .height()
            .margin('0 0 30px'))
            .padding('24px 48px'));
    };
    return GeneralSettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIFormController));



/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.applet.category',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@celmino/platform":
/*!***********************************!*\
  !*** external "celmino$platform" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$platform;

/***/ }),

/***/ "@realmocean/sdk":
/*!*********************************!*\
  !*** external "realmocean$sdk" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$sdk;

/***/ }),

/***/ "@tuval/core":
/*!*****************************!*\
  !*** external "tuval$core" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$core;

/***/ }),

/***/ "@tuval/forms":
/*!******************************!*\
  !*** external "tuval$forms" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$forms;

/***/ }),

/***/ "react":
/*!******************************!*\
  !*** external "tuval$react" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$react;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/Application.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessMining: () => (/* binding */ ProcessMining)
/* harmony export */ });
/* harmony import */ var _TreeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeController */ "./src/TreeController.tsx");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/+routes */ "./src/routes/+routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var manifest = __webpack_require__(/*! ./manifest */ "./src/manifest.js");
function App(manifest) {
    return function (constructor) {
        if (tuval$core['__APPS__'] == null) {
            tuval$core['__APPS__'] = {};
        }
        tuval$core['__APPS__'][manifest.application.name] = constructor;
    };
}
var ProcessMining = /** @class */ (function () {
    function ProcessMining() {
    }
    ProcessMining.prototype.GetMainController = function () {
        return {
            tree: _TreeController__WEBPACK_IMPORTED_MODULE_0__.TreeController,
            applet: _routes_routes__WEBPACK_IMPORTED_MODULE_1__.RouteController
        };
    };
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}());


})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.applet.category', tuval$core['__APPS__']['com.celmino.applet.category']);
                    