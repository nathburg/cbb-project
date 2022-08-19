export function renderCategoryOptions(categories) {
    // document fragment is a "bag" for elements
    const fragment = document.createDocumentFragment();

    for (const category of categories) {
        const option = document.createElement('option');
        option.value = category.id;
        option.textContent = `${category.emoji} ${category.name}`;
        fragment.append(option);
    }

    return fragment;
}

export function renderPosts(posts) {
    const fragment = document.createDocumentFragment();

    for (const post of posts) {
        const linkEl = document.createElement('a');
        linkEl.href = `/post/?id=${post.id}`;
        console.log(linkEl.href);
        
        const li = document.createElement('li');
        li.classList.add('post-it');

        const titleEl = document.createElement('h2');
        titleEl.textContent = post.title;

        const categoryEl = document.createElement('span');
        categoryEl.classList.add('category');
        categoryEl.title = post.category.name;
        categoryEl.textContent = post.category.emoji;

        const descriptionEl = document.createElement('p');
        descriptionEl.classList.add('description');
        descriptionEl.textContent = post.description;

        const contactEl = document.createElement('p');
        contactEl.textContent = post.contact;

        linkEl.append(li);

        li.append(titleEl, categoryEl, descriptionEl, contactEl);

        fragment.append(linkEl);
    }

    return fragment;
}

export function renderPost(post) {
    const postEl = document.createElement('div');
    const titleEl = document.createElement('h1');
    const categoryEmojiEl = document.createElement('div');
    const categoryNameEl = document.createElement('span');
    const descriptionEl = document.createElement('p');
    const contactEl = document.createElement('div');

    titleEl.textContent = post.title;
    categoryEmojiEl.textContent = post.category.emoji;
    categoryNameEl.textContent = post.category.name;
    descriptionEl.textContent = post.description;
    contactEl.textContent = post.contact;

    postEl.append(titleEl, categoryEmojiEl, categoryNameEl, descriptionEl, contactEl);

    return postEl;
}