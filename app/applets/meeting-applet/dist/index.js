
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

/***/ "./src/TreeController.ts":
/*!*******************************!*\
  !*** ./src/TreeController.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeController: () => (/* binding */ TreeController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dialogs_AddMeetingSpace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddMeetingSpace */ "./src/dialogs/AddMeetingSpace.ts");
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



//import { AddDocumentDialog } from './dialogs/AddDocumentDialog';


var TreeController = /** @class */ (function (_super) {
    __extends(TreeController, _super);
    function TreeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeController.prototype.LoadView = function () {
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_3__.useAppletNavigate)().navigate;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var items = (this.props.data || {}).items;
        var _b = this.props.config || {}, organizationId = _b.organizationId, workspaceId = _b.workspaceId, appletId = _b.appletId, onItemSelected = _b.onItemSelected, item = _b.item;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_3__.useRealm)().realm;
        var organization = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_3__.useOrganization)(); // useGetCurrentOrganization();
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.applet-tree')
                .config({
                node: item,
                workspaceId: workspaceId,
                appletId: item.appletId,
                appletName: item.name,
                iconName: item.iconName,
                iconCategory: item.iconCategory,
                //isSelected: isAppletSettings(appletId) || isAppletOnly(appletId),
                isEditing: isEditing,
                editingChanged: function (status) { return setIsEditing(status); },
                titleChanged: function (title) {
                    updateDocument({
                        databaseId: 'workspace',
                        collectionId: 'applets',
                        documentId: appletId,
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
                            _tuval_core__WEBPACK_IMPORTED_MODULE_2__.EventBus.Default.fire('applet.added', { treeItem: item });
                        });
                    });
                },
                subNodes: function (TreeNode, level, nodeType, parentId, workspaceId, appletId) {
                    //  return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                },
                requestMenu: function (node) {
                    return [
                        /*  {
                             title: 'Add items',
                             type: 'Title'
                         }, */
                        {
                            title: 'Meeting Space',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-sidebarList', '#151719', '18px', '18px'),
                            onClick: function () { return _celmino_platform__WEBPACK_IMPORTED_MODULE_3__.DynoDialog.Show((0,_dialogs_AddMeetingSpace__WEBPACK_IMPORTED_MODULE_4__.AddMeetingSpace)(workspaceId, appletId, node.$id)); }
                        },
                        /* {
                            type: 'Divider'
                        },
                        {
                            title: 'Document',
                            icon: SvgIcon('cu3-icon-sidebarDoc', '#151719', '18px', '18px'),
                            onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, '-1', '/'))
                        },
                        {
                            title: 'Whiteboard',
                            icon: SvgIcon('cu3-icon-sidebarWhiteboards', '#151719', '18px', '18px'),
                            onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, '-1', '/'))
                        },
                        {
                            type: 'Divider'
                        },
                        {
                            title: 'Folder',
                            icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, '-1', '/'))
                        },
                        {
                            title: 'Smart Folder',
                            icon: SvgIcon('cu3-icon-sidebarFolderOpen', '#151719', '18px', '18px'),
                            onClick: () => DynoDialog.Show(AddFolderDialog(workspaceId, appletId, '-1', '/'))
                        }, */
                    ];
                },
                requestNavigation: function () {
                    switch (item.type) {
                        case 'applet':
                            navigate("meetings");
                    }
                },
                requestEditMenu: function () { return [
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
                        title: 'About',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return _celmino_platform__WEBPACK_IMPORTED_MODULE_3__.AboutDialog.Show(_celmino_platform__WEBPACK_IMPORTED_MODULE_3__.FeedApplet); }
                    }
                ]; }
            }));
        }));
    };
    return TreeController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);


/***/ }),

/***/ "./src/assets/Icons.tsx":
/*!******************************!*\
  !*** ./src/assets/Icons.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedIcon: () => (/* binding */ FeedIcon),
/* harmony export */   FilesIcon: () => (/* binding */ FilesIcon),
/* harmony export */   MeetingsIcon: () => (/* binding */ MeetingsIcon),
/* harmony export */   OverviewIcon: () => (/* binding */ OverviewIcon),
/* harmony export */   TaskIcon: () => (/* binding */ TaskIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var OverviewIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" }))); };
var MeetingsIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM112 256h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16z" }))); };
var TaskIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" }))); };
var FilesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" }))); };
var FeedIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M0 56C0 42.7 10.7 32 24 32c234.2 0 424 189.8 424 424c0 13.3-10.7 24-24 24s-24-10.7-24-24C400 248.3 231.7 80 24 80C10.7 80 0 69.3 0 56zM64 432a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM24 176c154.6 0 280 125.4 280 280c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232c-13.3 0-24-10.7-24-24s10.7-24 24-24z" }))); };


/***/ }),

/***/ "./src/dialogs/AddMeetingDialog.ts":
/*!*****************************************!*\
  !*** ./src/dialogs/AddMeetingDialog.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMeetingDialog: () => (/* binding */ AddMeetingDialog),
/* harmony export */   SaveMeetingAction: () => (/* binding */ SaveMeetingAction)
/* harmony export */ });
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
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




var SaveMeetingAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'meeting'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)('Save meeting space'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        createDocument({
            data: __assign({}, data)
        }, function (space) {
            dialog.Hide();
        });
    }));
}); };
SaveMeetingAction.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.nanoid)();
var getStartDate = function () {
    var start = (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment)(new Date());
    var remainder = 15 - (start.minute() % 15);
    var dateTime = (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment)(start).add(remainder, "minutes").toDate();
    return dateTime;
};
var getEndDate = function () {
    return (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment)(getStartDate()).add(1, 'hour').toDate();
};
var AddMeetingDialog = function (workspaceId, appletId, parent) { return ({
    "title": 'Create meeting',
    workspaceId: workspaceId,
    appletId: appletId,
    "actions": [
        {
            "label": "Save",
            "type": SaveMeetingAction.Id
        }
    ],
    "fieldMap": {
        "name": {
            "label": "Title",
            "type": "text",
            "name": "name"
        },
        "start_at": {
            "label": "From",
            "type": "datetimepicker",
            datePickerRenderer: _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.DatePickerRenderer,
            timePickerRenderer: _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.DatePickerRenderer,
            "name": "start_at",
            defaultValue: getStartDate(),
            onChange: function (controller, value) {
                controller.SetValue('end_at', (0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment)(value).add(1, 'hour').toDate());
                console.log(JSON.stringify(controller.GetFormData()));
            }
        },
        "end_at": {
            "label": "To",
            "type": "datetimepicker",
            datePickerRenderer: _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.DatePickerRenderer,
            timePickerRenderer: _realmocean_antd__WEBPACK_IMPORTED_MODULE_0__.DatePickerRenderer,
            "name": "end_at",
            defaultValue: getEndDate()
        },
        /*  "select": {
             "label": "Select Template",
             protocol: MeetingProtocol,
             "resource": 'meetings',
             filter: {
                 scope_id: scope_id,
                 is_template: 1
 
             },
             "type": "select",
             "name": "template_id",
             "text": "title",
             "key": "id"
         } */
    }
}); };


/***/ }),

/***/ "./src/dialogs/AddMeetingSpace.ts":
/*!****************************************!*\
  !*** ./src/dialogs/AddMeetingSpace.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddMeetingSpace: () => (/* binding */ AddMeetingSpace),
