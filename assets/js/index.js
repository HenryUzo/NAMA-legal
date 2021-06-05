
var owl = $("#event-carousel");
owl.owlCarousel({
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  margin: 50,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1300: {
      items: 4,
    },

    1900: {
      items: 4,
    },
  },
});

var owl = $("#announcement-carousel");
owl.owlCarousel({
  autoplay: true,
  lazyLoad: true,
  rewind: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 6000,
  smartSpeed: 500,
  margin: 50,
  loop: true,
  pagination:true,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1300: {
      items: 4,
    },

    1600: {
      items: 4,
    },
  },
});