import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  getFirestore,
  addDoc,
  DocumentData,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import firebaseConfig from '../configs/firebaseConfig';

// firestore 初期設定
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

/**
 * FireStoreからデータを取得、追加、削除、更新するためのReact Hook
 *
 * @param collectionName - FireStoreコレクション名
 * @returns {findDatas, findData, addData, deleteData, updateData} - データ操作関数
 */
export const useFireStore = <T>(collectionName: string) => {
  /**
   * FireStoreコレクションの全データを取得する
   * @returns {Promise<{ id: string; data: T }[]>} - IDとデータの配列
   */
  const findDatas = async (): Promise<{ id: string; data: T }[]> => {
    const result = await getDocs(collection(firestore, collectionName));
    return result.docs.map((doc) => ({ id: doc.id, data: doc.data() as T }));
  };

  /**
   * FireStoreコレクションから指定されたIDのデータを取得する。
   * @param id - データID
   * @returns {Promise<T>} - データ
   */
  const findData = async (id: string): Promise<T> => {
    const result = await getDoc(doc(firestore, collectionName, id));
    return result.data() as T;
  };

  /**
   * FireStoreコレクションにデータを追加する。
   * @param data - データ
   * @returns {Promise<string>} - 追加データのID
   */
  const addData = async (data: T): Promise<string> => {
    const result = await addDoc(
      collection(firestore, collectionName),
      data as DocumentData
    );
    return result.id;
  };

  /**
   * FireStoreコレクションから指定されたIDのデータを削除する。
   * @param id - データID
   */
  const deleteData = async (id: string) => {
    await deleteDoc(doc(firestore, collectionName, id));
  };

  /**
   * FireStoreコレクションから指定されたIDのデータを更新する。
   * @param id - データID
   * @param data - データ
   */
  const updateData = async (id: string, data: T) => {
    await updateDoc(doc(firestore, collectionName, id), data as DocumentData);
  };

  return { findDatas, findData, addData, deleteData, updateData };
};
