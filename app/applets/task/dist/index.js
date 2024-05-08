
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
* Tuval Framework Created By Tuvalsoft in 2019 
* Task Applet                                                                                          *
******************************************************************************************************************************@*/
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiddenText: () => (/* binding */ HiddenText),
/* harmony export */   LiveRegion: () => (/* binding */ LiveRegion),
/* harmony export */   useAnnouncement: () => (/* binding */ useAnnouncement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const hiddenStyles = {
  display: 'none'
};
function HiddenText(_ref) {
  let {
    id,
    value
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    style: hiddenStyles
  }, value);
}

function LiveRegion(_ref) {
  let {
    id,
    announcement,
    ariaLiveType = "assertive"
  } = _ref;
  // Hide element visually but keep it readable by screen readers
  const visuallyHidden = {
    position: 'fixed',
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(100%)',
    whiteSpace: 'nowrap'
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: id,
    style: visuallyHidden,
    role: "status",
    "aria-live": ariaLiveType,
    "aria-atomic": true
  }, announcement);
}

function useAnnouncement() {
  const [announcement, setAnnouncement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const announce = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    if (value != null) {
      setAnnouncement(value);
    }
  }, []);
  return {
    announce,
    announcement
  };
}


//# sourceMappingURL=accessibility.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/core/dist/core.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@dnd-kit/core/dist/core.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoScrollActivator: () => (/* binding */ AutoScrollActivator),
/* harmony export */   DndContext: () => (/* binding */ DndContext),
/* harmony export */   DragOverlay: () => (/* binding */ DragOverlay),
/* harmony export */   KeyboardCode: () => (/* binding */ KeyboardCode),
/* harmony export */   KeyboardSensor: () => (/* binding */ KeyboardSensor),
/* harmony export */   MeasuringFrequency: () => (/* binding */ MeasuringFrequency),
/* harmony export */   MeasuringStrategy: () => (/* binding */ MeasuringStrategy),
/* harmony export */   MouseSensor: () => (/* binding */ MouseSensor),
/* harmony export */   PointerSensor: () => (/* binding */ PointerSensor),
/* harmony export */   TouchSensor: () => (/* binding */ TouchSensor),
/* harmony export */   TraversalOrder: () => (/* binding */ TraversalOrder),
/* harmony export */   applyModifiers: () => (/* binding */ applyModifiers),
/* harmony export */   closestCenter: () => (/* binding */ closestCenter),
/* harmony export */   closestCorners: () => (/* binding */ closestCorners),
/* harmony export */   defaultAnnouncements: () => (/* binding */ defaultAnnouncements),
/* harmony export */   defaultCoordinates: () => (/* binding */ defaultCoordinates),
/* harmony export */   defaultDropAnimation: () => (/* binding */ defaultDropAnimationConfiguration),
/* harmony export */   defaultDropAnimationSideEffects: () => (/* binding */ defaultDropAnimationSideEffects),
/* harmony export */   defaultScreenReaderInstructions: () => (/* binding */ defaultScreenReaderInstructions),
/* harmony export */   getClientRect: () => (/* binding */ getClientRect),
/* harmony export */   getFirstCollision: () => (/* binding */ getFirstCollision),
/* harmony export */   getScrollableAncestors: () => (/* binding */ getScrollableAncestors),
/* harmony export */   pointerWithin: () => (/* binding */ pointerWithin),
/* harmony export */   rectIntersection: () => (/* binding */ rectIntersection),
/* harmony export */   useDndContext: () => (/* binding */ useDndContext),
/* harmony export */   useDndMonitor: () => (/* binding */ useDndMonitor),
/* harmony export */   useDraggable: () => (/* binding */ useDraggable),
/* harmony export */   useDroppable: () => (/* binding */ useDroppable),
/* harmony export */   useSensor: () => (/* binding */ useSensor),
/* harmony export */   useSensors: () => (/* binding */ useSensors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/accessibility */ "./node_modules/@dnd-kit/accessibility/dist/accessibility.esm.js");





const DndMonitorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);

function useDndMonitor(listener) {
  const registerListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DndMonitorContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!registerListener) {
      throw new Error('useDndMonitor must be used within a children of <DndContext>');
    }

    const unsubscribe = registerListener(listener);
    return unsubscribe;
  }, [listener, registerListener]);
}

function useDndMonitorProvider() {
  const [listeners] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => new Set());
  const registerListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, [listeners]);
  const dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(_ref => {
    let {
      type,
      event
    } = _ref;
    listeners.forEach(listener => {
      var _listener$type;

      return (_listener$type = listener[type]) == null ? void 0 : _listener$type.call(listener, event);
    });
  }, [listeners]);
  return [dispatch, registerListener];
}

const defaultScreenReaderInstructions = {
  draggable: "\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "
};
const defaultAnnouncements = {
  onDragStart(_ref) {
    let {
      active
    } = _ref;
    return "Picked up draggable item " + active.id + ".";
  },

  onDragOver(_ref2) {
    let {
      active,
      over
    } = _ref2;

    if (over) {
      return "Draggable item " + active.id + " was moved over droppable area " + over.id + ".";
    }

    return "Draggable item " + active.id + " is no longer over a droppable area.";
  },

  onDragEnd(_ref3) {
    let {
      active,
      over
    } = _ref3;

    if (over) {
      return "Draggable item " + active.id + " was dropped over droppable area " + over.id;
    }

    return "Draggable item " + active.id + " was dropped.";
  },

  onDragCancel(_ref4) {
    let {
      active
    } = _ref4;
    return "Dragging was cancelled. Draggable item " + active.id + " was dropped.";
  }

};

function Accessibility(_ref) {
  let {
    announcements = defaultAnnouncements,
    container,
    hiddenTextDescribedById,
    screenReaderInstructions = defaultScreenReaderInstructions
  } = _ref;
  const {
    announce,
    announcement
  } = (0,_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.useAnnouncement)();
  const liveRegionId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)("DndLiveRegion");
  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setMounted(true);
  }, []);
  useDndMonitor((0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onDragStart(_ref2) {
      let {
        active
      } = _ref2;
      announce(announcements.onDragStart({
        active
      }));
    },

    onDragMove(_ref3) {
      let {
        active,
        over
      } = _ref3;

      if (announcements.onDragMove) {
        announce(announcements.onDragMove({
          active,
          over
        }));
      }
    },

    onDragOver(_ref4) {
      let {
        active,
        over
      } = _ref4;
      announce(announcements.onDragOver({
        active,
        over
      }));
    },

    onDragEnd(_ref5) {
      let {
        active,
        over
      } = _ref5;
      announce(announcements.onDragEnd({
        active,
        over
      }));
    },

    onDragCancel(_ref6) {
      let {
        active,
        over
      } = _ref6;
      announce(announcements.onDragCancel({
        active,
        over
      }));
    }

  }), [announce, announcements]));

  if (!mounted) {
    return null;
  }

  const markup = react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.HiddenText, {
    id: hiddenTextDescribedById,
    value: screenReaderInstructions.draggable
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_accessibility__WEBPACK_IMPORTED_MODULE_3__.LiveRegion, {
    id: liveRegionId,
    announcement: announcement
  }));
  return container ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(markup, container) : markup;
}

var Action;

(function (Action) {
  Action["DragStart"] = "dragStart";
  Action["DragMove"] = "dragMove";
  Action["DragEnd"] = "dragEnd";
  Action["DragCancel"] = "dragCancel";
  Action["DragOver"] = "dragOver";
  Action["RegisterDroppable"] = "registerDroppable";
  Action["SetDroppableDisabled"] = "setDroppableDisabled";
  Action["UnregisterDroppable"] = "unregisterDroppable";
})(Action || (Action = {}));

function noop() {}

function useSensor(sensor, options) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sensor,
    options: options != null ? options : {}
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [sensor, options]);
}

function useSensors() {
  for (var _len = arguments.length, sensors = new Array(_len), _key = 0; _key < _len; _key++) {
    sensors[_key] = arguments[_key];
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...sensors].filter(sensor => sensor != null), // eslint-disable-next-line react-hooks/exhaustive-deps
  [...sensors]);
}

const defaultCoordinates = /*#__PURE__*/Object.freeze({
  x: 0,
  y: 0
});

/**
 * Returns the distance between two points
 */
function distanceBetween(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getRelativeTransformOrigin(event, rect) {
  const eventCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event);

  if (!eventCoordinates) {
    return '0 0';
  }

  const transformOrigin = {
    x: (eventCoordinates.x - rect.left) / rect.width * 100,
    y: (eventCoordinates.y - rect.top) / rect.height * 100
  };
  return transformOrigin.x + "% " + transformOrigin.y + "%";
}

/**
 * Sort collisions from smallest to greatest value
 */
function sortCollisionsAsc(_ref, _ref2) {
  let {
    data: {
      value: a
    }
  } = _ref;
  let {
    data: {
      value: b
    }
  } = _ref2;
  return a - b;
}
/**
 * Sort collisions from greatest to smallest value
 */

function sortCollisionsDesc(_ref3, _ref4) {
  let {
    data: {
      value: a
    }
  } = _ref3;
  let {
    data: {
      value: b
    }
  } = _ref4;
  return b - a;
}
/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */

function cornersOfRectangle(_ref5) {
  let {
    left,
    top,
    height,
    width
  } = _ref5;
  return [{
    x: left,
    y: top
  }, {
    x: left + width,
    y: top
  }, {
    x: left,
    y: top + height
  }, {
    x: left + width,
    y: top + height
  }];
}
function getFirstCollision(collisions, property) {
  if (!collisions || collisions.length === 0) {
    return null;
  }

  const [firstCollision] = collisions;
  return property ? firstCollision[property] : firstCollision;
}

/**
 * Returns the coordinates of the center of a given ClientRect
 */

function centerOfRectangle(rect, left, top) {
  if (left === void 0) {
    left = rect.left;
  }

  if (top === void 0) {
    top = rect.top;
  }

  return {
    x: left + rect.width * 0.5,
    y: top + rect.height * 0.5
  };
}
/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */


const closestCenter = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const centerRect = centerOfRectangle(collisionRect, collisionRect.left, collisionRect.top);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const distBetween = distanceBetween(centerOfRectangle(rect), centerRect);
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: distBetween
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */

const closestCorners = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const corners = cornersOfRectangle(collisionRect);
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const rectCorners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner, index) => {
        return accumulator + distanceBetween(rectCorners[index], corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

/**
 * Returns the intersecting rectangle area between two rectangles
 */

function getIntersectionRatio(entry, target) {
  const top = Math.max(target.top, entry.top);
  const left = Math.max(target.left, entry.left);
  const right = Math.min(target.left + target.width, entry.left + entry.width);
  const bottom = Math.min(target.top + target.height, entry.top + entry.height);
  const width = right - left;
  const height = bottom - top;

  if (left < right && top < bottom) {
    const targetArea = target.width * target.height;
    const entryArea = entry.width * entry.height;
    const intersectionArea = width * height;
    const intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  } // Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)


  return 0;
}
/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */

const rectIntersection = _ref => {
  let {
    collisionRect,
    droppableRects,
    droppableContainers
  } = _ref;
  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect) {
      const intersectionRatio = getIntersectionRatio(rect, collisionRect);

      if (intersectionRatio > 0) {
        collisions.push({
          id,
          data: {
            droppableContainer,
            value: intersectionRatio
          }
        });
      }
    }
  }

  return collisions.sort(sortCollisionsDesc);
};

/**
 * Check if a given point is contained within a bounding rectangle
 */

function isPointWithinRect(point, rect) {
  const {
    top,
    left,
    bottom,
    right
  } = rect;
  return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
}
/**
 * Returns the rectangles that the pointer is hovering over
 */


const pointerWithin = _ref => {
  let {
    droppableContainers,
    droppableRects,
    pointerCoordinates
  } = _ref;

  if (!pointerCoordinates) {
    return [];
  }

  const collisions = [];

  for (const droppableContainer of droppableContainers) {
    const {
      id
    } = droppableContainer;
    const rect = droppableRects.get(id);

    if (rect && isPointWithinRect(pointerCoordinates, rect)) {
      /* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */
      const corners = cornersOfRectangle(rect);
      const distances = corners.reduce((accumulator, corner) => {
        return accumulator + distanceBetween(pointerCoordinates, corner);
      }, 0);
      const effectiveDistance = Number((distances / 4).toFixed(4));
      collisions.push({
        id,
        data: {
          droppableContainer,
          value: effectiveDistance
        }
      });
    }
  }

  return collisions.sort(sortCollisionsAsc);
};

function adjustScale(transform, rect1, rect2) {
  return { ...transform,
    scaleX: rect1 && rect2 ? rect1.width / rect2.width : 1,
    scaleY: rect1 && rect2 ? rect1.height / rect2.height : 1
  };
}

function getRectDelta(rect1, rect2) {
  return rect1 && rect2 ? {
    x: rect1.left - rect2.left,
    y: rect1.top - rect2.top
  } : defaultCoordinates;
}

function createRectAdjustmentFn(modifier) {
  return function adjustClientRect(rect) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((acc, adjustment) => ({ ...acc,
      top: acc.top + modifier * adjustment.y,
      bottom: acc.bottom + modifier * adjustment.y,
      left: acc.left + modifier * adjustment.x,
      right: acc.right + modifier * adjustment.x
    }), { ...rect
    });
  };
}
const getAdjustedRect = /*#__PURE__*/createRectAdjustmentFn(1);

function parseTransform(transform) {
  if (transform.startsWith('matrix3d(')) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith('matrix(')) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }

  return null;
}

function inverseTransform(rect, transform, transformOrigin) {
  const parsedTransform = parseTransform(transform);

  if (!parsedTransform) {
    return rect;
  }

  const {
    scaleX,
    scaleY,
    x: translateX,
    y: translateY
  } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(' ') + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}

const defaultOptions = {
  ignoreTransform: false
};
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */

function getClientRect(element, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  let rect = element.getBoundingClientRect();

  if (options.ignoreTransform) {
    const {
      transform,
      transformOrigin
    } = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element).getComputedStyle(element);

    if (transform) {
      rect = inverseTransform(rect, transform, transformOrigin);
    }
  }

  const {
    top,
    left,
    width,
    height,
    bottom,
    right
  } = rect;
  return {
    top,
    left,
    width,
    height,
    bottom,
    right
  };
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */

function getTransformAgnosticClientRect(element) {
  return getClientRect(element, {
    ignoreTransform: true
  });
}

function getWindowClientRect(element) {
  const width = element.innerWidth;
  const height = element.innerHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

function isFixed(node, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(node).getComputedStyle(node);
  }

  return computedStyle.position === 'fixed';
}

function isScrollable(element, computedStyle) {
  if (computedStyle === void 0) {
    computedStyle = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element).getComputedStyle(element);
  }

  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ['overflow', 'overflowX', 'overflowY'];
  return properties.some(property => {
    const value = computedStyle[property];
    return typeof value === 'string' ? overflowRegex.test(value) : false;
  });
}

function getScrollableAncestors(element, limit) {
  const scrollParents = [];

  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.length >= limit) {
      return scrollParents;
    }

    if (!node) {
      return scrollParents;
    }

    if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isDocument)(node) && node.scrollingElement != null && !scrollParents.includes(node.scrollingElement)) {
      scrollParents.push(node.scrollingElement);
      return scrollParents;
    }

    if (!(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(node) || (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isSVGElement)(node)) {
      return scrollParents;
    }

    if (scrollParents.includes(node)) {
      return scrollParents;
    }

    const computedStyle = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(element).getComputedStyle(node);

    if (node !== element) {
      if (isScrollable(node, computedStyle)) {
        scrollParents.push(node);
      }
    }

    if (isFixed(node, computedStyle)) {
      return scrollParents;
    }

    return findScrollableAncestors(node.parentNode);
  }

  if (!element) {
    return scrollParents;
  }

  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, 1);
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}

function getScrollableElement(element) {
  if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM || !element) {
    return null;
  }

  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isWindow)(element)) {
    return element;
  }

  if (!(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isNode)(element)) {
    return null;
  }

  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isDocument)(element) || element === (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(element).scrollingElement) {
    return window;
  }

  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(element)) {
    return element;
  }

  return null;
}

function getScrollXCoordinate(element) {
  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isWindow)(element)) {
    return element.scrollX;
  }

  return element.scrollLeft;
}
function getScrollYCoordinate(element) {
  if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isWindow)(element)) {
    return element.scrollY;
  }

  return element.scrollTop;
}
function getScrollCoordinates(element) {
  return {
    x: getScrollXCoordinate(element),
    y: getScrollYCoordinate(element)
  };
}

var Direction;

(function (Direction) {
  Direction[Direction["Forward"] = 1] = "Forward";
  Direction[Direction["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

function isDocumentScrollingElement(element) {
  if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM || !element) {
    return false;
  }

  return element === document.scrollingElement;
}

function getScrollPosition(scrollingContainer) {
  const minScroll = {
    x: 0,
    y: 0
  };
  const dimensions = isDocumentScrollingElement(scrollingContainer) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: scrollingContainer.clientHeight,
    width: scrollingContainer.clientWidth
  };
  const maxScroll = {
    x: scrollingContainer.scrollWidth - dimensions.width,
    y: scrollingContainer.scrollHeight - dimensions.height
  };
  const isTop = scrollingContainer.scrollTop <= minScroll.y;
  const isLeft = scrollingContainer.scrollLeft <= minScroll.x;
  const isBottom = scrollingContainer.scrollTop >= maxScroll.y;
  const isRight = scrollingContainer.scrollLeft >= maxScroll.x;
  return {
    isTop,
    isLeft,
    isBottom,
    isRight,
    maxScroll,
    minScroll
  };
}

const defaultThreshold = {
  x: 0.2,
  y: 0.2
};
function getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, _ref, acceleration, thresholdPercentage) {
  let {
    top,
    left,
    right,
    bottom
  } = _ref;

  if (acceleration === void 0) {
    acceleration = 10;
  }

  if (thresholdPercentage === void 0) {
    thresholdPercentage = defaultThreshold;
  }

  const {
    isTop,
    isBottom,
    isLeft,
    isRight
  } = getScrollPosition(scrollContainer);
  const direction = {
    x: 0,
    y: 0
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };

  if (!isTop && top <= scrollContainerRect.top + threshold.height) {
    // Scroll Up
    direction.y = Direction.Backward;
    speed.y = acceleration * Math.abs((scrollContainerRect.top + threshold.height - top) / threshold.height);
  } else if (!isBottom && bottom >= scrollContainerRect.bottom - threshold.height) {
    // Scroll Down
    direction.y = Direction.Forward;
    speed.y = acceleration * Math.abs((scrollContainerRect.bottom - threshold.height - bottom) / threshold.height);
  }

  if (!isRight && right >= scrollContainerRect.right - threshold.width) {
    // Scroll Right
    direction.x = Direction.Forward;
    speed.x = acceleration * Math.abs((scrollContainerRect.right - threshold.width - right) / threshold.width);
  } else if (!isLeft && left <= scrollContainerRect.left + threshold.width) {
    // Scroll Left
    direction.x = Direction.Backward;
    speed.x = acceleration * Math.abs((scrollContainerRect.left + threshold.width - left) / threshold.width);
  }

  return {
    direction,
    speed
  };
}

function getScrollElementRect(element) {
  if (element === document.scrollingElement) {
    const {
      innerWidth,
      innerHeight
    } = window;
    return {
      top: 0,
      left: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight
    };
  }

  const {
    top,
    left,
    right,
    bottom
  } = element.getBoundingClientRect();
  return {
    top,
    left,
    right,
    bottom,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getScrollOffsets(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(acc, getScrollCoordinates(node));
  }, defaultCoordinates);
}
function getScrollXOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollXCoordinate(node);
  }, 0);
}
function getScrollYOffset(scrollableAncestors) {
  return scrollableAncestors.reduce((acc, node) => {
    return acc + getScrollYCoordinate(node);
  }, 0);
}

function scrollIntoViewIfNeeded(element, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  if (!element) {
    return;
  }

  const {
    top,
    left,
    bottom,
    right
  } = measure(element);
  const firstScrollableAncestor = getFirstScrollableAncestor(element);

  if (!firstScrollableAncestor) {
    return;
  }

  if (bottom <= 0 || right <= 0 || top >= window.innerHeight || left >= window.innerWidth) {
    element.scrollIntoView({
      block: 'center',
      inline: 'center'
    });
  }
}

const properties = [['x', ['left', 'right'], getScrollXOffset], ['y', ['top', 'bottom'], getScrollYOffset]];
class Rect {
  constructor(rect, element) {
    this.rect = void 0;
    this.width = void 0;
    this.height = void 0;
    this.top = void 0;
    this.bottom = void 0;
    this.right = void 0;
    this.left = void 0;
    const scrollableAncestors = getScrollableAncestors(element);
    const scrollOffsets = getScrollOffsets(scrollableAncestors);
    this.rect = { ...rect
    };
    this.width = rect.width;
    this.height = rect.height;

    for (const [axis, keys, getScrollOffset] of properties) {
      for (const key of keys) {
        Object.defineProperty(this, key, {
          get: () => {
            const currentOffsets = getScrollOffset(scrollableAncestors);
            const scrollOffsetsDeltla = scrollOffsets[axis] - currentOffsets;
            return this.rect[key] + scrollOffsetsDeltla;
          },
          enumerable: true
        });
      }
    }

    Object.defineProperty(this, 'rect', {
      enumerable: false
    });
  }

}

class Listeners {
  constructor(target) {
    this.target = void 0;
    this.listeners = [];

    this.removeAll = () => {
      this.listeners.forEach(listener => {
        var _this$target;

        return (_this$target = this.target) == null ? void 0 : _this$target.removeEventListener(...listener);
      });
    };

    this.target = target;
  }

  add(eventName, handler, options) {
    var _this$target2;

    (_this$target2 = this.target) == null ? void 0 : _this$target2.addEventListener(eventName, handler, options);
    this.listeners.push([eventName, handler, options]);
  }

}

function getEventListenerTarget(target) {
  // If the `event.target` element is removed from the document events will still be targeted
  // at it, and hence won't always bubble up to the window or document anymore.
  // If there is any risk of an element being removed while it is being dragged,
  // the best practice is to attach the event listeners directly to the target.
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
  const {
    EventTarget
  } = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(target);
  return target instanceof EventTarget ? target : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(target);
}

function hasExceededDistance(delta, measurement) {
  const dx = Math.abs(delta.x);
  const dy = Math.abs(delta.y);

  if (typeof measurement === 'number') {
    return Math.sqrt(dx ** 2 + dy ** 2) > measurement;
  }

  if ('x' in measurement && 'y' in measurement) {
    return dx > measurement.x && dy > measurement.y;
  }

  if ('x' in measurement) {
    return dx > measurement.x;
  }

  if ('y' in measurement) {
    return dy > measurement.y;
  }

  return false;
}

var EventName;

(function (EventName) {
  EventName["Click"] = "click";
  EventName["DragStart"] = "dragstart";
  EventName["Keydown"] = "keydown";
  EventName["ContextMenu"] = "contextmenu";
  EventName["Resize"] = "resize";
  EventName["SelectionChange"] = "selectionchange";
  EventName["VisibilityChange"] = "visibilitychange";
})(EventName || (EventName = {}));

function preventDefault(event) {
  event.preventDefault();
}
function stopPropagation(event) {
  event.stopPropagation();
}

var KeyboardCode;

(function (KeyboardCode) {
  KeyboardCode["Space"] = "Space";
  KeyboardCode["Down"] = "ArrowDown";
  KeyboardCode["Right"] = "ArrowRight";
  KeyboardCode["Left"] = "ArrowLeft";
  KeyboardCode["Up"] = "ArrowUp";
  KeyboardCode["Esc"] = "Escape";
  KeyboardCode["Enter"] = "Enter";
})(KeyboardCode || (KeyboardCode = {}));

const defaultKeyboardCodes = {
  start: [KeyboardCode.Space, KeyboardCode.Enter],
  cancel: [KeyboardCode.Esc],
  end: [KeyboardCode.Space, KeyboardCode.Enter]
};
const defaultKeyboardCoordinateGetter = (event, _ref) => {
  let {
    currentCoordinates
  } = _ref;

  switch (event.code) {
    case KeyboardCode.Right:
      return { ...currentCoordinates,
        x: currentCoordinates.x + 25
      };

    case KeyboardCode.Left:
      return { ...currentCoordinates,
        x: currentCoordinates.x - 25
      };

    case KeyboardCode.Down:
      return { ...currentCoordinates,
        y: currentCoordinates.y + 25
      };

    case KeyboardCode.Up:
      return { ...currentCoordinates,
        y: currentCoordinates.y - 25
      };
  }

  return undefined;
};

class KeyboardSensor {
  constructor(props) {
    this.props = void 0;
    this.autoScrollEnabled = false;
    this.referenceCoordinates = void 0;
    this.listeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    const {
      event: {
        target
      }
    } = props;
    this.props = props;
    this.listeners = new Listeners((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(target));
    this.windowListeners = new Listeners((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(target));
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.attach();
  }

  attach() {
    this.handleStart();
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    setTimeout(() => this.listeners.add(EventName.Keydown, this.handleKeyDown));
  }

  handleStart() {
    const {
      activeNode,
      onStart
    } = this.props;
    const node = activeNode.node.current;

    if (node) {
      scrollIntoViewIfNeeded(node);
    }

    onStart(defaultCoordinates);
  }

  handleKeyDown(event) {
    if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(event)) {
      const {
        active,
        context,
        options
      } = this.props;
      const {
        keyboardCodes = defaultKeyboardCodes,
        coordinateGetter = defaultKeyboardCoordinateGetter,
        scrollBehavior = 'smooth'
      } = options;
      const {
        code
      } = event;

      if (keyboardCodes.end.includes(code)) {
        this.handleEnd(event);
        return;
      }

      if (keyboardCodes.cancel.includes(code)) {
        this.handleCancel(event);
        return;
      }

      const {
        collisionRect
      } = context.current;
      const currentCoordinates = collisionRect ? {
        x: collisionRect.left,
        y: collisionRect.top
      } : defaultCoordinates;

      if (!this.referenceCoordinates) {
        this.referenceCoordinates = currentCoordinates;
      }

      const newCoordinates = coordinateGetter(event, {
        active,
        context: context.current,
        currentCoordinates
      });

      if (newCoordinates) {
        const coordinatesDelta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(newCoordinates, currentCoordinates);
        const scrollDelta = {
          x: 0,
          y: 0
        };
        const {
          scrollableAncestors
        } = context.current;

        for (const scrollContainer of scrollableAncestors) {
          const direction = event.code;
          const {
            isTop,
            isRight,
            isLeft,
            isBottom,
            maxScroll,
            minScroll
          } = getScrollPosition(scrollContainer);
          const scrollElementRect = getScrollElementRect(scrollContainer);
          const clampedCoordinates = {
            x: Math.min(direction === KeyboardCode.Right ? scrollElementRect.right - scrollElementRect.width / 2 : scrollElementRect.right, Math.max(direction === KeyboardCode.Right ? scrollElementRect.left : scrollElementRect.left + scrollElementRect.width / 2, newCoordinates.x)),
            y: Math.min(direction === KeyboardCode.Down ? scrollElementRect.bottom - scrollElementRect.height / 2 : scrollElementRect.bottom, Math.max(direction === KeyboardCode.Down ? scrollElementRect.top : scrollElementRect.top + scrollElementRect.height / 2, newCoordinates.y))
          };
          const canScrollX = direction === KeyboardCode.Right && !isRight || direction === KeyboardCode.Left && !isLeft;
          const canScrollY = direction === KeyboardCode.Down && !isBottom || direction === KeyboardCode.Up && !isTop;

          if (canScrollX && clampedCoordinates.x !== newCoordinates.x) {
            const newScrollCoordinates = scrollContainer.scrollLeft + coordinatesDelta.x;
            const canScrollToNewCoordinates = direction === KeyboardCode.Right && newScrollCoordinates <= maxScroll.x || direction === KeyboardCode.Left && newScrollCoordinates >= minScroll.x;

            if (canScrollToNewCoordinates && !coordinatesDelta.y) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                left: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.x = scrollContainer.scrollLeft - newScrollCoordinates;
            } else {
              scrollDelta.x = direction === KeyboardCode.Right ? scrollContainer.scrollLeft - maxScroll.x : scrollContainer.scrollLeft - minScroll.x;
            }

            if (scrollDelta.x) {
              scrollContainer.scrollBy({
                left: -scrollDelta.x,
                behavior: scrollBehavior
              });
            }

            break;
          } else if (canScrollY && clampedCoordinates.y !== newCoordinates.y) {
            const newScrollCoordinates = scrollContainer.scrollTop + coordinatesDelta.y;
            const canScrollToNewCoordinates = direction === KeyboardCode.Down && newScrollCoordinates <= maxScroll.y || direction === KeyboardCode.Up && newScrollCoordinates >= minScroll.y;

            if (canScrollToNewCoordinates && !coordinatesDelta.x) {
              // We don't need to update coordinates, the scroll adjustment alone will trigger
              // logic to auto-detect the new container we are over
              scrollContainer.scrollTo({
                top: newScrollCoordinates,
                behavior: scrollBehavior
              });
              return;
            }

            if (canScrollToNewCoordinates) {
              scrollDelta.y = scrollContainer.scrollTop - newScrollCoordinates;
            } else {
              scrollDelta.y = direction === KeyboardCode.Down ? scrollContainer.scrollTop - maxScroll.y : scrollContainer.scrollTop - minScroll.y;
            }

            if (scrollDelta.y) {
              scrollContainer.scrollBy({
                top: -scrollDelta.y,
                behavior: scrollBehavior
              });
            }

            break;
          }
        }

        this.handleMove(event, (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(newCoordinates, this.referenceCoordinates), scrollDelta));
      }
    }
  }

