import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/demo-event-calendar', {
	icon: 'calendar',
	edit: Edit,
	save,
});
