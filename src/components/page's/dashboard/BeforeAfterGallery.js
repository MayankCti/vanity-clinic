import React from "react";

const BeforeAfterGallery = () => {
  return (
    <section class="ct_px_80 ct_why_book_bg ct_pt_60 ct_pb_60">
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-md-12 text-center"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h2 class="ct_fs_45 ct_skin_clr_text ct_fw_600 ct_ff_Quattrocento mb-4">
              Before & After Gallery
            </h2>
            <p class="ct_fs_20 ct_skin_clr_text ct_ff_Quattrocento">
              Real Transformations, Real Results
            </p>
          </div>
        </div>
        <div class="row mt-5 pt-3">
          <div
            class="col-xl-4 col-lg-6 col-md-6 mb-4 mb-xl-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div class="ct_before_after_card">
              <figure>
                <div class="ct_before_after_img">
                  <img src="assets/img/home/before_1.png" alt="" />
                  <img src="assets/img/home/after_1.png" alt="" />
                </div>
                <figcaption>
                  <h5 class="ct_fs_24 mb-2">Emsculpt</h5>
                  <p class="ct_fs_18 mb-0 ct_scroll_200 ct_custom_scroll">
                    EMSCULPT is the world's only non-invasive treatment to build
                    muscle while reducing fat.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 mb-4 mb-xl-0"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div class="ct_before_after_card">
              <figure>
                <div class="ct_before_after_img">
                  <img src="assets/img/home/before_2.png" alt="" />
                  <img src="assets/img/home/after_2.png" alt="" />
                </div>
                <figcaption>
                  <h5 class="ct_fs_24 mb-2">Fillers</h5>
                  <p class="ct_fs_18 mb-0 ct_scroll_200 ct_custom_scroll">
                    Hyaluronic acid fillers are a gel consisting of hyaluronic
                    acid, a body-identical sugar, and water
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 mb-4 mb-xl-0"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div class="ct_before_after_card">
              <figure>
                <div class="ct_before_after_img">
                  <img src="assets/img/home/before_3.png" alt="" />
                  <img src="assets/img/home/after_3.png" alt="" />
                </div>
                <figcaption>
                  <h5 class="ct_fs_24 mb-2">HarmonyCa</h5>
                  <p class="ct_fs_18 mb-0 ct_scroll_200 ct_custom_scroll">
                    Fade stubborn acne scars and achieve smoother, clearer skin
                    with advanced treatments like laser therapy, microneedling,
                    and chemical peels.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
