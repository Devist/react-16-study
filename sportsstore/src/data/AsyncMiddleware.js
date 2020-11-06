const isPromise = (payload) =>
  (typeof payload === "object" || typeof payload === "function") &&
  typeof payload.then === "function"

export const asyncActions = () => (next) => (action) => {
  // promise 일 경우, payload의 값을 result로 대체해 전달
  if (isPromise(action.payload)) {
    action.payload.then((result) => next({ ...action, payload: result }))
  }
  // promise가 아닌 payload를 갖는 액션은 그대로 전달
  else {
    next(action)
  }
}
