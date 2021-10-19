const picsumIds = [
  {
    id: 237,
    title: 'Puppy',
    src: '237.jpg'
  },
  {
    id: 433,
    title: 'Bear',
    src: '433.jpg'
  },
  {
    id: 577,
    title: 'Moose',
    src: '577.jpg'
  },
  {
    id: 582,
    title: 'Coyote',
    src: '582.jpg'
  },
  {
    id: 593,
    title: 'Tiger',
    src: '593.jpg'
  },
  {
    id: 659,
    title: 'Husky',
    src: '659.jpg'
  },
  {
    id: 718,
    title: 'Wolf',
    src: '718.jpg'
  },
  {
    id: 783,
    title: 'Monkey',
    src: '783.jpg'
  },
  {
    id: 790,
    title: 'Elk',
    src: '790.jpg'
  },
  {
    id: 837,
    title: 'Bulldog',
    src: '837.jpg'
  },
  {
    id: 1024,
    title: 'Bird',
    src: '1024.jpg'
  },
  {
    id: 1025,
    title: 'Pug',
    src: '1025.jpg'
  },
  {
    id: 1074,
    title: 'Big Cat',
    src: '1074.jpg'
  },
  {
    id: 1084,
    title: 'Walrus',
    src: '1084.jpg'
  }
];

let output = '';

picsumIds.forEach(function (imageId) {

  output +=

    `<a href="https://picsum.photos/id/237">
    <img src="images/md/237.jpg" alt="Puppy">
    </a>

    <a href="https://picsum.photos/id/433">
    <img src="images/md/433.jpg" alt="Bear">
    </a>

    <a href="https://picsum.photos/id/577">
    <img src="images/md/577.jpg" alt="Moose">
    </a>
    
    <a href="https://picsum.photos/id/582">
    <img src="images/md/582.jpg" alt="Coyote">
    </a>
    
    <a href="https://picsum.photos/id/593">
    <img src="images/md/593.jpg" alt="Tiger">
    </a>
    
    <a href="https://picsum.photos/id/659">
    <img src="images/md/659.jpg" alt="Husky">
    </a>
    
    <a href="https://picsum.photos/id/718">
    <img src="images/md/718.jpg" alt="Wolf">
    </a>
    
    <a href="https://picsum.photos/id/783">
    <img src="images/md/783.jpg" alt="Monkey">
    </a>
    
    <a href="https://picsum.photos/id/790">
    <img src="images/md/790.jpg" alt="Elk">
    </a>
    
    <a href="https://picsum.photos/id/837">
    <img src="images/md/837.jpg" alt="Bulldog">
    </a>
    
    <a href="https://picsum.photos/id/1024">
    <img src="images/md/1024.jpg" alt="Bird">
    </a>
    
    <a href="https://picsum.photos/id/1074">
    <img src="images/md/1074.jpg" alt="Big Cat">
    </a>
    
    <a href="https://picsum.photos/id/1084">
    <img src="images/md/1084.jpg" alt="Walrus">
    </a>`

});

const gallery = document.querySelector('.gallery');
gallery.innerHTML = output;