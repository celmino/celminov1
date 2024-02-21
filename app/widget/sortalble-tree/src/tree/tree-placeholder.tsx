import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';

class TreePlaceholder extends React.Component<any,any> {
  render() {
    const {
      children,
      connectDropTarget,
      treeId,
      drop,
      ...otherProps
    } = this.props;
    return connectDropTarget(
      <div>
        {Children.map(children, child =>
          cloneElement(child, {
            ...otherProps,
          })
        )}
      </div>
    );
  }
}

(TreePlaceholder as any).defaultProps = {
  canDrop: false,
  draggedNode: null,
};

(TreePlaceholder as any).propTypes = {
  children: PropTypes.node.isRequired,

  // Drop target
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool,
  draggedNode: PropTypes.shape({}),
  treeId: PropTypes.string.isRequired,
  drop: PropTypes.func.isRequired,
};

export default TreePlaceholder;
