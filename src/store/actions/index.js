export function createAction(type, payload = {}) {
  return {
    type,
    ...payload,
  };
}

// defaul template for creating actions
