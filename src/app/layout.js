import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real Estate Company in Dubai | Leading Real Estate Developer - Danube Properties",
  description: "Danube Properties, a trusted Real Estate Company in Dubai, offers Properties for Sale in Dubai. Find your dream home today.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="/css/all.min_1.css" />
        <link rel="stylesheet" href="/css/frontend.min_1.css" />
        <link rel="stylesheet" href="/css/animations.css" />
        <link rel="stylesheet" href="/css/style.min_5.css" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <link rel="stylesheet" href="/css/style.min_7.css" />
        <link rel="stylesheet" href="/css/style.min_4.css" />
        <link rel="stylesheet" href="/css/style.min_2.css" />
        <link rel="stylesheet" href="/css/style.min_3.css" />
        <link rel="stylesheet" href="/css/blocks.style.build.css" />
        <link rel="stylesheet" href="/css/mc-front.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/jquery-ui.css" />
        <link rel="stylesheet" href="/css/simple-job-board-public.css" />
        <link rel="stylesheet" href="/css/style.min_6.css" />
        <link rel="stylesheet" href="/css/style.min_1.css" />
        <link rel="stylesheet" href="/css/eae.min.css" />
        <link rel="stylesheet" href="/css/peel.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        <link rel="stylesheet" href="/css/slick-lightbox.css" />
        <link rel="stylesheet" href="/css/opal-boostrap.css" />
        <link rel="stylesheet" href="/css/style_2.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/style-rtl.css" />
        <link rel="stylesheet" href="/css/opal-icons.css" />
        <link rel="stylesheet" href="/css/carousel.css" />
        <link rel="stylesheet" href="/css/frontend.min.css" />
        <link rel="stylesheet" href="/css/dashicons.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/v4-shims.min.css" />
        <link rel="stylesheet" href="/css/widget-video.min.css" />
        <link rel="stylesheet" href="/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/css/widget-image-box.min.css" />
        <link rel="stylesheet" href="/css/widget-divider.min.css" />
        <link rel="stylesheet" href="/css/widget-call-to-action.min.css" />
        <link rel="stylesheet" href="/css/transitions.min.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
        <link rel="stylesheet" href="/css/e-swiper.min.css" />
        <link rel="stylesheet" href="/css/widget-loop-common.min.css" />
        <link rel="stylesheet" href="/css/widget-loop-carousel.min.css" />
        <link rel="stylesheet" href="/css/intlTelInput.min.css" />
        <link rel="stylesheet" href="/css/widget-image.min.css" />
        <link rel="stylesheet" href="/css/widget-nav-menu.min.css" />
        <link rel="stylesheet" href="/css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/css/style_1.css" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" as="style" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script async="true" src="/js/gtm.js" />
        <script  dangerouslySetInnerHTML={{ __html: `
        // Add loaded class once DOM is ready
        document.addEventListener("DOMContentLoaded", function() {
            document.body.classList.add("loaded");
        });
    ` }} />
        <script type="application/ld+json" className="yoast-schema-graph" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://danubeproperties.com/","url":"https://danubeproperties.com/","name":"Real Estate Company in Dubai | Leading Real Estate Developer - Danube Properties","isPartOf":{"@id":"https://danubeproperties.com/#website"},"about":{"@id":"https://danubeproperties.com/#organization"},"primaryImageOfPage":{"@id":"https://danubeproperties.com/#primaryimage"},"image":{"@id":"https://danubeproperties.com/#primaryimage"},"thumbnailUrl":"https://danubeproperties.com/wp-content/uploads/2024/02/interest.png","datePublished":"2024-02-06T07:35:04+00:00","dateModified":"2026-07-03T06:54:00+00:00","description":"Danube Properties, a trusted Real Estate Company in Dubai, offers Properties for Sale in Dubai. Find your dream home today from a leading Real Estate Developer in Dubai.","breadcrumb":{"@id":"https://danubeproperties.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://danubeproperties.com/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://danubeproperties.com/#primaryimage","url":"https://danubeproperties.com/wp-content/uploads/2024/02/interest.png","contentUrl":"https://danubeproperties.com/wp-content/uploads/2024/02/interest.png","width":60,"height":60},{"@type":"BreadcrumbList","@id":"https://danubeproperties.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://danubeproperties.com/#website","url":"https://danubeproperties.com/","name":"Danube Properties","description":"","publisher":{"@id":"https://danubeproperties.com/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://danubeproperties.com/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://danubeproperties.com/#organization","name":"Danube Properties","url":"https://danubeproperties.com/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://danubeproperties.com/#/schema/logo/image/","url":"https://danubeproperties.com/wp-content/uploads/2024/02/header-logo.png","contentUrl":"https://danubeproperties.com/wp-content/uploads/2024/02/header-logo.png","width":373,"height":20,"caption":"Danube Properties"},"image":{"@id":"https://danubeproperties.com/#/schema/logo/image/"}}]}` }} />
        <script type="text/javascript" id="wpml-cookie-js-extra" dangerouslySetInnerHTML={{ __html: `

var wpml_cookies = {"wp-wpml_current_language":{"value":"en","expires":1,"path":"/"}};
var wpml_cookies = {"wp-wpml_current_language":{"value":"en","expires":1,"path":"/"}};
//# sourceURL=wpml-cookie-js-extra

` }} />
        <script type="text/javascript" src="/js/language-cookie.js" id="wpml-cookie-js" defer="true" strategy="defer" />
        <script type="text/javascript" async="true" src="/js/timeme.min.js" id="burst-timeme-js" />
        <script type="text/javascript" async="true" src="/js/burst.min.js" id="burst-js" />
        <script type="text/javascript" src="/js/jquery.min.js" id="jquery-core-js" />
        <script type="text/javascript" src="/js/jquery-migrate.min.js" id="jquery-migrate-js" />
        <script type="text/javascript" src="/js/script.min.js" id="wpml-legacy-dropdown-0-js" />
        <script type="text/javascript" src="/js/iconHelper.js" id="eae-iconHelper-js" />
        <script type="text/javascript" src="/js/jquery.js" id="danube-jquery-js" />
        <script type="text/javascript" src="/js/owl.carousel.js" id="owl-carousel-js" />
        <script type="text/javascript" src="/js/modernizr.custom.js" id="modernizr-js" />
        <script type="text/javascript" src="/js/carousel.js" id="otf-carousel-js" />
        <script type="text/javascript" src="/js/slick.js" id="slick-js" />
        <script  dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'siteDomain': window.location.hostname
  });
