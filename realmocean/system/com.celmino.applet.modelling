
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
/* harmony export */   WorkspaceTreeWidgetController: () => (/* binding */ WorkspaceTreeWidgetController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/Icons */ "./src/resources/Icons.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
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




/* import { AddBoardDialog } from './dialogs/AddBoardDialog';
import { AddDocumentDialog } from './dialogs/AddDocumentDialog';
import { AddFolderDialog } from './dialogs/AddFolderDialog';
import { AddListDialog } from './dialogs/AddListDialog';
import { SaveSpaceAction } from './dialogs/AddSpaceDialog';
import { AddWhiteboardDialog } from './dialogs/AddWhiteboardDialog'; */


var WorkspaceTreeWidgetController = /** @class */ (function (_super) {
    __extends(WorkspaceTreeWidgetController, _super);
    function WorkspaceTreeWidgetController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspaceTreeWidgetController.prototype.LoadView = function () {
        var navigate = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.useAppletNavigate)().navigate;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var realm = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var applet = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _b = this.props.config || {}, organizationId = _b.organizationId, onItemSelected = _b.onItemSelected, item = _b.item;
        var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetOrganization)({ organizationId: organizationId, hookEnabled: true }), organization = _c.organization, isOrganizationLoading = _c.isLoading; // useGetCurrentOrganization();
        var _d = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.getAppletId)() === appletId), isOpen = _d[0], setIsOpen = _d[1];
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getListId)();
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDocument)(workspaceId).updateDocument;
        var updateDatabase = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDatabase)(workspaceId).updateDatabase;
        var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
        // const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
        // const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });
        var setCanDrag = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.useRealmTree)().setCanDrag;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.applet-tree')
            .config({
            node: item,
            workspaceId: workspaceId,
            appletId: appletId,
            appletName: item.name,
            iconName: item.iconName,
            iconCategory: item.iconCategory,
            isEditing: isEditing,
            isSelected: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isAppletSettings)(appletId) || (0,_utils__WEBPACK_IMPORTED_MODULE_5__.isAppletOnly)(appletId),
            editingChanged: function (status) { return setIsEditing(status); },
            titleChanged: function (title) {
                updateDatabase({
                    databaseId: appletId,
                    name: title
                }, function () {
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
                            _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: item });
                        });
                    });
                });
            },
            subNodes: function (TreeNode, level, nodeType, parentId, workspaceId, appletId) {
                return [];
            },
            requestMenu: function (node) {
                return [
                    {
                        title: 'Add view',
                        type: 'Title'
                    },
                    {
                        title: 'Table',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.TableIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'Board',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.BoardIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'List',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.ListIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'Timeline',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.TimelineIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'Calendar',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.CalendarIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'Report',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.ReportIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'Feed',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.FeedIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        type: 'Divider'
                    },
                    {
                        title: 'Applet',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_4__.AppletIcon).foregroundColor('#7C828D'),
                        onClick: function () {
                            _celmino_ui__WEBPACK_IMPORTED_MODULE_1__.SelectAppletDialog.Show(workspaceId, appletId).then(function (applet) {
                                createTreeItem({
                                    documentId: applet.$id,
                                    data: {
                                        name: applet.name,
                                        path: "/",
                                        parent: '-1',
                                        type: 'applet'
                                    }
                                }, function () { return void 0; });
                            });
                        }
                    },
                ];
            },
            requestNavigation: function () {
                if (onItemSelected == null) {
                    switch (item.type) {
                        case 'applet':
                            navigate("");
                            break;
                        case 'list':
                            //  navigate(`/@/${process(realm?.name)}-${workspaceId}/${process(applet)}-${appletId}/list/${item.$id}`);
                            break;
                        case 'board':
                            navigate("/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/list/").concat(item.parent, "/view/").concat(item.$id));
                            break;
                        case 'document':
                            navigate("/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/document/").concat(item.$id));
                            break;
                        case 'whiteboard':
                            navigate("/@/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/whiteboard/").concat(item.$id));
                            break;
                    }
                }
                else {
                    onItemSelected({
                        workspaceId: workspaceId,
                        appletId: appletId,
                        item: item
                    });
                }
            },
            requestEditMenu: function () { return [
                {
                    title: 'Rename',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__edit', '#151719', '18px', '18px'),
                    onClick: function () {
                        // setCanDrag(false);
                        setIsEditing(true);
                    }
                },
                {
                    title: 'Applet settings',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                    onClick: function () { return navigate("settings/general"); }
                },
                {
                    title: 'About',
                    icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                    onClick: function () { return _celmino_ui__WEBPACK_IMPORTED_MODULE_1__.AboutDialog.Show(_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.ListApplet); }
                }
            ]; }
        }));
    };
    return WorkspaceTreeWidgetController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);


