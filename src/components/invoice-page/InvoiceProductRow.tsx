import { Flex, Grid, GridProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { AlignCenter, TextNormal } from '@/components';
import { currency } from '@/lib/config/constants';

type InvoiceProductRowProps = GridProps & {
	name: string;
	unitPrice: number;
	qty: number;
	totalPrice: number;
	image: string;
	basic: any;
	css: any;
};
const InvoiceProductRow: FC<InvoiceProductRowProps> = ({
	name,
	unitPrice,
	qty,
	totalPrice,
	image,
	basic,
	css,
	...props
}) => {
	return (
		<Grid gridTemplateColumns='2fr 1fr 1fr' py='1rem' {...props}>
			<AlignCenter gap={4}>
				<Flex
					w={{ base: '54px', lg: '64px' }}
					h={{ base: '54px', lg: '64px' }}
					minW={{ base: '54px', lg: '64px' }}
					minH={{ base: '54px', lg: '64px' }}
					mr={{ base: 2, lg: 4 }}
				>
					<Image
						alt='Product Image'
						src={image || '/product/placeholderImage.jpg'}
						h='full'
						w='full'
						objectFit='cover'
					/>
				</Flex>

				<TextNormal
					basic={basic}
					fontSize={{ base: '.875rem', lg: '1.1rem' }}
					fontWeight='500'
				>
					{name}
				</TextNormal>
			</AlignCenter>
			<AlignCenter>
				<TextNormal
					basic={basic}
					fontSize={{ base: '.875rem', lg: '1.1rem' }}
					fontWeight='400'
				>{`${currency?.symbol} ${unitPrice} x ${qty}`}</TextNormal>
			</AlignCenter>
			<AlignCenter w='full' justify='flex-end'>
				<TextNormal
					basic={basic}
					fontSize={{ base: '.875rem', lg: '1.1rem' }}
					fontWeight='700'
					textAlign='right'
				>{`${currency?.symbol} ${totalPrice.toLocaleString()}`}</TextNormal>
			</AlignCenter>
		</Grid>
	);
};

export default InvoiceProductRow;
