import { createAction } from "@reduxjs/toolkit";
import { userData } from "./Store.type";

export const revertAll = createAction("REVERT_ALL");
export const updateName = createAction<userData>("UPDATE_NAME");
