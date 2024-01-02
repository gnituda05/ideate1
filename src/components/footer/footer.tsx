import logo from "./icons/Black-Dominated.png";
import Ilogo from "./icons/instagram.png";
import Llogo from "./icons/linkedin.png";
import Flogo from "./icons/facebook.png";
import { MdArrowOutward } from "react-icons/md";

interface FooterProps {
	onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
	return (
		<div className=" bg-image-footer ">
			<div className=" py-2 px-4 flex flex-col mx-auto max-w-screen-lg gap-6 ">
				<div className=" flex flex-col ">
					<h1 className="text-5xl font-extrabold text-slate-900">LETS MAKE</h1>
					<div className="flex flex-row gap-3">
						<h1 className="text-5xl font-extrabold text-slate-900">YOUR</h1>
						<h1 className="text-5xl font-extrabold text- text-blue-600">
							IDEAS
						</h1>
					</div>
					<div className="flex flex-col justify-between ">
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
					<hr className="h-px mt-16 bg-gray-200 border-0 dark:bg-gray-700"></hr>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img src={logo} alt="Logo" className="w-12" />
					<p className="text-4xl font-bold mt-3"> ideate</p>

					<p className="text font-bold ">hello@ideatesolutions.studio</p>
					<p className="text font-bold text-right"> Davao City, PH 8000</p>
					<div className="flex flex-row gap-2 mt-1">
						<img src={Flogo} alt="Logo" className="h-5" />
						<img src={Ilogo} alt="Logo" className="h-5" />
						<img src={Llogo} alt="Logo" className="h-5" />
					</div>
					<div className="flex flex-row gap-2 mt-10">
						<p className="text font ">@ideate 2021</p>
						<p className="text font-medium ">CONTACT US</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
