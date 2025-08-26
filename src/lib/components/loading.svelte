<script lang="ts">
	const { message = 'Loading, please wait...' } = $$props;
</script>

<div class="loader-container">
	<div class="spinner"></div>
	<div class="message">{message}</div>
</div>

<style>
	.loader-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 120px;
	}

	.spinner {
		border: 4px solid #f3f3f3;
		border-top: 4px solid #3498db;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		animation: spin 1s linear infinite;
		margin-bottom: 12px;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.message {
		color: #555;
		font-size: 1.1rem;
		font-weight: 500;
	}
</style>
