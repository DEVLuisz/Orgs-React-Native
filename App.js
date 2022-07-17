import { StatusBar, SafeAreaView, View} from 'react-native';
import Cesta from './src/Pages/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Mock from "./src/public/Texts";
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontLoading] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontLoading){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...Mock}/>
    </SafeAreaView>
  );
}
