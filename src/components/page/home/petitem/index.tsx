import Image from 'next/image';

import Male from 'public/icons/male.svg';
import Female from 'public/icons/femaie.svg';

import style from './petitem.module.css';

type PetItemsProps = {
  imgUrl: string;
  gender: 0 | 1;
  name: string;
};
const PetItem = ({ imgUrl, gender, name }: PetItemsProps) => {
  return (
    <div className={style.wrapper}>
      <Image src={imgUrl} width={48} height={48} alt={name} />
      <div className={style.contentWrapper}>
        {gender === 0 && <Male />}
        {gender === 1 && <Female />}
        <span className={style.name}>{name}</span>
      </div>
    </div>
  );
};

export default PetItem;
