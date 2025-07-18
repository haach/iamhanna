import type {MetaFunction} from '@remix-run/node';
import type {FC} from 'react';
import {useState} from 'react';
import {
	Input,
	RadioGroup,
	TextArea,
} from '~/components/molecules/FormComponents';
import {input} from '~/components/primitives';
import {WorkingModel, WORKING_MODEL_LABELS} from '~/types/contact';

const meta: MetaFunction = () => [
	{
		title: 'i am hanna - send me a job opportunity',
	},
];

const JobOpportunity: FC = () => {
	const [workingModel, setWorkingModel] = useState<WorkingModel>();
	return (
		<ul className="flex flex-col gap-6">
			<li className="flex flex-col">
				<Input
					label="Employer"
					name="employer"
					required
					placeholder="Monster Corp"
				/>
			</li>
			<li className="flex flex-col">
				<Input
					label="Compensation"
					name="compensation"
					required
					placeholder="Enter fixed value or range"
				/>
			</li>
			<li className="flex flex-col">
				<label htmlFor="workingModel" className="mb-2">
					Working model *
				</label>
				<select
					className={input}
					name="workingModel"
					onChange={e => setWorkingModel(e.target.value as WorkingModel)}
				>
					<option value="">- Please select -</option>
					<option value={WorkingModel.REMOTE}>
						{WORKING_MODEL_LABELS[WorkingModel.REMOTE]}
					</option>
					<option value={WorkingModel.HYBRID}>
						{WORKING_MODEL_LABELS[WorkingModel.HYBRID]}
					</option>
					<option value={WorkingModel.OTHER}>
						{WORKING_MODEL_LABELS[WorkingModel.OTHER]}
					</option>
				</select>
			</li>
			{workingModel === WorkingModel.OTHER && (
				<li className="flex flex-col">
					<TextArea
						label="Please give a short description"
						name="workingModelDescription"
						required
					/>
				</li>
			)}
			{workingModel && workingModel !== WorkingModel.REMOTE && (
				<li className="flex flex-row items-center gap-4">
					<RadioGroup
						name="dogsAllowed"
						label={['Dogs are', 'in the office']}
						options={[
							{value: 'YES', label: 'allowed'},
							{value: 'NO', label: 'not allowed'},
						]}
						required={workingModel === WorkingModel.HYBRID}
					/>
				</li>
			)}
			<li className="flex flex-col">
				<TextArea
					label="Benefits"
					name="benefits"
					required
					placeholder="Vacation days, gym membership, h.o. budget, corporate pension, ESOP ..."
				/>
			</li>
			<li className="flex flex-col">
				<Input label="Your name" name="name" required placeholder="Jane Doe" />
			</li>
			<li className="flex flex-col">
				<Input
					label="Your email"
					type="email"
					name="email"
					required
					placeholder="janedoe@monster.com"
				/>
			</li>
			<li className="flex flex-col">
				<TextArea
					label="Your message"
					name="message"
					required
					placeholder="Describe the role or drop a link"
				/>
			</li>
		</ul>
	);
};

export default JobOpportunity;
export {meta};
