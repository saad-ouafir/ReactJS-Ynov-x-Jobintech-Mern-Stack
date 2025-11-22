import { useState } from "react";

export default function useToggle(state, useState) {
  () => setState(!state);
  return state;
}
