export const donatoesService = {
  query,
};

function query(filterBy) {
  let donators = gDonators;
  if (filterBy) {
    donators = gDonators.filter(
      (donator) =>
        donator.fullname.includes(filterBy)
    );
  }
  return [...donators];
}

const gDonators = [
  {
    fullname: "אלי כהן",
    id: 1,
    txt1: "לעילוי נשמת אביו",
  },
  {
    fullname: "מזל לוי",
    id:2,
    txt1: "לעילוי נשמת אימה",
  },
  {
    fullname: "רחל סימן-טוב",
    id:3,
    txt1: "לעילוי נשמת אביה",
  },
  {
    fullname: "יוסי המאירי",
    id:3,
    txt1: "לעילוי נשמת אימו",
  },
];
