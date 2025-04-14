import React from "react";

const ExpertTips = () => {
  const insights = [
    {
      img: "assets/img/home/skincare_1.jpg",
      title: "Dermatologist Consultation: What to Expect & Why It Matters",
      desc: `Visiting a dermatologist can be a game-changer for your skin health. Whether it's acne, anti-aging, or general skincare concerns, a professional consultation helps you understand your skin better and choose the right treatments.`,
    },
    {
      img: "assets/img/home/skincare_2.png",
      title: "Self-Care Rituals: Nourishing Your Mind, Body & Soul",
      desc: `Self-care isn’t just about skincare—it’s about nourishing your mind, body, and soul. Taking time for yourself improves overall well-being, boosts confidence, and enhances your natural beauty.`,
    },
    {
      img: "assets/img/home/skincare_3.jpg",
      title: "Skincare Routine Essentials: The Perfect Flat Lay Guide",
      desc: `A well-planned skincare routine keeps your skin healthy and glowing. Whether you're a beginner or a skincare enthusiast, a structured routine with the right products makes all the difference.`,
    },
  ];

  return (
    <>
      <section class="ct_px_80 ct_pt_60 ct_pb_60 ct_insights_bg">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-md-12"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div>
                <h2 class="ct_fs_45 ct_skin_clr_text ct_fw_600 ct_ff_Quattrocento mb-4">
                  Insights & Skincare Secrets
                </h2>
                <p class="ct_fs_20 ct_skin_clr_text ct_ff_Quattrocento">
                  Expert Tips for Healthy, Glowing Skin
                </p>
              </div>
            </div>
          </div>

          <div class="row ct_pt_60">
            {insights.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4 mb-lg-0"
                data-aos="fade-up"
                data-aos-duration="1500"
                key={index}
              >
                <div className="ct_insight_card">
                  <figure>
                    <div className="ct_insight_img">
                      <img
                        src={item.img}
                        alt=""
                        className="ct_img_h_405 ct_border_radius_10 ct_object_cover"
                      />
                    </div>
                    <figcaption>
                      <h4 className="ct_fs_24 ct_ff_Quattrocento ct_fw_700 mb-3">
                        {item.title}
                      </h4>
                      <p className="mb-0 ct_minimise_cnt ct_max_w_100">
                        {item.desc}
                      </p>
                      <div className="mt-3">
                        <a
                          href="javascript:void(0)"
                          className="ct_read_more_link text-dark"
                          data-bs-toggle="modal"
                          data-bs-target="#ct_insight_detail"
                        >
                          See Detail
                        </a>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Model */}
      <div
        class="modal fade"
        id="ct_insight_detail"
        tabindex="-1"
        aria-labelledby="ct_insight_detailLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="ct_insight_detailLabel">
                Description
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body pt-0">
              <div class="ct_desciption_scroll ct_custom_scroll">
                <p class="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam magni tempora deserunt officiis tempore ipsum
                  distinctio reiciendis porro enim! Eligendi voluptate harum rem
                  magni, laborum dolorum voluptatum corrupti adipisci debitis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertTips;