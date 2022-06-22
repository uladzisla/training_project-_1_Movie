// /* Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

// "use strict";

// const movieDB = {
//   movies: [
//     "Логан",
//     "Лига справедливости",
//     "Ла-ла лэнд",
//     "Одержимость",
//     "Скотт Пилигрим против...",
//   ],
// };
// const adv = document.querySelectorAll(".promo__adv img"),
//   poster = document.querySelector(".promo__bg"),
//   genre = poster.querySelector(".promo__genre");
// const movieList = document.querySelector(".promo__interactive-list");
// const inputForm = document.querySelector(".adding__input");

// adv.forEach((item) => {
//   item.remove();
// });

// genre.textContent = "Драма";

// poster.style.backgroundImage = `url('img/bg.jpg')`;

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//   movieList.innerHTML += `
//   <li class="promo__interactive-item">
//                ${i + 1} ${film}
//                 <div class="delete"></div>
//               </li>`;
// });

// inputForm.addEventListener("click", (e) => {
//   console.log(e.target);
// });
function stairsIn20(s) {
  let newArr = [...s];

  return newArr.reduce((a, b) => a + b) * 20;
}
console.log(
  stairsIn20([
    6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
    6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
    5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
    9871, 5990, 6309, 7825,
  ])
);
