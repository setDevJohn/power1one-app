import { api } from "../api"
import { Product } from "./interfacec"

const getAll = async (page: number, limit: number)
  : Promise<{Products: {Product: Product}[]}> => {
  try {
    const response = await api.get(`/products?page=${page}&limit=${limit}`)
    return response.data
  } catch (err) {
    throw new Error((err as Error).message)
  }
}

const getInfo = async (productId: string) : Promise<{Product: Product}> => {
  try {
    const response = await api.get(`/products/${productId}`)
    return response.data
  } catch (err) {
    throw new Error((err as Error).message)
  }
}

export const productsApi = {
  getAll,
  getInfo
}