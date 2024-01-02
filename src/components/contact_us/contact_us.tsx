import React, { useState, ChangeEvent, FormEvent } from "react";

import logo from "./icons/Black-Dominated.png";
import { motion } from "framer-motion";
import { MdArrowOutward, MdMenu } from "react-icons/md";
import axios from "axios";
interface ContactUseProps {
	onNavigate1: (target: string) => void;
	onNavigate: () => void;
}

const ContactForm: React.FC<ContactUseProps> = ({
	onNavigate1,
	onNavigate,
}) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		service: "",
		company: "",
		message: "",
	});

	const smoothScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		console.log(`Field updated - ${name}: ${value}`); // Debug: log updated field value
	};

	const submitForm = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submission initiated", formData);

		try {
			const response = await axios.post(
				"https://contact-ccy0.onrender.com/contact/submit",
				formData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log("Form submission successful", response.data);
			// Optionally, reset form or show success message here
		} catch (error) {
			console.error("Error submitting form:", error);
			// Optionally, handle error (e.g., show error message to user)
		}
	};

	const toggleMenu = () => {
		setMenuOpen((prevState) => !prevState);
	};
	// JSX remains the same
	return (
		<div className="py-10 px-5 bg-gray-950  text-white">
			<div className="flex flex-col mx-auto max-w-screen-lg gap-6 mb-16 ">
				<div className="flex justify-end">
					<MdMenu
						className="text-white text-5xl cursor-pointer lg:hidden"
						onClick={toggleMenu}
					/>
				</div>
				{menuOpen && (
					<div className="absolute right-16 rounded-2xl text-black bg-white w-36">
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

				<div className="w-full mb-1">
					<p className="text-sm font-semibold">SAY HELLO</p>
					<h2 className="text-4xl font-extrabold">CONTACT US</h2>
				</div>

				{/* <div style={{ height: 20, backgroundColor: "black" }}></div> */}

				{/* <div style ={{display: "flex"}}>
          <div  className="text">
            <p className="text-xl font-bold ">hello@idetasolutions.tech</p>
            <p className="text-xl">09999999999 / 09111111111</p>
            <p className="text-xl">(082) 123 1234</p>
          </div>
        <div style ={{width:400, height: 100, backgroundColor: "black"}}></div>

        <div  className="text-xl">
          <p>Davao City, Davao Del Sur 8000 </p>
          <p>Philippines.</p>
        </div>
        </div> */}

				<div className="flex flex-col w-full lg:gap-72 lg:flex-row ">
					<div className="flex flex-col gap-1">
						<p className="text-xl font-bold ">hello@idetasolutions.tech</p>
						<p className="text-xl">09999999999 / 09111111111</p>
						<p className="text-xl">(082) 123 1234</p>
					</div>

					<div className="flex flex-col lg:mt-0">
						<p className="text-xl">Davao City, Davao Del Sur 8000 </p>
						<p className="text-xl">Philippines.</p>
					</div>
				</div>

				<div>
					<p className="text-sm font-semibold mt-12">WORK WITH US</p>
					<h2 className="text-4xl font-extrabold">SEND US A MESSAGE</h2>
				</div>

				<form className="flex-col" onSubmit={submitForm}>
					<div className="flex flex-col lg:flex-row gap-3">
						<input
							name="name"
							type="text"
							required
							className="placeholder-white w-full p-3 border rounded-full bg-transparent text-white"
							placeholder="Your Name"
							onChange={handleChange}
						/>

						<input
							name="email"
							type="email"
							required
							className="placeholder-white w-full p-3 border  rounded-full bg-transparent text-white"
							placeholder="Your Email"
							onChange={handleChange}
						/>
					</div>

					<div className="flex mt-3 lg:flex-row gap-8">
						<div className="w-full p-3 border rounded-full text-white">
							<select
								name="service"
								required
								className=" placeholder-white  w-full bg-transparent rounded-full border-none outline-none "
								onChange={handleChange}
							>
								<option className="bg-transparent">Services</option>
								<option className="text-black" value="web-design">
									Web Design
								</option>
								<option className="text-black" value="seo">
									SEO
								</option>
								<option className="text-black" value="marketing">
									Marketing
								</option>
							</select>
						</div>

						<input
							name="company"
							type="text"
							className="placeholder-white w-full p-3 border border-gray-300 rounded-full bg-transparent text-white"
							placeholder="Company (Optional)"
							onChange={handleChange}
						/>
					</div>

					<textarea
						name="message"
						rows={4}
						className="placeholder-white w-full p-3 border border-gray-300 rounded-xl bg-transparent text-white mt-3"
						placeholder="Message"
						onChange={handleChange}
					/>
					<div className="group w-min">
						<button
							type="submit"
							className=" flex p-5 w-48 h-16 ms-3 gap-2 duration-500 transform rounded-full mt-3 bg-blue-600 text-white  group-hover:bg-lime-400 group-hover:text-black group-hover:w-56 group-hover:ms-0 "
						>
							<p className="text ms-2 font-bold duration-500 group-hover:ms-7 ">
								{" "}
								let's get it done{" "}
							</p>
							<MdArrowOutward className="h-5" />
						</button>
					</div>
				</form>

				{/* <form onSubmit={handleSubmit} className="space-y-6">
          <div style={{ display: "flex" }}>
            <div>
              <input
                style={{ width: "500px" }}
                name="name"
                type="text"
                required
                className=" p-3 border border-gray-300 rounded-full bg-black text-white"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                style={{ width: "500px" }}
                name="email"
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-full bg-black text-white"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <select
                style={{ width: "500px" }}
                name="service"
                className="w-full p-3 border border-gray-300 rounded-full bg-black text-white"
                onChange={handleChange}
              >
                <option>Services</option>
                <option value="web-design">Web Design</option>
                <option value="seo">SEO</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <div style={{ width: 40, backgroundColor: "black" }}></div>
            <div>
              <input
                style={{ width: "500px" }}
                name="company"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-full bg-black text-white"
                placeholder="Company (Optional)"
                onChange={handleChange}
              />
            </div>
          </div>
          <textarea
            name="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-xl bg-black text-white"
            placeholder="Message"
            onChange={handleChange}
          />

          <button
            type="submit"
            className=" flex justify-center p-6 border border-transparent rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            <p className="text font-bold "> let's get it done /"</p>
          </button>
        </form> */}
			</div>
		</div>
	);
};

export default ContactForm;
