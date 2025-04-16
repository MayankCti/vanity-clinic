import React from 'react'

const RecomendedTreatments = () => {
  return (
    <section
    class="ct_px_80 ct_pb_100"
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h4 class="ct_fs_28 ct_fw_700 mb-4">Recommended Treatments</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div class="ct_recomended_treatment_card">
            <figure>
              <div class="ct_recomended_img ">
                <img
                  src="assets/img/treatment/treatment_3.jpg"
                  alt=""
                  class="ct_img_h_400 ct_object_cover"
                />
              </div>
              <figcaption class="mt-4">
                <h4 class="ct_fs_24 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                  Emsella
                </h4>
                <p class="ct_ff_QuattrocentoSans mb-0">
                  Improves skin health and appearance.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div class="ct_recomended_treatment_card">
            <figure>
              <div class="ct_recomended_img  ">
                <img
                  src="assets/img/treatment/treatment_9.jpg"
                  alt=""
                  class="ct_img_h_400 ct_object_cover"
                />
              </div>
              <figcaption class="mt-4">
                <h4 class="ct_fs_24 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                  FILLERS
                </h4>
                <p class="ct_ff_QuattrocentoSans mb-0">Reduces body fat.</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div class="ct_recomended_treatment_card">
            <figure>
              <div class="ct_recomended_img">
                <img
                  src="assets/img/treatment/treatment_10.png"
                  alt=""
                  class="ct_img_h_400 ct_object_cover"
                />
              </div>
              <figcaption class="mt-4">
                <h4 class="ct_fs_24 ct_fw_700 mb-0 ct_ff_QuattrocentoSans">
                  RHENOPLASTY
                </h4>
                <p class="ct_ff_QuattrocentoSans mb-0">Reshapes the nose</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default RecomendedTreatments
