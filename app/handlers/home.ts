interface Apparel {
  id: string;
  name: string;
  description: string;
  price: number;
  discount?: number;
  quantity: number;
  images: string[];
}

const getApparelData = async (): Promise<Apparel[]> => {
    return fetch('/api/products')
        .then((res) => res.json())
        .then((result) => result.data)
}

const getApparelDetails = async (id: string): Promise<Apparel> => {
    return fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((result) => result.data?.[0])
}

export { getApparelData, getApparelDetails };
export type { Apparel }