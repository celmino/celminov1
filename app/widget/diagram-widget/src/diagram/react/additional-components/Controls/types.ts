import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { PanelPosition } from '../../../system'

import type { FitViewOptions } from '../../types';

export type ControlProps = {
  /** Show button for zoom in/out */
  showZoom?: boolean;
  /** Show button for fit view */
  showFitView?: boolean;
  /** Show button for toggling interactivity */
  showInteractive?: boolean;
  /** Options being used when fit view button is clicked */
  fitViewOptions?: FitViewOptions;
  /** Callback when zoom in button is clicked */
  onZoomIn?: () => void;
  /** Callback when zoom out button is clicked */
  onZoomOut?: () => void;
  /** Callback when fit view button is clicked */
  onFitView?: () => void;
  /** Callback when interactivity is toggled */
  onInteractiveChange?: (interactiveStatus: boolean) => void;
  /** Position of the controls on the pane
   * @example PanelPosition.TopLeft, PanelPosition.TopRight,
   * PanelPosition.BottomLeft, PanelPosition.BottomRight
   */
  position?: PanelPosition;
  children?: ReactNode;
  /** Style applied to container */
  style?: React.CSSProperties;
  /** ClassName applied to container */
  className?: string;
  'aria-label'?: string;
};

export type ControlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
