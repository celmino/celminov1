
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

/***/ "./src/AppController2.ts":
/*!*******************************!*\
  !*** ./src/AppController2.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppController2: () => (/* binding */ AppController2)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddSpaceDialog */ "./src/dialogs/AddSpaceDialog.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _views_TreeNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/TreeNode */ "./src/views/TreeNode.ts");
/* harmony import */ var _views_TreeNode2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/TreeNode2 */ "./src/views/TreeNode2.ts");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var subNodes = function (level, nodeType, parentId, workspaceId, appletId) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'dm_tree', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('parent', parentId)
    ]), items = _a.documents, isLoading = _a.isLoading;
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
    return (_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(items)(function (item) {
        return (0,_views_TreeNode__WEBPACK_IMPORTED_MODULE_4__.TreeNode)({
            title: item.name,
            level: level,
            nodeType: item.type,
            isSelected: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDocumentId)() === item.$id,
            subNode: function (nodeType) { return subNodes(level + 1, nodeType, item.$id, workspaceId, appletId); },
            requestIcon: function (nodeType, selected, expanded) {
                switch (nodeType) {
                    case 'folder':
                        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(expanded ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarFolder', '#151719', '18px', '18px')).foregroundColor('#7C828D');
                    default:
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarDoc', selected ? '#7b68ee' : '#151719', '18px', '18px')));
                }
            },
            requestNavigation: function () {
                switch (item.type) {
                    case 'folder':
                        navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/folder/").concat(item.$id));
                        break;
                    case 'document':
                        navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/document/").concat(item.$id));
                        break;
                }
            }
        });
    })));
}); };
var AppController2 = /** @class */ (function (_super) {
    __extends(AppController2, _super);
    function AppController2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppController2.prototype.LoadView = function () {
        var _a = this.props.config || {}, node = _a.node, workspaceId = _a.workspaceId, appletId = _a.appletId, appletName = _a.appletName, subNodes = _a.subNodes, requestMenu = _a.requestMenu, requestEditMenu = _a.requestEditMenu, requestNavigation = _a.requestNavigation, isEditing = _a.isEditing, editingChanged = _a.editingChanged, titleChanged = _a.titleChanged, isSelected = _a.isSelected, iconName = _a.iconName, iconCategory = _a.iconCategory;
        // const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId })
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.OptionsContext)(function () { return ((0,_views_TreeNode2__WEBPACK_IMPORTED_MODULE_5__.TreeNode2)({
            node: node,
            title: appletName,
            isSelected: isSelected,
            requestMenu: requestMenu,
            requestEditMenu: requestEditMenu,
            requestNavigation: requestNavigation,
            isEditing: isEditing,
            editingChanged: editingChanged,
            titleChanged: titleChanged,
            iconName: iconName,
            iconCategory: iconCategory,
            //isExpand: expanded,
            //expandChanged: setExpanded,
            subNode: function (nodeType) { return (void 0
            //subNodes(TreeNode, 1, nodeType, '-1', workspaceId, appletId)
            ); }
        })); })
            .options(__assign({}, (this.props.config || {}))));
    };
    return AppController2;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction('saveSpace', _dialogs_AddSpaceDialog__WEBPACK_IMPORTED_MODULE_2__.SaveSpaceAction);


/***/ }),

/***/ "./src/Icons.tsx":
/*!***********************!*\
  !*** ./src/Icons.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddIcon: () => (/* binding */ AddIcon),
/* harmony export */   EditIcon: () => (/* binding */ EditIcon),
/* harmony export */   OkrIcons: () => (/* binding */ OkrIcons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var OkrIcons;
(function (OkrIcons) {
    OkrIcons.ObjectiveIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", "data-icon": "goal", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3Z", fill: "#C6DFFE" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8ZM8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.933 11.5 11.5 9.933 11.5 8C11.5 6.067 9.933 4.5 8 4.5Z", fill: "#0052CB" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { x: "6.5", y: "6.5", width: "3", height: "3", rx: "1.5", fill: "#0052CB" }))); };
    OkrIcons.KeyResultIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", "data-icon": "metric", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V13C16 14.6569 14.6569 16 13 16H3C1.34315 16 0 14.6569 0 13V3Z", fill: "#A4E9D8" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.9272 4.13356C13.2676 4.36948 13.3524 4.83674 13.1165 5.17719L10.3012 9.23969C10.111 9.51426 9.76205 9.62989 9.44546 9.5233L6.33302 8.4753L3.84426 11.7076C3.59156 12.0358 3.12064 12.097 2.79245 11.8443C2.46425 11.5916 2.40305 11.1206 2.65575 10.7924L5.47097 7.1362C5.6663 6.88251 6.00113 6.7808 6.30455 6.88297L9.38959 7.92174L11.8836 4.32282C12.1195 3.98236 12.5867 3.89763 12.9272 4.13356Z", fill: "#01837B" }))); };
})(OkrIcons || (OkrIcons = {}));
var AddIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10 15a.75.75 0 0 0 .75-.75v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5c0 .414.336.75.75.75Z" }))); };
var EditIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" }))); };


/***/ }),

