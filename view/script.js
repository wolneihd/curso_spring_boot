const url = "http://localhost:8081/task/user/1";

function hideLoader() {
    const loader = document.getElementById("loading");
    if (loader) {
        loader.style.display = "none";
    }
}

function show(tasks) {
    let tab = `
    <thead>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Username</th>
            <th scope='col'>User-ID</th>
        </tr>
    </thead>
    <tbody>
    `;

    for (let task of tasks) {
        tab += `
        <tr>
            <td scope='row'>${task.id}</td>
            <td>${task.description}</td>
            <td>${task.user.username}</td>
            <td>${task.user.id}</td>
        </tr>
        `;
    }

    tab += '</tbody>';
    document.getElementById('tasks').innerHTML = tab;
}

async function getAPI(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors' // Normalmente, isso é desnecessário, pois é o padrão.
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        hideLoader();
        show(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        hideLoader();
        // Exiba uma mensagem de erro ao usuário, se desejado
    }
}

getAPI(url);
