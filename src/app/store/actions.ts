import { Action } from "@ngrx/store";
import { RouterAction } from '@ngrx/router-store';
import { Kid, Family, State } from "./model";

export type AppAction = {type:string, payload?:any}

export const ActionTypes = {
    KID_SELECTED: 'KID_SELECTED',
    KID_UPDATED: 'KID_UPDATED',
    KID_ADDED: 'KID_ADDED',
    ADD_KID: 'ADD_KID',
    LOAD_FAMILY: 'LOAD_FAMILY',
    FAMILY_LOADED: 'FAMILY_LOADED',
    FAMILIES_LOADED: 'FAMILIES_LOADED',
    KIDS_LOADED: 'KIDS_LOADED',
    LOAD_FAMILIES: 'LOAD_FAMILIES',
    LOAD_KIDS: 'LOAD_KIDS',
    LOAD_FAMILY_AND_SELECT_KID: 'LOAD_FAMILY_AND_SELECT_KID',
    SIGN_UP_FAMILY: 'SIGN_UP_FAMILY',
    LOG_IN_FAMILY: 'LOG_IN_FAMILY',
    FAMILY_LOGGED_IN: 'FAMILY_LOGGED_IN',
    CREATE_KID: 'CREATE_KID',
    FAMILY_SIGNED_UP: 'FAMILY_SIGNED_UP',
    KID_CREATED: 'KID_CREATED',
    GOTO_FAMILY_ACTION: 'GOTO_FAMILY_ACTION',
};

export class KidUpdatedAction implements Action {
    type = ActionTypes.KID_UPDATED;
    constructor(public payload: Kid) { }
}

export class KidSelectedAction implements Action {
    type = ActionTypes.KID_SELECTED;
    constructor(public payload: Kid) { }
}

export class KidAddedAction implements Action {
    type = ActionTypes.KID_ADDED;
    constructor(public payload: Kid) { }
}

export class AddKidAction implements Action {
    type = ActionTypes.ADD_KID;
    constructor(public payload: Kid) { }
}

export class LoadFamilyAction implements Action {
    type = ActionTypes.LOAD_FAMILY;
    constructor(public payload: string) { }
}

export class FamilyLoadedAction implements Action {
    type = ActionTypes.FAMILY_LOADED;
    constructor(public payload: Family) { }
}

export class FamiliesLoadedAction implements Action {
    type = ActionTypes.FAMILIES_LOADED;
    constructor(public payload: Family[]) { }
}

export class KidsLoadedAction implements Action {
    type = ActionTypes.KIDS_LOADED;
    constructor(public payload: Kid[]) { }
}

export class LoadFamiliesAction implements Action {
    type = ActionTypes.LOAD_FAMILIES;
}

export class LoadKidsAction implements Action {
    type = ActionTypes.LOAD_KIDS;
}

export class LoadFamilyAndSelectKidAction implements Action {
    type = ActionTypes.LOAD_FAMILY_AND_SELECT_KID;
    constructor(public payload: {}) { }
}

export class SignUpFamilyAction implements Action {
    type = ActionTypes.SIGN_UP_FAMILY;
    constructor(public payload: { ['name']: string, ['password']: string }) { }
}

export class LogInFamilyAction implements Action {
    type = ActionTypes.LOG_IN_FAMILY;
    constructor(public payload: { ['name']: string, ['password']: string }) { }
}

export class FamilyLoggedInAction implements Action {
    type = ActionTypes.FAMILY_LOGGED_IN;
    constructor(public payload: Family) { }
}

export class CreateKidAction implements Action {
    type = ActionTypes.CREATE_KID;
    constructor(public payload: Kid) { }
}

export class FamilySignedUpAction implements Action {
    type = ActionTypes.FAMILY_SIGNED_UP;
    constructor(public payload: Family) { }
}

export class KidCreatedAction implements Action {
    type = ActionTypes.KID_CREATED;
    constructor(public payload: Kid) { }
}

export class GotoFamilyAction implements Action {
    type = ActionTypes.GOTO_FAMILY_ACTION;
    constructor(public payload: {}) { }
}

export type AppActions =
    RouterAction<State> |
    KidUpdatedAction |
    KidSelectedAction |
    AddKidAction |
    FamilyLoadedAction |
    FamiliesLoadedAction |
    KidsLoadedAction |
    LoadFamiliesAction |
    LoadKidsAction |
    LoadFamilyAndSelectKidAction |
    SignUpFamilyAction |
    LogInFamilyAction |
    FamilyLoggedInAction |
    CreateKidAction |
    FamilySignedUpAction |
    KidCreatedAction |
    GotoFamilyAction;