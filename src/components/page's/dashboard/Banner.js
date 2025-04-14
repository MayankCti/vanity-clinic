import React from "react";

const Banner = () => {
  return (
    <section>
      <figure class="ct_banner_video">
        <video width="100%" height="750" autoPlay muted loop playsInline>
          <source src="assets/img/home/home.mp4" type="video/mp4" />
        </video>
        <div class="ct_video_overlay_cnt ">
          <h2 class="ct_fs_60  ct_ff_Quattrocento ct_fw_500 mb-4  text-white">
            "Be your own kind of beautiful"
          </h2>
          <h3 class="ct_ff_Brittany_Signature ct_fs_60 ct_fw_500  text-white">
            Enhance Your Beauty with <br /> Vanity Clinic
          </h3>
        </div>
      </figure>
    </section>
  );
};

export default Banner;
