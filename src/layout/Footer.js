import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../routes/pageRoutes";

const Footer = () => {
  const navigate = useNavigate()
  const quickLinks = [
    { name: "Home", href: pageRoutes.dashboard },
    { name: "Treatments", href: pageRoutes.treatments },
    { name: "Our Team", href: pageRoutes.ourTeams },
    { name: "Testimonials", href: pageRoutes.testimonials },
    { name: "Blog", href: pageRoutes.blogs },
    { name: "Support", href: "support.html" },
    { name: "Book an Appointment", href: "book-appointment.html" },
  ];

  return (
    <footer class="ct_px_80">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 mb-4">
            <div class="ct_footer_cnt">
              <div class="ct_footer_logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>

              <p class="mb-0 text-white">
                Specializing in skincare and aesthetic treatments, we offer
                safe, effective solutions to enhance your natural beauty.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="text-white">Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="javascript:void(0)" onClick={()=>{navigate(link?.href)}}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
            <div class="ct_footer_links">
              <h4 class="text-white">Services</h4> 
              <ul>
                <li>
                  <a href="#">Anti-Aging </a>
                </li>
                <li>
                  <a href="#">Wrinkle Reduction </a>
                </li>
                <li>
                  <a href="#">Acne Scar Reduction </a>
                </li>
                <li>
                  <a href="#">Skin Rejuvenation </a>
                </li>
                <li>
                  <a href="#">Facial Contouring </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="ct_subfooter mt-3">
          <p class="mb-0 ct_ff_Quattrocento ct_fs_18 ">© 2025 Vanity Clinics</p>
          <a href="privacy-policy.html" class="ct_ff_Quattrocento  ct_fs_18">
            Privacy policy
          </a>
          <a href="terms-&-condition.html" class="ct_ff_Quattrocento  ct_fs_18">
            Terms & Conditions
          </a>
          <div class="d-flex align-items-center gap-3">
            <p class="mb-0  ct_ff_Quattrocento ct_fs_18">Follow us</p>
            <ul class="d-flex align-items-center gap-2">
              <li>
                <a href="#">
                  <img src="assets/img/insta.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="assets/img/facebook.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
