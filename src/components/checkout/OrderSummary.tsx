/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { GridItem, GridItemProps } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import {
	CheckoutTableHeader,
	CheckoutTableSummary,
	TextNormal,
	CheckoutTableRow,
	CouponCode,
} from '@/components';
import { useAppSelector } from '@/hooks/useReduxHooks';

type OrderSummaryProps = GridItemProps & {};

const OrderSummary: FC<OrderSummaryProps> = ({ ...props }) => {
	const [discountCode, setDiscountCode] = useState('');
	const { cartItems, shipping, subTotal, discount, vat } = useAppSelector(
		state => state.cart
	);

	const handleDiscountChange = (value: string) => {
		setDiscountCode(value);
	};

	const applyCouponCode = () => {
		// triggerVerifyCoupon({
		// 	storeId: id,
		// 	body: {
		// 		coupon: discountCode,
		// 	},
		// });
	};
	return (
		<GridItem {...props}>
			<TextNormal fontWeight='600' fontSize='1.2rem'>
				Order Summary
			</TextNormal>
			<CheckoutTableHeader />
			{cartItems?.map((item: any, i: number) => (
				<CheckoutTableRow
					key={i}
					name={item?.name}
					qty={item?.qty}
					totalPrice={item?.price * item?.qty}
					unitPrice={item?.price}
					image={item?.image}
				/>
			))}
			<CheckoutTableSummary
				shipping={shipping}
				discount={discount}
				subTotal={subTotal}
				vat={vat}
			/>
			<CouponCode
				value={discountCode}
				applyCoupon={applyCouponCode}
				handleCouponChange={handleDiscountChange}
			/>
		</GridItem>
	);
};

export default OrderSummary;
