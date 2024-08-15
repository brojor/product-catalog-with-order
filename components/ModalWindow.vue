<template>
	<div class="fixed inset-0 bg-neutral-900/30 flex items-center justify-center">
		<div class="w-full max-w-2xl p-6 bg-white rounded-xl max-h-[90vh] overflow-y-auto relative">
			<button @click="$emit('close')"
				class="absolute right-4 border rounded-full h-8 w-8 hover:border-black flex justify-center items-center">
				<IconsClose />
			</button>
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>