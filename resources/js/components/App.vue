<template>
<v-app>
	<router-view>
	<router-view/>
	</v-app>
</template>

<script>
import Home from './componets/Home'
export default {
	name: 'App',
	data: () => ({

	}),
	mounted() {
		console.log('Component mounted.')
	}
}
</script>