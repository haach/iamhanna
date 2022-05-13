import {FC} from 'react';
import {input} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

type Label = {label?: string};

export const Input: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Label
> = ({label, ...props}) => {
  return (
    <>
      {label && (
        <label htmlFor={props.name}>
          {label}
          {props.required && ' *'}
        </label>
      )}
      <input {...props} type={props.type ?? 'text'} name={props.name} id={props.name} className={input} />
    </>
  );
};

export const TextArea: FC<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & Label
> = ({label, ...props}) => {
  return (
    <>
      {label && (
        <label htmlFor={props.name}>
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

export const RadioGroup: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: Array<string>;
    options: Array<{value: string; label: string}>;
  }
> = ({label, options, ...props}) => {
  return (
    <>
      <Typo.span>{label[0]}</Typo.span>
      {options.map(({value, label}) => (
        <div key={value} className="flex flex-row items-center gap-1">
          <input {...props} type={'radio'} value={value} id={props.name + value} />
          <label htmlFor={props.name + value}>
            {label}
            {props.required && ' *'}
          </label>
        </div>
      ))}
      <Typo.span>{label[1]}</Typo.span>
    </>
  );
};