/***/ "./src/WorkbenchIcons.tsx":
/*!********************************!*\
  !*** ./src/WorkbenchIcons.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkbenchIcons: () => (/* binding */ WorkbenchIcons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var WorkbenchIcons;
(function (WorkbenchIcons) {
    WorkbenchIcons.FormIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M5.529 1.529A.667.667 0 0 1 6 1.333h2.667c.176 0 .346.07.471.196L9.61 2H11c.92 0 1.667.746 1.667 1.667V5l-1.334 1.333V3.667A.333.333 0 0 0 11 3.333H9.333a.667.667 0 0 1-.471-.195l-.471-.471H6.276l-.471.471a.667.667 0 0 1-.472.195H3.667a.333.333 0 0 0-.334.334V13c0 .184.15.333.334.333H11a.333.333 0 0 0 .333-.333v-2l1.334-1.333V13c0 .92-.746 1.667-1.667 1.667H3.667C2.747 14.667 2 13.92 2 13V3.667C2 2.747 2.746 2 3.667 2h1.39l.472-.471z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { stroke: "transparent", d: "M9.333 6h-4a.667.667 0 0 1 0-1.333h4a.667.667 0 1 1 0 1.333zM8 8.667H5.333a.667.667 0 0 1 0-1.334H8a.667.667 0 0 1 0 1.334zm1.138 3.138 5.333-5.334a.667.667 0 1 0-.942-.942l-5.334 5.333a.667.667 0 1 0 .943.943z" }))); };
    WorkbenchIcons.CollapseRightIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "24", height: "24", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.435 8.464a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.829 2.829a1 1 0 1 1-1.414-1.415L14.556 13H3a1 1 0 1 1 0-2h11.556l-1.121-1.121a1 1 0 0 1 0-1.415z", "clip-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M21 4.5a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0v-13a1 1 0 0 1 1-1z", fill: "currentColor" }))); };
    WorkbenchIcons.CollapseLeftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "100%", height: "100%", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M10.565 15.536a1 1 0 0 1-1.414 0l-2.829-2.829a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L9.444 11H21a1 1 0 1 1 0 2H9.444l1.121 1.121a1 1 0 0 1 0 1.415Z", "clip-rule": "evenodd" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M3 19.5a1 1 0 0 1-1-1v-13a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1Z", fill: "currentColor" }))); };
    var HomeIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M8.407 2.06a.6.6 0 0 0-.814 0l-6.5 6a.6.6 0 1 0 .814.881l.493-.455V13A1.6 1.6 0 0 0 4 14.6h3.1V11a.4.4 0 0 1 .4-.4h1c.22 0 .4.18.4.4v3.6H12a1.6 1.6 0 0 0 1.6-1.6V8.486l.493.455a.6.6 0 0 0 .814-.881l-6.5-6zM12.4 7.378 8 3.317 3.6 7.378V13a.4.4 0 0 0 .4.4h1.9V11a1.6 1.6 0 0 1 1.6-1.6h1a1.6 1.6 0 0 1 1.6 1.6v2.4H12a.4.4 0 0 0 .4-.4V7.378z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.DocIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 5a1 1 0 0 1 1-1h6.172a1 1 0 0 1 .707.293l3.828 3.828a1 1 0 0 1 .293.707V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1-3a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 13.172 2H7zm2 6a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H9zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.DocIcon2 = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "25", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" })))); };
    var DraftIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19 5H5v3h14V5zm.983 4.742A2 2 0 0 0 21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3a2 2 0 0 0 1.016 1.742A2.18 2.18 0 0 0 4 10v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9c0-.087-.006-.174-.017-.258zM18 10H6v9h12v-9zm-9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.WhiteboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.142 4.291a3 3 0 0 1 4.242 4.243l-4.455 4.455a2 2 0 0 1-1.158.57l-1.624.209a2 2 0 0 1-2.24-2.24l.21-1.623a2 2 0 0 1 .57-1.159l4.455-4.455Zm2.828 1.414a1 1 0 0 0-1.414 0L15.1 10.16l-.21 1.624 1.624-.21L20.97 7.12a1 1 0 0 0 0-1.415Zm-16.4-.12a1.25 1.25 0 0 0-1.25 1.25v2.522l1.585-1.409a3.097 3.097 0 0 1 4.114 4.63l-.903.803a1.059 1.059 0 1 0 1.452 1.54l1.044-1.044a1 1 0 0 1 1.415 1.414l-1.045 1.044a3.059 3.059 0 1 1-4.195-4.45l.904-.802a1.097 1.097 0 1 0-1.458-1.64l-2.914 2.59v5.301c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V14.21a1 1 0 0 1 2 0v3.125a3.25 3.25 0 0 1-3.25 3.25H4.57a3.25 3.25 0 0 1-3.25-3.25V11.59a.72.72 0 0 1 0-.01V6.835a3.25 3.25 0 0 1 3.25-3.25h9.023a1 1 0 1 1 0 2H4.57Z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.AddFolder = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M4 18c-1.105 0-2-.894-2-1.999V5.998C2 4.891 2.898 4 4 4h4.609a2 2 0 0 1 1.357.53l1.925 1.778H17a2 2 0 0 1 2 2v1.846a1 1 0 1 1-2 0V8.308h-5.109a2 2 0 0 1-1.357-.53L8.61 6H4v10h7v2H4zm7 0a1 1 0 1 0 0-2v2zm7-5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.FolderClosed = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M15 5.5c0-.84-.672-1.5-1.5-1.5H7.707L5.854 2.146A.5.5 0 0 0 5.5 2h-3A1.5 1.5 0 0 0 1 3.5v8A1.5 1.5 0 0 0 2.5 13h11c.83 0 1.5-.67 1.5-1.5v-6z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Edit = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M16.503 4.413a1.41 1.41 0 0 1 1.994 0l1.092 1.092c.55.55.55 1.443 0 1.994L18.5 8.588l-3.086-3.086 1.089-1.089zM14 6.916l3.086 3.086-9.54 9.54-3.43.343.343-3.429L14 6.916zm5.911-3.917a3.41 3.41 0 0 0-4.822 0L3.045 15.042a2 2 0 0 0-.576 1.215l-.464 4.645a1 1 0 0 0 1.094 1.095l4.645-.465a2 2 0 0 0 1.215-.576L21.003 8.913a3.41 3.41 0 0 0 0-4.822L19.91 2.999z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Link = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M11.843 3.743a5.95 5.95 0 1 1 8.414 8.414l-2.55 2.55a1 1 0 0 1-1.414-1.414l2.55-2.55a3.95 3.95 0 1 0-5.586-5.586l-2.55 2.55a1 1 0 1 1-1.414-1.414l2.55-2.55zm2.45 4.55a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6zm-6.586 1a1 1 0 0 1 0 1.414l-2.55 2.55a3.95 3.95 0 0 0 5.586 5.586l2.55-2.55a1 1 0 1 1 1.414 1.414l-2.55 2.55a5.95 5.95 0 1 1-8.414-8.414l2.55-2.55a1 1 0 0 1 1.414 0z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Copy = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M6 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zM2 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6zm14 2h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2V8z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.CaretDown = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 320 512", style: { color: 'gray' }, width: "18", height: "18", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" }))); };
    WorkbenchIcons.CaretDown1 = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M13.276 8.5 8.813 4.294C8.143 3.666 7 4.111 7 5v10c0 .89 1.144 1.334 1.813.706l4.463-4.206c.965-1 .965-2 0-3Z" }))); };
    WorkbenchIcons.CaretRight = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 5 6", style: { color: 'gray' }, width: "18", height: "18", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M.5 5.596V.404c0-.36.478-.54.758-.285L4.12 2.714a.378.378 0 0 1 0 .572L1.258 5.88C.978 6.135.5 5.955.5 5.596z" }))); };
    WorkbenchIcons.Gantt = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", stroke: "transparent", d: "M1.333 3.333c0-.368.299-.666.667-.666h4A.667.667 0 1 1 6 4H2a.667.667 0 0 1-.667-.667zm0 3.334C1.333 6.298 1.632 6 2 6h9.333a.667.667 0 1 1 0 1.333H2a.667.667 0 0 1-.667-.666zm0 3.333c0-.368.299-.667.667-.667h6.667a.667.667 0 0 1 0 1.334H2A.667.667 0 0 1 1.333 10zm0 3.333c0-.368.299-.666.667-.666h12A.667.667 0 1 1 14 14H2a.667.667 0 0 1-.667-.667z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.KanbanBoard = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 16 16", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", stroke: "transparent", d: "M2 4.078C2 2.967 2.86 2 4 2h8c1.14 0 2 .967 2 2.078v6.393c0 1.111-.86 2.078-2 2.078H8.667v.04c0 1.11-.86 2.078-2 2.078H4c-1.14 0-2-.967-2-2.079v-8.51zm5.333-.745H4c-.333 0-.667.298-.667.745v8.51c0 .448.334.745.667.745h2.667c.332 0 .666-.297.666-.745V3.333zm1.334 0v7.883H12c.333 0 .667-.297.667-.745V4.078c0-.447-.334-.745-.667-.745H8.667z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.ObjectiveIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "gray", className: "icon flat-line", "data-name": "Flat Line", viewBox: "0 0 24 24" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "#2CA9BC", strokeWidth: "2", d: "M18 3L16 5 16 8 19 8 21 6 19 5 18 3z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "none", stroke: "gray", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 12l4-4m2-5l-2 2v3h3l2-2-2-1z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "none", stroke: "gray", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 12a9 9 0 11-9-9", "data-name": "primary" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "none", stroke: "gray", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M16 12a4 4 0 11-4-4", "data-name": "primary" }))); };
    WorkbenchIcons.DashboardIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", viewBox: "0 0 24 24" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { stroke: "gray", strokeLinecap: "round", strokeWidth: "2", d: "M13 12a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7zM4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 17a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM13 5a1 1 0 011-1h5a1 1 0 011 1v2a1 1 0 01-1 1h-5a1 1 0 01-1-1V5z" }))); };
    WorkbenchIcons.BPMNIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", version: "1.1", viewBox: "0 0 32 32", style: { color: 'gray' } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M29 21h-3v-3.427c0-.827-.673-1.5-1.5-1.5h-.839a.972.972 0 00-.45-.467l-5.87-2.935a2.975 2.975 0 00-.842-.259V11H20a3 3 0 003-3V7a3 3 0 00-3-3h-8a3 3 0 00-3 3v1a3 3 0 003 3h3.5v1.412a2.985 2.985 0 00-.842.259l-5.87 2.935a.976.976 0 00-.45.467H7.5c-.827 0-1.5.673-1.5 1.5V21H3a3 3 0 00-3 3v1a3 3 0 003 3h7a3 3 0 003-3v-1a3 3 0 00-3-3H7v-3.427a.5.5 0 01.5-.5h.924a.98.98 0 00.365.322l5.87 2.935a3 3 0 002.684 0l5.87-2.935a.972.972 0 00.365-.322h.922a.5.5 0 01.5.5V21h-3a3 3 0 00-3 3v1a3 3 0 003 3h7a3 3 0 003-3v-1a3 3 0 00-3-3zM10 8V7c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2h-8c-1.103 0-2-.897-2-2zm2 16v1c0 1.103-.897 2-2 2H3c-1.103 0-2-.897-2-2v-1c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2zm4.894-4.565a2.009 2.009 0 01-1.788 0L9.236 16.5l5.87-2.935c.276-.138.586-.211.894-.211s.618.073.894.211l5.87 2.935-5.87 2.935zM31 25c0 1.103-.897 2-2 2h-7c-1.103 0-2-.897-2-2v-1c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2v1z" }))); };
    WorkbenchIcons.SpreadsheetIcon = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", version: "1.1", viewBox: "0 0 475.636 475.636", style: { color: 'black' } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M200.811 400.719V355.39h107.377v22.353l14.315-14.89 7.176-7.463 6.845-7.119-6.694-7.201h-7.326v-7.88l-14.315-15.398v23.278H200.811v-47.011h85.319l-13.308-14.313H200.81v-49.632h58.695c4.557-7.294 11.845-12.373 20.147-14.315h-78.836v-53.686h107.378v52.755h14.312v-52.755h110.148v52.755h14.312V32.873c0-9.208-7.49-16.698-16.692-16.698H16.697C7.485 16.175 0 23.671 0 32.873v365.861c0 5.646 2.839 10.637 7.155 13.663v2.633h5.988c1.149.253 2.331.398 3.554.398h255.252l14.148-14.709h-85.286zM322.503 30.495h107.759a2.398 2.398 0 012.395 2.389v48.121H322.503v-50.51zm0 64.821h110.153v52.494H322.503V95.316zM200.811 30.495h107.377v50.509H200.811V30.495zm0 64.821h107.377v52.494H200.811V95.316zM66.005 400.719H15.458c-.673-.415-1.149-1.13-1.149-1.985V355.39h51.697v45.329zm0-59.65H14.309v-47.004h51.697v47.004zm0-61.314H14.309v-49.628h51.697v49.628zm0-63.945H14.309v-53.686h51.697v53.686zm0-68H14.309V95.316h51.697v52.494zm120.488 252.909H80.318V355.39h106.175v45.329zm0-59.65H80.318v-47.004h106.175v47.004zm0-61.314H80.318v-49.628h106.175v49.628zm0-63.945H80.318v-53.686h106.175v53.686zm0-68H80.318V95.316h106.175v52.494zm0-66.811H80.318v-50.51h106.175v50.51zm263.436 198.575v-19.376H324.007l74.103 79.69c4.637 4.988 4.562 12.748-.141 17.664l-73.271 76.201h125.231v-11.697c0-7.094 5.757-12.862 12.849-12.862s12.858 5.769 12.858 12.862v24.556c0 7.087-5.767 12.849-12.858 12.849h-168.28a12.824 12.824 0 01-11.823-7.814c-2.021-4.755-1.031-10.231 2.56-13.953l85.753-89.193-85.907-92.399a12.864 12.864 0 01-2.363-13.895 12.846 12.846 0 0111.781-7.721h168.28c7.092 0 12.858 5.768 12.858 12.854v32.23c0 7.097-5.767 12.858-12.858 12.858s-12.85-5.762-12.85-12.854z" }))); };
    WorkbenchIcons.Download = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M12 3a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 14.586V4a1 1 0 0 1 1-1zM3 20a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z", "clip-rule": "evenodd" }))); };
    WorkbenchIcons.Import = function (props) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", style: { color: 'gray' }, width: "16", height: "16", "aria-hidden": "true" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M8.5 3A3.5 3.5 0 0 0 5 6.5v1.056a1 1 0 0 0 2 0V6.5A1.5 1.5 0 0 1 8.5 5h9A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 7 17.5v-1.056a1 1 0 0 0-2 0V17.5A3.5 3.5 0 0 0 8.5 21h9a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3h-9z" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M12.707 8.293a1 1 0 1 0-1.414 1.414L12.586 11H3a1 1 0 1 0 0 2h9.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3z" }))); };
    WorkbenchIcons.TableIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
    WorkbenchIcons.GridIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
    WorkbenchIcons.BoardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 5.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8ZM14.5 4A1.5 1.5 0 0 0 13 5.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 14.5 4Z" })))); };
    WorkbenchIcons.ListIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.496 4C4.67 4 4 4.672 4 5.5S4.67 7 5.496 7h9.008C15.33 7 16 6.328 16 5.5S15.33 4 14.504 4H5.496ZM8.488 8.5c-.826 0-1.496.672-1.496 1.5s.67 1.5 1.496 1.5h6.016C15.33 11.5 16 10.828 16 10s-.67-1.5-1.496-1.5H8.488ZM9.984 14.5c0-.828.67-1.5 1.497-1.5h3.023c.826 0 1.496.672 1.496 1.5s-.67 1.5-1.496 1.5H11.48a1.498 1.498 0 0 1-1.497-1.5Z" })))); };
    WorkbenchIcons.TimelineIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9 5.5A1.5 1.5 0 0 1 10.5 4h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 9 5.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 4 14.5ZM5.5 8.5a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3h-9Z" })))); };
    WorkbenchIcons.CalendarIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.8 5.6a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM4 10a1.6 1.6 0 1 1 3.2 0A1.6 1.6 0 0 1 4 10ZM4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM10 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM8.4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM14.4 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM10 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 10 4Z" })))); };
    WorkbenchIcons.ReportIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.65 5a1.65 1.65 0 0 0-1.613 2l-2.812 3.4c-.057 0-.113.005-.169.011L9.893 9.206a1.65 1.65 0 1 0-3.26.174l-1.875 1.923a1.65 1.65 0 1 0 1.51 1.317l1.875-1.924a1.737 1.737 0 0 0 .389-.02l1.087 1.126a1.65 1.65 0 1 0 3.217-.21l2.723-3.294.091.002a1.65 1.65 0 0 0 0-3.3Z" })))); };
    WorkbenchIcons.FeedIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 12V9c0-2.047.466-3.163 1.08-3.665.426-.35.92-.783.92-1.335a1 1 0 0 0-1-1H9a4 4 0 0 0-4 4v3c0 2.047-.466 3.163-1.08 3.665-.426.35-.92.783-.92 1.335a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4ZM7 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" })))); };
    WorkbenchIcons.MapIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.814 3.67h.003c.135 0 .27.03.394.093l3.945 1.972 3.412-1.95a.875.875 0 0 1 1.309.76v8.727a.875.875 0 0 1-.44.76l-3.805 2.174a.87.87 0 0 1-.862.02l-3.922-1.962-3.412 1.95a.875.875 0 0 1-1.309-.76V6.727c0-.314.168-.604.44-.76L7.32 3.825a.87.87 0 0 1 .494-.153Zm3.495 3.598v6.77l-2.62-1.31v-6.77l2.62 1.31Z" })))); };
    WorkbenchIcons.DocumentIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" })))); };
    WorkbenchIcons.WhiteboardIcon1 = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.56 6.66a1.5 1.5 0 0 1 2.122-2.12l1.06 1.06a1.5 1.5 0 1 1-2.12 2.121L4.56 6.661ZM13.339 4.56a1.5 1.5 0 1 1 2.121 2.122l-1.06 1.06a1.5 1.5 0 1 1-2.122-2.12L13.34 4.56ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.76 12.26a1.5 1.5 0 0 0-2.12 0l-1.061 1.061A1.5 1.5 0 1 0 6.7 15.443l1.06-1.061a1.5 1.5 0 0 0 0-2.121ZM12.26 12.24a1.5 1.5 0 0 0 0 2.12l1.061 1.061a1.5 1.5 0 1 0 2.122-2.121l-1.061-1.06a1.5 1.5 0 0 0-2.121 0Z" })))); };
    WorkbenchIcons.FormIcon1 = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", style: { color: 'gray' }, width: "20", height: "20", fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v4.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V5.5ZM15 14.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5Z" })))); };
})(WorkbenchIcons || (WorkbenchIcons = {}));


