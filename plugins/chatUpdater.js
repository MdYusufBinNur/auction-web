export default ({app, store, $axios}, inject) => {
  let interval = null;

  const startChatUpdater = () => {
    if (!interval && app.$auth.loggedIn) {
      interval = setInterval(async () => {
        try {
          if (app.$auth.loggedIn) {
            const {error, message, data} = await $axios.get('/get-unread'); // Replace with your endpoint
            if (!data.error) {
              console.log(data.data)
              store.commit('chat/setUserChats', data.data)
            }
          } else {
            stopChatUpdater();
          }
        } catch (error) {
          console.error('Error updating chat:', error.message || error);
          stopChatUpdater(); // Safely stop on persistent errors
        }
      }, 3000); // Poll every 3 seconds
    }
  };

  const stopChatUpdater = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  // Inject start/stop methods for easy access
  inject('chatUpdater', {start: startChatUpdater, stop: stopChatUpdater});
};
