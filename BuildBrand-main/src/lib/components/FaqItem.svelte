<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import cn from 'clsx';
    import { slide } from 'svelte/transition';

	let className = '';

	export { className as class };
	export let question = '';
	export let answer = '';
	export let visible = false;
	export let index = 0;

	let Arrow: ComponentType;
    let isOpen = false;

	onMount(async () => {
		Arrow = (await import('./Icons/ArrowDiagonal.svelte')).default;
	});

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<button class={cn(className, 'item', visible && 'visible')} style={`--i: ${index};`} on:click={toggle}>
	<div class="inner">
		<div class="title">
			<span class="text">{question}</span>
            <div class={cn("arrow-wrapper", isOpen && "open")}>
			    <svelte:component this={Arrow} class="arrow" />
            </div>
		</div>
        {#if isOpen}
		<div class="answer" transition:slide>
			<span>{answer}</span>
		</div>
        {/if}
	</div>
</button>

<style lang="scss">
	@use '../styles/functions' as *;

	.item {
		position: relative;
        display: block;
        width: 100%;
        text-align: left;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;

		.inner {
			padding: mobile-vw(20px) mobile-vw(24px);
			overflow: hidden;
			display: flex;
			flex-direction: column; 
            background: rgba(255, 255, 255, 0.15);
            border-radius: mobile-vw(12px);
            backdrop-filter: blur(15px);
            margin-bottom: mobile-vw(8px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

			@include desktop {
				padding: desktop-vw(20px) desktop-vw(32px);
                border-radius: desktop-vw(16px);
			}
		}

		&::after {
			content: none;
		}

        /* Hover effect background */
		&::before {
			position: absolute;
			left: 0;
			top: 0;
			content: '';
			width: 100%;
			height: 100%;
			background-color: var(--theme-contrast);
			transform: scaleY(0);
			transform-origin: top;
			transition: transform 600ms var(--ease-out-expo);
            z-index: -1;
		}

		@include mobile {
			&::before {
				content: none;
			}
		}

		.title {
			display: flex;
			align-items: center;
            justify-content: space-between;
			transition: transform 600ms var(--ease-out-expo);
			overflow: hidden;
            width: 100%;

			.text {
				font-weight: 700;
				line-height: 120%;
				font-size: mobile-vw(18px);
				letter-spacing: 0.05em;
                color: #ffffff; 
                text-transform: uppercase;
                
                /* Clean text shadow for better visibility */
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

				@include mobile {
					margin-bottom: mobile-vw(8px);
				}

				@include desktop {
					line-height: 114%;
					font-size: desktop-vw(26px);
                    letter-spacing: 0.1em;
				}
			}


            .arrow-wrapper {
                margin-left: auto;
                transition: transform 400ms var(--ease-out-expo);
                
                &.open {
                    transform: rotate(90deg);
                }
            }

			:global(.arrow) {
				aspect-ratio: 1 / 1;
				width: mobile-vw(19px);

				@include desktop {
                    // Start visible but allow hover/open effects if needed
					// transform: translate(-20%, 20%);
					// opacity: 0;
					margin-left: desktop-vw(24px);
					width: desktop-vw(19px);
				}
			}
		}

		.answer {
			font-weight: 400;
			line-height: 140%;
			letter-spacing: 0.01em;
			font-size: mobile-vw(16px);
            margin-top: mobile-vw(12px);
            opacity: 0.95;
            color: rgba(255, 255, 255, 0.9);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

			@include desktop {
                margin-top: desktop-vw(16px);
				font-size: desktop-vw(20px);
                max-width: 80%;
			}
		}

		@include hover {
			&:hover {
				&::before {
					transform: scaleY(1);
					transform-origin: bottom;
				}

				.title {
                    // Shift text on hover like ListItem
					transform: translateX(desktop-vw(16px));
                    
                    /*
					:global(.arrow) {
						transition: opacity 600ms var(--ease-out-expo), transform 600ms var(--ease-out-expo);
						opacity: 1;
						transform: translate(0, 0);
						transition-delay: 100ms;
					}
                    */
				}
                
                // Keep answer aligned or indented if needed
                .answer {
                    transform: translateX(desktop-vw(16px));
                    transition: transform 600ms var(--ease-out-expo);
                }
			}
		}

		// Entrance animation
		@include desktop {
			display: inline-block;
			width: 100%;
			transition: transform 1.2s var(--ease-out-expo);
			transition-delay: calc(100ms * var(--i));

			&::after {
				transition: transform 1.2s var(--ease-out-expo);
				transform-origin: right;
				transition-delay: calc(100ms * var(--i));
			}

			.text, .arrow-wrapper {
				transition: transform 1.2s var(--ease-out-expo);
				display: block;
				transition-delay: calc(100ms * var(--i));
			}

			&:not(.visible) {
				transform: translateY(100%);

				&::after {
					transform: scaleX(0);
				}

				.text, .arrow-wrapper {
					transform: translateY(100%);
				}
			}
		}
	}
</style>
