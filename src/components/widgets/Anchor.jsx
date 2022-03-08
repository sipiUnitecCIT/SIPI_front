import React from 'react';
import Link from "next/link";

const Anchor = ({href = "", className, children, ...props}) => {
  return (
    <Link href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
