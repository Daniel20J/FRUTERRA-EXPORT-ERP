export const storage = {
  get(key: string, defaultValue: any = null) {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) : defaultValue
    } catch (e) {
      return defaultValue
    }
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove(key: string) {
    localStorage.removeItem(key)
  }
}
