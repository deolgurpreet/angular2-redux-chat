/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Action } from 'redux';
import { User } from '../models';
import { UserActions } from '../actions';

/**
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface UsersState {
  currentUser: User;
};

const initialState: UsersState = {
  currentUser: null
};

export const UsersReducer =
  function(state = initialState, action: Action): UsersState {
  switch (action.type) {
    // case UserActions.SET_CURRENT:
    //   const user: User = action.payload;
    //   return {
    //     currentUser: user
    //   };
    default:
      return state;
  }
};