/* harmony export */   SaveMeetingSpace: () => (/* binding */ SaveMeetingSpace)
/* harmony export */ });
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
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



var SaveMeetingSpace = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId, parent = formMeta.parent;
    var createWorkspaceTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'workspace', 'ws_tree').createDocument;
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'meeting_space'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Save meeting space'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        createDocument({
            data: __assign({}, data)
        }, function (space) {
            createWorkspaceTreeItem({
                documentId: space.$id,
                data: {
                    name: data.name,
                    type: 'space',
                    parent: parent,
                    tree_widget: 'com.celmino.applet.meetings',
                    appletId: appletId,
                    path: (new Date()).getTime().toString(),
                    iconName: 'bell',
                    iconCategory: 'Icons',
                    //viewer:'com.tuvalsoft.viewer.document'
                }
            }, function (item) {
                _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('applet.added', { treeItem: item });
            });
            createTreeItem({
                documentId: space.$id,
                data: __assign(__assign({}, data), { parent: '-1', type: 'space' })
            }, function () { return dialog.Hide(); });
        });
    }));
}); };
SaveMeetingSpace.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
var AddMeetingSpace = function (workspaceId, appletId, parent) { return ({
    "title": 'Create meeting space',
    workspaceId: workspaceId,
    appletId: appletId,
    parent: parent,
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": SaveMeetingSpace.Id
        }
    ],
    "fieldMap": {
        /*  "workspaceId": {
             "name": "workspaceId",
             "type": "virtual",
             "value": workspaceId
         },
         "appletId": {
             "name": "appletId",
             "type": "virtual",
             "value": appletId
         },
         "path": {
             "name": "path",
             "type": "virtual",
             "value": path
         }, */
        "name": {
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

/***/ "./src/routes/+controller.tsx":
/*!************************************!*\
  !*** ./src/routes/+controller.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletController: () => (/* binding */ AppletController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/ActionPanel */ "./src/routes/views/ActionPanel.tsx");
/* harmony import */ var _views_ViewHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/ViewHeader */ "./src/views/ViewHeader.ts");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_4__);
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
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)('overview'), selected = _a[0], setSelected = _a[1];
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_4__.useApplet)().applet;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ReactView)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_2__.ActionPanel)(), (0,_views_ViewHeader__WEBPACK_IMPORTED_MODULE_3__.ViewHeader)(applet.name, function () { return void 0; }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width('100%').height('100%'))
            .background('#F8FAFC'))).render())));
    };
    return AppletController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



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
/* harmony import */ var _meetings_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meetings/+controller */ "./src/routes/meetings/+controller.tsx");
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/+controller */ "./src/routes/settings/+controller.ts");
/* harmony import */ var _settings_features_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/features/+controller */ "./src/routes/settings/features/+controller.ts");
/* harmony import */ var _settings_general_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/general/+controller */ "./src/routes/settings/general/+controller.ts");
/* harmony import */ var _meetings_metting_meetingId_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meetings/metting-[meetingId]/+controller */ "./src/routes/meetings/metting-[meetingId]/+controller.ts");
/* harmony import */ var _meetings_metting_meetingId_topic_topicId_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meetings/metting-[meetingId]/topic-[topicId]/+controller */ "./src/routes/meetings/metting-[meetingId]/topic-[topicId]/+controller.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+controller */ "./src/routes/+controller.tsx");
/* harmony import */ var _overview_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overview/+controller */ "./src/routes/overview/+controller.ts");
/* harmony import */ var _tasks_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/+controller */ "./src/routes/tasks/+controller.ts");
/* harmony import */ var _files_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./files/+controller */ "./src/routes/files/+controller.ts");
/* harmony import */ var _feed_controller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feed/+controller */ "./src/routes/feed/+controller.ts");
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
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _controller__WEBPACK_IMPORTED_MODULE_7__.AppletController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('meetings', _meetings_controller__WEBPACK_IMPORTED_MODULE_1__.MeetingsController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':meetingId', _meetings_metting_meetingId_controller__WEBPACK_IMPORTED_MODULE_5__.MeetingController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':topicId', _meetings_metting_meetingId_topic_topicId_controller__WEBPACK_IMPORTED_MODULE_6__.TopicController))), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('overview', _overview_controller__WEBPACK_IMPORTED_MODULE_8__.OverviewController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('tasks', _tasks_controller__WEBPACK_IMPORTED_MODULE_9__.TasksController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('files', _files_controller__WEBPACK_IMPORTED_MODULE_10__.FilesController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('feed', _feed_controller__WEBPACK_IMPORTED_MODULE_11__.FeedController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/settings', _settings_controller__WEBPACK_IMPORTED_MODULE_2__.SettingsController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('features', _settings_features_controller__WEBPACK_IMPORTED_MODULE_3__.FeatureSettingsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('general', _settings_general_controller__WEBPACK_IMPORTED_MODULE_4__.GeneralSettingsController))))
                .background('var(--primary-background-color)');
        }));
    };
    RouteController.prototype.LoadView = function () {
        return this.routeView();
    };
    return RouteController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/feed/+controller.ts":
/*!****************************************!*\
  !*** ./src/routes/feed/+controller.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedController: () => (/* binding */ FeedController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Menu */ "./src/routes/views/Menu.ts");
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


var FeedController = /** @class */ (function (_super) {
    __extends(FeedController, _super);
    function FeedController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeedController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_views_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu)('feed'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Feed')));
    };
    return FeedController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/files/+controller.ts":
/*!*****************************************!*\
  !*** ./src/routes/files/+controller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesController: () => (/* binding */ FilesController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Menu */ "./src/routes/views/Menu.ts");
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


var FilesController = /** @class */ (function (_super) {
    __extends(FilesController, _super);
    function FilesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_views_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu)('files'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Files')));
    };
    return FilesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/meetings/+controller.tsx":
/*!*********************************************!*\
  !*** ./src/routes/meetings/+controller.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetingsController: () => (/* binding */ MeetingsController)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/antd */ "@realmocean/antd");
/* harmony import */ var _realmocean_antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dialogs_AddMeetingDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/AddMeetingDialog */ "./src/dialogs/AddMeetingDialog.ts");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_EmptyView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../views/EmptyView */ "./src/views/EmptyView.ts");
/* harmony import */ var _views_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/Menu */ "./src/routes/views/Menu.ts");
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









