/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckoutButton as CouponButton } from '@/components';
import { useColors } from '@/library';

import { Box, BoxProps, Grid, GridItem, Input } from '@chakra-ui/react';
import { FC } from 'react';

type DiscountCodeProps = BoxProps & {
	value: string;
	loading?: boolean;
	handleCouponChange: (value: string) => void;
	applyCoupon: () => void;
	basic: any;
	css: any;
};

const DiscountCode: FC<DiscountCodeProps> = ({
	value,
	loading,
	handleCouponChange,
	applyCoupon,
	basic,
	css,
	...props
}) => {
	const colors = useColors();
	return (
		<Box {...props}>
			<Grid templateColumns='repeat(5, 1fr)' gap={2}>
				<GridItem colSpan={{ base: 3, sm: 4, xl: 4 }}>
					<Input
						onChange={e => handleCouponChange(e.target.value)}
						type='text'
						borderColor={css?.inputBorder}
						placeholder='Apply Coupon Code'
						value={value}
					/>
				</GridItem>
				<GridItem colSpan={{ base: 2, sm: 1, xl: 1 }}>
					<CouponButton
						basic={basic}
						css={css}
						isLoading={loading}
						onClick={applyCoupon}
						w='full'
						bg={css?.btnSecondaryBg}
						color={css?.btnSecondaryFg}
						_hover={{
							bg: css?.btnSecondaryHoverBg,
							color: css?.btnSecondaryHoverFg,
						}}
						fontSize={`${css?.btnSecondarySize || 14}px`}
						fontWeight={css?.btnSecondaryWeight}
					>
						Apply
					</CouponButton>
				</GridItem>
			</Grid>
		</Box>
	);
};

export default DiscountCode;
