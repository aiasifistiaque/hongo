import { Center, Flex, FlexProps, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TextNormal } from '@/components';
import useGetItemNameById from '@/hooks/useGetItemByName';
import { useGetAllQuery } from '@/store/services/commonApi';

type CollectionCardProps = FlexProps & {
	id: string;
	type: string;
};

const CollectionCard: FC<CollectionCardProps> = ({ id, type }) => {
	const { name, image } = useGetItemNameById({ id, path: type });
	const { data } = useGetAllQuery({
		path: 'products',
		filters: {
			...(type === 'categories' && { category_in: id }),
			...(type === 'collections' && { collection_in: id }),
		},
	});

	const href =
		type === 'categories' ? `/category/${id}` : `/category/collection/${id}`;

	console.log('Da', data);

	return (
		<Flex w='full' maxH='400px'>
			<Center>
				<TextNormal>{name}</TextNormal>
				<Image
					src={
						image ||
						'https://unsplash.com/photos/a-blurry-image-of-an-orange-and-purple-object-hxSFqtwa-7Y'
					}
					alt='name'
					objectFit='cover'
					w='full'
					h='full'
				/>
			</Center>
		</Flex>
	);
};

export default CollectionCard;
