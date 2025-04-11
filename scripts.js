Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        new Notification('Your laundry is on the way!');
    }
});
