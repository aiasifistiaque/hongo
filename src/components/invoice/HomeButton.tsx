import { Icon } from '@/components';

import Link from 'next/link';
import { Box, BoxProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import useCustomStyle from '@/hooks/useCustomStyle';
import { borderRadius } from '@/lib/config/constants';

const HomeButton = () => {
	return (
		<Link href={`/`}>
			<IconContainer display='inline-block'>
				<Icon size={22} name='home' />
			</IconContainer>
		</Link>
	);
};

export default HomeButton;

type IconContainerProps = BoxProps & {
	children: ReactNode;
};
export const IconContainer: FC<IconContainerProps> = ({
	children,
	...props
}) => {
	const { colors } = useCustomStyle();
	return (
		<Box
			p='.4rem'
			borderRadius={borderRadius?.xs}
			_hover={{ backgroundColor: colors?.lightWhite }}
			cursor='pointer'
			{...props}
		>
			{children}
		</Box>
	);
};