/***/ }),

/***/ "./src/dialogs/AddSpaceDialog.ts":
/*!***************************************!*\
  !*** ./src/dialogs/AddSpaceDialog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSpaceDialog: () => (/* binding */ AddSpaceDialog),
/* harmony export */   SaveSpaceAction: () => (/* binding */ SaveSpaceAction)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var SaveSpaceAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var _a = formController.GetFormData(), databaseId = _a.databaseId, collectionId = _a.collectionId, workspaceId = _a.workspaceId, appletId = _a.appletId;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_spaces'), createDocument = _b.createDocument, isLoading = _b.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)('Save Space'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        delete data.databaseId;
        delete data.collectionId;
        delete data.workspaceId;
        createDocument({
            data: __assign({}, data)
        }, function () {
            dialog.Hide();
        });
    }));
}); };
var AddSpaceDialog = function (workspaceId, path) { return ({
    "title": 'Create space',
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": "saveSpace"
        }
    ],
    "fieldMap": {
        "workspaceId": {
            "name": "workspaceId",
            "type": "virtual",
            "value": workspaceId
        },
        "path": {
            "name": "path",
            "type": "virtual",
            "value": path
        },
        "space_name": {
            "label": "Name",
            "type": "text",
            "name": "name"
        },
        /*   "description": {
              "label": "Description",
              "type": "text",
              "multiline": true,
              "name": "description"
          }, */
    }
}); };


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAppletId: () => (/* binding */ getAppletId),
/* harmony export */   getDocumentId: () => (/* binding */ getDocumentId),
/* harmony export */   getListId: () => (/* binding */ getListId),
/* harmony export */   getWhiteboardId: () => (/* binding */ getWhiteboardId)
/* harmony export */ });
function getAppletId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)/;
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
function getListId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/list\/([^\/]+)/;
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
function getDocumentId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/document\/([^\/]+)/;
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
function getWhiteboardId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/whiteboard\/([^\/]+)/;
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


