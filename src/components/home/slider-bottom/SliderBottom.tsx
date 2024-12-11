import React, { FC, ReactNode } from 'react';
import { ServiceCart } from './components/index';
import { Box, Grid, GridItem, GridItemProps, GridProps } from '@chakra-ui/react';
import { useColors } from '@/hooks';

type SliderBottomProps = {
	data: {
		imgSrc: string;
		title: string;
		text: string;
	}[];
};

const SliderBottom: FC<SliderBottomProps> = ({ data }) => {
	const colors = useColors();
	return (
		<Box bg={colors.bg}>
			<Container borderColor={colors.border}>
				{data?.map(
					(item: any, i: number) =>
						i < 4 && (
							<Item key={i}>
								<ServiceCart data={item} />
							</Item>
						)
				)}
			</Container>
		</Box>
	);
};

const Item = ({ children, ...props }: GridItemProps & { children: ReactNode }) => (
	<GridItem
		w='100%'
		h={{ base: 'auto', lg: '180px' }}
		{...props}>
		{children}
	</GridItem>
);

const Container = ({ children, ...props }: GridProps & { children: ReactNode }) => (
	<Grid
		templateColumns={{
			base: 'repeat(1, 1fr)',
			md: 'repeat(2, 1fr)',
			lg: 'repeat(3, 1fr)',
			xl: 'repeat(4, 1fr)',
		}}
		gap={4}
		borderBottom='1px solid'
		{...props}>
		{children}
	</Grid>
);

export default SliderBottom;
