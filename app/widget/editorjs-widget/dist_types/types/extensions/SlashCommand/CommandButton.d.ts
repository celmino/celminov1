import { icons } from 'lucide-react';
import React from 'react';
export type CommandButtonProps = {
    active?: boolean;
    description: string;
    icon: keyof typeof icons;
    onClick: () => void;
    title: string;
};
export declare const CommandButton: React.ForwardRefExoticComponent<CommandButtonProps & React.RefAttributes<HTMLButtonElement>>;
