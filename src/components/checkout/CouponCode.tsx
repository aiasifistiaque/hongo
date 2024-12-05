/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckoutButton as DiscoutButton, TextNormal } from '@/components';

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
	return (
		<Box>
			<TextNormal mb='1rem' fontSize='.85rem'>
				Discount Code
			</TextNormal>
			<Grid templateColumns='repeat(4, 1fr)'>
				<GridItem colSpan={3}>
					<Input
						onChange={e => handleCouponChange(e.target.value)}
						type='text'
						placeholder='Enter discount code'
						value={value}
					/>
				</GridItem>
				<GridItem ml='auto' colSpan={1} w='90%'>
					<DiscoutButton isLoading={loading} onClick={applyCoupon} w='full'>
						Apply
					</DiscoutButton>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default DiscountCode;
