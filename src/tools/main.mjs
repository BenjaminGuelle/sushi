
export const handleActiveLink = (evt) =>
{
    links = document.querySelectorAll('.nav-item');
    links.forEach(item => {
        item.classList.remove('active');
    });
    evt.currentTarget.classList.add('active');
    console.log(evt.currentTarget);
}