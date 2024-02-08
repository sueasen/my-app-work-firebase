import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState, createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../configs/firebaseConfig';

// context (データ格納する箱) を作る
const AuthContext = createContext();

// firebase, GoogleAuth 初期設定
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Provider のコンポーネント
export const AuthContextProvider = ({ children }) => {
  // ログインユーザ
  const [loginUser, setLoginUser] = useState();

  // 起動時ログイン処理(既にログインしてる場合のユーザ設定)
  useEffect(() => {
    // auth 初期化時にログインユーザ設定
    auth.onAuthStateChanged((user) => setLoginUser(user));
  }, []);

  // ログイン処理
  const login = async () => {
    // Google ログインのポップアップ表示して認証結果取得
    const result = await signInWithPopup(auth, provider);
    // 認証結果より user 設定
    setLoginUser(result.user);
  };

  // ログアウト処理
  const logout = async () => {
    await signOut(auth);
    setLoginUser(null);
  };

  // ログイン状態ログ出力
  const loginStateLogOut = () => {
    console.log('auth.currentUser');
    console.log(auth.currentUser);
    console.log(auth.currentUser?.uid);
    console.log(auth.currentUser?.displayName);
    console.log(auth.currentUser?.email);
    console.log('loginUser');
    console.log(loginUser);
    console.log(loginUser?.uid);
    console.log(loginUser?.displayName);
    console.log(loginUser?.email);
  };

  // ログイン情報設定したProvider
  return (
    <AuthContext.Provider
      value={{
        loginUser,
        login,
        logout,
        loginStateLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Consumer (useContext) # Provider で囲った範囲で使う必要あり
export const AuthContextConsumer = () => {
  return useContext(AuthContext);
};
