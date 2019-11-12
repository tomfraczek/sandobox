//   function createSection(sections) {
//     const articleListElement = document.querySelectorAll('.list-element--item');

//     for(let i = 0; i < articleListElement.length; i++){


//       let result = sections.find(obj => {
//         console.log(obj)
//         return obj.id === parseInt(articleListElement[i].dataset.id)
//       });

//       const sectionLink = document.createElement("a");
//       sectionLink.setAttribute('href', result.html_url);
//       sectionLink.setAttribute('class', 'recent-activity-item-parent');
//       const sectionName = document.createTextNode(result.name);
//       sectionLink.appendChild(sectionName);
//       articleListElement[i].appendChild(sectionLink);
//     }
//   }



//   function renderHTML(articlesResponse, sectionsResponse) {

//     console.log(articlesResponse);

//     const articles = articlesResponse.articles;
//     const sections = sectionsResponse.sections;
//     // console.log(sections);

//     const articleContainer = document.querySelector('#promotedArticles');
//     const sectionList = document.createElement("ul");
//     sectionList.setAttribute('id', 'promotedArticlesList');
//     sectionList.setAttribute('class', 'promoted-articles-list');

//     articleContainer.appendChild(sectionList);


//     // console.log('sections ', sections );




//     for(let i = 0; i < articles.length; i++){

//       //SHOW ONLY PROMOTED ARTICLES
//       if(articles[i].promoted === true){

//         // DOM ARTICLE'S
// const sectionListElement = document.createElement("li");
// sectionListElement.setAttribute('data-id', articles[i].section_id);
// sectionListElement.setAttribute('class', 'list-element--item');
// const sectionListElementLink = document.createElement("a");
// sectionListElementLink.setAttribute('class', 'recent-activity-item-link');
// sectionListElement.appendChild(sectionListElementLink);
// sectionListElementLink.setAttribute('href', articles[i].html_url);
// const articleName = document.createTextNode(articles[i].name);
// sectionListElementLink.appendChild(articleName);

//         document.querySelector('#promotedArticlesList').appendChild(sectionListElement);
//       }
//     }
//     createSection(sections);
//   }

// function renderArticle(article){
//   const articlesContainer = document.querySelector('#promotedArticlesList');

//   for(let i = 0; i < article.length; i++){
//    const sectionListElement = document.createElement("li");
//       sectionListElement.setAttribute('data-id', article[i].section_id);
//       sectionListElement.setAttribute('class', 'list-element--item');
//       const sectionListElementLink = document.createElement("a");
//       sectionListElementLink.setAttribute('class', 'recent-activity-item-link');
//       sectionListElement.appendChild(sectionListElementLink);
//       sectionListElementLink.setAttribute('href', article[i].html_url);
//       const articleName = document.createTextNode(article[i].name);
//       sectionListElementLink.appendChild(articleName);

//       articlesContainer.appendChild(sectionListElement);
//   }
// };

// function getArticles() {

//   let sections = getSections();

//   articleArr = [];function renderArticle(article){
//   const articlesContainer = document.querySelector('#promotedArticlesList');

//   for(let i = 0; i < article.length; i++){
//    const sectionListElement = document.createElement("li");
//       sectionListElement.setAttribute('data-id', article[i].section_id);
//       sectionListElement.setAttribute('class', 'list-element--item');
//       const sectionListElementLink = document.createElement("a");
//       sectionListElementLink.setAttribute('class', 'recent-activity-item-link');
//       sectionListElement.appendChild(sectionListElementLink);
//       sectionListElementLink.setAttribute('href', article[i].html_url);
//       const articleName = document.createTextNode(article[i].name);
//       sectionListElementLink.appendChild(articleName);

//       articlesContainer.appendChild(sectionListElement);
//   }
// };

// function getArticles() {

//   let sections = getSections();

//   articleArr = [];
//    //get all articles and seperate the promoted ones
//       for(let i = 1; i < articlesApiResp.page_count; i++){
//         let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/articles.json?page='+ i +'';
//         fetch(url)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function(data) {
//           const page = data;

