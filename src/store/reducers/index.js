export default function (state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer takes in two params:
// type of the operation
// previous state

// actions dispathed via Redux are sychronous to reach out to the network we need to dispatch asynchronously
