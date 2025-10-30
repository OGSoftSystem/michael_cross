"use client";

import CountUp from "react-countup";

function Count({
  start,
  end,
  suffix,
  className,
}: {
  start: number;
  end: number;
  suffix?: string;
  className: string;
}) {
  return (
    <CountUp start={start} end={end} suffix={suffix} className={className} />
  );
}

export default Count;