/***/ }),

/***/ "./src/views/TreeNode.ts":
/*!*******************************!*\
  !*** ./src/views/TreeNode.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeNode: () => (/* binding */ TreeNode)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/Icons.tsx");
/* harmony import */ var _WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WorkbenchIcons */ "./src/WorkbenchIcons.tsx");




var TreeNode = function (treeNodeProps) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var _a = treeNodeProps.isLoading, isLoading = _a === void 0 ? false : _a, _b = treeNodeProps.isEditing, isEditing = _b === void 0 ? false : _b, _c = treeNodeProps.isSelected, isSelected = _c === void 0 ? false : _c, _d = treeNodeProps.title, title = _d === void 0 ? '' : _d, _e = treeNodeProps.level, level = _e === void 0 ? 0 : _e, _f = treeNodeProps.menuModel, menuModel = _f === void 0 ? [] : _f, _g = treeNodeProps.subNode, subNode = _g === void 0 ? function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)(); } : _g, _h = treeNodeProps.nodeType, nodeType = _h === void 0 ? 'root' : _h, _j = treeNodeProps.titleChanged, titleChanged = _j === void 0 ? function () { return void 0; } : _j, _k = treeNodeProps.editingChanged, editingChanged = _k === void 0 ? function () { return void 0; } : _k, _l = treeNodeProps.iconName, iconName = _l === void 0 ? '' : _l, _m = treeNodeProps.iconCategory, iconCategory = _m === void 0 ? '' : _m, _o = treeNodeProps.requestIcon, requestIcon = _o === void 0 ? function () { return void 0; } : _o, _p = treeNodeProps.requestNavigation, requestNavigation = _p === void 0 ? function () { return void 0; } : _p, _q = treeNodeProps.requestMenu, requestMenu = _q === void 0 ? function () { return []; } : _q, _r = treeNodeProps.requestEditMenu, requestEditMenu = _r === void 0 ? function () { return null; } : _r;
    var _s = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = _s[0], setExpanded = _s[1];
    var menu = requestMenu(nodeType);
    var editMenu = requestEditMenu(nodeType);
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 2 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Loader)().size(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.LoaderSizes.XS) :
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(_WorkbenchIcons__WEBPACK_IMPORTED_MODULE_3__.WorkbenchIcons.CaretDown1).transform(expanded ? 'rotate(90deg)' : '')
            .transition('transform .12s ease-in-out'))
        .position('absolute')
        .transition('opacity .12s ease-in-out')
        .foregroundColor('rgba(109,122,131,0.9)')
        .allWidth(20).allHeight(20).cursor('pointer')
        //.visibility(`var(--display-caret)`)
        .opacity("var(--opacity-caret)"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)(_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.nullOrEmpty(iconName) ? requestIcon(nodeType, isSelected, expanded) /* Icon(WorkbenchIcons.DocIcon2) */ :
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)("com.tuvalsoft.widget.icons")
            .config({
            readonly: true,
            selectedIcon: iconName,
            selectedCategory: iconCategory,
            color: 'gray',
            backgroundColor: '',
            width: 20,
            height: 20,
            padding: 1
        }))
        .transition('opacity .12s ease-in-out')
        .position('absolute')
        //.background('#FCE8E8')
        .allWidth(18).allHeight(18)
        .cornerRadius(5)
        //.visibility('var(--display-icon)')
        .opacity('var(--opacity-icon)')).allWidth(30).allHeight(30)
        .transition('transform .12s ease-in-out')
        .onClick(function () {
        setExpanded(!expanded);
    }), 
    // Title
    (isEditing && _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(title)) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(title), newTitle = _a[0], setNewTitle = _a[1];
        //  const { updateDocument } = useUpdateDocument(workspaceId);
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)()
            .border('0')
            .fontSize(14)
            // .fontWeight('500')
            .marginLeft(-2)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cVertical, 3)
            .value(newTitle)
            .onChange(function (value) { return setNewTitle(value); })
            .outline({ focus: 'none' })
            .onBlur(function () {
            if (title !== newTitle) {
                titleChanged(newTitle);
            }
            editingChanged(false);
        }))
            .height()
            .onClickAway(function () {
            if (title !== newTitle) {
                titleChanged(newTitle);
                /*  updateDocument({
                     databaseId: 'workspace',
                     collectionId: 'applets',
                     documentId: appletId,
                     data: {
                         name: newTitle
                     }
                 }); */
            }
            editingChanged(false);
            //setIsEditing(false);
        }));
    })
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })(_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(title) ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(title)
                    .fontWeight(isSelected ? '400' : '400')
                    .fontSize(nodeType === 'root' ? 14 : 14)
                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                    .foregroundColor(isSelected ? '#7b68ee' : 'rgb(21, 23, 25)')
                    .lineHeight(22))
                    //.width('calc(100% - 40px)')
                    .height(32)
                : title)
                .onClick(function () {
                requestNavigation();
            })
                .overflow('hidden')
                .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spacer)(), (menu == null && editMenu == null) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTrailing })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 3 })(menu == null ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model(menu)
                .icon(_Icons__WEBPACK_IMPORTED_MODULE_2__.AddIcon), editMenu == null ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model(editMenu)
                .icon(_Icons__WEBPACK_IMPORTED_MODULE_2__.EditIcon)))
            .onClick(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
            .width(64).height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5)
            .display('var(--show-space-action-buttons)'))
        .transition('transform .12s ease-in-out')
        //.width('calc(100% - 0px)')
        .transform('translate3d(0px, 0, 0)')
        .fontWeight('500')
        .height() //.padding(5)
        .minHeight(30)
        //.padding(cVertical, isEditing ? 0 : 5)
        .paddingLeft("".concat(20 * level, "px"))
        .background({ default: isSelected ? '#E6EDFE' : '', hover: '#EBEDEF' })
        .cornerRadius(6)
        //.clipPath(isSelected ? 'polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%, 0 0)' : '')
        .variable('--show-space-action-buttons', { default: 'none', hover: isEditing ? 'none' : 'flex' })
        .variable("--display-caret", { default: 'hidden', hover: 'visible' })
        .variable("--display-icon", { default: 'visible', hover: 'hidden' })
        .variable("--opacity-caret", { default: '0', hover: '1' })
        .variable("--opacity-icon", { default: '1', hover: '0' }), expanded ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(subNode(nodeType))
            .height() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)()).height());
}); };