/***/ }),

/***/ "./src/resources/Icons.tsx":
/*!*********************************!*\
  !*** ./src/resources/Icons.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppletIcon: () => (/* binding */ AppletIcon),
/* harmony export */   BoardIcon: () => (/* binding */ BoardIcon),
/* harmony export */   CalendarIcon: () => (/* binding */ CalendarIcon),
/* harmony export */   FeedIcon: () => (/* binding */ FeedIcon),
/* harmony export */   FilesIcon: () => (/* binding */ FilesIcon),
/* harmony export */   GridIcon: () => (/* binding */ GridIcon),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   MeetingsIcon: () => (/* binding */ MeetingsIcon),
/* harmony export */   MembersIcon: () => (/* binding */ MembersIcon),
/* harmony export */   OverviewIcon: () => (/* binding */ OverviewIcon),
/* harmony export */   ReportIcon: () => (/* binding */ ReportIcon),
/* harmony export */   SettingsIcon: () => (/* binding */ SettingsIcon),
/* harmony export */   StatusesIcon: () => (/* binding */ StatusesIcon),
/* harmony export */   TableIcon: () => (/* binding */ TableIcon),
/* harmony export */   TabsIcon: () => (/* binding */ TabsIcon),
/* harmony export */   TaskIcon: () => (/* binding */ TaskIcon),
/* harmony export */   TimelineIcon: () => (/* binding */ TimelineIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TableIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
var GridIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 10a1.5 1.5 0 0 1 1.5-1.5H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 10ZM10.5 10A1.5 1.5 0 0 1 12 8.5h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13H8a1.5 1.5 0 0 1 0 3H5.5A1.5 1.5 0 0 1 4 14.5ZM10.5 14.5A1.5 1.5 0 0 1 12 13h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5ZM4 5.5A1.5 1.5 0 0 1 5.5 4H8a1.5 1.5 0 1 1 0 3H5.5A1.5 1.5 0 0 1 4 5.5ZM10.5 5.5A1.5 1.5 0 0 1 12 4h2.5a1.5 1.5 0 0 1 0 3H12a1.5 1.5 0 0 1-1.5-1.5Z" })))); };
var BoardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM8.5 5.5a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-3 0v-8ZM14.5 4A1.5 1.5 0 0 0 13 5.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 14.5 4Z" })))); };
var ListIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.496 4C4.67 4 4 4.672 4 5.5S4.67 7 5.496 7h9.008C15.33 7 16 6.328 16 5.5S15.33 4 14.504 4H5.496ZM8.488 8.5c-.826 0-1.496.672-1.496 1.5s.67 1.5 1.496 1.5h6.016C15.33 11.5 16 10.828 16 10s-.67-1.5-1.496-1.5H8.488ZM9.984 14.5c0-.828.67-1.5 1.497-1.5h3.023c.826 0 1.496.672 1.496 1.5s-.67 1.5-1.496 1.5H11.48a1.498 1.498 0 0 1-1.497-1.5Z" })))); };
var TimelineIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9 5.5A1.5 1.5 0 0 1 10.5 4h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 9 5.5ZM4 14.5A1.5 1.5 0 0 1 5.5 13h4a1.5 1.5 0 0 1 0 3h-4A1.5 1.5 0 0 1 4 14.5ZM5.5 8.5a1.5 1.5 0 1 0 0 3h9a1.5 1.5 0 0 0 0-3h-9Z" })))); };
var CalendarIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.8 5.6a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM4 10a1.6 1.6 0 1 1 3.2 0A1.6 1.6 0 0 1 4 10ZM4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM10 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM8.4 14.4a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0ZM14.4 8.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM10 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 10 4Z" })))); };
var ReportIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.65 5a1.65 1.65 0 0 0-1.613 2l-2.812 3.4c-.057 0-.113.005-.169.011L9.893 9.206a1.65 1.65 0 1 0-3.26.174l-1.875 1.923a1.65 1.65 0 1 0 1.51 1.317l1.875-1.924a1.737 1.737 0 0 0 .389-.02l1.087 1.126a1.65 1.65 0 1 0 3.217-.21l2.723-3.294.091.002a1.65 1.65 0 0 0 0-3.3Z" })))); };
var FeedIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 12V9c0-2.047.466-3.163 1.08-3.665.426-.35.92-.783.92-1.335a1 1 0 0 0-1-1H9a4 4 0 0 0-4 4v3c0 2.047-.466 3.163-1.08 3.665-.426.35-.92.783-.92 1.335a1 1 0 0 0 1 1h8a4 4 0 0 0 4-4ZM7 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z" }))); };
var AppletIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 16 16", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { "clip-path": "url(#clip0_3619_49218)" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0.799805 3.60005C2.3462 3.60005 3.5998 4.85365 3.5998 6.40005C3.5998 4.85365 4.85341 3.60005 6.3998 3.60005C4.85341 3.60005 3.5998 2.34645 3.5998 0.800049C3.5998 2.34645 2.3462 3.60005 0.799805 3.60005Z", fill: "url(#paint0_linear_3619_49218)", stroke: "url(#paint1_linear_3619_49218)", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.7998 10C7.67169 10 9.9998 12.3282 9.9998 15.2C9.9998 12.3282 12.3279 10 15.1998 10C12.3279 10 9.9998 7.67193 9.9998 4.80005C9.9998 7.67193 7.67169 10 4.7998 10Z", fill: "url(#paint2_linear_3619_49218)", stroke: "url(#paint3_linear_3619_49218)", "stroke-width": "1.2", "stroke-linecap": "round", "stroke-linejoin": "round" })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", { id: "paint0_linear_3619_49218", x1: "2.1998", y1: "0.488938", x2: "4.37758", y2: "6.71116", gradientUnits: "userSpaceOnUse" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { "stop-color": "#506CF0" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { offset: "1", "stop-color": "#9E72D5" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", { id: "paint1_linear_3619_49218", x1: "3.5998", y1: "0.800049", x2: "3.5998", y2: "6.40005", gradientUnits: "userSpaceOnUse" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { "stop-color": "#506CF0" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { offset: "1", "stop-color": "#9E72D5" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", { id: "paint2_linear_3619_49218", x1: "7.3998", y1: "4.22227", x2: "11.4442", y2: "15.7778", gradientUnits: "userSpaceOnUse" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { "stop-color": "#506CF0" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { offset: "1", "stop-color": "#9E72D5" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("linearGradient", { id: "paint3_linear_3619_49218", x1: "9.9998", y1: "4.80005", x2: "9.9998", y2: "15.2", gradientUnits: "userSpaceOnUse" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { "stop-color": "#506CF0" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", { offset: "1", "stop-color": "#9E72D5" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", { id: "clip0_3619_49218" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { width: "16", height: "16", fill: "white" }))))); };
var OverviewIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V248c0-13.3-10.7-24-24-24H216c-13.3 0-24 10.7-24 24s10.7 24 24 24h24v64H216zm40-144a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" }))); };
var MeetingsIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM112 256h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16z" }))); };
var TaskIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" }))); };
var FilesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" }))); };
/* export const FeedIcon = () =>(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={16} height={16}><path fill="currentColor" d="M0 56C0 42.7 10.7 32 24 32c234.2 0 424 189.8 424 424c0 13.3-10.7 24-24 24s-24-10.7-24-24C400 248.3 231.7 80 24 80C10.7 80 0 69.3 0 56zM64 432a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM24 176c154.6 0 280 125.4 280 280c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1-103.9-232-232-232c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg>
) */
var SettingsIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M256 0c17 0 33.6 1.7 49.8 4.8c7.9 1.5 21.8 6.1 29.4 20.1c2 3.7 3.6 7.6 4.6 11.8l9.3 38.5C350.5 81 360.3 86.7 366 85l38-11.2c4-1.2 8.1-1.8 12.2-1.9c16.1-.5 27 9.4 32.3 15.4c22.1 25.1 39.1 54.6 49.9 86.3c2.6 7.6 5.6 21.8-2.7 35.4c-2.2 3.6-4.9 7-8 10L459 246.3c-4.2 4-4.2 15.5 0 19.5l28.7 27.3c3.1 3 5.8 6.4 8 10c8.2 13.6 5.2 27.8 2.7 35.4c-10.8 31.7-27.8 61.1-49.9 86.3c-5.3 6-16.3 15.9-32.3 15.4c-4.1-.1-8.2-.8-12.2-1.9L366 427c-5.7-1.7-15.5 4-16.9 9.8l-9.3 38.5c-1 4.2-2.6 8.2-4.6 11.8c-7.7 14-21.6 18.5-29.4 20.1C289.6 510.3 273 512 256 512s-33.6-1.7-49.8-4.8c-7.9-1.5-21.8-6.1-29.4-20.1c-2-3.7-3.6-7.6-4.6-11.8l-9.3-38.5c-1.4-5.8-11.2-11.5-16.9-9.8l-38 11.2c-4 1.2-8.1 1.8-12.2 1.9c-16.1 .5-27-9.4-32.3-15.4c-22-25.1-39.1-54.6-49.9-86.3c-2.6-7.6-5.6-21.8 2.7-35.4c2.2-3.6 4.9-7 8-10L53 265.7c4.2-4 4.2-15.5 0-19.5L24.2 218.9c-3.1-3-5.8-6.4-8-10C8 195.3 11 181.1 13.6 173.6c10.8-31.7 27.8-61.1 49.9-86.3c5.3-6 16.3-15.9 32.3-15.4c4.1 .1 8.2 .8 12.2 1.9L146 85c5.7 1.7 15.5-4 16.9-9.8l9.3-38.5c1-4.2 2.6-8.2 4.6-11.8c7.7-14 21.6-18.5 29.4-20.1C222.4 1.7 239 0 256 0zM218.1 51.4l-8.5 35.1c-7.8 32.3-45.3 53.9-77.2 44.6L97.9 120.9c-16.5 19.3-29.5 41.7-38 65.7l26.2 24.9c24 22.8 24 66.2 0 89L59.9 325.4c8.5 24 21.5 46.4 38 65.7l34.6-10.2c31.8-9.4 69.4 12.3 77.2 44.6l8.5 35.1c24.6 4.5 51.3 4.5 75.9 0l8.5-35.1c7.8-32.3 45.3-53.9 77.2-44.6l34.6 10.2c16.5-19.3 29.5-41.7 38-65.7l-26.2-24.9c-24-22.8-24-66.2 0-89l26.2-24.9c-8.5-24-21.5-46.4-38-65.7l-34.6 10.2c-31.8 9.4-69.4-12.3-77.2-44.6l-8.5-35.1c-24.6-4.5-51.3-4.5-75.9 0zM208 256a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192z" }))); };
var MembersIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M144 160A80 80 0 1 0 144 0a80 80 0 1 0 0 160zm368 0A80 80 0 1 0 512 0a80 80 0 1 0 0 160zM0 298.7C0 310.4 9.6 320 21.3 320H234.7c.2 0 .4 0 .7 0c-26.6-23.5-43.3-57.8-43.3-96c0-7.6 .7-15 1.9-22.3c-13.6-6.3-28.7-9.7-44.6-9.7H106.7C47.8 192 0 239.8 0 298.7zM405.3 320H618.7c11.8 0 21.3-9.6 21.3-21.3C640 239.8 592.2 192 533.3 192H490.7c-15.9 0-31 3.5-44.6 9.7c1.3 7.2 1.9 14.7 1.9 22.3c0 38.2-16.8 72.5-43.3 96c.2 0 .4 0 .7 0zM320 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm-58.7 80H378.7c39.8 0 73.2 27.2 82.6 64H178.7c9.5-36.8 42.9-64 82.6-64zm0-48C187.7 352 128 411.7 128 485.3c0 14.7 11.9 26.7 26.7 26.7H485.3c14.7 0 26.7-11.9 26.7-26.7C512 411.7 452.3 352 378.7 352H261.3z" }))); };
var TabsIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: 16, height: 16 },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M432 48H208c-17.7 0-32 14.3-32 32V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V336h16c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V256H48V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z" }))); };
var StatusesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: 16, height: 16, style: { transform: 'rotate(90deg)' } },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fill: "currentColor", d: "M48 112l0 288H96V112H48zM0 112C0 85.5 21.5 64 48 64H96c26.5 0 48 21.5 48 48V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112zm224 0V400h48V112H224zm-48 0c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48V400c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48V112z" }))); };


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
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/ActionPanel */ "./src/views/ActionPanel.tsx");
/* harmony import */ var _views_ViewHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/ViewHeader */ "./src/views/ViewHeader.ts");
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @realmocean/atlaskit */ "@realmocean/atlaskit");
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_5__);
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
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)('overview'), selected = _a[0], setSelected = _a[1];
        var applet = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTop })((0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_3__.ActionPanel)(), (0,_views_ViewHeader__WEBPACK_IMPORTED_MODULE_4__.ViewHeader)(applet.name, function () { return void 0; }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_5__.Button)().appearance("default"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)(
        // UIRouteOutlet().width('100%').height('100%')
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIWidget)('com.celmino.widget.flow')
            .config({}))
            .background('#F8FAFC'))).render())));
    };
    return AppletController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



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
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./+controller */ "./src/routes/+controller.tsx");
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/+controller */ "./src/routes/settings/+controller.ts");
/* harmony import */ var _settings_features_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/features/+controller */ "./src/routes/settings/features/+controller.ts");
/* harmony import */ var _settings_general_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/general/+controller */ "./src/routes/settings/general/+controller.ts");
/* harmony import */ var _settings_members_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/members/+controller */ "./src/routes/settings/members/+controller.ts");
/* harmony import */ var _settings_tabs_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/tabs/+controller */ "./src/routes/settings/tabs/+controller.ts");
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
            //  UIRoute('', ListController ),
            //  UIRoute(':viewId',  ViewController ),
            ), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/settings', _settings_controller__WEBPACK_IMPORTED_MODULE_2__.SettingsController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('features', _settings_features_controller__WEBPACK_IMPORTED_MODULE_3__.FeatureSettingsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('general', _settings_general_controller__WEBPACK_IMPORTED_MODULE_4__.GeneralSettingsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('members', _settings_members_controller__WEBPACK_IMPORTED_MODULE_5__.MembersController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('tabs', _settings_tabs_controller__WEBPACK_IMPORTED_MODULE_6__.TabsController))))
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
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/Icons */ "./src/resources/Icons.tsx");
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
        var navigate = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_0__.useAppletNavigate)().navigate;
        var menu = [
            {
                id: 'general',
                title: 'General',
                url: "settings/general",
                icon: _resources_Icons__WEBPACK_IMPORTED_MODULE_2__.SettingsIcon
            },
            {
                id: 'members',
                title: 'Members',
                url: "settings/members",
                icon: _resources_Icons__WEBPACK_IMPORTED_MODULE_2__.MembersIcon
            },
            {
                id: 'tabs',
                title: 'Tabs',
                url: "settings/tabs",
                icon: _resources_Icons__WEBPACK_IMPORTED_MODULE_2__.TabsIcon
            },
            {
                id: 'statuses',
                title: 'Statuses',
                url: "settings/statuses",
                icon: _resources_Icons__WEBPACK_IMPORTED_MODULE_2__.StatusesIcon
            }
        ];
        // 
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, __spreadArray([(0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Heading)('TASK LIST APPLET').h3().foregroundColor('rgb(101, 111, 125)')
                .fontSize(11).fontWeight('600')).padding('16px 8px 8px').height()], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(menu)(function (item) {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 8 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)(item.icon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(item.title)
                .fontSize('1.5rem')
                .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif')
                .fontWeight('500')
                .lineHeight(16)).height()
                .foregroundColor(item.id === getSettingsName() ? 'rgb(84, 77, 201)' : '#94A3B8')
                .cornerRadius(6)
                .background({ default: item.id === getSettingsName() ? '#E5E4FC' : '', hover: '#E8EAED' })
                .padding( /* cHorizontal, 8) */)
                .cursor('pointer')
                .onClick(function () {
                navigate(item.url);
            });
        }), false)).padding()
            .background('white')
            .borderRight('solid 1px #E2E8F0')
            .allWidth(240), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteOutlet)().width('100%').height('100%')));
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
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_0__);
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
        var realm = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)('General').fontSize(18).fontWeight('500')
            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cHorizontal, 16)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cVertical, 20)
            .borderBottom('solid 1px #E2E8F0')
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)('Applet').fontSize(20).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)('Name').fontSize(16).fontWeight('600')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32)).height().width(300), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.TextField)()
            .value(applet === null || applet === void 0 ? void 0 : applet.name)
            .border('0')
            .outline({ focus: 'none' })
            .shadow('rgba(224, 227, 230, 0.7) 0px 0px 0px 1px')
            .padding(12)
            .cornerRadius(6)).height().width(400))
            .height()
            .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading, spacing: 10 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_3__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.Text)('Icon').fontSize(16).fontWeight('600')
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
            .margin('0 0 30px'), (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_0__.ColorSelect)({
            onSelect: function (color) {
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
            }
        }).width(200))
            .height()
            .background('white')
            .cornerRadius(8)
            .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
            .border('solid 1px #E2E8F0'))
            .padding('20px')
            .background('#F8FAFC'));
    };
    return GeneralSettingsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.UIFormController));



