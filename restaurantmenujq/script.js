const menuItems = {
    1: {
      name: "Pizza Margherita",
      description: "Classic cheese pizza with tomato base and basil.",
      price: "₹250",
      image: "images/pizza.jpg"
    },
    2: {
      name: "Veg Burger",
      description: "Grilled veg patty with lettuce, tomato and mayo.",
      price: "₹120",
      image: "images/burger.jpg"
    },
    3: {
      name: "Pasta Alfredo",
      description: "Creamy white sauce pasta with herbs and veggies.",
      price: "₹200",
      image: "images/pasta.jpg"
    },
    4: {
      name: "Tandoori Paneer",
      description: "Spiced grilled paneer with tandoori flavors.",
      price: "₹300",
      image: "images/paneer.jpg"
    }
  };
  
  $(document).on("pagecreate", "#home", function () {
    let html = "";
    Object.entries(menuItems).forEach(([id, item]) => {
      html += `
        <div class="menu-card">
          <a href="#detail" data-id="${id}">
            <img src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p><strong>${item.price}</strong></p>
          </a>
        </div>
      `;
    });
    $("#menu-list").html(html);
  });
  
  $(document).on("click", "#menu-list a", function () {
    const id = $(this).data("id");
    sessionStorage.setItem("selectedId", id);
  });
  
  $(document).on("pagebeforeshow", "#detail", function () {
    const id = sessionStorage.getItem("selectedId");
    const item = menuItems[id];
  
    if (item) {
      $("#menu-detail").html(`
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p><strong>Price:</strong> ${item.price}</p>
        <a href="#home" data-role="button" data-theme="b">Back to Menu</a>
      `);
    }
  });
  