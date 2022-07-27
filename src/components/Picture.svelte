<script>
	export let member;
	// console.log(member);

	export let classes;
	// console.log(classes);

	const steps = [
		8000, 6454, 6453, 2560, 2048, 1920, 1600, 1440, 1280, 1140, 1024, 960, 900, 800, 768, 640,
		525, 425, 320, 240, 180, 120
	];

	// export let asset;
	const srcSetWep = steps.flatMap((element) => {
		// return member.picture.width >= element ? `${element} : true` : `${element} : false`;
		return member.picture.width > element
			? `https://media.graphassets.com/resize=width:` +
					element +
					`/output=format:webp/` +
					member.picture.handle +
					` ` +
					element +
					`w`
			: [];
	});
	// console.log(srcSetWep);

	const srcSet = steps.flatMap((element) => {
		// return member.picture.width >= element ? `${element} : true` : `${element} : false`;
		return member.picture.width > element
			? `https://media.graphassets.com/resize=width:` +
					element +
					`/` +
					member.picture.handle +
					` ` +
					element +
					`w`
			: [];
	});
	// console.log(srcSet);

	// https://dev.opera.com/articles/responsive-images/
	// sizes dpi mime
	/*
	<picture>
	<source
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-200.webp 200w,
				opera-400.webp 400w,
				opera-800.webp 800w,
				opera-1200.webp 1200w,
				opera-1600.webp 1600w,
				opera-2000.webp 2000w"
		type="image/webp">
	<img
		src="opera-400.jpg" alt="The Oslo Opera House"
		sizes="(min-width: 640px) 60vw, 100vw"
		srcset="opera-200.jpg 200w,
				opera-400.jpg 400w,
				opera-800.jpg 800w,
				opera-1200.jpg 1200w,
				opera-1600.jpg 1600w,
				opera-2000.jpg 2000w">
	</picture>
	*/
</script>

<!-- {JSON.stringify(picture, null, 2)} -->

<picture class="basis-1/2 border">
	<source
		sizes="(min-width: 1540px) 1448px, (min-width: 1280px) 1192px, (min-width: 1040px) 936px, (min-width: 780px) 680px, (min-width: 680px) 552px, calc(94.44vw - 71px)"
		srcset="{srcSetWep}"
		type="image/webp"
	/>

	<img
		loading="lazy"
		class="{classes}"
		src="{member.picture.url}"
		alt=""
		sizes="(min-width: 1540px) 1448px, (min-width: 1280px) 1192px, (min-width: 1040px) 936px, (min-width: 780px) 680px, (min-width: 680px) 552px, calc(94.44vw - 71px)"
		srcset="{srcSet}"
		width="{member.picture.width}"
		height="{member.picture.height}"
	/>
</picture>
