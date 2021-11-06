# Minitracker

- Minitracker is a minimalist habit tracker app.
- It works as a web app as well as a PWA (recommended for best experience).

## Features

- Managing habits
- Adding notes for habits
- Push notifications

## How this app was developed

### Data structures

In order to the user keep track of their habits, we need an array of ```Habit```s. An ```Habit``` must have an ```id``` so it can be indexed as well as a ```name``` so users can refer to it in a friendly way.

As each habit must have a registry of its daily acomplishments , an ```Habit``` has an ```acomplishments``` array. An ```HabitAcomplishment``` has a ```status``` property that indicates the ```HabitStatus``` (i.e. whether the habit was ```DONE```, ```SKIPPED``` or ```FAILED```) at a specific ```date```.

As users could also add a note for a specific day of an habit (e.g. to say why they've skipped/failed the habit on that day), an habit has a ```notes``` array. Each ```HabitNote``` has a ```text``` and a ```date``` it refers to.

As some habits could not be practiced on certain days of the week, each habit has a ```repeatsOn``` array, that shows which days of week it should be done.

Every date is represented as a ```DateFormat```, which consists of an integer array [year, month, day]. Months are zero-indexed, so January is 0 and December is 11.

Example of an habit:

```
{
  id: '_123456789',
  name: 'ride bike',
  acomplishments: [
    {
      status: 'DONE',
      date: [2021, 10, 17]
    },
    {
      status: 'DONE',
      date: [2021, 10, 18]
    },
    {
      status: 'SKIPPED',
      date: [2021, 10, 19]
    },
    {
      status: 'FAILED',
      date: [2021, 10, 22]
    }
  ],
  notes: [
    {
      text: "Jimmy's birthday party",
      date: [2021, 10, 19]
    },
    {
      text: 'Not on the mood',
      date: [2021, 10, 22]
    }
  ],
  repeatsOn: [
    false,
    true,
    false,
    true,
    true,
    true,
    false
  ]
}
```

The example about the 'ride bike' habit says the user has marked it as done on days November 17th and 18th, skipped it on November 19th and failed to do it on November 22th. The user posted some notes saying he skipped the habit on November 19th because of Jimmy's birthday party, and he failed on November 22th because he was... not on the mood that day. He created the habit aiming to not practice it on weekends and tuesdays (indexes 0, 5 and 2, repectively).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
