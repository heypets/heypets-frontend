import Link from "next/link";
import Image from "next/image";
import style from "./NavigationBar.module.css";
import cn from "classnames";

import type { PageType } from '@/types';

type TabType = {
  id: string;
  name: PageType;
  title: string;
}

const navigationList: TabType[] = [
  {
    id: "1",
    name: 'home',
    title: "홈",
  },
  {
    id: "2",
    name: "diary",
    title: "일기",
  },
  {
    id: "3",
    name: "book",
    title: "도감",
  },
  {
    id: "4",
    name: "mypet",
    title: "마이펫",
  },
];

interface NavigationBarProps {
  page: PageType;
}

export default function NavigationBar({ page }: NavigationBarProps) {
  return (
    <div className={style["navigation-bar"]}>
      {navigationList.map((tab: TabType) => (
        <Link href={tab.name} key={tab.id} className={style["navigation-tab"]}>
          <Image
            src={`/icons/navigation/${tab.name}${
              tab.name === page ? "-fill" : ""
            }.svg`}
            alt={tab.title}
            width={24}
            height={24}
          />
          <div
            className={cn(
              "body_3",
              {
                [style["navigation-text-selected"]]: tab.name === page,
                [style["navigation-text"]]:  tab.name !== page,
              }
            )}
          >
            {tab.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
