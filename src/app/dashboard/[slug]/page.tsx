'use client';
import {
	BreadCrumb,
	CommonTitle,
	PageLayout,
	ProfilePage,
	SectionPadding,
	TextNormal,
} from '@/components';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { Box, Center } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth, useColors } from '@/library';

const page = () => {
	const { slug } = useParams<{ slug: string }>();
	const { isLoggedIn } = useAuth();
	const router = useRouter();

	const { data, isLoading } = useGetStoreQuery({});

	useEffect(() => {
		if (isLoggedIn === false) {
			router.push('/');
		}
	}, [isLoggedIn]);

	// these are common dashboard css
	const dashboardCss = data?.content?.dashboardCss;
	const breadCrumbCss = data?.basic?.breadCrumbCss;

	const colors = useColors();

	return (
		<PageLayout apiData={data} isLoading={isLoading}>
			<Box py='2rem' bg={colors?.bg}>
				<SectionPadding>
					<Center pb='1rem'>
						<CommonTitle
							fontSize={{ base: '1.5rem', md: '2.5rem', lg: '3.5rem' }}
						>
							My Account
						</CommonTitle>
					</Center>
					<Center>
						<BreadCrumb basic={data?.basic} css={breadCrumbCss} />
					</Center>
				</SectionPadding>
			</Box>

			<Box
				minH='100vh'
				bg={dashboardCss?.bgColor || '#fff'}
				color={dashboardCss?.fgColor || '#000'}
			>
				<SectionPadding>
					<ProfilePage
						basic={data?.basic}
						content={data?.content}
						slug={slug}
					/>
				</SectionPadding>
			</Box>
		</PageLayout>
	);
};

export default page;
