import { ReactNode, useEffect, useRef } from "react";

interface BSTooltipProps {
  title: string;
  className?: string | undefined;
  children: ReactNode;
}

function BSTooltip({ title, className, children }: BSTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let tooltip: any;

    const initComponent = async () => {
      const TT = (await import("bootstrap")).Tooltip;
      if (!tooltipRef.current) {
        return;
      }

      tooltip = new TT(tooltipRef.current, {});
    };

    initComponent();

    return () => {
      tooltip?.dispose();
    };
  }, []);

  return (
    <div
      ref={tooltipRef}
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      data-bs-title={title}
      className={`d-flex align-items-center ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export default BSTooltip;
