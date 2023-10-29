let products = {
  data: [
    {
      year: 2018,
      productName: "Toyota Corolla",
      category: "Black",
      mileage: 30000,
      price: 18000,
      image: "/6f97ed70-cd95-4d6d-b241-79e94288609f.webp",
    },
    {
      year: 2016,
      productName: "Honda Civic",
      category: "White",
      mileage: 45000,
      price: 14000,
      image: "/2016-Honda-Civic-front_10846_032_2400x1800_WX.avif",
    },
    {
      year: 2017,
      productName: "Ford Fusion",
      category: "Black",
      price: 30,
      image: "/2017-Ford-Fusion-Albany-NY-Black.jpg",
    },
    {
      year: 2019,
      productName: "Nissan Altima",
      category: "Blue",
      price: 17000,
      image: "/2017-Nissan-Altima-Deep-Blue-Pearl-Color.jpg",
    },
    {
      year: 2015,
      productName: "Chevrolet",
      category: "Malibu",
      price: 12000,
      image: "/images.png",
    },
  ],
};
for (let i of products.data) {
  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");

  elements.forEach((element) => {
    if (value === "all" || element.classList.contains(value)) {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};
