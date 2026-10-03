"use client";

import { useState } from "react";
import activities from "@/data/activities.json";
import { Icon } from "./icon";
import { InstagramLink } from "./social-links";
import { CopyButton } from "./conversation-starter";

export function Activities() {
  const [selected, setSelected] = useState(activities[0]);
  return (
    <>
      <div className="activity-grid">
        {activities.map((activity) => (
          <button
            className="activity"
            key={activity.id}
            type="button"
            onClick={() => setSelected(activity)}
            aria-pressed={selected.id === activity.id}
            aria-controls="activity-opener"
          >
            <span className="activity-icon">
              <Icon name={activity.icon} size={24} />
            </span>
            <span>
              <strong>{activity.title}</strong>
              <small>{activity.subtitle}</small>
            </span>
            <Icon
              name={selected.id === activity.id ? "check" : "arrowUpRight"}
              size={18}
            />
          </button>
        ))}
      </div>
      <div className="activity-bottom">
        <div
          className="activity-opener"
          id="activity-opener"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="eyebrow">YOU COULD START WITH</span>
          <p>“{selected.opener}”</p>
          <CopyButton key={selected.id} text={selected.opener} />
        </div>
        <InstagramLink className="button button-dark" opener={selected.opener}>
          <Icon name="instagram" size={18} />
          Message me on Instagram
          <Icon name="arrowUpRight" size={17} />
        </InstagramLink>
      </div>
    </>
  );
}