  handleMove(event, coordinates) {
    const {
      onMove
    } = this.props;
    event.preventDefault();
    onMove(coordinates);
  }

  handleEnd(event) {
    const {
      onEnd
    } = this.props;
    event.preventDefault();
    this.detach();
    onEnd();
  }

  handleCancel(event) {
    const {
      onCancel
    } = this.props;
    event.preventDefault();
    this.detach();
    onCancel();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll();
  }

}
KeyboardSensor.activators = [{
  eventName: 'onKeyDown',
  handler: (event, _ref, _ref2) => {
    let {
      keyboardCodes = defaultKeyboardCodes,
      onActivation
    } = _ref;
    let {
      active
    } = _ref2;
    const {
      code
    } = event.nativeEvent;

    if (keyboardCodes.start.includes(code)) {
      const activator = active.activatorNode.current;

      if (activator && event.target !== activator) {
        return false;
      }

      event.preventDefault();
      onActivation == null ? void 0 : onActivation({
        event: event.nativeEvent
      });
      return true;
    }

    return false;
  }
}];

function isDistanceConstraint(constraint) {
  return Boolean(constraint && 'distance' in constraint);
}

function isDelayConstraint(constraint) {
  return Boolean(constraint && 'delay' in constraint);
}

class AbstractPointerSensor {
  constructor(props, events, listenerTarget) {
    var _getEventCoordinates;

    if (listenerTarget === void 0) {
      listenerTarget = getEventListenerTarget(props.event.target);
    }

    this.props = void 0;
    this.events = void 0;
    this.autoScrollEnabled = true;
    this.document = void 0;
    this.activated = false;
    this.initialCoordinates = void 0;
    this.timeoutId = null;
    this.listeners = void 0;
    this.documentListeners = void 0;
    this.windowListeners = void 0;
    this.props = props;
    this.events = events;
    const {
      event
    } = props;
    const {
      target
    } = event;
    this.props = props;
    this.events = events;
    this.document = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(target);
    this.documentListeners = new Listeners(this.document);
    this.listeners = new Listeners(listenerTarget);
    this.windowListeners = new Listeners((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(target));
    this.initialCoordinates = (_getEventCoordinates = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event)) != null ? _getEventCoordinates : defaultCoordinates;
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.removeTextSelection = this.removeTextSelection.bind(this);
    this.attach();
  }

  attach() {
    const {
      events,
      props: {
        options: {
          activationConstraint,
          bypassActivationConstraint
        }
      }
    } = this;
    this.listeners.add(events.move.name, this.handleMove, {
      passive: false
    });
    this.listeners.add(events.end.name, this.handleEnd);
    this.windowListeners.add(EventName.Resize, this.handleCancel);
    this.windowListeners.add(EventName.DragStart, preventDefault);
    this.windowListeners.add(EventName.VisibilityChange, this.handleCancel);
    this.windowListeners.add(EventName.ContextMenu, preventDefault);
    this.documentListeners.add(EventName.Keydown, this.handleKeydown);

    if (activationConstraint) {
      if (bypassActivationConstraint != null && bypassActivationConstraint({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      })) {
        return this.handleStart();
      }

      if (isDelayConstraint(activationConstraint)) {
        this.timeoutId = setTimeout(this.handleStart, activationConstraint.delay);
        return;
      }

      if (isDistanceConstraint(activationConstraint)) {
        return;
      }
    }

    this.handleStart();
  }

  detach() {
    this.listeners.removeAll();
    this.windowListeners.removeAll(); // Wait until the next event loop before removing document listeners
    // This is necessary because we listen for `click` and `selection` events on the document

    setTimeout(this.documentListeners.removeAll, 50);

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  handleStart() {
    const {
      initialCoordinates
    } = this;
    const {
      onStart
    } = this.props;

    if (initialCoordinates) {
      this.activated = true; // Stop propagation of click events once activation constraints are met

      this.documentListeners.add(EventName.Click, stopPropagation, {
        capture: true
      }); // Remove any text selection from the document

      this.removeTextSelection(); // Prevent further text selection while dragging

      this.documentListeners.add(EventName.SelectionChange, this.removeTextSelection);
      onStart(initialCoordinates);
    }
  }

  handleMove(event) {
    var _getEventCoordinates2;

    const {
      activated,
      initialCoordinates,
      props
    } = this;
    const {
      onMove,
      options: {
        activationConstraint
      }
    } = props;

    if (!initialCoordinates) {
      return;
    }

    const coordinates = (_getEventCoordinates2 = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(event)) != null ? _getEventCoordinates2 : defaultCoordinates;
    const delta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(initialCoordinates, coordinates); // Constraint validation

    if (!activated && activationConstraint) {
      if (isDistanceConstraint(activationConstraint)) {
        if (activationConstraint.tolerance != null && hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }

        if (hasExceededDistance(delta, activationConstraint.distance)) {
          return this.handleStart();
        }
      }

      if (isDelayConstraint(activationConstraint)) {
        if (hasExceededDistance(delta, activationConstraint.tolerance)) {
          return this.handleCancel();
        }
      }

      return;
    }

    if (event.cancelable) {
      event.preventDefault();
    }

    onMove(coordinates);
  }

  handleEnd() {
    const {
      onEnd
    } = this.props;
    this.detach();
    onEnd();
  }

  handleCancel() {
    const {
      onCancel
    } = this.props;
    this.detach();
    onCancel();
  }

  handleKeydown(event) {
    if (event.code === KeyboardCode.Esc) {
      this.handleCancel();
    }
  }

  removeTextSelection() {
    var _this$document$getSel;

    (_this$document$getSel = this.document.getSelection()) == null ? void 0 : _this$document$getSel.removeAllRanges();
  }

}

const events = {
  move: {
    name: 'pointermove'
  },
  end: {
    name: 'pointerup'
  }
};
class PointerSensor extends AbstractPointerSensor {
  constructor(props) {
    const {
      event
    } = props; // Pointer events stop firing if the target is unmounted while dragging
    // Therefore we attach listeners to the owner document instead

    const listenerTarget = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(event.target);
    super(props, events, listenerTarget);
  }

}
PointerSensor.activators = [{
  eventName: 'onPointerDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (!event.isPrimary || event.button !== 0) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$1 = {
  move: {
    name: 'mousemove'
  },
  end: {
    name: 'mouseup'
  }
};
var MouseButton;

(function (MouseButton) {
  MouseButton[MouseButton["RightClick"] = 2] = "RightClick";
})(MouseButton || (MouseButton = {}));

class MouseSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$1, (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(props.event.target));
  }

}
MouseSensor.activators = [{
  eventName: 'onMouseDown',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;

    if (event.button === MouseButton.RightClick) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

const events$2 = {
  move: {
    name: 'touchmove'
  },
  end: {
    name: 'touchend'
  }
};
class TouchSensor extends AbstractPointerSensor {
  constructor(props) {
    super(props, events$2);
  }

  static setup() {
    // Adding a non-capture and non-passive `touchmove` listener in order
    // to force `event.preventDefault()` calls to work in dynamically added
    // touchmove event handlers. This is required for iOS Safari.
    window.addEventListener(events$2.move.name, noop, {
      capture: false,
      passive: false
    });
    return function teardown() {
      window.removeEventListener(events$2.move.name, noop);
    }; // We create a new handler because the teardown function of another sensor
    // could remove our event listener if we use a referentially equal listener.

    function noop() {}
  }

}
TouchSensor.activators = [{
  eventName: 'onTouchStart',
  handler: (_ref, _ref2) => {
    let {
      nativeEvent: event
    } = _ref;
    let {
      onActivation
    } = _ref2;
    const {
      touches
    } = event;

    if (touches.length > 1) {
      return false;
    }

    onActivation == null ? void 0 : onActivation({
      event
    });
    return true;
  }
}];

var AutoScrollActivator;

(function (AutoScrollActivator) {
  AutoScrollActivator[AutoScrollActivator["Pointer"] = 0] = "Pointer";
  AutoScrollActivator[AutoScrollActivator["DraggableRect"] = 1] = "DraggableRect";
})(AutoScrollActivator || (AutoScrollActivator = {}));

var TraversalOrder;

(function (TraversalOrder) {
  TraversalOrder[TraversalOrder["TreeOrder"] = 0] = "TreeOrder";
  TraversalOrder[TraversalOrder["ReversedTreeOrder"] = 1] = "ReversedTreeOrder";
})(TraversalOrder || (TraversalOrder = {}));

function useAutoScroller(_ref) {
  let {
    acceleration,
    activator = AutoScrollActivator.Pointer,
    canScroll,
    draggingRect,
    enabled,
    interval = 5,
    order = TraversalOrder.TreeOrder,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects,
    delta,
    threshold
  } = _ref;
  const scrollIntent = useScrollIntent({
    delta,
    disabled: !enabled
  });
  const [setAutoScrollInterval, clearAutoScrollInterval] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useInterval)();
  const scrollSpeed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  const scrollDirection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  const rect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    switch (activator) {
      case AutoScrollActivator.Pointer:
        return pointerCoordinates ? {
          top: pointerCoordinates.y,
          bottom: pointerCoordinates.y,
          left: pointerCoordinates.x,
          right: pointerCoordinates.x
        } : null;

      case AutoScrollActivator.DraggableRect:
        return draggingRect;
    }
  }, [activator, draggingRect, pointerCoordinates]);
  const scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const autoScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    const scrollLeft = scrollSpeed.current.x * scrollDirection.current.x;
    const scrollTop = scrollSpeed.current.y * scrollDirection.current.y;
    scrollContainer.scrollBy(scrollLeft, scrollTop);
  }, []);
  const sortedScrollableAncestors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => order === TraversalOrder.TreeOrder ? [...scrollableAncestors].reverse() : scrollableAncestors, [order, scrollableAncestors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!enabled || !scrollableAncestors.length || !rect) {
      clearAutoScrollInterval();
      return;
    }

    for (const scrollContainer of sortedScrollableAncestors) {
      if ((canScroll == null ? void 0 : canScroll(scrollContainer)) === false) {
        continue;
      }

      const index = scrollableAncestors.indexOf(scrollContainer);
      const scrollContainerRect = scrollableAncestorRects[index];

      if (!scrollContainerRect) {
        continue;
      }

      const {
        direction,
        speed
      } = getScrollDirectionAndSpeed(scrollContainer, scrollContainerRect, rect, acceleration, threshold);

      for (const axis of ['x', 'y']) {
        if (!scrollIntent[axis][direction[axis]]) {
          speed[axis] = 0;
          direction[axis] = 0;
        }
      }

      if (speed.x > 0 || speed.y > 0) {
        clearAutoScrollInterval();
        scrollContainerRef.current = scrollContainer;
        setAutoScrollInterval(autoScroll, interval);
        scrollSpeed.current = speed;
        scrollDirection.current = direction;
        return;
      }
    }

    scrollSpeed.current = {
      x: 0,
      y: 0
    };
    scrollDirection.current = {
      x: 0,
      y: 0
    };
    clearAutoScrollInterval();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [acceleration, autoScroll, canScroll, clearAutoScrollInterval, enabled, interval, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(rect), // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(scrollIntent), setAutoScrollInterval, scrollableAncestors, sortedScrollableAncestors, scrollableAncestorRects, // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold)]);
}
const defaultScrollIntent = {
  x: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  },
  y: {
    [Direction.Backward]: false,
    [Direction.Forward]: false
  }
};

function useScrollIntent(_ref2) {
  let {
    delta,
    disabled
  } = _ref2;
  const previousDelta = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(delta);
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousIntent => {
    if (disabled || !previousDelta || !previousIntent) {
      // Reset scroll intent tracking when auto-scrolling is disabled
      return defaultScrollIntent;
    }

    const direction = {
      x: Math.sign(delta.x - previousDelta.x),
      y: Math.sign(delta.y - previousDelta.y)
    }; // Keep track of the user intent to scroll in each direction for both axis

    return {
      x: {
        [Direction.Backward]: previousIntent.x[Direction.Backward] || direction.x === -1,
        [Direction.Forward]: previousIntent.x[Direction.Forward] || direction.x === 1
      },
      y: {
        [Direction.Backward]: previousIntent.y[Direction.Backward] || direction.y === -1,
        [Direction.Forward]: previousIntent.y[Direction.Forward] || direction.y === 1
      }
    };
  }, [disabled, delta, previousDelta]);
}

function useCachedNode(draggableNodes, id) {
  const draggableNode = id !== null ? draggableNodes.get(id) : undefined;
  const node = draggableNode ? draggableNode.node.current : null;
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(cachedNode => {
    var _ref;

    if (id === null) {
      return null;
    } // In some cases, the draggable node can unmount while dragging
    // This is the case for virtualized lists. In those situations,
    // we fall back to the last known value for that node.


    return (_ref = node != null ? node : cachedNode) != null ? _ref : null;
  }, [node, id]);
}

function useCombineActivators(sensors, getSyntheticHandler) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => sensors.reduce((accumulator, sensor) => {
    const {
      sensor: Sensor
    } = sensor;
    const sensorActivators = Sensor.activators.map(activator => ({
      eventName: activator.eventName,
      handler: getSyntheticHandler(activator.handler, sensor)
    }));
    return [...accumulator, ...sensorActivators];
  }, []), [sensors, getSyntheticHandler]);
}

var MeasuringStrategy;

(function (MeasuringStrategy) {
  MeasuringStrategy[MeasuringStrategy["Always"] = 0] = "Always";
  MeasuringStrategy[MeasuringStrategy["BeforeDragging"] = 1] = "BeforeDragging";
  MeasuringStrategy[MeasuringStrategy["WhileDragging"] = 2] = "WhileDragging";
})(MeasuringStrategy || (MeasuringStrategy = {}));

var MeasuringFrequency;

(function (MeasuringFrequency) {
  MeasuringFrequency["Optimized"] = "optimized";
})(MeasuringFrequency || (MeasuringFrequency = {}));

const defaultValue = /*#__PURE__*/new Map();
function useDroppableMeasuring(containers, _ref) {
  let {
    dragging,
    dependencies,
    config
  } = _ref;
  const [queue, setQueue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    frequency,
    measure,
    strategy
  } = config;
  const containersRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(containers);
  const disabled = isDisabled();
  const disabledRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(disabled);
  const measureDroppableContainers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (ids) {
    if (ids === void 0) {
      ids = [];
    }

    if (disabledRef.current) {
      return;
    }

    setQueue(value => {
      if (value === null) {
        return ids;
      }

      return value.concat(ids.filter(id => !value.includes(id)));
    });
  }, [disabledRef]);
  const timeoutId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const droppableRects = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (disabled && !dragging) {
      return defaultValue;
    }

    if (!previousValue || previousValue === defaultValue || containersRef.current !== containers || queue != null) {
      const map = new Map();

      for (let container of containers) {
        if (!container) {
          continue;
        }

        if (queue && queue.length > 0 && !queue.includes(container.id) && container.rect.current) {
          // This container does not need to be re-measured
          map.set(container.id, container.rect.current);
          continue;
        }

        const node = container.node.current;
        const rect = node ? new Rect(measure(node), node) : null;
        container.rect.current = rect;

        if (rect) {
          map.set(container.id, rect);
        }
      }

      return map;
    }

    return previousValue;
  }, [containers, queue, dragging, disabled, measure]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    containersRef.current = containers;
  }, [containers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      return;
    }

    measureDroppableContainers();
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [dragging, disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (queue && queue.length > 0) {
      setQueue(null);
    }
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [JSON.stringify(queue)]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled || typeof frequency !== 'number' || timeoutId.current !== null) {
      return;
    }

    timeoutId.current = setTimeout(() => {
      measureDroppableContainers();
      timeoutId.current = null;
    }, frequency);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [frequency, disabled, measureDroppableContainers, ...dependencies]);
  return {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled: queue != null
  };

  function isDisabled() {
    switch (strategy) {
      case MeasuringStrategy.Always:
        return false;

      case MeasuringStrategy.BeforeDragging:
        return dragging;

      default:
        return !dragging;
    }
  }
}

function useInitialValue(value, computeFn) {
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (!value) {
      return null;
    }

    if (previousValue) {
      return previousValue;
    }

    return typeof computeFn === 'function' ? computeFn(value) : value;
  }, [computeFn, value]);
}

function useInitialRect(node, measure) {
  return useInitialValue(node, measure);
}

/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */

function useMutationObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleMutations = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useEvent)(callback);
  const mutationObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.MutationObserver === 'undefined') {
      return undefined;
    }

    const {
      MutationObserver
    } = window;
    return new MutationObserver(handleMutations);
  }, [handleMutations, disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => mutationObserver == null ? void 0 : mutationObserver.disconnect();
  }, [mutationObserver]);
  return mutationObserver;
}

/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */

function useResizeObserver(_ref) {
  let {
    callback,
    disabled
  } = _ref;
  const handleResize = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useEvent)(callback);
  const resizeObserver = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (disabled || typeof window === 'undefined' || typeof window.ResizeObserver === 'undefined') {
      return undefined;
    }

    const {
      ResizeObserver
    } = window;
    return new ResizeObserver(handleResize);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [disabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => resizeObserver == null ? void 0 : resizeObserver.disconnect();
  }, [resizeObserver]);
  return resizeObserver;
}

function defaultMeasure(element) {
  return new Rect(getClientRect(element), element);
}

function useRect(element, measure, fallbackRect) {
  if (measure === void 0) {
    measure = defaultMeasure;
  }

  const [rect, measureRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, null);
  const mutationObserver = useMutationObserver({
    callback(records) {
      if (!element) {
        return;
      }

      for (const record of records) {
        const {
          type,
          target
        } = record;

        if (type === 'childList' && target instanceof HTMLElement && target.contains(element)) {
          measureRect();
          break;
        }
      }
    }

  });
  const resizeObserver = useResizeObserver({
    callback: measureRect
  });
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    measureRect();

    if (element) {
      resizeObserver == null ? void 0 : resizeObserver.observe(element);
      mutationObserver == null ? void 0 : mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      mutationObserver == null ? void 0 : mutationObserver.disconnect();
    }
  }, [element]);
  return rect;

  function reducer(currentRect) {
    if (!element) {
      return null;
    }

    if (element.isConnected === false) {
      var _ref;

      // Fall back to last rect we measured if the element is
      // no longer connected to the DOM.
      return (_ref = currentRect != null ? currentRect : fallbackRect) != null ? _ref : null;
    }

    const newRect = measure(element);

    if (JSON.stringify(currentRect) === JSON.stringify(newRect)) {
      return currentRect;
    }

    return newRect;
  }
}

function useRectDelta(rect) {
  const initialRect = useInitialValue(rect);
  return getRectDelta(rect, initialRect);
}

const defaultValue$1 = [];
function useScrollableAncestors(node) {
  const previousNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(node);
  const ancestors = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLazyMemo)(previousValue => {
    if (!node) {
      return defaultValue$1;
    }

    if (previousValue && previousValue !== defaultValue$1 && node && previousNode.current && node.parentNode === previousNode.current.parentNode) {
      return previousValue;
    }

    return getScrollableAncestors(node);
  }, [node]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousNode.current = node;
  }, [node]);
  return ancestors;
}

function useScrollOffsets(elements) {
  const [scrollCoordinates, setScrollCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const prevElements = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(elements); // To-do: Throttle the handleScroll callback

  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const scrollingElement = getScrollableElement(event.target);

    if (!scrollingElement) {
      return;
    }

    setScrollCoordinates(scrollCoordinates => {
      if (!scrollCoordinates) {
        return null;
      }

      scrollCoordinates.set(scrollingElement, getScrollCoordinates(scrollingElement));
      return new Map(scrollCoordinates);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const previousElements = prevElements.current;

    if (elements !== previousElements) {
      cleanup(previousElements);
      const entries = elements.map(element => {
        const scrollableElement = getScrollableElement(element);

        if (scrollableElement) {
          scrollableElement.addEventListener('scroll', handleScroll, {
            passive: true
          });
          return [scrollableElement, getScrollCoordinates(scrollableElement)];
        }

        return null;
      }).filter(entry => entry != null);
      setScrollCoordinates(entries.length ? new Map(entries) : null);
      prevElements.current = elements;
    }

    return () => {
      cleanup(elements);
      cleanup(previousElements);
    };

    function cleanup(elements) {
      elements.forEach(element => {
        const scrollableElement = getScrollableElement(element);
        scrollableElement == null ? void 0 : scrollableElement.removeEventListener('scroll', handleScroll);
      });
    }
  }, [handleScroll, elements]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (elements.length) {
      return scrollCoordinates ? Array.from(scrollCoordinates.values()).reduce((acc, coordinates) => (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(acc, coordinates), defaultCoordinates) : getScrollOffsets(elements);
    }

    return defaultCoordinates;
  }, [elements, scrollCoordinates]);
}

function useScrollOffsetsDelta(scrollOffsets, dependencies) {
  if (dependencies === void 0) {
    dependencies = [];
  }

  const initialScrollOffsets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    initialScrollOffsets.current = null;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  dependencies);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const hasScrollOffsets = scrollOffsets !== defaultCoordinates;

    if (hasScrollOffsets && !initialScrollOffsets.current) {
      initialScrollOffsets.current = scrollOffsets;
    }

    if (!hasScrollOffsets && initialScrollOffsets.current) {
      initialScrollOffsets.current = null;
    }
  }, [scrollOffsets]);
  return initialScrollOffsets.current ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(scrollOffsets, initialScrollOffsets.current) : defaultCoordinates;
}

function useSensorSetup(sensors) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.canUseDOM) {
      return;
    }

    const teardownFns = sensors.map(_ref => {
      let {
        sensor
      } = _ref;
      return sensor.setup == null ? void 0 : sensor.setup();
    });
    return () => {
      for (const teardown of teardownFns) {
        teardown == null ? void 0 : teardown();
      }
    };
  }, // TO-DO: Sensors length could theoretically change which would not be a valid dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  sensors.map(_ref2 => {
    let {
      sensor
    } = _ref2;
    return sensor;
  }));
}

function useSyntheticListeners(listeners, id) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return listeners.reduce((acc, _ref) => {
      let {
        eventName,
        handler
      } = _ref;

      acc[eventName] = event => {
        handler(event, id);
      };

      return acc;
    }, {});
  }, [listeners, id]);
}

function useWindowRect(element) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => element ? getWindowClientRect(element) : null, [element]);
}

const defaultValue$2 = [];
function useRects(elements, measure) {
  if (measure === void 0) {
    measure = getClientRect;
  }

  const [firstElement] = elements;
  const windowRect = useWindowRect(firstElement ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(firstElement) : null);
  const [rects, measureRects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, defaultValue$2);
  const resizeObserver = useResizeObserver({
    callback: measureRects
  });

  if (elements.length > 0 && rects === defaultValue$2) {
    measureRects();
  }

  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (elements.length) {
      elements.forEach(element => resizeObserver == null ? void 0 : resizeObserver.observe(element));
    } else {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      measureRects();
    }
  }, [elements]);
  return rects;

  function reducer() {
    if (!elements.length) {
      return defaultValue$2;
    }

    return elements.map(element => isDocumentScrollingElement(element) ? windowRect : new Rect(measure(element), element));
  }
}

function getMeasurableNode(node) {
  if (!node) {
    return null;
  }

  if (node.children.length > 1) {
    return node;
  }

  const firstChild = node.children[0];
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(firstChild) ? firstChild : node;
}

function useDragOverlayMeasuring(_ref) {
  let {
    measure
  } = _ref;
  const [rect, setRect] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(entries => {
    for (const {
      target
    } of entries) {
      if ((0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isHTMLElement)(target)) {
        setRect(rect => {
          const newRect = measure(target);
          return rect ? { ...rect,
            width: newRect.width,
            height: newRect.height
          } : newRect;
        });
        break;
      }
    }
  }, [measure]);
  const resizeObserver = useResizeObserver({
    callback: handleResize
  });
  const handleNodeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    const node = getMeasurableNode(element);
    resizeObserver == null ? void 0 : resizeObserver.disconnect();

    if (node) {
      resizeObserver == null ? void 0 : resizeObserver.observe(node);
    }

    setRect(node ? measure(node) : null);
  }, [measure, resizeObserver]);
  const [nodeRef, setRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)(handleNodeChange);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    nodeRef,
    rect,
    setRef
  }), [rect, nodeRef, setRef]);
}

const defaultSensors = [{
  sensor: PointerSensor,
  options: {}
}, {
  sensor: KeyboardSensor,
  options: {}
}];
const defaultData = {
  current: {}
};
const defaultMeasuringConfiguration = {
  draggable: {
    measure: getTransformAgnosticClientRect
  },
  droppable: {
    measure: getTransformAgnosticClientRect,
    strategy: MeasuringStrategy.WhileDragging,
    frequency: MeasuringFrequency.Optimized
  },
  dragOverlay: {
    measure: getClientRect
  }
};

class DroppableContainersMap extends Map {
  get(id) {
    var _super$get;

    return id != null ? (_super$get = super.get(id)) != null ? _super$get : undefined : undefined;
  }

  toArray() {
    return Array.from(this.values());
  }

  getEnabled() {
    return this.toArray().filter(_ref => {
      let {
        disabled
      } = _ref;
      return !disabled;
    });
  }

  getNodeFor(id) {
    var _this$get$node$curren, _this$get;

    return (_this$get$node$curren = (_this$get = this.get(id)) == null ? void 0 : _this$get.node.current) != null ? _this$get$node$curren : undefined;
  }

}

