"use client";
import { AlignRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { NavItem, NAVBAR_ITEMS } from "../constants";

const NavbarMobile = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const [openParentItems, setOpenParentItems] = useState<
    Record<number, boolean>
  >({});
  const [openChildItems, setOpenChildItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleParentItem = (index: number) => {
    if (openParentItems[index]) {
      const newOpenChildItems = { ...openChildItems };
      Object.keys(newOpenChildItems).forEach((key) => {
        if (key.startsWith(`${index}-`)) {
          delete newOpenChildItems[key];
        }
      });
      setOpenChildItems(newOpenChildItems);
    }

    setOpenParentItems({
      ...openParentItems,
      [index]: !openParentItems[index],
    });
  };

  const toggleChildItem = (parentIndex: number, childIndex: number) => {
    const key = `${parentIndex}-${childIndex}`;
    setOpenChildItems({
      ...openChildItems,
      [key]: !openChildItems[key],
    });
  };

  const calculateExtraHeight = (
    parentIndex: number,
    parentItem: NavItem
  ): number => {
    if (!parentItem.children) return 0;

    return parentItem.children.reduce((acc, child, childIndex) => {
      const isChildOpen = openChildItems[`${parentIndex}-${childIndex}`];
      const hasGrandchildren = child.children && child.children.length > 0;

      if (isChildOpen && hasGrandchildren) {
        return acc + (child.children?.length || 0);
      }
      return acc;
    }, 0);
  };

  return (
    <div className="flex items-center sm:hidden text-b4">
      <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
        <AlignRight className={isNavbarOpen ? "text-accents-yellow-3" : ""} />
      </button>
      <div
        className={`${
          isNavbarOpen ? "scale-y-100" : "scale-y-0"
        } absolute w-full px-8 py-4 bg-accents-grey-4 top-12 left-0 right-0 transition duration-300 origin-top`}
      >
        <div className="grid divide-y divide-text-light-1">
          {NAVBAR_ITEMS.map((item, index) => {
            if (!item.children || item.children.length === 0) {
              return (
                <Link
                  onClick={() => setIsNavbarOpen(false)}
                  key={index}
                  href={item.href || "/"}
                  className="py-2 active:text-accents-yellow-3"
                >
                  {item.label}
                </Link>
              );
            }

            const childrenCount = item.children.length;
            const extraHeight = calculateExtraHeight(index, item);
            const heightStyle = openParentItems[index]
              ? extraHeight > 0
                ? `h-[calc(${childrenCount}*27px + ${extraHeight}*27px)]`
                : `h-[calc(${childrenCount}*27px)]`
              : "h-0";

            return (
              <div key={index} className="py-2 group">
                <div
                  className={`${
                    openParentItems[index] ? "text-accents-yellow-3" : ""
                  } group flex justify-between`}
                  onClick={() => toggleParentItem(index)}
                >
                  {item.label}
                  <ChevronDown
                    className={`${
                      openParentItems[index] ? "-rotate-180" : ""
                    } stroke-3 transition duration-300`}
                  />
                </div>
                <div
                  className={`${heightStyle} grid pl-4 transition-all duration-300 origin-top overflow-hidden`}
                >
                  {item.children.map((child, childIndex) => {
                    if (!child.children || child.children.length === 0) {
                      return (
                        <Link
                          onClick={() => setIsNavbarOpen(false)}
                          key={`${index}-${childIndex}`}
                          href={child.href || "/"}
                          className="active:text-accents-yellow-3"
                        >
                          {child.label}
                        </Link>
                      );
                    }

                    const childKey = `${index}-${childIndex}`;
                    const isChildOpen = !!openChildItems[childKey];
                    const grandchildrenCount = child.children.length;
                    const childHeightStyle = isChildOpen
                      ? `h-[calc(${grandchildrenCount}*27px)]`
                      : "h-0";

                    return (
                      <div key={childKey} className="group">
                        <div
                          className={`${
                            isChildOpen ? "text-accents-yellow-3" : ""
                          } group flex justify-between`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleChildItem(index, childIndex);
                          }}
                        >
                          {child.label}
                          <ChevronDown
                            className={`${
                              isChildOpen ? "-rotate-180" : ""
                            } stroke-3 transition duration-300`}
                          />
                        </div>
                        <div
                          className={`${childHeightStyle} grid pl-4 transition-all duration-300 origin-top overflow-hidden`}
                        >
                          {child.children.map((grandchild, grandchildIndex) => (
                            <Link
                              onClick={() => setIsNavbarOpen(false)}
                              key={`${childKey}-${grandchildIndex}`}
                              href={grandchild.href || "/"}
                              className="w-full active:text-accents-yellow-3"
                            >
                              {grandchild.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
