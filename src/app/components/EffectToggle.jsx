"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEffect } from "../store/EffectSlice";
import styles from "./EffectToggle.module.css";
import { Sparkle } from "lucide-react";

const EffectToggle = () => {
  const effectsEnabled = useSelector((state) => state.effect.enabled);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleEffect());
  };

  return (
    <label className={styles.toggleContainer}>
      <input type="checkbox" checked={effectsEnabled} onChange={handleToggle} />
      <span className={styles.toggleLabel}>
        {effectsEnabled ? "Effects On" : "Effects Off"}
      </span>
      <div className={styles.toggleWrapper}>
        <div className={styles.toggleThumb}>
          <Sparkle size={14} />
        </div>
        <div className={styles.sparkleContainer}></div>
      </div>
    </label>
  );
};

export default EffectToggle;