var MeetingsController = /** @class */ (function (_super) {
    __extends(MeetingsController, _super);
    function MeetingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeetingsController.prototype.LoadView = function () {
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useAppletNavigate)().navigate;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var meetingId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useParams)().meetingId;
        var _a = react__WEBPACK_IMPORTED_MODULE_4___default().useState(false), showTemplates = _a[0], setShowTemplates = _a[1];
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_6__.useListDocuments)(workspaceId, appletId, 'meeting'), meetings = _b.documents, isLoading = _b.isLoading;
        if (meetingId != null) {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIRouteOutlet)().width('100%').height('100%'));
        }
        /*  const { updateMeeting } = useUpdateMeeting();
 
         const { createMetric } = useCreateMetric(); */
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTop })((0,_views_Menu__WEBPACK_IMPORTED_MODULE_8__.Menu)('meetings'), isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTop, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Segmented)().options(["Upcoming", "This week", "Past", "Templates"])
                .onChange(function (value) {
                if (value === 'Templates') {
                    setShowTemplates(true);
                }
                else {
                    setShowTemplates(false);
                }
            })
                .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.SegmentedRenderer), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Button)().label('New Meeting')
                .renderer(_realmocean_antd__WEBPACK_IMPORTED_MODULE_1__.ButtonRenderer)
                .onClick(function () {
                /*   createMetric({
                      goalid: '23',
                      name: 'Metric 1'
                  }) */
                _celmino_platform__WEBPACK_IMPORTED_MODULE_0__.DynoDialog.Show((0,_dialogs_AddMeetingDialog__WEBPACK_IMPORTED_MODULE_5__.AddMeetingDialog)(workspaceId, appletId, null));
            })
            /*  Button(
                 Text('New Meeting')
             ).onClick(() => {
                 DynoDialog.Show(AddMeetingDialog(scope_id))
             }) */
            ).height(), (meetings === null || meetings === void 0 ? void 0 : meetings.length) === 0 ? (0,_views_EmptyView__WEBPACK_IMPORTED_MODULE_7__.EmptyView)() :
                isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Spinner)() :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIViewBuilder)(function () {
                        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.useDialogStack)().openDialog;
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ spacing: 10 }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.ForEach)(meetings)(function (meeting) {
                            var _a, _b;
                            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })(!meeting.is_template ?
                                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)((0,_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment)(meeting.start_at).date())
                                    .foregroundColor('white')
                                    .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                                    .fontSize(19)
                                    .fontWeight('700')).allWidth(35).allHeight(35).background('#0072CE').cornerRadius('50%').foregroundColor('white') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Fragment)(), !meeting.is_template ?
                                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)("".concat((_a = _tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment.utc(meeting.start_at).local().format('MMM')) === null || _a === void 0 ? void 0 : _a.toUpperCase(), ", ").concat((_b = _tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment.utc(meeting.end_at).local().format('dd')) === null || _b === void 0 ? void 0 : _b.toUpperCase()))
                                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cHorizontal, 10)
                                    .fontSize(13)
                                    .fontWeight('700')
                                    .foregroundColor('#8895a7')
                                    .fontFamily('Poppins, sans-serif, Helvetica, Arial') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Fragment)(), !meeting.is_template ?
                                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)("".concat(_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment.utc(meeting.start_at).local().format('HH:mm'), " - ").concat(_tuval_core__WEBPACK_IMPORTED_MODULE_2__.moment.utc(meeting.end_at).local().format('HH:mm')))
                                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cHorizontal, 10)
                                    .fontSize(13)
                                    .foregroundColor('#414953')
                                    .fontFamily('Poppins, sans-serif, Helvetica, Arial') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Fragment)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)()
                                .background('rgb(255, 216, 163)')
                                .width(10)
                                .height(10)
                                .cornerRadius('50%'))
                                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cHorizontal, 20)
                                .width()
                                .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)(meeting.name).fontSize('1.4rem').fontWeight('700')
                                .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cHorizontal, 10)
                                .foregroundColor('#00263A')
                                .fontFamily('Poppins, sans-serif, Helvetica, Arial'))
                                .height()
                                .onClick(function () {
                                /*  team_id ?
                                     navigate(`/@/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting.id}`)
                                     :
                                     navigate(`/@/${getAppFullName()}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting.id}`);
*/ 
                            }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.MenuButton)().icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Icons.Menu)
                                .model([
                                {
                                    title: 'Set as template',
                                    onClick: function () {
                                        //  updateMeeting(meeting.$id, { is_template: 1 })
                                    }
                                }
                            ]))
                                //  .allHeight(45)
                                .padding(7)
                                .shadow('0 1px 2px 0 rgba(0, 0, 0, 0.1)')
                                .foregroundColor('#00263A')
                                .cornerRadius('0.5rem')
                                .background({ default: 'white', hover: '#f0f2f5' })
                                .cursor('pointer')
                                .transition('color 0.3s')
                                .onClick(function () {
                                navigate("meeting-".concat(meeting.$id));
                                /* openDialog({
                                    title: meeting.name,
                                    view: Text(JSON.stringify(meeting))

                                }) */
                            });
                        })).height());
                    }))
                .padding()
                .maxWidth(900)));
    };
    return MeetingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIController));



/***/ }),

/***/ "./src/routes/meetings/metting-[meetingId]/+controller.ts":
/*!****************************************************************!*\
  !*** ./src/routes/meetings/metting-[meetingId]/+controller.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetingController: () => (/* binding */ MeetingController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
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




var findFirstTopic = function (items) {
    if (items == null)
        return null;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'topic') {
            return items[i];
        }
        else if (items[i].subItems) {
            var found = findFirstTopic(items[i].subItems);
            if (found) {
                return found;
            }
        }
    }
    return null;
};
var findDuration = function (items, item) {
    var sumDuration = 0;
    if (items == null)
        return null;
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'topic' && items[i].id !== item.id && items[i].duration != null) {
            sumDuration += items[i].duration;
        }
        else if (items[i].id === item.id) {
            return [sumDuration, true];
        }
        else if (items[i].subItems) {
            var _a = findDuration(items[i].subItems, item), duration = _a[0], found = _a[1];
            sumDuration += duration;
            if (found) {
                return [sumDuration, true];
            }
        }
    }
    return [sumDuration, false];
};
var MeetingController = /** @class */ (function (_super) {
    __extends(MeetingController, _super);
    function MeetingController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeetingController.prototype.LoadView = function () {
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(), api = _a[0], setApi = _a[1];
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useAppletNavigate)().navigate;
        var _b = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(), selectedItem = _b[0], setSelectedItem = _b[1];
        var realm = useRealm().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), meetingId = _c.meetingId, topicId = _c.topicId;
        var _d = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetDocument)({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'meeting',
            documentId: meetingId
        }), meeting = _d.document, isLoading = _d.isLoading;
        // const { updateMeeting } = useUpdateMeeting();
        var firtsTopic = findFirstTopic(meeting === null || meeting === void 0 ? void 0 : meeting.sections);
        var sumDuration = 0;
        var durationSetted = false;
        if (firtsTopic && topicId == null) {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('aaa')
            /*  team_id ?
                 UINavigate(`/@/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting_id}/topic/${firtsTopic.id}`)
                 : */
            //  UINavigate(`/meeting-${meetingId}/topic-${firtsTopic.id}`)
            );
        }
        else
            return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spinner)() :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat(meeting === null || meeting === void 0 ? void 0 : meeting.name, " on ").concat(_tuval_core__WEBPACK_IMPORTED_MODULE_3__.moment.utc(meeting === null || meeting === void 0 ? void 0 : meeting.start_at).local().format('MMM DD, YYYY')))
                    .fontSize(22).fontWeight('700').lineHeight(30)
                    .fontFamily('Poppins, sans-serif, Helvetica, Arial'), 
                //Monday, August 21, 2023 • 14:30 - 15:30 Bu workspace yeni
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat(_tuval_core__WEBPACK_IMPORTED_MODULE_3__.moment.utc(meeting === null || meeting === void 0 ? void 0 : meeting.start_at).local().format('dddd, MMMM DD, YYYY • HH:mm'))).fontSize(13).fontWeight('700').lineHeight(26)
                    .fontFamily('Poppins, sans-serif, Helvetica, Arial'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat(_tuval_core__WEBPACK_IMPORTED_MODULE_3__.moment.utc(meeting === null || meeting === void 0 ? void 0 : meeting.end_at).local().format('- HH:mm'))).fontSize(13).fontWeight('700').lineHeight(26)
                    .fontFamily('Poppins, sans-serif, Helvetica, Arial')).height()).maxWidth('95%'))
                    .height(80)
                    //.background('linear-gradient(73deg, rgb(0, 114, 206), rgb(47, 148, 231))'),
                    .background('rgb(240,242,245)')
                    .foregroundColor('#637985'), 
                /* Button(
                    Text('efr')
                ).onClick(() => {
                    console.log(api)
                    api?.blocks?.insert('checklist')
                    //api.blocks.insert('checklist')
                }), */
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)("com.tuvalsoft.widget.topictree")
                    .data({
                    items: (meeting === null || meeting === void 0 ? void 0 : meeting.sections) || []
                })
                    .config({
                    selectedTopicId: topicId,
                    topicTemplate: function (item) {
                        var _a, _b;
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name).foregroundColor('#00263A')
                            .multilineTextAlignment(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextAlignment.leading)
                            .lineHeight('25px')
                            .fontSize(15)
                            .fontFamily('Poppins, sans-serif, Helvetica, Arial'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), 
                        //item.account_id ?
                        //AssignUser({ account_id: item.account_id, readonly: true, width: 24, height: 24 }) : HStack().width(24).height(24),
                        (((_a = findDuration(meeting === null || meeting === void 0 ? void 0 : meeting.sections, item)) === null || _a === void 0 ? void 0 : _a[0]) || (item.duration != null && item.duration != 0)) ? meeting.is_template === 1 ?
                            item.duration ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat(item.duration, "'")).foregroundColor('#00263A') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
                            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("".concat(_tuval_core__WEBPACK_IMPORTED_MODULE_3__.moment.utc(meeting.start_at).add((_b = findDuration(meeting === null || meeting === void 0 ? void 0 : meeting.sections, item)) === null || _b === void 0 ? void 0 : _b[0], 'm').local().format('HH:mm'))).fontSize(14).fontWeight('700').foregroundColor('rgb(136, 149, 167)') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)()));
                    },
                    onSelected: function (item) {
                        /* team_id ?
                            navigate(`/@/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting_id}/topic/${item.id}`)
                            : */
                        navigate("".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.urlFriendly)(meeting.name), "-").concat(meetingId, "/").concat(item.name, "-").concat(item.id));
                    },
                    onChange: function (items) {
                        /* updateMeeting(meeting_id, {
                            sections: items
                        }) */
                    }
                }))
                    .allWidth(420), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRouteOutlet)().width('100%').height('100%'))).background('#F8F9FA'));
    };
    return MeetingController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