const defaultPublicContext = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /*#__PURE__*/new Map(),
  droppableRects: /*#__PURE__*/new Map(),
  droppableContainers: /*#__PURE__*/new DroppableContainersMap(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: noop
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: defaultMeasuringConfiguration,
  measureDroppableContainers: noop,
  windowRect: null,
  measuringScheduled: false
};
const defaultInternalContext = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ''
  },
  dispatch: noop,
  draggableNodes: /*#__PURE__*/new Map(),
  over: null,
  measureDroppableContainers: noop
};
const InternalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultInternalContext);
const PublicContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultPublicContext);

function getInitialState() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new DroppableContainersMap()
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case Action.DragStart:
      return { ...state,
        draggable: { ...state.draggable,
          initialCoordinates: action.initialCoordinates,
          active: action.active
        }
      };

    case Action.DragMove:
      if (!state.draggable.active) {
        return state;
      }

      return { ...state,
        draggable: { ...state.draggable,
          translate: {
            x: action.coordinates.x - state.draggable.initialCoordinates.x,
            y: action.coordinates.y - state.draggable.initialCoordinates.y
          }
        }
      };

    case Action.DragEnd:
    case Action.DragCancel:
      return { ...state,
        draggable: { ...state.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };

    case Action.RegisterDroppable:
      {
        const {
          element
        } = action;
        const {
          id
        } = element;
        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, element);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.SetDroppableDisabled:
      {
        const {
          id,
          key,
          disabled
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.set(id, { ...element,
          disabled
        });
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    case Action.UnregisterDroppable:
      {
        const {
          id,
          key
        } = action;
        const element = state.droppable.containers.get(id);

        if (!element || key !== element.key) {
          return state;
        }

        const containers = new DroppableContainersMap(state.droppable.containers);
        containers.delete(id);
        return { ...state,
          droppable: { ...state.droppable,
            containers
          }
        };
      }

    default:
      {
        return state;
      }
  }
}

function RestoreFocus(_ref) {
  let {
    disabled
  } = _ref;
  const {
    active,
    activatorEvent,
    draggableNodes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InternalContext);
  const previousActivatorEvent = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(activatorEvent);
  const previousActiveId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(active == null ? void 0 : active.id); // Restore keyboard focus on the activator node

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled) {
      return;
    }

    if (!activatorEvent && previousActivatorEvent && previousActiveId != null) {
      if (!(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(previousActivatorEvent)) {
        return;
      }

      if (document.activeElement === previousActivatorEvent.target) {
        // No need to restore focus
        return;
      }

      const draggableNode = draggableNodes.get(previousActiveId);

      if (!draggableNode) {
        return;
      }

      const {
        activatorNode,
        node
      } = draggableNode;

      if (!activatorNode.current && !node.current) {
        return;
      }

      requestAnimationFrame(() => {
        for (const element of [activatorNode.current, node.current]) {
          if (!element) {
            continue;
          }

          const focusableNode = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.findFirstFocusableNode)(element);

          if (focusableNode) {
            focusableNode.focus();
            break;
          }
        }
      });
    }
  }, [activatorEvent, disabled, draggableNodes, previousActiveId, previousActivatorEvent]);
  return null;
}

function applyModifiers(modifiers, _ref) {
  let {
    transform,
    ...args
  } = _ref;
  return modifiers != null && modifiers.length ? modifiers.reduce((accumulator, modifier) => {
    return modifier({
      transform: accumulator,
      ...args
    });
  }, transform) : transform;
}

function useMeasuringConfiguration(config) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    draggable: { ...defaultMeasuringConfiguration.draggable,
      ...(config == null ? void 0 : config.draggable)
    },
    droppable: { ...defaultMeasuringConfiguration.droppable,
      ...(config == null ? void 0 : config.droppable)
    },
    dragOverlay: { ...defaultMeasuringConfiguration.dragOverlay,
      ...(config == null ? void 0 : config.dragOverlay)
    }
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [config == null ? void 0 : config.draggable, config == null ? void 0 : config.droppable, config == null ? void 0 : config.dragOverlay]);
}

function useLayoutShiftScrollCompensation(_ref) {
  let {
    activeNode,
    measure,
    initialRect,
    config = true
  } = _ref;
  const initialized = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const {
    x,
    y
  } = typeof config === 'boolean' ? {
    x: config,
    y: config
  } : config;
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    const disabled = !x && !y;

    if (disabled || !activeNode) {
      initialized.current = false;
      return;
    }

    if (initialized.current || !initialRect) {
      // Return early if layout shift scroll compensation was already attempted
      // or if there is no initialRect to compare to.
      return;
    } // Get the most up to date node ref for the active draggable


    const node = activeNode == null ? void 0 : activeNode.node.current;

    if (!node || node.isConnected === false) {
      // Return early if there is no attached node ref or if the node is
      // disconnected from the document.
      return;
    }

    const rect = measure(node);
    const rectDelta = getRectDelta(rect, initialRect);

    if (!x) {
      rectDelta.x = 0;
    }

    if (!y) {
      rectDelta.y = 0;
    } // Only perform layout shift scroll compensation once


    initialized.current = true;

    if (Math.abs(rectDelta.x) > 0 || Math.abs(rectDelta.y) > 0) {
      const firstScrollableAncestor = getFirstScrollableAncestor(node);

      if (firstScrollableAncestor) {
        firstScrollableAncestor.scrollBy({
          top: rectDelta.y,
          left: rectDelta.x
        });
      }
    }
  }, [activeNode, x, y, initialRect, measure]);
}

const ActiveDraggableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({ ...defaultCoordinates,
  scaleX: 1,
  scaleY: 1
});
var Status;

(function (Status) {
  Status[Status["Uninitialized"] = 0] = "Uninitialized";
  Status[Status["Initializing"] = 1] = "Initializing";
  Status[Status["Initialized"] = 2] = "Initialized";
})(Status || (Status = {}));

const DndContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function DndContext(_ref) {
  var _sensorContext$curren, _dragOverlay$nodeRef$, _dragOverlay$rect, _over$rect;

  let {
    id,
    accessibility,
    autoScroll = true,
    children,
    sensors = defaultSensors,
    collisionDetection = rectIntersection,
    measuring,
    modifiers,
    ...props
  } = _ref;
  const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, undefined, getInitialState);
  const [state, dispatch] = store;
  const [dispatchMonitorEvent, registerMonitorListener] = useDndMonitorProvider();
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Status.Uninitialized);
  const isInitialized = status === Status.Initialized;
  const {
    draggable: {
      active: activeId,
      nodes: draggableNodes,
      translate
    },
    droppable: {
      containers: droppableContainers
    }
  } = state;
  const node = activeId ? draggableNodes.get(activeId) : null;
  const activeRects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    initial: null,
    translated: null
  });
  const active = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _node$data;

    return activeId != null ? {
      id: activeId,
      // It's possible for the active node to unmount while dragging
      data: (_node$data = node == null ? void 0 : node.data) != null ? _node$data : defaultData,
      rect: activeRects
    } : null;
  }, [activeId, node]);
  const activeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [activeSensor, setActiveSensor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activatorEvent, setActivatorEvent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const latestProps = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(props, Object.values(props));
  const draggableDescribedById = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)("DndDescribedBy", id);
  const enabledDroppableContainers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => droppableContainers.getEnabled(), [droppableContainers]);
  const measuringConfiguration = useMeasuringConfiguration(measuring);
  const {
    droppableRects,
    measureDroppableContainers,
    measuringScheduled
  } = useDroppableMeasuring(enabledDroppableContainers, {
    dragging: isInitialized,
    dependencies: [translate.x, translate.y],
    config: measuringConfiguration.droppable
  });
  const activeNode = useCachedNode(draggableNodes, activeId);
  const activationCoordinates = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => activatorEvent ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getEventCoordinates)(activatorEvent) : null, [activatorEvent]);
  const autoScrollOptions = getAutoScrollerOptions();
  const initialActiveNodeRect = useInitialRect(activeNode, measuringConfiguration.draggable.measure);
  useLayoutShiftScrollCompensation({
    activeNode: activeId ? draggableNodes.get(activeId) : null,
    config: autoScrollOptions.layoutShiftCompensation,
    initialRect: initialActiveNodeRect,
    measure: measuringConfiguration.draggable.measure
  });
  const activeNodeRect = useRect(activeNode, measuringConfiguration.draggable.measure, initialActiveNodeRect);
  const containerNodeRect = useRect(activeNode ? activeNode.parentElement : null);
  const sensorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    activatorEvent: null,
    active: null,
    activeNode,
    collisionRect: null,
    collisions: null,
    droppableRects,
    draggableNodes,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  });
  const overNode = droppableContainers.getNodeFor((_sensorContext$curren = sensorContext.current.over) == null ? void 0 : _sensorContext$curren.id);
  const dragOverlay = useDragOverlayMeasuring({
    measure: measuringConfiguration.dragOverlay.measure
  }); // Use the rect of the drag overlay if it is mounted

  const draggingNode = (_dragOverlay$nodeRef$ = dragOverlay.nodeRef.current) != null ? _dragOverlay$nodeRef$ : activeNode;
  const draggingNodeRect = isInitialized ? (_dragOverlay$rect = dragOverlay.rect) != null ? _dragOverlay$rect : activeNodeRect : null;
  const usesDragOverlay = Boolean(dragOverlay.nodeRef.current && dragOverlay.rect); // The delta between the previous and new position of the draggable node
  // is only relevant when there is no drag overlay

  const nodeRectDelta = useRectDelta(usesDragOverlay ? null : activeNodeRect); // Get the window rect of the dragging node

  const windowRect = useWindowRect(draggingNode ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(draggingNode) : null); // Get scrollable ancestors of the dragging node

  const scrollableAncestors = useScrollableAncestors(isInitialized ? overNode != null ? overNode : activeNode : null);
  const scrollableAncestorRects = useRects(scrollableAncestors); // Apply modifiers

  const modifiedTranslate = applyModifiers(modifiers, {
    transform: {
      x: translate.x - nodeRectDelta.x,
      y: translate.y - nodeRectDelta.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect,
    over: sensorContext.current.over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  });
  const pointerCoordinates = activationCoordinates ? (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(activationCoordinates, translate) : null;
  const scrollOffsets = useScrollOffsets(scrollableAncestors); // Represents the scroll delta since dragging was initiated

  const scrollAdjustment = useScrollOffsetsDelta(scrollOffsets); // Represents the scroll delta since the last time the active node rect was measured

  const activeNodeScrollDelta = useScrollOffsetsDelta(scrollOffsets, [activeNodeRect]);
  const scrollAdjustedTranslate = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(modifiedTranslate, scrollAdjustment);
  const collisionRect = draggingNodeRect ? getAdjustedRect(draggingNodeRect, modifiedTranslate) : null;
  const collisions = active && collisionRect ? collisionDetection({
    active,
    collisionRect,
    droppableRects,
    droppableContainers: enabledDroppableContainers,
    pointerCoordinates
  }) : null;
  const overId = getFirstCollision(collisions, 'id');
  const [over, setOver] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // When there is no drag overlay used, we need to account for the
  // window scroll delta

  const appliedTranslate = usesDragOverlay ? modifiedTranslate : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.add)(modifiedTranslate, activeNodeScrollDelta);
  const transform = adjustScale(appliedTranslate, (_over$rect = over == null ? void 0 : over.rect) != null ? _over$rect : null, activeNodeRect);
  const instantiateSensor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, _ref2) => {
    let {
      sensor: Sensor,
      options
    } = _ref2;

    if (activeRef.current == null) {
      return;
    }

    const activeNode = draggableNodes.get(activeRef.current);

    if (!activeNode) {
      return;
    }

    const activatorEvent = event.nativeEvent;
    const sensorInstance = new Sensor({
      active: activeRef.current,
      activeNode,
      event: activatorEvent,
      options,
      // Sensors need to be instantiated with refs for arguments that change over time
      // otherwise they are frozen in time with the stale arguments
      context: sensorContext,

      onStart(initialCoordinates) {
        const id = activeRef.current;

        if (id == null) {
          return;
        }

        const draggableNode = draggableNodes.get(id);

        if (!draggableNode) {
          return;
        }

        const {
          onDragStart
        } = latestProps.current;
        const event = {
          active: {
            id,
            data: draggableNode.data,
            rect: activeRects
          }
        };
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
          onDragStart == null ? void 0 : onDragStart(event);
          setStatus(Status.Initializing);
          dispatch({
            type: Action.DragStart,
            initialCoordinates,
            active: id
          });
          dispatchMonitorEvent({
            type: 'onDragStart',
            event
          });
        });
      },

      onMove(coordinates) {
        dispatch({
          type: Action.DragMove,
          coordinates
        });
      },

      onEnd: createHandler(Action.DragEnd),
      onCancel: createHandler(Action.DragCancel)
    });
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      setActiveSensor(sensorInstance);
      setActivatorEvent(event.nativeEvent);
    });

    function createHandler(type) {
      return async function handler() {
        const {
          active,
          collisions,
          over,
          scrollAdjustedTranslate
        } = sensorContext.current;
        let event = null;

        if (active && scrollAdjustedTranslate) {
          const {
            cancelDrop
          } = latestProps.current;
          event = {
            activatorEvent,
            active: active,
            collisions,
            delta: scrollAdjustedTranslate,
            over
          };

          if (type === Action.DragEnd && typeof cancelDrop === 'function') {
            const shouldCancel = await Promise.resolve(cancelDrop(event));

            if (shouldCancel) {
              type = Action.DragCancel;
            }
          }
        }

        activeRef.current = null;
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
          dispatch({
            type
          });
          setStatus(Status.Uninitialized);
          setOver(null);
          setActiveSensor(null);
          setActivatorEvent(null);
          const eventName = type === Action.DragEnd ? 'onDragEnd' : 'onDragCancel';

          if (event) {
            const handler = latestProps.current[eventName];
            handler == null ? void 0 : handler(event);
            dispatchMonitorEvent({
              type: eventName,
              event
            });
          }
        });
      };
    }
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes]);
  const bindActivatorToSensorInstantiator = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((handler, sensor) => {
    return (event, active) => {
      const nativeEvent = event.nativeEvent;
      const activeDraggableNode = draggableNodes.get(active);

      if ( // Another sensor is already instantiating
      activeRef.current !== null || // No active draggable
      !activeDraggableNode || // Event has already been captured
      nativeEvent.dndKit || nativeEvent.defaultPrevented) {
        return;
      }

      const activationContext = {
        active: activeDraggableNode
      };
      const shouldActivate = handler(event, sensor.options, activationContext);

      if (shouldActivate === true) {
        nativeEvent.dndKit = {
          capturedBy: sensor.sensor
        };
        activeRef.current = active;
        instantiateSensor(event, sensor);
      }
    };
  }, [draggableNodes, instantiateSensor]);
  const activators = useCombineActivators(sensors, bindActivatorToSensorInstantiator);
  useSensorSetup(sensors);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (activeNodeRect && status === Status.Initializing) {
      setStatus(Status.Initialized);
    }
  }, [activeNodeRect, status]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      onDragMove
    } = latestProps.current;
    const {
      active,
      activatorEvent,
      collisions,
      over
    } = sensorContext.current;

    if (!active || !activatorEvent) {
      return;
    }

    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      onDragMove == null ? void 0 : onDragMove(event);
      dispatchMonitorEvent({
        type: 'onDragMove',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [scrollAdjustedTranslate.x, scrollAdjustedTranslate.y]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      active,
      activatorEvent,
      collisions,
      droppableContainers,
      scrollAdjustedTranslate
    } = sensorContext.current;

    if (!active || activeRef.current == null || !activatorEvent || !scrollAdjustedTranslate) {
      return;
    }

    const {
      onDragOver
    } = latestProps.current;
    const overContainer = droppableContainers.get(overId);
    const over = overContainer && overContainer.rect.current ? {
      id: overContainer.id,
      rect: overContainer.rect.current,
      data: overContainer.data,
      disabled: overContainer.disabled
    } : null;
    const event = {
      active,
      activatorEvent,
      collisions,
      delta: {
        x: scrollAdjustedTranslate.x,
        y: scrollAdjustedTranslate.y
      },
      over
    };
    (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(() => {
      setOver(over);
      onDragOver == null ? void 0 : onDragOver(event);
      dispatchMonitorEvent({
        type: 'onDragOver',
        event
      });
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [overId]);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    sensorContext.current = {
      activatorEvent,
      active,
      activeNode,
      collisionRect,
      collisions,
      droppableRects,
      draggableNodes,
      draggingNode,
      draggingNodeRect,
      droppableContainers,
      over,
      scrollableAncestors,
      scrollAdjustedTranslate
    };
    activeRects.current = {
      initial: draggingNodeRect,
      translated: collisionRect
    };
  }, [active, activeNode, collisions, collisionRect, draggableNodes, draggingNode, draggingNodeRect, droppableRects, droppableContainers, over, scrollableAncestors, scrollAdjustedTranslate]);
  useAutoScroller({ ...autoScrollOptions,
    delta: translate,
    draggingRect: collisionRect,
    pointerCoordinates,
    scrollableAncestors,
    scrollableAncestorRects
  });
  const publicContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const context = {
      active,
      activeNode,
      activeNodeRect,
      activatorEvent,
      collisions,
      containerNodeRect,
      dragOverlay,
      draggableNodes,
      droppableContainers,
      droppableRects,
      over,
      measureDroppableContainers,
      scrollableAncestors,
      scrollableAncestorRects,
      measuringConfiguration,
      measuringScheduled,
      windowRect
    };
    return context;
  }, [active, activeNode, activeNodeRect, activatorEvent, collisions, containerNodeRect, dragOverlay, draggableNodes, droppableContainers, droppableRects, over, measureDroppableContainers, scrollableAncestors, scrollableAncestorRects, measuringConfiguration, measuringScheduled, windowRect]);
  const internalContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const context = {
      activatorEvent,
      activators,
      active,
      activeNodeRect,
      ariaDescribedById: {
        draggable: draggableDescribedById
      },
      dispatch,
      draggableNodes,
      over,
      measureDroppableContainers
    };
    return context;
  }, [activatorEvent, activators, active, activeNodeRect, dispatch, draggableDescribedById, draggableNodes, over, measureDroppableContainers]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DndMonitorContext.Provider, {
    value: registerMonitorListener
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InternalContext.Provider, {
    value: internalContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PublicContext.Provider, {
    value: publicContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveDraggableContext.Provider, {
    value: transform
  }, children)), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestoreFocus, {
    disabled: (accessibility == null ? void 0 : accessibility.restoreFocus) === false
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Accessibility, { ...accessibility,
    hiddenTextDescribedById: draggableDescribedById
  }));

  function getAutoScrollerOptions() {
    const activeSensorDisablesAutoscroll = (activeSensor == null ? void 0 : activeSensor.autoScrollEnabled) === false;
    const autoScrollGloballyDisabled = typeof autoScroll === 'object' ? autoScroll.enabled === false : autoScroll === false;
    const enabled = isInitialized && !activeSensorDisablesAutoscroll && !autoScrollGloballyDisabled;

    if (typeof autoScroll === 'object') {
      return { ...autoScroll,
        enabled
      };
    }

    return {
      enabled
    };
  }
});

const NullContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const defaultRole = 'button';
const ID_PREFIX = 'Droppable';
function useDraggable(_ref) {
  let {
    id,
    data,
    disabled = false,
    attributes
  } = _ref;
  const key = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX);
  const {
    activators,
    activatorEvent,
    active,
    activeNodeRect,
    ariaDescribedById,
    draggableNodes,
    over
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InternalContext);
  const {
    role = defaultRole,
    roleDescription = 'draggable',
    tabIndex = 0
  } = attributes != null ? attributes : {};
  const isDragging = (active == null ? void 0 : active.id) === id;
  const transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(isDragging ? ActiveDraggableContext : NullContext);
  const [node, setNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const [activatorNode, setActivatorNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)();
  const listeners = useSyntheticListeners(activators, id);
  const dataRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(data);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    draggableNodes.set(id, {
      id,
      key,
      node,
      activatorNode,
      data: dataRef
    });
    return () => {
      const node = draggableNodes.get(id);

      if (node && node.key === key) {
        draggableNodes.delete(id);
      }
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [draggableNodes, id]);
  const memoizedAttributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    role,
    tabIndex,
    'aria-disabled': disabled,
    'aria-pressed': isDragging && role === defaultRole ? true : undefined,
    'aria-roledescription': roleDescription,
    'aria-describedby': ariaDescribedById.draggable
  }), [disabled, role, tabIndex, isDragging, roleDescription, ariaDescribedById.draggable]);
  return {
    active,
    activatorEvent,
    activeNodeRect,
    attributes: memoizedAttributes,
    isDragging,
    listeners: disabled ? undefined : listeners,
    node,
    over,
    setNodeRef,
    setActivatorNodeRef,
    transform
  };
}

function useDndContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PublicContext);
}

const ID_PREFIX$1 = 'Droppable';
const defaultResizeObserverConfig = {
  timeout: 25
};
function useDroppable(_ref) {
  let {
    data,
    disabled = false,
    id,
    resizeObserverConfig
  } = _ref;
  const key = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX$1);
  const {
    active,
    dispatch,
    over,
    measureDroppableContainers
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(InternalContext);
  const previous = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    disabled
  });
  const resizeObserverConnected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const rect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const callbackId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    disabled: resizeObserverDisabled,
    updateMeasurementsFor,
    timeout: resizeObserverTimeout
  } = { ...defaultResizeObserverConfig,
    ...resizeObserverConfig
  };
  const ids = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(updateMeasurementsFor != null ? updateMeasurementsFor : id);
  const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!resizeObserverConnected.current) {
      // ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
      // assuming the element is rendered and displayed.
      resizeObserverConnected.current = true;
      return;
    }

    if (callbackId.current != null) {
      clearTimeout(callbackId.current);
    }

    callbackId.current = setTimeout(() => {
      measureDroppableContainers(Array.isArray(ids.current) ? ids.current : [ids.current]);
      callbackId.current = null;
    }, resizeObserverTimeout);
  }, //eslint-disable-next-line react-hooks/exhaustive-deps
  [resizeObserverTimeout]);
  const resizeObserver = useResizeObserver({
    callback: handleResize,
    disabled: resizeObserverDisabled || !active
  });
  const handleNodeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newElement, previousElement) => {
    if (!resizeObserver) {
      return;
    }

    if (previousElement) {
      resizeObserver.unobserve(previousElement);
      resizeObserverConnected.current = false;
    }

    if (newElement) {
      resizeObserver.observe(newElement);
    }
  }, [resizeObserver]);
  const [nodeRef, setNodeRef] = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useNodeRef)(handleNodeChange);
  const dataRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useLatestValue)(data);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!resizeObserver || !nodeRef.current) {
      return;
    }

    resizeObserver.disconnect();
    resizeObserverConnected.current = false;
    resizeObserver.observe(nodeRef.current);
  }, [nodeRef, resizeObserver]);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    dispatch({
      type: Action.RegisterDroppable,
      element: {
        id,
        key,
        disabled,
        node: nodeRef,
        rect,
        data: dataRef
      }
    });
    return () => dispatch({
      type: Action.UnregisterDroppable,
      key,
      id
    });
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (disabled !== previous.current.disabled) {
      dispatch({
        type: Action.SetDroppableDisabled,
        id,
        key,
        disabled
      });
      previous.current.disabled = disabled;
    }
  }, [id, key, disabled, dispatch]);
  return {
    active,
    rect,
    isOver: (over == null ? void 0 : over.id) === id,
    node: nodeRef,
    over,
    setNodeRef
  };
}

function AnimationManager(_ref) {
  let {
    animation,
    children
  } = _ref;
  const [clonedChildren, setClonedChildren] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [element, setElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousChildren = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(children);

  if (!children && !clonedChildren && previousChildren) {
    setClonedChildren(previousChildren);
  }

  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!element) {
      return;
    }

    const key = clonedChildren == null ? void 0 : clonedChildren.key;
    const id = clonedChildren == null ? void 0 : clonedChildren.props.id;

    if (key == null || id == null) {
      setClonedChildren(null);
      return;
    }

    Promise.resolve(animation(id, element)).then(() => {
      setClonedChildren(null);
    });
  }, [animation, clonedChildren, element]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children, clonedChildren ? (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(clonedChildren, {
    ref: setElement
  }) : null);
}

const defaultTransform = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function NullifiedContextProvider(_ref) {
  let {
    children
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InternalContext.Provider, {
    value: defaultInternalContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveDraggableContext.Provider, {
    value: defaultTransform
  }, children));
}

const baseStyles = {
  position: 'fixed',
  touchAction: 'none'
};

const defaultTransition = activatorEvent => {
  const isKeyboardActivator = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(activatorEvent);
  return isKeyboardActivator ? 'transform 250ms ease' : undefined;
};

const PositionedOverlay = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
    as,
    activatorEvent,
    adjustScale,
    children,
    className,
    rect,
    style,
    transform,
    transition = defaultTransition
  } = _ref;

  if (!rect) {
    return null;
  }

  const scaleAdjustedTransform = adjustScale ? transform : { ...transform,
    scaleX: 1,
    scaleY: 1
  };
  const styles = { ...baseStyles,
    width: rect.width,
    height: rect.height,
    top: rect.top,
    left: rect.left,
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(scaleAdjustedTransform),
    transformOrigin: adjustScale && activatorEvent ? getRelativeTransformOrigin(activatorEvent, rect) : undefined,
    transition: typeof transition === 'function' ? transition(activatorEvent) : transition,
    ...style
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(as, {
    className,
    style: styles,
    ref
  }, children);
});

const defaultDropAnimationSideEffects = options => _ref => {
  let {
    active,
    dragOverlay
  } = _ref;
  const originalStyles = {};
  const {
    styles,
    className
  } = options;

  if (styles != null && styles.active) {
    for (const [key, value] of Object.entries(styles.active)) {
      if (value === undefined) {
        continue;
      }

      originalStyles[key] = active.node.style.getPropertyValue(key);
      active.node.style.setProperty(key, value);
    }
  }

  if (styles != null && styles.dragOverlay) {
    for (const [key, value] of Object.entries(styles.dragOverlay)) {
      if (value === undefined) {
        continue;
      }

      dragOverlay.node.style.setProperty(key, value);
    }
  }

  if (className != null && className.active) {
    active.node.classList.add(className.active);
  }

  if (className != null && className.dragOverlay) {
    dragOverlay.node.classList.add(className.dragOverlay);
  }

  return function cleanup() {
    for (const [key, value] of Object.entries(originalStyles)) {
      active.node.style.setProperty(key, value);
    }

    if (className != null && className.active) {
      active.node.classList.remove(className.active);
    }
  };
};

const defaultKeyframeResolver = _ref2 => {
  let {
    transform: {
      initial,
      final
    }
  } = _ref2;
  return [{
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(initial)
  }, {
    transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transform.toString(final)
  }];
};

const defaultDropAnimationConfiguration = {
  duration: 250,
  easing: 'ease',
  keyframes: defaultKeyframeResolver,
  sideEffects: /*#__PURE__*/defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0'
      }
    }
  })
};
function useDropAnimation(_ref3) {
  let {
    config,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  } = _ref3;
  return (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useEvent)((id, node) => {
    if (config === null) {
      return;
    }

    const activeDraggable = draggableNodes.get(id);

    if (!activeDraggable) {
      return;
    }

    const activeNode = activeDraggable.node.current;

    if (!activeNode) {
      return;
    }

    const measurableNode = getMeasurableNode(node);

    if (!measurableNode) {
      return;
    }

    const {
      transform
    } = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(node).getComputedStyle(node);
    const parsedTransform = parseTransform(transform);

    if (!parsedTransform) {
      return;
    }

    const animation = typeof config === 'function' ? config : createDefaultDropAnimation(config);
    scrollIntoViewIfNeeded(activeNode, measuringConfiguration.draggable.measure);
    return animation({
      active: {
        id,
        data: activeDraggable.data,
        node: activeNode,
        rect: measuringConfiguration.draggable.measure(activeNode)
      },
      draggableNodes,
      dragOverlay: {
        node,
        rect: measuringConfiguration.dragOverlay.measure(measurableNode)
      },
      droppableContainers,
      measuringConfiguration,
      transform: parsedTransform
    });
  });
}

