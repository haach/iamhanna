import {useParams} from '@remix-run/react';
import type {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

const SuccessOrFailure: FC = () => {
	const {status} = useParams();
	return (
		<div>
			{status === 'success' ? (
				<>
					<Typo.H3>Yeahi!</Typo.H3>
					<Typo.P>Your message was sent. I'll get back to you soon.</Typo.P>
				</>
			) : (
				<>
					<Typo.H3>Oh no! </Typo.H3>
					<Typo.P>
						There was a problem sending your email. Please give it another try.
						😕
					</Typo.P>
				</>
			)}
		</div>
	);
};
export default SuccessOrFailure;
