// import { Store } from '@ngrx/store';
// import {
//   AppState,
//   getMessages
// } from './reducers';
// import { uuid } from './util/uuid';
// import * as moment from 'moment';
// import {
//   Thread,
//   User
// } from './models';
// import {
//   ThreadActions,
//   UserActions
// } from './actions';

// /**
//  * ChatExampleData sets up the initial data for our chats as well as
//  * configuring the "bots".
//  */

// // the person using the app is Juliet
// const me: User = {
//   id: uuid(),
//   isClient: true, // <-- notice we're specifying the client as this User
//   name: 'Juliet',
//   avatarSrc: require('images/avatars/female-avatar-1.png')
// };

// const ladycap: User = {
//   id: uuid(),
//   name: 'Lady Capulet',
//   avatarSrc: require('images/avatars/female-avatar-2.png')
// };

// const echo: User = {
//   id: uuid(),
//   name: 'Echo Bot',
//   avatarSrc: require('images/avatars/male-avatar-1.png')
// };

// const rev: User = {
//   id: uuid(),
//   name: 'Reverse Bot',
//   avatarSrc: require('images/avatars/female-avatar-4.png')
// };

// let wait: User = {
//   id: uuid(),
//   name: 'Waiting Bot',
//   avatarSrc: require('images/avatars/male-avatar-2.png')
// };

// let tLadycap: Thread = {
//   id: 'tLadycap',
//   name: ladycap.name,
//   avatarSrc: ladycap.avatarSrc,
//   messages: []
// };

// let tEcho: Thread = {
//   id: 'tEcho',
//   name: echo.name,
//   avatarSrc: echo.avatarSrc,
//   messages: []
// };

// let tRev: Thread = {
//   id: 'tRev',
//   name: rev.name,
//   avatarSrc: rev.avatarSrc,
//   messages: []
// };

// let tWait: Thread = {
//   id: 'tWait',
//   name: wait.name,
//   avatarSrc: wait.avatarSrc,
//   messages: []
// };

// export default function ChatExampleData(store: Store<AppState>) {
//   const threadActions = new ThreadActions();
//   const userActions = new UserActions();

//   // set the current User
//   store.dispatch(userActions.setCurrent(me));

//   // create a new thread and add messages
//   store.dispatch(threadActions.add(tLadycap));
//   store.dispatch(threadActions.addMessage(tLadycap, {
//     author: me,
//     sentAt: moment().subtract(45, 'minutes').toDate(),
//     text: 'Yet let me weep for such a feeling loss.'
//   }));
//   store.dispatch(threadActions.addMessage(tLadycap, {
//     author: ladycap,
//     sentAt: moment().subtract(20, 'minutes').toDate(),
//     text: 'So shall you feel the loss, but not the friend which you weep for.'
//   }));

//   // create a few more threads
//   store.dispatch(threadActions.add(tEcho));
//   store.dispatch(threadActions.addMessage(tEcho, {
//     author: echo,
//     sentAt: moment().subtract(1, 'minutes').toDate(),
//     text: 'I\'ll echo whatever you send me'
//   }));

//   store.dispatch(threadActions.add(tRev));
//   store.dispatch(threadActions.addMessage(tRev, {
//     author: rev,
//     sentAt: moment().subtract(3, 'minutes').toDate(),
//     text: 'I\'ll reverse whatever you send me'
//   }));

//   store.dispatch(threadActions.add(tWait));
//   store.dispatch(threadActions.addMessage(tWait, {
//     author: wait,
//     sentAt: moment().subtract(4, 'minutes').toDate(),
//     text: `I\'ll wait however many seconds you send to me before responding.` +
//           ` Try sending '3'`
//   }));

//   // select the first thread
//   store.dispatch(threadActions.select(tLadycap));

//   // Now we set up the "bots". We do this by watching for new messages and
//   // depending on which thread the message was sent to, the bot will respond
//   // in kind.
//   store.let(getMessages())
//   .filter(message => message.author.id === me.id)
//   .subscribe(message => {
//     switch (message.thread.id) {
//       case tEcho.id:
//         // echo back the same message to the user
//         store.dispatch(threadActions.addMessage(tEcho, {
//           author: echo,
//           text: message.text
//         }));

//         break;
//       case tRev.id:
//         // echo back the message reveresed to the user
//         store.dispatch(threadActions.addMessage(tRev, {
//           author: rev,
//           text: message.text.split('').reverse().join('')
//         }));

//         break;
//       case tWait.id:
//         let waitTime: number = parseInt(message.text, 10);
//         let reply: string;

//         if (isNaN(waitTime)) {
//           waitTime = 0;
//           reply = `I didn\'t understand ${message}. Try sending me a number`;
//         } else {
//           reply = `I waited ${waitTime} seconds to send you this.`;
//         }

//         setTimeout(
//           () => {
//             store.dispatch(threadActions.addMessage(tWait, {
//               author: wait,
//               text: reply
//             }));
//           },
//           waitTime * 1000);

//         break;
//       default:
//         break;
//     }
//   });


// }