/***/ }),

/***/ "./src/routes/settings/members/+controller.ts":
/*!****************************************************!*\
  !*** ./src/routes/settings/members/+controller.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MembersController: () => (/* binding */ MembersController)
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

var MembersController = /** @class */ (function (_super) {
    __extends(MembersController, _super);
    function MembersController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MembersController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Members').fontSize(18).fontWeight('500')
            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, 20)
            .borderBottom('solid 1px #E2E8F0')
            .height()
            .margin('0 0 30px'))
            .height()
            .background('white')
            .cornerRadius(8)
            .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
            .border('solid 1px #E2E8F0'))
            .padding('20px')
            .background('#F8FAFC'));
    };
    return MembersController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/settings/tabs/+controller.ts":
/*!*************************************************!*\
  !*** ./src/routes/settings/tabs/+controller.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsController: () => (/* binding */ TabsController)
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

var TabsController = /** @class */ (function (_super) {
    __extends(TabsController, _super);
    function TabsController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabsController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Tabs').fontSize(18).fontWeight('500')
            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, 20)
            .borderBottom('solid 1px #E2E8F0')
            .height()
            .margin('0 0 30px'))
            .height()
            .background('white')
            .cornerRadius(8)
            .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
            .border('solid 1px #E2E8F0'))
            .padding('20px')
            .background('#F8FAFC'));
    };
    return TabsController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



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
/* harmony export */   getViewId: () => (/* binding */ getViewId),
/* harmony export */   getWhiteboardId: () => (/* binding */ getWhiteboardId),
/* harmony export */   isAppletOnly: () => (/* binding */ isAppletOnly),
/* harmony export */   isAppletSettings: () => (/* binding */ isAppletSettings)
/* harmony export */ });
function isAppletSettings(appletId) {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)\/settings/;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1] === appletId;
    }
    else {
        return;
    }
}
function isAppletOnly(appletId) {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/applet\/([^\/]+)^\//;
    // Regex eşleşmesi
    var matches = url.match(regexPattern);
    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1] === appletId;
    }
    else {
        return;
    }
}
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
    var regexPattern = /\/list\/([^]+)/;
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
function getViewId() {
    var url = window.location.href;
    // Regex deseni
    var regexPattern = /\/view\/([^]+)/;
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

/***/ "./src/views/ActionPanel.tsx":
/*!***********************************!*\
  !*** ./src/views/ActionPanel.tsx ***!
  \***********************************/
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
    var closeDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useConfig)().closeDialog;
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
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/ui */ "@celmino/ui");
/* harmony import */ var _celmino_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);




var fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif';
var ViewHeader = function (header, onHeaderChange) {
    if (onHeaderChange === void 0) { onHeaderChange = void 0; }
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
        var realm = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var applet = (0,_celmino_ui__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
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
                .fontSize(24).fontFamily(fontFamily).fontWeight('500')
                .lineHeight('1.25')
                .kerning('-0.003em')
            :
                _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.function(header) ? header() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)())
            .background('white')
            .height()
        //.paddingBottom('10px'),
        /*    HStack({ alignment: cLeading, spacing: 10 })(
               HStack({ spacing: 5 })(
                   HStack(
                       Text('ST').foregroundColor('white').fontSize(10).fontWeight('500').fontFamily(fontFamily).lineHeight('1.33').kerning('-0.003em')
                   ).width(20).height(20).cornerRadius('50%').background('rgb(255, 87, 34)'),
                   Text('You').foregroundColor('#87909e')
               ).height().width(),
               HStack(
                   Text('Last Updated: 6/29/23 at 11:27 pm').foregroundColor('#87909e')
               ).height().width()
           ).height() */
        ).height()
        // .borderBottom('1px solid #F2F2F2')
        )
            //.paddingBottom('0px')
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
        name: 'com.celmino.applet.modelling',
        path: './src/Application.ts',
        displayName: "Procetra",
        icon: "data:image/svg+xml;base64,PHN2ZyBpZD0iZjc4ZjUxMTUtYmU4OC00ZDQ0LWIzNGUtM2Y2ZWE3NDMxMjVjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImI2YzQzYmQ5LWUzN2YtNDE5MS05M2MyLWQzYTdhODRjNTA1ZSIgeDE9IjkiIHkxPSIxOS4xMyIgeDI9IjkiIHkyPSItMC4yOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwNzhkNCIgLz48c3RvcCBvZmZzZXQ9IjAuMTYiIHN0b3AtY29sb3I9IiMxMzgwZGEiIC8+PHN0b3Agb2Zmc2V0PSIwLjUzIiBzdG9wLWNvbG9yPSIjM2M5MWU1IiAvPjxzdG9wIG9mZnNldD0iMC44MiIgc3RvcC1jb2xvcj0iIzU1OWNlYyIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1ZWEwZWYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHRpdGxlPkljb24tbWFjaGluZWxlYXJuaW5nLTE2MjwvdGl0bGU+PHBhdGggZD0iTTE4LDExLjM4QTQsNCwwLDAsMCwxNC40OSw3LjUsNS4xLDUuMSwwLDAsMCw5LjI0LDIuNjIsNS4yNSw1LjI1LDAsMCwwLDQuMjIsNiw0LjgsNC44LDAsMCwwLDAsMTAuNjdhNC45LDQuOSwwLDAsMCw1LjA3LDQuNzFsLjQ0LDBoOC4yMWEuNzguNzgsMCwwLDAsLjIyLDBBNC4xLDQuMSwwLDAsMCwxOCwxMS4zOFoiIGZpbGw9InVybCgjYjZjNDNiZDktZTM3Zi00MTkxLTkzYzItZDNhN2E4NGM1MDVlKSIgLz48cGF0aCBkPSJNNS40MiwxMC4zOUg0LjU0YTEuMDksMS4wOSwwLDEsMCwwLC40OWguODhhLjIuMiwwLDAsMSwuMi4ydjQuM2guNDl2LTQuM0EuNjkuNjksMCwwLDAsNS40MiwxMC4zOVptLTEuOTUuODhhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDMuNDcsMTEuMjdaIiBmaWxsPSIjOWNlYmZmIiAvPjxwYXRoIGQ9Ik04Ljk0LDEwLjYxdi0xYS43LjcsMCwwLDAtLjctLjdINi42OWEuMi4yLDAsMCwxLS4yLS4yVjMuNGwtLjIzLjEyTDYsMy42NnY1YS42OS42OSwwLDAsMCwuNjkuNjlIOC4yNGEuMjEuMjEsMCwwLDEsLjIxLjIxdjFhMS4wOCwxLjA4LDAsMCwwLS44NSwxLjA2LDEuMDksMS4wOSwwLDEsMCwxLjM0LTEuMDZabS0uMjUsMS43aDBhLjY0LjY0LDAsMSwxLC42NC0uNjRBLjY0LjY0LDAsMCwxLDguNjksMTIuMzFaIiBmaWxsPSIjZjJmMmYyIiAvPjxwYXRoIGQ9Ik0xNC41Myw4LjVhMS4wOSwxLjA5LDAsMCwwLS4yNSwyLjE1di4yYS4yMS4yMSwwLDAsMS0uMjEuMjFoLTJWNy41NGEuNjkuNjksMCwwLDAtLjY5LS42OUgxMC4zNUExLjA4LDEuMDgsMCwwLDAsOS4yOSw2YTEuMDksMS4wOSwwLDEsMCwxLjA2LDEuMzRoMS4wN2EuMi4yLDAsMCwxLC4yLjJ2Ny44NGguNDlWMTEuNTVoMmEuNy43LDAsMCwwLC43LS43di0uMmExLjA5LDEuMDksMCwwLDAsLjg1LTEuMDZoMEExLjA5LDEuMDksMCwwLDAsMTQuNTMsOC41Wk05LjI5LDcuNzNoMGEuNjQuNjQsMCwxLDEsLjY0LS42NEEuNjQuNjQsMCwwLDEsOS4yOSw3LjczWm01LjI0LDIuNWgwYS42NC42NCwwLDEsMSwuNjMtLjY0QS42NC42NCwwLDAsMSwxNC41MywxMC4yM1oiIGZpbGw9IiM5Y2ViZmYiIC8+PC9zdmc+"

    }
    /* threads: {
        'PMThreadWorker': 'ThreadWorker.ts'
    } */
}

/***/ }),

/***/ "@celmino/ui":
/*!*****************************!*\
  !*** external "celmino$ui" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = celmino$ui;

/***/ }),

/***/ "@realmocean/atlaskit":
/*!**************************************!*\
  !*** external "realmocean$atlaskit" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$atlaskit;

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
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/+routes */ "./src/routes/+routes.ts");
/* harmony import */ var _TreeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeController */ "./src/TreeController.tsx");
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
            tree: _TreeController__WEBPACK_IMPORTED_MODULE_1__.WorkspaceTreeWidgetController,
            applet: _routes_routes__WEBPACK_IMPORTED_MODULE_0__.RouteController
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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.applet.modelling', tuval$core['__APPS__']['com.celmino.applet.modelling']);
                    