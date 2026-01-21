<script lang="ts">
	import cn from 'clsx';
	import { introOutStore } from '$lib/stores/introOut';

	let className = '';

	export { className as class };
</script>

<div class={cn(className, 'brand-title')}>
	<img src="/Buildbrand_heading.png" alt="Build Brand" class="brand-logo" />
</div>

<style lang="scss">
	@use '../styles/functions' as *;

	$intro-out: 1500ms;

	.brand-title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		position: relative;
		z-index: 2;
		
		.brand-logo {
			width: auto;
			height: mobile-vw(400px);
			max-width: 95%;
			object-fit: contain;
			filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
			mix-blend-mode: screen;
			
			@include desktop {
				height: desktop-vw(600px);
				max-width: 90%;
			}
		}
	}

	:global(.translate) {
		@include desktop {
			transform: translate3d(0, -100%, 0);
			transition: transform $intro-out var(--ease-out-expo);
		}
	}

	:global(.mobile) {
		@include mobile {
			transform: translate3d(0, -105%, 0);
		}
	}
</style>
