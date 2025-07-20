import { Product } from "@/services/products/interfacec";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";


export default function ProductCard({ product }: { product: Product }) {
  const routes = useRouter();

  return (
    <Pressable 
      onPress={() => routes.push(`/product/${product.id}`)}
      style={styles.container}
    >
      <Image 
        source={{ uri: product.ProductImage[0]?.https }} 
        resizeMode="cover"
        style={styles.image}
      />      

      <Text style={styles.name}> {product.name} </Text>

      <Text style={styles.price}> {`R$ ${product.price || 0}`} </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderBlockColor: '#C9C9C9',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12
  },
  price: {
    fontSize: 18,
  }
});