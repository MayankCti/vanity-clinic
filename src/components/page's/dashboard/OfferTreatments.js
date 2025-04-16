import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../../routes/pageRoutes";

const OfferTreatments = () => {
  const navigate = useNavigate()
  return (
    <section class="ct_px_80 ct_treatment_section ct_pt_100 ct_pb_100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12" data-aos="fade-down" data-aos-duration="1500">
            <div class="text-center ct_treatment_head_circle">
              <h2 class="ct_fs_45 ct_skin_clr_text ct_fw_600 mb-4 ct_ff_Quattrocento">
                Treatments We Offer
              </h2>
              <p class="ct_fs_20 ct_skin_clr_text ct_ff_Quattrocento">
                Personalized Aesthetic Solutions for Radiant Skin & Confidence
              </p>
            </div>
          </div>
        </div>
        <div class="ct_pt_100 row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="row">
              <div
                class="col-md-6 mb-4 mb-md-0"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div
                  class="ct_treatment_card"
                  style={{
                    backgroundImage: "url(assets/img/home/treatment_1.jpg)",
                  }}
                >
                  <p class="ct_ff_Quattrocento ct_fs_20 text-white">EMSCULPT</p>
                  <div class="mt-auto">
                    <p class="text-white ct_custom_scroll">
                      The only treatment in the world that builds muscle and
                      burns fat. The favorite treatment of the Hollywood elite!
                      Among others, actresses Jennifer Lopez and Drew Barrymore
                      have used EMSCULPT.
                    </p>
                    <div class="d-flex align-items-center justify-content-between gap-3">
                      <p class="mb-0 ct_fw_700 text-white">$89</p>
                      <a
                        href="javascript:void(0)" onClick={()=>{navigate(pageRoutes.treatmentDetail)}}
                        class="mb-0 ct_read_more_link"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <div
                  class="ct_treatment_card"
                  style={{
                    backgroundImage: "url(assets/img/home/treatment_2.jpg)",
                  }}
                >
                  <p class="ct_ff_Quattrocento ct_fs_20 text-white">BOTOX</p>
                  <div class="mt-auto">
                    <p class="text-white ct_custom_scroll">
                      The only treatment in the world that builds muscle and
                      burns fat. The favorite treatment of the Hollywood elite!
                      Among others, actresses Jennifer Lopez and Drew Barrymore
                      have used EMSCULPT.
                    </p>
                    <div class="d-flex align-items-center justify-content-between gap-3">
                      <p class="mb-0 ct_fw_700 text-white">$89</p>
                      <a
                        href="javascript:void(0)" onClick={()=>{navigate(pageRoutes.treatmentDetail)}}
                        class="mb-0 ct_read_more_link"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 mb-4 mb-lg-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div
              class="ct_treatment_card ct_img_h_267 mb-4"
              style={{
                backgroundImage: "url(assets/img/home/treatment_3.jpg)",
              }}
            >
              <p class="ct_ff_Quattrocento ct_fs_20 text-white">BOTOX</p>
              <div class="mt-auto">
                <p class="text-white ct_custom_scroll">
                  The only treatment in the world that builds muscle and burns
                  fat. The favorite treatment of the Hollywood elite! Among
                  others, actresses Jennifer Lopez and Drew Barrymore have used
                  EMSCULPT.
                </p>
                <div class="d-flex align-items-center justify-content-between gap-3">
                  <p class="mb-0 ct_fw_700 text-white">$89</p>
                  <a
                    href="javascript:void(0)" onClick={()=>{navigate(pageRoutes.treatmentDetail)}}
                    class="mb-0 ct_read_more_link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div
              class="ct_treatment_card ct_img_h_267"
              style={{
                backgroundImage: "url(assets/img/home/treatment_4.jpg)",
              }}
            >
              <p class="ct_ff_Quattrocento ct_fs_20 text-white">BOTOX</p>
              <div class="mt-auto">
                <p class="text-white ct_custom_scroll">
                  The only treatment in the world that builds muscle and burns
                  fat. The favorite treatment of the Hollywood elite! Among
                  others, actresses Jennifer Lopez and Drew Barrymore have used
                  EMSCULPT.
                </p>
                <div class="d-flex align-items-center justify-content-between gap-3">
                  <p class="mb-0 ct_fw_700 text-white">$89</p>
                  <a
                    href="javascript:void(0)" onClick={()=>{navigate(pageRoutes.treatmentDetail)}}
                    class="mb-0 ct_read_more_link"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferTreatments;
