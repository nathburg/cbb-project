// imports
// auth related (checkAuth, signOutUser)
import { checkAuth, signOutUser, getCategories, createPost, getPost, deletePost } from '../fetch-utils.js';
import { renderCategoryOptions, renderPost } from '../render-utils.js';

const postContainerEl = document.querySelector('#post-container');

const params = new URLSearchParams(window.location.search);

loadData();


const user = checkAuth();
console.log(user);




async function loadData() {
    const postId = params.get('id');
    console.log(postId);
    const details = await getPost(postId);
    console.log(details);

    const detailsDiv = renderPost(details);
    postContainerEl.append(detailsDiv);

    if (user.id === details.user_id) {
        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.textContent = 'Delete Post';
        deleteButtonEl.addEventListener = ('click', () => {
            deletePost(postId);
        });
        postContainerEl.append(deleteButtonEl);
    }
}

// const signOutLink = document.getElementById('sign-out-link');
// checkAuth();
// signOutLink.addEventListener('click', signOutUser);

// const categorySelect = document.getElementById('category-select');
// const postItForm = document.getElementById('post-it-form');
// const addButton = postItForm.querySelector('button');
// const errorDisplay = postItForm.querySelector('.error');

// async function displayCategories() {
//     // go get the categories from the db
//     const categories = await getCategories();
//     // create a bunch of <option> elements
//     const options = renderCategoryOptions(categories);
//     // add them to the <select>
//     categorySelect.append(options);
// }

// // call on page load
// displayCategories();

// postItForm.addEventListener('submit', async (e) => {
//     // keep the form from changing the browser page
//     e.preventDefault();

//     // niceties for "saving" and errors:
//     // reset the error
//     errorDisplay.textContent = '';
//     // remember the button text
//     const buttonText = addButton.textContent;
//     // disabled button and change to "saving..."
//     addButton.disabled = true;
//     addButton.textContent = 'Saving...';

//     // get the data
//     const formData = new FormData(postItForm);
//     // and send to server
//     const response = await createPost({
//         title: formData.get('title'),
//         description: formData.get('description'),
//         category_id: formData.get('category_id'),
//         contact: formData.get('contact'),
//     });

//     const error = response.error;

//     // did it work?
//     if (error) {
//         // display the error
//         errorDisplay.textContent = error.message;
//         // reset the button to be active
//         addButton.disabled = false;
//         // restore the button text to what it was
//         addButton.textContent = buttonText;
//     } else {
//         // go back to bulletin board page
//         location.assign('../');
//     }
// });


