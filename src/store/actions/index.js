export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export function createAction(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}
// action that has a payload,
// change the type and copy what the payload might be
// what is the payload in this case?

export function createRequestType(base) {
  if (!base) {
    throw new Error("cannot create request type with base = '' or base = null");
  }
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}
// array.reducer(accumulator, currentValue)
// accumulator[type] = base+type
// okay so we have some array that does this now yay?
