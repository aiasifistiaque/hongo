/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, ReactNode, useRef } from 'react';
import {
	Box,
	Center,
	Flex,
	Skeleton,
	useBreakpointValue,
} from '@chakra-ui/react';

import { CommonTitle, TextNormal } from '@/components/utils';
import SwiperCore from 'swiper';
import CategoriesCart from './components/CategoriesCart';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import SwipperArrowButton from '@/components/swiper-arrow/SwipperArrowButton';
import { useColors } from '@/hooks';
import { SIZES } from '@/lib/config/constants';
import { useGetByIdQuery } from '@/store/services/commonApi';

const swiperBreakpoints = {
	320: {
		slidesPerView: 2,
	},
	480: {
		slidesPerView: 2,
	},
	768: {
		slidesPerView: 3,
	},
	1024: {
		slidesPerView: 4,
	},
	1536: {
		slidesPerView: 5,
	},
};

type CategoriesProps = {
	data: any;
};

const Categories: FC<CategoriesProps> = ({ data }) => {
	const colors = useColors();
	const swiperRef = useRef<SwiperCore>();

	const responsive = SIZES?.collection;

	const navQueries = data?.items
		?.slice(0, 6)
		.map((item: any) => useGetByIdQuery({ id: item.id, path: item.type }));

	const itemCount =
		useBreakpointValue({
			base: 2, // For small screens (mobile)
			sm: 3, // For small screens (mobile)
			md: 3, // For small devices

			xl: 4, // For large devices (desktop)
			'2xl': 5, // For large devices (desktop)
		}) ?? 4;

	// Create an array of the desired length
	const skeletonArray = Array.from({ length: itemCount }, (_, i) => i + 1);

	const isLoading = navQueries?.some((query: any) => query?.isLoading);

	const skeleton = (
		<Flex gap={4} justifyContent='space-between' bg={'transparent'} py='2rem'>
			{skeletonArray?.map((item: number) => (
				<Skeleton
					key={item}
					borderRadius='full'
					height={{ base: '150px', md: '250px' }}
					width={{ base: '150px', md: '250px' }}
				/>
			))}
		</Flex>
	);

	return (
		<BoxWrapper>
			<CommonTitle
				fontSize={responsive?.title}
				mb={{ base: '2rem', md: '3rem' }}
				pr='5rem'
				lineHeight={{ base: '2.5rem', sm: '3.5rem' }}
			>
				{data?.title}
			</CommonTitle>
			{isLoading ? (
				skeleton
			) : (
				<Swiper
					spaceBetween={20}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					breakpoints={swiperBreakpoints}
					onSwiper={swiper => (swiperRef.current = swiper)}
				>
					{data?.items?.map((item: any, i: number) => (
						<SwiperSlide key={i}>
							<Center bg={colors?.bg} w='full'>
								<CategoriesCart data={item} />
							</Center>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<Box
				position='absolute'
				top={{ base: '2.8rem', sm: '3.25rem', lg: '1.75rem' }}
				right='0px'
			>
				<SwipperArrowButton
					next={() => swiperRef.current?.slideNext()}
					prev={() => swiperRef.current?.slidePrev()}
				/>
			</Box>
		</BoxWrapper>
	);
};

export default Categories;

const BoxWrapper = ({ children }: { children: ReactNode }) => {
	const colors = useColors();
	return (
		<Box
			py='4rem'
			borderBottom={`1px solid ${colors.border}`}
			position='relative'
		>
			{children}
		</Box>
	);
};
