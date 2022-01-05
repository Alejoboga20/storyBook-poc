/// <reference types="react" />
import './MyLabel.css';
/**
 * Primary UI component for display information
 */
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
export interface MyLabelProps {
    /**
     * This is the content displayed in MyLabel
     */
    label: string;
    /**
     * What size to use
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Select text color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Capitilize label when is true
     */
    allCaps?: boolean;
    /**
     * Customize font color
     */
    fontColor?: string;
    /**
     * Background behind label
     */
    backgroundColor?: string;
}
