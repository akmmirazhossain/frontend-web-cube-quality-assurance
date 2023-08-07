import { cva } from 'class-variance-authority';
import React from 'react';

const headerDesign = cva('leading-normal', {
	variants: {
		variant: {
			primary: 'text-primary',
			secondary: 'text-secondary',
			white: 'text-white',
		},
		size: {
			lg: 'text-2xl md:text-5xl',
			md: 'text-[32px]',
			40: 'text-[25px] md:text-[40px]',
			sm: 'text-base',
		},
		weight: {
			medium: 'font-medium',
			normal: 'font-normal',
			light: 'font-light',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'lg',
		weight: 'medium',
	},
});

const Heading = ({ tag, variant, weight, size, className, children, ...props }) => {
	const Tag = tag === 'p' ? 'p' : 'h1';
	return (
		<Tag className={headerDesign({ variant, weight, size, className })} {...props}>
			{children}
		</Tag>
	);
};

export default Heading;
