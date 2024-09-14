### Curso Playlist:

 - [Playlist Youtube](https://www.youtube.com/playlist?list=PLiXotHlANc8ptwP6wajo73OZo9Nh5i597)
 - [Googlee DOCS ambiente](https://docs.google.com/document/d/1EG142xCuYRWCi8jPswfEQcIe_nsnBKq60mCKUD5QAXg/edit)

### Comandos importantes

```
meaven clean install 
```

### Aulas assistidas

```
13/08 - 01, 02, 03, 04, 4.5, 5
14/08 - 06, 07, 08, 09
16/08 - 10,11
-- PAUSA/RETORNO --
14/09 - 12
```

### Para testar no Postman:

POST - localhost:8081/user 
Body: raw
Tipo: JSON

{
    "username": "xxxxxxx",
    "password": "xxxxxxx"
}

POST - localhost:8081/task 
Body: raw
Tipo: JSON

{
    "description": "trabalho da faculdade",
    "user": {
        "id": 1
    }
}

### DATABASE
login/senha: root