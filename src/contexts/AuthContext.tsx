import { createContext, ReactNode, useEffect, useState } from "react";

import { storageAuthTokenSave, storageAuthTokenGet, storageAuthTokenRemove } from '@storage/storageAuthToken';
import { storageUserGet, storageUserRemove, storageUserSave } from '@storage/storageUser';

import { api } from '@services/api';
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
  updateUser: (updatedUserData: UserDTO) => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps)  {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true); 

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
    setUser(userData);
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserStorageData(true)
      await storageUserSave(userData);
      await storageAuthTokenSave(token);
      
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/auth/signin', { email, password });
      console.log(data)
     
      if(data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token);
        userAndTokenUpdate(data.user, data.token)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();
      
      if(token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      } 
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function updateUser(updatedUserData: UserDTO) {
    try {
      setUser(updatedUserData); 
      await storageUserSave(updatedUserData); 
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    loadUserData()
  },[])

  return (
    <AuthContext.Provider value={{ 
      user, 
      signIn,
      signOut,
      isLoadingUserStorageData,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}