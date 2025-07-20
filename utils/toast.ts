import Toast from "react-native-toast-message";

interface ToastProps {
  type: 'success' | 'error' | 'info';
  text1: string;
  text2?: string;
}

export const showToast = ({ type, text1, text2 }: ToastProps) => {
  Toast.show({
    type,
    text1,
    ...(text2 && { text2 }),  
  });
}