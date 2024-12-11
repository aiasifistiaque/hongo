import { Center, Flex, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Icon } from '../icon';
import { useColors } from '@/hooks';

type SwipperArrowButtonProps = TextProps & {
	prev: () => void;
	next: () => void;
};

const SwipperArrowButton: FC<SwipperArrowButtonProps> = ({ prev, next, ...props }) => {
	const colors = useColors();
	return (
		<Center
			w={{ base: '5rem', lg: '8rem' }}
			h={{ base: '5rem', lg: '8rem' }}
			bg='transparent'
			position='absolute'
			right='0px'
			top='0px'
			justifyContent='space-between'
			userSelect='none'
			{...props}>
			<Flex
				bg='transparent'
				justifyContent='center'
				alignItems='center'
				w={{ base: '2.4rem', lg: '3.4rem' }}
				h={{ base: '2.4rem', lg: '3.4rem' }}
				cursor='pointer'
				borderRadius='full'
				zIndex='10'
				onClick={prev}
				border={`1px solid ${colors?.brand}`}>
				<Icon
					name='arrow-left'
					color={colors?.brand}
					size={40}
				/>
			</Flex>
			<Flex
				bg='transparent'
				justifyContent='center'
				alignItems='center'
				w={{ base: '2.4rem', lg: '3.4rem' }}
				h={{ base: '2.4rem', lg: '3.4rem' }}
				cursor='pointer'
				borderRadius='full'
				zIndex='10'
				onClick={next}
				border={`1px solid ${colors?.brand}`}>
				<Icon
					name='arrow-right'
					color={colors?.brand}
					size={40}
				/>
			</Flex>
		</Center>
	);
};

export default SwipperArrowButton;
