# select-modul
1. Создать HTML шаблон:

  <div class="youClass">
    <button></button>
    <ul>
      <li>
        Вариант 1
      </li>
      <li>
        Вариант 2
      </li>
      <li>
        Вариант 3
      </li>
      <li>
        Вариант 4
      </li>
    </ul>
  </div>

2.Добавить style.css и загрузить файл modul.js
3.Импортировать modul.js в в свой файл script.js
4.Инициализируй Select:

const yourConst = new select('.yourClass')

5. Ниже запусти инициализацию добавив, при необходимости, параметры. Например:

youConst.selectInit({
  sizeList: 150,
  defaultSelection: 2,
  placeholder: 'Свой вариант',
  appearance: {
    placeholderColor: '#green',
    icon: './arrow.svg'
  }
});


sizeList - Указать высоту раскрываемого списка в px. 
По умолчанию стоит false и список раскрывается по максимальной 
высоте взависимости от количества и высоты элементов списка

defaultSelection - Номер выбранного значения по умолчанию начиная с 1. 
В ином случае значение будет placeholder по умолчанию(если не указан свой placeholder)

placeholder - В случае если defaultSelection не указан, можно указать 
какой placeholder. В случае если указал defaultSelection, переданный 
placeholder проигнорируется.

icon - Указывается путь до иконки local