function useRealm() {
    throw new Error("Function not implemented.");
}


/***/ }),

/***/ "./src/routes/meetings/metting-[meetingId]/topic-[topicId]/+controller.ts":
/*!********************************************************************************!*\
  !*** ./src/routes/meetings/metting-[meetingId]/topic-[topicId]/+controller.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopicController: () => (/* binding */ TopicController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_AssignUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../views/AssignUser */ "./src/views/AssignUser.ts");
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




var findTopic = function (items, topic_id) {
    if (items == null)
        return null;
    for (var i = 0; i < items.length; i++) {
        if (items[i].id == topic_id) {
            return items[i];
        }
        else if (items[i].subItems) {
            var found = findTopic(items[i].subItems, topic_id);
            if (found) {
                return found;
            }
        }
    }
    return null;
};
var TopicController = /** @class */ (function (_super) {
    __extends(TopicController, _super);
    function TopicController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopicController.prototype.LoadView = function () {
        var _a, _b;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(), api = _c[0], setApi = _c[1];
        var _d = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(0), selectedViewIndex = _d[0], setSelectedViewIndex = _d[1];
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _e = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)(), meetingId = _e.meetingId, topicId = _e.topicId;
        var _f = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetDocument)({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'meeting',
            documentId: meetingId
        }), meeting = _f.document, isLoading = _f.isLoading;
        /*    const { updateMeeting, invalidateCache: invalidateSectionCache } = useUpdateMeeting();
           const { createMeetingTopicView, invalidateCache } = useCreateMeetingTopicView();
           const { updateMeetingTopicView } = useUpdateMeetingTopicView();
           const { meetingTopicViews: _meetingTopicViews } = useGetMeetingTopicViews({
               meeting_id,
               topic_id
           }); */
        var topic = findTopic(meeting === null || meeting === void 0 ? void 0 : meeting.sections, topicId);
        var meetingTopicViews = [
            {
                title: "Meeting Notes",
                view: "com.tuvalsoft.widget.meeting-notes",
                data: topic === null || topic === void 0 ? void 0 : topic.data
            },
            //  ...(_meetingTopicViews ? _meetingTopicViews : [])
        ];
        var updateDuration = function (topic, duration) {
            topic.duration = duration;
            /*   updateMeeting(meeting_id, {
                  sections: meeting?.sections
              }, {
                  onSuccess: () => {
                      invalidateSectionCache();
                  }
              }); */
        };
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)()
            .width(20).height(20)
            .border('solid 1px #E5E9EE').cornerRadius('50%')
            .background('white'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.EditableHeader)(topic === null || topic === void 0 ? void 0 : topic.name).size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.EditableHeadingSizes.MEDIUM)
            .onChange(function (name) {
            topic.name = name;
            /*  updateMeeting(meeting_id, {
                 sections: meeting?.sections
             }, {
                 onSuccess: () => {
                     invalidateSectionCache();
                 }
             }); */
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_views_AssignUser__WEBPACK_IMPORTED_MODULE_3__.AssignUser)({
            width: 30,
            height: 30,
            account_id: topic === null || topic === void 0 ? void 0 : topic.account_id, onChange: function (account) {
                topic.account_id = account.id;
                /* updateMeeting(meeting_id, {
                    sections: meeting?.sections
                }, {
                    onSuccess: () => {
                        invalidateSectionCache();
                    }
                }); */
            }
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)().view(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)(((topic === null || topic === void 0 ? void 0 : topic.duration) == null || (topic === null || topic === void 0 ? void 0 : topic.duration) == 0) ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d37b').fontSize(20).foregroundColor('#8895a7') :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)((topic === null || topic === void 0 ? void 0 : topic.duration) + "'").fontSize(14).fontWeight('700').foregroundColor('rgb(136, 149, 167)')).allWidth(34).allHeight(30)
                .border('solid 1px #e1e7ec')
                .background({ hover: '#f0f2f5' })
                .cornerRadius(3)
                .cursor('pointer');
        }).model([
            {
                title: "No duration",
                onClick: function () {
                    updateDuration(topic, null);
                }
            },
            {
                title: "5 minutes",
                onClick: function () {
                    updateDuration(topic, 5);
                }
            },
            {
                title: "10 minutes",
                onClick: function () {
                    updateDuration(topic, 10);
                }
            },
            {
                title: "15 minutes",
                onClick: function () {
                    updateDuration(topic, 15);
                }
            },
            {
                title: "30 minutes",
                onClick: function () {
                    updateDuration(topic, 30);
                }
            },
            {
                title: "45 minutes",
                onClick: function () {
                    updateDuration(topic, 45);
                }
            },
            {
                title: "60 minutes",
                onClick: function () {
                    updateDuration(topic, 60);
                }
            }
        ])).allWidth(34).allHeight(30), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)().view(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e628').fontSize(20).foregroundColor('#8895a7')).allWidth(34).allHeight(30)
                .border('solid 1px #e1e7ec')
                .background({ hover: '#f0f2f5' })
                .cornerRadius(3)
                .cursor('pointer');
        }).model([
            {
                title: 'Add subtopic'
            }
        ])).allWidth(34).allHeight(30), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.MenuButton)().view(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\e5d4').fontSize(20).foregroundColor('#8895a7')).allWidth(34).allHeight(30)
                .border('solid 1px #e1e7ec')
                .background({ hover: '#f0f2f5' })
                .cornerRadius(3)
                .cursor('pointer');
        }).model([
            {
                title: 'Add subtopic'
            }
        ])).allWidth(34).allHeight(30))
            .height().padding()
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.tuvalsoft.widget.tab-view')
            .config({
            allViews: [],
            views: __spreadArray([], meetingTopicViews, true),
            //isLoading: isTaskViewsLoading,
            onChange: function (index) { return setSelectedViewIndex(index); },
            actions: [
                {
                    title: 'View',
                    onClick: function () {
                        /*  SelectViewDialog.Show().then((view) => {
                             createMeetingTopicView({
                                 meeting_id,
                                 topic_id,
                                 title: view.name,
                                 view: view.type
                             }, {
                                 onSuccess: () => {
                                     invalidateCache();
                                 }
                             })
                         }); */
                    }
                }
            ]
        })).allHeight(40)
            .border("solid 1px #E8EAED"), (meetingTopicViews === null || meetingTopicViews === void 0 ? void 0 : meetingTopicViews.length) > 0 ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)((_a = meetingTopicViews === null || meetingTopicViews === void 0 ? void 0 : meetingTopicViews[selectedViewIndex]) === null || _a === void 0 ? void 0 : _a.view)
                .config({
                defaultValue: (_b = meetingTopicViews === null || meetingTopicViews === void 0 ? void 0 : meetingTopicViews[selectedViewIndex]) === null || _b === void 0 ? void 0 : _b.data,
                onChange: function (data) {
                    if (selectedViewIndex == 0) {
                        topic.data = data;
                        /*  updateMeeting(meeting_id, {
                             sections: meeting?.sections
                         }); */
                    }
                    else {
                        /*  updateMeetingTopicView(meetingTopicViews?.[selectedViewIndex]?.id, {
                             data: data
                         }, {
                             onSuccess: () => {
                                 //invalidateTaskViewsCache();
                             }
                         }) */
                    }
                }
            }))
            : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)())
            .height('calc(100% - 20px)')
            .shadow('rgba(0, 38, 58, 0.2) 0px 2px 5px 0px')
            .background('white')
            .cornerRadius(5))
            .maxWidth('calc(100% - 40px)')
        // .minWidth(360)
        )
            .margin(10)
            .marginLeft(20)
            .marginRight(20));
    };
    return TopicController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/overview/+controller.ts":
