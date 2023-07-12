"use client";

import React from "react";

import Link from "next/link";

interface SubMenuPropsType {
  datasetSubmenu: string;
  className: string;
  onSubmenuLeave: (e: React.PointerEvent<HTMLElement>) => void; //eslint-disable-line
  data: any;
}

const SubMenu = ({
  datasetSubmenu,
  className,
  onSubmenuLeave,
  data,
}: SubMenuPropsType) => {
  console.log(data);
  return (
    <aside
      className={className}
      data-submenu={datasetSubmenu}
      onPointerLeave={onSubmenuLeave}
    >
      {datasetSubmenu === "featured" && (
        <>
          <section>
            <h6>Featured</h6>
            <ul role="list">
              {data.new.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>New For Men</h6>
            <ul role="list">
              {data.new_for_men.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>New For Women</h6>
            <ul role="list">
              {data.new_for_women.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>New For Kids</h6>
            <ul role="list">
              {data.new_for_kids.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {datasetSubmenu === "men" && (
        <>
          <section>
            <h6>Featured</h6>
            <ul role="list">
              {data.featured.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Shoes</h6>
            <ul role="list">
              {data.shoes.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Clothes</h6>
            <ul role="list">
              {data.clothes.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {datasetSubmenu === "women" && (
        <>
          <section>
            <h6>Featured</h6>
            <ul role="list">
              {data.featured.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Shoes</h6>
            <ul role="list">
              {data.shoes.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Clothes</h6>
            <ul role="list">
              {data.clothes.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {datasetSubmenu === "kids" && (
        <>
          <section>
            <h6>Featured</h6>
            <ul role="list">
              {data.featured.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Shoes</h6>
            <ul role="list">
              {data.shoes.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Clothes</h6>
            <ul role="list">
              {data.clothes.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {datasetSubmenu === "sale" && (
        <>
          <section>
            <h6>Featured</h6>
            <ul role="list">
              {data.featured.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Mens</h6>
            <ul role="list">
              {data.mens.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Womens</h6>
            <ul role="list">
              {data.womens.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h6>Kids</h6>
            <ul role="list">
              {data.kids.map((item: any) => (
                <li key={item.labelId}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </aside>
  );
};

export default SubMenu;
