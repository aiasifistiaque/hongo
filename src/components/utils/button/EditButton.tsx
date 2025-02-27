import useCustomStyle from '@/hooks/useCustomStyle';
import { useColors } from '@/library';
import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

type EditButtonProps = ButtonProps & {
	basic: any;
	css?: any;
	children: any;
};

const EditButton: FC<EditButtonProps> = ({
	children,
	basic,
	css,
	...props
}) => {
	const colors = useColors();

	return (
		<Button
			bg={'transparent'}
			color={colors?.btnColor || 'yellow'}
			fontWeight='400'
			py='2px'
			fontSize='1rem'
			border={`1px solid ${colors?.btnColor}`}
			fontFamily={css?.fontFamily || basic?.secondaryFont}
			h='32px'
			_hover={{
				bg: 'none',
				color: 'none',
			}}
			{...props}
		>
			{children}
		</Button>
	);
};

export default EditButton;
