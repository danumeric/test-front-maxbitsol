// stores/notification.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

type NotificationType = 'error' | 'success'

interface Notification {
  id: number
  type: NotificationType
  message: string
  timeout?: number
}

export const useNotificationStore = defineStore('notificationStore', () => {
  const notifications = ref<Notification[]>([])
  const nextId: Ref<number> = ref(0)

  function add(notification: Omit<Notification, 'id'>) {
    const id = nextId.value++
    notifications.value.push({ id, ...notification })

    if (notification.timeout) {
      setTimeout(() => remove(id), notification.timeout)
    }
  }

  function remove(id: number) {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }

  function clear() {
    notifications.value = []
  }

  return {
    notifications,
    add,
    remove,
    clear,
  }
})
