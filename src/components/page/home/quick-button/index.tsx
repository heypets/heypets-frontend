import { useState } from 'react';

import Floating from '@components/buttons/floating';

import style from './quick-button.module.css';
import Link from 'next/link';

const QuickButton = () => {
  const [visible, setVisible] = useState(false);
  const onToggle = () => setVisible((prev) => !prev);

  return (
    <div className={style.wrapper}>
      <Floating onClick={onToggle} id="register_floating" />

      {visible && (
        <ul className={style.menu}>
          <li key="register_plan">
            <Link href="#">일정 등록</Link>
          </li>
          <li key="register_diary">
            <Link href="#">일기 작성</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default QuickButton;
