import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function BreadcrumsComponent({ items }) {
  const countEl = items.length;
  console.log(countEl);

  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        {items.map((item, i) => {
          let active = countEl - 1 === i ? true : false;
          return (
            <BreadcrumbItem active={active} tag="a" href="#">
              {item}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
}