/*!********************************************!*\
  !*** ./src/routes/overview/+controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewController: () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Menu */ "./src/routes/views/Menu.ts");
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


var OverviewController = /** @class */ (function (_super) {
    __extends(OverviewController, _super);
    function OverviewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OverviewController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_views_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu)('overview'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Overview')));
    };
    return OverviewController;
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

/***/ "./src/routes/settings/features/+controller.ts":
/*!*****************************************************!*\
  !*** ./src/routes/settings/features/+controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureSettingsController: () => (/* binding */ FeatureSettingsController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
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

var settings = [
    {
        key: 'isVersionManagementActive',
        title: 'Version',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'Document Metadata',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'Security',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'E-mail',
        description: 'Is version management active'
    },
    {
        key: 'isVersionManagementActive',
        title: 'History',
        description: 'Is version management active'
    }
];
var FeatureSettingsController = /** @class */ (function (_super) {
    __extends(FeatureSettingsController, _super);
    function FeatureSettingsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeatureSettingsController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Features').fontSize(24).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ForEach)(settings)(function (setting) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)()
                .background('#7f77f1')
                .cornerRadius('4px 4px 0 0')
                .height(4), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIImage)('/images/version.png')
                .maxWidth('100%')
                .maxHeight('100%'))
                .width(268)
                .height(180), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(setting.title)
                .fontSize(17)
                .fontWeight('500')
                .lineHeight(24)
                .foregroundColor('#505050')
                .marginBottom('12px')
                .padding('0 15px')
                .transition('all .2s cubic-bezier(.785,.135,.15,.86) 0s'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(setting.description)
                .lineHeight(18)
                .fontSize(12)
                .foregroundColor('rgb(42, 46, 52)'))
                .background('rgb(247, 248, 249)')
                .border('1px solid rgb(232, 234, 237)')
                .padding('0 0 30px')
                .margin('0 8px 30px')
                .width(270)
                .transition('all .2s cubic-bezier(.785,.135,.15,.86) 0s')
                .allHeight(370)
                .cornerRadius(4)
                .shadow({ hover: '0 4px 15px #0000001a' });
        })).wrap('wrap')
            .padding('24px 48px'))
            .padding('24px 48px'));
    };
    return FeatureSettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



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
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('General').fontSize(24).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Applet').fontSize(20).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Name').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.TextField)()
            .value(applet === null || applet === void 0 ? void 0 : applet.name)
            .border('0')
            .outline({ focus: 'none' })
            .shadow('rgba(224, 227, 230, 0.7) 0px 0px 0px 1px')
            .padding(12)
            .cornerRadius(6)).height().width(400))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Icon').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)("com.tuvalsoft.widget.icons")
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
                });
            },
            selectedIcon: applet === null || applet === void 0 ? void 0 : applet.iconName,
            color: applet === null || applet === void 0 ? void 0 : applet.bg_color,
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
            .margin('0 0 30px'))
            .padding('24px 48px'));
    };
    return GeneralSettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIFormController));



/***/ }),

/***/ "./src/routes/tasks/+controller.ts":
/*!*****************************************!*\
  !*** ./src/routes/tasks/+controller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksController: () => (/* binding */ TasksController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Menu */ "./src/routes/views/Menu.ts");
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


var TasksController = /** @class */ (function (_super) {
    __extends(TasksController, _super);
    function TasksController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TasksController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTop })((0,_views_Menu__WEBPACK_IMPORTED_MODULE_1__.Menu)('tasks'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Tasks')));
    };
    return TasksController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/views/ActionPanel.tsx":
/*!******************************************!*\
  !*** ./src/routes/views/ActionPanel.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionPanel: () => (/* binding */ ActionPanel),
