import { Box, BoxProps, Center } from '@chakra-ui/react';
import { TextNormal } from '@/components';
import { FC, ReactNode } from 'react';
import { useColors } from '@/hooks';
type SmallBannerProps = {
	bannarData?: any;
	image?: string;
	children?: ReactNode;
};

const SmallBanner: FC<SmallBannerProps> = ({ image, children }) => {
	const colors = useColors();
	return (
		<BannerWrapper backgroundImage={`url(${image || './slider/sliderTwo.webp'})`}>
			<Center
				w='full'
				h='full'>
				{/* <Overlay bg={colors?.overlay} /> */}
				<TextNormal
					zIndex={'3'}
					fontSize='3rem'
					color={colors?.primaryText}>
					{children}
				</TextNormal>
			</Center>
		</BannerWrapper>
	);
};

export default SmallBanner;

const BannerWrapper = ({ children, ...props }: BoxProps & { children: ReactNode }) => {
	return (
		<Box
			w='full'
			h={{ base: '16rem', lg: '24rem' }}
			backgroundPosition={{ base: 'center center', lg: 'center center' }}
			backgroundSize='cover'
			backgroundRepeat='no-repeat'
			position='relative'
			{...props}>
			{children}
		</Box>
	);
};
