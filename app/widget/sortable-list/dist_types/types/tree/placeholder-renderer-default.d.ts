import React from 'react';
import PropTypes from 'prop-types';
declare const PlaceholderRendererDefault: {
    ({ isOver, canDrop }: {
        isOver: any;
        canDrop: any;
    }): React.JSX.Element;
    defaultProps: {
        isOver: boolean;
        canDrop: boolean;
    };
    propTypes: {
        isOver: PropTypes.Requireable<boolean>;
        canDrop: PropTypes.Requireable<boolean>;
    };
};
export default PlaceholderRendererDefault;
