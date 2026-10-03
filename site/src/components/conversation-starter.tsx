"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import interests from "@/data/interests.json";
import { Icon } from "./icon";

export function CopyButton({
  text,
  label = "Copy opener",
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [manual, setManual] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setManual(true);
      requestAnimationFrame(() => {
        input.current?.focus();
        input.current?.select();
      });
    }
  }
  return (
    <div className="copy-control">
      <button type="button" className="text-button" onClick={copy}>
        <Icon name={copied ? "check" : "copy"} size={16} />
        {copied ? "Copied!" : label}
      </button>
      <span className="sr-only" role="status">
        {copied ? "Conversation starter copied to clipboard." : ""}
      </span>
      {manual && (
        <label className="manual-copy">
          Select and copy this message:
          <textarea ref={input} value={text} readOnly rows={3} />
        </label>
      )}
    </div>
  );
}

export function ConversationStarter() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = interests[index];
  function shuffle() {
    setIndex(
      (previous) =>
        (previous + 1 + Math.floor(Math.random() * (interests.length - 1))) %
        interests.length,
    );
  }
  return (
    <aside className="conversation-card">
      <div className="conversation-intro">
        <span className="eyebrow">NEED AN OPENING LINE?</span>
        <h3>Ask me about…</h3>
        <p>No perfect introduction required.</p>
      </div>
      <div
        className="conversation-prompt"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.15 }}
          >
            <span className="prompt-topic">
              <Icon name={current.icon} size={17} />
              {current.label}
            </span>
            <p>“{current.prompt}”</p>
          </motion.div>
        </AnimatePresence>
        <div className="prompt-actions">
          <button type="button" className="text-button" onClick={shuffle}>
            <Icon name="shuffle" size={16} />
            Give me another
          </button>
          <CopyButton text={current.prompt} />
        </div>
      </div>
    </aside>
  );
}
