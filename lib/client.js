/* this is a sanity client this will allow us to connect backend */
import { ImageUrlBuilder } from 'sanity/image-url';
import { SanityClient } from 'sanity/client';

export const client = SanityClient({
	projectId:
		process.env
			.NEXT_PUBLIC_SANITY_PROJECT_ID /* this is the sanity connection */ /* it is coming from env */,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: '2023-10-09',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
