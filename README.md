# Processo seletivo para desenvolvedor mobile

# App Tempo

Aplicativo desenvolvido em React Native(expo) para previsão do tempo. Este trabalho faz parte do processo seletivo realizado pelo NEES.  

Foi necessário a realização de alguns ajustes para a exibição de algumas informações, devido a falta de dados vindos da API, como por exemplo, os dados de horário e temperatura durante o decorrer do dia. Em minha percepção a ausência destes dados não permitiu ser fiel completamente ao Wireframe disponibilizado, mas foram adicionados os horários do sunset e sunrise e suas respectivas imagens. 

Inicialmente a API fornecida só estava trazendo informações da cidade de São Paulo, mas consegui utilizar outra api da mesma plataforma hgbrasil que retorna os dados através do nome da cidade:

```bash
https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=Gramado
```

Foi utilizado também outra API, essa do IBGE, onde é possível realizar uma pesquisa pelo nome das cidades do Brasil, e exibir os dados do tempo daquela referida cidade.

```bash
https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome
```


## Instalação

Clone no repositório

```bash
git clone https://github.com/njr1466/mobile-weather-app.git
```
Instale as dependências

```bash
yarn ou npm install
```
Inicie o projeto

```bash
npx expo start ou npm start
```

