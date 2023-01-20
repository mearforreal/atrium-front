export const formateDate = (date) => {
  
  const monthNames = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Окт",
    "Дек",
  ];

  const d = new Date(date);
  return d.getDay() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
};