/* harmony export */   ActionsPanelButton: () => (/* binding */ ActionsPanelButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var fullSize = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M16.25 3H12a.75.75 0 0 0 0 1.5h2.44l-3.47 3.47a.75.75 0 0 0 1.06 1.06l3.47-3.47V8A.75.75 0 0 0 17 8V3.75a.75.75 0 0 0-.75-.75ZM3.75 17H8a.75.75 0 0 0 0-1.5H5.56l3.47-3.47a.75.75 0 1 0-1.06-1.06L4.5 14.44V12A.75.75 0 0 0 3 12v4.25a.75.75 0 0 0 .75.75Z" }))); };
var activity = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.545 4.07A7.417 7.417 0 1 1 2.583 10a.75.75 0 0 1 1.5 0 5.917 5.917 0 1 0 2.62-4.913h.592a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v.733ZM10 5.917a.75.75 0 0 1 .75.75v3.022l1.864 1.864a.75.75 0 0 1-1.061 1.06L9.47 10.53a.75.75 0 0 1-.22-.53V6.667a.75.75 0 0 1 .75-.75Z" }))); };
var share = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M10.53 2.22a.75.75 0 0 0-1.06 0L6.97 4.72a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 1 0 1.499 0V4.56l1.219 1.22a.75.75 0 1 0 1.06-1.06l-2.499-2.5Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M5.416 7A2.415 2.415 0 0 0 3 9.417v5.166c0 .225.078.538.17.797.096.267.264.638.537.912.046.046.063.065.085.09.02.022.044.05.099.106.08.085.197.196.363.29.326.182.709.222 1.162.222h9.169c.64 0 1.254-.255 1.707-.708.274-.274.442-.645.537-.912.093-.26.171-.572.171-.797V9.417A2.417 2.417 0 0 0 14.585 7h-.837a.75.75 0 0 0 0 1.5h.837a.916.916 0 0 1 .916.917v5.149c-.001.006-.004.03-.014.074a2.011 2.011 0 0 1-.174.472.57.57 0 0 1-.08.12.916.916 0 0 1-.649.268H5.417c-.282 0-.393-.023-.425-.031a.616.616 0 0 1-.017-.017l-.051-.056-.027-.03a3.96 3.96 0 0 0-.128-.134.569.569 0 0 1-.081-.12 2.039 2.039 0 0 1-.173-.472c-.01-.04-.013-.064-.014-.072V9.416a.917.917 0 0 1 .916-.916h.836a.75.75 0 0 0 0-1.5h-.836Z" }))); };
var showAttributesPanelIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { width: "18", height: "18", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M15 12.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1ZM15.75 10a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75ZM15 6.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5h1Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.25 3A2.25 2.25 0 0 0 2 5.25v9.5A2.25 2.25 0 0 0 4.25 17h11.5A2.25 2.25 0 0 0 18 14.75v-9.5A2.25 2.25 0 0 0 15.75 3H4.25ZM3.5 5.25a.75.75 0 0 1 .75-.75H11v11H4.25a.75.75 0 0 1-.75-.75v-9.5Zm9 10.25v-11h3.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H12.5Z" }))); };
var selectAttributesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M1 10a6 6 0 0 1 6-6h6a6 6 0 0 1 0 12H7a6 6 0 0 1-6-6Zm1.5 0A4.5 4.5 0 0 1 7 5.5h6a4.5 4.5 0 1 1 0 9H7A4.5 4.5 0 0 1 2.5 10Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" }))); };
var menuIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M6.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" }))); };
var closeIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M3.728 15.172a.778.778 0 1 0 1.1 1.1L10 11.1l5.172 5.172a.778.778 0 0 0 1.1-1.1L11.1 10l5.172-5.172a.778.778 0 0 0-1.1-1.1L10 8.9 4.828 3.728a.778.778 0 1 0-1.1 1.1L8.9 10l-5.172 5.172Z" }))); };
var favoriteIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.469 1.532a1.195 1.195 0 0 1 1.062 0c.289.143.444.397.524.542.086.154.175.354.268.562l1.643 3.685 4.013.424c.226.024.444.047.617.08.162.033.452.101.677.332.262.267.383.64.329 1.01-.047.32-.242.545-.354.666-.12.13-.283.276-.452.429l-2.997 2.7.837 3.948c.047.223.093.437.114.613.02.163.044.46-.106.746-.173.33-.49.562-.859.624-.318.054-.593-.06-.743-.13-.16-.074-.35-.184-.547-.297L10 15.45l-3.496 2.016c-.197.113-.386.223-.547.297-.15.07-.424.184-.742.13a1.195 1.195 0 0 1-.86-.624c-.15-.286-.125-.582-.105-.746.02-.176.066-.39.114-.613l.837-3.947-2.998-2.701c-.169-.153-.331-.3-.452-.429-.112-.121-.306-.347-.353-.666-.054-.37.067-.743.328-1.01.226-.23.516-.3.678-.331.173-.034.39-.057.617-.081l.029-.003 3.984-.42 1.63-3.66.013-.026c.092-.208.181-.408.268-.562.08-.145.235-.399.524-.542Zm.53 1.82-1.604 3.6-.012.029c-.044.1-.122.279-.254.425a1.195 1.195 0 0 1-.402.292c-.18.08-.375.1-.483.11-.011 0-.021.002-.03.003l-3.92.414 2.928 2.639.023.02c.08.072.227.202.326.373.083.145.136.306.153.472a1.56 1.56 0 0 1-.045.493l-.006.03-.818 3.857 3.415-1.97.026-.015c.094-.055.263-.155.456-.196.163-.034.332-.034.496 0 .193.041.362.14.455.196l.027.015 3.415 1.97-.818-3.857a1.56 1.56 0 0 1-.051-.524c.017-.165.07-.326.153-.471.098-.17.245-.3.326-.373a1.87 1.87 0 0 0 .023-.02l2.928-2.64-3.92-.413-.03-.003a1.56 1.56 0 0 1-.483-.11 1.195 1.195 0 0 1-.402-.292 1.558 1.558 0 0 1-.266-.454L10 3.352Z" }))); };
var findIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.75 15.835a7.055 7.055 0 0 0 4.378-1.515l3.782 3.771a.835.835 0 0 0 1.18-1.182l-3.78-3.768a7.085 7.085 0 1 0-5.56 2.694ZM3.335 8.75a5.415 5.415 0 1 1 10.83 0 5.415 5.415 0 0 1-10.83 0Z" }))); };
var copyLinkIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "m10.063 10.808 2.06-.03c.55-.001 1.075-.218 1.463-.604a2.054 2.054 0 0 0 .001-2.909 2.07 2.07 0 0 0-1.461-.602L6.757 6.66c-.527 0-1.034.2-1.417.562A2.043 2.043 0 0 0 4.7 8.6l-.011.129a.839.839 0 0 1-1.433.574.829.829 0 0 1-.238-.591A2.276 2.276 0 0 1 3 8.483a3.704 3.704 0 0 1 1.18-2.457 3.739 3.739 0 0 1 2.549-.994L12.133 5c.964.04 1.875.45 2.542 1.142a3.71 3.71 0 0 1-.003 5.154 3.754 3.754 0 0 1-2.543 1.145l-2.02.024a.836.836 0 0 1-.798-.806.83.83 0 0 1 .752-.851Zm-5.024.932a3.726 3.726 0 0 1 1.1-2.628c.7-.697 1.65-1.09 2.64-1.094l2.02-.025a.836.836 0 0 1 .799.807.83.83 0 0 1-.752.85l-2.038.007c-.548 0-1.074.218-1.462.604a2.054 2.054 0 0 0-.001 2.909 2.07 2.07 0 0 0 1.461.601l5.369.004c.527 0 1.035-.201 1.417-.562.383-.361.612-.855.64-1.379l.011-.13a.83.83 0 0 1 .845-.822.837.837 0 0 1 .826.84 3.712 3.712 0 0 1-1.194 2.714 3.747 3.747 0 0 1-2.546.996l-5.375.003a3.756 3.756 0 0 1-2.646-1.075 3.72 3.72 0 0 1-1.114-2.62Z" }))); };
var smileIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M12.25 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM7.75 6.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 1.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Zm0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5Z" }),
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { d: "M8.238 11.643a3.707 3.707 0 0 1-.491-.428l-.149-.168a.75.75 0 0 0-1.198.903l.078.097a5.21 5.21 0 0 0 .878.81c.598.435 1.5.893 2.644.893 1.144 0 2.046-.458 2.644-.893a5.21 5.21 0 0 0 .879-.81l.077-.097a.75.75 0 0 0-1.198-.903l-.149.168c-.11.116-.276.272-.491.428-.433.315-1.031.607-1.762.607-.73 0-1.33-.292-1.762-.607Z" }))); };
var filterIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.676 2c.258 0 .494 0 .692.016.213.018.446.057.677.175.329.168.596.435.764.765.118.23.157.463.175.676.016.198.016.434.016.692V5.287c0 .225.001.465-.063.697a1.749 1.749 0 0 1-.27.562c-.141.195-.33.345-.505.485l-.044.035-3.799 3.04a6.505 6.505 0 0 0-.228.187.477.477 0 0 0-.043.041.25.25 0 0 0-.039.08.44.44 0 0 0-.005.06 6.424 6.424 0 0 0-.004.295v3.586c0 .286.002.591-.097.874-.085.247-.224.47-.407.656-.21.213-.484.348-.74.474l-.066.031-2.478 1.224c-.17.084-.34.169-.488.226-.154.059-.389.133-.661.091a1.25 1.25 0 0 1-.838-.52 1.288 1.288 0 0 1-.21-.634A6.281 6.281 0 0 1 7 16.239V10.5l-.025-.11a.233.233 0 0 0-.066-.098 6.422 6.422 0 0 0-.228-.187L2.882 7.066l-.044-.035c-.176-.14-.364-.29-.505-.485a1.75 1.75 0 0 1-.27-.562c-.064-.232-.064-.472-.063-.697V4.324c0-.258 0-.494.016-.692.018-.213.057-.446.175-.676a1.75 1.75 0 0 1 .765-.765c.23-.118.463-.157.676-.175C3.83 2 4.092 2 4.35 2h11.326ZM3.633 3.529a.627.627 0 0 1 .121-.018c.13-.01.304-.011.596-.011h11.3c.292 0 .467 0 .596.011a.625.625 0 0 1 .12.018.25.25 0 0 1 .105.104.638.638 0 0 1 .018.121c.01.13.011.304.011.596v.881c0 .149 0 .232-.003.295a.456.456 0 0 1-.006.06.252.252 0 0 1-.03.066c.004-.004-.002.005 0 0-.002.004-.022.03-.052.056a6.58 6.58 0 0 1-.228.187l-3.799 3.039-.044.035c-.176.14-.364.29-.505.485-.123.17-.215.36-.27.562-.064.232-.064.472-.063.697v3.57c0 .19 0 .298-.005.38a.516.516 0 0 1-.009.076.249.249 0 0 1-.058.092.51.51 0 0 1-.064.042c-.07.04-.168.089-.338.173l-2.454 1.212-.072.035v-5.58c0-.225.001-.465-.063-.697a1.75 1.75 0 0 0-.27-.562c-.141-.195-.33-.345-.505-.485l-.044-.035-3.799-3.04a6.484 6.484 0 0 1-.228-.186l-.02-.017a.127.127 0 0 1-.024-.025c-.035-.045-.04-.077-.044-.14a6.488 6.488 0 0 1-.003-.295V4.35c0-.292 0-.467.011-.596a.628.628 0 0 1 .018-.12.25.25 0 0 1 .104-.105Z" }))); };
var colorIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10 3.55a6.45 6.45 0 1 0 0 12.9 1.65 1.65 0 0 0 1.65-1.65v-.532c0-.246 0-.451.029-.636a2.35 2.35 0 0 1 1.953-1.953c.185-.03.39-.03.636-.029h.532A1.65 1.65 0 0 0 16.45 10 6.45 6.45 0 0 0 10 3.55ZM2.05 10a7.95 7.95 0 1 1 15.9 0 3.15 3.15 0 0 1-3.15 3.15h-.48c-.326 0-.402.002-.453.01a.85.85 0 0 0-.707.707c-.008.051-.01.127-.01.453v.48A3.15 3.15 0 0 1 10 17.95 7.95 7.95 0 0 1 2.05 10Zm5.6-3.6a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0Zm4 .8a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0Zm-6.4 2.4a1.15 1.15 0 1 1 2.3 0 1.15 1.15 0 0 1-2.3 0Z" }))); };
var sortIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.386 16.777a.75.75 0 0 0 1.061 0l3.333-3.333a.75.75 0 0 0-1.06-1.061l-2.053 2.053V3.75a.75.75 0 0 0-1.5 0v10.686l-2.053-2.053a.75.75 0 0 0-1.061 1.06l3.333 3.334ZM6.083 17a.75.75 0 0 0 .75-.75V5.564l2.053 2.053a.75.75 0 0 0 1.061-1.06L6.614 3.222a.75.75 0 0 0-1.061 0L2.22 6.556a.75.75 0 0 0 1.06 1.061l2.053-2.053V16.25c0 .414.336.75.75.75Z" }))); };
var ActionsPanelButton = function (icon, action, label) {
    if (action === void 0) { action = void 0; }
    if (label === void 0) { label = null; }
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon), label ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(label)
            .fontSize(14)
            .fontFamily('ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important')
            .fontSmoothing('auto')
            .foregroundColor('#212526') : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)())
        .foregroundColor('rgb(109, 122, 131)')
        .cursor('pointer')
        .cornerRadius(6)
        .padding(10)
        .background({ hover: 'rgba(109, 122, 131, 0.15)' })
        .transition('all .15s ease-out')
        .width(label ? '' : '28px')
        .height('28px')
        .onClick(function () {
        action();
    }));
};
var ActionPanel = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    var closeDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().closeDialog;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })(
    /*   _StatusMarker(task?.stage_id),
         EditableHeader(task?.title).size(EditableHeadingSizes.MEDIUM), */
    ActionsPanelButton(findIcon), ActionsPanelButton(smileIcon), ActionsPanelButton(favoriteIcon), ActionsPanelButton(copyLinkIcon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), ActionsPanelButton(fullSize), ActionsPanelButton(filterIcon, void 0, 'Filter'), ActionsPanelButton(sortIcon, void 0, 'Sort'), ActionsPanelButton(colorIcon, void 0, 'Color'), 
    /*   ActionsPanelButton(activity),
      ActionsPanelButton(share),
      ActionsPanelButton(showAttributesPanelIcon),
      ActionsPanelButton(selectAttributesIcon), */
    ActionsPanelButton(menuIcon), ActionsPanelButton(closeIcon, function () {
        closeDialog();
    }))
        .background('white')
        .height().padding(8));
}); };