function createDefaultDropAnimation(options) {
  const {
    duration,
    easing,
    sideEffects,
    keyframes
  } = { ...defaultDropAnimationConfiguration,
    ...options
  };
  return _ref4 => {
    let {
      active,
      dragOverlay,
      transform,
      ...rest
    } = _ref4;

    if (!duration) {
      // Do not animate if animation duration is zero.
      return;
    }

    const delta = {
      x: dragOverlay.rect.left - active.rect.left,
      y: dragOverlay.rect.top - active.rect.top
    };
    const scale = {
      scaleX: transform.scaleX !== 1 ? active.rect.width * transform.scaleX / dragOverlay.rect.width : 1,
      scaleY: transform.scaleY !== 1 ? active.rect.height * transform.scaleY / dragOverlay.rect.height : 1
    };
    const finalTransform = {
      x: transform.x - delta.x,
      y: transform.y - delta.y,
      ...scale
    };
    const animationKeyframes = keyframes({ ...rest,
      active,
      dragOverlay,
      transform: {
        initial: transform,
        final: finalTransform
      }
    });
    const [firstKeyframe] = animationKeyframes;
    const lastKeyframe = animationKeyframes[animationKeyframes.length - 1];

    if (JSON.stringify(firstKeyframe) === JSON.stringify(lastKeyframe)) {
      // The start and end keyframes are the same, infer that there is no animation needed.
      return;
    }

    const cleanup = sideEffects == null ? void 0 : sideEffects({
      active,
      dragOverlay,
      ...rest
    });
    const animation = dragOverlay.node.animate(animationKeyframes, {
      duration,
      easing,
      fill: 'forwards'
    });
    return new Promise(resolve => {
      animation.onfinish = () => {
        cleanup == null ? void 0 : cleanup();
        resolve();
      };
    });
  };
}

let key = 0;
function useKey(id) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (id == null) {
      return;
    }

    key++;
    return key;
  }, [id]);
}

const DragOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(_ref => {
  let {
    adjustScale = false,
    children,
    dropAnimation: dropAnimationConfig,
    style,
    transition,
    modifiers,
    wrapperElement = 'div',
    className,
    zIndex = 999
  } = _ref;
  const {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggableNodes,
    droppableContainers,
    dragOverlay,
    over,
    measuringConfiguration,
    scrollableAncestors,
    scrollableAncestorRects,
    windowRect
  } = useDndContext();
  const transform = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ActiveDraggableContext);
  const key = useKey(active == null ? void 0 : active.id);
  const modifiedTransform = applyModifiers(modifiers, {
    activatorEvent,
    active,
    activeNodeRect,
    containerNodeRect,
    draggingNodeRect: dragOverlay.rect,
    over,
    overlayNodeRect: dragOverlay.rect,
    scrollableAncestors,
    scrollableAncestorRects,
    transform,
    windowRect
  });
  const initialRect = useInitialValue(activeNodeRect);
  const dropAnimation = useDropAnimation({
    config: dropAnimationConfig,
    draggableNodes,
    droppableContainers,
    measuringConfiguration
  }); // We need to wait for the active node to be measured before connecting the drag overlay ref
  // otherwise collisions can be computed against a mispositioned drag overlay

  const ref = initialRect ? dragOverlay.setRef : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NullifiedContextProvider, null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimationManager, {
    animation: dropAnimation
  }, active && key ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PositionedOverlay, {
    key: key,
    id: active.id,
    ref: ref,
    as: wrapperElement,
    activatorEvent: activatorEvent,
    adjustScale: adjustScale,
    className: className,
    transition: transition,
    rect: initialRect,
    style: {
      zIndex,
      ...style
    },
    transform: modifiedTransform
  }, children) : null));
});


//# sourceMappingURL=core.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@dnd-kit/sortable/dist/sortable.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortableContext: () => (/* binding */ SortableContext),
/* harmony export */   arrayMove: () => (/* binding */ arrayMove),
/* harmony export */   arraySwap: () => (/* binding */ arraySwap),
/* harmony export */   defaultAnimateLayoutChanges: () => (/* binding */ defaultAnimateLayoutChanges),
/* harmony export */   defaultNewIndexGetter: () => (/* binding */ defaultNewIndexGetter),
/* harmony export */   hasSortableData: () => (/* binding */ hasSortableData),
/* harmony export */   horizontalListSortingStrategy: () => (/* binding */ horizontalListSortingStrategy),
/* harmony export */   rectSortingStrategy: () => (/* binding */ rectSortingStrategy),
/* harmony export */   rectSwappingStrategy: () => (/* binding */ rectSwappingStrategy),
/* harmony export */   sortableKeyboardCoordinates: () => (/* binding */ sortableKeyboardCoordinates),
/* harmony export */   useSortable: () => (/* binding */ useSortable),
/* harmony export */   verticalListSortingStrategy: () => (/* binding */ verticalListSortingStrategy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");




/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */
function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}

/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */
function arraySwap(array, from, to) {
  const newArray = array.slice();
  newArray[from] = array[to];
  newArray[to] = array[from];
  return newArray;
}

function getSortedRects(items, rects) {
  return items.reduce((accumulator, id, index) => {
    const rect = rects.get(id);

    if (rect) {
      accumulator[index] = rect;
    }

    return accumulator;
  }, Array(items.length));
}

function isValidIndex(index) {
  return index !== null && index >= 0;
}

function itemsEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function normalizeDisabled(disabled) {
  if (typeof disabled === 'boolean') {
    return {
      draggable: disabled,
      droppable: disabled
    };
  }

  return disabled;
}

// To-do: We should be calculating scale transformation
const defaultScale = {
  scaleX: 1,
  scaleY: 1
};
const horizontalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    rects,
    activeNodeRect: fallbackActiveRect,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  const itemGap = getItemGap(rects, index, activeIndex);

  if (index === activeIndex) {
    const newIndexRect = rects[overIndex];

    if (!newIndexRect) {
      return null;
    }

    return {
      x: activeIndex < overIndex ? newIndexRect.left + newIndexRect.width - (activeNodeRect.left + activeNodeRect.width) : newIndexRect.left - activeNodeRect.left,
      y: 0,
      ...defaultScale
    };
  }

  if (index > activeIndex && index <= overIndex) {
    return {
      x: -activeNodeRect.width - itemGap,
      y: 0,
      ...defaultScale
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: activeNodeRect.width + itemGap,
      y: 0,
      ...defaultScale
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale
  };
};

function getItemGap(rects, index, activeIndex) {
  const currentRect = rects[index];
  const previousRect = rects[index - 1];
  const nextRect = rects[index + 1];

  if (!currentRect || !previousRect && !nextRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.left - (previousRect.left + previousRect.width) : nextRect.left - (currentRect.left + currentRect.width);
  }

  return nextRect ? nextRect.left - (currentRect.left + currentRect.width) : currentRect.left - (previousRect.left + previousRect.width);
}

const rectSortingStrategy = _ref => {
  let {
    rects,
    activeIndex,
    overIndex,
    index
  } = _ref;
  const newRects = arrayMove(rects, overIndex, activeIndex);
  const oldRect = rects[index];
  const newRect = newRects[index];

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

const rectSwappingStrategy = _ref => {
  let {
    activeIndex,
    index,
    rects,
    overIndex
  } = _ref;
  let oldRect;
  let newRect;

  if (index === activeIndex) {
    oldRect = rects[index];
    newRect = rects[overIndex];
  }

  if (index === overIndex) {
    oldRect = rects[index];
    newRect = rects[activeIndex];
  }

  if (!newRect || !oldRect) {
    return null;
  }

  return {
    x: newRect.left - oldRect.left,
    y: newRect.top - oldRect.top,
    scaleX: newRect.width / oldRect.width,
    scaleY: newRect.height / oldRect.height
  };
};

// To-do: We should be calculating scale transformation
const defaultScale$1 = {
  scaleX: 1,
  scaleY: 1
};
const verticalListSortingStrategy = _ref => {
  var _rects$activeIndex;

  let {
    activeIndex,
    activeNodeRect: fallbackActiveRect,
    index,
    rects,
    overIndex
  } = _ref;
  const activeNodeRect = (_rects$activeIndex = rects[activeIndex]) != null ? _rects$activeIndex : fallbackActiveRect;

  if (!activeNodeRect) {
    return null;
  }

  if (index === activeIndex) {
    const overIndexRect = rects[overIndex];

    if (!overIndexRect) {
      return null;
    }

    return {
      x: 0,
      y: activeIndex < overIndex ? overIndexRect.top + overIndexRect.height - (activeNodeRect.top + activeNodeRect.height) : overIndexRect.top - activeNodeRect.top,
      ...defaultScale$1
    };
  }

  const itemGap = getItemGap$1(rects, index, activeIndex);

  if (index > activeIndex && index <= overIndex) {
    return {
      x: 0,
      y: -activeNodeRect.height - itemGap,
      ...defaultScale$1
    };
  }

  if (index < activeIndex && index >= overIndex) {
    return {
      x: 0,
      y: activeNodeRect.height + itemGap,
      ...defaultScale$1
    };
  }

  return {
    x: 0,
    y: 0,
    ...defaultScale$1
  };
};

function getItemGap$1(clientRects, index, activeIndex) {
  const currentRect = clientRects[index];
  const previousRect = clientRects[index - 1];
  const nextRect = clientRects[index + 1];

  if (!currentRect) {
    return 0;
  }

  if (activeIndex < index) {
    return previousRect ? currentRect.top - (previousRect.top + previousRect.height) : nextRect ? nextRect.top - (currentRect.top + currentRect.height) : 0;
  }

  return nextRect ? nextRect.top - (currentRect.top + currentRect.height) : previousRect ? currentRect.top - (previousRect.top + previousRect.height) : 0;
}

const ID_PREFIX = 'Sortable';
const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  activeIndex: -1,
  containerId: ID_PREFIX,
  disableTransforms: false,
  items: [],
  overIndex: -1,
  useDragOverlay: false,
  sortedRects: [],
  strategy: rectSortingStrategy,
  disabled: {
    draggable: false,
    droppable: false
  }
});
function SortableContext(_ref) {
  let {
    children,
    id,
    items: userDefinedItems,
    strategy = rectSortingStrategy,
    disabled: disabledProp = false
  } = _ref;
  const {
    active,
    dragOverlay,
    droppableRects,
    over,
    measureDroppableContainers
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDndContext)();
  const containerId = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)(ID_PREFIX, id);
  const useDragOverlay = Boolean(dragOverlay.rect !== null);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => userDefinedItems.map(item => typeof item === 'object' && 'id' in item ? item.id : item), [userDefinedItems]);
  const isDragging = active != null;
  const activeIndex = active ? items.indexOf(active.id) : -1;
  const overIndex = over ? items.indexOf(over.id) : -1;
  const previousItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(items);
  const itemsHaveChanged = !itemsEqual(items, previousItemsRef.current);
  const disableTransforms = overIndex !== -1 && activeIndex === -1 || itemsHaveChanged;
  const disabled = normalizeDisabled(disabledProp);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (itemsHaveChanged && isDragging) {
      measureDroppableContainers(items);
    }
  }, [itemsHaveChanged, items, isDragging, measureDroppableContainers]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    previousItemsRef.current = items;
  }, [items]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    activeIndex,
    containerId,
    disabled,
    disableTransforms,
    items,
    overIndex,
    useDragOverlay,
    sortedRects: getSortedRects(items, droppableRects),
    strategy
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [activeIndex, containerId, disabled.draggable, disabled.droppable, disableTransforms, items, overIndex, droppableRects, useDragOverlay, strategy]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

const defaultNewIndexGetter = _ref => {
  let {
    id,
    items,
    activeIndex,
    overIndex
  } = _ref;
  return arrayMove(items, activeIndex, overIndex).indexOf(id);
};
const defaultAnimateLayoutChanges = _ref2 => {
  let {
    containerId,
    isSorting,
    wasDragging,
    index,
    items,
    newIndex,
    previousItems,
    previousContainerId,
    transition
  } = _ref2;

  if (!transition || !wasDragging) {
    return false;
  }

  if (previousItems !== items && index === newIndex) {
    return false;
  }

  if (isSorting) {
    return true;
  }

  return newIndex !== index && containerId === previousContainerId;
};
const defaultTransition = {
  duration: 200,
  easing: 'ease'
};
const transitionProperty = 'transform';
const disabledTransition = /*#__PURE__*/_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transition.toString({
  property: transitionProperty,
  duration: 0,
  easing: 'linear'
});
const defaultAttributes = {
  roleDescription: 'sortable'
};

/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */

function useDerivedTransform(_ref) {
  let {
    disabled,
    index,
    node,
    rect
  } = _ref;
  const [derivedTransform, setDerivedtransform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const previousIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(index);
  (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useIsomorphicLayoutEffect)(() => {
    if (!disabled && index !== previousIndex.current && node.current) {
      const initial = rect.current;

      if (initial) {
        const current = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getClientRect)(node.current, {
          ignoreTransform: true
        });
        const delta = {
          x: initial.left - current.left,
          y: initial.top - current.top,
          scaleX: initial.width / current.width,
          scaleY: initial.height / current.height
        };

        if (delta.x || delta.y) {
          setDerivedtransform(delta);
        }
      }
    }

    if (index !== previousIndex.current) {
      previousIndex.current = index;
    }
  }, [disabled, index, node, rect]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (derivedTransform) {
      setDerivedtransform(null);
    }
  }, [derivedTransform]);
  return derivedTransform;
}

function useSortable(_ref) {
  let {
    animateLayoutChanges = defaultAnimateLayoutChanges,
    attributes: userDefinedAttributes,
    disabled: localDisabled,
    data: customData,
    getNewIndex = defaultNewIndexGetter,
    id,
    strategy: localStrategy,
    resizeObserverConfig,
    transition = defaultTransition
  } = _ref;
  const {
    items,
    containerId,
    activeIndex,
    disabled: globalDisabled,
    disableTransforms,
    sortedRects,
    overIndex,
    useDragOverlay,
    strategy: globalStrategy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const disabled = normalizeLocalDisabled(localDisabled, globalDisabled);
  const index = items.indexOf(id);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sortable: {
      containerId,
      index,
      items
    },
    ...customData
  }), [containerId, customData, index, items]);
  const itemsAfterCurrentSortable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => items.slice(items.indexOf(id)), [items, id]);
  const {
    rect,
    node,
    isOver,
    setNodeRef: setDroppableNodeRef
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDroppable)({
    id,
    data,
    disabled: disabled.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: itemsAfterCurrentSortable,
      ...resizeObserverConfig
    }
  });
  const {
    active,
    activatorEvent,
    activeNodeRect,
    attributes,
    setNodeRef: setDraggableNodeRef,
    listeners,
    isDragging,
    over,
    setActivatorNodeRef,
    transform
  } = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.useDraggable)({
    id,
    data,
    attributes: { ...defaultAttributes,
      ...userDefinedAttributes
    },
    disabled: disabled.draggable
  });
  const setNodeRef = (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.useCombinedRefs)(setDroppableNodeRef, setDraggableNodeRef);
  const isSorting = Boolean(active);
  const displaceItem = isSorting && !disableTransforms && isValidIndex(activeIndex) && isValidIndex(overIndex);
  const shouldDisplaceDragSource = !useDragOverlay && isDragging;
  const dragSourceDisplacement = shouldDisplaceDragSource && displaceItem ? transform : null;
  const strategy = localStrategy != null ? localStrategy : globalStrategy;
  const finalTransform = displaceItem ? dragSourceDisplacement != null ? dragSourceDisplacement : strategy({
    rects: sortedRects,
    activeNodeRect,
    activeIndex,
    overIndex,
    index
  }) : null;
  const newIndex = isValidIndex(activeIndex) && isValidIndex(overIndex) ? getNewIndex({
    id,
    items,
    activeIndex,
    overIndex
  }) : index;
  const activeId = active == null ? void 0 : active.id;
  const previous = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    activeId,
    items,
    newIndex,
    containerId
  });
  const itemsHaveChanged = items !== previous.current.items;
  const shouldAnimateLayoutChanges = animateLayoutChanges({
    active,
    containerId,
    isDragging,
    isSorting,
    id,
    index,
    items,
    newIndex: previous.current.newIndex,
    previousItems: previous.current.items,
    previousContainerId: previous.current.containerId,
    transition,
    wasDragging: previous.current.activeId != null
  });
  const derivedTransform = useDerivedTransform({
    disabled: !shouldAnimateLayoutChanges,
    index,
    node,
    rect
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSorting && previous.current.newIndex !== newIndex) {
      previous.current.newIndex = newIndex;
    }

    if (containerId !== previous.current.containerId) {
      previous.current.containerId = containerId;
    }

    if (items !== previous.current.items) {
      previous.current.items = items;
    }
  }, [isSorting, newIndex, containerId, items]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeId === previous.current.activeId) {
      return;
    }

    if (activeId && !previous.current.activeId) {
      previous.current.activeId = activeId;
      return;
    }

    const timeoutId = setTimeout(() => {
      previous.current.activeId = activeId;
    }, 50);
    return () => clearTimeout(timeoutId);
  }, [activeId]);
  return {
    active,
    activeIndex,
    attributes,
    data,
    rect,
    index,
    newIndex,
    items,
    isOver,
    isSorting,
    isDragging,
    listeners,
    node,
    overIndex,
    over,
    setNodeRef,
    setActivatorNodeRef,
    setDroppableNodeRef,
    setDraggableNodeRef,
    transform: derivedTransform != null ? derivedTransform : finalTransform,
    transition: getTransition()
  };

  function getTransition() {
    if ( // Temporarily disable transitions for a single frame to set up derived transforms
    derivedTransform || // Or to prevent items jumping to back to their "new" position when items change
    itemsHaveChanged && previous.current.newIndex === index) {
      return disabledTransition;
    }

    if (shouldDisplaceDragSource && !(0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.isKeyboardEvent)(activatorEvent) || !transition) {
      return undefined;
    }

    if (isSorting || shouldAnimateLayoutChanges) {
      return _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.CSS.Transition.toString({ ...transition,
        property: transitionProperty
      });
    }

    return undefined;
  }
}

function normalizeLocalDisabled(localDisabled, globalDisabled) {
  var _localDisabled$dragga, _localDisabled$droppa;

  if (typeof localDisabled === 'boolean') {
    return {
      draggable: localDisabled,
      // Backwards compatibility
      droppable: false
    };
  }

  return {
    draggable: (_localDisabled$dragga = localDisabled == null ? void 0 : localDisabled.draggable) != null ? _localDisabled$dragga : globalDisabled.draggable,
    droppable: (_localDisabled$droppa = localDisabled == null ? void 0 : localDisabled.droppable) != null ? _localDisabled$droppa : globalDisabled.droppable
  };
}

function hasSortableData(entry) {
  if (!entry) {
    return false;
  }

  const data = entry.data.current;

  if (data && 'sortable' in data && typeof data.sortable === 'object' && 'containerId' in data.sortable && 'items' in data.sortable && 'index' in data.sortable) {
    return true;
  }

  return false;
}

const directions = [_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Down, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Right, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Up, _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Left];
const sortableKeyboardCoordinates = (event, _ref) => {
  let {
    context: {
      active,
      collisionRect,
      droppableRects,
      droppableContainers,
      over,
      scrollableAncestors
    }
  } = _ref;

  if (directions.includes(event.code)) {
    event.preventDefault();

    if (!active || !collisionRect) {
      return;
    }

    const filteredContainers = [];
    droppableContainers.getEnabled().forEach(entry => {
      if (!entry || entry != null && entry.disabled) {
        return;
      }

      const rect = droppableRects.get(entry.id);

      if (!rect) {
        return;
      }

      switch (event.code) {
        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Up:
          if (collisionRect.top > rect.top) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Left:
          if (collisionRect.left > rect.left) {
            filteredContainers.push(entry);
          }

          break;

        case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.KeyboardCode.Right:
          if (collisionRect.left < rect.left) {
            filteredContainers.push(entry);
          }

          break;
      }
    });
    const collisions = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.closestCorners)({
      active,
      collisionRect: collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    });
    let closestId = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getFirstCollision)(collisions, 'id');

    if (closestId === (over == null ? void 0 : over.id) && collisions.length > 1) {
      closestId = collisions[1].id;
    }

    if (closestId != null) {
      const activeDroppable = droppableContainers.get(active.id);
      const newDroppable = droppableContainers.get(closestId);
      const newRect = newDroppable ? droppableRects.get(newDroppable.id) : null;
      const newNode = newDroppable == null ? void 0 : newDroppable.node.current;

      if (newNode && newRect && activeDroppable && newDroppable) {
        const newScrollAncestors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_1__.getScrollableAncestors)(newNode);
        const hasDifferentScrollAncestors = newScrollAncestors.some((element, index) => scrollableAncestors[index] !== element);
        const hasSameContainer = isSameContainer(activeDroppable, newDroppable);
        const isAfterActive = isAfter(activeDroppable, newDroppable);
        const offset = hasDifferentScrollAncestors || !hasSameContainer ? {
          x: 0,
          y: 0
        } : {
          x: isAfterActive ? collisionRect.width - newRect.width : 0,
          y: isAfterActive ? collisionRect.height - newRect.height : 0
        };
        const rectCoordinates = {
          x: newRect.left,
          y: newRect.top
        };
        const newCoordinates = offset.x && offset.y ? rectCoordinates : (0,_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_2__.subtract)(rectCoordinates, offset);
        return newCoordinates;
      }
    }
  }

  return undefined;
};

function isSameContainer(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  return a.data.current.sortable.containerId === b.data.current.sortable.containerId;
}

function isAfter(a, b) {
  if (!hasSortableData(a) || !hasSortableData(b)) {
    return false;
  }

  if (!isSameContainer(a, b)) {
    return false;
  }

  return a.data.current.sortable.index < b.data.current.sortable.index;
}


//# sourceMappingURL=sortable.esm.js.map


/***/ }),

/***/ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@dnd-kit/utilities/dist/utilities.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSS: () => (/* binding */ CSS),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   canUseDOM: () => (/* binding */ canUseDOM),
/* harmony export */   findFirstFocusableNode: () => (/* binding */ findFirstFocusableNode),
/* harmony export */   getEventCoordinates: () => (/* binding */ getEventCoordinates),
/* harmony export */   getOwnerDocument: () => (/* binding */ getOwnerDocument),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   hasViewportRelativeCoordinates: () => (/* binding */ hasViewportRelativeCoordinates),
/* harmony export */   isDocument: () => (/* binding */ isDocument),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isKeyboardEvent: () => (/* binding */ isKeyboardEvent),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement),
/* harmony export */   isTouchEvent: () => (/* binding */ isTouchEvent),
/* harmony export */   isWindow: () => (/* binding */ isWindow),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   useCombinedRefs: () => (/* binding */ useCombinedRefs),
/* harmony export */   useEvent: () => (/* binding */ useEvent),
/* harmony export */   useInterval: () => (/* binding */ useInterval),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect),
/* harmony export */   useLatestValue: () => (/* binding */ useLatestValue),
/* harmony export */   useLazyMemo: () => (/* binding */ useLazyMemo),
/* harmony export */   useNodeRef: () => (/* binding */ useNodeRef),
/* harmony export */   usePrevious: () => (/* binding */ usePrevious),
/* harmony export */   useUniqueId: () => (/* binding */ useUniqueId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useCombinedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => node => {
    refs.forEach(ref => ref(node));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  refs);
}

// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const canUseDOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === '[object Window]' || // In Electron context the Window object serializes to [object global]
  elementString === '[object global]';
}

function isNode(node) {
  return 'nodeType' in node;
}

function getWindow(target) {
  var _target$ownerDocument, _target$ownerDocument2;

  if (!target) {
    return window;
  }

  if (isWindow(target)) {
    return target;
  }

  if (!isNode(target)) {
    return window;
  }

  return (_target$ownerDocument = (_target$ownerDocument2 = target.ownerDocument) == null ? void 0 : _target$ownerDocument2.defaultView) != null ? _target$ownerDocument : window;
}

function isDocument(node) {
  const {
    Document
  } = getWindow(node);
  return node instanceof Document;
}

function isHTMLElement(node) {
  if (isWindow(node)) {
    return false;
  }

  return node instanceof getWindow(node).HTMLElement;
}

function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}

function getOwnerDocument(target) {
  if (!target) {
    return document;
  }

  if (isWindow(target)) {
    return target.document;
  }

  if (!isNode(target)) {
    return document;
  }

  if (isDocument(target)) {
    return target;
  }

  if (isHTMLElement(target) || isSVGElement(target)) {
    return target.ownerDocument;
  }

  return document;
}

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */

const useIsomorphicLayoutEffect = canUseDOM ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEvent(handler) {
  const handlerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return handlerRef.current == null ? void 0 : handlerRef.current(...args);
  }, []);
}

function useInterval() {
  const intervalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((listener, duration) => {
    intervalRef.current = setInterval(listener, duration);
  }, []);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);
  return [set, clear];
}

function useLatestValue(value, dependencies) {
  if (dependencies === void 0) {
    dependencies = [value];
  }

  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  useIsomorphicLayoutEffect(() => {
    if (valueRef.current !== value) {
      valueRef.current = value;
    }
  }, dependencies);
  return valueRef;
}

function useLazyMemo(callback, dependencies) {
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const newValue = callback(valueRef.current);
    valueRef.current = newValue;
    return newValue;
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [...dependencies]);
}

function useNodeRef(onChange) {
  const onChangeHandler = useEvent(onChange);
  const node = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const setNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (element !== node.current) {
      onChangeHandler == null ? void 0 : onChangeHandler(element, node.current);
    }

    node.current = element;
  }, //eslint-disable-next-line
  []);
  return [node, setNodeRef];
}

function usePrevious(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

let ids = {};
function useUniqueId(prefix, value) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (value) {
      return value;
    }

    const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
    ids[prefix] = id;
    return prefix + "-" + id;
  }, [prefix, value]);
}

function createAdjustmentFn(modifier) {
  return function (object) {
    for (var _len = arguments.length, adjustments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      adjustments[_key - 1] = arguments[_key];
    }

    return adjustments.reduce((accumulator, adjustment) => {
      const entries = Object.entries(adjustment);

      for (const [key, valueAdjustment] of entries) {
        const value = accumulator[key];

        if (value != null) {
          accumulator[key] = value + modifier * valueAdjustment;
        }
      }

      return accumulator;
    }, { ...object
    });
  };
}

const add = /*#__PURE__*/createAdjustmentFn(1);
const subtract = /*#__PURE__*/createAdjustmentFn(-1);

function hasViewportRelativeCoordinates(event) {
  return 'clientX' in event && 'clientY' in event;
}

function isKeyboardEvent(event) {
  if (!event) {
    return false;
  }

  const {
    KeyboardEvent
  } = getWindow(event.target);
  return KeyboardEvent && event instanceof KeyboardEvent;
}

