import PetList from '@/components/page/home/petlist';
import HomeHeader from '@/components/headers/home';

import style from '@styles/home.module.css';
import Calendar from '@/components/page/home/calendar';
import Today from '@/components/page/home/today';
import Terms from '@/components/page/home/terms';

const Home = () => {
  return (
    <div className={style.wrapper}>
      <PetList className={style.petlist} />

      <Calendar className={style.calendar} />

      <Today className={style.today} />

      <Terms />
    </div>
  );
};

Home.Header = HomeHeader;

export default Home;
