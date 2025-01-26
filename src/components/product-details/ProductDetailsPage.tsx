'use client';
import { PageLayout, SectionPadding } from '@/components';
import ProductDetails from '@/components/product-details/ProductDetails';
import RelatedProrduct from '@/components/slider/RelatedProduct';
import { useColors } from '@/hooks';
import { data as dat } from '@/lib/config/data';
import { ContentWrapper } from '@/library';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { useGetStoreQuery } from '@/store/services/storeApi';
import { useParams } from 'next/navigation';

const ProductDetailsPage = () => {
	const { data: apiData, isLoading } = useGetStoreQuery({});
	const { id } = useParams<{ id: string }>();
	const { singleProduct, relatedProduct } = dat;
	const colors = useColors();

	const { data, isFetching } = useGetByIdQuery(
		{
			path: 'products',
			id,
		},
		{ skip: !id }
	);

	return (
		<ContentWrapper>
			<PageLayout apiData={apiData} isLoading={isLoading}>
				<SectionPadding bg={colors?.bg}>
					<ProductDetails id={id} data={data} />
				</SectionPadding>

				<SectionPadding bg={colors?.bg}>
					<RelatedProrduct data={relatedProduct?.doc} />
				</SectionPadding>
			</PageLayout>
		</ContentWrapper>
	);
};

export default ProductDetailsPage;
