<template>
  <div>
    <TransitionGroup name="notification">
      <div
        class="notification-message"
        v-for="notification in notificationStore.notifications"
        :key="notification.id"
      >
        <div class="notification-message__wrapper">
          <span>{{ notification.message }}</span>
          <button @click="notificationStore.remove(notification.id)">&times;</button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<script setup lang="ts">
  const notificationStore = useNotificationStore()
</script>
<style scoped lang="scss">
  .notification-message {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: rgb(166, 50, 50);
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 1.5rem;
    }
  }

  .notification-enter-active,
  .notification-leave-active {
    transition: all 0.3s ease;
  }
  .notification-enter-from,
  .notification-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
