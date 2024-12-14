/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, ReactNode, useRef } from 'react';
import { Box, Center } from '@chakra-ui/react';

import { CommonTitle } from '@/components/utils';
import SwiperCore from 'swiper';
import CategoriesCart from './components/CategoriesCart';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import SwipperArrowButton from '@/components/swiper-arrow/SwipperArrowButton';
import { useColors } from '@/hooks';

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

	return (
		<BoxWrapper>
			<CommonTitle
				fontSize={{ base: '2rem', lg: '3.5rem' }}
				mb='4rem'>
				{data?.title}
			</CommonTitle>
			<Swiper
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={swiperBreakpoints}
				onSwiper={swiper => (swiperRef.current = swiper)}>
				{data?.items?.map((item: any, i: number) => (
					<SwiperSlide key={i}>
						<Center
							bg={colors?.bg}
							w='full'
							h='18rem'>
							<CategoriesCart data={item} />
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
			<Box
				position='absolute'
				top={{ base: '3.25rem', lg: '1.75rem' }}
				right='0px'>
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
			position='relative'>
			{children}
		</Box>
	);
};
