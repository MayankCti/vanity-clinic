import React from "react";

const CustomerReview = () => {
  const testimonials = [
    {
      name: "Alex j.",
      image: "assets/img/user.jpg",
      rating: 5,
      text: "Absolutely love my results! The team was professional, and the treatment was smooth and painless. My skin has never felt better!",
      date: "March 10, 2025 – 2:15 PM",
    },
    {
      name: "Alex j.",
      image: "assets/img/user.jpg",
      rating: 5,
      text: "Absolutely love my results! The team was professional, and the treatment was smooth and painless. My skin has never felt better!",
      date: "March 10, 2025 – 2:15 PM",
    },
    {
      name: "Alex j.",
      image: "assets/img/user.jpg",
      rating: 5,
      text: "Absolutely love my results! The team was professional, and the treatment was smooth and painless. My skin has never felt better!",
      date: "March 10, 2025 – 2:15 PM",
    },
    {
      name: "Alex j.",
      image: "assets/img/user.jpg",
      rating: 5,
      text: "Absolutely love my results! The team was professional, and the treatment was smooth and painless. My skin has never felt better!",
      date: "March 10, 2025 – 2:15 PM",
    },
    // You can add more testimonials like this
  ];

  const TestimonialRendar = () => {
    return (
      <>
        {testimonials.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <div className="ct_testimonial_card">
              <div className="ct_testimonial_img">
                <img
                  src={item.image}
                  alt=""
                  className="ct_img_60 ct_border_radius_100 ct_object_cover"
                />
              </div>
              <div className="ct_testimonial_cnt">
                <div className="d-flex align-items-center gap-3 mb-4 ct_flex_direction_col_767">
                  <h4 className="ct_fs_24 ct_ff_Quattrocento mb-0">
                    {item.name}
                  </h4>
                  <div className="d-flex align-items-center gap-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>
                        <i className="fa-solid fa-star ct_yellow_text"></i>
                      </span>
                    ))}
                  </div>
                </div>
                <p className="ct_ff_QuattrocentoSans">"{item.text}"</p>
                <span className="ct_fs_18 ct_fw_700 ct_text_op_0_3">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <section class=" ct_pt_100 ct_pb_100">
      <div class="ct_px_80">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12" data-aos="fade-up" data-aos-duration="1500">
              <div class="d-flex justify-content-between gap-2 flex-wrap">
                <div>
                  <h2 class="ct_fs_45 ct_skin_clr_text ct_fw_600 ct_ff_Quattrocento mb-4">
                    What our customer say about us?
                  </h2>
                  <p class="ct_fs_20 ct_skin_clr_text ct_ff_Quattrocento">
                    Experience Shared by Our Happy Customers
                  </p>
                </div>
                <div>
                  <a
                    href="testimonial.html"
                    class="ct_read_more_link"
                    style={{ color: "#000" }}
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ct_pt_60" data-aos="fade-up" data-aos-duration="1500">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <TestimonialRendar />
          </div>
          {/* <!-- Pagination --> */}
        </div>
        <div class="swiper mySwiper2 mt-4">
          <div class="swiper-wrapper">
            <TestimonialRendar />
          </div>
          {/* <!-- Pagination --> */}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
