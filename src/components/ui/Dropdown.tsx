import React from 'react';

type DropdownProps = {
  button: React.ReactNode;
  children: React.ReactNode;
  align?: 'start' | 'end';
  buttonClassName?: string;
  panelClassName?: string;
};

// dropdown that supports safari-specific "quirks" with focus
export function Dropdown({
  button,
  children,
  align = 'end',
  buttonClassName = 'btn btn-ghost btn-sm',
  panelClassName = 'dropdown-content z-20 mt-2 w-64 rounded-box bg-base-200 p-2 shadow',
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close on outside click / ESC
  React.useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`dropdown ${align === 'end' ? 'dropdown-end' : ''} ${open ? 'dropdown-open' : ''}`}
    >
      <button
        type="button"
        className={buttonClassName}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {button}
      </button>

      <div className={panelClassName} role="menu">
        {children}
      </div>
    </div>
  );
}
