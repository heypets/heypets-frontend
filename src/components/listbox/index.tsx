import {
  type PropsWithChildren,
  type ReactNode,
  useState,
  useContext,
  HTMLProps,
} from 'react';
import { SelectProvider, selectContext } from '../../context/listbox.context';
import style from './listbox.module.css';
import cn from 'classnames';

type ChildrenWithCustomProps<T> = {
  className?: string;
  children: ReactNode | ((props: T) => ReactNode);
};

type ListBoxProps = PropsWithChildren<{
  value: any;
  onChange: (key: any) => void;
  className?: string;
}>;

const ListBox = ({ children, className, ...restProps }: ListBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = {
    isOpen,
    toggleOpen: () => setIsOpen((prev) => !prev),
    ...restProps,
  };

  return (
    <SelectProvider value={context}>
      <div className={cn(style.wrapper, className)}>{children}</div>
    </SelectProvider>
  );
};

type ButtonProps = ChildrenWithCustomProps<{ isOpen: boolean }>;
ListBox.Button = function Button({ children, className }: ButtonProps) {
  const { isOpen, toggleOpen } = useContext(selectContext);

  return (
    <button onClick={toggleOpen} className={cn(style.button, className)}>
      {typeof children === 'function' && children({ isOpen })}
      {typeof children !== 'function' && children}
    </button>
  );
};

type OptionsProps = PropsWithChildren<{ className?: string }>;
ListBox.Options = function Options({ children, className }: OptionsProps) {
  const { isOpen, toggleOpen } = useContext(selectContext);
  const styles = cn(style.options, className);

  return (
    <>
      {isOpen && (
        <div onClick={toggleOpen} className={styles}>
          <ul>{children}</ul>
        </div>
      )}
    </>
  );
};

type OptionProps = ChildrenWithCustomProps<{
  selected: boolean;
}> & {
  key: string;
  value: any;
  as?: (props: PropsWithChildren<HTMLProps<HTMLLIElement>>) => ReactNode;
};
ListBox.Option = function Option({
  as: As = (props) => <li {...props} />,
  key,
  value,
  children,
  className,
}: OptionProps) {
  const { value: selectedValue, onChange } = useContext(selectContext);

  return (
    <As key={key} className={className} onClick={onChange}>
      {typeof children === 'function' &&
        children({ selected: value === selectedValue })}
      {typeof children !== 'function' && children}
    </As>
  );
};

export default ListBox;
