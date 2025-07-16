import type {ActionFunction, MetaFunction} from '@remix-run/node';
import {Outlet, useLocation} from '@remix-run/react';
import classNames from 'classnames';
import type {FC} from 'react';
import {useRef, useState} from 'react';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {DiGithubFull} from 'react-icons/di';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import {SiCodewars} from 'react-icons/si';
import {Input} from '~/components/molecules/FormComponents';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {
	btn,
	btn_primary,
	hideLineOverflow,
	link,
} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {ContactReason, CONTACT_REASON_LABELS} from '~/types/contact';
import {handleContactFormSubmission} from '~/services/contactService';
import {useContactReasonFromURL} from '~/hooks/useContact';

const meta: MetaFunction = () => [
	{
		title: 'Drop me a message or send me an offer',
	},
];

export const action: ActionFunction = async ({request}) => {
	return handleContactFormSubmission(request);
};

const Contact: FC = () => {
	const location = useLocation();
	const [contactReason, setContactReason] = useState<ContactReason>(
		useContactReasonFromURL(),
	);
	const formRef = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const handleSubmit = () => {
		const form = formRef?.current;
		if (!form) return;

		// Check if form is valid
		if (form.checkValidity() === false) return;

		// Set submitting state
		setIsSubmitting(true);

		// Perform submit
		form.submit();
		// Note: No need to reset submitting state because of redirect from action
	};

	return (
		<PageLayout
			title="Hanna Achenbach"
			subTitle="Frontend engineer"
			sideBar={
				<ContainerInner className="md:text-right">
					<HeadlineWithDivider title="Find me on" className="md:text-right" />
					<div className="flex flex-row gap-4 md:justify-end w-full">
						<a
							className={classNames(link, hideLineOverflow)}
							href="https://github.com/haach"
							target="_blank"
							rel="noopener noreferrer"
							title="Github"
						>
							<DiGithubFull className="h-12 w-12" />
						</a>
						<a
							className={classNames(link, hideLineOverflow)}
							href="https://www.linkedin.com/in/hanna-achenbach/"
							target="_blank"
							rel="noopener noreferrer"
							title="LinkedIn"
						>
							<RiLinkedinBoxFill className="h-6 w-6" />
						</a>
						<a
							className={classNames(link, hideLineOverflow)}
							href="https://www.codewars.com/users/haach"
							target="_blank"
							rel="noopener noreferrer"
							title="Codewars"
						>
							<SiCodewars className="h-5 w-5" />
						</a>
					</div>
				</ContainerInner>
			}
		>
			<ContainerInner>
				<HeadlineWithDivider title="Get in touch" />
				<form action="/contact" method="post" ref={formRef}>
					<div className="flex flex-col gap-20">
						<Input type="hidden" name="contactReason" value={contactReason} />

						<div className="flex flex-col gap-8">
							<Typo.P>
								You are interested in working with me or just want to say hi?
								Please select a subject below and then fill the form.
							</Typo.P>

							<Typo.H3 className="flex flex-col sm:flex-row gap-2 sm:gap-4">
								<Typo.LinkInternal
									to="/contact/job-opportunity"
									replace
									onClick={() => {
										setContactReason(ContactReason.JOB);
									}}
									block
									isActive={location.pathname === '/contact/job-opportunity'}
								>
									{CONTACT_REASON_LABELS[ContactReason.JOB]}
								</Typo.LinkInternal>
								<span className="hidden sm:inline-block">|</span>
								<Typo.LinkInternal
									to="/contact/freelance"
									replace
									onClick={() => {
										setContactReason(ContactReason.FREELANCE);
									}}
									block
									isActive={location.pathname === '/contact/freelance'}
								>
									{CONTACT_REASON_LABELS[ContactReason.FREELANCE]}
								</Typo.LinkInternal>
								<span className="hidden sm:inline-block">|</span>
								<Typo.LinkInternal
									to="/contact/hello"
									replace
									onClick={() => {
										setContactReason(ContactReason.HELLO);
									}}
									block
									isActive={location.pathname === '/contact/hello'}
								>
									{CONTACT_REASON_LABELS[ContactReason.HELLO]}
								</Typo.LinkInternal>
							</Typo.H3>

							<Outlet />
							{location.pathname !== '/contact' && (
								<div className="flex flex-row justify-end">
									<button
										type="submit"
										className={classNames(
											btn,
											btn_primary,
											'flex flex-row items-center justify-center',
										)}
										onClick={handleSubmit}
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<AiOutlineLoading3Quarters className="animate-spin h-5 w-5 self-center" />
										) : (
											<span>send</span>
										)}
									</button>
								</div>
							)}
						</div>
					</div>
				</form>
			</ContainerInner>
		</PageLayout>
	);
};

export default Contact;
export {meta};
