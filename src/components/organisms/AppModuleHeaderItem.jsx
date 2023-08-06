import Image from 'next/image';
import React from 'react';
import { DesktopClickIcon } from '../../../public/images';
import { Button } from '../atoms/Button';
import Heading from '../atoms/Heading';

const AppModuleHeaderItem = () => {
	return (
		<div className="mx-auto px-5 md:max-w-[953px]">
			<div className="grid gap-5 md:grid-cols-2">
				<div className="flex items-center justify-center md:justify-start">
					<div className="h-64 w-64 rounded-full bg-secondary p-4 md:h-[303px] md:w-[303px]">
						<div className="flex h-full w-full items-center justify-center">
							<div className="flex items-center justify-center ">
								<div className="mx-auto h-full w-full p-5">
									<Image
										src={DesktopClickIcon}
										className="relative mx-auto md:w-[135px]"
										alt="desktop icon"
									/>
									<p className="pt-3 text-center text-sm text-white md:text-[18px]">
										Simple integrated apps <br />
										at your fingertips
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center">
					<Heading variant={'secondary'}>Apps Module</Heading>
					<div className="py-4">
						<p className="text-xl font-light leading-[28px] text-secondary">
							Our team of experienced professionals is dedicated to helping businesses achieve their
							goals by providing them with the tools and expertise they need to succeed. This is why
							we have developed these app modules to make your life easier.
						</p>
					</div>
					<Button className="mt-4">Learn More</Button>
				</div>
			</div>
		</div>
	);
};

export default AppModuleHeaderItem;
