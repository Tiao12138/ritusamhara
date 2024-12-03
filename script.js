document.getElementById('toggle-checkbox').addEventListener('change', (event) => {
  const romanContent = document.getElementById('roman-content');
  const devanagariContent = document.getElementById('devanagari-content');

  if (event.target.checked) {
    devanagariContent.classList.add('hidden');
    romanContent.classList.remove('hidden');
  } else {
    devanagariContent.classList.remove('hidden');
    romanContent.classList.add('hidden');
  }
});

function toggleColumn(colId) {
  const col = document.getElementById(colId);
  col.classList.toggle('hidden');

  const allColumns = document.querySelectorAll('.column');
  const visibleColumns = Array.from(allColumns).filter(column => !column.classList.contains('hidden'));

  allColumns.forEach(column => {
    column.style.flexBasis = '';
  });

  visibleColumns.forEach(column => {
    if (visibleColumns.length === 1) {
      column.style.flexBasis = '96%';
    } else if (visibleColumns.length === 2) {
      if (colId === 'col1') {
        column.style.flexBasis = column.id === 'col2' ? '64%' : '32%';
      } else if (colId === 'col2') {
        column.style.flexBasis = column.id === 'col1' ? '40%' : '56%';
      } else {
        column.style.flexBasis = column.id === 'col1' ? '40%' : '56%';
      }
    } else {
      if (column.id === 'col1') {
        column.style.flexBasis = '24%';
      } else if (column.id === 'col2') {
        column.style.flexBasis = '40%';
      } else {
        column.style.flexBasis = '36%';
      }
    }
  });
}
