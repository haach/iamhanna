import type {FC} from 'react';
import {input} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

interface LabelProps {
	label?: string;
}

interface RequiredIndicatorProps {
	required?: boolean;
}

export interface InputProps
	extends React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		LabelProps,
		RequiredIndicatorProps {}

export interface TextAreaProps
	extends React.DetailedHTMLProps<
			React.TextareaHTMLAttributes<HTMLTextAreaElement>,
			HTMLTextAreaElement
		>,
		LabelProps,
		RequiredIndicatorProps {}

export interface RadioGroupOption {
	value: string;
	label: string;
}

export interface RadioGroupProps {
	name: string;
	label: string | [string, string];
	options: RadioGroupOption[];
	required?: boolean;
	onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({label, ...props}) => {
	return (
		<>
			{label && (
				<label htmlFor={props.name} className="mb-2">
					{label}
					{props.required && ' *'}
				</label>
			)}
			<input
				{...props}
				type={props.type ?? 'text'}
				name={props.name}
				id={props.name}
				className={input}
			/>
		</>
	);
};

export const TextArea: FC<TextAreaProps> = ({label, ...props}) => {
	return (
		<>
			{label && (
				<label htmlFor={props.name} className="mb-2">
					{label}
					{props.required && ' *'}
				</label>
			)}
			<textarea
				{...props}
				name={props.name}
				id={props.name}
				rows={props.rows ?? 4}
				className={input}
				style={{height: 'auto'}}
			/>
		</>
	);
};

export const RadioGroup: FC<RadioGroupProps> = ({
	name,
	label,
	options,
	required,
	onChange,
}) => {
	const labelText = Array.isArray(label) ? label.join(' ') : label;
	const [labelStart, labelEnd] = Array.isArray(label) ? label : [label, ''];

	return (
		<fieldset>
			<legend className="sr-only">{labelText}</legend>
			<div className="flex flex-row items-center gap-2">
				<Typo.Span>{labelStart}</Typo.Span>
				{options.map(({value, label: optionLabel}, index) => (
					<div key={value} className="flex flex-row items-center gap-1">
						<input
							type="radio"
							name={name}
							value={value}
							id={`${name}-${value}`}
							required={required}
							onChange={e => onChange?.(e.target.value)}
						/>
						<label htmlFor={`${name}-${value}`} className="font-normal">
							{optionLabel}
						</label>
						{index < options.length - 1 && (
							<Typo.Span className="mx-1">or</Typo.Span>
						)}
					</div>
				))}
				<Typo.Span>
					{labelEnd}
					{required && ' *'}
				</Typo.Span>
			</div>
		</fieldset>
	);
};
