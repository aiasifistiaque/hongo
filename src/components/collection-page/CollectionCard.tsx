import { Center, CenterProps, Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import { Column, Icon, TextNormal } from '@/components';
import useGetItemNameById from '@/hooks/useGetItemByName';
import { useGetAllQuery } from '@/store/services/commonApi';
import { useColors } from '@/hooks';
import Link from 'next/link';

type CollectionCardProps = FlexProps & {
	item: any;
	type: string;
};

const CollectionCard: FC<CollectionCardProps> = ({ item, type }) => {
	const { name, image } = useGetItemNameById({ id: item?._id, path: type });
	const { data } = useGetAllQuery({
		path: 'products',
		filters: {
			...(type === 'categories' && { category_in: item?._id }),
			...(type === 'collections' && { collection_in: item?._id }),
		},
	});

	return (
		<>
			<Flex borderRadius='8px' overflow='hidden'>
				<FlexWrapper image={image}>
					<Column
						pb='5rem'
						h='full'
						alignItems='center'
						justifyContent='flex-end'
					>
						<TextNormal
							textAlign='center'
							fontSize={{ base: '1rem', md: '1.8rem' }}
							color='white'
						>
							{name}
						</TextNormal>
						<TextNormal textAlign='center' fontSize={'1rem'} color='white'>
							{`${data?.totalDocs || '--'} Products`}
						</TextNormal>
					</Column>
					<IconWrapper>
						<Icon size={28} color={'#000'} name='arrow-right' />
					</IconWrapper>
				</FlexWrapper>
			</Flex>
		</>
	);
};

export default CollectionCard;

const FlexWrapper = ({
	children,
	image,
}: FlexProps & { children: ReactNode; image: string }) => (
	<Flex
		w='full'
		h={{ base: '450px', sm: '400px', lg: '450px' }}
		bgImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
			image || ''
		})`}
		bgSize='cover'
		bgPos='center'
		bgRepeat='no-repeat'
		align='center'
		justify='center'
		color='white'
		position='relative'
		transition='.9s'
		_hover={{
			transform: 'scale(1.1)',
			'& > .icon-wrapper': {
				opacity: 1,
				visibility: 'visible',
			},
		}}
	>
		{children}
	</Flex>
);

const IconWrapper = ({ children }: CenterProps & { children: ReactNode }) => (
	<Center
		className='icon-wrapper'
		position='absolute'
		top='50%'
		left='50%'
		transform='translate(-50%, -50%)'
		w='50px'
		h='50px'
		bg='#fff'
		borderRadius='full'
		opacity={0} // Start hidden
		visibility='hidden' // Ensures it's not interactable when invisible
		transition='opacity 0.6s ease, visibility 0.3s ease'
	>
		{children}
	</Center>
);
