import './MyLabel.css';

export const MyLabel = ({ label = 'No Label', size = 'normal' }: MyLabelProps) => {
	return <span className={`${size}`}>{label}</span>;
};

interface MyLabelProps {
	label: string;
	size: 'normal' | 'h1' | 'h2' | 'h3';
}
