/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { FC, useRef } from 'react';
import { Box, Center } from '@chakra-ui/react';
import useCustomStyle from '@/hooks/useCustomStyle';

import SwiperCore from 'swiper';
import ProductCart from '@/components/home/products/sections/ProductCart';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import SwipperArrowButton from '@/components/swiper-arrow/SwipperArrowButton';
import { CommonTitle } from '@/components';

const swiperBreakpoints = {
	320: {
		slidesPerView: 1,
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

type ProductCarouselProps = {
	data: any;
	title: string;
};

const ProductCarousel: FC<ProductCarouselProps> = ({ data, title }) => {
	const { colors } = useCustomStyle();
	const swiperRef = useRef<SwiperCore>();

	return (
		<Box
			py='4rem'
			bg={colors.secondary}
			borderBottom={`1px solid ${colors.primary}`}
			position='relative'
		>
			<CommonTitle fontSize={{ base: '2rem', lg: '3.5rem' }} mb='4rem'>
				{title}
			</CommonTitle>
			<Swiper
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={swiperBreakpoints}
				onSwiper={swiper => (swiperRef.current = swiper)}
			>
				{data?.map((item: any, i: number) => (
					<SwiperSlide key={i}>
						<Center bg={colors.secondary} w='full' h='auto'>
							<ProductCart data={item} />
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
			<Box
				position='absolute'
				top={{ base: '3.25rem', lg: '1.75rem' }}
				right='0px'
				bg='red'
			>
				<SwipperArrowButton
					next={() => swiperRef.current?.slideNext()}
					prev={() => swiperRef.current?.slidePrev()}
				/>
			</Box>
		</Box>
	);
};

export default ProductCarousel;
