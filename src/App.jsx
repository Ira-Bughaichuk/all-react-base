import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import PostForm from 'components/PostForm';

export const App = () => {
  return (
    <>
      <PostForm />
      <Counter />
      <ClassCounter />
    </>
  );
};