function isTouchEvent(event) {
  if (!event) {
    return false;
  }

  const {
    TouchEvent
  } = getWindow(event.target);
  return TouchEvent && event instanceof TouchEvent;
}

/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */

function getEventCoordinates(event) {
  if (isTouchEvent(event)) {
    if (event.touches && event.touches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.touches[0];
      return {
        x,
        y
      };
    } else if (event.changedTouches && event.changedTouches.length) {
      const {
        clientX: x,
        clientY: y
      } = event.changedTouches[0];
      return {
        x,
        y
      };
    }
  }

  if (hasViewportRelativeCoordinates(event)) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }

  return null;
}

const CSS = /*#__PURE__*/Object.freeze({
  Translate: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        x,
        y
      } = transform;
      return "translate3d(" + (x ? Math.round(x) : 0) + "px, " + (y ? Math.round(y) : 0) + "px, 0)";
    }

  },
  Scale: {
    toString(transform) {
      if (!transform) {
        return;
      }

      const {
        scaleX,
        scaleY
      } = transform;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    }

  },
  Transform: {
    toString(transform) {
      if (!transform) {
        return;
      }

      return [CSS.Translate.toString(transform), CSS.Scale.toString(transform)].join(' ');
    }

  },
  Transition: {
    toString(_ref) {
      let {
        property,
        duration,
        easing
      } = _ref;
      return property + " " + duration + "ms " + easing;
    }

  }
});

const SELECTOR = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
function findFirstFocusableNode(element) {
  if (element.matches(SELECTOR)) {
    return element;
  }

  return element.querySelector(SELECTOR);
}


//# sourceMappingURL=utilities.esm.js.map


/***/ }),

/***/ "./src/Icons.tsx":
/*!***********************!*\
  !*** ./src/Icons.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icons: () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Icons = {
    "icon1": function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.14785 2.89691C7.6647 2.01924 9.00953 2.38581 9.00953 3.40436V6.79334L10.8413 6.79334C11.6343 6.79334 12.1118 7.67227 11.6802 8.33757L8.52694 13.1985C7.97602 14.0477 6.65674 13.6347 6.68849 12.6229L6.78178 9.65013H4.92031C4.14668 9.65013 3.66605 8.80932 4.05863 8.14269L7.14785 2.89691ZM8.00953 3.40436L4.92031 8.65013H6.78178C7.34636 8.65013 7.799 9.1172 7.78129 9.6815L7.688 12.6543L10.8413 7.79334H9.00953C8.45725 7.79334 8.00953 7.34563 8.00953 6.79334V3.40436Z" }))); },
    "icon2": function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 0.51L8 9.67 10.53 7.15 13.06 9.67 13.06 0.51 8 0.51z" }))); }
};


/***/ }),

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
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/AddListDialog */ "./src/dialogs/AddListDialog.ts");
/* harmony import */ var _resources_Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/Icons */ "./src/resources/Icons.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
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
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useAppletNavigate)().navigate;
        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isEditing = _a[0], setIsEditing = _a[1];
        var isLoading = false;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var _b = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useApplet)(), applet = _b.applet, updateAppletName = _b.updateAppletName;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _c = this.props.config || {}, organizationId = _c.organizationId, onItemSelected = _c.onItemSelected, item = _c.item;
        var _d = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useGetOrganization)({ organizationId: organizationId, hookEnabled: true }), organization = _d.organization, isOrganizationLoading = _d.isLoading; // useGetCurrentOrganization();
        var _e = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_6__.getAppletId)() === appletId), isOpen = _e[0], setIsOpen = _e[1];
        var listId = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getListId)();
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDocument)(workspaceId).updateDocument;
        var updateDatabase = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDatabase)(workspaceId).updateDatabase;
        var createTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDocument)(workspaceId, appletId, 'wm_tree').createDocument;
        // const { realm } = useGetRealm({ realmId: workspaceId, enabled: true });
        // const { document: applet, isLoading: isAppletLoading } = useGetDocument({ projectId: workspaceId, databaseId: 'workspace', collectionId: 'applets', documentId: appletId });
        var setCanDrag = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useRealmTree)().setCanDrag;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)('com.celmino.widget.applet-tree')
            .config({
            node: item,
            workspaceId: workspaceId,
            appletId: appletId,
            appletName: item.name,
            iconName: item.iconName,
            iconCategory: item.iconCategory,
            isEditing: isEditing,
            isSelected: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isAppletSettings)(appletId) || (0,_utils__WEBPACK_IMPORTED_MODULE_6__.isAppletOnly)(appletId),
            editingChanged: function (status) { return setIsEditing(status); },
            titleChanged: function (title) {
                updateAppletName(title, function () {
                    _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: item });
                });
                /*    updateDatabase({
                       databaseId: appletId,
                       name: title
                   }, () => {
                       updateDocument({
                           databaseId: 'workspace',
                           collectionId: 'applets',
                           documentId: appletId,
                           data: {
                               name: title
                           }
                       }, () => {
                           updateDocument({
                               databaseId: 'workspace',
                               collectionId: 'ws_tree',
                               documentId: item.$id,
                               data: {
                                   name: title
                               }
                           }, () => {
                               EventBus.Default.fire('applet.added', { treeItem: item })
                           })
                       })
                   }) */
            },
            subNodes: function (TreeNode, level, nodeType, parentId, workspaceId, appletId) {
                return [];
            },
            requestMenu: function (node) {
                return [
                    {
                        title: 'Add to Task List',
                        type: 'Title'
                    },
                    /*  {
                         title: 'Table',
                         icon: Icon(TableIcon).foregroundColor('#7C828D'),
                         //onClick: () => DynoDialog.Show(AddDocumentDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                     },
*/
                    /*  {
                         title: 'Board',
                         icon: Icon(BoardIcon).foregroundColor('#7C828D'),
                         //onClick: () => DynoDialog.Show(AddBoardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                     }, */
                    {
                        title: 'List',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_5__.ListIcon).foregroundColor('#7C828D'),
                        //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                    },
                    {
                        title: 'Sprint',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_5__.SprintIcon).foregroundColor('#7C828D'),
                        onClick: function () { return _celmino_platform__WEBPACK_IMPORTED_MODULE_1__.DynoDialog.Show((0,_dialogs_AddListDialog__WEBPACK_IMPORTED_MODULE_4__.AddListDialog)(workspaceId, appletId, item.$id, "".concat(item.path, "/").concat(item.$id))); }
                    },
                    /*   {
                          title: 'Timeline',
                          icon: Icon(TimelineIcon).foregroundColor('#7C828D'),
                          //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                      },
                      {
                          title: 'Calendar',
                          icon: Icon(CalendarIcon).foregroundColor('#7C828D'),
                          //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                      },
                      {
                          title: 'Report',
                          icon: Icon(ReportIcon).foregroundColor('#7C828D'),
                          //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                      },
                      {
                          title: 'Feed',
                          icon: Icon(FeedIcon).foregroundColor('#7C828D'),
                          //onClick: () => DynoDialog.Show(AddWhiteboardDialog(workspaceId, appletId, item.$id, `${item.path}/${item.$id}`))
                      }, */
                    {
                        type: 'Divider'
                    },
                    {
                        title: 'Applet',
                        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_resources_Icons__WEBPACK_IMPORTED_MODULE_5__.AppletIcon).foregroundColor('#7C828D'),
                        onClick: function () {
                            _celmino_platform__WEBPACK_IMPORTED_MODULE_1__.SelectAppletDialog.Show(workspaceId, appletId).then(function (applet) {
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
                    onClick: function () { return _celmino_platform__WEBPACK_IMPORTED_MODULE_1__.AboutDialog.Show(_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.ListApplet); }
                }
            ]; }
        }));
    };
    return WorkspaceTreeWidgetController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));

//FormBuilder.injectAction('saveSpace', SaveSpaceAction);


/***/ }),

/***/ "./src/dialogs/AddListDialog.ts":
/*!**************************************!*\
  !*** ./src/dialogs/AddListDialog.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddListDialog: () => (/* binding */ AddListDialog),
/* harmony export */   SaveListAction: () => (/* binding */ SaveListAction)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/atlaskit */ "@realmocean/atlaskit");
/* harmony import */ var _realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_4__);
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





var SaveListAction = function (formMeta, action) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.UIViewBuilder)(function () {
    var label = action.label, successAction = action.successAction, successActions = action.successActions;
    var formController = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.useFormController)();
    var dialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.useDialog)();
    var formBuilder = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.useFormBuilder)();
    var navigate = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
    var invalidateResource = null;
    var formMutate = null;
    var createMutate = null;
    var updateMutate = null;
    var isFormMutateExcuting = false;
    var isFormLoading = false;
    var views = [];
    var workspaceId = formMeta.workspaceId, appletId = formMeta.appletId;
    var createWorkspaceTreeItem = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDocument)(workspaceId, 'workspace', 'ws_tree').createDocument;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useCreateDocument)(workspaceId, appletId, 'lists'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var formData = (0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_1__.useFormState)({
        values: true,
        errors: true
    });
    return (0,_realmocean_atlaskit__WEBPACK_IMPORTED_MODULE_1__.LoadingButton)()
        .appearance("primary")
        .label('Save')
        // .type("submit")
        .onClick(function () {
        createDocument({
            data: __assign({}, formData.values)
        }, function (folder) {
            createWorkspaceTreeItem({
                documentId: folder.$id,
                data: {
                    name: formData.values.name,
                    type: 'task-list',
                    parent: formData.values.parent,
                    tree_widget: 'com.celmino.applet.task-list',
                    appletId: appletId,
                    path: (new Date()).getTime().toString(),
                    iconName: 'cu3-icon-sidebarFolder',
                    iconCategory: 'SvgIcons',
                    //viewer:'com.tuvalsoft.viewer.document'
                }
            }, function (item) {
                _tuval_core__WEBPACK_IMPORTED_MODULE_3__.EventBus.Default.fire('applet.added', { treeItem: item });
                dialog.Hide();
            });
        });
    });
}); };
SaveListAction.Id = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_4__.nanoid)();
var AddListDialog = function (workspaceId, appletId, parent, path) { return ({
    "title": 'Create list',
    "workspaceId": workspaceId,
    "appletId": appletId,
    /*   "mutation":"_create_workspace", */
    "actions": [
        {
            "label": "Save",
            "type": SaveListAction.Id,
            /*  "successActions": [{
                 "type": "hide"
             },
             {
                 "type": "navigate",
                 "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
             }
             ] */
            /*  "successActions": [{
             "type": "hide"
         },
         {
             "type": "navigate",
             "url": "/@/com.tuvalsoft.app.procetra/workspace/{{id}}"
         }
         ] */
        }
    ],
    "fieldMap": {
        /*  "path": {
             "name": "path",
             "type": "virtual",
             "value": path
         }, */
        "folder_name": {
            "label": "List Name",
            "type": "text",
            "name": "name"
        }
    }
}); };
_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.FormBuilder.injectAction(SaveListAction);


/***/ }),

/***/ "./src/hooks/useCreateStatus.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCreateStatus.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateStatus: () => (/* binding */ useCreateStatus)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
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


var useCreateStatus = function () {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(realm.$id, applet.$id, 'listStatuses'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createStatus = function (status, onSuccess) {
        if (onSuccess === void 0) { onSuccess = function () { return void 0; }; }
        createDocument({
            data: __assign({}, status)
        }, function (status) { return onSuccess(status); });
    };
    return { createStatus: createStatus, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useCreateView.ts":
/*!************************************!*\
  !*** ./src/hooks/useCreateView.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateView: () => (/* binding */ useCreateView)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
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


var useCreateView = function () {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(realm.$id, applet.$id, 'views'), createDocument = _a.createDocument, isLoading = _a.isLoading;
    var createView = function (view, onSuccess) {
        if (onSuccess === void 0) { onSuccess = function () { return void 0; }; }
        createDocument({
            data: __assign({}, view)
        }, function (view) { return onSuccess(view); });
    };
    return { createView: createView, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useGetTask.ts":
/*!*********************************!*\
  !*** ./src/hooks/useGetTask.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetTask: () => (/* binding */ useGetTask)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);


var useGetTask = function (taskId) {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({
        projectId: realm.$id,
        databaseId: applet.$id,
        collectionId: 'listItems',
        documentId: taskId
    }), document = _a.document, isLoading = _a.isLoading;
    return { task: document, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useGetView.ts":
/*!*********************************!*\
  !*** ./src/hooks/useGetView.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetView: () => (/* binding */ useGetView)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);


var useGetView = function (viewId) {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useGetDocument)({
        projectId: realm.$id,
        databaseId: applet.$id,
        collectionId: 'views',
        documentId: viewId
    }), document = _a.document, isLoading = _a.isLoading;
    return { view: document, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useListTaskType.ts":
/*!**************************************!*\
  !*** ./src/hooks/useListTaskType.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useListTaskType: () => (/* binding */ useListTaskType)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);


var useListTaskType = function () {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(realm.$id, applet.$id, 'taskType', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.orderAsc('orderBy')
    ]), documents = _a.documents, isLoading = _a.isLoading;
    return { taskTypes: documents, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useListViews.ts":
/*!***********************************!*\
  !*** ./src/hooks/useListViews.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useListViews: () => (/* binding */ useListViews)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);


var useListViews = function () {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(realm.$id, applet.$id, 'views', [
    //Query.orderAsc('orderBy')
    ]), documents = _a.documents, isLoading = _a.isLoading;
    return { views: documents, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useTaskStatus.ts":
/*!************************************!*\
  !*** ./src/hooks/useTaskStatus.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTaskStatus: () => (/* binding */ useTaskStatus)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);


var useTaskStatus = function () {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(realm.$id, applet.$id, 'listStatuses', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.orderAsc('orderBy')
    ]), documents = _a.documents, isLoading = _a.isLoading;
    return { statuses: documents, isLoading: isLoading };
};


/***/ }),

/***/ "./src/hooks/useUpdateTaskTypeOrder.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useUpdateTaskTypeOrder.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUpdateTaskTypeOrder: () => (/* binding */ useUpdateTaskTypeOrder)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);


var useUpdateTaskTypeOrder = function () {
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(realm.$id), updateDocument = _a.updateDocument, isLoading = _a.isLoading;
    var updateTaskTypeOrder = function (taskTypeId, orderNo, onSuccess) {
        if (onSuccess === void 0) { onSuccess = function () { return void 0; }; }
        updateDocument({
            databaseId: applet.$id,
            collectionId: 'taskType',
            documentId: taskTypeId,
            data: {
                orderBy: orderNo
            }
        });
    };
    return { updateTaskTypeOrder: updateTaskTypeOrder, isLoading: isLoading };
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
/* harmony export */   FeedIcon: () => (/* binding */ FeedIcon),
/* harmony export */   FilesIcon: () => (/* binding */ FilesIcon),
/* harmony export */   GridIcon: () => (/* binding */ GridIcon),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   MeetingsIcon: () => (/* binding */ MeetingsIcon),
/* harmony export */   MembersIcon: () => (/* binding */ MembersIcon),
/* harmony export */   OverviewIcon: () => (/* binding */ OverviewIcon),
/* harmony export */   ReportIcon: () => (/* binding */ ReportIcon),
/* harmony export */   SettingsIcon: () => (/* binding */ SettingsIcon),
/* harmony export */   SprintIcon: () => (/* binding */ SprintIcon),
/* harmony export */   StatusesIcon: () => (/* binding */ StatusesIcon),
/* harmony export */   TableIcon: () => (/* binding */ TableIcon),
/* harmony export */   TabsIcon: () => (/* binding */ TabsIcon),
/* harmony export */   TaskIcon: () => (/* binding */ TaskIcon),
/* harmony export */   TaskTypesIcon: () => (/* binding */ TaskTypesIcon),
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
var TaskTypesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 20 20" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", { id: "b298f203-72b6-4abc-a65a-625e63fce0e7", fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "1.5" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", { cx: "12.03", cy: "14.95", r: "2.76" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.82 3.33L18.73 8.37 12.9 8.37 15.82 3.33zM5.53 2.4L7 5.38 10.28 5.86 7.91 8.17 8.47 11.44 5.53 9.9 2.59 11.44 3.16 8.17.79 5.86 4.07 5.38 5.53 2.4z" }))))); };
var SprintIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "16", height: "16", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M13.554 13.923H16.623M15.264 15.282L16.623 13.923V13.905L15.282 12.564M4.22101 11.817C3.48186 10.8484 3.09198 9.65838 3.11472 8.44021 3.13746 7.22204 3.57149 6.04737 4.34627 5.10707 5.12105 4.16677 6.19105 3.51612 7.38239 3.26085 8.57373 3.00558 9.81639 3.16069 10.9084 3.70099 12.0004 4.24128 12.8777 5.13499 13.3975 6.2369 13.9174 7.3388 14.0494 8.58413 13.7719 9.7705 13.4945 10.9569 12.8241 12.0146 11.8695 12.7717 10.915 13.5289 9.73239 13.9409 8.51401 13.941H1.37701", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))); };


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
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/ActionPanel */ "./src/views/ActionPanel.tsx");
/* harmony import */ var _views_ViewHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/ViewHeader */ "./src/views/ViewHeader.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_5__);
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
        var _b = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)(), applet = _b.applet, updateAppletName = _b.updateAppletName;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ReactView)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogStack, null, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTop })((0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_2__.ActionPanel)(), (0,_views_ViewHeader__WEBPACK_IMPORTED_MODULE_3__.ViewHeader)(applet.name, function (name) {
            updateAppletName(name, function () {
                _tuval_core__WEBPACK_IMPORTED_MODULE_5__.EventBus.Default.fire('applet.added', { treeItem: applet });
            });
        }), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIRouteOutlet)().width('100%').height('100%'))
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
/* harmony import */ var _lists_view_viewId_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists/view-[viewId]/+controller */ "./src/routes/lists/view-[viewId]/+controller.ts");
/* harmony import */ var _lists_controller_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists/+controller.ts */ "./src/routes/lists/+controller.ts.tsx");
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/+controller */ "./src/routes/settings/+controller.ts");
/* harmony import */ var _settings_features_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/features/+controller */ "./src/routes/settings/features/+controller.ts");
/* harmony import */ var _settings_general_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/general/+controller */ "./src/routes/settings/general/+controller.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+controller */ "./src/routes/+controller.tsx");
/* harmony import */ var _settings_members_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/members/+controller */ "./src/routes/settings/members/+controller.ts");
/* harmony import */ var _settings_tabs_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/tabs/+controller */ "./src/routes/settings/tabs/+controller.ts");
/* harmony import */ var _settings_statuses_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/statuses/+controller */ "./src/routes/settings/statuses/+controller.ts");
/* harmony import */ var _settings_taskTypes_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/taskTypes/+controller */ "./src/routes/settings/taskTypes/+controller.ts");
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
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoutes)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/', _controller__WEBPACK_IMPORTED_MODULE_6__.AppletController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('', _lists_controller_ts__WEBPACK_IMPORTED_MODULE_2__.ListController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)(':viewId', _lists_view_viewId_controller__WEBPACK_IMPORTED_MODULE_1__.ViewController)), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('/settings', _settings_controller__WEBPACK_IMPORTED_MODULE_3__.SettingsController).children((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('features', _settings_features_controller__WEBPACK_IMPORTED_MODULE_4__.FeatureSettingsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('general', _settings_general_controller__WEBPACK_IMPORTED_MODULE_5__.GeneralSettingsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('members', _settings_members_controller__WEBPACK_IMPORTED_MODULE_7__.MembersController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('tabs', _settings_tabs_controller__WEBPACK_IMPORTED_MODULE_8__.TabsController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('statuses', _settings_statuses_controller__WEBPACK_IMPORTED_MODULE_9__.StatusesController), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIRoute)('taskTypes', _settings_taskTypes_controller__WEBPACK_IMPORTED_MODULE_10__.TaskTypesController))))
                .background('var(--primary-background-color)');
        }));
    };
    RouteController.prototype.LoadView = function () {
        return this.routeView();
    };
    return RouteController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/lists/+controller.ts.tsx":
/*!*********************************************!*\
  !*** ./src/routes/lists/+controller.ts.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListController: () => (/* binding */ ListController),
/* harmony export */   _ListController: () => (/* binding */ _ListController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useListViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useListViews */ "./src/hooks/useListViews.ts");
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


function replaceNonMatchingCharacters(originalText) {
    var replacementTable = {
        'ı': 'i',
        ' ': '_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });
    return replacedText;
}
var _ListController = /** @class */ (function (_super) {
    __extends(_ListController, _super);
    function _ListController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _ListController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('sdf'));
    };
    return _ListController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));

var ListController = /** @class */ (function (_super) {
    __extends(ListController, _super);
    function ListController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListController.prototype.LoadView = function () {
        var _a = (0,_hooks_useListViews__WEBPACK_IMPORTED_MODULE_1__.useListViews)(), views = _a.views, isLoading = _a.isLoading;
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UINavigate)("".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.urlFriendly)(views[0].name), "-").concat(views[0].$id)));
    };
    return ListController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/routes/lists/view-[viewId]/+controller.ts":
/*!*******************************************************!*\
  !*** ./src/routes/lists/view-[viewId]/+controller.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewController: () => (/* binding */ ViewController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_ListView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ListView */ "./src/routes/lists/view-[viewId]/views/ListView.tsx");
/* harmony import */ var _hooks_useGetView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useGetView */ "./src/hooks/useGetView.ts");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_KanbanView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/KanbanView */ "./src/routes/lists/view-[viewId]/views/KanbanView.tsx");
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





var types = {
    'list': _views_ListView__WEBPACK_IMPORTED_MODULE_1__.ListView,
    'kanban': _views_KanbanView__WEBPACK_IMPORTED_MODULE_4__.KanbanView
};
var ViewController = /** @class */ (function (_super) {
    __extends(ViewController, _super);
    function ViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewController.prototype.LoadView = function () {
        var _a;
        var viewId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useParams)().viewId;
        var _b = (0,_hooks_useGetView__WEBPACK_IMPORTED_MODULE_2__.useGetView)(viewId), view = _b.view, isLoading = _b.isLoading;
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
            _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.function(types[view.type]) ?
                (_a = types[view.type]) === null || _a === void 0 ? void 0 : _a.call(types) :
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('View type not found'));
    };
    return ViewController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIFormController));



/***/ }),

/***/ "./src/routes/lists/view-[viewId]/views/KanbanView.tsx":
/*!*************************************************************!*\
  !*** ./src/routes/lists/view-[viewId]/views/KanbanView.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KanbanView: () => (/* binding */ KanbanView)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_ViewsTabMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../views/ViewsTabMenu */ "./src/routes/lists/views/ViewsTabMenu.ts");
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





var KanbanController = /** @class */ (function (_super) {
    __extends(KanbanController, _super);
    function KanbanController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KanbanController.prototype.LoadView = function () {
        var viewId = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useParams)().viewId;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var workspaceId = realm.$id;
        var appletId = applet.$id;
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'listStatuses', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.orderAsc('orderBy')
        ]), groups = _a.documents, isStatusesLoading = _a.isLoading;
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'listItems', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.limit(1000)
        ]), items = _b.documents, isItemsLoading = _b.isLoading;
        var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'fields', [
            _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('collectionId', 'listItems')
        ]), attributes = _c.documents, isLoading = _c.isLoading;
        var createTask = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'listItems').createDocument;
        var updateTask = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialogStack)().openDialog;
        return ((isItemsLoading || isStatusesLoading) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_views_ViewsTabMenu__WEBPACK_IMPORTED_MODULE_3__.ViewsTab)(viewId), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)('com.celmino.widget.board')
                .config({
                workspaceId: workspaceId,
                listId: appletId,
                attributes: attributes,
                groupBy: 'status',
                groups: groups,
                onItemSave: function (item) {
                    return (new Promise(function (resolve) {
                        createTask({
                            data: item
                        }, function () { return resolve(true); });
                    }));
                },
                onItemClick: function (item) {
                },
                items: items,
                /*   stages: [{
                      $id: 'AAA',
                      name: 'Todo',
                      color: '#FF0000:#00FF00'
                  }] */
            })));
    };
    return KanbanController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIController));
var KanbanView = function () { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_4___default().createElement(KanbanController, null)); };


/***/ }),

/***/ "./src/routes/lists/view-[viewId]/views/ListView.tsx":
/*!***********************************************************!*\
  !*** ./src/routes/lists/view-[viewId]/views/ListView.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListView: () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_ViewsTabMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/ViewsTabMenu */ "./src/routes/lists/views/ViewsTabMenu.ts");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





