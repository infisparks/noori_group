import React from "react";

export default function LatestBlogs() {
  return (
    <>
      <link rel="stylesheet" href="/css/elementor-loop.css" />
      <section 
      data-dce-background-color="#F7F8FA" 
      className="elementor-section elementor-top-section elementor-element elementor-element-72c9f03 elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default" 
      data-id="72c9f03" 
      data-element_type="section" 
      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
    >
      <div className="elementor-container elementor-column-gap-no">
        <div 
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d0d6a99" 
          data-id="d0d6a99" 
          data-element_type="column" 
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            
            <div className="elementor-element elementor-element-e60b059 elementor-widget elementor-widget-heading" data-id="e60b059" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-heading-wrapper">
                  <div className="elementor-heading-wrapper-inner">
                    <h2 className="elementor-heading-title elementor-size-default">Latest Blogs</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-b5f4451 elementor-widget elementor-widget-heading" data-id="b5f4451" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <div className="elementor-heading-wrapper">
                  <div className="elementor-heading-wrapper-inner">
                    <h2 className="elementor-heading-title elementor-size-default">News & Events</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider / Carousel Container */}
            <div 
              className="elementor-element elementor-element-916de1c news-event-section elementor-widget elementor-widget-loop-carousel" 
              data-id="916de1c" 
              data-element_type="widget" 
              data-settings='{"template_id":13917,"slides_to_show":"4","image_spacing_custom":{"unit":"px","size":20,"sizes":[]},"_skin":"post","slides_to_show_tablet":"2","slides_to_show_mobile":"1","slides_to_scroll":"1","edit_handle_selector":".elementor-loop-container","speed":500,"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":"","sizes":[]}}' 
              data-widget_type="loop-carousel.post"
            >
              <div className="elementor-widget-container">
                <div className="swiper elementor-loop-container elementor-grid" role="list" dir="ltr">
                  <div className="swiper-wrapper" aria-live="polite">
                    
                    {/* Blog Post 1 */}
                    <div data-elementor-type="loop-item" data-elementor-id="13917" className="elementor elementor-13917 swiper-slide e-loop-item e-loop-item-152678 post-152678 post type-post status-publish format-standard has-post-thumbnail hentry category-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
                      <div className="elementor-element elementor-element-e68156c news-event-inner-post e-flex e-con-boxed e-con e-parent" data-id="e68156c" data-element_type="container" data-settings='{"background_background":"classic"}'>
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-d34b211 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="d34b211" data-element_type="widget" data-widget_type="theme-post-featured-image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="1200" height="675" src="/images/London-office.jpg" className="attachment-full size-full wp-image-152679" alt="London Office" srcSet="/images/London-office.jpg 1200w, /images/London-office-300x169.jpg 300w, /images/London-office-1024x576.jpg 1024w, /images/London-office-768x432.jpg 768w, /images/London-office-700x394.jpg 700w" sizes="(max-width: 1200px) 100vw, 1200px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-eeba52f elementor-tablet-align-left elementor-widget elementor-widget-post-info" data-id="eeba52f" data-element_type="widget" data-widget_type="post-info.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items elementor-post-info">
                                <li className="elementor-icon-list-item elementor-repeater-item-1f865ac" itemProp="datePublished">
                                  <a href="https://danubeproperties.com/2026/06/03/">
                                    <span className="elementor-icon-list-icon">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-calendar" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                      <time>3 Jun, 2026</time>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1580d7c elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1580d7c" data-element_type="widget" data-widget_type="theme-post-title.default">
                            <div className="elementor-widget-container">
                              <h5 className="elementor-heading-title elementor-size-default">
                                <a href="https://danubeproperties.com/danube-properties-expands-uk-presence-to-boost-dubai-real-estate-access-for-uk-investors/">Danube Properties expands UK presence to boost Dubai real estate access for UK investors</a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div data-elementor-type="loop-item" data-elementor-id="13917" className="elementor elementor-13917 swiper-slide e-loop-item e-loop-item-152672 post-152672 post type-post status-publish format-standard has-post-thumbnail hentry category-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
                      <div className="elementor-element elementor-element-e68156c news-event-inner-post e-flex e-con-boxed e-con e-parent" data-id="e68156c" data-element_type="container" data-settings='{"background_background":"classic"}'>
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-d34b211 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="d34b211" data-element_type="widget" data-widget_type="theme-post-featured-image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="1200" height="675" src="/images/hhdhgvf-nbevfceg.jpg" className="attachment-full size-full wp-image-152673" alt="Property Sale" srcSet="/images/hhdhgvf-nbevfceg.jpg 1200w, /images/hhdhgvf-nbevfceg-300x169.jpg 300w, /images/hhdhgvf-nbevfceg-1024x576.jpg 1024w, /images/hhdhgvf-nbevfceg-768x432.jpg 768w, /images/hhdhgvf-nbevfceg-700x394.jpg 700w" sizes="(max-width: 1200px) 100vw, 1200px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-eeba52f elementor-tablet-align-left elementor-widget elementor-widget-post-info" data-id="eeba52f" data-element_type="widget" data-widget_type="post-info.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items elementor-post-info">
                                <li className="elementor-icon-list-item elementor-repeater-item-1f865ac" itemProp="datePublished">
                                  <a href="https://danubeproperties.com/2026/06/03/">
                                    <span className="elementor-icon-list-icon">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-calendar" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                      <time>3 Jun, 2026</time>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1580d7c elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1580d7c" data-element_type="widget" data-widget_type="theme-post-title.default">
                            <div className="elementor-widget-container">
                              <h5 className="elementor-heading-title elementor-size-default">
                                <a href="https://danubeproperties.com/danube-properties-to-host-one-day-only-mega-property-sale-in-dubai-on-may-16/">Danube Properties to host ‘One Day Only’ Mega property sale in Dubai on May 16</a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div data-elementor-type="loop-item" data-elementor-id="13917" className="elementor elementor-13917 swiper-slide e-loop-item e-loop-item-152466 post-152466 post type-post status-publish format-standard has-post-thumbnail hentry category-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
                      <div className="elementor-element elementor-element-e68156c news-event-inner-post e-flex e-con-boxed e-con e-parent" data-id="e68156c" data-element_type="container" data-settings='{"background_background":"classic"}'>
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-d34b211 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="d34b211" data-element_type="widget" data-widget_type="theme-post-featured-image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="1200" height="676" src="/images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1.webp" className="attachment-full size-full wp-image-152480" alt="Greenz launch" srcSet="/images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1.webp 1200w, /images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1-300x169.webp 300w, /images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1-1024x577.webp 1024w, /images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1-768x433.webp 768w, /images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1-850x480.webp 850w, /images/Nahyan_bin_Mubarak_UnveilsGreenz-by-Noorigroup-1-700x394.webp 700w" sizes="(max-width: 1200px) 100vw, 1200px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-eeba52f elementor-tablet-align-left elementor-widget elementor-widget-post-info" data-id="eeba52f" data-element_type="widget" data-widget_type="post-info.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items elementor-post-info">
                                <li className="elementor-icon-list-item elementor-repeater-item-1f865ac" itemProp="datePublished">
                                  <a href="https://danubeproperties.com/2026/05/11/">
                                    <span className="elementor-icon-list-icon">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-calendar" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                      <time>11 May, 2026</time>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1580d7c elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1580d7c" data-element_type="widget" data-widget_type="theme-post-title.default">
                            <div className="elementor-widget-container">
                              <h5 className="elementor-heading-title elementor-size-default">
                                <a href="https://danubeproperties.com/nahyan-bin-mubarak-unveils-greenz-by-danube-dubais-first-fully-furnished-master-villa-project/">Nahyan bin Mubarak Unveils Greenz by Noori Group, Mumbai’s First Fully Furnished Master Villa Project</a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Blog Post 4 */}
                    <div data-elementor-type="loop-item" data-elementor-id="13917" className="elementor elementor-13917 swiper-slide e-loop-item e-loop-item-151757 post-151757 post type-post status-publish format-standard has-post-thumbnail hentry category-news" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
                      <div className="elementor-element elementor-element-e68156c news-event-inner-post e-flex e-con-boxed e-con e-parent" data-id="e68156c" data-element_type="container" data-settings='{"background_background":"classic"}'>
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-d34b211 elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="d34b211" data-element_type="widget" data-widget_type="theme-post-featured-image.default">
                            <div className="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="600" height="338" src="/images/shrf.jpg" className="attachment-full size-full wp-image-151758" alt="Tiger Shroff investment" srcSet="/images/shrf.jpg 600w, /images/shrf-300x169.jpg 300w" sizes="(max-width: 600px) 100vw, 600px" />
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-eeba52f elementor-tablet-align-left elementor-widget elementor-widget-post-info" data-id="eeba52f" data-element_type="widget" data-widget_type="post-info.default">
                            <div className="elementor-widget-container">
                              <ul className="elementor-icon-list-items elementor-post-info">
                                <li className="elementor-icon-list-item elementor-repeater-item-1f865ac" itemProp="datePublished">
                                  <a href="https://danubeproperties.com/2026/05/06/">
                                    <span className="elementor-icon-list-icon">
                                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-calendar" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
                                      </svg>
                                    </span>
                                    <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                                      <time>6 May, 2026</time>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-1580d7c elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1580d7c" data-element_type="widget" data-widget_type="theme-post-title.default">
                            <div className="elementor-widget-container">
                              <h5 className="elementor-heading-title elementor-size-default">
                                <a href="https://danubeproperties.com/tiger-shroff-invests-in-breez-by-danube-reinforcing-strong-global-confidence-in-dubai-real-estate/">Tiger Shroff invests in ‘Breez by Danube,’ reinforcing strong global confidence in Dubai real estate</a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="elementor-element elementor-element-1cafb00 elementor-widget__width-auto elementor-align-center elementor-button-primary elementor-widget elementor-widget-button" data-id="1cafb00" data-element_type="widget" data-widget_type="button.default">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a href="https://danubeproperties.com/news/" className="elementor-button-link elementor-button elementor-size-lg" role="button">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">View More</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}
