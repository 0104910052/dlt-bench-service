export let data = {
  initialized: false,
  ready: false,
  fetchInitializedAt: null,
  fetchFinishedAt: null,
};

export const setData = (newData: any) => {
  data = newData;
};
