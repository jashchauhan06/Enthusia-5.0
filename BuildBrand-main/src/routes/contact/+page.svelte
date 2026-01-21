<script lang="ts">
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/stores/theme';

	// Ensure light theme for contact page
	themeStore.set('light');

	let form = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;
	let submitStatus = '';

	async function handleSubmit() {
		isSubmitting = true;
		submitStatus = '';

		// Simulate form submission (replace with actual API call)
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// Reset form
			form = {
				name: '',
				email: '',
				subject: '',
				message: ''
			};
			
			submitStatus = 'success';
		} catch (error) {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>Contact Us - Our Team</title>
	<meta name="description" content="Get in touch with our team. We'd love to hear from you!" />
</svelte:head>

<main class="contact-page">
	<section class="hero-section">
		<div class="container">
			<div class="back-button-container">
				<a href="/" class="back-btn">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
					</svg>
					Back to Home
				</a>
			</div>
			<h1 class="hero-title">Get In Touch</h1>
			<p class="hero-subtitle">
				We'd love to hear from you. Send us a message and we'll respond as soon as possible.
			</p>
		</div>
	</section>

	<section class="contact-content">
		<div class="container">
			<div class="contact-grid">
				<!-- Contact Form -->
				<div class="contact-form-section">
					<h2>Send us a message</h2>
					
					{#if submitStatus === 'success'}
						<div class="success-message">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
							</svg>
							<p>Thank you! Your message has been sent successfully.</p>
						</div>
					{:else if submitStatus === 'error'}
						<div class="error-message">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
							</svg>
							<p>Sorry, there was an error sending your message. Please try again.</p>
						</div>
					{/if}

					<form on:submit|preventDefault={handleSubmit} class="contact-form">
						<div class="form-row">
							<div class="form-group">
								<label for="name">Name *</label>
								<input 
									type="text" 
									id="name" 
									bind:value={form.name}
									required
									placeholder="Your full name"
								/>
							</div>
							<div class="form-group">
								<label for="email">Email *</label>
								<input 
									type="email" 
									id="email" 
									bind:value={form.email}
									required
									placeholder="your.email@example.com"
								/>
							</div>
						</div>
						
						<div class="form-group">
							<label for="subject">Subject *</label>
							<input 
								type="text" 
								id="subject" 
								bind:value={form.subject}
								required
								placeholder="What's this about?"
							/>
						</div>
						
						<div class="form-group">
							<label for="message">Message *</label>
							<textarea 
								id="message" 
								bind:value={form.message}
								required
								placeholder="Tell us more about your inquiry..."
								rows="6"
							></textarea>
						</div>
						
						<button type="submit" class="submit-btn" disabled={isSubmitting}>
							{#if isSubmitting}
								<svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
									<path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
								</svg>
								Sending...
							{:else}
								Send Message
							{/if}
						</button>
					</form>
				</div>

				<!-- Contact Info -->
				<div class="contact-info-section">
					<h2>Contact Information</h2>
					
					<div class="contact-cards">
						<div class="contact-card">
							<div class="contact-icon">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
								</svg>
							</div>
							<div class="contact-details">
								<h3>Email</h3>
								<p>enthusia@sitnagpur.siu.edu.in</p>
							</div>
						</div>

						<div class="contact-card">
							<div class="contact-icon">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
								</svg>
							</div>
							<div class="contact-details">
								<h3>Phone</h3>
								<p>+91 84688 98424 - Jivesh Chawla (Event Lead)</p>
								<p>+91 82377 25629 - Karan Deshmukh (Event Lead)</p>
							</div>
						</div>

						<div class="contact-card location-card">
							<div class="contact-icon">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
								</svg>
							</div>
							<div class="contact-details">
								<h3>SIT Nagpur</h3>
								<a href="https://maps.app.goo.gl/BnhaX8iirjBwcEWu5" target="_blank" class="location-link">
									<p>Symbiosis Institute of Technology, Wathoda Layout, Nagpur,</p>
									<p>Maharashtra 440008</p>
									<span class="view-map">📍 View on Map</span>
								</a>
							</div>
						</div>

						<div class="contact-card">
							<div class="contact-icon">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								</svg>
							</div>
							<div class="contact-details">
								<h3>Social Media</h3>
								<div class="social-links">
									<a href="https://www.linkedin.com/school/symbiosis-institute-of-technology-nagpur-maharashtra/" target="_blank">LinkedIn</a>
									<a href="https://www.youtube.com/channel/UCCS1Ea8AQr-alNd_r4XFI8g" target="_blank">Youtube</a>
									<a href="https://www.instagram.com/symbiosis_sit_nagpur/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">Instagram</a>
								</div>
							</div>
						</div>
					</div>

					<div class="response-time">
						<h3>Response Time</h3>
						<p>We will try to respond to all inquiries within 24 hours.</p>
					</div>
				</div>
			</div>	
		</div>
	</section>
</main>

<style lang="scss">
	@use '../../lib/styles/functions' as *;

	:global(body:has(.contact-page)) {
		overflow-y: auto;
	}

	:global(.contact-page ~ .footer) {
		min-height: auto !important;
		height: auto !important;
	}

	.contact-page {
		min-height: 100vh;
		background: var(--theme-primary);
		color: #000000;
	}

	.hero-section {
		padding: mobile-vw(80px) 0 mobile-vw(40px);
		text-align: center;

		@include desktop {
			padding: desktop-vw(120px) 0 desktop-vw(60px);
		}

		.back-button-container {
			margin-bottom: mobile-vw(32px);
			text-align: left;

			@include desktop {
				margin-bottom: desktop-vw(40px);
			}

			.back-btn {
				display: inline-flex;
				align-items: center;
				gap: mobile-vw(8px);
				padding: mobile-vw(10px) mobile-vw(16px);
				background: rgba(0, 0, 0, 0.1);
				border: 1px solid rgba(0, 0, 0, 0.2);
				border-radius: mobile-vw(20px);
				color: #000000;
				text-decoration: none;
				font-size: mobile-vw(14px);
				font-weight: 500;
				transition: all 0.3s ease;

				@include desktop {
					gap: desktop-vw(10px);
					padding: desktop-vw(12px) desktop-vw(20px);
					border-radius: desktop-vw(20px);
					font-size: desktop-vw(16px);
				}

				&:hover {
					background: rgba(0, 0, 0, 0.15);
					border-color: rgba(0, 0, 0, 0.3);
					transform: translateX(-2px);
				}

				svg {
					width: mobile-vw(20px);
					height: mobile-vw(20px);

					@include desktop {
						width: desktop-vw(20px);
						height: desktop-vw(20px);
					}
				}
			}
		}

		.hero-title {
			font-size: mobile-vw(48px);
			font-weight: 700;
			margin-bottom: mobile-vw(16px);
			color: #000000;

			@include desktop {
				font-size: desktop-vw(72px);
				margin-bottom: desktop-vw(24px);
			}
		}

		.hero-subtitle {
			font-size: mobile-vw(18px);
			color: #000000;
			opacity: 0.8;
			max-width: mobile-vw(600px);
			margin: 0 auto;

			@include desktop {
				font-size: desktop-vw(20px);
				max-width: desktop-vw(700px);
			}
		}
	}

	.container {
		width: var(--layout-width);
		margin: 0 auto;
		padding: 0 mobile-vw(20px);

		@include desktop {
			padding: 0 desktop-vw(40px);
		}
	}

	.contact-content {
		padding-bottom: mobile-vw(80px);

		@include desktop {
			padding-bottom: desktop-vw(120px);
		}
	}

	.contact-grid {
		display: grid;
		gap: mobile-vw(60px);

		@include desktop {
			grid-template-columns: 1fr 1fr;
			gap: desktop-vw(80px);
		}
	}

	.contact-form-section {
		h2 {
			font-size: mobile-vw(32px);
			margin-bottom: mobile-vw(32px);
			font-weight: 600;
			color: #000000;

			@include desktop {
				font-size: desktop-vw(36px);
				margin-bottom: desktop-vw(40px);
			}
		}
	}

	.success-message, .error-message {
		display: flex;
		align-items: center;
		gap: mobile-vw(12px);
		padding: mobile-vw(16px);
		border-radius: mobile-vw(8px);
		margin-bottom: mobile-vw(24px);

		@include desktop {
			gap: desktop-vw(12px);
			padding: desktop-vw(16px);
			border-radius: desktop-vw(8px);
			margin-bottom: desktop-vw(32px);
		}
	}

	.success-message {
		background: rgba(34, 197, 94, 0.1);
		border: 1px solid rgba(34, 197, 94, 0.3);
		color: #22c55e;
	}

	.error-message {
		background: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.3);
		color: #ef4444;
	}

	.contact-form {
		.form-row {
			display: grid;
			gap: mobile-vw(20px);

			@include desktop {
				grid-template-columns: 1fr 1fr;
				gap: desktop-vw(24px);
			}
		}

		.form-group {
			margin-bottom: mobile-vw(24px);

			@include desktop {
				margin-bottom: desktop-vw(32px);
			}

			label {
				display: block;
				font-size: mobile-vw(14px);
				font-weight: 500;
				margin-bottom: mobile-vw(8px);
				color: #000000;

				@include desktop {
					font-size: desktop-vw(16px);
					margin-bottom: desktop-vw(10px);
				}
			}

			input, textarea {
				width: 100%;
				padding: mobile-vw(12px) mobile-vw(16px);
				background: rgba(0, 0, 0, 0.05);
				border: 1px solid rgba(0, 0, 0, 0.2);
				border-radius: mobile-vw(8px);
				color: #000000;
				font-size: mobile-vw(16px);
				transition: all 0.3s ease;

				@include desktop {
					padding: desktop-vw(14px) desktop-vw(18px);
					border-radius: desktop-vw(8px);
					font-size: desktop-vw(16px);
				}

				&:focus {
					outline: none;
					border-color: rgba(0, 0, 0, 0.4);
					background: rgba(0, 0, 0, 0.08);
				}

				&::placeholder {
					color: rgba(0, 0, 0, 0.8);
					font-weight: 500;
				}
			}

			textarea {
				resize: vertical;
				min-height: mobile-vw(120px);

				@include desktop {
					min-height: desktop-vw(140px);
				}
			}
		}

		.submit-btn {
			background: var(--theme-secondary);
			color: var(--theme-primary);
			border: none;
			padding: mobile-vw(14px) mobile-vw(32px);
			border-radius: mobile-vw(25px);
			font-size: mobile-vw(16px);
			font-weight: 600;
			cursor: pointer;
			transition: all 0.3s ease;
			display: flex;
			align-items: center;
			gap: mobile-vw(8px);

			@include desktop {
				padding: desktop-vw(16px) desktop-vw(40px);
				border-radius: desktop-vw(25px);
				font-size: desktop-vw(16px);
				gap: desktop-vw(8px);
			}

			&:hover:not(:disabled) {
				transform: translateY(-2px);
				box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
				background: rgba(0, 0, 0, 0.9);
			}

			&:disabled {
				opacity: 0.7;
				cursor: not-allowed;
			}

			.spinner {
				animation: spin 1s linear infinite;
			}
		}
	}

	.contact-info-section {
		h2 {
			font-size: mobile-vw(32px);
			margin-bottom: mobile-vw(32px);
			font-weight: 600;
			color: #000000;

			@include desktop {
				font-size: desktop-vw(36px);
				margin-bottom: desktop-vw(40px);
			}
		}
	}

	.contact-cards {
		display: grid;
		gap: mobile-vw(24px);
		margin-bottom: mobile-vw(40px);

		@include desktop {
			gap: desktop-vw(32px);
			margin-bottom: desktop-vw(50px);
		}
	}

	.contact-card {
		display: flex;
		gap: mobile-vw(16px);
		padding: mobile-vw(20px);
		background: rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: mobile-vw(12px);
		transition: all 0.3s ease;

		@include desktop {
			gap: desktop-vw(20px);
			padding: desktop-vw(24px);
			border-radius: desktop-vw(12px);
		}

		&:hover {
			background: rgba(0, 0, 0, 0.08);
			border-color: rgba(0, 0, 0, 0.2);
		}

		&.location-card:hover {
			transform: translateY(-2px);
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		}

		.contact-icon {
			flex-shrink: 0;
			width: mobile-vw(48px);
			height: mobile-vw(48px);
			background: rgba(0, 0, 0, 0.1);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;

			@include desktop {
				width: desktop-vw(56px);
				height: desktop-vw(56px);
			}

			svg {
				width: mobile-vw(24px);
				height: mobile-vw(24px);

				@include desktop {
					width: desktop-vw(28px);
					height: desktop-vw(28px);
				}
			}
		}

		.contact-details {
			h3 {
				font-size: mobile-vw(18px);
				font-weight: 600;
				margin-bottom: mobile-vw(8px);
				color: #000000;

				@include desktop {
					font-size: desktop-vw(20px);
					margin-bottom: desktop-vw(10px);
				}
			}

			p {
				font-size: mobile-vw(14px);
				color: #000000;
				opacity: 0.8;
				margin-bottom: mobile-vw(4px);

				@include desktop {
					font-size: desktop-vw(16px);
					margin-bottom: desktop-vw(6px);
				}

				&:last-child {
					margin-bottom: 0;
				}
			}

			.location-link {
				text-decoration: none;
				color: inherit;
				display: block;
				transition: all 0.3s ease;

				&:hover {
					color: #0066cc;

					.view-map {
						color: #0066cc;
						transform: translateX(4px);
					}
				}

				.view-map {
					display: inline-block;
					font-size: mobile-vw(12px);
					color: #666;
					margin-top: mobile-vw(8px);
					font-weight: 500;
					transition: all 0.3s ease;

					@include desktop {
						font-size: desktop-vw(14px);
						margin-top: desktop-vw(10px);
					}
				}
			}

			.social-links {
				display: flex;
				gap: mobile-vw(12px);

				@include desktop {
					gap: desktop-vw(16px);
				}

				a {
					color: #000000;
					text-decoration: none;
					font-size: mobile-vw(14px);
					opacity: 0.8;
					transition: opacity 0.3s ease;

					@include desktop {
						font-size: desktop-vw(16px);
					}

					&:hover {
						opacity: 1;
					}
				}
			}
		}
	}

	.response-time {
		padding: mobile-vw(20px);
		background: rgba(0, 0, 0, 0.03);
		border-radius: mobile-vw(12px);
		border: 1px solid rgba(0, 0, 0, 0.1);

		@include desktop {
			padding: desktop-vw(24px);
			border-radius: desktop-vw(12px);
		}

		h3 {
			font-size: mobile-vw(18px);
			font-weight: 600;
			margin-bottom: mobile-vw(8px);
			color: #000000;

			@include desktop {
				font-size: desktop-vw(20px);
				margin-bottom: desktop-vw(10px);
			}
		}

		p {
			font-size: mobile-vw(14px);
			color: #000000;
			opacity: 0.8;

			@include desktop {
				font-size: desktop-vw(16px);
			}
		}
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>