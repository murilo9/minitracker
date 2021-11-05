let getVersionPort;
let habits = [];  // Unfortunately this is not persistent, yet

function onNotificationTime(){
  console.log('onNotificationTime', habits)
  setTimeout(onNotificationTime, 15000)
}

function updateHabits(habits){
  console.log('onHabitsUpdated', habits)
  this.habits = habits;
}

self.addEventListener('message', event => {
  console.log('event received on sw', event)
  switch(event.data?.type){
    case 'HABITS_UPDATED':
      updateHabits(event.data.payload)
    default:
  }
})

self.addEventListener('install', () => {
  console.log('sw install hook')
  setTimeout(onNotificationTime, 15000)
})

workbox.core.setCacheNameDetails({ prefix: "minitracker" });
workbox.core.skipWaiting();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

console.log('service worker is working')