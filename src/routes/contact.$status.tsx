import {useParams, useSearchParams} from '@remix-run/react';
import type {FC} from 'react';
import {Typo} from '~/components/primitives/typography';
import {getErrorMessage} from '~/services/contactService';

const SuccessOrFailure: FC = () => {
	const {status} = useParams();
	const [searchParams] = useSearchParams();
	const errorType = searchParams.get('type');

	return (
		<div>
			{status === 'success' ? (
				<>
					<Typo.H3>Yeah!</Typo.H3>
					<Typo.P>Your message was sent. I'll get back to you soon.</Typo.P>
				</>
			) : (
				<>
					<Typo.H3>Oh no! </Typo.H3>
					<Typo.P>{getErrorMessage(errorType || undefined)} 😕</Typo.P>
				</>
			)}
		</div>
	);
};

export default SuccessOrFailure;
