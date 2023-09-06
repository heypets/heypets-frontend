import { useRef, useEffect, useState, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export default function ClientOnlyPortal({
  children,
  selector = '#global_portal',
}: PropsWithChildren<{ selector?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);

    setMounted(true);
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
}
