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
    txt1: "",
  },
  {
    fullname: "מזל לוי",
    id:2,
    txt1: "",
  },
  {
    fullname: "רחל סימן-טוב",
    id:3,
    txt1: "",
  },
  {
    fullname: "יוסי המאירי",
    id:4,
    txt1: "",
  },
  {
    fullname: "מאיה אברהמי",
    id:5,
    txt1: "",
  },
  {
    fullname: "שלמה גרוניך",
    id:6,
    txt1: "",
  },
  {
    fullname: "גרשון מיכאלוב",
    id:7,
    txt1: "",
  },
  {
    fullname: "ינון ברק",
    id:8,
    txt1: "",
  },
  {
    fullname: "ניב גלבוע",
    id:9,
    txt1: "",
  },
  {
    fullname: "קרן שמש",
    id:10,
    txt1: "",
  },
  {
    fullname: "שון וייסמן",
    id:11,
    txt1: "",
  },
];