function replaceNonMatchingCharacters(originalText) {
    var replacementTable = {
        'ı': 'i',
        ' ': '_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });
    return replacedText;
}
var ListView = function (viewId) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
    var isWidget = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useWidget)().isWidget;
    var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
    var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
    var workspaceId = realm.$id;
    var appletId = applet.$id;
    var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'listItems', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.limit(1000)
    ]), items = _a.documents, isItemsLoading = _a.isLoading;
    var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'listStatuses', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.orderAsc('orderBy')
    ]), groups = _b.documents, isStatusesLoading = _b.isLoading;
    var createTask = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'listItems').createDocument;
    var updateTask = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
    var _c = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'fields', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('collectionId', 'listItems')
    ]), attributes = _c.documents, isLoading = _c.isLoading;
    var _d = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(workspaceId, appletId, 'viewSettings', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('viewId', 'applet')
    ]), viewSettings = _d.documents, isFieldSettingsLoading = _d.isLoading;
    var createField = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'fields', [
        _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.Query.equal('collectionId', 'listItems')
    ]).createDocument;
    var createViewSetting = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateDocument)(workspaceId, appletId, 'viewSettings').createDocument;
    var createStringAttribute = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateStringAttribute)(workspaceId).createStringAttribute;
    var createIntegerAttribute = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateIntegerAttribute)(workspaceId).createIntegerAttribute;
    var createRelationshipAttribute = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useCreateRelationshipAttribute)(workspaceId).createRelationshipAttribute;
    var account = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useAccount)().account;
    var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useUpdateDocument)(workspaceId).updateDocument;
    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })(isWidget ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Fragment)() : (0,_views_ViewsTabMenu__WEBPACK_IMPORTED_MODULE_4__.ViewsTab)(viewId), (isLoading || isStatusesLoading || isFieldSettingsLoading) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Fragment)() :
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
            var resultFields = attributes;
            if (viewSettings != null) {
                resultFields = attributes
                    .filter(function (field) {
                    var index = viewSettings.findIndex(function (_) { return _.key === field.key; });
                    if (index > -1) {
                        return viewSettings[index].hidden === false;
                    }
                    else {
                        return false;
                    }
                });
            }
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIViewBuilder)(function () {
                var _a;
                var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialogStack)().openDialog;
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)('com.celmino.widget.list')
                    .config({
                    workspaceId: workspaceId,
                    listId: appletId,
                    fields: resultFields,
                    groups: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], groups.filter(function (group) { return group.type === 'opened'; }), true), groups.filter(function (group) { return group.type === 'active'; }), true), groups.filter(function (group) { return group.type === 'done'; }), true), groups.filter(function (group) { return group.type === 'closed'; }), true).map(function (group) { return (__assign({ id: group.$id }, group)); }),
                    groupBy: 'status',
                    onItemChanged: function (itemId, data) {
                        updateDocument({
                            databaseId: appletId,
                            collectionId: 'listItems',
                            documentId: itemId,
                            data: data
                        });
                    },
                    onItemSave: function (data) {
                        return (new Promise(function (resolve) {
                            createTask({
                                data: data
                            }, function (task) {
                                resolve(task);
                            });
                        }));
                    },
                    onStageChange: function (itemId, stageId) {
                        //   alert(itemId + ' ' + stageId)
                        updateTask({
                            databaseId: appletId,
                            collectionId: 'listItems',
                            documentId: itemId,
                            data: {
                                status: stageId
                            }
                        });
                    },
                    onStagePropsChanged: function (stageId, stageProps) {
                        updateTask({
                            databaseId: appletId,
                            collectionId: 'listStatuses',
                            documentId: stageId,
                            data: {
                                name: stageProps.name,
                                bgColor: stageProps.color
                            }
                        });
                    },
                    onNewFieldAddded: function (field) {
                        if (field.type === 'text') {
                            createStringAttribute({
                                databaseId: appletId,
                                collectionId: 'listItems',
                                key: replaceNonMatchingCharacters(field.name),
                                required: false,
                                size: 255
                            }, function (attribute) {
                                createField({
                                    data: __assign(__assign({}, field), { key: replaceNonMatchingCharacters(field.name), collectionId: 'listItems' })
                                }, function () {
                                    createViewSetting({
                                        data: {
                                            viewId: 'applet',
                                            key: replaceNonMatchingCharacters(field.name),
                                            hidden: false
                                        }
                                    }, function () { return void 0; });
                                });
                            });
                        }
                        else if (field.type === 'number') {
                            createIntegerAttribute({
                                databaseId: appletId,
                                collectionId: 'listItems',
                                key: replaceNonMatchingCharacters(field.name),
                                required: false,
                            }, function (attribute) {
                                createField({
                                    data: __assign(__assign({}, field), { key: replaceNonMatchingCharacters(field.name), collectionId: 'listItems' })
                                }, function () {
                                    createViewSetting({
                                        data: {
                                            viewId: 'applet',
                                            key: replaceNonMatchingCharacters(field.name),
                                            hidden: false
                                        }
                                    }, function () { return void 0; });
                                });
                            });
                        }
                        else if (field.type === 'richtext') {
                            createStringAttribute({
                                databaseId: appletId,
                                collectionId: 'listItems',
                                key: replaceNonMatchingCharacters(field.name),
                                required: false,
                                size: 150000
                            }, function (attribute) {
                                createField({
                                    data: {
                                        key: attribute.key,
                                        name: field.name,
                                        type: 'richtext',
                                        fieldInfo: JSON.stringify({
                                            size: 150000
                                        }),
                                        collectionId: 'listItems'
                                    }
                                }, function () {
                                    createViewSetting({
                                        data: {
                                            viewId: 'applet',
                                            key: replaceNonMatchingCharacters(field.name),
                                            hidden: false
                                        }
                                    }, function () { return void 0; });
                                });
                            });
                        }
                        else if (field.type === 'select') {
                            createStringAttribute({
                                databaseId: appletId,
                                collectionId: 'listItems',
                                key: replaceNonMatchingCharacters(field.name),
                                required: false,
                                size: 150000
                            }, function (attribute) {
                                createField({
                                    data: __assign(__assign({}, field), { key: replaceNonMatchingCharacters(field.name), collectionId: 'listItems' })
                                }, function () {
                                    createViewSetting({
                                        data: {
                                            viewId: 'applet',
                                            key: replaceNonMatchingCharacters(field.name),
                                            hidden: false
                                        }
                                    }, function () { return void 0; });
                                });
                            });
                        }
                        else if (field.type === 'multiselect') {
                            createStringAttribute({
                                databaseId: appletId,
                                collectionId: 'listItems',
                                key: replaceNonMatchingCharacters(field.name),
                                required: false,
                                size: 150000
                            }, function (attribute) {
                                createField({
                                    data: __assign(__assign({}, field), { key: replaceNonMatchingCharacters(field.name), collectionId: 'listItems' })
                                }, function () {
                                    createViewSetting({
                                        data: {
                                            viewId: 'applet',
                                            key: replaceNonMatchingCharacters(field.name),
                                            hidden: false
                                        }
                                    }, function () { return void 0; });
                                });
                            });
                        }
                        else if (field.type === 'relation') {
                            //alert(JSON.stringify(field))
                            createStringAttribute({
                                databaseId: appletId,
                                collectionId: 'listItems',
                                key: replaceNonMatchingCharacters(field.name),
                                required: false,
                                size: 255
                            }, function (attribute) {
                                field.fieldInfo = JSON.stringify(__assign({ workspaceId: workspaceId, databaseId: appletId, collectionId: 'listItems' }, field.fieldInfo));
                                createField({
                                    data: __assign(__assign({}, field), { key: replaceNonMatchingCharacters(field.name), collectionId: 'listItems' })
                                }, function () { return void 0; });
                            });
                        }
                    },
                    onItemClick: function (item) {
                        var _controller = /** @class */ (function (_super) {
                            __extends(class_1, _super);
                            function class_1() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            class_1.prototype.LoadView = function () {
                                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)("com.celmino.applet.task-list", 'taskView')
                                    .config({
                                    taskId: item.$id,
                                    views: [],
                                    //powerUps: PowerUps,
                                    // headerIcon: Icon(OkrIcons.KeyResultIcon({ width: 36, height: 36 })),
                                    header: item.name,
                                    onHeaderChange: function (title) { alert(title); },
                                    //description: metric?.description,
                                    onDescriptionChange: function (description) {
                                        /*  updateTask(object_id, {
                                             description: description
                                         }, {
                                             onSuccess: () => {
                                                 invalidateCache();
                                             }
                                         }) */
                                    },
                                    fields: {
                                        "assignee": {
                                            type: "user",
                                            label: 'Assignee',
                                        },
                                        "title": {
                                            type: "text",
                                            label: "Title",
                                            value: '',
                                            onChange: function (value) {
                                                alert(value);
                                            }
                                        },
                                        "state": {
                                            type: "select",
                                            label: "State",
                                            options: [],
                                            value: null,
                                            onChange: function (value) {
                                                alert(value);
                                            }
                                        }
                                    }
                                }));
                            };
                            return class_1;
                        }(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIController));
                        openDialog({
                            title: 'Open',
                            view: (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.AppletContext)(function () {
                                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ReactView)(react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_controller, null));
                            }).appletId(applet.$id)
                        });
                    },
                    items: (_a = items === null || items === void 0 ? void 0 : items.map(function (item) { return (__assign({ id: item.$id, title: item.name }, item)); })) !== null && _a !== void 0 ? _a : [],
                    /*   stages: [{
$id: 'AAA',
name: 'Todo',
color: '#FF0000:#00FF00'
                      }] */
                }));
            })), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTop })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-addSmall')))
                .cursor('pointer')
                .cornerRadius(6)
                .background({ hover: '#F0F1F3' })
                .width(32).height(32)
                .onClick(function () {
                _celmino_platform__WEBPACK_IMPORTED_MODULE_0__.SelectSiderDialog.Show();
            }))
                .background('white')
                .borderLeft('solid 1px #E8EAED')
                .padding('12px 8px')
                .width(60)));
        })).background('#F9FAFB'));
}); };


/***/ }),

/***/ "./src/routes/lists/views/ViewOptions.ts":
/*!***********************************************!*\
  !*** ./src/routes/lists/views/ViewOptions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewOptions: () => (/* binding */ ViewOptions)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var options = [
    {}
];
var ViewOptions = function (closeHandle) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('View Options')
    .fontSize(11)
    .fontWeight('600')
    .foregroundColor('rgb(135, 144, 158)')
    .textTransform("uppercase"), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Spacer)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('cu3-icon-edit')))
    .width())
    .padding()
    .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Menu)().model([
    {
        title: 'Pin',
        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__pin'),
        onClick: function () { return closeHandle(); }
    },
    {
        title: 'Add to favorites',
        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__star'),
        onClick: function () { return closeHandle(); }
    },
    {
        title: 'Dublicate',
        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__copy'),
        onClick: function () { return closeHandle(); }
    },
    {
        title: 'Move',
        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__move'),
        onClick: function () { return closeHandle(); }
    },
    {
        title: 'Delete',
        color: '#bc4841',
        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete'),
        onClick: function () { return closeHandle(); }
    },
    {
        type: 'Divider'
    },
    {
        title: 'More settings',
        icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__ellipsis'),
        onClick: function () { return closeHandle(); },
        items: [
            {
                title: 'Move',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__move'),
                onClick: function () { return closeHandle(); }
            },
            {
                title: 'Delete',
                color: '#bc4841',
                icon: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SvgIcon)('svg-sprite-global__delete'),
                onClick: function () { return closeHandle(); }
            },
        ]
    },
]))
    .padding()); };


/***/ }),

/***/ "./src/routes/lists/views/ViewsTabMenu.ts":
/*!************************************************!*\
  !*** ./src/routes/lists/views/ViewsTabMenu.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewsTab: () => (/* binding */ ViewsTab)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCreateView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useCreateView */ "./src/hooks/useCreateView.ts");
/* harmony import */ var _hooks_useListViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useListViews */ "./src/hooks/useListViews.ts");
/* harmony import */ var _ViewOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ViewOptions */ "./src/routes/lists/views/ViewOptions.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





/* const views = [
    {
        $id: '1',
        name: 'Board',
        type: 'board',
        icon: 'svg-sprite-cu2-view-2'
    },
    {
        $id: '2',
        name: 'List',
        type: 'list',
        icon: 'svg-sprite-cu2-view-2'
    }
] */
var MenuItemText = function (text) {
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(text)
        .foregroundColor('rgb(101, 111, 125)')
        .fontSize(14)
        .fontWeight("500")
        .fontFamily('-apple-system, "system-ui", "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif');
};
var ViewsTab = function (selectedId) { return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
    var _a = (0,_hooks_useListViews__WEBPACK_IMPORTED_MODULE_3__.useListViews)(), views = _a.views, isLoading = _a.isLoading;
    var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useAppletNavigate)().navigate;
    var matches = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)('(min-width: 1000px)');
    return (isLoading ?
        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)()
            .paddingLeft('16px')
            .background('white')
            .allHeight(45)
        :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 4 }).apply(void 0, __spreadArray(__spreadArray([], (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(views)(function (view) {
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })(selectedId === view.$id ?
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                        var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.useState)(false), menuIsOpen = _a[0], setMenuIsOpen = _a[1];
                        //  let _hideHandle = null;
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PopupButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 4 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)(view.icon)), MenuItemText(view.name))
                            .cursor('pointer')
                            .background({ default: menuIsOpen ? 'rgb(240, 241, 243)' : '', hover: 'rgb(240, 241, 243)' })
                            .cornerRadius(6)
                            .padding('0 7px 0 6px')
                            .height(28)
                            .width()
                            .onClick(function () {
                            setMenuIsOpen(!menuIsOpen);
                        }))((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_ViewOptions__WEBPACK_IMPORTED_MODULE_4__.ViewOptions)(function () { return setMenuIsOpen(false); }))
                            .width()
                            .height())
                            .open(menuIsOpen)
                            .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogPosition.BOTTOM_START)
                            .dialogOffset({
                            main: 15,
                            secondary: 0
                        })
                            //.hideHandle(hideHandle => _hideHandle = hideHandle)
                            .onDidHide(function () {
                            setMenuIsOpen(false);
                        }));
                    })
                    :
                        (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 4 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)(view.icon)), MenuItemText(view.name))
                            .cursor('pointer')
                            .background({ hover: 'rgb(240, 241, 243)' })
                            .cornerRadius(6)
                            .padding('0 7px 0 6px')
                            .height(28)
                            .width(), selectedId !== view.$id ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)()
                        .position('absolute')
                        .background('rgb(95, 85, 238)')
                        .height(2)
                        .bottom('0px')
                        .left('0px')).width()
                    .onClick(function () {
                    navigate("".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.urlFriendly)(view.name), "-").concat(view.$id));
                });
            }), false), [matches ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)() :
                    // Hidden views...
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PopupButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 4 })(MenuItemText("".concat(views.length - 4, " more...")))
                        .cursor('pointer')
                        .background({ hover: 'rgb(240, 241, 243)' })
                        .cornerRadius(6)
                        .padding('0 7px 0 6px')
                        .height(28)
                        .width())((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                        return (_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack.apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(views.filter(function (view) { return view.$id !== selectedId; }).slice(3, views.length))(function (view) {
                            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(view.name))
                                .onClick(function () {
                                navigate("".concat((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.urlFriendly)(view.name), "-").concat(view.$id));
                            });
                        })));
                    }))
                        .width(200)
                        .height(300))
                        .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogPosition.BOTTOM_START))
                        .width(),
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.PopupButton)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 4 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)('cu3-icon-addSmall')), MenuItemText('View'))
                    .cursor('pointer')
                    .background({ hover: 'rgb(240, 241, 243)' })
                    .cornerRadius(6)
                    .padding('0 7px 0 6px')
                    .height(28)
                    .width())((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                    var createView = (0,_hooks_useCreateView__WEBPACK_IMPORTED_MODULE_2__.useCreateView)().createView;
                    var menu = [
                        {
                            viewName: 'List',
                            viewType: 'list',
                            viewIcon: 'svg-sprite-cu2-view-1'
                        },
                        {
                            viewName: 'Kanban',
                            viewType: 'kanban',
                            viewIcon: 'svg-sprite-cu2-view-2'
                        },
                        {
                            viewName: 'Calendar',
                            viewType: 'calendar',
                            viewIcon: 'svg-sprite-cu2-view-5'
                        },
                        {
                            viewName: 'Gantt',
                            viewType: 'gantt',
                            viewIcon: 'svg-sprite-cu2-view-7'
                        }
                    ];
                    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTopLeading }).apply(void 0, (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.ForEach)(menu)(function (menuItem) {
                        return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 9 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Icon)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.SvgIcon)(menuItem.viewIcon)), MenuItemText(menuItem.viewName))
                            .padding()
                            .height()
                            .cornerRadius(6)
                            .cursor('pointer')
                            //.foregroundColor({ hover: 'white' })
                            .background({ hover: '#F6F7F9' })
                            .transition('background-color .2s cubic-bezier(.785,.135,.15,.86) 0s')
                            .onClick(function () {
                            createView({
                                name: menuItem.viewName,
                                icon: menuItem.viewIcon,
                                type: menuItem.viewType
                            });
                        });
                    })).padding());
                }))
                    .width(200)
                    .height())
                    .dialogPosition(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.DialogPosition.BOTTOM_START))
                    .width()], false)).paddingLeft('16px')
                .background('white')
                .allHeight(45));
}); };


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
        var navigate = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useAppletNavigate)().navigate;
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
            },
            {
                id: 'taskTypes',
                title: 'Task Types',
                url: "settings/taskTypes",
                icon: _resources_Icons__WEBPACK_IMPORTED_MODULE_2__.TaskTypesIcon
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
            .margin('0 0 30px'), (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.ColorSelect)({
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

/***/ "./src/routes/settings/statuses/+controller.ts":
/*!*****************************************************!*\
  !*** ./src/routes/settings/statuses/+controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusesController: () => (/* binding */ StatusesController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_ListStatusView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/ListStatusView */ "./src/routes/settings/statuses/views/ListStatusView.tsx");
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


var StatusesController = /** @class */ (function (_super) {
    __extends(StatusesController, _super);
    function StatusesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusesController.prototype.LoadView = function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Statuses').fontSize(18).fontWeight('500')
            .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
            .foregroundColor('rgb(42, 46, 52)')
            .lineHeight(32))
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16)
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, 20)
            .borderBottom('solid 1px #E2E8F0')
            .height()
            .margin('0 0 30px'), (0,_views_ListStatusView__WEBPACK_IMPORTED_MODULE_1__.ListStatusView)())
            .height()
            .background('white')
            .cornerRadius(8)
            .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
            .border('solid 1px #E2E8F0'))
            .padding('20px')
            .background('#F8FAFC'));
    };
    return StatusesController;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIController));



/***/ }),

/***/ "./src/routes/settings/statuses/views/Container/Container.tsx":
/*!********************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Container/Container.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_3__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var ContainerClass = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  grid-auto-rows: max-content;\n  overflow: hidden;\n  box-sizing: border-box;\n  appearance: none;\n  outline: none;\n  min-width: 350px;\n  /* margin: 10px; */\n  margin-bottom: 20px;\n  border-radius: 5px;\n  min-height: 50px; \n  transition: background-color 350ms ease;\n  /* background-color: rgba(246, 246, 246, 1); */\n  /* border: 1px solid rgba(0, 0, 0, 0.05); */\n  font-size: 1em;\n\n  ul {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: repeat(var(--columns, 1), 1fr);\n    list-style: none;\n    /*  padding: 10px;  */\n    margin: 0;\n  }\n\n  &.scrollable {\n    ul {\n      overflow-y: auto;\n    }\n  }\n\n  &.placeholder {\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.5);\n    background-color: transparent;\n    border-style: dashed;\n    border-color: rgba(0, 0, 0, 0.08);\n\n    &:hover {\n      border-color: rgba(0, 0, 0, 0.15);\n    }\n  }\n\n  &.hover {\n    /* background-color: rgb(235, 235, 235, 1); */\n  }\n\n  &.unstyled {\n    overflow: visible;\n    background-color: transparent !important;\n    border: none !important;\n  }\n\n  &.horizontal {\n    width: 100%;\n\n    ul {\n      grid-auto-flow: column;\n    }\n  }\n\n  &.shadow {\n    box-shadow: 0 1px 10px 0 rgba(34, 33, 81, 0.1);\n  }\n\n  &:focus-visible {\n    border-color: transparent;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0), 0 0px 0px 2px #4c9ffe;\n  }\n\n"], ["\n  display: flex;\n  flex-direction: column;\n  grid-auto-rows: max-content;\n  overflow: hidden;\n  box-sizing: border-box;\n  appearance: none;\n  outline: none;\n  min-width: 350px;\n  /* margin: 10px; */\n  margin-bottom: 20px;\n  border-radius: 5px;\n  min-height: 50px; \n  transition: background-color 350ms ease;\n  /* background-color: rgba(246, 246, 246, 1); */\n  /* border: 1px solid rgba(0, 0, 0, 0.05); */\n  font-size: 1em;\n\n  ul {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: repeat(var(--columns, 1), 1fr);\n    list-style: none;\n    /*  padding: 10px;  */\n    margin: 0;\n  }\n\n  &.scrollable {\n    ul {\n      overflow-y: auto;\n    }\n  }\n\n  &.placeholder {\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.5);\n    background-color: transparent;\n    border-style: dashed;\n    border-color: rgba(0, 0, 0, 0.08);\n\n    &:hover {\n      border-color: rgba(0, 0, 0, 0.15);\n    }\n  }\n\n  &.hover {\n    /* background-color: rgb(235, 235, 235, 1); */\n  }\n\n  &.unstyled {\n    overflow: visible;\n    background-color: transparent !important;\n    border: none !important;\n  }\n\n  &.horizontal {\n    width: 100%;\n\n    ul {\n      grid-auto-flow: column;\n    }\n  }\n\n  &.shadow {\n    box-shadow: 0 1px 10px 0 rgba(34, 33, 81, 0.1);\n  }\n\n  &:focus-visible {\n    border-color: transparent;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0), 0 0px 0px 2px #4c9ffe;\n  }\n\n"])));
var ActionClassName = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\ndisplay: flex;\n\n  > *:first-child:not(:last-child) {\n    opacity: 0;\n\n    &:focus-visible {\n      opacity: 1;\n    }\n  }\n  "], ["\ndisplay: flex;\n\n  > *:first-child:not(:last-child) {\n    opacity: 0;\n\n    &:focus-visible {\n      opacity: 1;\n    }\n  }\n  "])));
var HeaderClass = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\ndisplay: flex;\npadding: 5px 20px;\npadding-right: 8px;\nalign-items: center;\njustify-content: space-between;\n/* background-color: #fff; */\nborder-top-left-radius: 5px;\nborder-top-right-radius: 5px;\n/* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */\n\n&:hover {\n  .Actions > * {\n    opacity: 1 !important;\n  }\n}\n"], ["\ndisplay: flex;\npadding: 5px 20px;\npadding-right: 8px;\nalign-items: center;\njustify-content: space-between;\n/* background-color: #fff; */\nborder-top-left-radius: 5px;\nborder-top-right-radius: 5px;\n/* border-bottom: 1px solid rgba(0, 0, 0, 0.08); */\n\n&:hover {\n  .Actions > * {\n    opacity: 1 !important;\n  }\n}\n"])));
var Container = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, template = _a.template, _c = _a.columns, columns = _c === void 0 ? 1 : _c, handleProps = _a.handleProps, horizontal = _a.horizontal, hover = _a.hover, onClick = _a.onClick, onRemove = _a.onRemove, label = _a.label, placeholder = _a.placeholder, style = _a.style, scrollable = _a.scrollable, shadow = _a.shadow, unstyled = _a.unstyled, props = __rest(_a, ["children", "template", "columns", "handleProps", "horizontal", "hover", "onClick", "onRemove", "label", "placeholder", "style", "scrollable", "shadow", "unstyled"]);
    var Component = onClick ? 'button' : 'div';
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, __assign({}, props, { ref: ref, style: __assign(__assign({}, style), { '--columns': columns }), className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(ContainerClass, unstyled && "unstyled", horizontal && "horizontal", hover && "hover", placeholder && "placeholder", scrollable && "scrollable", shadow && "shadow"), onClick: onClick, tabIndex: onClick ? 0 : undefined }),
        _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.function(template) ? (_b = template({ label: label })) === null || _b === void 0 ? void 0 : _b.render() : void 0,
        (!_tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.function(template) && label) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: HeaderClass },
            label,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: ActionClassName }))) : null,
        placeholder ? children : react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, children)));
});
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/routes/settings/statuses/views/Container/index.ts":
/*!***************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Container/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__.Container)
/* harmony export */ });
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/routes/settings/statuses/views/Container/Container.tsx");



/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/Item.tsx":
/*!**********************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/Item.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/routes/settings/statuses/views/Item/components/index.ts");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_4__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





/* @keyframes pop {
  0% {
    transform: scale(1);
    box-shadow: var(--box-shadow);
  }
  100% {
    transform: scale(var(--scale));
    box-shadow: var(--box-shadow-picked-up);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
var ItemClass = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\nposition: relative;\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n /*  padding: 18px 20px; */\n   background-color: #fff; \n  /* box-shadow:  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15); */\n  outline: none;\n  border-radius: calc(4px / var(--scale-x, 1));\n  box-sizing: border-box;\n  list-style: none;\n  transform-origin: 50% 50%;\n\n  -webkit-tap-highlight-color: transparent;\n\n  color:  #333;\n  font-weight: 400;\n  font-size: 1rem;\n  white-space: nowrap;\n\n  transform: scale(var(--scale, 1));\n  transition: box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);\n\n  &:focus-visible {\n    box-shadow: 0 0px 4px 1px #4c9ffe,  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n  }\n\n  &:not(.withHandle) {\n    touch-action: manipulation;\n    cursor: grab;\n  }\n\n  &.dragging:not(.dragOverlay) {\n    opacity: var(--dragging-opacity, 0.5);\n    z-index: 0;\n\n    &:focus {\n      box-shadow:  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n    }\n  }\n\n  &.disabled {\n    color: #999;\n    background-color: #f1f1f1;\n    &:focus {\n      box-shadow: 0 0px 4px 1px rgba(0, 0, 0, 0.1),  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n    }\n    cursor: not-allowed;\n  }\n\n  &.dragOverlay {\n    cursor: inherit;\n    /* box-shadow: 0 0px 6px 2px #4c9ffe; */\n    animation: pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);\n    transform: scale(var(--scale)); \n    box-shadow: var(--box-shadow-picked-up);\n    opacity: 1;\n  }\n\n  &.color:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    height: 100%;\n    width: 3px;\n    display: block;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    background-color: var(--color);\n  }\n\n  &:hover {\n    .Remove {\n      visibility: visible;\n    }\n  }\n"], ["\nposition: relative;\n  display: flex;\n  flex-grow: 1;\n  align-items: center;\n /*  padding: 18px 20px; */\n   background-color: #fff; \n  /* box-shadow:  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15); */\n  outline: none;\n  border-radius: calc(4px / var(--scale-x, 1));\n  box-sizing: border-box;\n  list-style: none;\n  transform-origin: 50% 50%;\n\n  -webkit-tap-highlight-color: transparent;\n\n  color:  #333;\n  font-weight: 400;\n  font-size: 1rem;\n  white-space: nowrap;\n\n  transform: scale(var(--scale, 1));\n  transition: box-shadow 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);\n\n  &:focus-visible {\n    box-shadow: 0 0px 4px 1px #4c9ffe,  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n  }\n\n  &:not(.withHandle) {\n    touch-action: manipulation;\n    cursor: grab;\n  }\n\n  &.dragging:not(.dragOverlay) {\n    opacity: var(--dragging-opacity, 0.5);\n    z-index: 0;\n\n    &:focus {\n      box-shadow:  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n    }\n  }\n\n  &.disabled {\n    color: #999;\n    background-color: #f1f1f1;\n    &:focus {\n      box-shadow: 0 0px 4px 1px rgba(0, 0, 0, 0.1),  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n    }\n    cursor: not-allowed;\n  }\n\n  &.dragOverlay {\n    cursor: inherit;\n    /* box-shadow: 0 0px 6px 2px #4c9ffe; */\n    animation: pop 200ms cubic-bezier(0.18, 0.67, 0.6, 1.22);\n    transform: scale(var(--scale)); \n    box-shadow: var(--box-shadow-picked-up);\n    opacity: 1;\n  }\n\n  &.color:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    height: 100%;\n    width: 3px;\n    display: block;\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n    background-color: var(--color);\n  }\n\n  &:hover {\n    .Remove {\n      visibility: visible;\n    }\n  }\n"])));
var Wrapper = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n  transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)\n    scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));\n  transform-origin: 0 0;\n  touch-action: manipulation;\n\n  &.fadeIn {\n    animation: fadeIn 500ms ease;\n  }\n\n  &.dragOverlay {\n    --scale: 1.05;\n    --box-shadow:  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n    --box-shadow-picked-up: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),\n      -1px 0 15px 0 rgba(34, 33, 81, 0.01),\n      0px 15px 15px 0 rgba(34, 33, 81, 0.25);\n    z-index: 999;\n  }\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  transform: translate3d(var(--translate-x, 0), var(--translate-y, 0), 0)\n    scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1));\n  transform-origin: 0 0;\n  touch-action: manipulation;\n\n  &.fadeIn {\n    animation: fadeIn 500ms ease;\n  }\n\n  &.dragOverlay {\n    --scale: 1.05;\n    --box-shadow:  0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05), 0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15);\n    --box-shadow-picked-up: 0 0 0 calc(1px / var(--scale-x, 1)) rgba(63, 63, 68, 0.05),\n      -1px 0 15px 0 rgba(34, 33, 81, 0.01),\n      0px 15px 15px 0 rgba(34, 33, 81, 0.25);\n    z-index: 999;\n  }\n"])));
var _Rempve = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nvisibility: hidden;\n"], ["\nvisibility: hidden;\n"])));
var Actions = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-self: flex-start;\n  /* margin-top: -12px; */\n  margin-left: auto;\n  margin-bottom: -15px;\n  margin-left: 10px;\n  height:100%\n"], ["\n  display: flex;\n  align-self: flex-start;\n  /* margin-top: -12px; */\n  margin-left: auto;\n  margin-bottom: -15px;\n  margin-left: 10px;\n  height:100%\n"])));
var Item = react__WEBPACK_IMPORTED_MODULE_0___default().memo(react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (_a, ref) {
    var color = _a.color, dragOverlay = _a.dragOverlay, dragging = _a.dragging, disabled = _a.disabled, fadeIn = _a.fadeIn, handle = _a.handle, handleProps = _a.handleProps, height = _a.height, index = _a.index, listeners = _a.listeners, onRemove = _a.onRemove, renderItem = _a.renderItem, template = _a.template, sorting = _a.sorting, style = _a.style, transition = _a.transition, transform = _a.transform, value = _a.value, wrapperStyle = _a.wrapperStyle, props = __rest(_a, ["color", "dragOverlay", "dragging", "disabled", "fadeIn", "handle", "handleProps", "height", "index", "listeners", "onRemove", "renderItem", "template", "sorting", "style", "transition", "transform", "value", "wrapperStyle"]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!dragOverlay) {
            return;
        }
        document.body.style.cursor = 'grabbing';
        return function () {
            document.body.style.cursor = '';
        };
    }, [dragOverlay]);
    return renderItem ? (renderItem({
        dragOverlay: Boolean(dragOverlay),
        dragging: Boolean(dragging),
        sorting: Boolean(sorting),
        index: index,
        fadeIn: Boolean(fadeIn),
        listeners: listeners,
        ref: ref,
        style: style,
        transform: transform,
        transition: transition,
        value: value,
    })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(Wrapper, fadeIn && 'fadeIn', sorting && 'sorting', dragOverlay && 'dragOverlay'), style: __assign(__assign({}, wrapperStyle), { transition: [transition, wrapperStyle === null || wrapperStyle === void 0 ? void 0 : wrapperStyle.transition]
                .filter(Boolean)
                .join(', '), '--translate-x': transform
                ? "".concat(Math.round(transform.x), "px")
                : undefined, '--translate-y': transform
                ? "".concat(Math.round(transform.y), "px")
                : undefined, '--scale-x': (transform === null || transform === void 0 ? void 0 : transform.scaleX)
                ? "".concat(transform.scaleX)
                : undefined, '--scale-y': (transform === null || transform === void 0 ? void 0 : transform.scaleY)
                ? "".concat(transform.scaleY)
                : undefined, '--index': index, '--color': color }), ref: ref },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(ItemClass, dragging && 'dragging', handle && 'withHandle', dragOverlay && 'dragOverlay', disabled && 'disabled', color && 'color'), style: style, "data-cypress": "draggable-item" }, (!handle ? listeners : undefined), props, { tabIndex: !handle ? 0 : undefined }), _tuval_core__WEBPACK_IMPORTED_MODULE_4__.is.function(template) ? template({
            dragOverlay: Boolean(dragOverlay),
            dragging: Boolean(dragging),
            sorting: Boolean(sorting),
            index: index,
            fadeIn: Boolean(fadeIn),
            listeners: listeners,
            handleView: (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_3__.ReactView)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components__WEBPACK_IMPORTED_MODULE_2__.Handle, __assign({}, handleProps, listeners))),
            ref: ref,
            style: style,
            transform: transform,
            transition: transition,
            value: value
        }).render() : "dfsdf")));
}));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/Action/Action.tsx":
/*!******************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/Action/Action.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var ActionClassName = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n  display: flex;\n  width: 12px;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  touch-action: none;\n  cursor: var(--cursor, pointer);\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  appearance: none;\n  background-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n\n  @media (hover: hover) {\n    &:hover {\n     /*  background-color: var(--action-background, rgba(0, 0, 0, 0.05)); */\n\n      svg {\n        fill: #6f7b88;\n      }\n    }\n  }\n\n  svg {\n    flex: 0 0 auto;\n    margin: auto;\n    height: 100%;\n    overflow: visible;\n    fill: #919eab;\n  }\n\n  &:active {\n    background-color: var(--background, rgba(0, 0, 0, 0.05));\n\n    svg {\n      fill: var(--fill, #788491);\n    }\n  }\n\n  &:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0),\n      0 0px 0px 2px #4c9ffe;\n  }\n\n\n"], ["\n\n  display: flex;\n  width: 12px;\n  padding: 5px;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  touch-action: none;\n  cursor: var(--cursor, pointer);\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  appearance: none;\n  background-color: transparent;\n  -webkit-tap-highlight-color: transparent;\n\n  @media (hover: hover) {\n    &:hover {\n     /*  background-color: var(--action-background, rgba(0, 0, 0, 0.05)); */\n\n      svg {\n        fill: #6f7b88;\n      }\n    }\n  }\n\n  svg {\n    flex: 0 0 auto;\n    margin: auto;\n    height: 100%;\n    overflow: visible;\n    fill: #919eab;\n  }\n\n  &:active {\n    background-color: var(--background, rgba(0, 0, 0, 0.05));\n\n    svg {\n      fill: var(--fill, #788491);\n    }\n  }\n\n  &:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0),\n      0 0px 0px 2px #4c9ffe;\n  }\n\n\n"])));
var Action = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var active = _a.active, className = _a.className, cursor = _a.cursor, style = _a.style, props = __rest(_a, ["active", "className", "cursor", "style"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", __assign({ ref: ref }, props, { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(ActionClassName, className), tabIndex: 0, style: __assign(__assign({}, style), { cursor: cursor, '--fill': active === null || active === void 0 ? void 0 : active.fill, '--background': active === null || active === void 0 ? void 0 : active.background }) })));
});
var templateObject_1;


/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/Action/index.ts":
/*!****************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/Action/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* reexport safe */ _Action__WEBPACK_IMPORTED_MODULE_0__.Action)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./src/routes/settings/statuses/views/Item/components/Action/Action.tsx");



