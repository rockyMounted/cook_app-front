import React from 'react';

import './recipe-page.scss'
// class Recipe extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { }
//   }

//   render(){
//     return(
//       <div className="recipe-item__wrapper">
//       <div className="recipe-item">
//         <h2 className="recipe-item__title">
//         {this.title}
//       </h2>
//         <div className="recipe-item__img-wrapper">
//           <img className="recipe-item__img" src='https://www.maggi.ru/data/images/recept/img640x500/recept_14054_kubb.jpg' alt=""/>
//         </div>
//         <div className="recipe-item__info">
//           <div className="recipe-item__details">
//             <span className="recipe-details__item">Время: {this.time} минут</span>
//             <span className="recipe-details__item">Сложность: {this.difficulty}</span>
//           </div>
//           <div className="recipe-item__description">
//             {this.description}
//           </div>
//         </div>
//       </div>
//     </div>
//     )
//   }
// }

const RecipesAPI = {
  recipes: [
    {
      "id": "W8Yhgcd6",
      "title": "Банановый хлеб",
      "ingredients": [
        {
          "name": "Бананы",
          "qty": "3 штуки"
        },
        {
          "name": "Ванильный экстракт",
          "qty": "½ чайной ложки"
        },
        {
          "name": "Пшеничная мука",
          "qty": "180 г"
        },
        {
          "name": "Куриное яйцо",
          "qty": "1 штука"
        },
        {
          "name": "Сахар",
          "qty": "150 г"
        },
        {
          "name": "Соль",
          "qty": "щепотка"
        },
        {
          "name": "Разрыхлитель",
          "qty": "8 г"
        },
        {
          "name": "Сливочное масло",
          "qty": "90 г"
        }
      ],
      "time": 90,
      "difficulty": "средняя",
      "description": " Спелые бананы очистить и размять их в миске при помощи толкушки для картофеля. Добавить 80 г. растопленного сливочного масла. Добавить слегка взбитое вилкой яйцо, сахар, разрыхлитель, соль, ванильный экстракт и муку. Перемешать до однородности деревянной лопаткой.Перелить тесто в смазанную сливочным маслом форму и отправить в духовку, разогретую до 180 градусов, на 45-50 минут. Готовый хлеб вытащить из духовки, оставить на 10-15 минут. Затем можно вынуть его из формы, дать совсем остыть и подавать.",
      "calories": 317,
      "img": "banana_bread.jpg"
    },
    {
      "id": "Ft5SNIg7",
      "title": "Лазанья",
      "ingredients": [
        {
          "name": "Смешанный фарш",
          "qty": "200 г"
        },
        {
          "name": "Консервированные помидоры кусочками",
          "qty": "½ банки"
        },
        {
          "name": "Сметана",
          "qty": "100 г"
        },
        {
          "name": "Плавленый сырок",
          "qty": "½ штуки"
        },
        {
          "name": "Готовые сухие листы лазаньи",
          "qty": "4 штуки"
        },
        {
          "name": "Специи",
          "qty": "по вкусу"
        },
        {
          "name": "Твердый сыр",
          "qty": "100 г"
        },
        {
          "name": "Белое вино",
          "qty": "2 столовые ложки"
        }
      ],
      "time": 90,
      "difficulty": "средняя",
      "description": "Отварить пасту для лазаньи. Сделать соус болоньезе: поджарить на сковороде фарш, чуть позже выложить туда томаты, добавить специи (соль, перец, базилик, орегано), вино, потушить 5 минут. Сделать сливочный соус: на сковороду выложить сметану, туда же нарезать плавленый сырок, на медленном огне потушить до образования однородной массы. Поделить оба соуса условно на 4 части. На смазанный маслом противень выкладывать слоями: паста — болоньезе — сливочный. Сверху посыпать тёртым сыром, выпекать в духовке до золотистой корочки.",
      "calories": 467,
      "img": "http://localhost:8080/img/lasagna.jpg"
    },
    {
      "id": "1qAdbV5I",
      "title": "Cуп-пюре с брокколи",
      "ingredients": [
        {
          "name": "Куриная грудка",
          "qty": "500 г"
        },
        {
          "name": "Капуста брокколи",
          "qty": "300 г"
        },
        {
          "name": "Картофель",
          "qty": "4 штуки"
        },
        {
          "name": "Морковь",
          "qty": "1 штука"
        },
        {
          "name": "Репчатый лук",
          "qty": "1 штука"
        },
        {
          "name": "Молотый чёрный перец",
          "qty": "по вкусу"
        },
        {
          "name": "Гренки",
          "qty": "100 г"
        },
        {
          "name": "Сливки",
          "qty": "1 стакан"
        },
        {
          "name": "Тёртый сыр пармезан",
          "qty": "100 г"
        },
        {
          "name": "Соль",
          "qty": "по вкусу"
        }
      ],
      "time": 50,
      "difficulty": "легко",
      "description": "Куриную грудку, луковицу положить в кастрюлю, залить водой и варить бульон, снимая образующуюся пенку. Через 30 минут в бульон добавить нарезанные кубиками картофель и морковь, варить до готовности овощей. Чтобы брокколи не потеряла цвет, положить ее в бульон в последнюю очередь, после чего готовить еще 10 минут. Посолить, поперчить по вкусу. Вынуть куриную грудку, нарезать на кубики. Суп перелить в блендер и измельчить, затем вновь вернуть в кастрюлю, добавить сливки, суп прогреть (не кипятить!!!). Разлить по тарелкам, добавить кусочки курицы. Посыпать тертым сыром пармезан и гренками.",
      "calories": 285,
      "img": "http://localhost:8080/img/soup_broccoli.jpg"
    },
    {
      "id": "Njkl3s9H",
      "title": "Венские вафли",
      "ingredients": [
        {
          "name": "Сливочное масло",
          "qty": "150 г"
        },
        {
          "name": "Куриное яйцо",
          "qty": "3 штуки"
        },
        {
          "name": "Сахар",
          "qty": "60 г"
        },
        {
          "name": "Молоко",
          "qty": "250 мл"
        },
        {
          "name": "Ваниль",
          "qty": "2 г"
        },
        {
          "name": "Пшеничная мука",
          "qty": "200 г"
        },
        {
          "name": "Разрыхлитель",
          "qty": "½ чайной ложки"
        }
      ],
      "time": 40,
      "difficulty": "легко",
      "description": "Масло растереть с сахаром и ванилью. Влить яйца и молоко. Размешать. Всыпать просеянную муку и разрыхлитель. Тщательно все перемешать. Прикрыть крышкой и оставить на 30 минут. Раскалить вафельницу в течение 10 минут. Смазать маслом. Ложкой выложить тесто на вафельницу. Выпекать 3–5 минут до золотистого цвета. Должны получиться нежные и мягкие венские вафли. Остывшие вафли можно посыпать сахарной пудрой, полить медом или сгущенкой.",
      "calories": 624,
      "img": "http://localhost:8080/img/waffles.jpg"
    },
  ],
  all: function () { return this.recipes },
  get: function (id) {
    const isRecipe = r => r.id === id
    return this.recipes.find(isRecipe)
  }
}

