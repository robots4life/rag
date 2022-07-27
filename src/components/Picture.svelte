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
</script>

<!-- {JSON.stringify(picture, null, 2)} -->

<picture class="basis-1/2 border">
	<source
		sizes="(min-width: 1540px) 1448px, (min-width: 1280px) 1192px, (min-width: 1040px) 936px, (min-width: 780px) 680px, (min-width: 680px) 552px, calc(94.44vw - 71px)"
		srcset="{srcSetWep}"
		type="image/webp"
	/>

	<!-- <img style="max-width: 100px; max-height: auto;" src="{picture.url}" alt="" sizes="" srcset="" /> -->

	<img
		class="{classes}"
		src="{member.picture.url}"
		alt=""
		sizes="(min-width: 1540px) 1448px, (min-width: 1280px) 1192px, (min-width: 1040px) 936px, (min-width: 780px) 680px, (min-width: 680px) 552px, calc(94.44vw - 71px)"
		srcset="{srcSet}"
		width="{member.picture.width}"
		height="{member.picture.height}"
	/>
</picture>
