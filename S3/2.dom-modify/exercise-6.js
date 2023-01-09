const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// const list = document.createElement("ul");

// documlist.id = "app-list";



const appList = document.getElementById("app-list");

for (const app of apps) {
    const listItem = document.createElement('li');
    listItem.textContent = app;

    appList.appendChild(listItem);
}

