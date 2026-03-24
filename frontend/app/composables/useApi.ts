export const useApi = <T>(url: string, options: Record<string, any> = {}) => {
  const config = useRuntimeConfig()

  return useFetch<T>(url, {
    baseURL: config.public.apiBase,
    ...options,
  })
}