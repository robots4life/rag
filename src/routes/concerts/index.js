import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

const CONCERT_BAND_MEMBER_TOKEN = process.env['CONCERT_BAND_MEMBER_TOKEN'];

// GET
export const GET = async () => {
	console.log('GET request received');

	// https://github.com/prisma-labs/graphql-request#incrementally-setting-headers
	client.setHeader('authorization', CONCERT_BAND_MEMBER_TOKEN);

	const getConcerts = gql`
		query getConcerts {
			concerts {
				id
				date
				title
				slug
				locationTitle
				locationLink
				startDateTime
				endDateTime
				entryPrice
				googleMapCoordinates {
					latitude
					longitude
				}
				googleMapLink
				bandMembers {
					id
					name
					slug
					picture {
						id
						url(
							transformation: {
								image: { resize: { width: 400 } }
								document: { output: { format: webp } }
							}
						)
						width
						height
						mimeType
						fileName
					}
					nickname
					description
					instrument
				}
			}
		}
	`;
	// https://github.com/prisma-labs/graphql-request#error-handling
	try {
		const concerts = await client.request(getConcerts);
		// console.log(JSON.stringify(concerts, undefined, 2));
		// console.log(Date.now());
		console.log('GET request end');
		return {
			status: 200,
			body: concerts
		};
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}
};
