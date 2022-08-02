# Sobre essa API

Essa api foi criada para consumir a api do twitter e serví-la para a aplicação do Twitter Watch, e evitar problemas de cors Policy.

<a href="https://twitter-req.herokuapp.com/">Link da api no heroku</a>

## Principal endpoint da api:

<pre>
GET /api/user?username=usuarioqualquer&user.fields=description%2Cprofile_image_url 
</pre>
(Faz uma pesquisa do usuário, e retorna as informações do usuário no twitter, e seus últimos 10 twitters)

## Exemplo 
### Response Body:
<pre>
{
  "userdata": {
    "profile_image_url": "https://pbs.twimg.com/profile_images/1553508982471495680/_nf9JPhZ_normal.jpg",
    "description": "A purplepill é a pill mais gostosinha.",
    "name": "Abacat",
    "username": "sommelierdebeta",
    "id": "1290748722259820546"
  },
  "data": [
    {
      "id": "1554304783397396482",
      "text": "A Melody lançou uma música super legal com uma outra cantora, o único problema é a voz dela mesmo.\n\nhttps://t.co/0IWVFhlWMe"
    },
...
  ],
  "meta": {
    "next_token": "7140dibdnow9c7btw422nk199lskobcnu0o592ld4q1x1",
    "result_count": 10,
    "newest_id": "1554304783397396482",
    "oldest_id": "1554207550475730945"
  }
}
</pre>

## Principais dependências:

<ul>
<li> Nodemon</li>
<li> cors</li>
<li> dotenv</li>
<li> express</li>
<li> twitter</li>
<li> morgan</li>
</ul>

## Comandos para rodar aplicação

### Instalar dependências:
<pre>npm install ou yarn</pre>

### Rodar Projeto:
<pre>npm run dev</pre>

