import './MyLabel.css';

/**
 * Primary UI component for display information
 */
export const MyLabel = ({ label = 'No Label', size = 'normal' }: MyLabelProps) => {
	return <span className={`${size}`}>{label}</span>;
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
}