//             for(let i = 0; i < page.per_page; i++){
//               if(page.articles[i].promoted === true){
//                 // console.log(page.articles[i])
//                 articleArr.push({"article": page.articles[i], "section": sections.{page.articles[i].section_id});
//               }
//             }


//         })
//       }

//   return articleArr;
// }

// function getSections(sectionsApiResp){
//       sectionArr = [];

//   for(let i = 1; i < sectionsApiResp.page_count; i++){
//         let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/sections.json?page='+ i +'';
//         fetch(url)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function(data) {
//           const page = data;
//           // console.log(page.per_pagearticleArr)

//             for(let i = 0; i < page.per_page; i++){
//                 sectionArr.push(page.sections[i]);
//             }

//             if (i === sectionsApiResp.page_count - 1) {
//               const articleListElement = document.querySelectorAll('.list-element--item');

//               window.setTimeout(function(){
//                 const articleListElement = document.querySelectorAll('.list-element--item2');
// // console.log(articleListElement)
//     for(let i = 0; i < articleListElement.length; i++){

//       let result = sectionArr.find(obj => {
//         return obj.id === parseInt(articleListElement[i].dataset.id)
//       });

//         console.log(result);
//
//           const sectionLink = document.createElement("a");
//           sectionLink.setAttribute('href', result.html_url);
//           sectionLink.setAttribute('class', 'recent-activity-item-parent');
//           const sectionName = document.createTextNode(result.name);
//           sectionLink.appendChild(sectionName);
//           articleListElement[i].appendChild(sectionLink);
//       }
//               }, 8000);

//               // console.log(articleListElement);
//            }


//         })
//       }
// }

// function renderSection(section){

// };

//    //get all articles and seperate the promoted ones
//       for(let i = 1; i < articlesApiResp.page_count; i++){
//         let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/articles.json?page='+ i +'';
//         fetch(url)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function(data) {
//           const page = data;

//             for(let i = 0; i < page.per_page; i++){
//               if(page.articles[i].promoted === true){
//                 // console.log(page.articles[i])
//                 articleArr.push({"article": page.articles[i], "section": sections.{page.articles[i].section_id});
//               }
//             }


//         })
//       }

//   return articleArr;
// }

// function getSections(sectionsApiResp){
//       sectionArr = [];

//   for(let i = 1; i < sectionsApiResp.page_count; i++){
//         let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/sections.json?page='+ i +'';
//         fetch(url)
//         .then((resp) => resp.json()) // Transform the data into json
//         .then(function(data) {
//           const page = data;
//           // console.log(page.per_pagearticleArr)

//             for(let i = 0; i < page.per_page; i++){
//                 sectionArr.push(page.sections[i]);
//             }

//             if (i === sectionsApiResp.page_count - 1) {
//               const articleListElement = document.querySelectorAll('.list-element--item');

//               window.setTimeout(function(){
//                 const articleListElement = document.querySelectorAll('.list-element--item2');
// // console.log(articleListElement)
//     for(let i = 0; i < articleListElement.length; i++){

//       let result = sectionArr.find(obj => {
//         return obj.id === parseInt(articleListElement[i].dataset.id)
//       });

//         console.log(result);

          // const sectionLink = document.createElement("a");
          // sectionLink.setAttribute('href', result.html_url);
          // sectionLink.setAttribute('class', 'recent-activity-item-parent');
          // const sectionName = document.createTextNode(result.name);
          // sectionLink.appendChild(sectionName);
          // articleListElement[i].appendChild(sectionLink);
//       }
//               }, 8000);

//               // console.log(articleListElement);
//            }


//         })
//       }
// }

// function renderSection(section){

// };

