
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

/***/ "./src/WidgetController.tsx":
/*!**********************************!*\
  !*** ./src/WidgetController.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomAppletTreeModuleController: () => (/* binding */ CustomAppletTreeModuleController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resources_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/Icons */ "./src/resources/Icons.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_4__);
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


//import { SelectAppletDialog } from '@celmino/ui';

var CustomAppletTreeModuleController = /** @class */ (function (_super) {
    __extends(CustomAppletTreeModuleController, _super);
    function CustomAppletTreeModuleController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAppletTreeModuleController.prototype.LoadView = function () {
        var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useNavigate)();
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var items = (this.props.data || {}).items;
        var _b = this.props.config || {}, workspaceId = _b.workspaceId, appletId = _b.appletId, onItemSelected = _b.onItemSelected, item = _b.item;
        var realm = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetRealm)({ realmId: workspaceId, enabled: true }).realm;
        var applet = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({
            projectId: workspaceId,
            databaseId: 'workspace',
            collectionId: 'applets',
            documentId: appletId
        }).document;
        var _c = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAppletId)() === appletId), isOpen = _c[0], setIsOpen = _c[1];
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getListId)();
        /*     const { document: list, isLoading: isListLoading } = useGetDocument({
                projectId: workspaceId,
                databaseId: appletId,
                collectionId: 'wm_lists',
                documentId: listId
            }, { enabled: listId != null }); */
        /*  useEffect(() => {
             if (list! + null) {
                 setExpanded(true);
             }
         }, []); */
        // const [expanded, setExpanded] = useLocalStorageState('work_management_tree', false);
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
                            _tuval_core__WEBPACK_IMPORTED_MODULE_4__.EventBus.Default.fire('applet.added', { treeItem: item });
                        });
                    });
                },
                subNodes: function (TreeNode, level, nodeType, parentId, workspaceId, appletId) {
                    //  return subNodes(TreeNode, level, nodeType, parentId, workspaceId, appletId, onItemSelected)
                },
                requestMenu: function () {
                    return [
                        {
                            title: 'Add space',
                            type: 'Title'
                        },
                        {
                            title: 'Posts',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.PostsIcons).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Events',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.EventsIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Chat',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.ChatIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Course',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.CourceIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Members',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.MembersIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Images',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.ImagesIcon).foregroundColor('#7C828D'),
                            //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                        },
                        {
                            title: 'Applet',
                            icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_2__.AppletIcon).foregroundColor('#7C828D'),
                            /*  onClick: () => {
                                 SelectAppletDialog.Show(workspaceId, appletId).then((applet) => {
                                     createTreeItem({
                                         documentId: applet.$id,
                                         data: {
                                             name: applet.name,
                                             path: "/",
                                             parent: '-1',
                                             type: 'applet'
                                         }
                                     }, () => void 0)
                                 });
                             } */
                        },
                    ];
                },
                requestNavigation: function () {
                    navigate("/app/".concat(realm === null || realm === void 0 ? void 0 : realm.name, "-").concat(workspaceId, "/").concat(applet === null || applet === void 0 ? void 0 : applet.name, "-").concat(appletId));
                },
                requestEditMenu: function () { return [
                    {
                        title: 'Rename',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__edit', '#151719', '18px', '18px'),
                        onClick: function () { return setIsEditing(true); }
                    },
                    {
                        title: 'Collections',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return navigate("/app/".concat(realm === null || realm === void 0 ? void 0 : realm.name, "-").concat(workspaceId, "/").concat(applet === null || applet === void 0 ? void 0 : applet.name, "-").concat(appletId, "/collections")); }
                    },
                    {
                        title: 'Applet settings',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__settings', '#151719', '18px', '18px'),
                        onClick: function () { return navigate("/app/workspace/".concat(workspaceId, "/applet/").concat(appletId, "/settings")); }
                    }
                ]; }
            }));
        }));
    };
    return CustomAppletTreeModuleController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);


/***/ }),

/***/ "./src/dialogs/AddDocumentDialog.ts":
/*!******************************************!*\
  !*** ./src/dialogs/AddDocumentDialog.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDocumentDialog: () => (/* binding */ AddDocumentDialog),
/* harmony export */   SaveDocumentAction: () => (/* binding */ SaveDocumentAction)
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



var SaveDocumentAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
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
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var createWorkspaceTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, 'workspace', 'ws_tree').createDocument;
    var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_documents'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createDocumentContent = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_0__.useCreateDocument)(workspaceId, appletId, 'dm_document_contents').createDocument;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Button)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Save'))
        .loading(isLoading)
        .onClick(function () {
        var data = __assign({}, formController.GetFormData());
        createDocument({
            data: __assign({}, data)
        }, function (document) {
            createDocumentContent({
                documentId: document.$id,
                data: {
                    content: ''
                }
            }, function (document) {
                createWorkspaceTreeItem({
                    documentId: document.$id,
                    data: {
                        name: data.name,
                        type: 'document',
                        parent: data.parent,
                        tree_widget: 'com.celmino.widget.document-management-tree',
                        appletId: appletId,
                        path: (new Date()).getTime().toString(),
                        iconName: 'document',
                        iconCategory: 'SystemIcons',
                        //viewer:'com.tuvalsoft.viewer.document'
                    }
                }, function (item) {
                    _tuval_core__WEBPACK_IMPORTED_MODULE_1__.EventBus.Default.fire('applet.added', { treeItem: item });
                });
                createTreeItem({
                    documentId: document.$id,
                    data: __assign(__assign({}, data), { type: 'document', viewer: 'com.tuvalsoft.viewer.document' })
                }, function () { return dialog.Hide(); });
            });
        });
    }));
}); };
SaveDocumentAction.Id = 'com.celmino.action.save-document';
var AddDocumentDialog = function (workspaceId, appletId, parent, path) {
    if (workspaceId == null) {
        alert("spaceId is null");
    }
    else {
        return {
            "title": 'Create document',
            "workspaceId": workspaceId,
            "appletId": appletId,
            /*   "mutation":"_create_workspace", */
            "actions": [
                {
                    "label": "Save",
                    "type": "com.celmino.action.save-document",
                    /*  "successActions": [{
                         "type": "hide"
                     },
                     {
                         "type": "navigate",
                         "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                     }
                     ] */
                    /*  "successActions": [{
                     "type": "hide"
                 },
                 {
                     "type": "navigate",
                     "url": "/app/com.tuvalsoft.app.procetra/workspace/{{id}}"
                 }
                 ] */
                }
            ],
            "fieldMap": {
                "list_name": {
                    "label": "name",
                    "type": "text",
                    "name": "name"
                },
                /*   "type": {
                      "name": "type",
                      "type": "virtual",
                      "value": type
                  }, */
                "parent": {
                    "name": "parent",
                    "type": "virtual",
                    "value": parent
                },
                "path": {
                    "name": "path",
                    "type": "virtual",
                    "value": path
                },
                "viewer": {
                    "name": "viewer",
                    "type": "virtual",
                    "value": "com.tuvalsoft.widget.editorjs"
                },
                /*   "description": {
                      "label": "Description",
                      "type": "text",
                      "multiline": true,
                      "name": "description"
                  } */
            }
        };
    }
};


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
/* harmony export */   ChatIcon: () => (/* binding */ ChatIcon),
/* harmony export */   CourceIcon: () => (/* binding */ CourceIcon),
/* harmony export */   DocumentIcon: () => (/* binding */ DocumentIcon),
/* harmony export */   EventsIcon: () => (/* binding */ EventsIcon),
/* harmony export */   FeedIcon: () => (/* binding */ FeedIcon),
/* harmony export */   FormIcon: () => (/* binding */ FormIcon),
/* harmony export */   GridIcon: () => (/* binding */ GridIcon),
/* harmony export */   ImagesIcon: () => (/* binding */ ImagesIcon),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   MembersIcon: () => (/* binding */ MembersIcon),
/* harmony export */   PostsIcons: () => (/* binding */ PostsIcons),
/* harmony export */   ReportIcon: () => (/* binding */ ReportIcon),
/* harmony export */   TableIcon: () => (/* binding */ TableIcon),
/* harmony export */   TimelineIcon: () => (/* binding */ TimelineIcon),
/* harmony export */   WhiteboardIcon: () => (/* binding */ WhiteboardIcon)
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
var DocumentIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.286v-4.286c0-.789.64-1.428 1.428-1.428H16V12h-4v4l4-4V6a2 2 0 0 0-2-2H6Z" }))); };
var WhiteboardIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.56 6.66a1.5 1.5 0 0 1 2.122-2.12l1.06 1.06a1.5 1.5 0 1 1-2.12 2.121L4.56 6.661ZM13.339 4.56a1.5 1.5 0 1 1 2.121 2.122l-1.06 1.06a1.5 1.5 0 1 1-2.122-2.12L13.34 4.56ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM7.76 12.26a1.5 1.5 0 0 0-2.12 0l-1.061 1.061A1.5 1.5 0 1 0 6.7 15.443l1.06-1.061a1.5 1.5 0 0 0 0-2.121ZM12.26 12.24a1.5 1.5 0 0 0 0 2.12l1.061 1.061a1.5 1.5 0 1 0 2.122-2.121l-1.061-1.06a1.5 1.5 0 0 0-2.121 0Z" }))); };
var FormIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v4.25a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V5.5ZM15 14.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5Z" }),
    " ")); };
