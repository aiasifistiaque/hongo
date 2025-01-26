import { TextNormal, SectionPadding } from '@/components';

import { AddressTypes } from '@/lib/types/AddressTypes';
import { useAppDispatch, useAppSelector, useAuth, useColors } from '@/library';
import { Box, BoxProps, Grid, GridItem, Toast } from '@chakra-ui/react';
import { FC, ReactNode, useEffect, useState } from 'react';
import { FormField, OrderSummary, Title } from './components/index';
import { usePostMutation } from '@/store/services/commonApi';
import { addressFields } from '@/lib/config/data';
import { useGetSelfQuery } from '@/store/services/authApi';
import { useCustomToast } from '@/hooks';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { resetCart } from '@/store/slices/cartSlice';
import {
	useCartTotalsMutation,
	useCreateOrderMutation,
	useVerifyCouponMutation,
} from '@/store/checkout-as-guest-api/checkoutApi';
import { AddressTitle, CheckoutGridContainer } from './components/Title';
import { useSendInvoiceMutation } from '@/store/micro-services/invoiceApi';

type CheckoutProps = BoxProps & {
	basic: any;
	content: any;
	storeId: string;
};

const Checkout: FC<CheckoutProps> = ({ basic, content, storeId }) => {
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
	const [triggerCart, resultCart] = usePostMutation();

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
			cart: guestCartResult?.data || resultCart?.data,
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
		triggerCart({
			body: { items: cartItems, discount: 0, shipping: 0 },
			path: 'orders/cart-total',
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

	console.log('result Cart', resultCart);
	console.log('guestCart', guestCartResult);

	return (
		<Box bg={css?.bgColor} py={12}>
			<SectionPadding>
				<Title basic={basic} css={css}>
					Checkout
				</Title>
				<form>
					<Grid gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6}>
						<Box>
							<CheckoutGridContainer basic={basic} css={css}>
								<AddressTitle basic={basic} css={css}>
									Address
								</AddressTitle>
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
											value={
												address[field.fieldKey as keyof AddressTypes] || ''
											}
											placeholder={field.placeholder}
											onChange={value =>
												handleInputChange(field.fieldKey, value)
											}
											basic={basic}
											css={css}
										/>
									</GridItem>
								))}
							</CheckoutGridContainer>
						</Box>
						<OrderSummary
							basic={basic}
							css={css}
							isBtnDisabled={isBtnDisabled}
							addressData={address}
							handlePlaceOrder={handlePlaceOrder}
							handlePlaceOrderAsGuest={handlePlaceOrderAsGuest}
							cardData={guestCartResult?.data || resultCart?.data}
							couponCode={couponCode}
							applyCouponCode={applyCouponCode}
							handleCouponChange={handleCouponChange}
							cartLoading={guestCartResult?.isLoading || resultCart?.isLoading}
							handleLoading={result?.isLoading || guestOrderResult?.isLoading}
							couponCodeLoading={verifyCoupon?.isLoading}
						/>
					</Grid>
				</form>
			</SectionPadding>
		</Box>
	);
};

export default Checkout;
