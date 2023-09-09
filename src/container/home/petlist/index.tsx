import ListBox from '@/components/listbox';
import PetItem from '../petitem';

import style from './petlist.module.css';

const PetList = () => {
  return (
    <ListBox
      value={'ddd'}
      onChange={() => {
        console.log('changed');
      }}>
      <ListBox.Button>
        <PetItem imgUrl="/image/profile.png" name="테스트" gender={1} />
      </ListBox.Button>

      <ListBox.Options className={style.list}>
        <ListBox.Option unique="ddd" value="1" className={style.item}>
          <PetItem
            imgUrl="/image/profile.png"
            name="테스트테스트테스트테스트테스트테스트테스트"
            gender={1}
          />
        </ListBox.Option>
      </ListBox.Options>
    </ListBox>
  );
};

export default PetList;
