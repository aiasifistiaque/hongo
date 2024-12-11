import { useColors } from '@/hooks';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Button, ButtonProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type IconButtonProps = ButtonProps & {
	children?: string | ReactNode;
	leftIcon?: ReactNode;
};

const IconButton: FC<IconButtonProps> = ({ leftIcon, children, ...props }) => {
	const colors = useColors();
	return (
		<Button
			border='none'
			leftIcon={leftIcon}
			color='white'
			fontSize='1rem'
			bg={colors?.dark}
			{...props}>
			{children}
		</Button>
	);
};

export default IconButton;
