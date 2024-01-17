import logo from "./icons/Black-Dominated.png";
import Ilogo from "./icons/instagram.png";
import Llogo from "./icons/linkedin.png";
import Flogo from "./icons/facebook.png";
import ideate from "./icons/ideateL.png";
import "./footer.css";
import { MdArrowOutward } from "react-icons/md";

interface FooterProps {
	onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
	const instgram =
		"https://www.instagram.com/ideate.solutions/?igsh=NDN0Ync1MDh1dTNx&utm_source=qr";
	const facebook = "https://www.facebook.com/ideatesolutions.studio";
	const linkedin = "https://www.linkedin.com/company/ideatesoln/";

	const handleClickI = () => {
		window.location.href = instgram;
	};
	const handleClickF = () => {
		window.location.href = facebook;
	};
	const handleClickL = () => {
		window.location.href = linkedin;
	};

	return (
		<div className=" bg-image-footer ">
			<div className=" py-2 px-4 flex flex-col mx-auto max-w-screen-xl  gap-6 ">
				<div className=" flex flex-col ">
					<h1 className="text-5xl font-extrabold  text-slate-900 lg:hidden">
						LETS MAKE
					</h1>
					<div className="flex flex-row gap-3 lg:hidden">
						<h1 className="text-5xl font-extrabold font-general-sans text-slate-900">
							YOUR
						</h1>
						<h1 className="text-5xl font-extrabold font-general-sans text-blue-600">
							IDEAS
						</h1>
					</div>
					<div></div>
					<div className="flex flex-col justify-between lg:hidden ">
						<div className="flex flex-row gap-2">
							<h1 className="text-5xl font-extrabold text-slate-900">TO</h1>
							<h1 className="text-5xl font-extrabold text-lime-400">LIFE</h1>
						</div>

						<div className="group">
							<button
								type="submit"
								onClick={onNavigate}
								className="flex  p-5 w-44 h-16 gap-2 duration-500  transform rounded-2xl mt-3 me-3 bg-blue-600 text-white group-hover:bg-lime-400 group-hover:text-black group-hover:w-48 group-hover:me-0 "
							>
								<p className="text-center ms-2 font-bold duration-500 transform group-hover:ms-5   ">
									{" "}
									work with us
								</p>
								<MdArrowOutward className="h-5" />
							</button>
						</div>
					</div>
					<div className="hidden lg:block">
						<div className=" flex flex-col ">
							<div className="flex flex-row gap-3 ">
								<h1 className="text-7xl font-extrabold font-general-sans text-slate-900 ">
									LETS MAKE
								</h1>
								<h1 className="text-7xl font-extrabold font-general-sans text-slate-900">
									YOUR
								</h1>
							</div>
						</div>
						<div className="flex flex-col justify-between  ">
							<div className="flex lg: justify-between ">
								<div className="flex gap-2 flex-row">
									<h1 className="text-7xl font-extrabold font-general-sans text-blue-600">
										IDEAS
									</h1>
									<h1 className="text-7xl font-extrabold font-general-sans text-slate-900">
										TO
									</h1>
									<h1 className="text-7xl font-extrabold font-general-sans text-lime-400">
										LIFE
									</h1>
								</div>
								<div className="group">
									<button
										type="submit"
										onClick={onNavigate}
										className="flex p-5 w-44 h-16 gap-2 duration-500  transform rounded-2xl mt-3 me-3 bg-blue-600 text-white group-hover:bg-lime-400 group-hover:text-black group-hover:w-48 group-hover:me-0 "
									>
										<p className="text-center ms-2 font-bold duration-500 transform group-hover:ms-5   ">
											{" "}
											work with us
										</p>
										<MdArrowOutward className="h-5" />
									</button>
								</div>
							</div>
						</div>
					</div>
					<hr className="h-px mt-16 bg-gray-200 border-0 dark:bg-gray-700"></hr>
				</div>

				<div className="flex flex-col justify-center  items-center lg:hidden">
					<img src={logo} alt="Logo" className="w-12" />
					{/* <p className="text-4xl font-bold font-general-sans mt-3"> ideate</p> */}

					<img src={ideate} className="mt-4 w-32 h-9" alt="image description" />

					<p className="text font-bold font-lato ">
						hello@ideatesolutions.studio
					</p>
					<p className="text font-bold font-lato text-right">
						{" "}
						Davao City, PH 8000
					</p>
					<div className="flex flex-row gap-2 mt-1">
					<img
							src={Flogo}
							onClick={handleClickF}
							alt="Logo"
							className="h-5"
						/>
						<img
							src={Ilogo}
							onClick={handleClickI}
							alt="Logo"
							className="h-5"
						/>
						<img
							src={Llogo}
							onClick={handleClickL}
							alt="Logo"
							className="h-5"
						/>
					</div>
					<div className="flex flex-row gap-2 mt-10">
						<p className="text font font-lato ">@ideate 2021</p>
						<p className="text font-semibold font-lato ">CONTACT US</p>
					</div>
				</div>
				<div className="hidden lg:flex flex-row justify-between">
					<div className="flex flex-row gap-9 ">
						<img src={logo} alt="Logo" className="h-16" />
						{/* <p className="text-4xl font-bold font-general-sans mt-3"> ideate</p> */}
						<img
							src={ideate}
							className="mt-4 w-32 h-9"
							alt="image description"
						/>
					</div>
					<div>
						<p className="text font-bold font-lato ">
							hello@ideatesolutions.studio
						</p>
						<p className="text font-bold font-lato text-right">
							{" "}
							Davao City, PH 8000
						</p>
					</div>
				</div>
				<div className="hidden lg:flex flex-row justify-between">
					<div className="flex flex-row gap-3">
						<p className="text font font-lato ">@ideate 2021</p>
						<p className="text font-semibold font-lato ">CONTACT US</p>
					</div>
					<div className="flex flex-row gap-4">
						{/* <img src={logo} alt="Logo" className="h-5" />
            <img src={logo} alt="Logo" className="h-5" />
            <img src={logo} alt="Logo" className="h-5" /> */}
						<img
							src={Flogo}
							onClick={handleClickF}
							alt="Logo"
							className="h-5"
						/>
						<img
							src={Ilogo}
							onClick={handleClickI}
							alt="Logo"
							className="h-5"
						/>
						<img
							src={Llogo}
							onClick={handleClickL}
							alt="Logo"
							className="h-5"
						/>
						{/* <motion.div ref={constraintsRef}>
              <motion.div drag dragConstraints={constraintsRef} />
            </motion.div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
