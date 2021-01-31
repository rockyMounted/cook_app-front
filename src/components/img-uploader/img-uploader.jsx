import React from 'react'

class ImgUploader extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: "Пожалуйста, добавьте фото блюда"
    }
  }
  handleChange = (event) => {
    const { files } = event.target;
    // console.log(files)
    if (!files.length) {
      return;
    }

    const formData = new FormData();
    const fileData = event.target.files[0];
    // console.log(fileData)
    formData.append('image', fileData);
    fetch('http://localhost:8080/recipes/img', {
      method: 'POST',
      body: formData,
    })
      .then((result) => result.json())
      .then((response) => {
        if (response.status === 'OK') {
          this.props.onChange(response.data);
        }
      });
  };

  render() {
    return (
      <>
        <label className="recipe-label" htmlFor="img">Фотография блюда:</label>
        <input className="input input-file" name="img" type="file"  onChange={this.handleChange}/>
        <button className="photo-button">Выбрать файл</button>
      </>
    )
  }
}

export default ImgUploader