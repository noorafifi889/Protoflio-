"use client";

import { useEffect, useState } from "react";

export function useTyping(words: string[], speed = 120, delay = 1500) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, speed / 2);
    }

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, delay]);

  return text;
}