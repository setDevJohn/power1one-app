import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadingSpinner({isLoading}: {isLoading: boolean}) {
  return (
    <Spinner
      visible={isLoading}
      textContent={'Carregando...'}
      textStyle={{ color: '#FFF' }}
    />
  )  
}
