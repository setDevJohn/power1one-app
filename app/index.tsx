import LoadingSpinner from '@/components/LoadingSpinner';
import ProductCard from '@/components/ProductCard';
import { productsApi } from '@/services/products';
import { Product } from '@/services/products/interfacec';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]); 

  const pageLimit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response =  await productsApi.getAll(page, pageLimit);
  
        const newProducts = response.Products.map(({Product}) => Product) || []

        setProducts(prev => {
          const existingIds = new Set(prev.map(p => p.id));
          const filtered = newProducts.filter(p => !existingIds.has(p.id));
          return [...prev, ...filtered];
        });
      } catch (err) {
        console.error('Erro ao buscar produtos:', err)
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <View style={styles.container}>
      <FlatList 
        data={products}
        keyExtractor={(item ) => item.id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        columnWrapperStyle={{ gap: 10, marginBottom: 10 }}
        onEndReached={() => setPage(prev => prev + 1)}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          <LoadingSpinner isLoading={isLoading}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});