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
  title: "Real Estate Company in Dubai | Leading Real Estate Developer - Noori Group",
  description: "Noori Group, a trusted Real Estate Company in Dubai, offers premium properties for sale. Find your dream home today.",
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
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Marcellus&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
        // Add loaded class once DOM is ready
        document.addEventListener("DOMContentLoaded", function() {
            document.body.classList.add("loaded");
        });
    ` }} />
      </body>
    </html>
  );
}