/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/Handle/Handle.tsx":
/*!******************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/Handle/Handle.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handle: () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Action */ "./src/routes/settings/statuses/views/Item/components/Action/index.ts");
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


var Handle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Action__WEBPACK_IMPORTED_MODULE_1__.Action, __assign({ ref: ref, cursor: "grab", "data-cypress": "draggable-handle" }, props),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 20 20", width: "12" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }))));
});


/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/Handle/index.ts":
/*!****************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/Handle/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Handle: () => (/* reexport safe */ _Handle__WEBPACK_IMPORTED_MODULE_0__.Handle)
/* harmony export */ });
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handle */ "./src/routes/settings/statuses/views/Item/components/Handle/Handle.tsx");



/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/Remove/Remove.tsx":
/*!******************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/Remove/Remove.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Remove: () => (/* binding */ Remove)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Action */ "./src/routes/settings/statuses/views/Item/components/Action/index.ts");
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


function Remove(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Action__WEBPACK_IMPORTED_MODULE_1__.Action, __assign({}, props, { active: {
            fill: 'rgba(255, 70, 70, 0.95)',
            background: 'rgba(255, 70, 70, 0.1)',
        } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "8", viewBox: "0 0 22 22", xmlns: "http://www.w3.org/2000/svg" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2.99998 -0.000206962C2.7441 -0.000206962 2.48794 0.0972617 2.29294 0.292762L0.292945 2.29276C-0.0980552 2.68376 -0.0980552 3.31682 0.292945 3.70682L7.58591 10.9998L0.292945 18.2928C-0.0980552 18.6838 -0.0980552 19.3168 0.292945 19.7068L2.29294 21.7068C2.68394 22.0978 3.31701 22.0978 3.70701 21.7068L11 14.4139L18.2929 21.7068C18.6829 22.0978 19.317 22.0978 19.707 21.7068L21.707 19.7068C22.098 19.3158 22.098 18.6828 21.707 18.2928L14.414 10.9998L21.707 3.70682C22.098 3.31682 22.098 2.68276 21.707 2.29276L19.707 0.292762C19.316 -0.0982383 18.6829 -0.0982383 18.2929 0.292762L11 7.58573L3.70701 0.292762C3.51151 0.0972617 3.25585 -0.000206962 2.99998 -0.000206962Z" }))));
}


/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/Remove/index.ts":
/*!****************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/Remove/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Remove: () => (/* reexport safe */ _Remove__WEBPACK_IMPORTED_MODULE_0__.Remove)
/* harmony export */ });
/* harmony import */ var _Remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Remove */ "./src/routes/settings/statuses/views/Item/components/Remove/Remove.tsx");



/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/components/index.ts":
/*!*********************************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/components/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* reexport safe */ _Action__WEBPACK_IMPORTED_MODULE_0__.Action),
/* harmony export */   Handle: () => (/* reexport safe */ _Handle__WEBPACK_IMPORTED_MODULE_1__.Handle),
/* harmony export */   Remove: () => (/* reexport safe */ _Remove__WEBPACK_IMPORTED_MODULE_2__.Remove)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ "./src/routes/settings/statuses/views/Item/components/Action/index.ts");
/* harmony import */ var _Handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Handle */ "./src/routes/settings/statuses/views/Item/components/Handle/index.ts");
/* harmony import */ var _Remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Remove */ "./src/routes/settings/statuses/views/Item/components/Remove/index.ts");





/***/ }),

/***/ "./src/routes/settings/statuses/views/Item/index.ts":
/*!**********************************************************!*\
  !*** ./src/routes/settings/statuses/views/Item/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   Handle: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Handle),
/* harmony export */   Item: () => (/* reexport safe */ _Item__WEBPACK_IMPORTED_MODULE_0__.Item),
/* harmony export */   Remove: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Remove)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/routes/settings/statuses/views/Item/Item.tsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/routes/settings/statuses/views/Item/components/index.ts");




/***/ }),

/***/ "./src/routes/settings/statuses/views/ListStatusView.tsx":
/*!***************************************************************!*\
  !*** ./src/routes/settings/statuses/views/ListStatusView.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListStatusView: () => (/* binding */ ListStatusView),
/* harmony export */   restrictToHorizontalAxis: () => (/* binding */ restrictToHorizontalAxis)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MultipleContainers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultipleContainers */ "./src/routes/settings/statuses/views/MultipleContainers.tsx");
/* harmony import */ var _hooks_useTaskStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useTaskStatus */ "./src/hooks/useTaskStatus.ts");
/* harmony import */ var _hooks_useCreateStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useCreateStatus */ "./src/hooks/useCreateStatus.ts");
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





var restrictToHorizontalAxis = function (_a) {
    var transform = _a.transform, over = _a.over;
    return __assign(__assign({}, transform), { x: 0 });
};
var statuses = [
    {
        id: '1',
        title: 'To Do',
        stageId: '1'
    },
    {
        id: '2',
        title: 'In Progress',
        stageId: '1'
    },
    {
        id: '3',
        title: 'Done',
        stageId: '1'
    }
];
var stages = [
    {
        id: "1",
        status_name: "Active Statuses",
        status_background_color: "",
        status_color: ""
    },
    {
        id: "2",
        status_name: "Done Statuses",
        status_background_color: "",
        status_color: ""
    }
];
var ListStatusView = function () {
    /* const dialog = useDialog();
    const navigate = useNavigate();

    const { columns, resource, filter, sort } = fieldInfo;
    const { getList } = useProtocol(WorkProtocol);
    const { data: workspaces, isLoading } = getList('workspaces', {
        filter: {
            tenant_id: useSessionService().TenantId
        }
    }) */
    var _a = (0,_hooks_useTaskStatus__WEBPACK_IMPORTED_MODULE_3__.useTaskStatus)(), statuses = _a.statuses, isLoading = _a.isLoading;
    var createStatus = (0,_hooks_useCreateStatus__WEBPACK_IMPORTED_MODULE_4__.useCreateStatus)().createStatus;
    return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.ReactView)(react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MultipleContainers__WEBPACK_IMPORTED_MODULE_2__.MultipleContainers, { handle: true, items: {
            "Opened Status": statuses
                .filter(function (statu) { return statu.type === 'opened'; })
                .map(function (statu) { return ({
                id: statu.$id,
                title: statu.name,
                type: statu.type,
                color: statu.bgColor
            }); }),
            "Active Statuses": statuses
                .filter(function (statu) { return statu.type === 'active'; })
                .map(function (statu) { return ({
                id: statu.$id,
                title: statu.name,
                type: statu.type,
                color: statu.bgColor
            }); }),
            "Done Statuses": statuses
                .filter(function (statu) { return statu.type === 'done'; })
                .map(function (statu) { return ({
                id: statu.$id,
                title: statu.name,
                type: statu.type,
                color: statu.bgColor
            }); }),
            "Closed Status": statuses
                .filter(function (statu) { return statu.type === 'closed'; })
                .map(function (statu) { return ({
                id: statu.$id,
                title: statu.name,
                type: statu.type,
                color: statu.bgColor
            }); }),
        }, vertical: true, 
        // modifiers={[restrictToHorizontalAxis]}
        /*  cancelDrop={(args: CancelDropArguments) => {
             if (args.over.id === "1")
                 return true;
             return false
         }} */
        placeholderTemplate: function (_a) {
            var containerId = _a.containerId;
            return containerId === 'Done Statuses' ?
                (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Move statuses here to consider tasks Done.')
                    .fontSize(11)
                    .foregroundColor('#2229'))
                    .border('1px dashed #cbc9cf')
                    .height(30)
                :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)();
        }, containerLabelTemplate: function (_a) {
            var label = _a.label;
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(label)).textTransform("uppercase").fontSize(9).fontWeight('500').foregroundColor('rgb(107, 119, 140)')
                .height(30);
        }, template: function (args) {
            return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((args.value.type !== "opened" && args.value.type !== "closed") ? args.handleView : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)().width(13).height(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)().width(10).height(10).background(args.value.color).cornerRadius(2), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.TextField)().value(args.value.title)
                    .border('none')
                // Text(args.value.title).fontSize(12).textTransform('uppercase')
                ).foregroundColor(args.value.color))
                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5)
                    .border(args.dragOverlay ? '' : '1px solid #d8d8d8')
                    .cornerRadius(3)
                    .height(28).background('white'));
            }));
        } })).frame(true).width('100%')));
};


/***/ }),

/***/ "./src/routes/settings/statuses/views/MultipleContainers.tsx":
/*!*******************************************************************!*\
  !*** ./src/routes/settings/statuses/views/MultipleContainers.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipleContainers: () => (/* binding */ MultipleContainers),
/* harmony export */   TRASH_ID: () => (/* binding */ TRASH_ID),
/* harmony export */   createRange: () => (/* binding */ createRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dnd-kit/sortable */ "./node_modules/@dnd-kit/sortable/dist/sortable.esm.js");
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dnd-kit/utilities */ "./node_modules/@dnd-kit/utilities/dist/utilities.esm.js");
/* harmony import */ var _multipleContainersKeyboardCoordinates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multipleContainersKeyboardCoordinates */ "./src/routes/settings/statuses/views/multipleContainersKeyboardCoordinates.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./src/routes/settings/statuses/views/Item/index.ts");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Container */ "./src/routes/settings/statuses/views/Container/index.ts");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useCreateStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useCreateStatus */ "./src/hooks/useCreateStatus.ts");
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};











var defaultInitializer = function (index) { return index; };
function createRange(length, initializer) {
    if (initializer === void 0) { initializer = defaultInitializer; }
    return __spreadArray([], new Array(length), true).map(function (_, index) { return initializer(index); });
}
var animateLayoutChanges = function (args) {
    return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.defaultAnimateLayoutChanges)(__assign(__assign({}, args), { wasDragging: true }));
};
function DroppableContainer(_a) {
    var _b;
    var children = _a.children, template = _a.template, _c = _a.columns, columns = _c === void 0 ? 1 : _c, disabled = _a.disabled, id = _a.id, items = _a.items, style = _a.style, props = __rest(_a, ["children", "template", "columns", "disabled", "id", "items", "style"]);
    var _d = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.useSortable)({
        id: id,
        data: {
            type: 'container',
            children: items,
        },
        animateLayoutChanges: animateLayoutChanges,
    }), active = _d.active, attributes = _d.attributes, isDragging = _d.isDragging, listeners = _d.listeners, over = _d.over, setNodeRef = _d.setNodeRef, transition = _d.transition, transform = _d.transform;
    var isOverContainer = over
        ? (id === over.id && ((_b = active === null || active === void 0 ? void 0 : active.data.current) === null || _b === void 0 ? void 0 : _b.type) !== 'container') ||
            items.includes(over.id)
        : false;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Container__WEBPACK_IMPORTED_MODULE_7__.Container, __assign({ ref: disabled ? undefined : setNodeRef, style: __assign(__assign({}, style), { transition: transition, transform: _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_4__.CSS.Translate.toString(transform), opacity: isDragging ? 0.5 : undefined }), hover: isOverContainer, handleProps: __assign(__assign({}, attributes), listeners), columns: columns, template: template }, props), children));
}
var dropAnimation = {
    sideEffects: (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.defaultDropAnimationSideEffects)({
        styles: {
            active: {
                opacity: '0.5',
            },
        },
    }),
};
var TRASH_ID = 'void';
var PLACEHOLDER_ID = 'placeholder';
var empty = [];
function MultipleContainers(_a) {
    var _b = _a.adjustScale, adjustScale = _b === void 0 ? false : _b, _c = _a.itemCount, itemCount = _c === void 0 ? 3 : _c, cancelDrop = _a.cancelDrop, columns = _a.columns, _d = _a.handle, handle = _d === void 0 ? false : _d, initialItems = _a.items, containerStyle = _a.containerStyle, _e = _a.coordinateGetter, coordinateGetter = _e === void 0 ? _multipleContainersKeyboardCoordinates__WEBPACK_IMPORTED_MODULE_5__.coordinateGetter : _e, _f = _a.getItemStyles, getItemStyles = _f === void 0 ? function () { return ({}); } : _f, _g = _a.wrapperStyle, wrapperStyle = _g === void 0 ? function () { return ({}); } : _g, _h = _a.minimal, minimal = _h === void 0 ? false : _h, modifiers = _a.modifiers, renderItem = _a.renderItem, template = _a.template, containerLabelTemplate = _a.containerLabelTemplate, placeholderTemplate = _a.placeholderTemplate, _j = _a.strategy, strategy = _j === void 0 ? _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.verticalListSortingStrategy : _j, _k = _a.trashable, trashable = _k === void 0 ? false : _k, _l = _a.vertical, vertical = _l === void 0 ? false : _l, scrollable = _a.scrollable;
    var _m = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        return initialItems !== null && initialItems !== void 0 ? initialItems : {
            A: createRange(itemCount, function (index) { return "A".concat(index + 1); }),
            B: createRange(itemCount, function (index) { return "B".concat(index + 1); }),
            C: createRange(itemCount, function (index) { return "C".concat(index + 1); }),
            D: createRange(itemCount, function (index) { return "D".concat(index + 1); }),
        };
    }), items = _m[0], setItems = _m[1];
    var _o = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Object.keys(items)), containers = _o[0], setContainers = _o[1];
    var _p = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), activeId = _p[0], setActiveId = _p[1];
    var lastOverId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var recentlyMovedToNewContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var isSortingContainer = activeId ? containers.includes(activeId) : false;
    /**
     * Custom collision detection strategy optimized for multiple containers
     *
     * - First, find any droppable containers intersecting with the pointer.
     * - If there are none, find intersecting containers with the active draggable.
     * - If there are no intersecting containers, return the last matched intersection
     *
     */
    var collisionDetectionStrategy = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (args) {
        var _a;
        if (activeId && activeId in items) {
            return (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.closestCenter)(__assign(__assign({}, args), { droppableContainers: args.droppableContainers.filter(function (container) { return container.id in items; }) }));
        }
        // Start by finding any intersecting droppable
        var pointerIntersections = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.pointerWithin)(args);
        var intersections = pointerIntersections.length > 0
            ? // If there are droppables intersecting with the pointer, return those
                pointerIntersections
            : (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.rectIntersection)(args);
        var overId = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.getFirstCollision)(intersections, 'id');
        if (overId != null) {
            if (overId === TRASH_ID) {
                // If the intersecting droppable is the trash, return early
                // Remove this if you're not using trashable functionality in your app
                return intersections;
            }
            if (overId in items) {
                var containerItems_1 = items[overId];
                // If a container is matched and it contains items (columns 'A', 'B', 'C')
                if (containerItems_1.length > 0) {
                    // Return the closest droppable within that container
                    overId = (_a = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.closestCenter)(__assign(__assign({}, args), { droppableContainers: args.droppableContainers.filter(function (container) {
                            return container.id !== overId &&
                                containerItems_1.findIndex(function (item) { return item.id === container.id; }) > -1;
                        }) }))[0]) === null || _a === void 0 ? void 0 : _a.id;
                }
            }
            lastOverId.current = overId;
            return [{ id: /* overId === "1" ?activeId : */ overId }];
        }
        // When a draggable item moves to a new container, the layout may shift
        // and the `overId` may become `null`. We manually set the cached `lastOverId`
        // to the id of the draggable item that was moved to the new container, otherwise
        // the previous `overId` will be returned which can cause items to incorrectly shift positions
        if (recentlyMovedToNewContainer.current) {
            lastOverId.current = activeId;
        }
        // If no droppable is matched, return the last match
        return lastOverId.current ? [{ id: lastOverId.current }] : [];
    }, [activeId, items]);
    var _q = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), clonedItems = _q[0], setClonedItems = _q[1];
    var sensors = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensors)((0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.MouseSensor), (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.TouchSensor), (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useSensor)(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.KeyboardSensor, {
        coordinateGetter: coordinateGetter,
    }));
    var findContainer = function (id) {
        if (id in items) {
            return id;
        }
        return Object.keys(items).find(function (key) { return items[key].find(function (item) { return item.id === id; }); });
    };
    var getIndex = function (id) {
        var container = findContainer(id);
        if (!container) {
            return -1;
        }
        var index = items[container].findIndex(function (item) { return item.id === id; });
        return index;
    };
    var getItem = function (id) {
        var container = findContainer(id);
        if (!container) {
            return -1;
        }
        var item = items[container].find(function (item) { return item.id === id; });
        return item;
    };
    var onDragCancel = function () {
        if (clonedItems) {
            // Reset items to their original state in case items have been
            // Dragged across containers
            setItems(clonedItems);
        }
        setActiveId(null);
        setClonedItems(null);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        requestAnimationFrame(function () {
            recentlyMovedToNewContainer.current = false;
        });
    }, [items]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DndContext, { sensors: sensors, collisionDetection: collisionDetectionStrategy, measuring: {
            droppable: {
                strategy: _dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.MeasuringStrategy.Always,
            }
        }, onDragStart: function (_a) {
            var active = _a.active;
            setActiveId(active.id);
            setClonedItems(items);
        }, onDragOver: function (_a) {
            var active = _a.active, over = _a.over;
            var overId = over === null || over === void 0 ? void 0 : over.id;
            console.log("overId", overId);
            if (overId == null || overId === TRASH_ID || active.id in items) {
                return;
            }
            var overContainer = findContainer(overId);
            if (overContainer === 'Opened Status') {
                return;
            }
            if (overContainer === 'Closed Status') {
                return;
            }
            var activeContainer = findContainer(active.id);
            if (!overContainer || !activeContainer) {
                return;
            }
            if (activeContainer !== overContainer) {
                setItems(function (items) {
                    var _a;
                    var activeItems = items[activeContainer];
                    var overItems = items[overContainer];
                    var overIndex = overItems.findIndex(function (item) { return item.id === overId; });
                    var activeIndex = activeItems.findIndex(function (item) { return item.id === active.id; });
                    var newIndex;
                    if (overId in items) {
                        newIndex = overItems.length + 1;
                    }
                    else {
                        var isBelowOverItem = over &&
                            active.rect.current.translated &&
                            active.rect.current.translated.top >
                                over.rect.top + over.rect.height;
                        var modifier = isBelowOverItem ? 1 : 0;
                        newIndex =
                            overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
                    }
                    recentlyMovedToNewContainer.current = true;
                    return __assign(__assign({}, items), (_a = {}, _a[activeContainer] = items[activeContainer].filter(function (item) { return item.id !== active.id; }), _a[overContainer] = __spreadArray(__spreadArray(__spreadArray([], items[overContainer].slice(0, newIndex), true), [
                        items[activeContainer][activeIndex]
                    ], false), items[overContainer].slice(newIndex, items[overContainer].length), true), _a));
                });
            }
        }, onDragEnd: function (_a) {
            var active = _a.active, over = _a.over;
            debugger;
            if (active.id in items && (over === null || over === void 0 ? void 0 : over.id)) {
                setContainers(function (containers) {
                    var activeIndex = containers.indexOf(active.id);
                    var overIndex = containers.indexOf(over.id);
                    return (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(containers, activeIndex, overIndex);
                });
            }
            var activeContainer = findContainer(active.id);
            if (!activeContainer) {
                setActiveId(null);
                return;
            }
            var overId = over === null || over === void 0 ? void 0 : over.id;
            if (overId == null) {
                setActiveId(null);
                return;
            }
            if (overId === TRASH_ID) {
                setItems(function (items) {
                    var _a;
                    return (__assign(__assign({}, items), (_a = {}, _a[activeContainer] = items[activeContainer].filter(function (item) { return item.id !== activeId; }), _a)));
                });
                setActiveId(null);
                return;
            }
            if (overId === PLACEHOLDER_ID) {
                var newContainerId_1 = getNextContainerId();
                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(function () {
                    setContainers(function (containers) { return __spreadArray(__spreadArray([], containers, true), [newContainerId_1], false); });
                    setItems(function (items) {
                        var _a;
                        return (__assign(__assign({}, items), (_a = {}, _a[activeContainer] = items[activeContainer].filter(function (item) { return item.id !== activeId; }), _a[newContainerId_1] = [active.id], _a)));
                    });
                    setActiveId(null);
                });
                return;
            }
            var overContainer = findContainer(overId);
            if (overContainer) {
                var activeIndex_1 = items[activeContainer].findIndex(function (item) { return item.id === active.id; });
                var overIndex_1 = items[overContainer].findIndex(function (item) { return item.id === overId; });
                if (activeIndex_1 !== overIndex_1) {
                    setItems(function (items) {
                        var _a;
                        return (__assign(__assign({}, items), (_a = {}, _a[overContainer] = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(items[overContainer], activeIndex_1, overIndex_1), _a)));
                    });
                }
            }
            setActiveId(null);
        }, cancelDrop: cancelDrop, onDragCancel: onDragCancel, modifiers: modifiers },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: {
                display: 'inline-grid',
                boxSizing: 'border-box',
                padding: 20,
                gridAutoFlow: vertical ? 'row' : 'column',
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableContext, { items: __spreadArray(__spreadArray([], containers, true), [PLACEHOLDER_ID], false), strategy: vertical
                    ? _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.verticalListSortingStrategy
                    : _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.horizontalListSortingStrategy }, containers.map(function (containerId) {
                var _a;
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DroppableContainer, { key: containerId, id: containerId, label: minimal ? undefined : "".concat(containerId), template: containerLabelTemplate, columns: columns, items: items[containerId], scrollable: scrollable, style: containerStyle, unstyled: minimal, onRemove: function () { return handleRemove(containerId); } },
                    (items[containerId].length === 0 && _tuval_core__WEBPACK_IMPORTED_MODULE_9__.is.function(placeholderTemplate)) ? ((_a = placeholderTemplate({ containerId: containerId })) === null || _a === void 0 ? void 0 : _a.render()) : void 0,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.SortableContext, { items: items[containerId], strategy: strategy }, items[containerId].map(function (value, index) {
                        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortableItem, { disabled: isSortingContainer, key: value.id, id: value.id, value: value, index: index, handle: handle, style: getItemStyles, wrapperStyle: wrapperStyle, renderItem: renderItem, template: template, containerId: containerId, getIndex: getIndex }));
                    })),
                    (containerId === 'Active Statuses' || containerId === 'Done Statuses') && ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_8__.UIViewBuilder)(function () {
                        var createStatus = (0,_hooks_useCreateStatus__WEBPACK_IMPORTED_MODULE_10__.useCreateStatus)().createStatus;
                        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_8__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_8__.Text)("Add Status"))
                            .cursor('pointer')
                            .width()
                            .background({ default: '#7b68ee', hover: '#5b43ea' })
                            .transition('all .2s cubic-bezier(.785,.135,.15,.86) 0s')
                            .foregroundColor('white')
                            .padding('0 10px')
                            .cornerRadius(4)
                            .height(28).fontSize(14)
                            .onClick(function () {
                            createStatus({
                                name: 'In Progress',
                                type: containerId === 'Active Statuses' ? 'active' : 'done',
                                bgColor: '#A875FF',
                                orderBy: new Date().getTime()
                            }, function (status) {
                                items[containerId].push({
                                    id: status.$id,
                                    title: status.name,
                                    color: status.bgColor,
                                    tyoe: containerId === 'Active Statuses' ? 'active' : 'done'
                                });
                                var _index = items[containerId].length - 1;
                                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(function () {
                                    setItems(function (items) {
                                        var _a;
                                        return (__assign(__assign({}, items), (_a = {}, _a[containerId] = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.arrayMove)(items[containerId], _index, _index), _a)));
                                    });
                                });
                            });
                        }));
                    })
                        .render())));
            }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.DragOverlay, { adjustScale: adjustScale, dropAnimation: dropAnimation }, activeId
            ? containers.includes(activeId)
                ? renderContainerDragOverlay(activeId)
                : renderSortableItemDragOverlay(activeId)
            : null),
        trashable && activeId && !containers.includes(activeId) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Trash, { id: TRASH_ID })) : null));
    function renderSortableItemDragOverlay(id) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_6__.Item, { value: getItem(id), handle: handle, style: getItemStyles({
                containerId: findContainer(id),
                overIndex: -1,
                index: getIndex(id),
                value: id,
                isSorting: true,
                isDragging: true,
                isDragOverlay: true,
            }), color: getColor(id), wrapperStyle: wrapperStyle({ index: 0 }), renderItem: renderItem, template: template, dragOverlay: true }));
    }
    function renderContainerDragOverlay(containerId) {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Container__WEBPACK_IMPORTED_MODULE_7__.Container, { label: "".concat(containerId), columns: columns, style: {
                height: '100%',
            }, shadow: true, unstyled: false }, items[containerId].map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_6__.Item, { key: item, value: item, handle: handle, style: getItemStyles({
                containerId: containerId,
                overIndex: -1,
                index: getIndex(item),
                value: item,
                isDragging: false,
                isSorting: false,
                isDragOverlay: false,
            }), color: getColor(item), wrapperStyle: wrapperStyle({ index: index }), renderItem: renderItem, template: template })); })));
    }
    function handleRemove(containerID) {
        setContainers(function (containers) {
            return containers.filter(function (id) { return id !== containerID; });
        });
    }
    function handleAddColumn() {
        var newContainerId = getNextContainerId();
        (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates)(function () {
            setContainers(function (containers) { return __spreadArray(__spreadArray([], containers, true), [newContainerId], false); });
            setItems(function (items) {
                var _a;
                return (__assign(__assign({}, items), (_a = {}, _a[newContainerId] = [], _a)));
            });
        });
    }
    function getNextContainerId() {
        var containerIds = Object.keys(items);
        var lastContainerId = containerIds[containerIds.length - 1];
        return String.fromCharCode(lastContainerId.charCodeAt(0) + 1);
    }
}
function getColor(id) {
    switch (String(id)[0]) {
        case 'A':
            return '#7193f1';
        case 'B':
            return '#ffda6c';
        case 'C':
            return '#00bcd4';
        case 'D':
            return '#ef769f';
    }
    return undefined;
}
function Trash(_a) {
    var id = _a.id;
    var _b = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_2__.useDroppable)({
        id: id,
    }), setNodeRef = _b.setNodeRef, isOver = _b.isOver;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: setNodeRef, style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            left: '50%',
            marginLeft: -150,
            bottom: 20,
            width: 300,
            height: 60,
            borderRadius: 5,
            border: '1px solid',
            borderColor: isOver ? 'red' : '#DDD',
        } }, "Drop here to delete"));
}
function SortableItem(_a) {
    var disabled = _a.disabled, id = _a.id, value = _a.value, index = _a.index, handle = _a.handle, renderItem = _a.renderItem, template = _a.template, style = _a.style, containerId = _a.containerId, getIndex = _a.getIndex, wrapperStyle = _a.wrapperStyle;
    var _b = (0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_3__.useSortable)({
        id: id,
    }), setNodeRef = _b.setNodeRef, setActivatorNodeRef = _b.setActivatorNodeRef, listeners = _b.listeners, isDragging = _b.isDragging, isSorting = _b.isSorting, over = _b.over, overIndex = _b.overIndex, transform = _b.transform, transition = _b.transition;
    var mounted = useMountStatus();
    var mountedWhileDragging = isDragging && !mounted;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Item__WEBPACK_IMPORTED_MODULE_6__.Item, { ref: disabled ? undefined : setNodeRef, value: value, dragging: isDragging, sorting: isSorting, handle: handle, handleProps: handle ? { ref: setActivatorNodeRef } : undefined, index: index, wrapperStyle: wrapperStyle({ index: index }), style: style({
            index: index,
            value: id,
            isDragging: isDragging,
            isSorting: isSorting,
            overIndex: over ? getIndex(over.id) : overIndex,
            containerId: containerId,
        }), color: getColor(id), transition: transition, transform: transform, fadeIn: mountedWhileDragging, listeners: listeners, renderItem: renderItem, template: template }));
}
function useMountStatus() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isMounted = _a[0], setIsMounted = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timeout = setTimeout(function () { return setIsMounted(true); }, 500);
        return function () { return clearTimeout(timeout); };
    }, []);
    return isMounted;
}


