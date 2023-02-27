function load({ params }) {
  return {
    event: {
      name: `test ${params.id}`,
      desc: "",
      start: {
        minutes: 25,
        hours: 15,
        date: 22,
        month: 2,
        year: 2023
      },
      end: {
        minutes: 25,
        hours: 16,
        date: 22,
        month: 2,
        year: 2023
      }
    }
  };
}
export {
  load
};
