<template>
	<div>
		<button>查看日志</button>
		<div v-for="log in logsList">
			<div>
				<div>msg:{{ log.row.err.message }}</div>
				<br/>
				<div>url: {{ log.row.url }}</div>
			</div>
			<div>
				{{ scope.row.err.stack }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Logger',
  props: {
    logsList: {
      type: Array
    }
  },
  data() {
    return {
      dialogTableVisible: false
    }
  }
}
</script>

<style scoped>

</style>
