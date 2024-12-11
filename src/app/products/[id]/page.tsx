'use client';
import { PageLayout, SectionPadding } from '@/components';
import ProductDetails from '@/components/productDetails/ProductDetails';
import RelatedProrduct from '@/components/slider/RelatedProduct';
import { useColors } from '@/hooks';
import { data as dat } from '@/lib/config/data';
import { useGetByIdQuery } from '@/store/services/commonApi';
import { useParams } from 'next/navigation';

export default function Home() {
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
		<PageLayout isLoading={false}>
			<SectionPadding bg={colors?.bg}>
				<ProductDetails
					id={id}
					data={data}
				/>
			</SectionPadding>

			<SectionPadding bg={colors?.bg}>
				<RelatedProrduct data={relatedProduct?.doc} />
			</SectionPadding>
		</PageLayout>
	);
}
