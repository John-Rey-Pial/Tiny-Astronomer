<template>
	<v-app>
		<v-main>
			<User />
			<div></div>
		</v-main>
	</v-app>
</template>

<script>
	import User from "../components/User";
	export default {
		components: {
			User,
		},
	};
</script>
