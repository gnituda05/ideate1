import React, { useState, useEffect } from "react";
import { MdArrowOutward, MdMenu } from "react-icons/md";
import circle from "./icon/Component_2.png";
import logo from "./icon/White-Dominated.png";
import "./home.css"; // Import your Tailwind CSS file

interface HomePageProps {
	onNavigate1: (target: string) => void;
	onNavigate: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate1, onNavigate }) => {
	const [menuOpen, setMenuOpen] = useState(false); // Correct usage of useState
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
		<div className="py-10 px-3 bg-home" id="home">
			{/* <div className=" flex mt-10 justify-end mx-auto max-w-screen-lg ">
				<div className="hidden lg:flex items-center  ">
					<div className="relative">
						<img
							src={circle}
							alt="Rotating Circle "
							className=" lg:16 rounded-full animate-spin-slow "
						/>
						<img
							src={logo}
							alt="Static Icon"
							className="sm:h-4 lg:h-16 lg:ml-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</div>
				</div>
			</div> */}
			<div className="flex flex-col mb-24 mx-auto lg:max-w-screen-xl lg:mt-20 lg:mb-72   ">
				<div className="flex justify-end ">
					<MdMenu
						className="text-white text-5xl cursor-pointer me-2 lg:hidden"
						onClick={toggleMenu}
					/>
				</div>
				<div className="flex flex-row justify-between px-2 ">
					<img
						src={logo}
						alt="Static Icon"
						className=" w-20 ms-10 lg:hidden mb-56 "
					/>
				</div>

				{menuOpen && (
					<div className="absolute  right-16 rounded-2xl bg-zinc-900 text-white w-36">
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
				<div className="flex flex-row justify-between lg:mt-20">
					<div className="flex flex-col mt-20">
						<div className="flex flex-col ms-10 mb-10   ">
							<h1 className="text-7xl font-bold lg:text-9xl lg:font-extrabold custom-heading px-0 font-general-sans text-white animate-rise delay-0 mb-0">
								THINK
							</h1>
							{/* <img
                src={logo}
                alt="Descriptive Alt Text"
                className="w-48 h-48 object-cover"
              /> */}

							<h1 className="text-7xl font-bold lg:font-extrabold  lg:text-9xl custom-heading   text-white animate-rise delay-1 my-0">
								BUILD
							</h1>
							<h1 className="text-7xl font-bold lg:font-extrabold  lg:text-9xl custom-heading  text-white animate-rise delay-2 mt-0">
								DELIVER
							</h1>
						</div>
						<div className="flex-row group ms-12 ">
							<button
								type="submit"
								onClick={onNavigate}
								className=" p-3 w-40 h-12 rounded-2xl bg-blue-600 text-white lg:flex lg:p-5 lg:w-64 lg:h-20 lg:ms-3 lg:rounded-2xl lg:duration-300 lg:transform lg:group-hover:bg-lime-400 lg:gap-2 lg:group-hover:text-black lg:group-hover:w-72 lg:group-hover:ms-0   "
							>
								<p className="flex ms-2 items-center text-base font-semibold lg:ms-11  lg:mt-1 lg:text-xl lg:font-semibold lg:duration-300 lg:transform lg:group-hover:ms-12 lg:group-hover:text-2xl   ">
									{" "}
									work with us<span className="mr-3"></span> <MdArrowOutward />
								</p>
							</button>
						</div>
					</div>
					<div className="hidden lg:flex flex-col mt-0 items-center  ">
						<div className="relative">
							<img
								src={circle}
								alt="Rotating Circle "
								className=" lg:16 rounded-full animate-spin-slow "
							/>
							<img
								src={logo}
								alt="Static Icon"
								className="sm:h-4 lg:h-16 lg:ml-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
