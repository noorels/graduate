(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  function init() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    const categories = [
      {
        category: "adventure",
        description:
          "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      },
      {
        category: "fun",
        description:
          "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      },
    ];

    const selectedCat = categories.find(
      (cat) => cat.category === params.category
    );
    const categoryDescriptionElement = document.getElementById("c_description");
    categoryDescriptionElement.innerText = selectedCat?.description;
    const categoryTitleElement = document.getElementById("c_title");
    categoryTitleElement.innerText = params?.category;
    console.log(sotries.filter((story) => story.type === "animals"));
    const filteredStories = sotries
      .filter((story) => story.type === params.category)
      .forEach((el) => {
        const element = document.getElementById("story-cards");
        if (element) {
          element.insertAdjacentHTML(
            "beforeend",
            `<div class="story-card">
                        <img src=${el.image} />
                        <div class="cat-txt">
                            <h4 class="title-s">${el.title} </h4>
                            <div class="rating">
                                <h4>4.5</h4>
                                <img src="" />
                            </div>
                        </div>
                        <p class="description-s">${el?.description}</p>
                            <a href=${"story.html?id=" + el.id} class="view" >
                        <input type="submit" name="watch" value="مشاهدة" />
                                </a >
                    </div >`
          );
        }
      });
  }
})(window, document, undefined);