/***/ }),

/***/ "./src/views/TreeNode2.ts":
/*!********************************!*\
  !*** ./src/views/TreeNode2.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeNode2: () => (/* binding */ TreeNode2)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons */ "./src/Icons.tsx");



var TreeNode2 = function (treeNodeProps) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var node = treeNodeProps.node, _a = treeNodeProps.isLoading, isLoading = _a === void 0 ? false : _a, _b = treeNodeProps.isEditing, isEditing = _b === void 0 ? false : _b, _c = treeNodeProps.isSelected, isSelected = _c === void 0 ? false : _c, _d = treeNodeProps.title, title = _d === void 0 ? '' : _d, _e = treeNodeProps.level, level = _e === void 0 ? 0 : _e, _f = treeNodeProps.menuModel, menuModel = _f === void 0 ? [] : _f, _g = treeNodeProps.subNode, subNode = _g === void 0 ? function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)(); } : _g, _h = treeNodeProps.nodeType, nodeType = _h === void 0 ? 'root' : _h, _j = treeNodeProps.titleChanged, titleChanged = _j === void 0 ? function () { return void 0; } : _j, _k = treeNodeProps.editingChanged, editingChanged = _k === void 0 ? function () { return void 0; } : _k, _l = treeNodeProps.iconName, iconName = _l === void 0 ? '' : _l, _m = treeNodeProps.iconCategory, iconCategory = _m === void 0 ? '' : _m, _o = treeNodeProps.requestIcon, requestIcon = _o === void 0 ? function () { return void 0; } : _o, _p = treeNodeProps.requestNavigation, requestNavigation = _p === void 0 ? function () { return void 0; } : _p, _q = treeNodeProps.requestMenu, requestMenu = _q === void 0 ? function () { return []; } : _q, _r = treeNodeProps.requestEditMenu, requestEditMenu = _r === void 0 ? function () { return null; } : _r;
    var _s = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(false), expanded = _s[0], setExpanded = _s[1];
    var menu = requestMenu(node);
    var editMenu = requestEditMenu(node);
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 2 })(
    // Title
    (isEditing && _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(title)) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(title), newTitle = _a[0], setNewTitle = _a[1];
        //  const { updateDocument } = useUpdateDocument(workspaceId);
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.TextField)()
            .border('0')
            .fontSize(14)
            // .fontWeight('500')
            .marginLeft(-2)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cVertical, 3)
            .value(newTitle)
            .onChange(function (value) { return setNewTitle(value); })
            .outline({ focus: 'none' })
            .onBlur(function () {
            if (title !== newTitle) {
                titleChanged(newTitle);
            }
            editingChanged(false);
        }))
            .draggable(true)
            .height()
            .onDragStart(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
            .onDragOver(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
            .onDragLeave(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
            .onClickAway(function () {
            if (title !== newTitle) {
                titleChanged(newTitle);
                /*  updateDocument({
                     databaseId: 'workspace',
                     collectionId: 'applets',
                     documentId: appletId,
                     data: {
                         name: newTitle
                     }
                 }); */
            }
            editingChanged(false);
            //setIsEditing(false);
        }));
    })
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })(_tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(title) ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(title)
                    .fontWeight(isSelected ? '400' : '400')
                    .fontSize(nodeType === 'root' ? 14 : 14)
                    .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol')
                    .foregroundColor(isSelected ? '#7b68ee' : 'rgb(21, 23, 25)')
                    .lineHeight(22))
                    //.width('calc(100% - 40px)')
                    .allHeight(28)
                : title)
                .onClick(function () {
                requestNavigation();
            })
                .overflow('hidden')
                .height(), (menu == null && editMenu == null) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTrailing })((menu == null || menu.length === 0) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model(menu)
                .icon(_Icons__WEBPACK_IMPORTED_MODULE_2__.AddIcon), (editMenu == null || editMenu.length === 0) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)()
                .model(editMenu)
                .icon(_Icons__WEBPACK_IMPORTED_MODULE_2__.EditIcon))
            .onClick(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
            .allWidth(64).height(32).padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 5)
            .display('var(--show-space-action-buttons)'))
        .transition('transform .12s ease-in-out')
        //.width('calc(100% - 0px)')
        .transform('translate3d(0px, 0, 0)')
        .fontWeight('500')
        .height() //.padding(5)
        .allHeight(30)
        //.padding(cVertical, isEditing ? 0 : 5)
        .paddingLeft("".concat(20 * level, "px"))
        .background({ default: isSelected ? '#E6EDFE' : '', hover: '#EBEDEF' })
        .cornerRadius(6)
        //.clipPath(isSelected ? 'polygon(95% 0, 100% 50%, 95% 100%, 0 100%, 0 50%, 0 0)' : '')
        .variable('--show-space-action-buttons', { default: 'none', hover: isEditing ? 'none' : 'flex' })
        .variable("--display-caret", { default: 'hidden', hover: 'visible' })
        .variable("--display-icon", { default: 'visible', hover: 'hidden' })
        .variable("--opacity-caret", { default: '0', hover: '1' })
        .variable("--opacity-icon", { default: '1', hover: '0' }), expanded ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading })(subNode(nodeType))
            .height() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)())
        .height());
}); };


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.widget.applet-tree',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

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
/* harmony export */   RatingWidget: () => (/* binding */ RatingWidget)
/* harmony export */ });
/* harmony import */ var _AppController2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppController2 */ "./src/AppController2.ts");
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
var RatingWidget = /** @class */ (function () {
    function RatingWidget() {
    }
    RatingWidget.prototype.GetMainController = function () {
        return _AppController2__WEBPACK_IMPORTED_MODULE_0__.AppController2;
    };
    RatingWidget = __decorate([
        App(manifest)
    ], RatingWidget);
    return RatingWidget;
}());

/* FormBuilder.injectAction('saveSpace', SaveSpaceAction);
FormBuilder.injectAction('dm_saveFolder', SaveFolderAction);
FormBuilder.injectAction('saveDocument', SaveDocumentAction);
FormBuilder.injectAction('saveWhiteboard', SaveWhiteboardAction);
 */

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.applet-tree', tuval$core['__APPS__']['com.celmino.widget.applet-tree']);
                    