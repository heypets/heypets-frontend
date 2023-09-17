import cn from 'classnames';
import Link from 'next/link';
import style from './Tabs.module.css';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  Children,
  type PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export default function Tabs({
  className,
  children,
}: StrictPropsWithChildren<{ className?: string }>) {
  return <div className={className}>{children}</div>;
}

const renderTabElement = (
  elements: ReactElement[],
  props: Array<React.ComponentProps<typeof Tab>>
) => {
  if (elements.length === 1) {
    return elements[0];
  }

  return (
    <div className={style['tabs']}>
      {elements.map((element, index) => {
        return cloneElement(element);
      })}
    </div>
  );
};

function List({ children }: StrictPropsWithChildren) {
  const validChildren = Children.toArray(children).filter((child) =>
    isValidElement(child)
  ) as ReactElement[];

  if (validChildren.length === 0) {
    throw new Error('List 컴포넌트는 Tab 컴포넌트를 포함해야 합니다.');
  }

  const props = validChildren.map(
    (child) => child.props as React.ComponentProps<typeof Tab>
  );

  return <>{renderTabElement(validChildren, props)}</>;
}

interface TabProps {
  value: string;
  text: string;
  queryString?: string;
}

function Tab({ value, text, queryString }: TabProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isActive = searchParams.get('tab') === value;

  return (
    <Link
      className={cn('sub_head_3', style['tab'], {
        [style['tab-active']]: isActive,
      })}
      href={{
        pathname,
        query: { tab: queryString ?? value },
      }}
      replace>
      {text}
    </Link>
  );
}

function Panel({
  value,
  children,
}: PropsWithChildren<Pick<TabProps, 'value'>>) {
  const searchParams = useSearchParams();
  const isActive = searchParams.get('tab') === value;

  return isActive && children;
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
