import { TextNormal } from '@/components';

import { Center, CenterProps, Flex, Skeleton } from '@chakra-ui/react';
import React, { FC } from 'react';

type CountCardProps = CenterProps & {
	basic: any;
	css: any;
	count: any;
	title: any;
	isLoading: any;
};

const CountCard: FC<CountCardProps> = ({
	basic,
	css,
	count,
	title,
	isLoading,
	...props
}) => {
	return (
		<Center
			w='full'
			bg={css?.cardBg || '#EEF0F7'}
			color={css?.cardFg || '#000'}
			minH='150px'
			borderRadius={`${css?.cardRadius || 16}px`}
			{...props}
		>
			<Flex flexDir='column' alignItems='center'>
				{isLoading ? (
					<Skeleton w='60px' h='20px' mb='.5rem' borderRadius='4px' />
				) : (
					<TextNormal
						color={css?.cardFg || '#000'}
						fontWeight={css?.countWeight || 700}
						fontSize={{
							base: `${css?.countSizeBase || 24}px`,
							lg: `${css?.countSizeBG || 32}px`,
						}}
						basic={basic}
					>
						{count}
					</TextNormal>
				)}

				<TextNormal
					fontWeight={css?.cardTitleWeight || 400}
					fontSize={{
						base: `${css?.cardTitleBase || 14}px`,
						lg: `${css?.cardTitleBg || 16}px`,
					}}
					color={css?.cardFg || '#000'}
					basic={basic}
				>
					{title}
				</TextNormal>
			</Flex>
		</Center>
	);
};

export default CountCard;
