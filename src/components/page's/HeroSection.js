import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pageRoutes } from "../../routes/pageRoutes";

const HeroSection = ({ label = "", breadcrumbItems = [] }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <section class="ct_inner_bg">
      <div class="container">
        <div class="row">
          <div class="col-md-12" data-aos="fade-up" data-aos-duration="1500">
            <h2 class="ct_fs_60 ct_ff_Quattrocento ct_fw_600 mb-3">{label}</h2>
            <ul className="ct_breadcrumb">
              {breadcrumbItems?.map((item, index) => (
                <>
                  <li>
                    {item.path ? (
                      <a
                        href="javascript:void(0)"
                        onClick={() => navigate(item.path)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
                  </li>

                  {/* Show arrow icon except after the last item */}
                  {index < breadcrumbItems.length - 1 && (
                    <li className="ct_skin_clr_text">
                      <i className="fa-solid fa-angle-right"></i>
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