/***/ }),

/***/ "./src/routes/views/Menu.ts":
/*!**********************************!*\
  !*** ./src/routes/views/Menu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   _Menu: () => (/* binding */ _Menu)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/Icons */ "./src/assets/Icons.tsx");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var menu = [
    {
        key: 'overview',
        icon: _assets_Icons__WEBPACK_IMPORTED_MODULE_2__.OverviewIcon,
        title: 'Overview'
    },
    {
        key: 'meetings',
        icon: _assets_Icons__WEBPACK_IMPORTED_MODULE_2__.MeetingsIcon,
        title: 'Meetings'
    },
    {
        key: 'tasks',
        icon: _assets_Icons__WEBPACK_IMPORTED_MODULE_2__.TaskIcon,
        title: 'Tasks'
    },
    {
        key: 'files',
        icon: _assets_Icons__WEBPACK_IMPORTED_MODULE_2__.FilesIcon,
        title: 'Files'
    },
    {
        key: 'feed',
        icon: _assets_Icons__WEBPACK_IMPORTED_MODULE_2__.FeedIcon,
        title: 'Feed'
    }
];
var _Menu = function (selected) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useAppletNavigate)().navigate;
    return (_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack.apply(void 0, __spreadArray(__spreadArray([(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)().borderBottom('solid 1px #E2E8F0').background('white')], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(menu)(function (menuItem) {
        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)().width(10).borderBottom('solid 1px #E2E8F0'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(menuItem.icon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(menuItem.title)
            .fontWeight('500')
            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial'))
            .cornerRadius('6px 6px 0px 0px')
            .cursor('pointer')
            .foregroundColor(selected === menuItem.key ? 'rgb(30, 41, 59)' : 'rgb(100, 116, 139)')
            .padding('6px')
            .paddingBottom('11px')
            .width()
            .border({ default: selected === menuItem.key ? 'solid 1px #E2E8F0' : 'solid 1px white', hover: 'solid 1px #E2E8F0' })
            .borderBottom({ default: selected === menuItem.key ? 'solid 1px #F8FAFC' : 'solid 1px #E2E8F0', hover: 'solid 1px #F8FAFC' })
            .background({ default: selected === menuItem.key ? '#F8FAFC' : 'white', hover: '#F8FAFC' }))
            .width()
            .border('none')
            .onClick(function () { return navigate(menuItem.key); });
    }), false), [(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)().borderBottom('solid 1px #E2E8F0').background('white'),
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.MenuButton)().icon(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icons.Menu)
            .model([
            {
                title: 'Set as template',
                onClick: function () {
                    //  updateMeeting(meeting.$id, { is_template: 1 })
                }
            }
        ])).width().height()
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cHorizontal, 10)
            .position('absolute')
            .right('0px')], false)).height(39)
        .background('white'));
}); };
var Menu = function (selected) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useAppletNavigate)().navigate;
    return ((0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.TabMenu)().menuItems(menu).selectedKey(selected)
        .onSelect(function (menuItem) {
        navigate(menuItem.key);
    }));
}); };


