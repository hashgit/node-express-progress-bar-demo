import { version } from '../../package.json';
import { Router } from 'express';
import bars from './bars';

export default () => {
	let api = Router();

	// mount the facets resource
	api.use('/bars', bars());

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
