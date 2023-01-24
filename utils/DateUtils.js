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

  return d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
