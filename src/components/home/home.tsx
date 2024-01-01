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
		<div className="py-10 px-1 bg-home" id="home">
			<div className="flex flex-col mb-24 mx-auto max-w-screen-lg ">
				<div className="flex justify-end ">
					<MdMenu
						className="text-white text-5xl cursor-pointer me-2  lg:hidden"
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
					<div className="absolute  right-16 rounded-2xl bg-white w-36">
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
				<div className="flex flex-row gap-0">
					<div className="flex flex-col ">
						<div className="flex flex-col ms-10 mb-10   ">
							<h1 className="text-7xl font-general-sans font-hbold text-white animate-rise delay-0 mb-0">
								THINK
							</h1>
							{/* <img
                src={logo}
                alt="Descriptive Alt Text"
                className="w-48 h-48 object-cover"
              /> */}

							<h1 className="text-7xl font-hbold text-white animate-rise delay-1 my-0">
								BUILD
							</h1>
							<h1 className="text-7xl font-hbold text-white animate-rise delay-2 mt-0">
								DELIVER
							</h1>
						</div>
						<div className="flex-row group ms-12 ">
							<button
								type="submit"
								onClick={onNavigate}
								className=" p-3 w-40 h-12 rounded-2xl bg-blue-600 text-white   "
							>
								<p className="flex ms-2 items-center text-base font-semibold  ">
									{" "}
									work with us<span className="mr-3"></span> <MdArrowOutward />
								</p>
							</button>
						</div>
					</div>
					<div className="hidden lg:flex items-center   ">
						<div className="relative   ">
							<img
								src={circle}
								alt="Rotating Circle "
								className=" h-full  rounded-full animate-spin-slow "
							/>
							<img
								src={logo}
								alt="Static Icon"
								className="sm:h-4 h-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   "
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