` }} />
        <script  dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T7D7R3R');` }} />
        <script id="sc-script" src="/js/__translator.js" />
        <script  dangerouslySetInnerHTML={{ __html: `                                                                                                                                
  if ('serviceWorker' in navigator) {                                                                                                     
      navigator.serviceWorker.register('/serviceworker.js');                                                                              
  }                                                                                                                                       
` }} />
        <script  dangerouslySetInnerHTML={{ __html: `
window.dataLayer = window.dataLayer || [];

window.pageData = {
    page_type: "home",
    property_id: "",
    property_name: "",
    page_location: window.location.href
};

//console.log("pageData initialized:", window.pageData);
` }} />
        <script  dangerouslySetInnerHTML={{ __html: `document.addEventListener("DOMContentLoaded", function () {
    const allElements = document.querySelectorAll("*");

    allElements.forEach(function(el) {
        const style = window.getComputedStyle(el);
        const font = style.getPropertyValue("font-family");
        
        if (font.includes("Optima LT Pro / Roman")) {
            el.style.fontFamily = '"Libertinus Sans';
        }
    });
});` }} />
        <script src="/js/wp-emoji-release.min.js" defer="true" />
        <script src="/js/intlTelInput.min.js" />
        <script src="/js/api.js" async="true" defer="true" />
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: `
{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/rehomes-child/*","/wp-content/themes/rehomes/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}
` }} />
        <script  dangerouslySetInnerHTML={{ __html: `$(document).on('click', 'a[href^="#callus"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
}); 

//new langauge code 
 
` }} />
        <script  dangerouslySetInnerHTML={{ __html: `
document.addEventListener('DOMContentLoaded', function () {
    var banner = document.querySelector('.banner-section');
    var video = banner ? banner.querySelector('video') : null;

    if (video) {
        video.style.pointerEvents = 'none';
    }

    if (banner) {
        banner.style.cursor = 'pointer';
        banner.addEventListener('click', function () {
            window.location.href = 'https://danubeproperties.com/openhouse/';
        });
    }
});
` }} />
        <script  dangerouslySetInnerHTML={{ __html: `
document.addEventListener('DOMContentLoaded', function () {

    window.dataLayer = window.dataLayer || [];

    // ------------------- SCROLL TRACKING -------------------
    (function () {
        let scroll25Fired = false;
        let scroll50Fired = false;

        function getScrollPercentage() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            return Math.round((scrollTop / docHeight) * 100);
        }

        window.addEventListener('scroll', function () {
            const scrollPercent = getScrollPercentage();

            if (scrollPercent >= 25 && !scroll25Fired) {
                window.dataLayer.push({
                    event: 'scroll_25',
                    page_type: window.pageData.page_type,
                    property_id: window.pageData.property_id,
                    property_name: window.pageData.property_name,
                    page_location: window.pageData.page_location
                });
                scroll25Fired = true;
            }

            if (scrollPercent >= 50 && !scroll50Fired) {
                window.dataLayer.push({
                    event: 'scroll_50',
                    page_type: window.pageData.page_type,
                    property_id: window.pageData.property_id,
                    property_name: window.pageData.property_name,
                    page_location: window.pageData.page_location
                });
                scroll50Fired = true;
            }
        });
    })();

    // ------------------- NAVIGATION CLICK -------------------
    document.querySelectorAll('nav a, .menu a, header a, footer a').forEach(function(link) {

        link.addEventListener('click', function () {

            var navItem = this.textContent.trim();
            var navUrl = this.href;

            // NAV LEVEL
            var navLevel = "L0";
            var current = this.closest('li');
            var levelCount = 0;

            while (current && current.parentElement) {
                if (current.parentElement.classList.contains('sub-menu')) {
                    levelCount++;
                }
                current = current.parentElement.closest('li');
            }

            if (levelCount === 1) navLevel = "L1";
            if (levelCount === 2) navLevel = "L2";
            if (levelCount >= 3) navLevel = "L3";

            // NAV PARENT
            var navParent = "";
            var parentLi = this.closest('li')?.parentElement?.closest('li');
            if (parentLi) {
                var parentLink = parentLi.querySelector('a');
                if (parentLink) navParent = parentLink.textContent.trim();
            }

            // NAV LOCATION
            var navLocation = "header";
            if (this.closest('footer')) navLocation = "footer";
            if (this.closest('.mobile-menu') || this.closest('.offcanvas') || this.closest('.hamburger')) navLocation = "header_mobile";

            // NAV MENU NAME
            var navMenu = "main_menu";
            var menuWrapper = this.closest('.menu, nav');
            if (menuWrapper && menuWrapper.className) navMenu = menuWrapper.className;

            // PUSH TO DATA LAYER
            window.dataLayer.push({
                event: 'navigation_click',
                nav_item: navItem,
                nav_level: navLevel,
                nav_menu: navMenu,
                nav_parent: navParent,
                nav_location: navLocation,
                nav_url: navUrl,
                page_type: window.pageData.page_type,
                page_location: window.pageData.page_location
            });

        });

    });

    // ------------------- LANGUAGE CHANGE (WPML) -------------------
    document.querySelectorAll('.wpml-ls-link').forEach(function(link) {

        link.addEventListener('click', function() {

            var languageTo = this.querySelector('.wpml-ls-native')?.getAttribute('lang') || this.textContent.trim();
            var languageFrom = document.documentElement.lang || "";
            var navLocation = "header";
            if (this.closest('footer')) navLocation = "footer";

            window.dataLayer.push({
                event: 'change_language',
                language_from: languageFrom,
                language_to: languageTo,
                nav_location: navLocation,
                page_type: window.pageData.page_type,
                property_id: window.pageData.property_id,
                property_name: window.pageData.property_name,
                page_location: window.pageData.page_location
            });

        });

    });

    // ------------------- CTA CLICK -------------------
    document.querySelectorAll('a, button').forEach(function(el) {

        el.addEventListener('click', function() {

            // Only track elements that look like CTAs
            if (!this.className.match(/btn|button|cta|elementor-button/i)) return;

            var ctaText = this.innerText.trim();
            var ctaName = this.getAttribute('aria-label') || ctaText;

            var ctaType = "other";
            var href = this.getAttribute('href') || "";

            if (href.includes("tel:")) ctaType = "call";
            else if (href.includes("wa.me") || href.includes("whatsapp")) ctaType = "whatsapp";
            else if (href.includes("brochure")) ctaType = "download";
            else if (href.includes("register")) ctaType = "register";
            else if (href.includes("enquire") || href.includes("inquire")) ctaType = "enquiry";
            else if (this.closest('form')) ctaType = "form_submit";
            else ctaType = "click";

            var ctaLocation = "body";
            if (this.closest('header')) ctaLocation = "header";
            if (this.closest('footer')) ctaLocation = "footer";
            if (this.closest('.property-card')) ctaLocation = "property_card";
            if (this.closest('.elementor-hero')) ctaLocation = "hero";

            window.dataLayer.push({
                event: 'cta_click',
                cta_name: ctaName,
                cta_text: ctaText,
                cta_type: ctaType,
                cta_location: ctaLocation,
                page_type: window.pageData.page_type,
                property_id: window.pageData.property_id,
                property_name: window.pageData.property_name,
                page_location: window.pageData.page_location
            });

        });

    });

});
	
	// ------------------- SHARE BUTTON TRACKING -------------------
document.querySelectorAll('a, button').forEach(function(el) {

    el.addEventListener('click', function() {

        // Check if element is a share button by class or href pattern
        var href = this.getAttribute('href') || "";
        var isShare = this.className.match(/share|social|social-icon|wp-social/i) || 
                      href.match(/facebook|twitter|linkedin|whatsapp|mailto|copy/i);

        if (!isShare) return; // ignore non-share buttons

        // Determine share method
        var shareMethod = "other";
        if (href.includes("facebook.com")) shareMethod = "facebook";
        else if (href.includes("twitter.com")) shareMethod = "twitter";
        else if (href.includes("linkedin.com")) shareMethod = "linkedin";
        else if (href.includes("wa.me") || href.includes("whatsapp")) shareMethod = "whatsapp";
        else if (href.includes("mailto:")) shareMethod = "email";
        else if (this.className.match(/copy/i)) shareMethod = "copy_link";

        // Push to dataLayer
        window.dataLayer.push({
            event: 'share',
            share_method: shareMethod,
            property_id: window.pageData.property_id,
            property_name: window.pageData.property_name
        });

    });

});

	// 10/11------------------ FORM TRACKING -------------------
document.querySelectorAll('form').forEach(function(form) {

    // Track form start (first focus inside any input)
    let formStarted = false;
    form.addEventListener('focusin', function() {
        if (formStarted) return;
        formStarted = true;

        window.dataLayer.push({
            event: 'form_start',
            form_id: form.getAttribute('id') || form.getAttribute('name') || 'unknown_form',
            form_type: form.getAttribute('data-form-type') || 'general',
            property_id: window.pageData.property_id,
            property_name: window.pageData.property_name,
            page_location: window.pageData.page_location
        });
    });

    // Track form submission → generate_lead
    form.addEventListener('submit', function(e) {

        // Optional: prevent default if testing
        // e.preventDefault();

        // Capture fields (customize field selectors as needed)
        var nationality = form.querySelector('[name="nationality"]')?.value || '';
        var budget = form.querySelector('[name="budget"]')?.value || '';
        var purchaseTimeline = form.querySelector('[name="purchase_timeline"]')?.value || '';

        window.dataLayer.push({
            event: 'generate_lead',
            form_id: form.getAttribute('id') || form.getAttribute('name') || 'unknown_form',
            form_type: form.getAttribute('data-form-type') || 'general',
            property_id: window.pageData.property_id,
            property_name: window.pageData.property_name,
            nationality: nationality,
            budget: budget,
            purchase_timeline: purchaseTimeline,
            page_location: window.pageData.page_location
        });

    });

});

	// ------------------- JAVASCRIPT ERROR TRACKING -------------------
window.addEventListener('error', function(event) {
    window.dataLayer.push({
        event: 'javascript_error',
        error_message: event.message || 'unknown',
        error_source: event.filename || 'unknown',
        error_code: event.lineno ? 'Line: ' + event.lineno : 'unknown'
    });
});

// ------------------- FORM ERROR TRACKING -------------------
// This assumes your form shows error messages via class ".form-error" or similar
document.querySelectorAll('form').forEach(function(form) {

    // Observe changes inside the form to detect error messages
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const errorElements = form.querySelectorAll('.form-error, .error-message');
                errorElements.forEach(function(errEl) {
                    const errorMessage = errEl.innerText || 'unknown';
                    const errorCode = errEl.getAttribute('data-error-code') || 'unknown';

                    window.dataLayer.push({
                        event: 'form_error',
                        form_id: form.getAttribute('id') || form.getAttribute('name') || 'unknown_form',
                        form_type: form.getAttribute('data-form-type') || 'general',
                        error_code: errorCode,
                        error_message: errorMessage,
                        page_location: window.pageData.page_location
                    });
                });
            }
        });
    });

    observer.observe(form, { childList: true, subtree: true });
});

` }} />
        <script src="/js/intlTelInput.min.js" />
        <script src="/js/api.js" async="true" defer="true" />
        <script src="/js/intlTelInput.min.js" />
        <script src="/js/api.js" async="true" defer="true" />
        <script  dangerouslySetInnerHTML={{ __html: `
				const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );
			` }} />
        <script  dangerouslySetInnerHTML={{ __html: `(function () {
  const query = window.location.search;
  if (!query) return;

  document.querySelectorAll('a[href]').forEach(link => {
    const url = new URL(link.href, location.origin);

    // avoid duplicating params
    query.slice(1).split('&').forEach(p => {
      const [k] = p.split('=');
      if (!url.searchParams.has(k)) {
        url.search += (url.search ? '&' : '?') + p;
      }
    });

    link.href = url.toString();
  });
})();` }} />
        <script  dangerouslySetInnerHTML={{ __html: `
document.addEventListener('DOMContentLoaded', function(){
  // === CONFIG ===
  const TURNSTILE_SITE_KEY = '0x4AAAAAAB0AJ_Z-forxW6i6';

  // Salesforce geo field API names
  const geoNames = {
    ip:      '00NNM000009OLXZ',
    city:    '00NJ9000000Ow3w',
    state:   '00NJ9000000Ow3y',
    country: '00NJ9000000Ow3x'
  };

  // All forms
  const forms = Array.from(document.querySelectorAll('form.webToLeadForm'));
  if (!forms.length) return;

  // Ensure hidden inputs exist
  forms.forEach(form => {
    Object.values(geoNames).forEach(sf => {
      if (!form.elements[sf]) {
        const inp = document.createElement('input');
        inp.type = 'hidden';
        inp.name = sf;
        form.appendChild(inp);
      }
    });
    if (!form.querySelector('input[name="cf-turnstile-response"]')) {
      const tInput = document.createElement('input');
      tInput.type = 'hidden';
      tInput.name = 'cf-turnstile-response';
      form.appendChild(tInput);
    }
  });

  // IP Geolocation (optional)
  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=3973575c785d4f1bb457f981b5216992')
    .then(r => r.json())
    .then(data => {
      forms.forEach(form => {
        if (form.elements[geoNames.ip])      form.elements[geoNames.ip].value      = data.ip           || '';
        if (form.elements[geoNames.city])    form.elements[geoNames.city].value    = data.city         || '';
        if (form.elements[geoNames.state])   form.elements[geoNames.state].value   = data.state_prov   || '';
        if (form.elements[geoNames.country]) form.elements[geoNames.country].value = data.country_name || '';
      });
    })
    .catch(err => console.warn('Geo lookup failed:', err));

  // Init phone + Turnstile per form
  forms.forEach(form => {
    // intl-tel-input
    const phoneField      = form.elements['phone'];
    const mobileCodeField = form.elements['MobileCountryCode__c'];
    let iti = null;

    if (phoneField) {
      iti = window.intlTelInput(phoneField, {
        initialCountry:   "ae",
        separateDialCode: true,
        preferredCountries:["ae","in","us","gb"],
        utilsScript:      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"
      });

      const clearError = () => {
        phoneField.classList.remove('iti-error');
        form.querySelectorAll('.error-message').forEach(e=>e.remove());
      };
      phoneField.addEventListener('input', clearError);
    }

    // Turnstile render
    const container = form.querySelector('.cf-turnstile') || (function(){ const d=document.createElement('div'); d.className='cf-turnstile'; form.appendChild(d); return d; })();
    function renderTurnstile(target, f) {
      if (typeof turnstile === 'undefined' || !TURNSTILE_SITE_KEY) return;
      f._tfWidgetId = turnstile.render(target, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'auto',
        callback: function(token){
          const hidden = f.querySelector('input[name="cf-turnstile-response"]');
          if (hidden) hidden.value = token;
        },
        'error-callback': function(){
          const hidden = f.querySelector('input[name="cf-turnstile-response"]');
          if (hidden) hidden.value = '';
        },
        'expired-callback': function(){
          const hidden = f.querySelector('input[name="cf-turnstile-response"]');
          if (hidden) hidden.value = '';
          try { if (f._tfWidgetId) turnstile.reset(f._tfWidgetId); } catch(e){}
        }
      });
    }
    if (typeof turnstile !== 'undefined') {
      renderTurnstile(container, form);
    } else {
      window.onloadTurnstileCallback = function(){
        forms.forEach(ff => {
          if (!ff._tfWidgetId) {
            const c = ff.querySelector('.cf-turnstile') || ff.appendChild(document.createElement('div'));
            c.classList.add('cf-turnstile');
            renderTurnstile(c, ff);
          }
        });
      };
      const s = document.querySelector('script[src*="turnstile/v0/api.js"]');
      if (s && !/onload=/.test(s.src)) {
        const url = new URL(s.src);
        url.searchParams.set('onload', 'onloadTurnstileCallback');
        s.src = url.toString();
      }
    }

    // Submit handler (validates, posts to proxy)
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (form._submitting) return;

      // Validate phone
      if (iti && !iti.isValidNumber()) {
        phoneField.classList.add('iti-error');
        if (!form.querySelector('.error-message')) {
          const msg = document.createElement('div');
          msg.className = 'error-message';
          msg.textContent = 'Please enter a valid phone number.';
          phoneField.parentNode.insertBefore(msg, phoneField.nextSibling);
        }
        return;
      }

      // Must have Turnstile token
      const tfTokenEl = form.querySelector('input[name="cf-turnstile-response"]');
      const tfToken = tfTokenEl ? tfTokenEl.value.trim() : '';
      if (!tfToken) {
        try { if (form._tfWidgetId) turnstile.reset(form._tfWidgetId); } catch(e){}
        alert('Please verify you are human.');
        return;
      }

      // Resource URL
      const resourceInput = form.querySelector('input[name="Resource_Url__c"]');
      if (resourceInput) {
        const u = new URL(window.location.href);
        const attr = form.getAttribute('data-attr') || '';
        if (attr) u.searchParams.set('form', attr);
        resourceInput.value = u.toString();
      }

      // Dial code
      if (iti && mobileCodeField) {
        const dialCode = '+' + iti.getSelectedCountryData().dialCode;
        mobileCodeField.value = dialCode;
      }
		
	// ── NEW: strip a single leading 0 from the phone number before submit ──
      if (phoneField && phoneField.value) {
        // keep only digits, then remove one leading 0 if present
        let digitsOnly = phoneField.value.replace(/\D+/g, '');
        if (/^0\d+/.test(digitsOnly)) {
          digitsOnly = digitsOnly.replace(/^0/, '');
        }
        phoneField.value = digitsOnly;
      }
      // ───────────────────────────────────────────────────────────────────────

      // Build and POST
      const actionUrl = form.getAttribute('action') || '/wp-json/lead/v1/submit';
      const formData  = new FormData(form);

      form._submitting = true;
      const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(actionUrl, { method:'POST', body: formData })
        .then(r => r.json().catch(()=>({ok:false,message:'Invalid response'})))
        .then(res => {
          if (res && res.ok) {
            const ret = form.querySelector('input[name="retURL"]');
            if (ret && ret.value) window.location.href = ret.value;
            else alert('Thanks! Your request was submitted.');
          } else {
            alert(res?.message || 'Submission failed. Please try again.');
          }
        })
        .catch(err => {
          console.error(err);
          alert('Network error. Please try again.');
        })
        .finally(() => {
          try { if (form._tfWidgetId) turnstile.reset(form._tfWidgetId); } catch(e){}
          form._submitting = false;
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });
});
` }} />
        <script type="text/javascript" id="mc-front-js-extra" dangerouslySetInnerHTML={{ __html: `

var mcFront = {"ajaxUrl":"https://danubeproperties.com/wp-admin/admin-ajax.php"};
//# sourceURL=mc-front-js-extra

` }} />
        <script type="text/javascript" src="/js/mc-front.js" id="mc-front-js" />
        <script type="text/javascript" src="/js/jquery.validate.min.js" id="jquery-validation-js" />
        <script type="text/javascript" src="/js/hooks.min.js" id="wp-hooks-js" />
        <script type="text/javascript" src="/js/i18n.min.js" id="wp-i18n-js" />
        <script type="text/javascript" id="wp-i18n-js-after" dangerouslySetInnerHTML={{ __html: `

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after

` }} />
        <script type="text/javascript" id="eae-main-js-extra" dangerouslySetInnerHTML={{ __html: `

var eae = {"ajaxurl":"https://danubeproperties.com/wp-admin/admin-ajax.php","current_url":"aHR0cHM6Ly9kYW51YmVwcm9wZXJ0aWVzLmNvbS8=","nonce":"50d41ca9ab","plugin_url":"https://danubeproperties.com/wp-content/plugins/addon-elements-for-elementor-page-builder/"};
var eae_editor = {"plugin_url":"https://danubeproperties.com/wp-content/plugins/addon-elements-for-elementor-page-builder/"};
//# sourceURL=eae-main-js-extra

` }} />
        <script type="text/javascript" src="/js/eae.min.js" id="eae-main-js" />
        <script type="text/javascript" src="/js/index.min.js" id="eae-index-js" />
        <script type="text/javascript" src="/js/jspdf.umd.min.js" id="jspdf-js" />
        <script type="text/javascript" src="/js/bootstrap.bundle.min.js" id="danube-bootstrap-js" />
        <script type="text/javascript" src="/js/slick.min.js" id="danube-slick-js" />
        <script type="text/javascript" src="/js/slick-lightbox.js" id="danube-slick-lightbox-js" />
        <script type="text/javascript" src="/js/custom.js" id="danube-custom-js" />
        <script type="text/javascript" id="rehomes-theme-js-js-extra" dangerouslySetInnerHTML={{ __html: `

var osfAjax = {"ajaxurl":"https://danubeproperties.com/wp-admin/admin-ajax.php"};
var poemeJS = {"quote":"\u003Ci class=\"fa-quote-right\"\u003E\u003C/i\u003E","smoothCallback":"","expand":"Expand child menu","collapse":"Collapse child menu","icon":"\u003Ci class=\"fa fa-angle-down\"\u003E\u003C/i\u003E"};
//# sourceURL=rehomes-theme-js-js-extra

` }} />
        <script type="text/javascript" src="/js/theme.js" id="rehomes-theme-js-js" />
        <script type="text/javascript" src="/js/underscore.min.js" id="underscore-js" />
        <script type="text/javascript" id="wp-util-js-extra" dangerouslySetInnerHTML={{ __html: `

var _wpUtilSettings = {"ajax":{"url":"/wp-admin/admin-ajax.php"}};
//# sourceURL=wp-util-js-extra

` }} />
        <script type="text/javascript" src="/js/wp-util.min.js" id="wp-util-js" />
        <script type="text/javascript" src="/js/sticky-layout.js" id="rehomes-theme-sticky-layout-js-js" />
        <script type="text/javascript" src="/js/mlpushmenu.js" id="pushmenu-js" />
        <script type="text/javascript" src="/js/classie.js" id="pushmenu-classie-js" />
        <script type="text/javascript" src="/js/navigation.js" id="rehomes-navigation-js" />
        <script type="text/javascript" src="/js/v4-shims.min.js" id="font-awesome-4-shim-js" />
        <script type="text/javascript" src="/js/webpack.runtime.min.js" id="elementor-webpack-runtime-js" />
        <script type="text/javascript" src="/js/frontend-modules.min.js" id="elementor-frontend-modules-js" />
        <script type="text/javascript" src="/js/core.min.js" id="jquery-ui-core-js" />
        <script type="text/javascript" id="elementor-frontend-js-before" dangerouslySetInnerHTML={{ __html: `

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.34.1","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"theme_builder_v2":true,"nested-elements":true,"home_screen":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"cloud-library":true,"e_opt_in_v4_page":true,"e_interactions":true,"import-export-customization":true,"e_pro_variables":true},"urls":{"assets":"https:\/\/danubeproperties.com\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/danubeproperties.com\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/danubeproperties.com\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"81f7ca64b2"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[],"dynamicooo":[]},"kit":{"viewport_mobile":767,"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":6890,"title":"Real%20Estate%20Company%20in%20Dubai%20%7C%20Leading%20Real%20Estate%20Developer%20-%20Danube%20Properties","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

` }} />
        <script type="text/javascript" src="/js/frontend.min.js" id="elementor-frontend-js" />
        <script type="text/javascript" src="/js/imagesloaded.min.js" id="imagesloaded-js" />
        <script type="text/javascript" src="/js/jquery.smartmenus.min.js" id="smartmenus-js" />
        <script type="text/javascript" src="/js/swiper.min.js" id="swiper-js" />
        <script type="text/javascript" src="/js/webpack-pro.runtime.min.js" id="elementor-pro-webpack-runtime-js" />
        <script type="text/javascript" id="elementor-pro-frontend-js-before" dangerouslySetInnerHTML={{ __html: `

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/danubeproperties.com\/wp-admin\/admin-ajax.php","nonce":"d9c49469de","urls":{"assets":"https:\/\/danubeproperties.com\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/danubeproperties.com\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/danubeproperties.com\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before

` }} />
        <script type="text/javascript" src="/js/frontend.min_1.js" id="elementor-pro-frontend-js" />
        <script type="text/javascript" src="/js/elements-handlers.min.js" id="pro-elements-handlers-js" />
        <script type="text/javascript" src="/js/jquery.magnific-popup.min.js" id="magnific-popup-js" />
        <script type="text/javascript" src="/js/anime.min.js" id="anime-js" />
        <script type="text/javascript" src="/js/progressbar.min.js" id="progressbar-js" />
        <script type="text/javascript" src="/js/TweenMax.min.js" id="tweenmax-js" />
        <script type="text/javascript" src="/js/tooltipster.bundle.min.js" id="tooltipster-bundle-js-js" />
        <script type="text/javascript" src="/js/frontend.js" id="opal-elementor-frontend-js" />
        <script id="wp-emoji-settings" type="application/json" dangerouslySetInnerHTML={{ __html: `
{"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://danubeproperties.com/wp-includes/js/wp-emoji-release.min.js?ver=c699755984206a2cda91ccec8fd5a944"}}
` }} />
        <script type="module" dangerouslySetInnerHTML={{ __html: `

/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://danubeproperties.com/wp-includes/js/wp-emoji-loader.min.js

` }} />
        <script  dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        // $(ddwewd).val();
        jQuery(document).ready(function($) {

            // When user lands on Property Page
            if ($('body').hasClass('single-osf_portfolio')) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'propertyViewed',
                    'propertyID': '6890',               
                    'propertyName': 'Home',          
                    'propertyType': '',           
                    'propertyPrice': '',         
                    'propertyLocation': '',
                    'currency': 'AED',                   
                    'pageURL': window.location.href
                });
            }

            // When user clicks on "ENQUIRE NOW"
            $(document).on('click', '.downlaod-enquire-sticky a, .enquire-button a', function(event) {
                window.dataLayer = window.dataLayer || [];

                window.dataLayer.push({
                    'event': 'enquire_now',
                    'propertyID': '6890',
                    'propertyName': 'Home',
                    'propertyType': '',
                    'propertyPrice': '',
                    'propertyLocation': '',
                    'currency': 'AED',
                    'pageURL': window.location.href
                });
            });


            // When a user scrolls down 25% of the page.
            var scrollTracked = { '25': false, '50': false, '90': false };
            $(window).on('scroll', function() {
                var scrollDepth = Math.round(($(window).scrollTop() + $(window).height()) / $(document).height() * 100);

                if (scrollDepth >= 25 && !scrollTracked['25']) {
                    window.dataLayer.push({ 'event': 'scroll_25', 'scrollDepth': scrollDepth+'%', 'pageURL': window.location.href });
                    scrollTracked['25'] = true;
                }
                if (scrollDepth >= 50 && !scrollTracked['50']) {
                    window.dataLayer.push({ 'event': 'scroll_50', 'scrollDepth': scrollDepth+'%', 'pageURL': window.location.href });
                    scrollTracked['50'] = true;
                }
                if (scrollDepth >= 90 && !scrollTracked['90']) {
                    window.dataLayer.push({ 'event': 'scroll_90', 'scrollDepth': scrollDepth+'%', 'pageURL': window.location.href });
                    scrollTracked['90'] = true;
                }
            });
            

            // When user downloads the Brochure
            $(document).on('submit_success', function(evt) {
                if ($(evt.target).attr('id') === 'downloadform') {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'inquiry_downloadBrochure',
                        'propertyID': '6890',   
                        'propertyName': 'Home',
                        'propertyType': '',
                        'propertyPrice': '',
                        'propertyLocation': '',
                        'currency': 'AED',
                        'pdfUrl': '',
                    });

                    var pdfUrl = '';
                    if (pdfUrl) {
                        // Open the PDF in a new tab
                        window.open(pdfUrl, '_blank');
                    }
                }
            });
            
            
            // for single property page on whatsapp
            $('.whatsapp-sticky, .whatsapp-menu').on('click', function() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                   'event': 'button_click_whatsapp',
                   'propertyID': '6890',
                   'propertyName': 'Home',
                   'propertyType': '',
                   'propertyPrice': '',
                   'propertyLocation': '',
                   'currency': 'AED',
                   'pageURL': window.location.href
                });
            });


            // For All Video
            $('video[autoplay]').each(function() {
                var videoElement = this;
                var $video = $(this);
                var videoDuration = Math.round(videoElement.duration);
                var videoProvider = $(this).find('source').attr('type') || 'Video'; 
                var videoTitle = $(this).attr('title') || 'Unknown Title';
                var videoURL = $(this).find('source').attr('src');
                var milestones = [25, 50, 75, 100];
                var trackedPercentages = []; // To track which milestones have been reached
                var event;
                var percent;               

                // Check if the video Start is already playing when the page loads
                if (!videoElement.paused) {
                    pushAutoplayEvent(videoElement);
                    return false;
                }

                // Listen for the play event (in case autoplay is delayed or starts later)
                $(videoElement).on('play', function() {
                    pushAutoplayEvent(videoElement);
                });

                function pushAutoplayEvent(video) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'video_start',
                        'video_provider': videoProvider,
                        'video_title': videoTitle,
                        'video_url': videoURL,
                        'video_duration': videoDuration
                    });

                    // Remove event listener after first push to prevent multiple triggers
                    $(video).off('play');
                }



                // Function to push video progress and complete to the dataLayer
                function pushVideoProgressEvent(percent) {
                    window.dataLayer = window.dataLayer || [];
                    if(percent == 100){
                        percent = 100;
                        event = 'video_complete';
                    } else {
                        percent = percent;
                        event = 'video_progress';
                    }

                    window.dataLayer.push({
                        'event': event,
                        'video_provider': videoProvider,  // Adjust if using other video providers
                        'video_title': videoTitle,
                        'video_url': videoURL,
                        'video_duration': videoDuration,  // Total duration in seconds
                        'video_percent': percent  // Percentage of video played
                    });
                }

                // Track progress and push to dataLayer
                $video.on('timeupdate', function() {
                    var currentTime = videoElement.currentTime;
                    var duration = videoElement.duration;
                    var percent = Math.round((currentTime / duration) * 100);

                    // Check if the current percentage reaches any of the milestones
                    milestones.forEach(function(milestone) {
                        if (percent >= milestone && !trackedPercentages.includes(milestone)) {
                            pushVideoProgressEvent(milestone);
                            trackedPercentages.push(milestone);
                        }
                    });
                });
            });            
            
            // When a user fills out the "Any filled field" field in a form
            $(document).one('blur', 'input, textarea, select, email, form.webToLeadForm input[name="phone"]', function() {
                var filledval = $(this).val();
                var filledvalform = $(this).parents('form').attr('id');
                if(filledvalform == 'downloadform'){
                    var formType = "Brochure Download Form"; 
                } else{
                    var formType = "Inquiry Form"; 
                }
                if (filledval.length > 0) { 
                    dataLayer.push({
                        'event': 'form_start',
                        'formType': formType,      
                        'propertyID': '6890',
                        'propertyName': 'Home',     
                        'pageURL': window.location.href 
                    });
                }
            });


            // When a user fills out the "First Name" field in a form
            $(document).one('blur', 'form.webToLeadForm input[name="first_name"], #downloadform input[type="text"]', function(event) {
                var filledvalform = $(this).parents('form').attr('id');
                if(filledvalform == 'downloadform'){
                    var formType = "Brochure Download Form"; 
                } else{
                    var formType = "Inquiry Form"; 
                } 
                var firstName = $(this).val();

                if (firstName.length > 0) { 
                    dataLayer.push({
                        'event': 'form_field_first_name_filled',
                        'formType': formType,           
                        'pageURL': window.location.href 
                    });
                }
            });


            // When a user fills out the "Last Name" field in a form
            $(document).one('blur', 'form.webToLeadForm input[name="last_name"]', function(event) {
                var formType = "Inquiry Form"; 
                var lastName = $(this).val();

                if (lastName.length > 0) { 
                    dataLayer.push({
                        'event': 'form_field_last_name_filled',
                        'formType': formType,           
                        'pageURL': window.location.href 
                    });
                }
            });


            // When a user fills out the "Email" field in a form
            $(document).one('blur', 'form.webToLeadForm input[name="email"], #downloadform input[type="email"]', function(event) {
                var filledvalform = $(this).parents('form').attr('id');
                if(filledvalform == 'downloadform'){
                    var formType = "Brochure Download Form"; 
                } else{
                    var formType = "Inquiry Form"; 
                } 
                var email = $(this).val();

                if (email.length > 0) { 
                    dataLayer.push({
                        'event': 'form_field_email_filled',
                        'formType': formType,           
                        'pageURL': window.location.href 
                    });
                }
            });


            // When a user fills out the "Phone number" field in a form
            $(document).one('blur', 'form.webToLeadForm input[name="phone"]', function(event) {
                var formType = "Inquiry Form"; 
                var phone = $(this).val();

                if (phone.length > 0) { 
                    dataLayer.push({
                        'event': 'form_field_phone_number_filled',
                        'formType': formType,           
                        'pageURL': window.location.href 
                    });
                }
            });     


            // Listen for form submission Error Hubspot form inquiry form
            $(document).on('submit', 'form.webToLeadForm', function(event) {
                var errorMessage = '';  // Initialize error message
                var formType = '"Inquiry Form';  // Modify this as needed
                var pageURL = window.location.href;  // Capture the current page URL
                var propertyID = '6890';
                var propertyName = 'Home'; 
                
                // Name/Input validation (check if the field is empty)
                var inputField = $(this).find('input[type="text"]');
                if (!inputField.val()) {
                  errorMessage += 'First Name is required. ';
                }

                // Phone validation (check if the field is empty or if the phone format is incorrect)
                var phoneField = $(this).find('input[name="phone"]');
                var phoneValue = phoneField.val();
                var phonePattern = /^\+?[1-9]\d{0,11}$/;// E.164 format: +1234567890 or 1234567890

                if (!phoneValue) {
                  errorMessage += 'Phone number is required. ';
                } else if (!phonePattern.test(phoneValue)) {
                  errorMessage += 'Phone number format is invalid. ';
                }


                // Email validation (checks if the field is empty or if the format is incorrect)
                var emailField = $(this).find('input[type="email"]');
                var emailValue = emailField.val();
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailValue) {
                  errorMessage += 'Email is required. ';
                } else if (!emailPattern.test(emailValue)) {
                  errorMessage += 'Email format is invalid. ';
                }

                // If any errors are found, prevent form submission and push the error event
                if (errorMessage) {
                  event.preventDefault();  // Prevent form submission

                  // Push the error event to the dataLayer
                  dataLayer.push({
                    'event': 'form_error',
                    'formType': formType,   // Example: 'Contact Form', 'Lead Generation Form'
                    'errorMessage': errorMessage.trim(),  // Trim any trailing spaces
                    'pageURL': pageURL      // Capture the current page URL
                  });
                } else {
                    event.preventDefault();  
                    dataLayer.push({
                        'event': 'form_submit',
                        'formType': formType,   
                        'propertyID': '6890',
                        'propertyName': 'Home',
                        'pageURL': pageURL      
                    });
                } 
            });


            /*Broucher Download form errr and submit*/
            $(document).on('click', '.elementor-form .elementor-button', function(event) {
                // event.preventDefault();  
                var errorMessage = '';  // Initialize error message
                var formType = 'Brochure Download Form';  // Modify this as needed
                var pageURL = window.location.href;  // Capture the current page URL
                var propertyID = '6890';
                var propertyName = 'Home'; 
                
                // Name/Input validation (check if the field is empty)
                var inputField = $('#downloadform input[type="text"]');
                if (!inputField.val()) {
                    errorMessage += 'Name is required. ';
                }               

                // Email validation (checks if the field is empty or if the format is incorrect)
                var emailField = $('#downloadform input[type="email"]');
                var emailValue = emailField.val();
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailValue) {
                    errorMessage += 'Email is required. ';
                } else if (!emailPattern.test(emailValue)) {
                    errorMessage += 'Email format is invalid. ';
                }

                // If any errors are found, prevent form submission and push the error event
                if (errorMessage) {
                      dataLayer.push({
                        'event': 'form_error',
                        'formType': formType,   // Example: 'Contact Form', 'Lead Generation Form'
                        'errorMessage': errorMessage.trim(),  // Trim any trailing spaces
                        'pageURL': pageURL      // Capture the current page URL
                    });
                } else { 
                    dataLayer.push({
                        'event': 'form_submit',
                        'formType': formType,   
                        'propertyID': '6890',
                        'propertyName': 'Home',
                        'pageURL': pageURL      
                    });
                } 

                // setTimeout(function() {  
                    // $(event.target).closest('form').submit(); 
                // }, 300); 
            }); 

            // click on login menu
            $('.sign-in-button').on('click', function() {
                window.dataLayer = window.dataLayer || [];

                window.dataLayer.push({
                    'event': 'user_signin_url',
                    'UserID': 'No user log in!!'    
                });
            });
        

            // click on signup menu
            $('.register-button').on('click', function() {
                window.dataLayer = window.dataLayer || [];

                window.dataLayer.push({
                    'event': 'user_registration_url',
                    'UserID': 'No user log in!!'    
                });
            });
            
        });

        // Captures details about JavaScript errors on the page
        window.onerror = function (message, source, lineno, colno, error) {
            // Define the error code (customize as needed)
            let errorCode = error && error.name ? error.name : 'UnknownError';

            // Push the error details to the dataLayer
            dataLayer.push({
                'event': 'javascriptError',
                'errorMessage': message,
                'errorSource': source + ':' + lineno + ':' + colno,  // Include line and column numbers
                'errorCode': errorCode  // You can add more details here, like error stack if needed
            });

            // Returning true will prevent the browser from logging the error to the console
            return false;
        };
    ` }} />
      </body>
    </html>
  );
}
