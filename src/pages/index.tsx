import PetList from '@/container/home/petlist';
import HomeHeader from '@/components/headers/home';

import style from '@styles/home.module.css';

const Home = () => {
  return (
    <div className={style.wrapper}>
      <PetList />
    </div>
  );
};

Home.Header = HomeHeader;

export default Home;
