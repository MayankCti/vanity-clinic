import React from "react";
import { useNavigate } from "react-router-dom";
import { pageRoutes } from "../../../routes/pageRoutes";

const ProvidedTreatments = () => {
  const navigate = useNavigate();
  return (
    <section class="ct_pt_100 ct_pb_100 ct_px_80">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div
              class="mb-4 text-center"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <span class="text-center ct_fw_700 d-block mb-2 ct_fs_18">
                TREATMENTS
              </span>
              <h3 class="ct_fs_45 ct_fw_700 mt-1 ct_ff_Quattrocento ct_skin_clr_text ">
                TREATMENTS WE PROVIDE
              </h3>
              <p class="ct_ff_QuattrocentoSans ct_fs_20">
                Advanced Aesthetic Treatments Designed for Your Beauty &
                Wellness.
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12">
            <ul
              class="nav nav-pills mb-3 ct_treatment_tab"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-Face-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Face"
                  type="button"
                  role="tab"
                  aria-controls="pills-Face"
                  aria-selected="true"
                >
                  Face
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-Body-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Body"
                  type="button"
                  role="tab"
                  aria-controls="pills-Body"
                  aria-selected="false"
                >
                  Body
                </button>
              </li>
            </ul>
            <div class="tab-content mt-5" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-Face"
                role="tabpanel"
                aria-labelledby="pills-Face-tab"
              >
                <div class="row">
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_1.jpg"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            01
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Lase MD
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_2.jpg"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            02
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Botox
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_3.jpg"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            03
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Emsella
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_4.jpg"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            04
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Synergy +
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_5.jpg"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            05
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Dermapen
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_6.jpg"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            06
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Fat Burner
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_7.jpg"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            07
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Biostimulering
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_8.jpg"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            08
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Cellox30
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-Body"
                role="tabpanel"
                aria-labelledby="pills-Body-tab"
              >
                <div class="row">
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_1_1.jpg"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            01
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Omorphia 20
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_2_2.png"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            02
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            Fat Burner
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_3_3.jpg"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            03
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            EMTONE
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_5_5.png"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            04
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            SKIN TREATMENT
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-right"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_5_5.png"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            05
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            SKIN TREATMENT
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_2_2.png"
                            alt=""
                            class=" ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            06
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            EMSELLA
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_2.jpg"
                            alt=""
                            class="ct_img_h_381 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            07
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            ICOONE
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    class="col-lg-3 col-md-6 mb-5"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                  >
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        navigate(pageRoutes?.treatmentDetail);
                      }}
                      class="ct_provide_treatment_card"
                    >
                      <figure>
                        <div class="ct_treat_img">
                          <img
                            src="assets/img/treatment/treatment_4_4.png"
                            alt=""
                            class="ct_img_h_514 ct_object_cover"
                          />
                        </div>
                        <figcaption class="d-flex align-items-center justify-content-between gap-2 mt-4">
                          <h3 class="ct_fs_28 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                            08
                          </h3>
                          <h5 class="ct_fs_20 ct_ff_QuattrocentoSans mb-0">
                            RHENOPLASTY
                          </h5>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvidedTreatments;
