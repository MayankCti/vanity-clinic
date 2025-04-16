import React from 'react'
import { useNavigate } from 'react-router-dom'
import { pageRoutes } from '../../../routes/pageRoutes'

const BlogList = () => {
    const navigate = useNavigate()
  return (
    <section class="ct_pt_100 ct_pb_100 ct_px_80">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-right" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_1.jpg" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Skincare Routine Essentials:</h4>
                            <p class="ct_minimise_cnt ct_max_w_100">A well-planned skincare routine keeps your skin
                                healthy and
                                glowing. Whether you're a
                                beginner or a skincare enthusiast, a structured routine with the right products
                                makes all the difference.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_2.png" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Self-Care & Wellness: </h4>
                            <p class="ct_minimise_cnt ct_max_w_100">Self-care isn’t just about skincare—it’s about
                                nourishing
                                your mind, body, and soul.
                                Taking time for yourself improves overall well-being, boosts confidence, and
                                enhances your natural beauty.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-left" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_3.jpg" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Dermatologist Consultation: </h4>
                            <p class="ct_minimise_cnt ct_max_w_100">Visiting a dermatologist can be a game-changer
                                for your skin
                                health. Whether it's
                                acne, anti-aging, or general skincare concerns a professional consultation helps you
                                understand your skin better.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-right" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_3.jpg" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Dermatologist Consultation: </h4>
                            <p class="ct_minimise_cnt ct_max_w_100">Visiting a dermatologist can be a game-changer
                                for your skin
                                health. Whether it's
                                acne, anti-aging, or general skincare concerns a professional consultation helps you
                                understand your skin better.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_1.jpg" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Skincare Routine Essentials:</h4>
                            <p class="ct_minimise_cnt ct_max_w_100">A well-planned skincare routine keeps your skin
                                healthy and
                                glowing. Whether you're a
                                beginner or a skincare enthusiast, a structured routine with the right products
                                makes all the difference.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-left" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_2.png" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Self-Care & Wellness: </h4>
                            <p class="ct_minimise_cnt ct_max_w_100">Self-care isn’t just about skincare—it’s about
                                nourishing
                                your mind, body, and soul.
                                Taking time for yourself improves overall well-being, boosts confidence, and
                                enhances your natural beauty.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-right" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_2.png" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Self-Care & Wellness: </h4>
                            <p class="ct_minimise_cnt ct_max_w_100">Self-care isn’t just about skincare—it’s about
                                nourishing
                                your mind, body, and soul.
                                Taking time for yourself improves overall well-being, boosts confidence, and
                                enhances your natural beauty.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-up" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_3.jpg" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Dermatologist Consultation: </h4>
                            <p class="ct_minimise_cnt ct_max_w_100">Visiting a dermatologist can be a game-changer
                                for your skin
                                health. Whether it's
                                acne, anti-aging, or general skincare concerns a professional consultation helps you
                                understand your skin better.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 mb-5" data-aos="fade-left" data-aos-duration="1500">
                <div class="ct_blog_card">
                    <figure>
                        <div class="ct_blog_img">
                            <img src="assets/img/blog/blog_1.jpg" alt="" class="ct_img_h_170 ct_object_cover"/>
                        </div>
                        <figcaption>
                            <h4 class="ct_fs_28 ct_fw_700 ct_ff_Quattrocento mb-3 ct_short_heading">Skincare Routine Essentials:</h4>
                            <p class="ct_minimise_cnt ct_max_w_100">A well-planned skincare routine keeps your skin
                                healthy and
                                glowing. Whether you're a
                                beginner or a skincare enthusiast, a structured routine with the right products
                                makes all the difference.</p>
                            <div class="mt-3">
                                <a href='javascript:void(0)' onClick={()=>navigate(pageRoutes?.blogDetail)} class="ct_fw_600">Read More</a>
                            </div>
                        </figcaption>
                    </figure>

                </div>

            </div>


        </div>

    </div>

</section>
  )
}

export default BlogList
