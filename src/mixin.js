export const showName = {
	methods: {
		showName() {
			alert(this.name);
		}
	}
};

export const publicData = {
	data() {
		return {
			x: 100,
			y: 100
		};
	}
};

export const addHooks = {
	mounted () {
		console.log("hello!", this);
	}
};