import classNames from 'classnames';
import {FC, Suspense} from 'react';
import {Img, resource} from 'react-suspense-img';
import {ReactProps} from '~/components';

export const SuspenseImage: FC<
	ReactProps & {
		'src': string;
		'width'?: string;
		'height'?: string;
		'alt'?: string;
		'aria-label'?: string;
	}
> = ({src, width, height, ...rest}) => {
	const fallBack = (
		<div
			className={classNames('placeHoldergradient', rest.className)}
			style={{
				width: width ?? '100%',
				maxWidth: '100%',
				height: height ?? 'auto',
			}}
		/>
	);
	resource.preloadImage(src);
	return (
		// Show a loading animation while the image is loading
		<Suspense fallback={fallBack}>
			<Img src={src} {...rest} />
		</Suspense>
	);
};
