import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

function save({ attributes }) {
	const { location, country, startTime, endTime, registrationEmail, startDate, endDate, registrationDeadline, organizer } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
			<div>
				<div>
					<RichText.Content tagName='h5' value='Event Country:'></RichText.Content>
					<input placeholder='enter event country' value={country} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='Event Location:'></RichText.Content>
					<input placeholder='enter event location' value={location} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='Start Time:'></RichText.Content>
					<input type='time' placeholder='enter start time' value={startTime} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='End Time:'></RichText.Content>
					<input type='time' placeholder='enter end time' value={endTime} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='Organizer:'></RichText.Content>
					<input placeholder='event organizer' value={organizer} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='Registration email:'></RichText.Content>
					<input type='email' placeholder='registration email' value={registrationEmail} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='Start Date:'></RichText.Content>
					<input type='date' placeholder='start date' value={startDate} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='End Date :'></RichText.Content>
					<input type='date' placeholder='end date' value={endDate} readOnly />
				</div>
				<div>
					<RichText.Content tagName='h5' value='Registration Deadline:'></RichText.Content>
					<input type='date' placeholder='registration deadline' value={registrationDeadline} readOnly />
				</div>
			</div>
		</div>
	);
}
export default save;