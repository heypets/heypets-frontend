import PetList from '@/components/page/home/petlist';
import HomeHeader from '@/components/headers/home';

import style from '@styles/home.module.css';
import Calendar from '@/components/page/home/calendar';

const Home = () => {
  return (
    <div className={style.wrapper}>
      <PetList className={style.petlist} />
      <Calendar className={style.calendar} />
    </div>
  );
};

Home.Header = HomeHeader;

export default Home;