function foo (articles){
    console.log(articles);

      const articlesContainer = document.querySelector('#promotedArticlesList');

    for(let i = 0; i < articles.length; i++) {

        const sectionListElement = document.createElement("li");
        sectionListElement.setAttribute('data-id', articles[i].section_id);
        sectionListElement.setAttribute('class', 'list-element--item');
        const sectionListElementLink = document.createElement("a");
        sectionListElementLink.setAttribute('class', 'recent-activity-item-link');
        sectionListElement.appendChild(sectionListElementLink);
        sectionListElementLink.setAttribute('href', articles[i].html_url);
        const articleName = document.createTextNode(articles[i].name);
        sectionListElementLink.appendChild(articleName);

        articlesContainer.appendChild(sectionListElement);
    }
}


function getArticles(data){
    let articles = [];
    if(data.page_count > 1){
        let articles = [];
        for(let i = 1; i < data.page_count + 1; i++){
            let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/articles.json?page='+ i +'&per_page=100';
            fetch(url)
                .then((resp) => resp.json()) // Transform the data into json
                .then(function(data) {
                    for(let i = 0; i < data.articles.length; i++){
                        // console.log(data.articles[i]);

                        articles.push(data.articles[i]);

                    }
                    
                    // foo(articles);
                    console.log(articles)

                });
        }
    } else {
        for(let i = 0; i < data.articles.length; i++){
            articles.push(data.articles[i]);
        }
    }
}

function getSections(){
    let sections = [];
    let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/sections.json?page=1&per_page=100';
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            // console.log(data);
            if(data.page_count > 1){
                for(let i = 2; i < data.page_count; i++){
                    let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/sections.json?page='+ i +'&per_page=100';
                    fetch(url)
                        .then((resp) => resp.json()) // Transform the data into json
                        .then(function(data) {

                            for(let i = 0; i < data.sections.length; i++){
                                sections.push(data.sections[i]);
                            }
                            // console.log(sections);
                        });
                }
            } else {
                for(let i = 0; i < data.sections.length; i++){
                    sections.push(data.sections[i]);
                }
            }
        });

}

function getCategories(){
    let categories = [];
    let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/categories.json?page=1&per_page=100';
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            if(data.page_count > 1){
                for(let i = 2; i < data.page_count; i++){

                    let url = 'https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/categories.json?page='+ i +'&per_page=100';
                    fetch(url)
                        .then((resp) => resp.json()) // Transform the data into json
                        .then(function(data) {
                            // console.log(data.articles);

                            for(let i = 0; i < data.categories.length; i++){
                                categories.push(data.categories[i]);
                            }
                        });
                }
            } else {
                for(let i = 0; i < data.categories.length; i++){
                    categories.push(data.categories[i]);
                }
            }
        });

    // return categories;
}


//STARTS HERE
function getData() {
    //
    // promotedArticles = getArticles();
    // getSections = getSections();
    // getCategories = getCategories();
    // // console.log(promotedArticles);


// var combinedData = {"getSections":{},"getCategories":{}};
// Promise.all([getSections,getCategories]).then(function(values){
//     combinedData["getSections"] = values[0];
//     combinedData["getCategories"] = values[1];
//     return combinedData;
// });

    // getArticles().then(function(){
    //   console.log(promotedArticles.length);
    // });


//     for(let i = 0; i < promotedArticles.length){

//     }





    const articleContainer = document.querySelector('#promotedArticles');
    const sectionList = document.createElement("ul");
    sectionList.setAttribute('id', 'promotedArticlesList');
    sectionList.setAttribute('class', 'promoted-articles-list');

    articleContainer.appendChild(sectionList);
    // console.log(document.querySelector('#promotedArticlesList'));

    let articlesCall = fetch("https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/articles.json?page=1&per_page=100");
    let sectionsCall = fetch("https://techsupport.cambridgeaudio.com/api/v2/help_center/en-us/sections.json");

    // let articles = getArticles();

    Promise.all([articlesCall, sectionsCall])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {

          let articlesApiResp = finalVals[0];
          let sectionsApiResp = finalVals[1];
// console.log(articlesApiResp);


      getArticles(articlesApiResp);
      getSections(sectionsApiResp);


        });
  };


getData();