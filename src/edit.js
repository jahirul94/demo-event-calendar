import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

function Edit({ attributes, setAttributes }) {

	const { location, country, startTime, endTime, registrationEmail, startDate, endDate, registrationDeadline, organizer } = attributes;


	return (
		<div {...useBlockProps()}>
			<RichText.Content tagName='h2' value='Event Banner' />
			<InnerBlocks
				allowedBlocks={['core/image']}
			/>
			<div>
				<RichText.Content tagName='h5' value='Event Country:'></RichText.Content>
				<InputControl placeholder='enter event country' value={country} onChange={(country) => setAttributes({ country: country })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='Event Location:'></RichText.Content>
				<InputControl placeholder='enter event location' value={location} onChange={(location) => setAttributes({ location: location })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='Start Time:'></RichText.Content>
				<InputControl type='time' placeholder='enter start time' value={startTime} onChange={(st) => setAttributes({ startTime: st })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='End Time:'></RichText.Content>
				<InputControl type='time' placeholder='enter end time' value={endTime} onChange={(et) => setAttributes({ endTime: et })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='Organizer:'></RichText.Content>
				<InputControl placeholder='event organizer' value={organizer} onChange={(org) => setAttributes({ organizer: org })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='Registration email:'></RichText.Content>
				<InputControl type='email' placeholder='registration email' value={registrationEmail} onChange={(re) => setAttributes({ registrationEmail: re })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='Start Date:'></RichText.Content>
				<InputControl type='date' placeholder='start date' value={startDate} onChange={(sd) => setAttributes({ startDate: sd })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='End Date :'></RichText.Content>
				<InputControl type='date' placeholder='end date' value={endDate} onChange={(ed) => setAttributes({ endDate: ed })} />
			</div>
			<div>
				<RichText.Content tagName='h5' value='Registration Deadline:'></RichText.Content>
				<InputControl type='date' placeholder='registration deadline' value={registrationDeadline} onChange={(rd) => setAttributes({ registrationDeadline: rd })} />
			</div>
		</div>
	);
}
export default Edit;