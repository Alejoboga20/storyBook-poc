import './MyLabel.css';

/**
 * Primary UI component for display information
 */
export const MyLabel = ({
	allCaps = false,
	color = 'primary',
	label = 'No Label',
	size = 'normal',
	fontColor = '',
	backgroundColor = 'transparent',
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ color: fontColor, backgroundColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};

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

export default MyLabel;
