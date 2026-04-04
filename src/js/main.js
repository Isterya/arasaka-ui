import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button')
  .eq(2)
  .on('click', () => {
    $('.w-500').fadeToggle(800);
  });

$('.wrap').html(
  `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Action #2</a>
            <a class="dropdown-item" href="#">Action #3</a>
        </div>
   </div>`
);

$('.dropdown-toggle').dropdown();

$('#trigger').click(() =>
  $('#trigger').createModal({
    text: {
      title: 'Modal title',
      body: 'Test Modal body',
    },
    btns: {
      count: 2,
      settings: [
        ['Close', ['btn-danger', 'mr-10'], true],
        [
          'Save changes',
          ['btn-success'],
          false,
          () => {
            alert('Data is saved');
          },
        ],
      ],
    },
  })
);