var PostsIcons = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { "clip-path": "url(#clip0_3112_136488)" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.68364 18.5309H2.89455C2.39208 18.5309 1.9102 18.3313 1.5549 17.976C1.1996 17.6207 1 17.1388 1 16.6363V3.37453C1 2.87206 1.1996 2.39018 1.5549 2.03488C1.9102 1.67958 2.39208 1.47998 2.89455 1.47998H14.2618C14.7643 1.47998 15.2462 1.67958 15.6015 2.03488C15.9568 2.39018 16.1564 2.87206 16.1564 3.37453V6.21634", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.78906 6.21631H10.4727", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.78906 10.0054H6.68361", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9.52551 18.5307L12.0121 18.2238C12.1869 18.2017 12.3494 18.1225 12.4744 17.9983L18.4981 11.9746C18.6572 11.8162 18.7834 11.6279 18.8696 11.4206C18.9557 11.2132 19.0001 10.9909 19.0001 10.7664C19.0001 10.5419 18.9557 10.3195 18.8696 10.1122C18.7834 9.90485 18.6572 9.71656 18.4981 9.55813C18.3397 9.39903 18.1514 9.27278 17.944 9.18664C17.7367 9.1005 17.5144 9.05615 17.2898 9.05615C17.0653 9.05615 16.843 9.1005 16.6356 9.18664C16.4283 9.27278 16.24 9.39903 16.0816 9.55813L10.1138 15.5259C9.99288 15.6469 9.91444 15.8038 9.89021 15.9731L9.52551 18.5307Z", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { width: "20", height: "20", fill: "white" }))))); };
var EventsIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { "clip-path": "url(#clip0_3112_136489)" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19 7H1", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6 0.879883V3.11988", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14 0.879883V3.11988", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16 19H4C3.20435 19 2.44129 18.6839 1.87868 18.1213C1.31607 17.5587 1 16.7956 1 16V5C1 4.20435 1.31607 3.44129 1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H16C16.7956 2 17.5587 2.31607 18.1213 2.87868C18.6839 3.44129 19 4.20435 19 5V16C19 16.7956 18.6839 17.5587 18.1213 18.1213C17.5587 18.6839 16.7956 19 16 19Z", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { width: "20", height: "20", fill: "white" }))))); };
var ChatIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { "clip-path": "url(#clip0_3112_136490)" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10 15.9996L6.40338 18.8774C6.32162 18.9429 6.22299 18.984 6.11888 18.9959C6.01477 19.0078 5.90942 18.9901 5.81498 18.9447C5.72053 18.8993 5.64085 18.8281 5.58512 18.7393C5.52939 18.6506 5.49988 18.5479 5.5 18.4431V15.9996H4.00037C3.20482 15.9996 2.44183 15.6837 1.87919 15.1212C1.31654 14.5588 1.0003 13.7959 1 13.0004V4.00037C1 3.20463 1.31611 2.44147 1.87879 1.87879C2.44147 1.31611 3.20463 1 4.00037 1H15.9996C16.3936 1 16.7838 1.07761 17.1478 1.22839C17.5118 1.37917 17.8426 1.60018 18.1212 1.87879C18.3998 2.1574 18.6208 2.48816 18.7716 2.85218C18.9224 3.2162 19 3.60636 19 4.00037V13.0004C18.9997 13.7959 18.6835 14.5588 18.1208 15.1212C17.5582 15.6837 16.7952 15.9996 15.9996 15.9996H10Z", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.5 6.0625H14.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.5 10.5625H14.5", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("clipPath", { id: "clip0_3112_136490" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", { width: "20", height: "20", fill: "white" }))))); };
var CourceIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 16 16", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12.5422 15H3.20888C2.34943 15 1.65332 14.3039 1.65332 13.4444V2.55556C1.65332 1.69611 2.34943 1 3.20888 1H12.5422C13.4017 1 14.0978 1.69611 14.0978 2.55556V13.4444C14.0978 14.3039 13.4017 15 12.5422 15Z", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0.87561 4.88892H2.68783", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0.87561 8H2.68783", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0.782227 11.1111H2.68778", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.54236 4.88892H10.209", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M5.54236 8H8.65347", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }))); };
var MembersIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M1 20.5612C1 19.2646 1.51507 18.0211 2.43191 17.1043C3.34875 16.1874 4.59226 15.6724 5.88886 15.6724H10.7777C12.0743 15.6724 13.3178 16.1874 14.2347 17.1043C15.1515 18.0211 15.6666 19.2646 15.6666 20.5612", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M16.8887 4.24573C17.6991 4.24573 18.4762 4.56765 19.0493 5.14067C19.6223 5.7137 19.9442 6.49089 19.9442 7.30127C19.9442 8.11165 19.6223 8.88883 19.0493 9.46186C18.4762 10.0349 17.6991 10.3568 16.8887 10.3568", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M11.2727 4.6675C12.0523 5.44709 12.4902 6.50443 12.4902 7.60693C12.4902 8.70943 12.0523 9.76677 11.2727 10.5464C10.4931 11.3259 9.43575 11.7639 8.33325 11.7639C7.23075 11.7639 6.17341 11.3259 5.39382 10.5464C4.61424 9.76677 4.17627 8.70943 4.17627 7.60693C4.17627 6.50443 4.61424 5.44709 5.39382 4.6675C6.17341 3.88792 7.23075 3.44995 8.33325 3.44995C9.43575 3.44995 10.4931 3.88792 11.2727 4.6675", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M18.1113 14.4502C19.4079 14.4502 20.6514 14.9653 21.5683 15.8821C22.4851 16.7989 23.0002 18.0425 23.0002 19.3391", stroke: "currentColor", "stroke-width": "1.75", "stroke-linecap": "round", "stroke-linejoin": "round" }))); };
var ImagesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M10.47 9.80396H10.471", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M1 11.3C1.32168 11.2505 1.64654 11.2244 1.972 11.222C3.77706 11.222 5.5082 11.9391 6.78457 13.2155C8.06094 14.4918 8.778 16.223 8.778 18.028C8.77492 18.3535 8.74886 18.6783 8.7 19", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5V4C4 3.20435 4.31607 2.44129 4.87868 1.87868C5.44129 1.31607 6.20435 1 7 1H16C16.7956 1 17.5587 1.31607 18.1213 1.87868C18.6839 2.44129 19 3.20435 19 4V13C19 13.7956 18.6839 14.5587 18.1213 15.1213C17.5587 15.6839 16.7956 16 16 16H15V8C15 6.34315 13.6569 5 12 5H4ZM4 5H10", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 5V4C4 3.20435 4.31607 2.44129 4.87868 1.87868C5.44129 1.31607 6.20435 1 7 1H16C16.7956 1 17.5587 1.31607 18.1213 1.87868C18.6839 2.44129 19 3.20435 19 4V13C19 13.7956 18.6839 14.5587 18.1213 15.1213C17.5587 15.6839 16.7956 16 16 16H15", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M12 5H4C2.34315 5 1 6.34315 1 8V16C1 17.6569 2.34315 19 4 19H12C13.6569 19 15 17.6569 15 16V8C15 6.34315 13.6569 5 12 5Z", stroke: "currentColor", "stroke-width": "1.25", "stroke-linecap": "round", "stroke-linejoin": "round" }))); };
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

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.widget.community-applet-tree',
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

/***/ "@realmocean/ui":
/*!********************************!*\
  !*** external "realmocean$ui" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = realmocean$ui;

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
/* harmony import */ var _WidgetController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetController */ "./src/WidgetController.tsx");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/ui */ "@realmocean/ui");
/* harmony import */ var _realmocean_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/AddDocumentDialog */ "./src/dialogs/AddDocumentDialog.ts");
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
        return _WidgetController__WEBPACK_IMPORTED_MODULE_0__.CustomAppletTreeModuleController;
    };
    RatingWidget = __decorate([
        App(manifest)
    ], RatingWidget);
    return RatingWidget;
}());

_realmocean_ui__WEBPACK_IMPORTED_MODULE_1__.FormBuilder.injectAction(_dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_2__.SaveDocumentAction.Id, _dialogs_AddDocumentDialog__WEBPACK_IMPORTED_MODULE_2__.SaveDocumentAction);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.widget.community-applet-tree', tuval$core['__APPS__']['com.celmino.widget.community-applet-tree']);
                    