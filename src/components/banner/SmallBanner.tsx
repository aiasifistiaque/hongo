import { Box, BoxProps, Center } from '@chakra-ui/react';
import { Overlay, TextNormal } from '@/components';
import { FC, ReactNode } from 'react';
import useCustomStyle from '@/hooks/useCustomStyle';
type SmallBannerProps = {
	bannarData?: {
		imgSrc?: string;
		text?: string;
	};
};

const SmallBanner: FC<SmallBannerProps> = ({ bannarData }) => {
	const { colors } = useCustomStyle();
	return (
		<BannerWrapper backgroundImage={`url(${bannarData?.imgSrc})`}>
			<Center w='full' h='full'>
				<Overlay bg={colors?.overlay} />
				<TextNormal zIndex={'3'} fontSize='3rem' color={colors?.white}>
					{bannarData?.text}
				</TextNormal>
			</Center>
		</BannerWrapper>
	);
};

export default SmallBanner;

const BannerWrapper = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => {
	return (
		<Box
			w='full'
			h={{ base: '16rem', lg: '24rem' }}
			backgroundPosition={{ base: 'center center', lg: 'center center' }}
			backgroundSize='cover'
			backgroundRepeat='no-repeat'
			position='relative'
			{...props}
		>
			{children}
		</Box>
	);
};
