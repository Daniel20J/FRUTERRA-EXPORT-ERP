import { storage } from './storage'

const USERS_KEY = 'fruterra_users'

// seed a default user
function ensureSeed() {
  const users = storage.get(USERS_KEY, null)
  if (!users) {
    storage.set(USERS_KEY, [{ username: 'admin', password: 'fruterra123', role: 'Administrador' }])
  }
}

ensureSeed()

export const auth = {
  login(username: string, password: string) {
    const users = storage.get(USERS_KEY, [])
    const user = users.find((u: any) => u.username === username && u.password === password)
    if (user) {
      storage.set('fruterra_current_user', user)
      return user
    }
    return null
  },
  logout() {
    storage.remove('fruterra_current_user')
  },
  current() {
    return storage.get('fruterra_current_user', null)
  },
  isAuthenticated() {
    return !!storage.get('fruterra_current_user', null)
  }
}