/***/ }),

/***/ "./src/routes/settings/statuses/views/multipleContainersKeyboardCoordinates.ts":
/*!*************************************************************************************!*\
  !*** ./src/routes/settings/statuses/views/multipleContainersKeyboardCoordinates.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   coordinateGetter: () => (/* binding */ coordinateGetter)
/* harmony export */ });
/* harmony import */ var _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dnd-kit/core */ "./node_modules/@dnd-kit/core/dist/core.esm.js");

var directions = [
    _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Down,
    _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Right,
    _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Up,
    _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Left,
];
var coordinateGetter = function (event, _a) {
    var _b;
    var _c = _a.context, active = _c.active, droppableRects = _c.droppableRects, droppableContainers = _c.droppableContainers, collisionRect = _c.collisionRect;
    if (directions.includes(event.code)) {
        event.preventDefault();
        if (!active || !collisionRect) {
            return;
        }
        var filteredContainers_1 = [];
        droppableContainers.getEnabled().forEach(function (entry) {
            var _a;
            if (!entry || (entry === null || entry === void 0 ? void 0 : entry.disabled)) {
                return;
            }
            var rect = droppableRects.get(entry.id);
            if (!rect) {
                return;
            }
            var data = entry.data.current;
            if (data) {
                var type = data.type, children = data.children;
                if (type === 'container' && (children === null || children === void 0 ? void 0 : children.length) > 0) {
                    if (((_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type) !== 'container') {
                        return;
                    }
                }
            }
            switch (event.code) {
                case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Down:
                    if (collisionRect.top < rect.top) {
                        filteredContainers_1.push(entry);
                    }
                    break;
                case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Up:
                    if (collisionRect.top > rect.top) {
                        filteredContainers_1.push(entry);
                    }
                    break;
                case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Left:
                    if (collisionRect.left >= rect.left + rect.width) {
                        filteredContainers_1.push(entry);
                    }
                    break;
                case _dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.KeyboardCode.Right:
                    if (collisionRect.left + collisionRect.width <= rect.left) {
                        filteredContainers_1.push(entry);
                    }
                    break;
            }
        });
        var collisions = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.closestCorners)({
            active: active,
            collisionRect: collisionRect,
            droppableRects: droppableRects,
            droppableContainers: filteredContainers_1,
            pointerCoordinates: null,
        });
        var closestId = (0,_dnd_kit_core__WEBPACK_IMPORTED_MODULE_0__.getFirstCollision)(collisions, 'id');
        if (closestId != null) {
            var newDroppable = droppableContainers.get(closestId);
            var newNode = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.node.current;
            var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
            if (newNode && newRect) {
                if (newDroppable.id === 'placeholder') {
                    return {
                        x: newRect.left + (newRect.width - collisionRect.width) / 2,
                        y: newRect.top + (newRect.height - collisionRect.height) / 2,
                    };
                }
                if (((_b = newDroppable.data.current) === null || _b === void 0 ? void 0 : _b.type) === 'container') {
                    return {
                        x: newRect.left + 20,
                        y: newRect.top + 74,
                    };
                }
                return {
                    x: newRect.left,
                    y: newRect.top,
                };
            }
        }
    }
    return undefined;
};


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

/***/ "./src/routes/settings/taskTypes/+controller.ts":
/*!******************************************************!*\
  !*** ./src/routes/settings/taskTypes/+controller.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskTypesController: () => (/* binding */ TaskTypesController)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Icons */ "./src/Icons.tsx");
/* harmony import */ var _hooks_useListTaskType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useListTaskType */ "./src/hooks/useListTaskType.ts");
/* harmony import */ var _hooks_useUpdateTaskTypeOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useUpdateTaskTypeOrder */ "./src/hooks/useUpdateTaskTypeOrder.ts");
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




var TaskTypesController = /** @class */ (function (_super) {
    __extends(TaskTypesController, _super);
    function TaskTypesController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskTypesController.prototype.LoadView = function () {
        var _a = (0,_hooks_useListTaskType__WEBPACK_IMPORTED_MODULE_2__.useListTaskType)(), taskTypes = _a.taskTypes, isLoading = _a.isLoading;
        var updateTaskTypeOrder = (0,_hooks_useUpdateTaskTypeOrder__WEBPACK_IMPORTED_MODULE_3__.useUpdateTaskTypeOrder)().updateTaskTypeOrder;
        return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Fragment)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
                var _a = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useState)(taskTypes), items = _a[0], setItems = _a[1];
                return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)('Task Types').fontSize(18).fontWeight('500')
                    .fontFamily('Inter Variable,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial')
                    .foregroundColor('rgb(42, 46, 52)')
                    .lineHeight(32))
                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 16)
                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, 20)
                    .borderBottom('solid 1px #E2E8F0')
                    .height()
                    .margin('0 0 30px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.SortableListView)()
                    .items(items == null ? [] : items.map(function (item) { return (__assign({ id: item.$id }, item)); }))
                    .renderItem(function (item) {
                    return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(_Icons__WEBPACK_IMPORTED_MODULE_1__.Icons["icon1"]))
                        .background('#C2EFFF')
                        .cornerRadius(4)
                        .width(20)
                        .height(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(item.name))
                        .background('white')
                        .cornerRadius(6)
                        .border('solid 1px #F3F3F3')
                        .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cVertical, 10)
                        .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 5)
                        .marginBottom(5));
                })
                    .width('100%')
                    .onChange(function (e) {
                    e.forEach(function (item, index) {
                        item.orderBy = index;
                    });
                    e.forEach(function (item) {
                        var _ = taskTypes.find(function (taskType) { return taskType.$id === item.$id; });
                        if (_.orderBy !== item.orderBy) {
                            updateTaskTypeOrder(_.$id, item.orderBy);
                        }
                    });
                    setItems(e);
                }))
                    .padding()
                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 20))
                    .height()
                    .background('white')
                    .cornerRadius(8)
                    .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                    .border('solid 1px #E2E8F0'))
                    .padding('20px')
                    .background('#F8FAFC'));
            }));
    };
    return TaskTypesController;
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

/***/ "./src/views/HeaderButton.ts":
/*!***********************************!*\
  !*** ./src/views/HeaderButton.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderButton: () => (/* binding */ HeaderButton)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var HeaderButton = function (label, icon) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(label)
    .fontFamily('ui-sans-serif, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
    .fontSize(14)
    .fontWeight('500'))
    .transition('all .15s ease-out')
    .height(28)
    .foregroundColor('rgb(109, 122, 131)')
    .width()
    .background({ hover: 'rgba(109,122,131,0.15)' })
    .cursor('pointer')
    .cornerRadius(6)
    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 10)); };


/***/ }),

/***/ "./src/views/TaskHeader.ts":
/*!*********************************!*\
  !*** ./src/views/TaskHeader.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskHeader: () => (/* binding */ TaskHeader)
/* harmony export */ });
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/core */ "@tuval/core");
/* harmony import */ var _tuval_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);


var fontFamily = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var TaskHeader = function (header, onHeaderChange, headerIcon) {
    if (onHeaderChange === void 0) { onHeaderChange = void 0; }
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading, spacing: 5 })(headerIcon ? headerIcon : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)(), 
        //  _StatusMarker(task?.stage_id),
        _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.string(header) ?
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.EditableHeader)(header).size(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.EditableHeadingSizes.MEDIUM)
                .onChange(function (e) { return onHeaderChange(e); })
                .fontSmoothing('auto')
                .foregroundColor('#212526')
                .fontSize(28).fontFamily(fontFamily).fontWeight('500')
                .lineHeight('1.25')
                .kerning('-0.003em')
            :
                _tuval_core__WEBPACK_IMPORTED_MODULE_0__.is.function(header) ? header() : (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Fragment)()).height().padding(8));
    });
};


/***/ }),

/***/ "./src/views/ViewHeader.tsx":
/*!**********************************!*\
  !*** ./src/views/ViewHeader.tsx ***!
  \**********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeaderButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderButton */ "./src/views/HeaderButton.ts");






var AutomationIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.114 1.055a.75.75 0 0 1 .463.79l-.726 5.738h4.437c.2 0 .398 0 .56.015.153.014.43.05.67.243.279.223.44.562.436.92-.003.307-.15.544-.237.672-.09.134-.216.287-.343.443l-.008.009L9.767 18.7a.75.75 0 0 1-1.344-.544l.726-5.74H4.712c-.2 0-.398 0-.56-.014-.153-.014-.43-.05-.67-.243a1.167 1.167 0 0 1-.436-.92c.003-.307.15-.544.237-.672.09-.134.216-.287.343-.443l.008-.009 6.599-8.814a.75.75 0 0 1 .881-.246Zm-6.207 9.862H10a.75.75 0 0 1 .744.844l-.477 3.768 4.826-6.446H10a.75.75 0 0 1-.744-.844l.477-3.768-4.826 6.446Z" }))); };
var AccessTemplatesIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.25v1.25H6.667a2.417 2.417 0 0 0-2.417 2.417V12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.25v-.333a.917.917 0 0 1 .917-.917h6.666a.917.917 0 0 1 .917.917V12H14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.25v-.333a2.417 2.417 0 0 0-2.417-2.417H10.75V8H11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9Zm-.5 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V4ZM4 13.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Zm10 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2Z" }))); };
var RelationsIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_4___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { d: "M7.303 7.774a.75.75 0 0 1 0-.577A.75.75 0 0 1 8 6.732h4.652a.75.75 0 0 1 .287.064.703.703 0 0 1 .402.402.75.75 0 0 1 .064.287v4.55a.753.753 0 0 1-1.505.001l.004-2.743-4.025 4.025a.75.75 0 0 1-1.06-1.06l4.025-4.025-2.845.005a.75.75 0 0 1-.696-.464Z" }),
        react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.555 3.348a8 8 0 1 1 8.89 13.304 8 8 0 0 1-8.89-13.304Zm.89 11.973a6.4 6.4 0 1 0 7.11-10.643 6.4 6.4 0 0 0-7.11 10.643Z" })))); };
var fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif';
var ViewHeader = function (header, onHeaderChange) {
    if (onHeaderChange === void 0) { onHeaderChange = void 0; }
    return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIViewBuilder)(function () {
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.useDialogStack)().openDialog;
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_1__.useApplet)().applet;
        var updateDocument = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_2__.useUpdateDocument)(realm.$id).updateDocument;
        return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.UIWidget)("com.tuvalsoft.widget.icons")
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
        })).width().height(), _tuval_core__WEBPACK_IMPORTED_MODULE_3__.is.string(header) ?
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
            .height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ spacing: 5 })((0,_HeaderButton__WEBPACK_IMPORTED_MODULE_5__.HeaderButton)('Automations', AutomationIcon), (0,_HeaderButton__WEBPACK_IMPORTED_MODULE_5__.HeaderButton)('Access Templates', AccessTemplatesIcon), (0,_HeaderButton__WEBPACK_IMPORTED_MODULE_5__.HeaderButton)('Relations', RelationsIcon)).width()
            .background('white')
            .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cHorizontal, 20)).height())
            .height());
    });
};


/***/ }),

/***/ "./src/widgets/TaskListView/TaslListViewWidget.ts":
/*!********************************************************!*\
  !*** ./src/widgets/TaskListView/TaslListViewWidget.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskListViewWidget: () => (/* binding */ TaskListViewWidget)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useListViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useListViews */ "./src/hooks/useListViews.ts");
/* harmony import */ var _routes_lists_view_viewId_views_ListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/lists/view-[viewId]/views/ListView */ "./src/routes/lists/view-[viewId]/views/ListView.tsx");
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/ActionPanel */ "./src/views/ActionPanel.tsx");
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





var fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", roboto, "Helvetica Neue", helvetica, arial, sans-serif';
var TaskListViewWidget = /** @class */ (function (_super) {
    __extends(TaskListViewWidget, _super);
    function TaskListViewWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskListViewWidget.prototype.LoadView = function () {
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var _a = this.props.config, realmId = _a.realmId, appletId = _a.appletId;
        // const { applet, isLoading } = useGetApplet(realmId, appletId);
        return ((0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.WidgetContext)(function () {
            return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIViewBuilder)(function () {
                var _a = (0,_hooks_useListViews__WEBPACK_IMPORTED_MODULE_2__.useListViews)(), views = _a.views, isLoading = _a.isLoading;
                return (isLoading ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Spinner)() :
                    (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cTop })((0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_4__.ActionPanel)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_1__.cLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.Text)(applet.name).fontSmoothing('auto')
                        .foregroundColor('#212526')
                        .fontSize(24).fontFamily(fontFamily).fontWeight('500')
                        .lineHeight('1.25')
                        .kerning('-0.003em')).height().padding()
                        .borderBottom('1px solid rgba(0,0,0,.05)')
                        .padding('4px 16px 12px'), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.VStack)((0,_routes_lists_view_viewId_views_ListView__WEBPACK_IMPORTED_MODULE_3__.ListView)(views[0].$id))
                        .background('#F8FAFC'))));
            });
        }));
    };
    return TaskListViewWidget;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_1__.UIController));



/***/ }),

/***/ "./src/widgets/TaskViewWidget.tsx":
/*!****************************************!*\
  !*** ./src/widgets/TaskViewWidget.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskViewWidget: () => (/* binding */ TaskViewWidget)
/* harmony export */ });
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @celmino/platform */ "@celmino/platform");
/* harmony import */ var _celmino_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_celmino_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @realmocean/sdk */ "@realmocean/sdk");
/* harmony import */ var _realmocean_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetTask */ "./src/hooks/useGetTask.ts");
/* harmony import */ var _views_ActionPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/ActionPanel */ "./src/views/ActionPanel.tsx");
/* harmony import */ var _views_TaskHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/TaskHeader */ "./src/views/TaskHeader.ts");
/* harmony import */ var _views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/InlineTitle */ "./src/widgets/views/InlineTitle.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
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








var DescriptionIcon = function () { return (react__WEBPACK_IMPORTED_MODULE_7___default().createElement("svg", { viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", "aria-hidden": "true" },
    react__WEBPACK_IMPORTED_MODULE_7___default().createElement("g", null,
        react__WEBPACK_IMPORTED_MODULE_7___default().createElement("path", { d: "M10.7 6.571h5.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.555.837.837 0 0 0-.205-.556A.664.664 0 0 0 16.3 5h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.148.31.23.495.23Zm0 7.857h-7a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .209.074.409.205.556.131.147.31.23.495.23h7a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.664.664 0 0 0-.495-.23Zm5.6-3.142H3.7a.663.663 0 0 0-.495.23.837.837 0 0 0-.205.555c0 .209.074.409.205.556.131.147.31.23.495.23h12.6a.664.664 0 0 0 .495-.23.837.837 0 0 0 .205-.556.837.837 0 0 0-.205-.555.663.663 0 0 0-.495-.23Zm0-3.143h-5.6a.664.664 0 0 0-.495.23.837.837 0 0 0-.205.556c0 .208.074.408.205.555.131.147.31.23.495.23h5.6a.664.664 0 0 0 .495-.23A.837.837 0 0 0 17 8.93a.837.837 0 0 0-.205-.556.664.664 0 0 0-.495-.23ZM8.6 3.314H3.8a.8.8 0 1 0 0 1.6h1.6v4a.8.8 0 1 0 1.6 0v-4h1.6a.8.8 0 0 0 0-1.6Z" })))); };
var TaskViewWidget = /** @class */ (function (_super) {
    __extends(TaskViewWidget, _super);
    function TaskViewWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TaskViewWidget.prototype.LoadView = function () {
        var realm = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useRealm)().realm;
        var applet = (0,_celmino_platform__WEBPACK_IMPORTED_MODULE_0__.useApplet)().applet;
        var _a = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(realm.$id, 'workspace', 'applets'), applets = _a.documents, isAppletsLoading = _a.isLoading;
        var _b = (0,_realmocean_sdk__WEBPACK_IMPORTED_MODULE_1__.useListDocuments)(realm.$id, 'workspace', 'ws_tree'), treeItems = _b.documents, isTreeItemsLoading = _b.isLoading;
        var _c = this.props.config || {}, taskId = _c.taskId, fields = _c.fields, _d = _c.views, views = _d === void 0 ? [] : _d, _e = _c.powerUps, powerUps = _e === void 0 ? [] : _e, _f = _c.selectedViewIndex, selectedViewIndex = _f === void 0 ? 0 : _f, _g = _c.objectViews, objectViews = _g === void 0 ? [] : _g, _h = _c.description, description = _h === void 0 ? null : _h, _j = _c.onDescriptionChange, onDescriptionChange = _j === void 0 ? void 0 : _j;
        var _k = (0,_hooks_useGetTask__WEBPACK_IMPORTED_MODULE_3__.useGetTask)(taskId), task = _k.task, isLoading = _k.isLoading;
        var openDialog = (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.useDialogStack)().openDialog;
        //  const [widgetController, setWidgetController] = useState<any>({ controller: WidgetController });
        // const _WidgetController = widgetController.controller;
        return ((isAppletsLoading || isTreeItemsLoading || isLoading) ? (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Spinner)() :
            (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.ConfigContext)(function () {
                return (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })(
                //    Text(JSON.stringify(description)),
                (0,_views_ActionPanel__WEBPACK_IMPORTED_MODULE_4__.ActionPanel)(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 12 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_views_TaskHeader__WEBPACK_IMPORTED_MODULE_5__.TaskHeader)(task.name, function () { return void 0; }, null), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 10 })((0,_views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__.InlineTitle)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-userStatus'), 'Status'), (0,_views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__.InlineTitle)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-calendar'), 'Dates'), (0,_views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__.InlineTitle)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-timeTracking'), 'Track Time')), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading, spacing: 10 })((0,_views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__.InlineTitle)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-userStatus'), 'Status'), (0,_views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__.InlineTitle)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-calendar'), 'Dates'), (0,_views_InlineTitle__WEBPACK_IMPORTED_MODULE_6__.InlineTitle)((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.SvgIcon)('cu3-icon-timeTracking'), 'Track Time'))).height()
                    .padding(20), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.HStack)({ spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Icon)(DescriptionIcon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.Text)('Description').foregroundColor('rgb(101, 111, 125)')).width().height(), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.VStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cTopLeading })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIWidget)('com.tuvalsoft.widget.blocknote')
                    .config({
                    defaultValue: null,
                    clamp: true,
                    workspaceId: realm.$id,
                    appletId: applet.$id,
                    applets: applets,
                    treeItems: treeItems,
                    onChange: function (data) {
                        console.log(data);
                        /*  updateDocument({
                             databaseId: appletId,
                             collectionId: 'documentContent',
                             documentId: documentId,
                             data: {
                                 content: JSON.stringify(data)
                             }
                         }) */
                    }
                }))
                    .border('solid 1px #E8EAED')
                    .cornerRadius(6)
                    .padding(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.cVertical, 20))
                    .minHeight(300)
                    .padding(20)
                    .height()
                /*    UIWidget('com.celmino.widget.tab-view')
                       .config({
                           allViews: views,
                           views: objectViews,
                          
                           onChange: (index) => {
                                 setWidgetController({
                                   controller: class extends WidgetController { }
                               });
                             },
                           actions: [
                               {
                                   title: 'View',
                                   onClick: () => {
                                       SelectViewDialog.Show(views, powerUps).then((view) => {
                                        
                                       });
                                   }
                               }
                           ]
                       }) */
                /* objectViews?.length > 0 ?

                    ReactView(
                        <_WidgetController
                            objectId={objectId}
                            view={objectViews?.[selectedViewIndex]?.view}
                            defaultValue={selectedViewIndex === 0 ? description : objectViews?.[selectedViewIndex]?.data || {}}
                            onChange={(data) => {
                                if (selectedViewIndex === 0) {
                                    onDescriptionChange(data);
                                }
                                else {
                                   
                                }
                            }}
                        ></_WidgetController>
                    )


                    : Fragment() */
                )
                    .width(null)
                    .flexBasis('0')
                    .flexGrow('1')
                    .flexShrink('0')
                    .overflowX('auto')))
                //.padding('4px 36px 12px')
                );
            }).config(this.props.config));
    };
    return TaskViewWidget;
}(_tuval_forms__WEBPACK_IMPORTED_MODULE_2__.UIController));



/***/ }),

/***/ "./src/widgets/views/InlineTitle.ts":
/*!******************************************!*\
  !*** ./src/widgets/views/InlineTitle.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineTitle: () => (/* binding */ InlineTitle)
/* harmony export */ });
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tuval/forms */ "@tuval/forms");
/* harmony import */ var _tuval_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tuval_forms__WEBPACK_IMPORTED_MODULE_0__);

var InlineTitle = function (icon, title) { return ((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.HStack)({ alignment: _tuval_forms__WEBPACK_IMPORTED_MODULE_0__.cLeading, spacing: 5 })((0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Icon)(icon), (0,_tuval_forms__WEBPACK_IMPORTED_MODULE_0__.Text)(title)).foregroundColor('rgb(101, 111, 125)').allWidth(100)); };


/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/***/ ((module) => {

module.exports = {
    application: {
        name: 'com.celmino.applet.task-list',
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

/***/ }),

/***/ "react-dom":
/*!***********************************!*\
  !*** external "tuval$react$_dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = tuval$react$_dom;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/* harmony import */ var _widgets_TaskViewWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/TaskViewWidget */ "./src/widgets/TaskViewWidget.tsx");
/* harmony import */ var _widgets_TaskListView_TaslListViewWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/TaskListView/TaslListViewWidget */ "./src/widgets/TaskListView/TaslListViewWidget.ts");
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
            applet: _routes_routes__WEBPACK_IMPORTED_MODULE_0__.RouteController,
            taskView: _widgets_TaskViewWidget__WEBPACK_IMPORTED_MODULE_2__.TaskViewWidget,
            taskListView: _widgets_TaskListView_TaslListViewWidget__WEBPACK_IMPORTED_MODULE_3__.TaskListViewWidget
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
                    tuval$core.ModuleLoader.FireModuleLoadedEvent('com.celmino.applet.task-list', tuval$core['__APPS__']['com.celmino.applet.task-list']);
                    