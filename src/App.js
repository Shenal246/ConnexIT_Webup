import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import AOS from 'aos';
import SLHome from "./SriLanka/Home/Home";
import SLAbout from "./SriLanka/About/About";
import SLEvents from "./SriLanka/Events&News/Events";
import SLUpcomingEvents from "./SriLanka/Events&News/UpcomingNews/UpcomingNews";
import SLBlog from "./SriLanka/Blog/Blog";
import SLContactUs from "./SriLanka/ContactUs/Contact";
import SLSolutions from "./SriLanka/Solutions/Solutions";
import SLPortal from "./SriLanka/Portal/Portal";
import SLCyberSecurity from "./SriLanka/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import SLAuthentication from "./SriLanka/Solutions/solutionVendors/Authentication/Authentication";
import SLSecurityManagement from "./SriLanka/Solutions/solutionVendors/Security/Security";
import SLPerimia from "./SriLanka/Solutions/solutionVendors/Perimia/Perimia";
import SLEndpointSecurity from "./SriLanka/Solutions/solutionVendors/Endpoint/Endpoin";
import SLNetworking from "./SriLanka/Solutions/solutionVendors/Networking/Networking";
import SLInfrastructure from "./SriLanka/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import SLServer from "./SriLanka/Solutions/solutionVendors/ServerBackup/ServerBackup";
import SLMicrosoft from "./SriLanka/Solutions/solutionVendors/Microsoft/Microsoft";
import SLFAQs from "./SriLanka/FAQs/FAQs";
import SLSingleVendor from "./SriLanka/SingleVendor/SingleVendor";

import KHHome from "./Cambodia/Components/Home/Home";
import KHAbout from "./Cambodia/Components/About/About";
import KHEvents from "./Cambodia/Components/Events&News/Events";
import KHUpcomingEvents from "./Cambodia/Components/Events&News/UpcomingNews/UpcomingNews";
import KHBlog from "./Cambodia/Components/Blog/Blog";
import KHContactUs from "./Cambodia/Components/ContactUs/Contact";
import KHSolutions from "./Cambodia/Components/Solutions/Solutions";
import KHPortal from "./Cambodia/Components/Portal/Portal";
import KHCyberSecurity from "./Cambodia/Components/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import KHAuthentication from "./Cambodia/Components/Solutions/solutionVendors/Authentication/Authentication";
import KHSecurityManagement from "./Cambodia/Components/Solutions/solutionVendors/Security/Security";
import KHPerimia from "./Cambodia/Components/Solutions/solutionVendors/Perimia/Perimia";
import KHEndpointSecurity from "./Cambodia/Components/Solutions/solutionVendors/Endpoint/Endpoin";
import KHNetworking from "./Cambodia/Components/Solutions/solutionVendors/Networking/Networking";
import KHInfrastructure from "./Cambodia/Components/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import KHServer from "./Cambodia/Components/Solutions/solutionVendors/ServerBackup/ServerBackup";
import KHMicrosoft from "./Cambodia/Components/Solutions/solutionVendors/Microsoft/Microsoft";
import KHSingleVendor from "./Cambodia/Components/SingleVendor/SingleVendor";

import THHome from "./Thailand/Components/Home/Home";
import THAbout from "./Thailand/Components/About/About";
import THEvents from "./Thailand/Components/Events&News/Events";
import THUpcomingEvents from "./Thailand/Components/Events&News/UpcomingNews/UpcomingNews";
import THBlog from "./Thailand/Components/Blog/Blog";
import THContactUs from "./Thailand/Components/ContactUs/Contact";
import THSolutions from "./Thailand/Components/Solutions/Solutions";
import THPortal from "./Thailand/Components/Portal/Portal";
import THCyberSecurity from "./Thailand/Components/Solutions/solutionVendors/CyberSecurity/CyberSecurity";
import THAuthentication from "./Thailand/Components/Solutions/solutionVendors/Authentication/Authentication";
import THSecurityManagement from "./Thailand/Components/Solutions/solutionVendors/Security/Security";
import THInternetSecurity from "./Thailand/Components/Solutions/solutionVendors/Perimia/Perimia";
import THEndpointSecurity from "./Thailand/Components/Solutions/solutionVendors/Endpoint/Endpoin";
import THNetworking from "./Thailand/Components/Solutions/solutionVendors/Networking/Networking";
import THInfrastructure from "./Thailand/Components/Solutions/solutionVendors/Infrastructure/InfrastructureMonitoring";
import THServer from "./Thailand/Components/Solutions/solutionVendors/ServerBackup/ServerBackup";
import THSingleVendor from "./Thailand/Components/SingleVendor/SingleVendor";



