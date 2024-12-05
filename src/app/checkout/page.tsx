/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
	FormField,
	OrderSummary,
	PageLayout,
	SectionPadding,
	TextNormal,
} from '@/components';

import { Grid, GridItem } from '@chakra-ui/react';
import { addressFields } from '@/lib/config/data';
import { useState } from 'react';
import { AddressTypes } from '@/lib/types/AddressTypes';
// import useCustomStyle from '@/hooks/useCustomStyle';

// const PX = { base: '1rem', sm: '2rem', md: '3rem', lg: '5rem', xl: '20rem' };

export default function Home() {
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

	const handleInputChange = (fieldKey: string, value: string | number) => {
		setAddress(prev => ({
			...prev,
			[fieldKey]: value,
		}));
	};

	return (
		<PageLayout>
			<SectionPadding py={3}>
				<TextNormal fontWeight='600' fontSize='1.6rem' mb='2rem'>
					Checkout
				</TextNormal>
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
						<OrderSummary />
					</Grid>
				</form>
			</SectionPadding>
		</PageLayout>
	);
}
