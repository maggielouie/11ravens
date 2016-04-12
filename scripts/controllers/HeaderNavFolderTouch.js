window.Template.Controllers.HeaderNavFolderTouch = ['element', function (element) {

  if (!document.documentElement.classList.contains('touch')) { return; }

  element.addEventListener('click', function (e) {
    e.preventDefault();
  });

}];