'use client';
import { ProfileJson } from '@/lib/config/data';
import { Box, Flex, Grid, GridItem, GridProps } from '@chakra-ui/react';
import { data } from '@/lib/config/data';
import React, { FC, ReactNode } from 'react';

import { useAppDispatch, useColors } from '@/library';

import {
	CheckoutButton as SimpleButton,
	TextButton,
	TextNormal,
} from '@/components';
import {
	AccountInfo,
	ProfileHeaderImage,
	ProfileLinks,
} from './components/index';
import { OrderComponent } from './components/orders-component';
import { logout } from '@/store/slices/authSlice';
import { FaqComponent } from './components/faq-component';
import { useRouter } from 'next/navigation';
import { useGetSelfQuery } from '@/store/services/authApi';

type ProfilePageProps = GridProps & {
	basic: any;
	content: any;
	slug: string;
};

const ProfilePage: FC<ProfilePageProps> = ({
	basic,
	content,
	slug,
	...props
}) => {
	const { data: selfData, isLoading: selfLoading } = useGetSelfQuery({});

	const faqData = data?.faqContent;
	const router = useRouter();

	const dispatch = useAppDispatch();
	const onLogout = () => {
		dispatch(logout());
		router.push('/');
	};

	const dashboardCss = content?.dashboardCss;
	const headerCss = content?.header;

	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', md: 'repeat(6, 1fr)' }}
			py='1rem'
			gap={{ base: 0, md: 8 }}
			rowGap={{ base: 8, md: 0 }}
			{...props}
		>
			<GridItem colSpan={{ base: 2, xl: 1 }}>
				<Box>
					{ProfileJson?.map((item: any, i: number) => (
						<ProfileLinks
							slug={slug}
							basic={basic}
							content={content}
							item={item}
							key={i}
						/>
					))}
					<LogOutBtn onLogout={onLogout} css={headerCss} basic={basic}>
						Log Out
					</LogOutBtn>
				</Box>
			</GridItem>
			<GridItem colSpan={{ base: 4, xl: 5 }}>
				<ProfileHeaderImage
					selfData={selfData}
					isLoading={selfLoading}
					basic={basic}
					css={dashboardCss}
				/>

				{slug === 'account' && (
					<AccountInfo
						isLoading={selfLoading}
						selfData={selfData}
						basic={basic}
						content={content}
					/>
				)}
				{slug === 'orders' && (
					<OrderComponent basic={basic} css={content?.dashboardOrderCss} />
				)}

				{slug === 'faq' && (
					<FaqComponent basic={basic} css={dashboardCss} faqData={faqData} />
				)}
			</GridItem>
		</Grid>
	);
};

export default ProfilePage;

const LogOutBtn = ({
	children,
	onLogout,
	css,
	basic,
}: {
	children: ReactNode;
	onLogout: () => void;
	css: any;
	basic: any;
}) => {
	const colors = useColors();
	return (
		<Flex
			onClick={() => onLogout()}
			cursor='pointer'
			py='.5rem'
			px='.5rem'
			mb='6px'
		>
			<TextNormal color={css?.btnColor} basic={basic}>
				{children}
			</TextNormal>
		</Flex>
	);
};
