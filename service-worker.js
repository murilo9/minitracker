importScripts("/minitracker/precache-manifest.5e9320c05e0a62380deae7009d84eba3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts('https://cdnjs.cloudflare.com/ajax/libs/localforage/1.10.0/localforage.min.js');

localforage.config({
  name: 'minitracker',
  version: 1.0,
  storeName: 'store'
});

function compareDateFormats(date1, date2) {
  return date1[0] === date2[0] && date1[1] === date2[1] && date1[2] === date2[2]
}

function getDateFormat(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  return [year, month, day]
}

function getHabitAcomplishmentByDate(dateToFind, habit) {
  const habitAcomplishment = habit.acomplishments.find(acomplishment => compareDateFormats(getDateFormat(dateToFind), acomplishment.date))
  return habitAcomplishment || null;
}

function hasUnmarkedHabits(habits) {
  let unmarkedHabit = false;
  const today = new Date();
  const todayWeekDay = today.getDay();
  habits.forEach(habit => {
    const habitRepeatsToday = habit.repeatsOn[todayWeekDay];
    if (habitRepeatsToday) {
      const hasAcomplishent = getHabitAcomplishmentByDate(today, habit);
      if (!hasAcomplishent) {
        unmarkedHabit = true;
      }
    }
  })
  return unmarkedHabit;
}

async function verifyTime() {
  const todayNotificationSent = await localforage.getItem('todayNotificationSent');
  const hours = new Date().getHours();
  // If it's 19:00 and today's notification was not sent yet
  const NOTIFICATION_HOUR = 19;
  if (hours >= NOTIFICATION_HOUR && !todayNotificationSent) {
    const habits = await localforage.getItem('habits') || [];
    const mustNotificate = hasUnmarkedHabits(habits);
    // If there are unmarked habits today
    if (mustNotificate) {
      // Send the notification
      self.registration.showNotification("Don't forget to mark your habits!", {
        body: 'You have not marked your habits for today yet.'
      })
      await localforage.setItem('todayNotificationSent', true);
    }
  }
  // If it's a new day
  else if (hours < NOTIFICATION_HOUR) {
    // Set that today's notification was not sent yet
    await localforage.setItem('todayNotificationSent', false);
  }
  // Call this function again, 1 min later
  setTimeout(verifyTime, 60000);
}

async function updateHabits(habits) {
  console.log('updateHabits', habits)
  await localforage.setItem('habits', habits);
}

self.addEventListener('message', event => {
  switch (event.data?.type) {
    case 'HABITS_UPDATED':
      updateHabits(event.data.payload);
    default:
  }
})

self.addEventListener('install', () => {
  verifyTime();
})

workbox.core.setCacheNameDetails({ prefix: "minitracker" });
workbox.core.skipWaiting();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

console.log('service worker is working')
