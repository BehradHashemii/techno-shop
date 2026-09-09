import { useState } from "react";
import styles from "./Header.module.css";

import {
  FiSearch,
  FiSliders,
  FiHeart,
  FiShoppingBag,
  FiMenu,
  FiUser,
} from "react-icons/fi";
import {
  HiOutlineHome,
  HiHome,
  HiOutlineSquares2X2,
  HiSquares2X2,
} from "react-icons/hi2";
import { MdDevices, MdOutlineDevices } from "react-icons/md";
import { IoMdFlame } from "react-icons/io";
import { PiSealCheck } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <header className={styles.headerWrapper}>
      {/* ===================== بخش بالایی (دسکتاپ و موبایل) ===================== */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          {/* لوگو برند */}
          <div className={styles.brand}>
            <div className={styles.brandLogoBox}>
              <img src="/techno_gadget_store_logo.png" alt="logo" />
            </div>
          </div>

          {/* نوار جستجو */}
          <div className={styles.searchBox}>
            <button
              type="button"
              className={styles.searchIconBtn}
              aria-label="جستجو"
            >
              <FiSearch size={20} />
            </button>
            <input
              type="text"
              placeholder="جستجو میان هزاران گوشی، لپ‌تاپ و گجت هوشمند..."
              className={styles.searchInput}
            />
            <div className={styles.categoryDropdown}>
              <FiSliders size={16} />
              <span>همه دسته‌ها</span>
            </div>
          </div>

          {/* اکشن‌های کاربری دسکتاپ */}
          <div className={styles.actions}>
            {/* لیست علاقه‌مندی‌ها */}
            <div className={styles.wishlistBtn} title="علاقه‌مندی‌ها">
              <span className={styles.badge}>۲</span>
              <FiHeart size={22} />
            </div>

            {/* سبد خرید */}
            <button className={styles.cartBtn} type="button">
              <span className={styles.cartCount}>۳ کالا</span>
              <span className={styles.cartText}>سبد خرید</span>
              <FiShoppingBag size={20} />
            </button>

            {/* پروفایل کاربر */}
            <div className={styles.userProfile}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="علی پارسا"
                className={styles.userAvatar}
              />
              <div className={styles.userInfo}>
                <span className={styles.userName}>علی پارسا</span>
                <span className={styles.userRole}>حساب کاربری</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.navBar}>
        <div className={styles.container}>
          <div className={styles.navRight}>
            <button className={styles.categoryMenuBtn} type="button">
              <FiMenu size={20} />
              <span>دسته‌بندی کالاها</span>
            </button>

            <ul className={styles.navList}>
              <li className={`${styles.navItem}`}>
                <NavLink to="/">خانه</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/mobile">موبایل و تبلت</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/laptops">لپ‌تاپ و اولترابوک</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/smartwatch">ساعت و گجت هوشمند</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/audio">هدفون و صوتی</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/gaming">کنسول و گیمینگ</NavLink>
              </li>
              <li className={`${styles.navItem} ${styles.dealItem}`}>
                <IoMdFlame size={17} />
                <NavLink to="/special">پیشنهادهای شگفت‌انگیز</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/bestsellers">پرفروش‌ترین‌ها</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/blog">وبلاگ تکنو</NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.navLeft}>
            <div className={styles.guaranteeBadge}>
              <PiSealCheck size={18} />
              <span>ضمانت اصالت و بازگشت ۷ روزه کالا</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ===================== باتم بار چسبیده به پایین (موبایل) ===================== */}
      <div className={styles.mobileBottomNav}>
        <button
          type="button"
          className={`${styles.bottomNavItem} ${activeTab === "home" ? styles.activeBottomItem : ""}`}
          onClick={() => setActiveTab("home")}
        >
          {activeTab === "home" ? (
            <HiHome size={24} />
          ) : (
            <HiOutlineHome size={24} />
          )}
          <span>خانه</span>
        </button>

        <button
          type="button"
          className={`${styles.bottomNavItem} ${activeTab === "products" ? styles.activeBottomItem : ""}`}
          onClick={() => setActiveTab("products")}
        >
          {activeTab === "products" ? (
            <MdDevices size={24} />
          ) : (
            <MdOutlineDevices size={24} />
          )}
          <span>محصولات</span>
        </button>

        <button
          type="button"
          className={`${styles.bottomNavItem} ${activeTab === "categories" ? styles.activeBottomItem : ""}`}
          onClick={() => setActiveTab("categories")}
        >
          {activeTab === "categories" ? (
            <HiSquares2X2 size={24} />
          ) : (
            <HiOutlineSquares2X2 size={24} />
          )}
          <span>دسته‌بندی</span>
        </button>

        <button
          type="button"
          className={`${styles.bottomNavItem} ${activeTab === "cart" ? styles.activeBottomItem : ""}`}
          onClick={() => setActiveTab("cart")}
        >
          <div className={styles.cartIconWrapper}>
            <span className={styles.mobileBadge}>۲</span>
            <FiShoppingBag size={22} />
          </div>
          <span>سبد خرید</span>
        </button>

        <button
          type="button"
          className={`${styles.bottomNavItem} ${activeTab === "profile" ? styles.activeBottomItem : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <FiUser size={22} />
          <span>حساب کاربری</span>
        </button>
      </div>
    </header>
  );
}
