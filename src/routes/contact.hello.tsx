import type {MetaFunction} from '@remix-run/node';
import type {FC} from 'react';
import {Input, TextArea} from '~/components/molecules/FormComponents';

const meta: MetaFunction = () => [
	{
		title: 'i am hanna - say hello',
	},
];

const Hello: FC = () => {
	return (
		<ul className="flex flex-col gap-4">
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
					placeholder="Hello stranger!"
				/>
			</li>
		</ul>
	);
};

export default Hello;

export {meta};
