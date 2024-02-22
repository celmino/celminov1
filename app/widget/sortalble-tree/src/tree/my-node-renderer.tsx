import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isDescendant } from './utils/tree-data-utils';
import classnames from './utils/classnames';
import { HStack, Text, Icon, Icons, Fragment, ReactView, UIWidget } from '@tuval/forms'
import { is } from '@tuval/core'

export const CaretDown1 = props => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M13.276 8.5 8.813 4.294C8.143 3.666 7 4.111 7 5v10c0 .89 1.144 1.334 1.813.706l4.463-4.206c.965-1 .965-2 0-3Z"></path></svg>
)

function getParentCount(node) {
    let count = 1;
    while (node) {
        count++;
        node = node.parentNode;
    }
    return count;

}

class MyNodeRendererDefault extends React.Component<any, any> {
    render() {
        const {
            scaffoldBlockPxWidth,
            scaffoldBlockCount,
            toggleChildrenVisibility,
            connectDragPreview,
            connectDragSource,
            isDragging,
            canDrop,
            canDrag,
            node,
            title,
            subtitle,
            draggedNode,
            path,
            treeIndex,
            isSearchMatch,
            isSearchFocus,
            buttons,
            className,
            style,
            didDrop,
            treeId,
            isOver, // Not needed, but preserved for other renderers
            parentNode, // Needed for dndManager
            rowDirection,
            ...otherProps
        } = this.props;
        const nodeTitle = title || node.title;
        const nodeSubtitle = subtitle || node.subtitle;
        const rowDirectionClass = rowDirection === 'rtl' ? 'rst__rtl' : null;


        let handle;
        if (canDrag) {
            if (typeof node.children === 'function' && node.expanded) {
                // Show a loading symbol on the handle when the children are expanded
                //  and yet still defined by a function (a callback to fetch the children)
                handle = (
                    <div className="rst__loadingHandle">
                        <div className="rst__loadingCircle">
                            {[...new Array(12)].map((_, index) => (
                                <div
                                    // eslint-disable-next-line react/no-array-index-key
                                    key={index}
                                    className={classnames(
                                        'rst__loadingCirclePoint',
                                        rowDirectionClass
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                );
            } else {
                // Show the handle used to initiate a drag-and-drop
                handle = connectDragSource(<div>
                    {
                        HStack({ alignment: 'cLeading' })(
                            /*   HStack(
                                  Icon(Icons.Drag)
                              ).width(16), */
                            HStack(
                                Text(nodeTitle)
                            )
                                .onClick(() => {
                                    alert('clicked')
                                })
                        ).render()
                    }

                </div>, {
                    dropEffect: 'copy',
                });
            }
        }

        const isDraggedDescendant = draggedNode && isDescendant(draggedNode, node);
        const isLandingPadActive = !didDrop && isDragging;

        let buttonStyle = { left: -0.5 * scaffoldBlockPxWidth };
        if (rowDirection === 'rtl') {
            buttonStyle = { right: -0.5 * scaffoldBlockPxWidth } as any;
        }

        
        return (

            HStack({ alignment: 'cLeading' })(
                ReactView(
                    <div style={{ height: '100%', width: '100%' }} {...otherProps}>
                        <div>
                            {
                                connectDragPreview(
                                    <div
                                        className={classnames(
                                            'rst__row',
                                            isLandingPadActive && 'rst__rowLandingPad',
                                            isLandingPadActive && !canDrop && 'rst__rowCancelPad',
                                            isSearchMatch && 'rst__rowSearchMatch',
                                            isSearchFocus && 'rst__rowSearchFocus',
                                            rowDirectionClass,
                                            className
                                        )}
                                        style={{
                                            opacity: isDraggedDescendant ? 0.5 : 1,
                                            ...style,
                                        }}
                                    >
                                        {
                                            HStack({ alignment: 'cLeading', spacing: 5 })(

                                                ReactView(
                                                    connectDragSource(<div style={{ width: '100%' }}>
                                                        {
                                                            HStack({ alignment: 'cLeading' })(
                                                                ReactView(
                                                                    toggleChildrenVisibility && node.children && (node.children.length > 0 || typeof node.children === 'function') && (
                                                                        <div>
                                                                           
                                                                           
                                                                            {
                                                                                
                                                                                HStack(
                                                                                    !is.nullOrEmpty(node.iconName) && 
                                                                                    HStack(
                                                                                        //   is.nullOrEmpty(iconName) ? requestIcon(nodeType, isSelected, expanded) /* Icon(WorkbenchIcons.DocIcon2) */ :
                                                                                        UIWidget("com.tuvalsoft.widget.icons")
                                                                                            .config({
                                                                                                readonly: true,
                                                                                                selectedIcon: 'bookmark',
                                                                                                selectedCategory: 'Icons',
                                                                                                color: 'gray',
                                                                                                backgroundColor: '',
                                                                                                width: 20,
                                                                                                height: 20,
                                                                                                padding: 1
                                                                                            })
                                                                                    )
                                                                                        .transition('opacity .12s ease-in-out')
                                                                                        .position('absolute')
                                                                                        //.background('#FCE8E8')
                                                                                        .allWidth(18).allHeight(18)
                                                                                        .opacity( 'var(--opacity-icon)')
                                                                                        .cornerRadius(5),
                                                                                    HStack(
                                                                                        Icon(CaretDown1).transform(node.expanded ? 'rotate(90deg)' : '')
                                                                                            .transition('transform .12s ease-in-out')
                                                                                    )
                                                                                        .position('absolute')

                                                                                        .transition('opacity .12s ease-in-out')
                                                                                        .foregroundColor('rgba(109,122,131,0.9)')
                                                                                        .allWidth(20).allHeight(20).cursor('pointer')
                                                                                        .opacity(is.nullOrEmpty(node.iconName) ? '1' : `var(--opacity-caret)`)
                                                                                        .onClick(() =>
                                                                                            toggleChildrenVisibility({
                                                                                                node,
                                                                                                path,
                                                                                                treeIndex,
                                                                                            })
                                                                                        )
                                                                                )
                                                                                    .allWidth(30).allHeight(30)
                                                                                    .transition('transform .12s ease-in-out')

                                                                                    .render()



                                                                            }


                                                                            {node.expanded && !isDragging && (
                                                                                <div
                                                                                    style={{ width: scaffoldBlockPxWidth }}
                                                                                    className={classnames('rst__lineChildren', rowDirectionClass)}
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    )
                                                                ),
                                                                (node.children == null || node.children.length === 0) && (
                                                                    HStack(
                                                                        HStack(
                                                                            //   is.nullOrEmpty(iconName) ? requestIcon(nodeType, isSelected, expanded) /* Icon(WorkbenchIcons.DocIcon2) */ :
                                                                            UIWidget("com.tuvalsoft.widget.icons")
                                                                                .config({
                                                                                    readonly: true,
                                                                                    selectedIcon: 'bookmark',
                                                                                    selectedCategory: 'Icons',
                                                                                    color: 'gray',
                                                                                    backgroundColor: '',
                                                                                    width: 20,
                                                                                    height: 20,
                                                                                    padding: 1
                                                                                })
                                                                        )
                                                                            .transition('opacity .12s ease-in-out')
                                                                            // .position('absolute')
                                                                            //.background('#FCE8E8')
                                                                            .allWidth(18).allHeight(18)
                                                                            // .opacity('var(--opacity-icon)')
                                                                            .cornerRadius(5)
                                                                    )
                                                                        .allWidth(30).allHeight(30)
                                                                        .transition('transform .12s ease-in-out')

                                                                ),

                                                                is.function(node.view) ? node.view(node, () => toggleChildrenVisibility({
                                                                    node,
                                                                    path,
                                                                    treeIndex,
                                                                })) :
                                                                    HStack({ alignment: 'cLeading' })(
                                                                        Text(nodeTitle)
                                                                    )
                                                            )
                                                                .cursor('pointer')
                                                                .render()
                                                        }

                                                    </div>, {
                                                        dropEffect: 'copy',
                                                    }))
                                            ).render()


                                        }



                                    </div>
                                )}
                        </div>
                    </div>
                )
            )
                .cornerRadius(6)
                .background({ default: node.isSelected ? '#E6EDFE' : '', hover: '#EBEDEF' })
               // .transition('all .12s ease-in-out')
                .paddingLeft(`${(scaffoldBlockCount-1) * 20}px`)
                //  .paddingLeft(parentNode != null ? `${getParentCount(parentNode) * 20}px` : '')
                .variable(`--opacity-caret`, { default: '0', hover: '1' })
                .variable(`--opacity-icon`, { default: '1', hover: '0' }).render()
        )

    }
}

(MyNodeRendererDefault as any).defaultProps = {
    isSearchMatch: false,
    isSearchFocus: false,
    canDrag: false,
    toggleChildrenVisibility: null,
    buttons: [],
    className: '',
    style: {},
    parentNode: null,
    draggedNode: null,
    canDrop: false,
    title: null,
    subtitle: null,
    rowDirection: 'ltr',
};

(MyNodeRendererDefault as any).propTypes = {
    node: PropTypes.shape({}).isRequired,
    title: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    subtitle: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    path: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ).isRequired,
    treeIndex: PropTypes.number.isRequired,
    treeId: PropTypes.string.isRequired,
    isSearchMatch: PropTypes.bool,
    isSearchFocus: PropTypes.bool,
    canDrag: PropTypes.bool,
    scaffoldBlockPxWidth: PropTypes.number.isRequired,
    toggleChildrenVisibility: PropTypes.func,
    buttons: PropTypes.arrayOf(PropTypes.node),
    className: PropTypes.string,
    style: PropTypes.shape({}),

    // Drag and drop API functions
    // Drag source
    connectDragPreview: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    parentNode: PropTypes.shape({}), // Needed for dndManager
    isDragging: PropTypes.bool.isRequired,
    didDrop: PropTypes.bool.isRequired,
    draggedNode: PropTypes.shape({}),
    // Drop target
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool,

    // rtl support
    rowDirection: PropTypes.string,
};

export default MyNodeRendererDefault;
