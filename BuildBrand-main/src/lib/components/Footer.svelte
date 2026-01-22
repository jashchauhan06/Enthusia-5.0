<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import cn from 'clsx';
	import { faqs } from '$lib/content/faqs';
	import FaqItem from '$lib/components/FaqItem.svelte';
	import Button from '$lib/components/Button.svelte';

	// Team members data
	const teamMembers = [
		{
			name: "Sunidhi Haware",
			role: "President",
			image: "/team/Sunidhi.jpg",
			linkedin: "https://www.linkedin.com/in/sunidhi-haware-797a97323/"
		},
		{
			name: "Prathmesh Raipurkar",
			role: "Vice President",
			image: "/team/Prathmesh.png",
			linkedin: "https://linkedin.com/in/prathmesh-raipurkar"
		},
		{
			name: "Jivesh Chawla",
			role: "Event Lead",
			image: "/team/Jiwesh Chawla.png",
			linkedin: "https://www.linkedin.com/in/jivesh-chawla-134324299/"
		},
		{
			name: "Karan Deshmukh",
			role: "Event Lead",
			image: "/team/Karan Deshmukh.png",
			linkedin: "https://www.linkedin.com/in/karan-deshmukh-cse/"
		},
		{
			name: "Harsh Kumar",
			role: "Sponsorship",
			image: "/team/harsh.png",
			linkedin: "https://www.linkedin.com/in/harsh-2227-kumar/"
		},
		{
			name: "Jash Chauhan",
			role: "Web Development Team Lead",
			image: "/team/Jash.jpg",
			linkedin: "https://linkedin.com/in/jashchauhan06"
		}
	];

	let currentSlide = 0;
	const cardsPerView = 3;
	const maxSlides = 2; // Fixed to show only 2 slides for 6 members
	let autoSlideInterval: ReturnType<typeof setInterval>;
	let isHovered = false;

	let sectionRef: HTMLElement;
	let observedCards: HTMLElement[] = [];

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
				}
			});
		}, { threshold: 0.1 });

		observedCards.forEach(card => {
			if (card) observer.observe(card);
		});

		// Start auto-slide
		startAutoSlide();

		return () => {
			observer.disconnect();
			stopAutoSlide();
		};
	});

	function startAutoSlide() {
		if (teamMembers.length > cardsPerView) {
			autoSlideInterval = setInterval(() => {
				if (!isHovered) {
					if (currentSlide >= maxSlides) {
						currentSlide = 0;
					} else {
						currentSlide++;
					}
				}
			}, 3000); // Change slide every 3 seconds
		}
	}

	function stopAutoSlide() {
		if (autoSlideInterval) {
			clearInterval(autoSlideInterval);
		}
	}

	function handleMouseEnter() {
		isHovered = true;
	}

	function handleMouseLeave() {
		isHovered = false;
	}

	function nextSlide() {
		if (currentSlide < maxSlides) {
			currentSlide++;
		}
	}

	function prevSlide() {
		if (currentSlide > 0) {
			currentSlide--;
		}
	}

	$: showArrows = teamMembers.length > cardsPerView;
	$: isContactPage = $page.url.pathname === '/contact';
</script>

