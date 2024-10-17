'use client';
import { CartDrawer, DesktopLogo } from '@/components';
import { SearchDrawer } from '@/components/index';
import {
	HeaderZIndex,
	padding,
	searchInputWidth,
} from '@/lib/config/constants';
import { data } from '@/lib/config/data';
import {
	BoxProps,
	Flex,
	Grid,
	GridItem,
	useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import SearchInput from './header-components/SearchInput';
import SearchButton from './header-components/SearchButton';
import CartButton from './header-components/CartButton';
import Container from './header-components/Container';

type DesktopHeaderProps = BoxProps & {};

const DesktopHeader: FC<DesktopHeaderProps> = ({ ...props }) => {
	const { header } = data;
	const { isOpen, onOpen: onSearchDrawerOpen, onClose } = useDisclosure();
	const {
		isOpen: cartOpen,
		onOpen: onCartDrawerOpen,
		onClose: onCartDeawerClose,
	} = useDisclosure();

	// const { colors } = useCustomStyle();

	return (
		<Container
			position='sticky'
			top='0px'
			left='0px'
			zIndex={HeaderZIndex}
			{...props}
		>
			<Grid
				px={{
					base: padding.layoutPadding_X_Mobile,
					lg: padding.layoutPadding_X,
				}}
				templateColumns='repeat(2, 1fr)'
				gap={2}
				h='full'
			>
				<GridItem>
					<DesktopLogo imgSrc={header?.logo} />
				</GridItem>
				<GridItem>
					<Flex justifyContent='flex-end' alignItems='center' h='full'>
						<SearchInput width={searchInputWidth} />
						<SearchButton onOpen={onSearchDrawerOpen} />
						<CartButton onOpen={onCartDrawerOpen} />
					</Flex>
				</GridItem>
			</Grid>

			{/* This drawer will open from top section */}
			<SearchDrawer isOpen={isOpen} onClose={onClose} />
			<CartDrawer isOpen={cartOpen} onClose={onCartDeawerClose} />
		</Container>
	);
};

export default DesktopHeader;
