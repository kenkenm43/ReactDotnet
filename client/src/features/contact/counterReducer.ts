export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export interface CounterState {
  data: number;
  title: string;
}
const initialState: CounterState = {
  data: 42,
  title: "YARC (yet another redux counter)",
};

export default function counterReducer(state = initialState, action: any) {
  return state;
}
