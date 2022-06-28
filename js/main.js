let btnGetData = document.getElementById('get-data');
const getData = () => {

    console.log('getdata()');

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            console.log(data);


            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitleId = document.createElement('p');
            let pBodyId = document.createElement('p');
            let hr = document.createElement('hr');


            pId.innerText = `Post Id:  ${data.id}`;
            pUserId.innerText = `User ID: ${data.userId}`;
            pTitleId.innerText = `Title: ${data.title}`;
            pBodyId.innerText = `Body: ${data.body}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitleId);
            document.body.appendChild(pBodyId);
            document.body.appendChild(hr);

        })
        .catch(error => {
            console.log(error);
        })


};

btnGetData.addEventListener('click', getData);