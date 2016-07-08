/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// import {
//   Component
// } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import {
//   AppState,
//   getUnreadMessagesCount
// } from '../reducers';

// /**
//  * ChatNavBar shows the header and unread count
//  */
// @Component({
//   selector: 'chat-nav-bar',
//   template: `
//   <nav class="navbar navbar-default">
//     <div class="container-fluid">
//       <div class="navbar-header">
//         <a class="navbar-brand" href="https://ng-book.com/2">
//           <img src="${require('images/logos/ng-book-2-minibook.png')}"/>
//            ng-book 2
//         </a>
//       </div>
//       <p class="navbar-text navbar-right">
//         <button class="btn btn-primary" type="button">
//           Messages <span class="badge">{{unreadMessagesCount$ | async }}</span>
//         </button>
//       </p>
//     </div>
//   </nav>
//   `
// })
// export default class ChatNavBar  {
//   unreadMessagesCount$: Observable<number>;

//   constructor(private store: Store<AppState>) {
//     this.unreadMessagesCount$ = store.let(getUnreadMessagesCount());
//   }
// }