/***/ }),

/***/ "./src/views/AssignUser.ts":
/*!*********************************!*\
  !*** ./src/views/AssignUser.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssignUser: () => (/* binding */ AssignUser)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var AssignUser = function (_a) {
    var _b = _a.account_id, account_id = _b === void 0 ? null : _b, _c = _a.readonly, readonly = _c === void 0 ? false : _c, _d = _a.width, width = _d === void 0 ? 36 : _d, _e = _a.height, height = _e === void 0 ? 36 : _e, _f = _a.onChange, onChange = _f === void 0 ? void 0 : _f;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Select User')
    /* UIWidget("com.tuvalsoft.widget.userselect")
    .config({
        tenant_id: useSessionService().TenantId,
        selectedAccountId:account_id,
        readonly: readonly,
        width: width,
        height: height,
        onChange
    }) */
    );
};


/***/ }),

/***/ "./src/views/EmptyView.ts":
/*!********************************!*\
  !*** ./src/views/EmptyView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyView: () => (/* binding */ EmptyView)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var EmptyView = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ spacing: 30 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)('\\d25f').fontSize(120)
        .foregroundColor('#CFD6DE'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("No meeting found")
        .fontFamily('Shadows Into Light Two,serif')
        .fontSize(25)
        .foregroundColor('rgb(136, 149, 167)'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)("create a meeting")
        .fontFamily('Shadows Into Light Two,serif')
        .fontSize(25)
        .foregroundColor('rgb(136, 149, 167)')).width().height())
        .padding('20px 10px')
        .border('3px dashed #E1E7EC')
        .cornerRadius(10)
        .height(400)));
}); };


/***/ }),

/***/ "./src/views/ViewHeader.ts":
/*!*********************************!*\
  !*** ./src/views/ViewHeader.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewHeader: () => (/* binding */ ViewHeader)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);




var fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif';
var ViewHeader = function (header, onHeaderChange) {
    if (onHeaderChange === void 0) { onHeaderChange = void 0; }
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDocument)(realm.$id).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })(
        /*   HStack({ alignment: cLeading, spacing: 5 })(
              Icon(SvgIcon('svg-sprite-global__comment', '#87909e')),
              Text('Add comment').fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
          )
              .foregroundColor('#87909e')
              .height(28).width().padding('0 15px').cornerRadius(4).background({ hover: 'rgb(240, 241, 243)' })
              .onClick(() => {
                  openDialog({
                      title: 'Open',
                      view: Text('Hans')
                  })
              }), */
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)("com.tuvalsoft.widget.icons")
            .config({
            onChange: function (value) {
                updateDocument({
                    databaseId: 'workspace',
                    collectionId: 'applets',
                    documentId: applet.$id,
                    data: {
                        iconName: value.iconName,
                        iconCategory: value.iconCategory
                    }
                });
            },
            selectedIcon: applet === null || applet === void 0 ? void 0 : applet.iconName,
            color: applet === null || applet === void 0 ? void 0 : applet.bg_color,
            selectedCategory: applet === null || applet === void 0 ? void 0 : applet.iconCategory,
            width: 40,
            height: 40
        })).width().height(), 
        //  _StatusMarker(task?.stage_id),
        _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.string(header) ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.EditableHeader)(header).size(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.EditableHeadingSizes.SMALL)
                .onChange(function (e) { return onHeaderChange(e); })
                .fontSmoothing('auto')
                .foregroundColor('#212526')
                .fontSize(32)
                //.fontFamily(fontFamily)
                .fontWeight('500')
                .lineHeight('1.25')
                .kerning('-0.003em')
            :
                _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.function(header) ? header() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)())
            .background('white')
            .height().paddingBottom('10px')).height()
        // .borderBottom('1px solid #F2F2F2')
        )
            .paddingBottom('0px')
            .height());
    });
};


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.applet.meetings',
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

/***/ "@realmocean/antd":
/*!**********************************!*\
  !*** external "realmocean$antd" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$antd;

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
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/+routes */ "./src/routes/+routes.ts");
/* harmony import */ var _TreeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeController */ "./src/TreeController.ts");
/* harmony import */ var _dialogs_AddMeetingSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/AddMeetingSpace */ "./src/dialogs/AddMeetingSpace.ts");
/* harmony import */ var _dialogs_AddMeetingDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddMeetingDialog */ "./src/dialogs/AddMeetingDialog.ts");
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
            tree: _TreeController__WEBPACK_IMPORTED_MODULE_2__.TreeController,
            applet: _routes_routes__WEBPACK_IMPORTED_MODULE_1__.RouteController
        };
    };
    ProcessMining = __decorate([
        App(manifest)
    ], ProcessMining);
    return ProcessMining;
}());

_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction(_dialogs_AddMeetingSpace__WEBPACK_IMPORTED_MODULE_3__.SaveMeetingSpace);
_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction(_dialogs_AddMeetingDialog__WEBPACK_IMPORTED_MODULE_4__.SaveMeetingAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.applet.meetings', tuval$core['__APPS__']['com.celmino.applet.meetings']);
                    