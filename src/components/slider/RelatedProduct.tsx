'use client';
import React, { FC, useRef } from 'react';
import { Box, Center } from '@chakra-ui/react';
import useCustomStyle from '@/hooks/useCustomStyle';
import { CommonTitle } from '@/components/utils';

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import ProductCart from '../home/products/components/ProductCart';
import SwiperCore from 'swiper';
import { cartBoxShadow, productCartHeight } from '@/lib/config/constants';
import SwipperArrowButton from '../swiper-arrow/SwipperArrowButton';

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

type RelatedProrductProps = {
	data: {
		_id: string;
		imgSrc: string;
		productName: string;
		price: string | number;
		rating: number;
		category: string;
		stock?: number;
	}[];
};

const RelatedProrduct: FC<RelatedProrductProps> = ({ data }) => {
	const swiperRef = useRef<SwiperCore>();
	const { colors } = useCustomStyle();

	return (
		<Box py='4rem' bg={colors.secondary} position='relative'>
			<CommonTitle fontSize={{ base: '2rem', lg: '3.5rem' }} mb='4rem'>
				Related Products
			</CommonTitle>
			<Swiper
				spaceBetween={20}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				breakpoints={swiperBreakpoints}
				onSwiper={swiper => (swiperRef.current = swiper)}
			>
				{data?.map((item, i) => (
					<SwiperSlide key={i}>
						<Center
							bg={colors.secondary}
							w='full'
							h={productCartHeight}
							boxShadow={cartBoxShadow}
						>
							<ProductCart data={item} />
						</Center>
					</SwiperSlide>
				))}
			</Swiper>
			<Box position='absolute' top={{ base: '56px', xl: '48px' }} right='0px'>
				<SwipperArrowButton
					next={() => swiperRef.current?.slideNext()}
					prev={() => swiperRef.current?.slidePrev()}
				/>
			</Box>
		</Box>
	);
};

export default RelatedProrduct;