class Recipe extends React.Component{
  render() {
    const id = this.props.match.params.id
    console.log(this.props)
    const { title, calories, time, description, difficulty } = RecipesAPI.get(id)
    return (
      <div className="recipe-container">
        <h2 className="recipe-title">{title}</h2>
        <div className="recipe__info-box">
          <div className="recipe-img__wrapper">
            <img className="recipe-img" src={'https://www.maggi.ru/data/images/recept/img640x500/recept_14054_kubb.jpg'} alt="фотография блюда"/>
          </div>
          <div className="recipe__info-box__ingredients">
            <h3 className="recipe__ingredients-title">Ингредиенты:</h3>
            <ol className="recipe__ingredients">
              {RecipesAPI.get(id).ingredients.map((ing) =>
                <li className="recipe__ingredients-item">{ing.name}.................{ing.qty}</li>)}
            </ol>
          </div>
        </div>
        <div className="recipe-description__box">
          <div className="recipe-description__info">
            <div className="recipe-info__item">
              <span className="recipe-info__text" >Время приготовления: </span>
              <span className="recipe-info__value" >{time} минут</span>
            </div>
            <div className="recipe-info__item">
              <span className="recipe-info__text" >Калорийность блюда (на 100 гр): </span>
              <span className="recipe-info__value" >{calories} ккал</span>
            </div>
            <div className="recipe-info__item">
              <span className="recipe-info__text" >Сложность приготовления: </span>
              <span className="recipe-info__value" >{difficulty}</span>
              </div>
          </div>
          <h3 className="recipe-description__title">Инструкция: </h3>
          <div className="recipe-description">
            {description}
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe