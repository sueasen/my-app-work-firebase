import { AuthContextConsumer } from '../contexts/AuthContext';

const Page5 = () => {
  const { loginUser } = AuthContextConsumer();
  return (
    <>
      <p>Page5</p>
      <p>{loginUser?.displayName}</p>
      <p>{loginUser?.email}</p>
    </>
  );
};

export default Page5;
