import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  /** `light` = white fill for dark/wine backgrounds */
  variant?: "default" | "light";
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps | "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  children,
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const classes = cx(
    "btn-split group relative inline-flex items-center justify-center overflow-hidden",
    "rounded-sm px-4 py-2.5 text-sm font-semibold",
    variant === "light" ? "btn-split--light" : "text-white",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    className,
  );

  const content = (
    <>
      <span className="btn-split-half btn-split-half--left" aria-hidden />
      <span className="btn-split-half btn-split-half--right" aria-hidden />
      <span className="relative z-10">{children}</span>
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
