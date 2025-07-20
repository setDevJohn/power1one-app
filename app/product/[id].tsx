import LoadingSpinner from '@/components/LoadingSpinner';
import { productsApi } from '@/services/products';
import { Product } from '@/services/products/interfacec';
import { showToast } from '@/utils/toast';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native';
import RenderHtml from 'react-native-render-html';

export default function ProductDetailScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  
  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchInfoProduct = async () => {
      try {
        setIsLoading(true);

        const response = await productsApi.getInfo(Array.isArray(id) ? id[0] : id);
        setProduct(response.Product); 
      } catch (error) {
        console.error('Erro ao buscar informações do produto:', error);
        showToast({ 
          type: 'error',
          text1: 'Erro ao buscar informações do produto!'
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchInfoProduct();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner isLoading />
      ) : (
        <ScrollView  
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 50 }}
        >
          <Text style={styles.text}> {product?.name} </Text>

          <Image 
            source={{ uri: product?.ProductImage[0]?.https }} 
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.price}> {`R$ ${product?.price || 0}`} </Text>

          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.text}> Descrição </Text>
            <View style={styles.line} />
          </View>

          <RenderHtml
            contentWidth={width}
            source={{ html: product?.description || '' }}
          />
        </ScrollView>
      )}
    </>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 400
  },
  price: {
    fontSize: 28,
    marginBottom: 18
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
    marginHorizontal: 10,
  },
});
