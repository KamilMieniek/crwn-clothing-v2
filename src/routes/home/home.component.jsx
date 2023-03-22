import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl:
        'https://i.pinimg.com/474x/01/f7/c3/01f7c3a18b29d3d9e274ffefc16d1016.jpg',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl:
        'https://i.pinimg.com/474x/01/f7/c3/01f7c3a18b29d3d9e274ffefc16d1016.jpg',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl:
        'https://i.pinimg.com/474x/01/f7/c3/01f7c3a18b29d3d9e274ffefc16d1016.jpg',
    },
    {
      id: 4,
      title: 'Womans',
      imageUrl:
        'https://i.pinimg.com/474x/01/f7/c3/01f7c3a18b29d3d9e274ffefc16d1016.jpg',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl:
        'https://i.pinimg.com/474x/01/f7/c3/01f7c3a18b29d3d9e274ffefc16d1016.jpg',
    },
  ];
  return (
    <div className="Home">
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
