import './MyLabel.css';

/**
 * Primary UI component for display information
 */
export const MyLabel = ({
	allCaps = false,
	color = 'primary',
	label = 'No Label',
	size = 'normal',
}: MyLabelProps) => {
	return <span className={`${size} text-${color}`}>{allCaps ? label.toUpperCase() : label}</span>;
};

interface MyLabelProps {
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
}
