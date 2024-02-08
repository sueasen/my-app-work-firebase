import styles from '../styles/LoginUser.module.scss';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { AuthContextConsumer } from '../contexts/AuthContext';

const LoginUser = () => {
  // AuthContextConsumer からログインユーザ、ログイン・ログアウト処理取得
  const { loginUser, login, logout } = AuthContextConsumer();
  return (
    <>
      <div className={styles.user_info}>
        <UserCircleIcon className="w-8 mr-2"></UserCircleIcon>
        <p className="mr-2 w-24">
          {loginUser ? loginUser.displayName : 'ゲスト'}
        </p>
        <Button
          variant="text"
          className="rounded-full font-normal text-white"
          onClick={loginUser ? logout : login}
        >
          {loginUser ? 'logout' : 'login'}
        </Button>
      </div>
    </>
  );
};
export default LoginUser;
