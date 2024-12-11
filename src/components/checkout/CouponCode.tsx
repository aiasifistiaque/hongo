/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckoutButton as DiscoutButton, TextNormal } from '@/components';
import { useColors } from '@/hooks';

import { Box, Grid, GridItem, Input } from '@chakra-ui/react';
import { FC } from 'react';

type DiscountCodeProps = {
	value: string;
	loading?: boolean;
	handleCouponChange: (value: string) => void;
	applyCoupon: () => void;
};

const DiscountCode: FC<DiscountCodeProps> = ({
	value,
	loading,
	handleCouponChange,
	applyCoupon,
}) => {
	const colors = useColors();
	return (
		<Box py={4}>
			{/* <TextNormal
				mb='1rem'
				fontSize='.85rem'>
				Discount Code
			</TextNormal> */}
			<Grid templateColumns='repeat(4, 1fr)'>
				<GridItem colSpan={3}>
					<Input
						onChange={e => handleCouponChange(e.target.value)}
						type='text'
						borderColor={colors?.brand}
						placeholder='Enter discount code'
						value={value}
					/>
				</GridItem>
				<GridItem
					ml='auto'
					colSpan={1}
					w='90%'>
					<DiscoutButton
						isLoading={loading}
						size='sm'
						onClick={applyCoupon}
						w='full'>
						Apply
					</DiscoutButton>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default DiscountCode;
