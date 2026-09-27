import React from "react";
import styles from "./CategorySection.module.css";
import { Link } from "react-router-dom";

import {
  FiSmartphone,
  FiTablet,
  FiHeadphones,
  FiWatch,
  FiBatteryCharging,
} from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineSensors ,MdOutlineLaptop } from "react-icons/md";
import { LuShapes } from "react-icons/lu";

const CATEGORIES_DATA = [
  {
    id: "phones",
    title: "گوشی هوشمند",
    icon: <FiSmartphone size={32} />,
    path: "/category/mobile",
  },
  {
    id: "laptops",
    title: "لپ‌تاپ و اولترابوک",
    icon: <MdOutlineLaptop size={32} />,
    path: "/category/laptops",
  },
  {
    id: "smartwatches",
    title: "ساعت هوشمند",
    icon: <FiWatch size={32} />,
    path: "/category/smartwatch",
  },
  {
    id: "audio",
    title: "هندزفری و هدفون",
    icon: <FiHeadphones size={32} />,
    path: "/category/audio",
  },
  {
    id: "gaming",
    title: "کنسول و گیمینگ",
    icon: <IoGameControllerOutline size={32} />,
    path: "/category/gaming",
  },
  {
    id: "power",
    title: "پاوربانک و شارژر",
    icon: <FiBatteryCharging size={32} />,
    path: "/category/powerbank",
  },
  {
    id: "smarthome",
    title: "خانه هوشمند",
    icon: <MdOutlineSensors size={32} />,
    path: "/category/smarthome",
  },
  {
    id: "tablets",
    title: "آیپد و تبلت",
    icon: <FiTablet size={32} />,
    path: "/category/tablet",
  },
];

export default function CategorySection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <LuShapes className={styles.titleIcon} size={24} />
            <h2 className={styles.title}>دسترسی سریع به دسته‌بندی‌ها</h2>
          </div>
          <p className={styles.subtitle}>
            دسته‌بندی جامع گجت‌های هوشمند و کالای دیجیتال
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {CATEGORIES_DATA.map((cat) => (
            <Link key={cat.id} to={cat.path} className={styles.categoryCard}>
              <div className={styles.iconCircle}>{cat.icon}</div>
              <span className={styles.categoryTitle}>{cat.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
