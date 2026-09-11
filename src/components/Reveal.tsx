"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header" | "span";
  variant?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delay?: number;
  threshold?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  as = "div",
  variant = "up",
  delay = 0,
  threshold = 0.18,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const Tag = as;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);

    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, reducedMotion, threshold]);

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`reveal reveal--${variant} ${visible ? "reveal--in" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
