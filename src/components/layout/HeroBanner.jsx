import React, { useState, useEffect } from "react";
import styles from "./HeroBanner.module.css";
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiBookmark,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { IoMdFlame } from "react-icons/io";
import { MdOutlineFlashOn } from "react-icons/md";

const BANNER_SLIDES = [
  {
    id: 1,
    image: "/banner.png",
    badgeSpecial: "جشنواره شگفت‌انگیز",
    badgeDelivery: "تحویل فوری امروز",
    tagline: "شاهکار طراحی و قدرت",
    title: "آیفون ۱۵ پرو مکس",
    edition: "Titanium Edition • 256GB",
    description:
      "تجربه نهایت قدرت با چیپست A17 Pro و بدنه تیتانیومی سبک و مقاوم. هم‌اکنون با گارانتی ۱۸ ماهه شرکتی و ارسال رایگان.",
    discountPercent: "۵٪-",
    oldPrice: "۹۷,۰۰۰,۰۰۰",
    price: "۹۲,۰۰۰,۰۰۰",
    currency: "تومان",
    link: "/product/iphone-15-pro-max",
  },
  {
    id: 2,
    image: "/banner.png",
    badgeSpecial: "پیشنهاد ویژه",
    badgeDelivery: "ارسال رایگان اکسپرس",
    tagline: "آینده تکنولوژی در دستان شما",
    title: "مک‌بوک پرو M3 Max",
    edition: "Space Black • 1TB SSD",
    description:
      "عملکرد بی‌نظیر پردازشی برای حرفه‌ای‌ترین امور برنامه‌نویسی و رندرینگ سه‌بعدی با بالاترین میزان بازدهی باتری.",
    discountPercent: "۸٪-",
    oldPrice: "۱۴۵,۰۰۰,۰۰۰",
    price: "۱۳۳,۴۰۰,۰۰۰",
    currency: "تومان",
    link: "/product/macbook-pro-m3",
  },
  {
    id: 3,
    image: "/banner.png",
    badgeSpecial: "تخفیف محدود",
    badgeDelivery: "ضمانت اصالت تکنو",
    tagline: "خلوص صدا بدون مرز",
    title: "ایرپاد مکس اپل",
    edition: "Silver Edition • Noise Cancelling",
    description:
      "تفکیک صدای استودیویی مجهز به صدای فضایی شخصی‌سازی‌شده و سیستم حذف نویز فعال حرفه‌ای.",
    discountPercent: "۱۲٪-",
    oldPrice: "۳۹,۵۰۰,۰۰۰",
    price: "۳۴,۷۶۰,۰۰۰",
    currency: "تومان",
    link: "/product/airpods-max",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === BANNER_SLIDES.length - 1 ? 0 : prev + 1,
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === BANNER_SLIDES.length - 1 ? 0 : prev + 1,
    );
  };

  const activeData = BANNER_SLIDES[currentSlide];

  return (
    <section className={styles.bannerWrapper}>
      <div className={styles.bannerContainer}>
        <div className={styles.slidesTrack}>
          {BANNER_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slideItem} ${index === currentSlide ? styles.activeSlide : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.bannerBgImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.contentOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.badgeGroup}>
              <span className={styles.specialBadge}>
                <IoMdFlame size={15} />
                <span>{activeData.badgeSpecial}</span>
              </span>
              <span className={styles.deliveryBadge}>
                <MdOutlineFlashOn size={15} />
                <span>{activeData.badgeDelivery}</span>
              </span>
            </div>

            <span className={styles.tagline}>{activeData.tagline}</span>

            <h1 className={styles.mainTitle}>{activeData.title}</h1>

            <div className={styles.editionText}>{activeData.edition}</div>

            <p className={styles.description}>{activeData.description}</p>

            <div className={styles.priceRow}>
              <span className={styles.discountBadge}>
                {activeData.discountPercent}
              </span>
              <span className={styles.oldPrice}>{activeData.oldPrice}</span>
              <span className={styles.currentPrice}>{activeData.price}</span>
              <span className={styles.currency}>{activeData.currency}</span>
            </div>

            <div className={styles.actionsRow}>
              <Link to={activeData.link} className={styles.buyNowBtn}>
                <FiShoppingBag size={18} />
                <span>خرید آنی</span>
              </Link>

              <button
                type="button"
                className={`${styles.wishlistBtn} ${isSaved ? styles.savedActive : ""}`}
                onClick={() => setIsSaved(!isSaved)}
                aria-label="افزودن به علاقه‌مندی‌ها"
              >
                <FiBookmark size={17} />
                <span>علاقه‌مندی‌ها</span>
              </button>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navArrow} ${styles.prevArrow}`}
          onClick={handlePrev}
          aria-label="اسلاید قبلی"
        >
          <FiChevronRight size={22} />
        </button>

        <button
          type="button"
          className={`${styles.navArrow} ${styles.nextArrow}`}
          onClick={handleNext}
          aria-label="اسلاید بعدی"
        >
          <FiChevronLeft size={22} />
        </button>

        <div className={styles.dotsPagination}>
          {BANNER_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === currentSlide ? styles.activeDot : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`رفتن به اسلاید ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
