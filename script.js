//async and await


const getBreeds = async () => {
  const dogbreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
  console.log(dogbreeds.data.message)
}

getBreeds()

const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')



//now we need some functionality
//lets listen for an event, attach it to our button

button.addEventListener('click', async () => {
  let breed = breedInput.value
  console.log(breed)
  let response = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  )
  console.log(response)
  let dogPic = response.data.message
  console.log(dogPic)
  imageDiv.innerHTML = `<img src=${dogPic}>`
}


//and some setters