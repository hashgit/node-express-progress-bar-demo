import resource from 'resource-router-middleware';
import randomizer from '../utils/randomizer';

export default () => resource({
	index({ params }, res) {
		const nButtons = randomizer(4, 6);
		const nBars = randomizer(2, 5);

		const buttons = [];
		const bars = [];

		for (let i = 0; i < nButtons; i++) {
			buttons.push(randomizer(-100, 100));
		}

		for (let i = 0; i < nBars; i++) {
			bars.push(randomizer(-100, 100));
		}

		const data = {
			buttons: buttons,
			bars: bars,
		};
		res.json(data);
	},
});
