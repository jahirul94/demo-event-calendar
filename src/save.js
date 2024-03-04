import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';

function save({ attributes }) {
	const { location, country, startTime, endTime, registrationEmail, startDate, endDate, registrationDeadline, organizer } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
			<div className='calender-text'>
				{country && <div>
					<RichText.Content tagName='h5' value='Event Country:'></RichText.Content>
					<p>{country}</p>
				</div>}
				{location && <div>
					<RichText.Content tagName='h5' value='Event Location:'></RichText.Content>
					<p>{location}</p>
				</div>}
				{startTime && <div>
					<RichText.Content tagName='h5' value='Start Time:'></RichText.Content>
					<p>{startTime}</p>
				</div>}
				{endTime && <div>
					<RichText.Content tagName='h5' value='End Time:'></RichText.Content>
					<p>{endTime}</p>
				</div>}
				{organizer && <div>
					<RichText.Content tagName='h5' value='Organizer:'></RichText.Content>
					<p>{organizer}</p>
				</div>}
				{registrationEmail && <div>
					<RichText.Content tagName='h5' value='Registration email:'></RichText.Content>
					<p>{registrationEmail}</p>
				</div>}
				{startDate && <div>
					<RichText.Content tagName='h5' value='Start Date:'></RichText.Content>
					<p>{startDate}</p>
				</div>}
				{endDate && <div>
					<RichText.Content tagName='h5' value='End Date :'></RichText.Content>
					<p>{endDate}</p>
				</div>}
				{registrationDeadline && <div>
					<RichText.Content tagName='h5' value='Registration Deadline:'></RichText.Content>
					<p>{registrationDeadline}</p>
				</div>}
			</div>
		</div>
	);
}
export default save;