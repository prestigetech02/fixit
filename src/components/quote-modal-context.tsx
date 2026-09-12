"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type QuoteModalContextValue = {
  open: boolean;
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

export function isQuoteHref(href: string | undefined) {
  return href === "/request-a-quote" || href === "/request-a-quote/";
}

export function QuoteModalStateProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openQuoteModal = useCallback(() => setOpen(true), []);
  const closeQuoteModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openQuoteModal, closeQuoteModal }),
    [open, openQuoteModal, closeQuoteModal],
  );

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
    </QuoteModalContext.Provider>
  );
}
