<script lang="ts">
	import { onMount } from 'svelte';
	import cn from 'clsx';

	import { browser } from '$app/environment';
	import { lenisStore } from '$lib/stores/lenis';
	import { introOutStore, setIntroOutStore } from '$lib/stores/introOut';
	import { useMediaQuery } from '$lib/lifecycle-functions/useMediaQuery';

	const isMobile = useMediaQuery('(max-width: 800px)');

	let isLoaded = false;
	let scroll = false;

	$: if (browser && $isMobile) {
		document.documentElement.classList.toggle('intro', false);
	}

	$: if (browser && $lenisStore) {
		if (scroll) {
			$lenisStore.start();
			document.documentElement.classList.toggle('intro', false);
		} else {
			setTimeout(() => {
				$lenisStore?.stop();
			}, 0);

			document.documentElement.classList.toggle('intro', true);
		}
	}

	$: if (browser && !scroll) {
		document.documentElement.classList.toggle('intro', true);
	}

	// $: EIClassName = cn($introOutStore && 'translate');

	onMount(() => {
		setTimeout(() => (isLoaded = true), 1000);

		if ($isMobile) {
			scroll = true;
			setIntroOutStore(true);
		}
	});

	function onTransitionEnd(e: TransitionEvent & { currentTarget: HTMLDivElement }) {
		e.currentTarget.classList.forEach((value) => {
			if (value.includes('out')) {
				scroll = true;
			}

			// if (value.includes('show')) {
			setIntroOutStore(true);
			// }
		});
	}
</script>

<div class={cn('wrapper', isLoaded && 'out')} on:transitionend={onTransitionEnd}>
	<div class={cn(isLoaded && 'relative')}>
		<!-- <LNS {isLoaded} isIntro={true} fill={'var(--black)'} /> -->
		<!-- <EI {isLoaded} isIntro={true} fill={'var(--black)'} bind:class={EIClassName} /> -->
		<h1 class="intro-text" class:show={isLoaded}>ENTHUSIA 5.0</h1>
	</div>
</div>

<style lang="scss">
	@use '../styles/functions' as *;

	$intro-in: 1500ms;
	$intro-out: 1500ms;

	.wrapper {
		height: 100vh;
		background-color: var(--pink);
		left: 0;
		overflow: hidden;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;

		@include mobile {
			display: none;
		}

		&.out {
			transform: translate3d(0, -100%, 0);
			transition: transform $intro-out var(--ease-out-expo);
			transition-delay: calc($intro-in + 0ms);
		}

		.relative {
			padding: desktop-vw(30px) desktop-vw(32.5px);

			transition: transform $intro-out var(--ease-out-expo);
			// transform: translate3d(0, desktop-vh(850px), 0);
			transition-delay: calc($intro-in + 0ms);

			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center; /* Center veritcally */
			align-items: center; /* Center horizontally */
		}

		.show {
			transition: transform $intro-in var(--ease-out-expo);
			transition-delay: calc(var(--index) * 75ms);
			transform: translate3d(0, 0, 0);
		}
	}

	.translate {
		@include desktop {
			transform: translate3d(0, -100%, 0);
			transition: transform $intro-out var(--ease-out-expo);
		}
	}

	.intro-text {
		font-family: var(--font-primary);
		font-size: 15vw;
		font-weight: 900;
		line-height: 0.8;
		text-transform: uppercase;
		color: var(--black);
		white-space: nowrap;
		margin: 0;
		opacity: 0;
		transform: translateY(100%);
		transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
		
		&.show {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
