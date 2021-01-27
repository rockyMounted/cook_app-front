import React from 'react';
// import RecipeModal from '../recipe-modal/recipe-modal'
import cookAppReques from '../../api/cook-app'
import './create-recipe-form.scss'
import InputIngredients from '../input-ingredients/input-ingredients'

class CreateRecipeForm extends React.Component{
  constructor() {
    super();
    this.state = {
      recipes: [],
      errors: {},
      ingredients: [],
      loading: false,
      message: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
  }

  onIngredientsChange(ingredients) {
    const ingr = this.state.ingredients
    ingr.push(ingredients)

    // if (ingr.some(e => e.id === )) {
    //   console.log('hj')
    // }


    console.log('массив', ingr)
    this.setState(ingr)
    console.log('state', this.state.ingredients )
    // console.log('ing', ingredients)  //
  }

  handleChange(event) {
    let recipes = this.state.recipes;
    recipes[event.target.name] = event.target.value;

    this.setState({
      recipes
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {

      let recipe = {};
      recipe["title"] = this.state.recipes.title;
      recipe["calories"] = this.state.recipes.calories;
      recipe["time"] = this.state.recipes.time;
      recipe["description"] = this.state.recipes.description;
      recipe["img"] = this.state.recipes.img;
      recipe["difficulty"] = this.state.recipes.difficulty;
      recipe["ingredients"] = [{'name': "Мука", 'qty': "200 г"}, {'name': "Молоко", 'qty': "1 стакан"}]
      this.setState({ recipes:[recipe] })

      // this.setState({recipe:recipe});

      alert('Рецепт сохранён');
    }
  }

  validate(){
    let recipes = this.state.recipes;
    let errors = {};
    let isValid = true;

    if (!recipes["title"]) {
      isValid = false;
      errors["title"] = "Пожалуйста, укажите название блюда";
    }
    if (!recipes["time"]) {
      isValid = false;
      errors["time"] = "Пожалуйста, укажите время приготовления";
    }
    if (!recipes["description"]) {
      isValid = false;
      errors["description"] = "Пожалуйста, опишите стадии приготовления ";
    }
    if (!recipes["calories"]) {
      isValid = false;
      errors["calories"] = "Пожалуйста, укажите колличество калорий";
    }
    if (!recipes["difficulty"]) {
      isValid = false;
      errors["difficulty"] = "Пожалуйста, укажите сложность приготовления";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  // addRecipe(title,calories,time,description,img,ingredients,difficulty){
  //   this.setState({ loading: true });
  //   cookAppReques
  //     .post('/recipes', {
  //       title,
  //       calories,
  //       time,
  //       description,
  //       img,
  //       ingredients,
  //       difficulty
  //     })
  //     .then(response => {
  //       if (response.data.status === 'OK') {
  //         this.setState({ recipes: [response.data.data], loading: false })
  //       } else {
  //         this.setState({ loading: false, message: response.data.message })
  //       }
  //     })
  // }

  render() {
    return (
      <div className="create-recipe__container">
        <h2 className="recipe-title">Создать рецепт</h2>
        <form action="" onSubmit={this.handleSubmit} >
          <ul className="create-recipe__list" >
            <li className="create-recipe__item ">
              <label className="recipe-label" htmlFor="title">Название рецепта:</label>
              <input className=" input input-title" name="title" type="text" value={this.state.recipes.title} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.title}</div>
            </li>
            <li className="create-recipe__item ">
              <label className="recipe-label" htmlFor="time">Время приготовления (в минутах):</label>
              <input className="input input-number" name="time" type="number" value={this.state.recipes.time} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.time}</div>
            </li>
            <li className="create-recipe__item ">
              <label  className="recipe-label" htmlFor="calories">Колличество каллорий (на 100 гр):</label>
              <input className="input input-number" name="calories" type="number" value={this.state.recipes.calories} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.calories}</div>
            </li>
            <li className="create-recipe__item">
              <label  className="recipe-label" htmlFor="difficulty">Сложность приготовления:</label>
              <select className="input input-difficulty" name="difficulty" value={this.state.recipes.difficulty} onChange={this.handleChange}>
                <option value="сложно">сложно</option>
                <option value="средняя">средняя</option>
                <option value="легко">легко</option>
              </select>
              <div className="text-danger">{this.state.errors.difficulty}</div>
            </li>
            <li className="create-recipe__item create-recipe__item-description">
              <label className="recipe-label" htmlFor="description">Процесс приготовления:</label>
              <textarea className="input input-description" name="description" type="text" value={this.state.recipes.description} onChange={this.handleChange} />
              <div className="text-danger">{this.state.errors.description}</div>
            </li>
            <li className="create-recipe__item create-recipe__item-ingredients">
              <label className="recipe-label" htmlFor="ingredients">Ингредиенты:</label>
              <ul className="ingredients-list" >
                <InputIngredients id='1' onIngredientsChange={ this.onIngredientsChange}/>
                <InputIngredients id='2' onIngredientsChange={ this.onIngredientsChange}/>
              </ul>
            </li>
            <li className="create-recipe__item">
              <label className="recipe-label" htmlFor="img">Фотография блюда:</label>
              <input className="input input-file" name="img" type="file" value={this.state.recipes.img} onChange={this.handleChange}/>
              <button className="photo-button">Выбрать файл</button>
            </li>
          </ul>
          <button className="create-recipe__button" type="submit">Сохранить</button>
        </form>

      </div>
    )
  }
}

export default CreateRecipeForm





// class CreateRecipeForm extends React.Component {

//   state = { title: '', description: '', time: '', difficulty: '', calories: '' };

//   addNewRecipe = () => {
//     const { addRecipe } = this.props;
//     const { title, description, time, difficulty, calories } = this.state;

//     addRecipe(title, description, time, difficulty, calories)
//   };

//   handleInput = event => {
//     this.setState({ title: event.target.value })
//   }
//   render() {
//     const { title } = this.state;
//     console.log(this.addNewRecipe)
//     return (
//       <div className="create-recipe__container">
//         <h2 className="recipe-title">Создать рецепт</h2>
//         <form action="" onSubmit={this.addNewRecipe}>
//           <ul className="create-recipe__list" >
//             <li className="create-recipe__item ">
//               <label className="recipe-label" htmlFor="title">Название рецепта:</label>
//               <input className=" input input-title" name="title" type="text" value={title} onChange={this.handleInput}/>
//             </li>
//             {/* <li className="create-recipe__item ">
//               <label className="recipe-label" htmlFor="time">Время приготовления (в минутах):</label>
//               <input className="input input-number" name="time" type="number" value={time} onChange={e => setTime(e.target.value)}/>
//             </li>
//             <li className="create-recipe__item ">
//               <label  className="recipe-label" htmlFor="calories">Колличество каллорий (на 100 гр):</label>
//               <input className="input input-number" name="calories" type="number" value={calories}onChange={e => setCalories(e.target.value)}/>
//             </li>
//             <li className="create-recipe__item">
//               <label  className="recipe-label" htmlFor="difficulty">Сложность приготовления:</label>
//               <select className="input input-difficulty" name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
//                 <option value="сложно">сложно</option>
//                 <option value="средняя">средняя</option>
//                 <option value="легко">легко</option>
//               </select>
//             </li>
//             <li className="create-recipe__item create-recipe__item-description">
//               <label className="recipe-label" htmlFor="description">Процесс приготовления:</label>
//               <textarea className="input input-description" name="description" type="text" value={description} onChange={e => setDescription(e.target.value)}/>
//             </li>
//             <li className="create-recipe__item create-recipe__item-ingredients">
//               <label className="recipe-label" htmlFor="ingredients">Ингредиенты:</label>
//               <ul className="ingredients-list">
//                 <li className="ingredients-item">
//                   <label htmlFor="name">Название:</label>
//                   <input className="input input-ingredient" name="name" type="text" value={name} onChange={e => setName(e.target.value)}/>

//                   <label className="label-qty" htmlFor="qty">Колличество:</label>
//                   <input className="input input-ingredient" name="qty" type="text" value={qty} onChange={e => setQty(e.target.value)}/>
//                 </li>
//               </ul>
//             </li>
//             <li className="create-recipe__item">
//               <label className="recipe-label" htmlFor="img">Фотография блюда:</label>
//               <input className="input input-file" name="img" type="file" value={img} onChange={e => setImg(e.target.value)}/>
//               <button className="photo-button">Выбрать файл</button>
//             </li>*/}
//           </ul>
//           <button className="create-recipe__button" type="submit">Сохранить</button>
//         </form>

//         {/* <div>{this.state.title}</div> */}
//       </div>
//     )
//   }
// }

// export default CreateRecipeForm