function App() {

    AOS.init();

    return (
        <Router>
            <>
                <Routes>
                    {/*Sri Lanka*/}
                    <Route path="/" exact element={<SLHome />} />
                    <Route path="/SL" exact element={<SLHome />} />
                    <Route path="/SL/About" exact element={<SLAbout />} />
                    <Route path="/SL/Events&News" exact element={<SLEvents />} />
                    <Route path="/SL/UpcomingNews" exact element={<SLUpcomingEvents />} />
                    <Route path="/SL/Blog" exact element={<SLBlog />} />
                    <Route path="/SL/ContactUs" exact element={<SLContactUs />} />
                    <Route path="/SL/Solutions" exact element={<SLSolutions />} />
                    <Route path="/SL/Portal" exact element={<SLPortal />} />

                    <Route path="/SL/Solutions/CyberSecurity" element={<SLCyberSecurity />} />
                    <Route path="/SL/Solutions/Authentication" element={<SLAuthentication />} />
                    <Route path="/SL/Solutions/SecurityManagement" element={<SLSecurityManagement />} />
                    <Route path="/SL/Solutions/Perimia" element={<SLPerimia />} />
                    <Route path="/SL/Solutions/EndpointSecurity" element={<SLEndpointSecurity />} />
                    <Route path="/SL/Solutions/Networking" element={<SLNetworking />} />
                    <Route path="/SL/Solutions/Infrastructure" element={<SLInfrastructure />} />
                    <Route path="/SL/Solutions/Server" element={<SLServer />} />
                    <Route path="/SL/Solutions/Microsoft" element={<SLMicrosoft />} />
                    <Route path="/SL/FAQs" element={<SLFAQs />} />
                    <Route path="/SL/Solutions/Authentication/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/CyberSecurity/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Endpoin/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/InfrastructureMonitoring/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Networking/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Perimia/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/Security/:vendorName" element={<SLSingleVendor />} />
                    <Route path="/SL/Solutions/ServerBackup/:vendorName" element={<SLSingleVendor />} />

                {/*    Cambodia*/}
                    <Route path="/KH" exact Component={KHHome}></Route>
                    <Route path="/KH/About" exact Component={KHAbout}></Route>
                    <Route path="/KH/Events&News" exact element={<KHEvents />}></Route>
                    <Route path="/KH/UpcomingNews" exact element={<KHUpcomingEvents />}></Route>
                    <Route path="/KH/Blog" exact element={<KHBlog />}></Route>
                    <Route path="/KH/ContactUs" exact Component={KHContactUs}></Route>
                    <Route path="/KH/Solutions" exact Component={KHSolutions}></Route>
                    <Route path="/KH/Portal" exact Component={KHPortal}></Route>

                    <Route path="/KH/Solutions/CyberSecurity" element={<KHCyberSecurity />} />
                    <Route path="/KH/Solutions/Authentication" element={<KHAuthentication />} />
                    <Route path="/KH/Solutions/SecurityManagement" element={<KHSecurityManagement />} />
                    <Route path="/KH/Solutions/Perimia" element={<KHPerimia />} />
                    <Route path="/KH/Solutions/EndpointSecurity" element={<KHEndpointSecurity />} />
                    <Route path="/KH/Solutions/Networking" element={<KHNetworking />} />
                    <Route path="/KH/Solutions/Infrastructure" element={<KHInfrastructure />} />
                    <Route path="/KH/Solutions/Server" element={<KHServer />} />
                    <Route path="/KH/Solutions/Microsoft" element={<KHMicrosoft />} />
                    <Route path="/KH/Solutions/Authentication/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/CyberSecurity/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Endpoin/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/InfrastructureMonitoring/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Networking/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Perimia/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/Security/:vendorName" element={<KHSingleVendor />} />
                    <Route path="/KH/Solutions/ServerBackup/:vendorName" element={<KHSingleVendor />} />

                {/*    Thailand*/}
                    <Route path="/TH" exact Component={THHome}></Route>
                    <Route path="/TH/About" exact Component={THAbout}></Route>
                    <Route path="/TH/Events&News" exact element={<THEvents />}></Route>
                    <Route path="/TH/UpcomingNews" exact element={<THUpcomingEvents />}></Route>
                    <Route path="/TH/Blog" exact element={<THBlog />}></Route>
                    <Route path="/TH/ContactUs" exact Component={THContactUs}></Route>
                    <Route path="/TH/Solutions" exact Component={THSolutions}></Route>
                    <Route path="/TH/Portal" exact Component={THPortal}></Route>

                    <Route path="/TH/Solutions/CyberSecurity" element={<THCyberSecurity />} />
                    <Route path="/TH/Solutions/Authentication" element={<THAuthentication />} />
                    <Route path="/TH/Solutions/SecurityManagement" element={<THSecurityManagement />} />
                    <Route path="/TH/Solutions/InternetSecurity" element={<THInternetSecurity />} />
                    <Route path="/TH/Solutions/EndpointSecurity" element={<THEndpointSecurity />} />
                    <Route path="/TH/Solutions/Networking" element={<THNetworking />} />
                    <Route path="/TH/Solutions/Infrastructure" element={<THInfrastructure />} />
                    <Route path="/TH/Solutions/Server" element={<THServer />} />
                    <Route path="/TH/Solutions/Authentication/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/CyberSecurity/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Endpoin/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/InfrastructureMonitoring/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Networking/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Perimia/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/Security/:vendorName" element={<THSingleVendor />} />
                    <Route path="/TH/Solutions/ServerBackup/:vendorName" element={<THSingleVendor />} />
                </Routes>

            </>
        </Router>
    );
}

export default App;
