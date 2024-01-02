import { MdArrowOutward, MdMenu } from "react-icons/md";
import React, { useState } from "react";
import Mara from "./icons/Marac.png";
import Daily from "./icons/Daily.png";
import Renegades from "./icons/Renegades.png";

interface ContactUseProps {
	onNavigate1: (target: string) => void;
	onNavigate: () => void;
}
const Proj_Details: React.FC<ContactUseProps> = ({
	onNavigate1,
	onNavigate,
}) => {
	const [hover, setHover] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const smoothScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};
	return (
		<div className="py-3 bg-gray-900 px-4  ">
			<div className="flex flex-col mx-auto max-w-screen-xl gap-6 mb-32 ">
				<div className="flex justify-end">
					<MdMenu
						className="text-white text-5xl cursor-pointer mt-7 me-1 lg:hidden"
						onClick={toggleMenu}
					/>
				</div>
				{menuOpen && (
					<div className="absolute top-11 right-16 rounded-2xl text-black bg-white w-36">
						<ul className="flex flex-col items-start p-2">
							<li className="list-none p-3">
								<a
									href="#home"
									onClick={(e) => {
										e.preventDefault();
										smoothScroll("home");
										onNavigate1("home");
										setMenuOpen(false);
									}}
								>
									HOME
								</a>
							</li>
							<li className="list-none p-2">
								<a
									href="#works"
									onClick={(e) => {
										e.preventDefault();
										smoothScroll("works");
										onNavigate1("works");
										setMenuOpen(false);
									}}
								>
									WORKS
								</a>
							</li>
							<li className="list-none p-2">
								<a
									href="#iteam"
									onClick={(e) => {
										e.preventDefault();
										smoothScroll("iteam");
										onNavigate1("iteam");
										setMenuOpen(false);
									}}
								>
									TEAM
								</a>
							</li>
							<li className="list-none p-2">
								<a href="#contact" onClick={onNavigate}>
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				)}
				<div className="flex flex-col mt-0 ">
					<div className="flex flex-row justify-between">
						<h2 className="text-5xl text-left font-bold text-white ">
							WHERE DESIGN
						</h2>
					</div>
					<div className="flex flex-row gap-5 ">
						<h2 className="text-5xl txt-left font-bold text-white ">MEETS</h2>
						<div className="flex flex-row">
							<p className="text-5xl text-left font-bold text-blue-600 ">
								TECH
							</p>
							<h2 className="text-5xl text-left font-bold text-lime-400 ">.</h2>
						</div>
					</div>
					<div className="flex flex-col gap-1 p-8 ">
						<p className="text-sm text-left text-white">
							At the crossroads of innovation and imagination. We craft
							solutions that blend creativity and technology seamlessly,
							delivering experiences that redefine what's possible. Join us in
							our design-driven innovation journey.
						</p>
					</div>
				</div>

				<div className=" flex flex-col gap-9 px-8  items-center">
					{/* <!-- Individual box --> */}

					<div
						className="  relative group overflow-hidden "
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<img
							src={Mara}
							alt="Description"
							className="rounded-xl duration-500  group-hover:opacity-20 opacity-100  "
						/>
						{/* <!-- Content for box 1 --> */}

						<div
							className={` absolute p-3 border-none inset-0  duration-500  group-hover:opacity-100 opacity-0 transition-opacity ${
								hover ? "translate-x-0" : "-translate-x-full"
							}`}
						>
							<div className="text-center text-white">
								<h2 className="text-xs font-bold text-white">APPAREL</h2>
								<h2 className="text-5xl mt-20 font-bold text-white">MARA C</h2>
								<p className="text-xs font-medium text-white">
									THE MODERN FILIPINO
								</p>
								<div className="flex flex-row justify-center mt-9 gap-6 ">
									<button
										type="submit"
										className="flex p-1 border  rounded-lg mt-3  text-white gap-2  "
									>
										<p className="text-center text-xs font-normal  ">
											&emsp;BRANDING&emsp;
										</p>
									</button>
									<button
										type="submit"
										className="flex p-1 border rounded-lg mt-3  text-white gap-2  "
									>
										<p className="text-center text-xs font-normal  ">
											&emsp;WEB DESIGN&emsp;
										</p>
									</button>
								</div>
								<div className="flex flex-row justify-center gap-1 mt-1">
									<p className="text-xs font-medium text-white">Learn more</p>
									<MdArrowOutward className="h-3 w-3 mt-1" />
								</div>
							</div>
						</div>
					</div>
					<div
						className=" relative group  overflow-hidden "
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<img
							src={Daily}
							alt="Description"
							className="rounded-xl duration-500  group-hover:opacity-20 opacity-100  "
						/>
						{/* <!-- Content for box 1 --> */}

						<div
							className={` absolute p-3 border-none inset-0  duration-500  group-hover:opacity-100 opacity-0 transition-opacity ${
								hover ? "translate-x-0" : "-translate-x-full"
							}`}
						>
							<div className="text-center text-white">
								<h2 className="text-xs font-bold text-white">BIKESHOP</h2>
								<h2 className="text-5xl mt-20  font-bold text-white">
									DAILYPEDAL
								</h2>
								<p className="text-xs font-medium text-white">
									GEARS AND APPAREL
								</p>
								<div className="flex flex-row justify-center mt-9 gap-6 ">
									<button
										type="submit"
										className="flex p-1 border  rounded-lg mt-3  text-white gap-2  "
									>
										<p className="text-center text-xs font-normal  ">
											&emsp;BRANDING&emsp;
										</p>
									</button>
									<button
										type="submit"
										className="flex p-1 border rounded-lg mt-3  text-white gap-2  "
									>
										<p className="text-center text-xs font-normal  ">
											&emsp;WEB DESIGN&emsp;
										</p>
									</button>
								</div>
								<div className="flex flex-row justify-center gap-1 mt-1">
									<p className="text-xs font-medium text-white">Learn more</p>
									<MdArrowOutward className="h-3 w-3 mt-1" />
								</div>
							</div>
						</div>
					</div>
					<div
						className=" relative group overflow-hidden "
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
					>
						<img
							src={Renegades}
							alt="Logo"
							className=" rounded-xl group-hover:opacity-20 opacity-100 "
						/>
						{/* <!-- Content for box 1 --> */}

						<div
							className={` absolute p-3 border-none inset-0  duration-500  group-hover:opacity-100 opacity-0 transition-opacity ${
								hover ? "translate-x-0" : "-translate-x-full"
							}`}
						>
							<div className="text-center text-white">
								<h2 className="text-xs font-bold text-white">
									MENS ESSENTIALS
								</h2>
								<h2 className="text-5xl mt-14  font-bold text-white">
									WE <br></br>RENEGADES
								</h2>
								<p className="text-xs font-medium text-white">GENTS OF TODAY</p>
								<div className="flex flex-row justify-center mt-3 gap-6 ">
									<button
										type="submit"
										className="flex p-1 border  rounded-lg mt-3  text-white gap-2  "
									>
										<p className="text-center text-xs font-normal  ">
											&emsp;BRANDING&emsp;
										</p>
									</button>
									<button
										type="submit"
										className="flex p-1 border rounded-lg mt-3  text-white gap-2  "
									>
										<p className="text-center text-xs font-normal  ">
											&emsp;WEB DESIGN&emsp;
										</p>
									</button>
								</div>
								<div className="flex flex-row justify-center gap-1 mt-1">
									<p className="text-xs font-medium text-white">Learn more</p>
									<MdArrowOutward className="h-3 w-3 mt-1" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Proj_Details;
