import Image from "next/image";
import style from "./List.module.css";
import cn from "classnames";
import {
  Children,
  type PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";

type ListProps = {
  title: string;
  created: number;
  imageUrl?: string;
  children: React.ReactNode;
};

export default function List({
  children,
  title,
  created,
  imageUrl,
}: ListProps) {
  return (
    <div className={style["list"]}>
      <div className={style["list-container"]}>
        <div className={style["tag-container"]}>{children}</div>
        <div className={cn("sub_head_3", style["list-title"])}>{title}</div>
        <div className={cn("body_3", style["list-created"])}>
          {created}시간 전
        </div>
      </div>
      <Image
        src={imageUrl ?? "/icons/photo_library.svg"}
        alt=""
        width={64}
        height={64}
      />
    </div>
  );
}

const renderTagElement = (
  elements: ReactElement[],
  props: Array<React.ComponentProps<typeof Tag>>
) => {
  if (elements.length === 1) {
    return elements[0];
  }
  return (
    <div>
      {elements.map((element, index) => {
        return cloneElement(element);
      })}
    </div>
  );
};

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return <div className={cn("body_2", style["tag"])}>#{text}</div>;
}

// interface TitleProps {
//     text: string;
//   }

// function Title({ title }:TitleProps) {
//     return <div>{title}</div>;
// }

List.Tag = Tag;
// List.Title = Title;
