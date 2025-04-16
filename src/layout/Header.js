import React, { useEffect } from "react";
import { UserSvg } from "../components/svgs";
import { pageRoutes } from "../routes/pageRoutes";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navLinks = [
    { label: "Home", href: pageRoutes.dashboard },
    { label: "Treatments", href: pageRoutes.treatments },
    { label: "Our Team", href: pageRoutes.ourTeams },
    { label: "Testimonials", href: pageRoutes.testimonials },
    { label: "Blogs", href: pageRoutes.blogs},
    { label: "Support", href: "support.html" },
  ];

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <nav class="ct_navbar">
              <div class="ct_logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div>
              <div class="ct_nav_menu">
                <ul>
                  <div class="ct_close_bar">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                  {navLinks.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href="javascript:void(0)"
                        onClick={() => navigate(href)}
                      >
                        {label}
                      </a>
                    </li>
                  ))}

                  <li class="d-block d-xl-none">
                    <a href="book-appointment.html" class="ct_skin_btn">
                      Book Appointment
                    </a>
                  </li>
                </ul>
              </div>
              <div class="ct_right_menu">
                <ul>
                  <li class="d-none d-xl-block">
                    <a href="book-appointment.html" class="ct_skin_btn">
                      Book Appointment
                    </a>
                  </li>
                  <li class="d-none">
                    <a
                      href="book-appointment.html"
                      class="ct_outlin_btn"
                      data-bs-toggle="modal"
                      data-bs-target="#ct_login_modal"
                    >
                      Login
                    </a>
                  </li>

                  <li class="dropdown d-block">
                    <div
                      class="ct_user_logged"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <UserSvg />
                    </div>
                    <ul
                      class="dropdown-menu ct_custom_dropdown"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="my-booking.html">
                          My Bookings
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_profile_modal"
                        >
                          Edit Profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#change-password_modal"
                        >
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0)"
                          data-bs-toggle="modal"
                          data-bs-target="#ct_logout_modal"
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="ct_menu_bar">
                    <i class="fa-solid fa-bars-staggered"></i>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
