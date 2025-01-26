/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PageLayout, SectionPadding, TextNormal } from '@/components';

import SmallBanner from '@/components/banner/SmallBanner';
import ImagePart from '@/components/contact/ImagePart';
import InputContainer from '@/components/contact/InputContainer';
import SubmitButton from '@/components/contact/SubmitButton';
import useCustomStyle from '@/hooks/useCustomStyle';
import Container from '@/components/contact/Container';
import { data } from '@/lib/config/data';
import {
	FormControl,
	FormLabel,
	Grid,
	GridItem,
	Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useColors } from '@/hooks';
import { useGetStoreQuery } from '@/store/services/storeApi';

export default function Home() {
	const { data: apiData, isLoading } = useGetStoreQuery({});
	const [formData, setFormData] = useState({
		fullname: '',
		email: '',
		message: '',
	});
	const colors = useColors();

	const handleFormData = (key: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[key]: value,
		}));
	};

	return (
		<PageLayout apiData={apiData} isLoading={isLoading}>
			{/* Slider */}
			<SmallBanner bannarData={data?.contact?.banner} />
			{/* Slider Bottom */}
			<SectionPadding py='8rem' bg={colors?.bg}>
				<Container>
					<Grid w='full' h='auto' templateColumns='repeat(8, 1fr)' gap={2}>
						<GridItem
							colSpan={3}
							w='100%'
							h='32rem'
							display={{ base: 'none', lg: 'block' }}
						>
							<ImagePart imgSrc='/contact/contact.webp' />
						</GridItem>
						<GridItem p='2rem' colSpan={{ base: 8, lg: 5 }} w='100%' h='32rem'>
							<TextNormal
								fontWeight='600'
								fontSize={{ base: '1.5rem', lg: '2rem' }}
								mb='.4rem'
							>
								Contact Form
							</TextNormal>
							<InputContainer
								value={formData.fullname}
								handleChange={handleFormData}
								fieldKey='fullname'
								label='Full Name'
								type='text'
							/>
							<InputContainer
								value={formData.email}
								handleChange={handleFormData}
								fieldKey='email'
								label='Email'
								type='email'
							/>
							<FormControl mb='1.2rem'>
								<FormLabel>Comment or message</FormLabel>
								<Textarea
									onChange={(e: any) =>
										handleFormData('message', e.target.value)
									}
									placeholder='Here is a sample placeholder'
								/>
							</FormControl>
							<SubmitButton>Submit</SubmitButton>
						</GridItem>
					</Grid>
				</Container>
			</SectionPadding>
		</PageLayout>
	);
}