<footer class={cn('theme-light', 'footer', isContactPage && 'contact-footer')}>
	{#if !isContactPage}
	<div class="layout-grid top hide-on-mobile">
		<div class="team-section" on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
			{#if showArrows}
				<button class="nav-arrow prev" on:click={prevSlide} disabled={currentSlide === 0}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
					</svg>
				</button>
			{/if}
			
			<div class="team-cards-container">
				<div class="team-cards" style="transform: translateX(-{currentSlide * (100 / cardsPerView)}%)">
					{#each teamMembers as member, i}
						<div class="team-card" bind:this={observedCards[i]} style="--index: {i}">
							<div class="card-image">
								<img src={member.image} alt={member.name} />
							</div>
							<div class="card-content">
								<h3 class="member-name">{member.name}</h3>
								<p class="member-role">{member.role}</p>
								<a href={member.linkedin} class="linkedin-btn" target="_blank">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
									</svg>
									LinkedIn
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
			
			{#if showArrows}
				<button class="nav-arrow next" on:click={nextSlide} disabled={currentSlide === maxSlides}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
					</svg>
				</button>
			{/if}
		</div>
		
		<div class="shameless-plug">
			<p class="h4">Our Team</p>
			<p class="p-s">
				Building amazing <br /> experiences together
			</p>
		</div>
		<!-- <Button
        class={s.cta}
        arrow
        icon={<GitHub />}
        href="https://github.com/studio-freight/lenis"
      >
        Let's build together
      </Button> -->
	</div>
	{/if}
	<div class="layout-block top hide-on-desktop">


		<div class="mobile-faq">
			<h2 class="h3">FAQS</h2>
			<ul class="list">
				{#each faqs as { question, answer }, i (question)}
					<li>
						<FaqItem {question} {answer} index={i} visible={true} />
					</li>
				{/each}
			</ul>
		</div>

		{#if $page.url.pathname !== '/contact'}
			<div class="mobile-contact">
				<Button class="contact-btn" href="/contact">Contact Us</Button>
			</div>
		{/if}
	</div>
	<div class="bottom">
		<div class="links">
			{#if $page.url.pathname !== '/contact'}
			<a class="link p-xs hide-on-mobile" href="/contact">Contact Us</a>
			{/if}
		</div>
		<!-- <Button
        class={cn(s.cta, 'hide-on-desktop')}
        arrow
        icon={<GitHub />}
        href="https://github.com/studio-freight/lenis"
      >
        Let's build together
      </Button> -->
	</div>
</footer>

<style lang="scss">
	@use '../styles/functions' as *;

	.footer {
		// background-color: var(--theme-primary);
		color: var(--theme-secondary);
		padding: mobile-vw(20px) 0;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		@include mobile {
			height: auto;
			z-index: 100;
			padding-top: mobile-vw(80px);
			margin-top: mobile-vw(100px);
		}

		@include desktop {
			height: 100vh;
			padding: desktop-vw(40px) 0;
		}

		&.contact-footer {
			min-height: auto;
			height: auto;
			padding: mobile-vw(20px) 0;

			@include desktop {
				height: auto;
				padding: desktop-vw(20px) 0;
			}
		}

		.top {
			position: relative;
			height: 100%;
			width: 100%;
			padding-bottom: mobile-vw(20px);
			align-items: center;

			@include mobile {
				display: flex;
				flex-direction: column;
				height: auto;
			}

			@include desktop {
				padding-bottom: desktop-vw(40px);
			}

			.team-section {
				display: flex;
				align-items: center;
				gap: desktop-vw(20px);
				grid-column: 1 / span 8;
				position: relative;

				.nav-arrow {
					background: rgba(255, 255, 255, 0.1);
					border: 1px solid rgba(255, 255, 255, 0.2);
					border-radius: 50%;
					width: desktop-vw(48px);
					height: desktop-vw(48px);
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					transition: all 0.3s ease;
					color: var(--theme-secondary);
					flex-shrink: 0;

					&:hover:not(:disabled) {
						background: rgba(255, 255, 255, 0.2);
						transform: scale(1.1);
					}

					&:disabled {
						opacity: 0.3;
						cursor: not-allowed;
					}

					svg {
						width: desktop-vw(24px);
						height: desktop-vw(24px);
					}
				}

				.team-cards-container {
					flex: 1;
					overflow: hidden;
					border-radius: desktop-vw(16px);
				}
			}

			.team-cards {
				display: grid;
				gap: mobile-vw(20px);
				width: 100%;
				transition: transform 0.5s ease;
				
				@include desktop {
					grid-template-columns: repeat(6, 1fr);
					gap: desktop-vw(30px);
					width: calc(100% * 6 / 3);
				}

				@include mobile {
					grid-template-columns: 1fr 1fr;
					gap: mobile-vw(12px);
				}

				&.mobile {
					@include desktop {
						display: none;
					}
				}

				.team-card {
					background: rgba(255, 255, 255, 0.03);
					border-radius: mobile-vw(16px);
					padding: mobile-vw(12px);
					backdrop-filter: blur(20px);
					border: 1px solid rgba(255, 255, 255, 0.05);
					transition: all 0.5s var(--ease-out-expo), opacity 1s ease-out, transform 1s var(--ease-out-expo);
					opacity: 1; // Ensure visible by default
					transform: translateY(0);

					@include mobile {
						min-height: mobile-vw(50px);
						display: flex;
						align-items: center;
						justify-content: center;
					}

					&.revealed {
						opacity: 1;
						transform: translateY(0);
						transition-delay: calc(var(--index) * 100ms);
					}

					@include desktop {
						border-radius: desktop-vw(16px);
						padding: desktop-vw(24px);
					}

					&:hover {
						transform: translateY(-8px);
						background: rgba(255, 255, 255, 0.08);
						border-color: rgba(255, 255, 255, 0.2);
						box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 152, 162, 0.1);
					}

					.card-image {
						width: 100%;
						aspect-ratio: 1;
						border-radius: mobile-vw(12px);
						overflow: hidden;
						margin-bottom: mobile-vw(16px);

						@include desktop {
							border-radius: desktop-vw(12px);
							margin-bottom: desktop-vw(20px);
						}

						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.card-content {
						text-align: center;

						.member-name {
							font-size: mobile-vw(14px);
							font-weight: 600;
							margin-bottom: 0;
							color: #ffffff;
							text-transform: uppercase;
							letter-spacing: 0.05em;
							text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

							@include desktop {
								font-size: desktop-vw(20px);
								margin-bottom: desktop-vw(16px);
							}
						}

						.member-role {
							font-size: mobile-vw(16px);
							color: rgba(255, 255, 255, 0.9);
							margin-bottom: mobile-vw(16px);
							font-weight: 500;
							text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

							@include desktop {
								font-size: desktop-vw(16px);
								margin-bottom: desktop-vw(20px);
							}
						}

						.linkedin-btn {
							display: inline-flex;
							align-items: center;
							gap: mobile-vw(8px);
							padding: mobile-vw(8px) mobile-vw(16px);
							background: #0077b5;
							color: white;
							border-radius: mobile-vw(20px);
							text-decoration: none;
							font-size: mobile-vw(14px);
							font-weight: 500;
							transition: all 0.3s ease;

							@include desktop {
								gap: desktop-vw(8px);
								padding: desktop-vw(10px) desktop-vw(20px);
								border-radius: desktop-vw(20px);
								font-size: desktop-vw(14px);
							}

							&:hover {
								background: #005885;
								transform: scale(1.05);
							}

							svg {
								width: mobile-vw(16px);
								height: mobile-vw(16px);

								@include desktop {
									width: desktop-vw(16px);
									height: desktop-vw(16px);
								}
							}
						}
					}
				}
			}

			.first-line {
				margin: auto 0;

				@include desktop {
					margin: 0;
					align-self: start;
					grid-column: 1 / span 7;
				}
			}

			.shameless-plug {
				align-self: start;
				display: flex;
				flex-direction: column;
				background: rgba(255, 255, 255, 0.1);
				backdrop-filter: blur(15px);
				padding: mobile-vw(20px);
				border-radius: mobile-vw(15px);
				border: 1px solid rgba(255, 255, 255, 0.2);
				box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
				text-align: start;

				@include desktop {
					grid-column: 9 / span 3;
					padding: desktop-vw(25px);
					border-radius: desktop-vw(20px);
				}

				p:first-child {
					margin-bottom: mobile-vw(8px);
					color: #ffffff;
					text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
					font-weight: 700;

					@include desktop {
						margin-bottom: desktop-vw(8px);
					}
				}

				p:last-child {
					color: rgba(255, 255, 255, 0.9);
					text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
				}
			}

			.cta {
				// this CTA is only rendered on desktop
				position: absolute;
				left: 0;
				bottom: desktop-vw(40px);
			}

			.mobile-faq {
				margin-top: mobile-vw(20px);
				width: 100%;
				padding: 0 mobile-vw(16px);

				h2 {
					margin-bottom: mobile-vw(24px);
					font-weight: 900;
					letter-spacing: 0.1em;
					font-size: mobile-vw(32px);
				}

				.list {
					list-style: none;
					padding: 0;
				}
			}

			.mobile-contact {
				margin-top: mobile-vw(60px);
				margin-bottom: mobile-vw(100px);
				width: 100%;
				padding: 0 mobile-vw(16px);
				display: flex;
				justify-content: center;

				:global(.contact-btn) {
					width: 100%;
					background: transparent;
					border: 1px solid var(--black);
					color: var(--black) !important;
					text-transform: uppercase;
					letter-spacing: 0.2em;
					font-weight: 700;
					border-radius: mobile-vw(4px);
					transition: all 0.4s ease;
					
					:global(.text) {
						color: var(--black) !important;
					}
					
					@include mobile {
						text-align: center;
						justify-content: center;
						height: mobile-vw(60px);
					}

					&:hover {
						background: var(--pink);
						color: var(--white);
						box-shadow: 0 0 30px rgba(255, 152, 162, 0.4);
					}
				}
			}

			.last-line {
				// this line is only rendered on desktop
				text-align: end;
				align-self: end;
				grid-column: 2 / -1;
			}
		}

		.bottom {
			width: var(--layout-width);
			margin: 0 auto;

			@include mobile {
				display: grid;
				grid-template-columns: 1fr 1fr;
			}

			@include desktop {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.links {
				@include desktop {
					.link:not(:first-child) {
						margin: 0;
						margin-left: desktop-vw(32px);
					}
				}

				@include mobile {
					.link:not(:last-child) {
						display: block;
						margin-bottom: mobile-vw(16px);
					}
				}

				.link {
					color: #ffffff !important;
					text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
					font-weight: 600;
					transition: all 0.3s ease;

					&:hover {
						color: rgba(255, 255, 255, 0.8) !important;
						text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
					}
				}
			}

			.tm {
				@include mobile {
					text-align: end;
					align-self: end;
				}

				span {
					vertical-align: text-top;
				}
			}

			.cta {
				// this CTA is only rendered on mobile
				grid-column: 1 / -1;
				margin-top: mobile-vw(24px);
			}
		}
	}
</style>
