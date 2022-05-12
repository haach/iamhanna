import {FC} from 'react';
import {input} from '~/components/primitives';

type Label = {label?: string};

export const Input: FC<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Label
> = ({label, ...props}) => {
  return (
    <>
      {label && <label htmlFor={props.name}>{label}</label>}
      <input {...props} type={props.type ?? 'text'} name={props.name} id={props.name} className={input} />
    </>
  );
};

export const TextArea: FC<
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & Label
> = ({label, ...props}) => {
  return (
    <>
      {label && <label htmlFor={props.name}>{label}</label>}
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
