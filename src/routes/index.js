import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

const CONCERT_BAND_MEMBER_TOKEN = process.env['CONCERT_BAND_MEMBER_TOKEN'];

// GET
export const GET = async () => {
	console.log('GET request received');

	// https://github.com/prisma-labs/graphql-request#incrementally-setting-headers
	client.setHeader('authorization', CONCERT_BAND_MEMBER_TOKEN);

	// const getBandMembers = gql`
	// 	query getBandMembers {
	// 		bandMembers {
	// 			id
	// 			name
	// 			slug
	// 			picture {
	// 				id
	// 				url(
	// 					transformation: {
	// 						image: { resize: { width: 400 } }
	// 						document: { output: { format: webp } }
	// 					}
	// 				)
	// 				width
	// 				height
	// 				mimeType
	// 				fileName
	// 			}
	// 			nickname
	// 			description
	// 			instrument
	// 		}
	// 	}
	// `;

	const getBandMembersWithResponsivePicture = gql`
		query getBandMembers {
			bandMembers {
				id
				name
				slug
				picture {
					id
					width
					height
					mimeType
					fileName
					handle
					url
				}
				nickname
				description
				instrument
			}
		}
	`;
	// https://github.com/prisma-labs/graphql-request#error-handling
	try {
		const bandMembers = await client.request(getBandMembersWithResponsivePicture);
		// console.log(JSON.stringify(concerts, undefined, 2));
		// console.log(Date.now());
		console.log('GET request end');
		return {
			status: 200,
			body: bandMembers
		};
	} catch (error) {
		console.error(JSON.stringify(error, undefined, 2));
		process.exit(1);
	}
};
