/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	FormField,
	OrderSummary,
	PageLayout,
	SectionPadding,
	TextNormal,
} from '@/components';

import { Grid, GridItem, GridProps, useToast } from '@chakra-ui/react';
import { addressFields } from '@/lib/config/data';
import { FC, useEffect, useState } from 'react';
import { AddressTypes } from '@/lib/types/AddressTypes';

import { useAppDispatch, useAppSelector, useAuth } from '@/library';
import { usePostMutation } from '@/store/services/commonApi';
import {
	useCartTotalsMutation,
	useCreateOrderMutation,
	useVerifyCouponMutation,
} from '@/store/checkout-as-guest-api/checkoutApi';
import { useSendInvoiceMutation } from '@/store/micro-services/invoiceApi';
import { useRouter } from 'next/navigation';
import { useColors, useCustomToast } from '@/hooks';
import { useGetSelfQuery } from '@/store/services/authApi';
import { resetCart } from '@/store/slices/cartSlice';
// import useCustomStyle from '@/hooks/useCustomStyle';

// const PX = { base: '1rem', sm: '2rem', md: '3rem', lg: '5rem', xl: '20rem' };

type CheckoutPageProps = GridProps & {
	content: any;
	basic: any;
	storeId: string;
};

const CheckoutPage: FC<CheckoutPageProps> = ({ content, basic, storeId }) => {
	console.log('StoreId', storeId);
	const [address, setAddress] = useState<AddressTypes>({
		name: '',
		email: '',
		phone: '',
		street: '',
		city: '',
		state: '',
		country: 'Bangladesh',
		postalCode: null,
	});

	const { cartItems } = useAppSelector(state => state.cart);
	// These are for logged in user
	const [trigger, result] = usePostMutation();

	// These are for guest user
	const [guestOrderTrigger, guestOrderResult] = useCreateOrderMutation();
	const [triggerVerifyCoupon, verifyCoupon] = useVerifyCouponMutation();
	const [guestTriggerCart, guestCartResult] = useCartTotalsMutation();
	const [sendMailTrigger, sendMailResult] = useSendInvoiceMutation();

	const dispatch = useAppDispatch();
	const router = useRouter();
	const toast = useToast();
	const [couponCode, setCouponCode] = useState('');
	const colors = useColors();
	const { isLoggedIn } = useAuth();

	const { data, isLoading } = useGetSelfQuery({});

	const handleInputChange = (fieldKey: string, value: string | number) => {
		setAddress(prev => ({
			...prev,
			[fieldKey]: value,
		}));
	};

	const handleCouponChange = (value: string) => {
		setCouponCode(value);
	};

	const css = content?.checkoutCss;

	const handlePlaceOrder = () => {
		const body = {
			address,
			cart: guestCartResult?.data,
			isPaid: false,
			paymentMethod: 'cash on delivery',
			paymentAmount: 0,
			status: 'pending',
		};
		if (guestCartResult?.data?.items?.length <= 0) {
			toast({
				title: 'Cart Empty',
				description:
					'Your cart is empty. Please add products before placing an order.',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		trigger({ path: 'orders', body });
	};

	const handlePlaceOrderAsGuest = () => {
		const body = {
			address,
			cart: guestCartResult?.data,
			isPaid: false,
			paymentMethod: 'cash on delivery',
			paymentAmount: 0,
			status: 'pending',
		};
		if (guestCartResult?.data?.items?.length <= 0) {
			toast({
				title: 'Cart Empty',
				description:
					'Your cart is empty. Please add products before placing an order.',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
			return;
		}
		guestOrderTrigger({ storeId: storeId, body });
	};

	const applyCouponCode = () => {
		triggerVerifyCoupon({
			storeId: storeId,
			body: {
				coupon: couponCode,
			},
		});
	};

	// This is for redirect to new page
	useEffect(() => {
		if (result.isSuccess || guestOrderResult?.isSuccess) {
			sendMailTrigger({
				body: result?.data?.order || guestOrderResult?.data,
				path: 'send-invoice',
			});
			dispatch(resetCart());
			router.push(
				`/invoice/${result?.data?.order?._id || guestOrderResult?.data?._id}`
			);
		}
	}, [result, guestOrderResult]);

	// If coupon is verified then this will call
	useEffect(() => {
		guestTriggerCart({
			storeId: storeId,
			body: {
				coupon: couponCode,
				items: cartItems,
			},
		});

		if (verifyCoupon?.isError) {
			toast({
				title: 'Invalid coupon code!',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}
	}, [verifyCoupon, cartItems]);

	const isBtnDisabled =
		!address.name ||
		!address.email ||
		!address.phone ||
		!address.street ||
		!address.city ||
		!address.postalCode;

	useCustomToast({
		isError: result?.isError || guestOrderResult?.isError,
		isSuccess: result?.isSuccess || guestOrderResult?.isSuccess,
		error: result?.error || guestOrderResult?.error,
		isLoading: result?.isLoading || guestOrderResult?.isLoading,
		successText: 'Order placed successfully',
		successTitle: 'Success',
	});

	console.log('CardData', guestCartResult?.data);
	console.log('CardDataRe', result?.data);
	return (
		<form>
			<Grid gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
				<Grid gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={4}>
					<TextNormal fontWeight='600' fontSize='1.2rem'>
						Address
					</TextNormal>
					{addressFields.map((field, i: number) => (
						<GridItem
							key={i}
							colSpan={
								field.fieldKey === 'name' || field.fieldKey === 'street'
									? { base: 1, lg: 2 }
									: 1
							}
						>
							<FormField
								isRequired={field.isRequired}
								type={field.type}
								label={field.label}
								value={address[field.fieldKey as keyof AddressTypes] || ''}
								placeholder={field.placeholder}
								onChange={value => handleInputChange(field.fieldKey, value)}
							/>
						</GridItem>
					))}
				</Grid>
				<OrderSummary
					basic={basic}
					css={css}
					isBtnDisabled={isBtnDisabled}
					addressData={address}
					handlePlaceOrder={handlePlaceOrder}
					handlePlaceOrderAsGuest={handlePlaceOrderAsGuest}
					cardData={guestCartResult?.data}
					couponCode={couponCode}
					applyCouponCode={applyCouponCode}
					handleCouponChange={handleCouponChange}
					cartLoading={guestCartResult?.isLoading}
					handleLoading={result?.isLoading || guestOrderResult?.isLoading}
					couponCodeLoading={verifyCoupon?.isLoading}
				/>
			</Grid>
		</form>
	);
};

export default CheckoutPage;
