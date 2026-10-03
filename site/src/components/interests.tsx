"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import interests from "@/data/interests.json";
import { Icon } from "./icon";

export function Interests() {
  const [active, setActive] = useState(interests[0]);
  const reduceMotion = useReducedMotion();
  return (
    <div className="interests-content">
      <div className="interest-buttons" aria-label="Choose an interest">
        {interests.map((interest) => (
          <button
            id={`interest-${interest.id}`}
            key={interest.id}
            type="button"
            aria-pressed={active.id === interest.id}
            aria-controls="interest-detail"
            onClick={() => setActive(interest)}
          >
            <Icon name={interest.icon} size={18} />
            {interest.label}
            <Icon name="plus" size={15} />
          </button>
        ))}
      </div>
      <div
        className="interest-detail"
        id="interest-detail"
        role="region"
        aria-live="polite"
        aria-atomic="true"
        aria-labelledby={`interest-${active.id}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.16 }}
          >
            <span className="interest-detail-icon">
              <Icon name={active.icon} size={25} />
            </span>
            <h3>{active.headline}</h3>
            <p>{active.description}</p>
            <span className="interest-question">
              An easy place to start: <strong>{active.prompt}</strong>
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
