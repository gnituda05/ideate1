import "./App.css";
import React, { useState, useEffect } from "react";
import ContactForm from "./components/contact_us/contact_us";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLocation } from "react-router-dom";
// import { ReactQueryDevtools } from "react-query-devtools";

import HomePage from "./components/home/home";
import Parallexxx from "./components/parallex/parallex";

import ImageAnimation from "./components/projects/movinglogo";
import HoverEffectImage from "./components/projects/projects1";
import ScrollDown1 from "./components/projects/testingmovingmove";
import BGS from "./components/projects/testingproject";
import Proj_Details from "./components/projects_details/project_details";
import ITeam from "./components/team/team";
import Error from "./components/error/error";

// function useScrollToTop() {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);
// }

function App() {
	//   useScrollToTop();
	const [currentPage, setCurrentPage] = useState("Home");
	const isHeaderShrunk = currentPage !== "Home";
	const queryClient = new QueryClient();

	const smoothScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentPage]);

	const onNavigate1 = (target: string) => {
		if (target === "ContactUs") {
			setCurrentPage("ContactUs");
		} else {
			// This is for scrolling to sections within the HomePage
			setCurrentPage("Home");
			setTimeout(() => {
				const element = document.getElementById(target);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 0);
		}
	};

	const navigateToContactUs = () => {
		setCurrentPage("ContactUs");
	};
	const navigateToProjDetails = () => {
		setCurrentPage("ProjDetails");
	};

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App">
				<Header currentPage={currentPage} onNavigate1={onNavigate1} />
				{currentPage === "Home" && (
					<>
						{/* <Error /> */}
						<HomePage
							onNavigate1={onNavigate1}
							onNavigate={navigateToContactUs}
						/>

						{/* Other components */}

						<BGS onNavigate={navigateToProjDetails} />
						{/* <Proj_Details /> */}
						<ITeam />
					</>
				)}
				{currentPage === "ContactUs" && (
					<>
						<ContactForm
							onNavigate1={onNavigate1}
							onNavigate={navigateToContactUs}
						/>
					</>
				)}
				{currentPage === "ProjDetails" && (
					<>
						<Proj_Details
							onNavigate1={onNavigate1}
							onNavigate={navigateToContactUs}
						/>
					</>
				)}
				<Parallexxx />
				<Footer onNavigate={navigateToContactUs} />
			</div>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>

		// <Router>
		//   <div className="App">
		//     <Header  isShrunk={isHeaderShrunk} />
		//     <Routes>
		//       <Route path="/home" element={<HomePage />} />
		//       <Route path="/contact" element={<ContactForm />} />
		//       <Route path="/project-details" element={<Proj_Details />} />
		//       {/* Add other routes as needed */}
		//     </Routes>
		//     <Footer />
		//   </div>
		// </Router>
	);
}
export default App;
