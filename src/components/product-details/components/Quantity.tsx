import { Icon } from '@/components/icon';
import { TextNormal } from '@/components/utils';
import useCustomStyle from '@/hooks/useCustomStyle';
import { Center, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type QuanityProps = FlexProps & {
	quantity: number;
	handleQuantity: (type: string) => void;
};

const Quanity: FC<QuanityProps> = ({ quantity, handleQuantity, ...props }) => {
	const { colors } = useCustomStyle();
	return (
		<Flex
			justifyContent='space-around'
			border={`1px solid ${colors?.primary}`}
			p='8px 12px'
			width={{ base: 'auto', md: '8rem' }}
			h='full'
			borderRadius='4px'
			{...props}
		>
			<Center
				cursor='pointer'
				onClick={() => handleQuantity('decrement')}
				w='2rem'
				userSelect='none'
			>
				<Icon name='subtract-two' />
			</Center>
			<Center>
				<TextNormal textAlign='center' minW='2rem' userSelect='none'>
					{quantity}
				</TextNormal>
			</Center>
			<Center
				cursor='pointer'
				onClick={() => handleQuantity('increment')}
				w='2rem'
				userSelect='none'
			>
				<Icon name='add' />
			</Center>
		</Flex>
	);
};

export default Quanity;
